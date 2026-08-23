# The Gate That Remembers Your Face: What the CNN-to-Transformer Shift Actually Costs and Buys You

A companion essay covers the intuition behind CNNs and Transformers — detail to pattern to whole, versus relationship to context to meaning. This one picks up where that leaves off: not what the ideas *are*, but what they *cost*, and why "the newer architecture" isn't automatically "the right one" for a given job. We'll use the same anchor as before — a condominium gate that opens when it recognizes your face — to see what these architectures cost in practice, and where their advantages stop paying for themselves.

## What the Gate Is Actually Running

The camera converts your face into an embedding, a few hundred numbers, and the gate compares it against everyone's stored embeddings for the closest match — a **similarity search**. At the scale of one condo, that comparison is trivial; the interesting question is what produces the embedding in the first place, and for most of the last decade, the answer was a CNN.

## What a CNN's Design Choices Actually Buy You

CNNs make two deliberate bets. **Weight sharing**: the same filter gets reused across the whole image rather than learning a separate one per location — one reusable function instead of the same logic copy-pasted everywhere. **Locality**: each filter only looks at a small neighborhood at a time, on the bet that whether a pixel belongs to an eye depends mostly on nearby pixels, not ones in the far corner of the frame. As layers stack, that effective "receptive field" does widen, and a step called **pooling** shrinks the representation between blocks, making the network faster and a bit more tolerant of a feature shifting slightly.

What matters for engineering: these choices don't just make CNNs cheap to *train* — they make them cheap to *run*, which is exactly why a CNN could live comfortably on the modest chip beside a gate for years, low power, fast response, no server required.

One more structural fact worth being explicit about: both CNNs and Transformers are *deep* — many stacked layers, each refining what the last produced, not one pass. Depth is part of why these models work as well as they do, but every extra layer is also more computation, in training and at inference, on the gate's hardware, every time someone walks up. How many layers to use is a real engineering decision — more can mean better accuracy, but also more latency and silicon, and someone sizing a model for a small embedded chip has to make that trade explicitly.

## Where the CNN's Bet Starts to Cost You

The same locality assumption strains against long-range relationships. "The trophy didn't fit in the suitcase because *it* was too big" needs a word near the end connected to one near the start — a CNN can only get there indirectly, by stacking enough local layers for its receptive field to finally reach. And this isn't only a language problem: whether a pixel belongs to "a hand" can depend on context clear across the frame, not just its neighbors.

Text had its own dominant architecture before the Transformer, and it hit this same wall from the other direction. The **Recurrent Neural Network (RNN)** processed a sentence one word at a time, carrying forward a running summary — so a word early in a long sentence had to survive being repeatedly compressed and overwritten before it could influence something much later, often getting diluted along the way. It's largely obsolete now, but it's the architecture the Transformer actually replaced for language.

What the field needed was an architecture that could relate any two pieces of information directly, regardless of distance, and that could be trained with enormous parallel computation. That arrived in 2017: the Transformer.

## What a Transformer Actually Trains

Every input — word, sub-word, image patch — becomes a **token**, converted into a vector. Each token produces a **query** ("what I'm looking for"), a **key** ("what I contain"), and a **value**; every query gets compared against every key to score relevance, which determines how much of each other token's value blends in. What the network *learns* is a set of **weight matrices** producing those queries, keys, and values, reused across every position the way a CNN filter is reused across every location. But the actual *pattern* of who attends to whom isn't stored anywhere — it's recomputed fresh for each new input from those fixed weights. A CNN filter always looks at the same relative neighborhood; a Transformer's attention pattern depends entirely on content.

That gives Transformers two consequences that explain why they spread so fast. **Direct, long-range relationships** — any token can relate to any other in one step, no accumulated locality required. **Parallelization and scaling** — because every token's attention can, in principle, compute simultaneously, Transformers lean hard into modern hardware, and kept improving fairly predictably as researchers simply made them bigger and fed them more data. That scaling behavior is why the large language models reshaping software are Transformers underneath, not CNNs.

This every-token-against-every-token mechanic is also where the real cost lives — the flip side of the long-range advantage. Computation grows roughly with the *square* of input length: double the tokens, and attention gets roughly four times more expensive, not twice. That's the practical reason a Transformer can't just be handed unlimited context for free, and it's part of why relating something at the very start of a long document to something at the very end tends to get harder as that document grows, even when it's technically within reach in a single attention step. A CNN's local, fixed-size filters never pay that particular tax; it's the price of buying the ability to relate anything to anything.

## What the Gate's Network Is Trained to Do

Either architecture can be pointed at classifying, generating, translating — neither comes pre-loaded with "recognize faces." For face recognition specifically, the goal is **metric learning**: pull embeddings of the same person close together in that numerical space, and push different people apart, judged on relative distance rather than one "correct label." Your condo gate performs **verification** — does this one face match this one enrolled resident, a one-to-one comparison. **Identification** — finding who someone is among a huge, open population — is a harder problem your gate never has to solve, and it's where the extra capacity of a Transformer tends to earn its cost.

## Where the Training Actually Happens

A face-recognition model has nothing to do with a Large Language Model — one's a Transformer trained on text to predict language, the other's trained on images to produce good face embeddings; they may share an architectural family but are entirely separately trained. Training from scratch needs a large labeled dataset — historically hundreds of thousands to millions of images — real GPUs, and days to weeks. Almost nobody deploying a face gate does this themselves; the real chain is a large organization trains a general model on a huge dataset once, a vendor adopts and maybe lightly **fine-tunes** it for their hardware, it ships to the condo frozen, and enrollment is nothing more than running your photo through that unchanging model to produce and store an embedding — closer to adding a document to a search index than to training anything.

## Does "No Real Benefit Here" Hold Up?

Largely, yes. For a small, closed population on constrained embedded hardware, a well-tuned CNN or CNN-heavy hybrid is usually the more sensible engineering choice — not because a Transformer can't do it, but because its extra flexibility isn't worth much when the problem is already this small. Reaching for a full Transformer here is a bit like standing up a distributed database to store a grocery list. "Fast and it always works" mostly tells you the whole pipeline — camera, hardware, matching threshold — has been tuned for a small, closed population, where distinguishing a few hundred candidates is a much easier problem than distinguishing one face among billions, which is what most face-recognition headlines are actually about.

## A Checklist for When the Case Flips

Four things tend to tip the balance: how much labeled data exists, whether there's a hard latency budget, whether the task depends on relating *distant* parts of the input, and whether one backbone needs to serve several tasks or data types at once.

**Medical imaging** is a genuine trade-off. A radiologist's read often weighs a finding in one lung against the heart's shape clear across the frame — a long-range case Transformers suit well — but labeled medical data is scarce and expensive to produce, and Transformers tend to need more data than CNNs to match their accuracy. The field's actual answer is mostly hybrid: CNN layers for cheap, data-efficient low-level features, attention on top for long-range reasoning.

**Satellite imagery** is close to an unambiguous win: the same long-range case (does this river connect to one thirty kilometers away?), but with an enormous, growing, largely unlabeled supply of imagery — exactly the setting where a Transformer can pretrain at scale and fine-tune on a much smaller labeled task, with no embedded-latency constraint.

**Multi-camera fusion in autonomous driving** is fundamentally a "relate distant, differently-sourced information" problem — fusing several cameras, lidar, and radar into one scene. Data is abundant, and while there's a real latency constraint, the stakes justify the engineering effort to hit it, which is part of why some companies have moved from per-camera CNN pipelines toward Transformer-based fusion that lets the cameras inform each other directly.

**Multimodal image-and-text** is an obvious win almost by construction: the moment an image and text need to inform each other, you need one architecture that represents both as tokens attending to one another. A CNN has no natural mechanism for that at all — which is why nearly all current multimodal AI is built on Transformers.

Massive or fast-growing datasets, no hard millisecond budget, genuinely distant relationships, and (for multimodal especially) a need to unify different kinds of data — line those up, and the case for a Transformer stops being "probably worth the cost" and starts being "there isn't really a competitive alternative." When none of them line up, you get the condo gate, and a CNN stays the sensible default.

## What "Upgrading" the Gate Actually Improves

An upgrade can mean: fewer false rejects and accepts, from embeddings more stable across irrelevant variation (lighting, glasses, aging) while staying sensitive to what actually distinguishes people; better handling of hard cases — twins, masks, low light, a photo held up to spoof the camera; a genuine speed-versus-accuracy trade-off, not a free win, since swapping a tuned CNN for a naive Transformer could mean slower for the same accuracy or the same speed for better accuracy, which is exactly why hybrids exist; and potentially less enrollment fuss, since a better-trained model may need fewer registration photos. What doesn't change: the policy layer sitting on top — how close counts as "close enough," what happens on a failed match. Those are business decisions, not model improvements, and an upgrade can improve one dimension while leaving another unchanged.

## Why a Software Developer Should Care

This isn't just an architecture debate. **One architecture, many domains** — a Transformer doesn't inherently care whether its tokens came from words, image patches, or audio, which is a big part of why one wave of tooling swept across the whole software stack at once. **The scaling behavior that made "foundation models" possible** — because Transformers parallelize and scale so predictably, it became feasible to train enormous general-purpose models once and reuse them everywhere, the direct ancestor of "pretrained model plus your own data," and of the gate's own already-trained-plus-enrollment design. **Embeddings as a shared currency** — both architectures ultimately produce a vector representing "meaning," of a face, a sentence, a code snippet, which is what makes similarity search and retrieval possible across such different kinds of data. And, most usefully: **bigger and newer isn't automatically better for your problem**. The Transformer's real advantages — long-range relationships, scale, reuse across tasks — are genuine, but they come with a genuine cost: quadratic attention, heavier compute, more engineering effort on constrained hardware. Architecture should follow the actual constraints of the problem, not the hype cycle.

## Back to the Gate

Does your condo's gate use a CNN? Possibly, but it could just as easily be a lightweight Vision Transformer or a hybrid — the gate's behavior alone can't tell you which. What matters more: a model trained once, far upstream, by an organization with real data and compute; shipped frozen; enrolled through a process involving no training at all; running on local hardware with no need for the internet; performing one-to-one verification, not the harder identification problem; tuned for a small, closed population where speed and reliability matter more than the massive-scale accuracy a Transformer is built to chase.

CNNs assume useful information is mostly local, and build understanding gradually from a small neighborhood outward, at a cost that stays cheap and predictable. Transformers assume any two pieces of information might matter to each other regardless of distance, and pay a real structural cost — that quadratic attention bill — to let everything talk to everything else directly. Neither assumption is universally correct. The AI revolution didn't retire one in favor of the other; it expanded the menu, and left the choice, as always, to whoever is closest to the problem's real constraints. That trade — expensive and flexible versus efficient and locally biased — runs underneath the entire AI revolution in software development, visible in something as small as a gate lifting for your face.

*There's a companion essay that turns to the domain Transformers were actually built for — language — and walks through how attention, layered up and repeated, turns into the context window, and eventually into a coherent, generated answer.*
