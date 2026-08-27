# From DNA to a Machine-Native AI
## Can a Model Discover Its Own Abstraction Layer?

A sentence is a sequence of words. A genome is a sequence of DNA letters. A computer program, at the level a processor actually reads it, is a sequence of instructions too. That's a tidy coincidence, but it's not the interesting part. A genome by itself doesn't do anything — it has to be read and acted on by something. That something is the cell, a system that executes biological information the way a computer executes code.

Once that's on the table, the question changes. It's not just "can an AI learn the patterns in DNA?" — genome models already do that reasonably well. It's: can an AI learn the rules by which DNA becomes a living thing? And if it can, a bigger question follows: can the model figure out useful concepts on its own, without anyone teaching them to it first? Biology has become more than a metaphor for what's happening in AI. It's a real experiment in what intelligence looks like when it's trained directly on a complicated system, instead of on human descriptions of that system.

[![From language and DNA through virtual cells and machine code to machine-native AI](<figures/FIG-SC-01 From DNA to Machine-Native AI.png>)](<figures/FIG-SC-01 From DNA to Machine-Native AI.png>)

## From Language to DNA

Modern language models started from a simple training game: show the model part of a sentence, ask it to guess the next word, repeat that billions of times over an enormous amount of text. To get good at that narrow guessing game, the model has to figure out patterns for itself — some small, like which words tend to follow which; some much bigger, spanning whole paragraphs. Nobody hands it a dictionary of concepts in advance.

Swap words for DNA letters and the idea holds up well. A genome is built from four symbols — A, C, G, and T — and genome models such as Evo have shown that training on next-letter prediction doesn't just teach a model to guess letters. It picks up real biological structure along the way.

But the comparison has a real limit. A computer program is read by one well-defined system, a processor. DNA is read by something far messier: a living cell. The exact same DNA sequence can do something completely different depending on which type of cell it's in, which genes and proteins happen to be active nearby, and what the cell's environment looks like. DNA isn't the whole program. It only makes sense once you plug it into the extremely complicated machine running it — the cell.

## The Cell Is the Missing Layer

The idea of a "virtual cell" gets interesting here, because it asks a question the simpler "DNA is just a sequence" framing lets you avoid: if DNA is the information, what's the computer that actually runs it?

The honest answer isn't just "the cell" — that undersells how much work it's doing. A cell is, all at once, the processor, the memory, the factory that builds things, the network that carries signals between components, and the physical environment everything happens inside. Genes switch on and off. RNA gets built and broken down. Proteins get assembled and shipped where they're needed. Much of the resulting behavior isn't written down in the DNA as an explicit instruction — it emerges from how these pieces interact.

This has a genuine parallel in computing, worth spelling out once in full. A programmer writes `total = price * quantity`. That means something clear to them: multiply price by quantity. But the processor never sees that idea. By the time the code reaches it, a compiler has translated it into raw instructions — move this number into this memory slot, multiply two registers, store the result. The processor deals only in registers, addresses, and voltages; it has no concept of "price" at all. A program's actual behavior depends on the processor, the memory, the operating system, and several layers stacked underneath the line you wrote — not on that line by itself.

DNA doesn't fully explain the cell, any more than one line of code fully explains what the processor is doing. In both cases the sequence alone isn't the interesting object. What matters is the sequence plus the machine reading it plus everything that machine does as a result.

## The Virtual Cell Experiment

This isn't just a thought experiment — someone is building it. Silvana Konermann, co-founder and executive director of the Arc Institute, spent years before that as a CRISPR researcher, helping develop tools that let scientists precisely turn genes on and off. She's now leading an attempt to build an AI model that predicts how a cell responds when you deliberately change something about it.

Arc calls this the Virtual Cell Initiative: a model that predicts how a cell's behavior shifts when it's disturbed — genetically, chemically, environmentally — across many cell types, with an eventual goal of learning how to nudge a diseased cell back toward health. The project received just over a billion dollars in funding in 2025 specifically to scale this up, with a plan to run more than a billion individual cell experiments and turn the results into the most complete cause-and-effect dataset of its kind, built specifically for training this kind of model.

The comparison to a language model is deliberate. A language model learns patterns in human language; a virtual cell model is trying to learn patterns in the "language" of cells. But Arc isn't just trying to predict what a cell looks like in a snapshot. It's trying to predict what happens when you change something about it — a harder and more interesting problem, and the one this chapter actually cares about.

## From Observation to Intervention

Suppose you're watching a cell and measuring a few thousand genes. You notice that whenever gene A is highly active, genes B, C, and D also tend to be active. Useful — but it's correlation, and it doesn't tell you why.

Now deliberately suppress gene A and measure the cell again. Maybe B drops, C rises, D barely moves. That's closer to cause and effect. Suppress the same gene in a different cell type and the response might look completely different. Change two genes at once and the combined effect might not simply add up. This is the real difficulty of biology: the number of possible experiments — genes, combinations, cell types, doses — is far too large to test one at a time in a lab. The virtual-cell approach is to learn enough of the underlying pattern from real experiments that the model can predict the outcome of experiments nobody has actually run.

## From Encyclopedia to Simulator

Put together, this reframes what a virtual cell is trying to be. A language model learns a model of language. A virtual cell is trying to learn a model of change — current state, then a deliberate intervention, then a predicted new state, then a real measurement to check the prediction, then a correction based on how far off it was. That loop has more in common with the kind of learning used in robotics and game-playing AI than with ordinary next-word prediction: not just absorbing a description of a system, but learning how the system moves through time when it's disturbed.

That loop also determines where the training data has to come from. A language model inherits a head start — humans have been writing for thousands of years, so text is already sitting there to train on. Biology comes with no equivalent stockpile. Nature never wrote a textbook explaining why one gene controls another; scientists have to generate that information themselves, one experiment at a time, which makes building a virtual cell partly a data-generation problem before it's a modeling problem.

That opens a real feedback loop. A model can be used to spot where its own predictions are least confident, suggest the specific experiment most likely to resolve that uncertainty, have a lab actually run it, and feed the result back in to improve — which then exposes a new gap, and the cycle repeats. At that point AI isn't just reading science faster than a human could. It's starting to influence which experiments get run in the first place, a considerably bigger claim than "AI can read papers quickly."

## Finding the Right Abstraction

A model doesn't have to capture every detail of reality to be useful. A weather model doesn't simulate every molecule in the atmosphere; a flight simulator doesn't track every electron in an aircraft's wiring. A model only needs to keep whichever part of reality matters for the question being asked of it.

That points at something worth carrying through the rest of this chapter: intelligence might partly be the skill of finding the right simplified version of a system. A perfect simulation of a cell would be impossibly complicated to build, let alone run. A useful virtual cell just needs to preserve enough of the cause-and-effect structure to answer the questions people actually care about — which is exactly what a good abstraction does. It throws away detail that doesn't matter and keeps what does.

This is really what the whole chapter is about, underneath the DNA and the cells and the machine code. The deepest question isn't whether AI can learn our abstractions. It's whether our abstractions are the ones AI would have invented for itself, if nobody had handed them over in advance.

Historically, the sequence has always run one direction: humans observe reality, humans invent abstractions, humans encode those abstractions into languages and tools, and machines operate through them. The genuinely speculative possibility this chapter is circling is a different sequence entirely: an AI observes a system and its consequences directly, and discovers its own abstraction, and reasons through that instead.

A concrete example helps here, because "abstraction" can sound abstract in exactly the wrong way. A heart is an abstraction — when you talk about what a heart does, you don't think about billions of molecular interactions, you just think "it pumps blood." A function, in programming, is the same kind of shortcut: you don't think about the thousands of processor operations a function call triggers, you just think about what the function does. An abstraction is simply a useful higher-level idea that lets you ignore a mountain of lower-level detail. The question worth asking is what abstractions an AI would invent for itself, if nobody handed it "heart" or "function" in advance — and whether we'd even recognize them as useful once it did.

## From Biology to Machine-Native AI

Both biology and computing hide what's really happening underneath a much simpler surface story. In biology, DNA becomes RNA, RNA becomes proteins, proteins interact by the billions, that produces the behavior of a cell, cells build up into tissues and organs, and eventually an organism results — none of those steps optional, all of them the actual mechanism behind the shorthand "DNA makes an organism." Computing hides the same kind of thing, built by humans instead of evolution: the `price * quantity` line from earlier gets compiled down through several layers before it becomes voltages and registers, none of which know anything about "price."

Neither set of hidden layers was designed with an AI's understanding in mind. Evolution wasn't building cells for AI to later analyze — it was optimizing purely for survival. And even though humans did design programming languages and processors on purpose, we designed them for human convenience, not for whatever representation would actually be most efficient for a machine to think in.

That sets up a real experiment. Train an AI on raw DNA sequences and what happens as a result, without hints about genes or regulatory regions — does it invent its own version of those concepts, or something else? Train an AI on cell states, the changes made to them, and what happened afterward — does it discover cause-and-effect relationships on its own? Train an AI purely on machine instructions and what they do when run, without teaching it about functions or loops — does it invent its own useful equivalents? These aren't three separate questions. They're one question in three costumes: given nothing but a low-level sequence and the real consequences it produces, can a learning system discover, on its own, the higher-level concepts that make those consequences predictable?

One caveat is worth holding onto here rather than letting the argument run ahead of itself. A model can predict something correctly without having anything close to the causal understanding a scientist would claim. Arc's 2026 Virtual Cell Challenge is built specifically to probe that gap, asking models to predict a cell's response in a cell type they've never seen perturbed before — a real test of generalizing to something new, not memorizing familiar patterns. Success there would mean the model carried genuine biological structure into an unfamiliar situation. It wouldn't prove the model found the actual mechanism a biologist would recognize; it might just have learned an extremely effective shortcut. A model can get the right answer well before it has anything resembling an explanation for it.

That reframes the question this chapter has to ask about machine code, too. Not "what happens if we train an AI on machine code," which treats code the way an early genome model treats DNA — a sequence to pattern-match — but: what happens if we train an AI directly on the relationship between machine instructions and what those instructions actually cause? DNA alone wasn't enough to explain a cell. Machine code alone may not be enough either. In both cases the useful signal isn't the sequence sitting there by itself. It's cause and effect: change the gene, watch the cell; change the program, run it, measure what happens.

The computing version of that loop has one advantage the biological version doesn't: it's dramatically cheaper and faster to run — which may make computation an unusually good environment for an AI to discover its own concepts in, even better in practical terms than biology, though biology is what made the whole idea concrete in the first place.

## The Environment Becomes the Teacher

Most AI training still means learning from a fixed pile of data collected in advance. A system connected to a live environment can learn from consequences instead, and the same basic pattern shows up almost unchanged across very different fields. A coding AI writes a program, compiles it, runs it, tests it, measures its speed, and revises. A biology AI proposes a change to a cell, predicts what will happen, has the experiment run, measures the real result, and updates. A robot tries an action, watches what happens, and adjusts. An engineering AI designs a part, simulates it, tests it, and redesigns. Strip away the field-specific vocabulary and the loop is identical: try something, see what happens, learn from it. That loop may matter more to the future of AI than the usual categories of language models, vision models, and biology models, because it's a claim about how a system learns, not about which kind of data it happens to be fed.

## The Great Advantage of Computation

Biology's version of that loop carries a cost computing doesn't. Biological experiments are slow, expensive, and sometimes impossible to run for ethical reasons — a cell may take hours or days to respond, an organism can take years, a clinical trial longer still. Computers don't share that constraint. A candidate program can run millions of times in an afternoon; a compiler can test thousands of optimizations before lunch; a simulator can explore billions of states without anyone waiting on a lab result.

Picture a model generating ten thousand candidate versions of a sorting program. Each compiles and runs immediately. The ones that don't work get discarded on the spot. The survivors get measured for speed and efficiency, and the best become training examples for the next round. Repeat that cycle enough times, and the model stops learning mainly from human descriptions of what good code looks like. It starts learning from code that has actually been tested and shown to work.

## Human Abstractions and Machine Abstractions

Human civilization has spent centuries building layers of abstraction for computing — programming languages, compilers, operating systems — and they're genuinely powerful. They let ordinary people control machines without understanding a single transistor. But they were built around human limitations: human hands, human short-term memory, human patience for detail. They weren't built around whatever representation would actually be most efficient for a machine to think in. A machine doesn't necessarily need "price" and "total" as separate concepts the way a programmer does. A sufficiently capable AI might land on its own representations — hard for a person to read, extremely effective for prediction and design.

So the real question isn't whether AI will replace programming languages. It's whether AI could discover computational concepts better suited to machines than the ones humans built for their own convenience. Biology gives real reason to take that seriously: evolution never designed cells with human comprehension in mind. It produced mechanisms that simply worked, judged purely by whether they helped something survive and reproduce, with no regard for whether a person could later make sense of them. Whatever concepts are embedded in biological systems were never obligated to be the ones a human engineer would have chosen.

## Three Ways AI Can Know the World

Seen this way, the argument suggests three increasingly direct relationships between AI and reality.

**Language-native AI** learns from human descriptions of the world and produces human-readable answers back — where most of today's large language models live.

**Domain-native AI** learns directly from the structure of a specific domain rather than from a human's description of it. Genome models like Evo, and virtual-cell models like Arc's, are early examples: learning from the domain itself, not a summary of it.

**Reality-native AI** learns continuously from acting and seeing what happens, rather than from any fixed dataset at all — it acts, the world responds, the response gets measured, the model updates, and it acts again, in a loop with no natural end point. Here the model isn't mainly learning what humans wrote about the world. It's learning what the world does when touched.

It would be a mistake to end on the idea that machine-native AI simply replaces language models. The more interesting possibility is that all three end up working together, each supplying something the others can't: language tells you what a person actually wants, domain-specific models understand how the underlying system works, and reality is the only honest judge of whether an attempt succeeded. A full architecture might run: intent expressed in language, translated into a plan; the plan handed to whichever domain-specific model understands the system in question — genetic, cellular, computational; that model produces an action or design in its own native representation; the result tested against reality itself, with the outcome fed back to correct every layer above it. Language becomes the interface to what people want. Domain models become the specialized reasoning engines. Reality becomes the judge.

## From DNA to Machine-Native AI

The story starts with DNA because DNA demonstrates something striking on its own: a four-letter alphabet can encode staggering complexity. But DNA alone doesn't explain life — life comes from DNA interacting with an elaborate physical system built around it, which is why the virtual cell comes next: a serious attempt to learn that system directly, not just the sequence but what happens when the sequence is disturbed. Only then does it make sense to turn to machine code, where the environment is far easier to work with and a model can try candidate designs millions of times over with an immediate, precise readout of what happened — an unusually good laboratory for an AI that might discover concepts of its own.

The progression runs from DNA, to the cell, to the virtual cell, to machine code, to whatever an AI trained directly on consequences rather than descriptions eventually becomes. The same question sits underneath every step: how much can a learning system figure out for itself, once we stop handing it our own concepts and instead give it raw sequences, real environments, and real consequences?

Maybe the honest answer is "not much," and human-built abstractions prove indispensable after all. Or maybe this is an early stage of something bigger — machines that build their own representations, not because they're translating human thought into a form a computer can process, but because those representations are genuinely native to the systems the machine is trying to understand and control. Humans spent thousands of years building abstractions to make the world make sense to us. The next stage of AI might build its own abstractions simply because they make the world predictable and controllable to the machine itself — whether or not any person could ever read them.

If that turns out to be true, the interesting question stops being *can AI think like a human*. It becomes something stranger, and probably more important: what does thinking actually look like, once the intelligence doing it is free to choose its own way of representing the world?
