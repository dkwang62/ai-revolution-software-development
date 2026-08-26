# The Fossil Record of Thought: What Language Models Actually Learn From

## Language as sediment, not source

There is a seductive shorthand that gets repeated whenever someone tries to explain how large language models work: *they just predict the next word*. It is not wrong, exactly. It is wrong in the way "a human is just a bag of chemical reactions" is wrong — technically accurate, and almost useless as an explanation of anything interesting the system does.

A more illuminating way to think about it is this: language is not the thing a model ultimately learns. Language is the sediment left behind by something else — the accumulated record of human beings encountering a physical world, forming beliefs about it, acting on those beliefs, revising them, and occasionally writing down what they learned.

A book about bridge engineering is not really "about words." It is the residue of engineers observing structures, testing materials, investigating failures, and compressing decades of experience into a form another engineer can absorb in an afternoon. A legal textbook is the residue of centuries of disputes, harms, and negotiated resolutions. A cookbook is the residue of thousands of kitchens where something burned, something worked, and someone thought the distinction worth preserving.

When a model trains on text, it is learning from a record of human encounters with the world. It is not reading reality directly. It is trying to infer recurring structure from what people chose to record about reality. That distinction matters, and it's worth tracing carefully, because it's easy to overstate in both directions — to treat the record as a hollowed-out echo of reality, or to treat what a model recovers from it as equivalent to reality itself.

[![Language as the accumulated fossil record of human encounters with reality](<figures/FIG-SC-03 Fossil Record of Thought.png>)](<figures/FIG-SC-03 Fossil Record of Thought.png>)

## Every record is a filter

Reality happens. A subset of it is perceived by a human nervous system built for survival, not perfect fidelity. A subset of what is perceived gets attention. A subset of what receives attention gets encoded in memory, already shaped by prior belief. A subset of memory gets written down, shaped again by language, audience, genre, and convention. And of everything ever written, only a fraction survives, gets digitized, and enters a training corpus:

**Reality → perception → attention → memory → language → publication → digitization → training data → model**

It's tempting to draw every arrow as pure subtraction, as if each stage merely throws information away. That misses something important. Human records are lossy, but they are not empty shells.

A sentence like "John dropped the glass onto the concrete floor and it shattered" doesn't explicitly state everything a reader can infer from it. It evokes assumptions about objects, gravity, impact, and brittleness without stating any of them. The sentence contains more structure than its literal words enumerate. This is true of records generally: a bridge-failure report carries assumptions about materials and loads that may never appear as explicit propositions; a recipe carries assumptions about chemistry and timing; a court opinion carries assumptions about institutions and incentives. Readers can't magically recover everything that was left unstated — but a record can preserve relationships that were never asserted as facts in the first place.

That becomes more interesting across millions of records. A single account is shaped by one person's perspective, knowledge, and errors. Across many accounts, some of those idiosyncrasies wash out, and recurring patterns across otherwise-unrelated sources are often evidence that something more general is going on.

But "often" is doing important work in that sentence. Human errors are not necessarily independent. Writers share cultures, institutions, teachers, and sources; a misconception copied from one influential source can appear in thousands of documents that look, from the outside, like independent confirmation. Repetition can signal reality. It can also signal inheritance. Aggregation can reveal structure in the record. It does not, by itself, certify that the structure is true — a caveat worth holding onto, because it resurfaces once the essay turns to where this whole picture breaks down.

## Human records preserve judgments about relevance

There's a second feature of the human record easy to overlook: people do not merely record reality. They record what they think matters about reality.

An engineer investigating a bridge failure doesn't record every fact about the day. She records loads, materials, fatigue, and design tolerances — the factors relevant to explaining the failure. That isn't a failure to capture reality. It's an act of judgment about relevance, and relevance is not an intrinsic property of a fact — it depends on purpose. Humidity might be irrelevant to a structural investigation and crucial to a corrosion investigation of the very same bridge. A measurement that matters enormously to an engineer may be useless to someone deciding what to cook for dinner.

So a corpus of human records contains more than facts. It contains countless examples of a deeper relationship: *given this situation and this purpose, these are the things that mattered.* Most writers never consciously theorize that relationship; they simply exercise it, deciding what to include, what to omit, and what to leave implicit.

That has consequences for what a model can learn. It is not recovering a purpose-neutral, complete description of reality — no such description exists anywhere in its training data. It is learning patterns in a vast collection of human judgments about what's relevant, what follows from what, and what one person needs another to know. This is part of why useful intelligence is selective rather than exhaustive. A good answer isn't the one containing the most facts; it's the one that identifies which facts matter for the task at hand. A contract summary can be perfectly accurate and still fail if it buries the one clause that matters. Relevance is part of understanding, not a discount on it.

## Why prediction can produce world-relevant abstractions

This brings us back to the seemingly trivial description of a language model as a next-token predictor.

Consider: "John dropped the glass onto the concrete floor and it —." A system relying entirely on memorized surface associations would need to separately handle an enormous number of particular combinations — glasses, bottles, plates; concrete, tile, wood; every height and force. A system that instead learns useful abstractions about objects, materials, and consequences can generalize across all of them at once. That doesn't mean the model constructs the same concepts an engineer would, and it doesn't guarantee it discovers real causal structure — models demonstrably exploit shortcuts and quirks of the data just as often. But prediction creates an incentive to represent whatever recurring regularities make future text more predictable, and sometimes those regularities are shallow, and sometimes they're abstractions that correspond surprisingly well to how the world actually works.

This is one reason "next-token prediction" is such an incomplete description of what's happening. The objective is local — predict what comes next — but the structure useful for doing that reliably can be much broader than the sentence in front of it. If enough records connect objects, actions, and consequences in consistent ways, the relationship itself can become part of what the model represents, without ever having been stated as a rule in any single source.

The crucial qualification: predictive usefulness is not the same thing as truth. A shortcut that works reliably within the training distribution is just as useful for prediction, from the model's vantage point, as a genuine explanation would be. The model has an incentive to learn whatever works — not an incentive to prefer the explanation that happens to be correct.

## Where the analogy breaks

This is where the fossil metaphor has to stop being comfortable. A fossil is evidence of a physical history. A corpus is evidence of a human-mediated history. What recurs across a corpus may reflect the world, or it may simply reflect the people who produced the corpus — and a model trained on it has no built-in way to tell which.

Convergence across sources tells you the sources agree. It doesn't tell you why they agree. If thousands of independent observers report the same phenomenon, that convergence is powerful evidence. If thousands of writers repeat a claim because they all learned it from the same textbook, the apparent consensus is much weaker — independent errors tend to cancel under aggregation, but shared errors don't; they get reinforced by every repetition and look, from the outside, exactly like a well-supported fact.

This is a real epistemic limitation, not a minor caveat. A text-only model has no independent sensory channel against which to test the record. It can compare sources, notice contradictions, and learn patterns of reliability — but it can't step outside the record and simply look. Humans face a version of the same problem, but with an additional resource: they can sometimes check a belief against direct experience. An engineer can inspect the actual damaged bridge. A model trained only on records cannot perform that kind of check on its own.

None of this means the right standard is perfection — humans don't meet that standard either. The useful question is whether a system is reasoned, well-informed, appropriately uncertain, and correctable, and whether its claims earn trust individually rather than receiving it wholesale because they're expressed fluently. The central weakness isn't that the system can be wrong; everything capable of making judgments can be wrong. It's that its entire relationship with reality runs through the record, with no independent channel of its own to check that record against.

## The next filter: direct observation and action

Multimodal and embodied systems change that relationship, though not by removing filtering entirely.

A video of glass shattering still passes through filters of its own: a camera has a viewpoint, a field of view, a frame rate, a sensor with its own limitations. But it strips away a layer of linguistic and narrative mediation — the system receives information about an event without relying entirely on someone else's verbal description of it.

**Text:** Reality → human perception → human record → model
**Video:** Reality → sensor → model

Robotics introduces a further difference. A robot that has actually dropped ten thousand objects doesn't merely observe more directly — it can act and observe the consequences of its own actions:

**Robotics:** Reality → sensor → model → action → reality

That closes a loop unavailable to any system trained only on static records: observe, predict, act, observe the consequence, update. This isn't simply more data; it's a different relationship to evidence. A robot can discover that a particular object breaks when dropped, vary the height and surface, and test the prediction again. The resulting evidence isn't another person's account of what happened — it's a consequence the system encountered itself. This doesn't make embodied intelligence automatically truthful; sensors can be wrong, experiments can be poorly designed, environments can mislead. But embodiment adds precisely the thing the previous section identified as missing: an independent feedback loop between prediction and consequence, closing the gap between a system and the world it's trying to model.

## Three kinds of compression

The whole argument reduces to three kinds of compression, stacked on top of each other.

Humans compress reality into records: *reality → human account.* A corpus aggregates millions of those accounts, letting recurring patterns become visible: *millions of records → recurring structure.* And a model compresses the statistical regularities of the corpus into parameters: *corpus → model.* At every stage, detail is lost. But at the aggregation stages, relationships can also become visible that were never explicit in any individual record.

Compression loses detail. Aggregation can reveal structure. Neither guarantees truth. Holding all three of those sentences at once, rather than picking a favorite, is the actual spine of the argument.

## The upshot

Language is one of humanity's great technologies for accumulating experience across minds and generations. People who never met, never coordinated, and never imagined their words would someday be combined nevertheless left behind fragments of observation, judgment, and experience that can be assembled into something larger than any single contributor knew. And what they preserved wasn't simply a collection of facts. It was judgments about what mattered, what could be omitted, what caused what, and what one person would need another to know.

That's why the record is so valuable to a learning system. It's also why the record is not the world. A model trained on human language does not have unmediated access to reality. It has a statistical representation of an enormous, uneven, culturally shaped record of how humans have described and reasoned about reality — a representation that can sometimes capture structure no individual source stated explicitly, and can just as easily reproduce a beautifully consistent mistake an entire culture inherited together. Fluency alone cannot tell you which one you're looking at.

Judged against the standard of unmediated access to truth, that's a permanent shortfall — but it's one every human expert shares, since no mind, biological or otherwise, gets reality unfiltered. Judged against the only standard anything has ever actually met — a well-read, careful, experienced person, who reasons well from an imperfect record, flags what they don't know, and earns trust claim by claim rather than by declaration — the compressed fossil record of human experience is a remarkably rich thing to learn from.

The fossil record is rich because countless events left traces. But a fossil is still a trace. A language model may learn remarkably useful structure from humanity's record of the world. It should not be mistaken for the world itself, or for an independent witness to it — only for the most thorough secondhand account anyone has yet managed to assemble.
