# The Fossil Record of Thought: What Language Models Actually Learn From

## Language as sediment, not source

There is a seductive shorthand that gets repeated every time someone tries to explain how large language models work: *they just predict the next word*. It is not wrong, exactly. It is wrong the way "a human is just a bag of chemical reactions" is wrong — technically accurate, and almost useless as an explanation of anything interesting the system does.

The more illuminating way to think about it is this: language is not the thing a model learns. Language is the *sediment* left behind by something else — the accumulated residue of human beings colliding with a physical world, forming beliefs about it, testing those beliefs, and occasionally writing down what they learned. A book about bridge engineering is not really "about words." It is the residue of engineers watching bridges fail, revising their assumptions, and compressing decades of costly trial and error into a few hundred pages someone can read in an afternoon. A legal textbook is the residue of centuries of disputes, harms, and negotiated resolutions. A cookbook is the residue of thousands of kitchens where something burned, something worked, and someone wrote down which was which.

When a model trains on "text," what it is actually doing is sifting through sediment for the shape of the events that deposited it — the way a geologist reads rock strata to infer floods, eruptions, and ice ages she never witnessed.

## The filtering problem, and why it isn't purely a loss

Reality happens. A subset of it is perceived by a human nervous system built for survival, not fidelity. A subset of what's perceived gets attended to consciously. A subset of what's attended to gets encoded into memory, already distorted by prior belief. A subset of memory gets written down, shaped further by language's own limitations, by audience, by genre and convention. And of everything ever written, only a subset survives, gets digitized, and makes it into a training set:

**Reality → embodied perception (lossy) → attention (selective) → memory (reconstructive) → language (compressive) → publication (curated) → digitization (partial) → training data → model**

It's tempting to draw each arrow as pure subtraction, as if every step only throws information away. That framing understates what actually survives.

A sentence carries far more than the claim it explicitly states. "John dropped the glass onto the concrete floor and it shattered" never says that glass is brittle, that gravity pulls objects downward, that concrete is harder than glass. But all of that has to be true for the sentence to make sense, and it's recoverable from the sentence even though no one wrote it down. Every account of an event carries implicit structure well beyond its stated content: the assumptions too obvious to mention, the causal sequencing embedded in word order, the context revealed by connotation. The explicit content of a record is a small fraction of what's actually encoded in it.

This matters more once you stop looking at one record and start looking at millions of them. Any single account is lossy and biased in its own particular way — one writer's sloppy phrasing, another's outdated belief, a third's idiosyncratic metaphor. To the extent those distortions are idiosyncratic rather than shared, they tend not to reinforce one another, and structure that recurs across otherwise-unrelated accounts is more likely to reflect something real than to be one writer's quirk repeated by chance. This is the same logic behind why independent witness testimony carries more weight than a single confident witness, and why science trusts a result replicated by unrelated labs more than the same result reported once.

The important qualifier is *to the extent*. Human errors are often not independent at all. Writers share cultures, institutions, sources, and educations, and they sometimes inherit and repeat the very same misconception. Independent errors tend to cancel under aggregation. Shared errors don't — they get reinforced by every repetition, and look, from the outside, exactly like a well-supported fact. That distinction matters enough to return to later; for now it's worth simply naming as a live caveat, not a footnote to dismiss.

With that caveat in place, the picture that emerges is this: every individual record is lossy and biased in its own particular way. But each also carries far more implicit structure than it states outright. Aggregate enough differently-filtered records, and recurring structure begins to emerge — including relationships that were never stated verbatim in any single source, and that perhaps no individual writer ever consciously articulated. The record isn't simply thinned reality. It's compressed at the point of writing, and then partially reconstructed by the scale and diversity of everyone else who separately wrote something related.

## Relevance: filtered for a purpose, not just by one

There's a second correction the sediment metaphor needs, and it's arguably the more interesting one: human records don't merely filter reality. They filter it for relevance.

An engineer investigating why a bridge failed doesn't record the ambient humidity, the color of the workers' hats, or the phase of the moon that day, even though all of those were also true facts about the event. She records load, material fatigue, and design tolerance — the facts relevant to not building another bridge that falls down. That filtering wasn't a failure to capture reality. It was a successful act of judgment about which parts of reality mattered for the purpose the record would serve.

That judgment is more subtle than it first looks, because relevance isn't an intrinsic property of a fact — it depends entirely on purpose. The humidity that's irrelevant to a structural-failure report could be the single most important fact in a corrosion investigation of the same bridge. So what a corpus of human records actually contains isn't just "relevant facts." It contains countless instances of the *relationship* between a situation, a purpose, and what counted as relevant to it — a relationship exercised by millions of writers, across millions of contexts, usually without any of them consciously theorizing what they were doing.

This changes what "understanding the world" needs to mean for a system trained on this kind of record. It isn't recovering some purpose-neutral, maximally complete model of reality — nothing in the training data was generated with that goal, and no amount of aggregation conjures facts nobody bothered to record because nobody needed them. What's recoverable, and what's actually useful, is something closer to the human sense of what matters for what: the tacit pattern, repeated across purposes ranging from a bridge failure report to a recipe to a bedtime story, of what a given kind of situation calls for and what's noise relative to it. Get this wrong — surface an irrelevant fact in a contract summary, or omit the one number a doctor actually needed — and a record can be true and still useless. Get it right, and a short, selective answer beats an exhaustive one, because exhaustiveness was never what reality's record-keepers were optimizing for in the first place.

## Why prediction rewards models of the world

This reframing is what makes "just predicting the next token" such a strange kind of "just." One powerful way to compress rich, contradictory data is to capture the recurring structure that helps generate it, rather than memorizing every surface pattern separately.

Take "John dropped the glass onto the concrete floor and it —." A system that memorized surface co-occurrence would need an enormous, ad hoc table covering every droppable noun crossed with every surface and height. A system that instead captures something like brittleness, momentum, and impact energy gets all of those sentences for free, including combinations no single source ever stated. As prediction becomes more demanding, there is increasing pressure to capture some of the structure and reasoning that generated the data, rather than relying entirely on surface association — because that structure is very often the shorter, more efficient description of what's being predicted.

That's a reasonable answer to "how can autocomplete produce something that looks like reasoning?" It's also not an ironclad guarantee, which is worth stating plainly before the next section makes the point at length: models demonstrably do find shortcuts, and pressure toward abstraction is a tendency, not a law.

## Where the analogy still breaks

None of the above licenses the leap to "aggregation recovers ground truth." It recovers whatever structure is common across sources, and that isn't automatically the same thing as what's true.

Convergence across sources tells you the sources agree, not that they're correct. This is exactly where the independence caveat from earlier comes back to matter. Independent errors may cancel. Shared errors don't — a myth repeated by thousands of writers who all learned it from the same cultural source converges exactly the way a real regularity does, and a method that works by finding what recurs has no built-in way to tell the two apart.

There's a further asymmetry worth being precise about. A human expert has an additional source of evidence: direct experience of the world. A model trained only on records has no independent sensory channel against which to test the record — no way to notice, the way a person can, that a claim doesn't square with something directly lived. A model's confidence also doesn't reliably drop when the underlying claim is a shared myth rather than a triangulated truth, the way a careful human's hedging often signals genuine uncertainty.

None of that amounts to a demand for perfection. The right standard was never "matches absolute truth" — that standard fails human experts too. The reasonable expectation for a system built this way is the same one already extended to a sharp, well-read, experienced person: reasoned, well-informed, correctable, and right often enough that trusting its judgment beats ignoring it. The real gap isn't "capable of error" — everything is. It's the missing feedback loop between output and reality that lets a person catch their own mistake before saying it aloud, and the fact that trust in any single claim is something to build the normal way, by checking it, rather than granting wholesale on the strength of one fluent answer.

## The next filter: from records to direct experience

Everything so far describes a single pathway: reality reaches a model only after passing through human perception and human writing.

**Text:** Reality → human perception → human record → model

Multimodal and embodied systems open a different, more direct pathway. A video of glass shattering isn't filtered through anyone's vocabulary or narrative choices; it's much closer to the event itself.

**Video:** Reality → camera → model

And a robot that has actually dropped ten thousand objects goes further still — it doesn't just observe more directly, it can also act and then observe the consequences of its own action:

**Robotics:** Reality → sensor → model → action → reality

That last pathway is not simply "more direct observation." It closes a loop that text-only training never has: observe, predict, act, observe the consequence, update. That loop is precisely the thing missing from the earlier discussion of limitations — the independent check a human has through direct experience, and a purely text-trained model doesn't. A system that can touch the stove, so to speak, and register the result, is no longer relying entirely on triangulating across other people's accounts of stoves. Each rung of embodiment climbed shortens the distance between reality and the training signal, and the robotics case is qualitatively different from the video case for exactly this reason: it's the first pathway where the system's own experience, not just its observation, becomes part of the record.

## The upshot

There are, in the end, three distinct kinds of compression stacked on top of each other in this story, and naming them is probably the clearest way to hold the whole argument at once.

Human records compress reality: *reality → a written account.* The corpus compresses collective human experience further: *millions of individually compressed accounts → recurring structure.* And the model compresses the corpus once more: *corpus → parameters.* At every stage, detail is lost. But at the aggregation stages — corpus formation, and then model training — relationships can become visible that were never explicit in any individual record. Compression loses detail. Aggregation can reveal structure. Holding both of those sentences at once, rather than picking one, is the actual heart of the argument.

Language is one of humanity's great technologies for accumulating experience across minds and generations. People who never met, never coordinated, and never imagined their words would someday be combined nonetheless left behind fragments of experience that can be aggregated into something larger than any single contributor knew. And what they preserved wasn't simply facts. It was judgments about relevance — what mattered, what could be omitted, what caused what, what one human would need another to know for a given purpose.

Judged against the standard of unmediated access to truth, a system built entirely from this record falls permanently short — but so does every human expert who ever lived, since no mind gets reality unfiltered. Judged against the standard we actually apply to a well-read, careful, experienced person — reasons well from an imperfect record, flags what it doesn't know, earns trust claim by claim rather than by declaration — the compressed fossil record of human experience turns out to be a remarkably rich thing to learn from. It is not the world. It is the closest thing to the world that anyone, or anything, has ever managed to write down.
