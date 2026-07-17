---
title: "The Economics of Models"
---

# The Economics of Models

The previous chapters explained the mechanism. AI can assist software development because information can be represented mathematically, models learn relationships, neural networks build those models, and inference uses them to transform intent into useful outputs.

But this book is not only asking how AI works.

It is asking why AI changes the economics of software.

That means every technical feature of AI must be analysed economically. Larger models, longer context windows, multimodal capability, better reasoning, faster inference, specialised hardware, and model upgrades are not merely engineering facts. They are investments made because someone expects a return.

The economics of AI begins with a simple distinction:

```text
Training creates capability.
Inference spends capability.
```

## Training as Capital Investment

Training is the expensive process that creates or improves a model.

It requires data, hardware, electricity, specialised chips, engineering teams, research, experimentation, evaluation, and time. The largest models may require extraordinary investment. Epoch AI estimates that frontier language-model training compute has grown at about 5x per year since 2020, and that frontier training costs have risen about 3.5x per year over the same period. These are modelled estimates rather than audited disclosures, but they support the central point: frontier model training is a capital-intensive race. See [[AI Model Economics]].

Economically, training resembles capital investment. A company spends heavily upfront to create an asset: a model with useful capabilities. That model can then be deployed to many users, products, tasks, and organisations.

The investment is justified only if the model's future value exceeds the cost of creating and operating it.

This explains why AI companies continue to train new models. They are not doing so merely because bigger models are intellectually interesting. They believe better capability will produce economic return: more users, better products, higher subscription revenue, enterprise contracts, developer adoption, platform power, strategic advantage, or lower cost per unit of useful work.

Training is therefore not just a technical process. It is the industrial production of machine capability.

## Inference as Operating Cost

Inference is the use of a trained model.

Every time a user asks a question, generates code, summarises a document, analyses an image, or runs an AI feature inside an application, compute is consumed. That compute has cost.

The cost depends on many factors:

- Model size.
- Input length.
- Output length.
- Context window.
- Hardware efficiency.
- Latency requirements.
- Number of users.
- Tool calls.
- Reasoning time.
- Whether the model runs locally or in a data centre.

This makes inference different from traditional software in an important way. Many conventional software operations are extremely cheap once the software is written. AI interactions can remain relatively expensive because each output requires substantial computation.

This does not mean inference will always be expensive. Hardware improves. Models become more efficient. Smaller specialised models can handle narrower tasks. Caching, routing, distillation, quantisation, and optimisation may reduce cost. But inference cost is central to AI product economics because every user interaction spends compute.

This is why inference must be analysed separately from training. Training is the upfront creation of capability; inference is the repeated spending of that capability. Epoch AI tracks inference-cost trends separately and reports rapid but uneven declines in the cost of inference at fixed performance levels. The direction matters: if inference becomes cheaper, more AI features become economically viable; if it remains expensive, AI use must be reserved for higher-value tasks.

For software development, this matters because AI-assisted tools must be worth the inference they consume. A coding assistant that saves an engineer an hour may easily justify the cost of many model calls. A trivial feature used by millions of people may need much cheaper inference.

## Why Larger Models Exist

Larger models are not automatically better in every situation, but they often offer broader capability.

A larger model may capture more patterns, handle more varied tasks, produce better reasoning, follow instructions more reliably, and generalise across domains. That can make it valuable for software development because programming requires language understanding, code generation, architecture awareness, debugging, documentation, and domain reasoning.

But larger models cost more to train and often more to run.

The economic question is:

> Does the additional capability justify the additional cost?

For some tasks, yes. A complex refactoring, legal analysis, medical summarisation, enterprise code migration, or multi-step software design may justify a more capable model. For simpler tasks, a smaller model may be enough.

This is why the future will likely contain many models rather than one universal model for everything. Different tasks have different cost-benefit profiles.

## Context Windows as Working Memory

The [[Context Windows|context window]] is the amount of information a model can consider during inference.

For software development, context is crucial. A model asked to modify one function may need only a small amount of context. A model asked to refactor a module may need more. A model asked to reason about an entire codebase may need much more.

Larger context windows allow AI systems to consider longer documents, more files, bigger specifications, extended conversations, and richer examples. That can improve usefulness. It can also reduce the need for users to repeatedly summarise background information.

But context has cost. More context may require more memory and compute. It may increase latency. It may also introduce attention problems: the model may have more information available but still fail to use the right piece at the right moment.

Economically, a larger context window is valuable when it allows the model to solve problems that would otherwise require expensive human effort or repeated interaction. It is not valuable merely because the number is larger.

For software, long context matters because real systems are interconnected. A bug may depend on a data model, a configuration file, a test, a framework convention, and an old design decision. If AI cannot see enough of the system, it may make local changes that break global behaviour.

This leads to a distinction developed further in [[The Economics of Context]].

Raw context is the maximum number of tokens a model can read.

Effective context is the amount of relevant information the system can actually use to solve the problem.

A model with a huge context window but poor retrieval may perform worse than a model with a smaller context window that receives exactly the right information. The economic race is therefore unlikely to be only about larger windows. It will also be about retrieval, summarisation, repository indexing, tool use, memory, and verification.

The important question is not simply:

> How much information can the model hold?

It is:

> How much useful information can be supplied at economically justified cost?

## Multimodality

[[Multimodal Models]] can work across text, images, audio, video, code, and other forms of input or output.

This matters because software development is not purely textual. Requirements may appear in screenshots, diagrams, whiteboards, mockups, logs, tables, documents, and user recordings. A developer may need to convert a sketch into an interface, a screenshot into a bug report, a chart into code, or a video of a user session into product insight.

Multimodality extends the range of information AI can process.

But it also increases complexity. Training across multiple modalities requires different kinds of data and alignment among representations. Serving multimodal models may require more compute and more sophisticated product design. Verifying multimodal outputs can be harder than verifying text.

The economic question is again cost versus benefit. Multimodality becomes valuable when it reduces enough human translation work to justify the added complexity.

For software development, the value is obvious in principle. Many software ideas begin visually. Many bugs are seen before they are described. Many workflows are easier to show than explain. A model that can interpret screenshots, diagrams, and code together can reduce communication cost.

## Reasoning

Reasoning is one of the most economically important and difficult AI capabilities.

Software development requires multi-step reasoning. A model may need to understand a requirement, inspect existing code, infer architecture, identify risks, plan a change, generate code, write tests, interpret failures, and revise. Simple next-token fluency is not enough for reliable engineering.

Better reasoning can produce better software assistance, but it may cost more. Some systems spend more inference time exploring alternatives, checking intermediate steps, or using tools. That can improve quality but increase latency and compute cost.

The economic question is whether the improved outcome justifies the extra inference cost.

For a trivial formatting change, expensive reasoning is wasteful. For a database migration, security-sensitive change, or legacy-system analysis, deeper reasoning may be cheap compared with the cost of a mistake.

This suggests that future AI software tools may route tasks dynamically. Simple tasks may go to small fast models. Complex tasks may go to more capable models or multi-step workflows. High-risk tasks may require verification, tool use, and human approval.

## Why Some Tasks Consume More Tokens

Not every AI task costs the same.

A short prompt can be cheap:

```text
Summarise this paragraph in one sentence.
```

A harder prompt may be much more expensive:

```text
Read these five documents, compare their assumptions, identify contradictions, propose a migration plan, estimate risks, write tests, and explain your reasoning.
```

The second task costs more because it asks the model to process more information and do more work.

There are four main sources of token cost.

First, input tokens. The model must read the prompt, conversation history, retrieved documents, source files, screenshots, logs, specifications, or examples. A task involving a large codebase, long contract, or enterprise policy pack may require far more input than a simple question.

Second, output tokens. A one-sentence answer is cheap. A detailed migration plan, software design, test suite, or chapter draft requires many generated tokens.

Third, reasoning work. Some tasks require the model to compare alternatives, hold multiple constraints in mind, decompose the problem, check intermediate conclusions, or reason through a sequence. Even when the final answer is short, the system may spend extra computation on intermediate reasoning.

Fourth, tool loops. An agent may search files, run tests, read errors, edit code, run tests again, inspect logs, and revise. Each step adds more input and output. The cost is not one prompt. It is a chain of inference calls.

This is why reasoning can be expensive. It is not just "thinking harder" in a human sense. It often means reading more context, generating more intermediate work, using more model steps, calling more tools, and checking more results.

For example:

| Task | Why It May Be Cheap Or Expensive |
| --- | --- |
| Translate one sentence | Little input, little output, familiar pattern |
| Summarise a short email | Small input and short output |
| Explain a programming error | Moderate input, some reasoning, usually short output |
| Refactor a module | Many files, dependencies, tests, and revision loops |
| Analyse a legacy system | Large context, unknown rules, high verification cost |
| Plan a database migration | Many constraints, risk analysis, tests, rollback planning |
| Build an agent workflow | Repeated inference, tool calls, permissions, monitoring, validation |

The economic lesson is simple:

> AI cost depends less on how impressive the prompt sounds and more on how much information the model must process, how much output it must generate, how much reasoning it must perform, and how many steps are required to verify the result.

This matters for software because serious engineering tasks are rarely one-step answers. They involve context, planning, implementation, testing, and review. That is why the future of AI software tools will not be only about cheaper tokens. It will also be about using tokens intelligently.

## Model Evolution

[[Model Evolution]] creates a new kind of software maintenance problem.

Traditional software changes when developers edit code. If they are careful, they can preserve backward compatibility. A new version of a library may add features while attempting not to break old behaviour.

AI models are different. A new model is not merely the old model plus a feature. It may have different training data, architecture, alignment, reasoning behaviour, safety policies, tool-use patterns, and response style. The same prompt may produce different results.

This matters for software systems that depend on AI. A prompt template, evaluation suite, workflow, or agent loop may work well with one model and less well with another. Upgrading a model can resemble changing a dependency whose behaviour is difficult to specify fully.

Therefore model evolution creates regression risk.

The economic benefit of upgrading is better capability or lower cost. The cost is testing, adaptation, monitoring, and possible behaviour change. Production systems need model versioning, evaluation, fallback, and change management.

In other words, models become part of the software supply chain.

## Why Backward Compatibility Is Hard

Backward compatibility is difficult for AI because model behaviour is not a small set of explicit rules.

If a conventional function adds two numbers, preserving behaviour is straightforward. If an AI model answers questions, writes code, follows policies, reasons through ambiguity, and interprets context, preserving every behaviour while improving capability is much harder.

A model can become better overall while becoming worse for a particular prompt or workflow. It can become safer but less direct. It can become more creative but less predictable. It can follow instructions better in general while interpreting one old instruction differently.

This is not simply carelessness by model builders. It is a consequence of learned distributed behaviour.

For software engineers, the lesson is clear: model upgrades must be tested like serious dependency changes.

## The Cost-Benefit Pattern

Every major AI improvement should be examined through the same pattern:

| Improvement | Cost | Benefit | Future Trend |
| --- | --- | --- | --- |
| Larger models | More training and inference compute | Broader capability and better reasoning | More efficient models may reduce cost per capability |
| Longer context | More memory and compute | Ability to handle larger tasks and codebases | Context will likely expand but require better management |
| Multimodality | More complex data and training | One system can work across text, image, audio, video, and code | More software workflows will mix modalities |
| Better reasoning | More inference time or specialised methods | Better planning, debugging, and analysis | Systems may route reasoning depth by task |
| Training | Large upfront capital cost | Creates reusable model capability | Cost per useful capability may fall, but frontier training may remain expensive |
| Inference | Ongoing operating cost | Delivers capability to users | Hardware and model efficiency may lower cost |
| Model evolution | Testing and compatibility risk | Better capability, safety, or cost | Model management becomes part of software engineering |

This table is not final research. It is a way of thinking.

The book should teach readers to ask: what cost is being paid, what capability is being gained, who benefits, and what becomes economically viable as a result?

## The Economics of Intelligence

The phrase [[ECONOMICS_OF_INTELLIGENCE|economics of intelligence]] means that intelligence itself can be analysed as something produced, stored, distributed, consumed, priced, and improved.

Training produces machine capability.

The model stores that capability as learned mathematical relationships.

Inference distributes and uses that capability.

Hardware, data centres, energy, chips, and engineering teams determine cost.

Applications determine value.

The hardware shift is visible in company financials. NVIDIA reported Q1 fiscal 2027 revenue of $81.6 billion for the quarter ended April 26, 2026, including $75.2 billion in data center revenue. NVIDIA's revenue is not the same as AI model spending, but it is strong evidence that AI demand has shifted enormous value toward specialised compute infrastructure. Gartner also forecast worldwide AI spending of $2.59 trillion in 2026, a broad figure that includes many AI categories and should not be confused with model training alone. See [[AI Model Economics]].

Software development is the clearest case study because it is already a knowledge-intensive activity. If AI lowers the cost of applying software-engineering knowledge, it changes the economics of the software industry.

This is why the book is not simply about AI writing code. It is about the industrialisation of certain forms of cognitive work.

## Bridge to Engineering

Part III has explained why AI can participate in software creation.

But explanation is not the same as reliability.

AI models are probabilistic. Software systems often need deterministic behaviour. AI can generate code quickly, but generated code must be tested. AI can operate inside applications, but its outputs must be constrained. AI can interpret intent, but intent must be specified clearly. AI can call tools, but tool use must be governed.

The next part of the book moves from capability to engineering.

If AI lowers the cost of producing software, how should software engineering change?

The answer begins with communication, requirements, precision, and verification.

## What We Know

Training and inference have different economics.

Training is an upfront investment that creates model capability.

Inference is an ongoing operating cost that uses model capability.

Frontier model training, inference, and AI infrastructure are now large economic categories. Current estimates suggest rapidly rising frontier training costs, falling but uneven inference costs, and major capital allocation toward AI compute infrastructure. These claims should be rechecked before final publication because the market changes quickly.

Larger models, longer context windows, multimodality, reasoning, and model evolution all involve cost-benefit trade-offs.

Model upgrades can change behaviour and create regression risk.

## What We Infer

AI improvements will be adopted when their economic benefits exceed their costs in valuable use cases.

Software engineering will need model selection, versioning, evaluation, and cost management as ordinary engineering concerns.

The long-term impact of AI on software depends not only on model capability but on the cost per useful unit of intelligence.

## What We Do Not Yet Know

We do not yet know how quickly training and inference costs will fall relative to capability.

We do not yet know which AI capabilities will become cheap commodities and which will remain expensive.

We do not yet know how stable model behaviour can become across versions and providers.
