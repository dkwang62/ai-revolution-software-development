# Understanding Transformers: From Layers to Context and Coherent Language

*This picks up from two companion essays — one on the intuition behind CNNs and Transformers, one on the engineering trade-offs between them — and turns fully to the Transformer's home ground: language.*

Transformers, like CNNs, are built from layers: information enters, gets transformed, passes to the next layer, gets transformed again. What differs is the mechanism doing the transforming — convolution for a CNN, **attention** for a Transformer. With a CNN, we picture zooming out on a photo: edges become an eye, a nose, a face. A Transformer builds richer representations layer by layer too, but instead of asking what visual patterns exist nearby, each layer asks which pieces of information are relevant to which others.

Take: "The bank raised its interest rate because it feared inflation." The word "it," alone, carries almost no information about what it refers to — we resolve it by relationship, "it" to "bank," "bank" to "interest rate," "interest rate" to "inflation." Discovering exactly these relationships is what attention does.

## Attention and Context

Text first gets broken into **tokens** — a whole word, part of one, punctuation — and each becomes a vector, a list of numbers, through **embedding**. Through attention, every token weighs how relevant every other token is to its own meaning. "Bank" in "I deposited my money at the bank" leans on "deposited" and "money"; "bank" in "We sat on the bank of the river" leans on "river." Same word, two different representations, built entirely from context.

This is also the clearest way to see what Transformers replaced: the **Recurrent Neural Network (RNN)**, which read a sentence in order, carrying forward one running summary. Information from early on had to survive that whole chain to still matter later, and a lot could get diluted along the way. A Transformer skips the chain entirely — a word near the end can attend directly to something near the beginning — and can weigh relationships across many tokens within the same layer, essentially in parallel.

## What the Layers Add

A Transformer doesn't run attention once and stop. Each layer's output feeds the next, and each pass refines every token's representation in light of what the last pass found. Borrow the CNN's zoom intuition carefully here: in a CNN, going deeper means combining information across a *wider* area. In a Transformer, attention can already connect distant tokens even early on — what deepens instead is how thoroughly those relationships get reconsidered. Tokens turn into relationships; those get folded into richer representations; what comes out is a broader contextual understanding of the whole passage.

The important word is *representation*. A layer doesn't produce "this paragraph is about inflation" in plain English — it produces vectors, numbers later layers can use. If a whole book fits inside what the model can look at at once — its **context window** — information from one chapter can shape how it reads another. That doesn't mean the model distills the book into one "meaning of the book" summary; it means each token's representation can be shaped by relevant information from elsewhere in the book. This gives us a clean split: a CNN is intuitive in terms of *spatial* context, how visual information relates to its surroundings; a Transformer is intuitive in terms of *relational* context, how one piece of information should be read in light of whatever else turns out to be relevant, wherever it sits.

## The Context Window

The context window is everything available to the model in a given interaction — the prompt, plus any instructions, retrieved material, or prior conversation carried along. If a book fits inside it, the model can draw on material from any chapter while answering a question about it — a genuinely different act than reading the final paragraph in isolation. But fitting inside the window isn't the same as understanding every part equally well; a very long context makes details easier to overlook, and attention doesn't always land perfectly on what matters most.

That distinction matters for understanding modern AI systems generally, because there are really three separate sources of information: **weights** (what the model learned during training), **context** (what's available right now), and **tools** (ways the system can go fetch more — search, a database — bringing new material into the context rather than the weights).

## From Context to an Answer

How does all this produce a coherent answer? Not by composing the whole thing internally and revealing it — a language model generates one token at a time. Ask "Why did Germany lose the Second World War?" and the question gets tokenized and processed, attention lets the tokens inform each other, and the model calculates a probability over what comes next. Say it picks "Germany." That word instantly becomes part of the context, and the model faces a fresh version of the same problem — what follows the question plus "Germany"? Maybe "lost." Now the context includes "Germany lost," and the cycle repeats, each token folding into the material for producing the next.

This is an important qualification to "Transformers process in parallel": the *prompt* can be processed with parallel attention across every position at once, but *generating* the answer is still sequential, because token one hundred depends on the ninety-nine tokens already written.

## Why "Next-Token Prediction" Is Misleadingly Simple

The phrase makes the computation sound simpler than it is. Finish this: "The Allied bombing campaign damaged German industrial capacity, but the more decisive problem was…" — a good continuation needs grammar, what "but" is doing, Germany, industrial production, cause and effect, and a sense of how historical explanations get built. To predict what comes next in real language well, a large enough network ends up needing to represent a lot of the structure *beneath* language — grammar, concepts, relationships, facts, patterns of reasoning — none of it programmed in explicitly. It emerges because representing it reduces prediction error, and reducing error is the entire target of training. "Paris is the capital of…" reliably predicting "France" requires some real representation of that specific relationship, not just a vague sense that cities precede countries — and "Paris is the capital of France, while Marseille…" shifts the right continuation immediately, because the context shifted.

## Training Supplies the Knowledge Behind the Prediction

The architecture gives the machinery for handling relationships and context — it doesn't contain historical knowledge on its own. A model that genuinely never encountered relevant text about WWII, with none supplied in the prompt, simply couldn't answer reliably. In the ordinary case, though, the model saw enormous amounts of relevant text during training, and training repeatedly adjusted its weights — predict, measure the error (the **loss**), work backward with **backpropagation**, adjust — until useful relationships became embedded throughout the network. What comes out isn't a database entry reading "Germany lost for reasons A, B, C." Knowledge is distributed across the weights; the prompt activates and combines the relevant parts of that structure, attention relates everything currently in context, and token-by-token generation turns it back into language.

## What Happens When the Model Doesn't Know Something?

Two other routes exist. First, put the information directly into the **context** — hand a model a detailed history and ask it to draw three conclusions from that material, and it doesn't need the facts pre-loaded into its weights at all. Second, give it **tools** — it searches the internet, results come back, and relevant material gets folded into its context, processed exactly like anything else sitting there. The model isn't reaching out across the whole internet; the search happens first, as a separate step, and only what comes back gets seen. Weights, context, and tools — keeping those three apart explains a surprising amount of how these systems actually behave.

## How Coherence Builds Upon Itself

There's one more reason token-by-token generation stays coherent: the answer becomes part of its own context as it's written. "Germany's defeat resulted from three major factors" commits the model to producing exactly three; "First, Germany…" adds another structural signal; "Second" becomes highly appropriate given everything written so far, and eventually so does "Third." None of this needs an explicit rule — the model has simply seen enormous numbers of real enumerations and essays during training, and been further trained during **post-training** to follow instructions and stay organized. Each stage of output reshapes the context for the next prediction. The model isn't planning the whole paragraph before writing the first word; coherence emerges because every good continuation leaves behind a better-defined context for whatever comes after it.

## Structure, Format and Style

A model also absorbs, from training, that different communication carries different shapes — an essay doesn't look like a shopping list, code doesn't look like a letter. "Give me three reasons Germany lost WWII" pushes toward three distinguishable causes; a two-thousand-word essay on the same topic pushes toward something else; explaining it to a twelve-year-old in one paragraph, something else again. The Transformer underneath might be identical — what's shifting is the context conditioning what gets generated, shaped further by post-training and by whatever standing instructions a product adds. That's part of why two assistants built on similar Transformer foundations can read very differently — one leaning toward continuous prose, another toward headers and bullets — without any deep difference in how attention works.

## The Transformer Is Both Parallel and Sequential

This resolves an apparent contradiction. Processing an existing prompt, the model can calculate attention across every position more or less simultaneously. Generating new text, each token has to be produced before the next, because the next depends on everything written so far. Prompt processing: highly parallel. Autoregressive generation: fundamentally sequential. Both true, about two different stages of the same process.

## Returning to Human Intuition

A CNN's intuition is a photograph: focus on a detail, then shift perspective until it resolves into a larger structure. A Transformer's is a book: no sentence understood in isolation, each one making sense because of the sentences around it, a line in the conclusion carrying weight because of what the opening chapter established. Human understanding constantly moves between one piece of information and what it means in relation to everything else — and attention is what gives a Transformer a computational way to build representations out of exactly that kind of relationship. Neither comparison should be pushed too far; Transformers don't read the way people do, any more than CNNs see the way a visual cortex does. But as intuitions, both earn their keep: a CNN progressively builds the bigger picture out of patterns, a Transformer progressively builds meaning out of relationships and context.

A language model adds one last step: having built rich contextual representations, it converts them back into language one token at a time, each new token folding immediately into the context for producing the next. The full chain — prompt, tokens, attention, layers of contextual representation, a probability over what comes next, one token generated, a new and slightly richer context, repeat — is why the output reads as planned and coherent. Not because the model wrote the whole thing out internally before showing you the first word, but because each token is generated from an extraordinarily rich combination of everything learned in training, everything currently in context, and everything already written so far in this very answer.

*One question this leaves open: if attention and the feed-forward network inside each layer are just building richer and richer context, where does actual reasoning — tracing a chain of logic, catching a mistake, working through a hard problem step by step — fit into that picture? That's the subject of the next essay in this series.*
