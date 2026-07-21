---
title: "The Economics of Models"
---

# The Economics of Models

[[06-what-is-an-ai-model|What Is an AI Model?]] and [[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] explained the mechanism: models learn mathematical relationships that inference can use to transform intent into useful output.

But this book is not only asking how AI works.

It is asking why AI changes the economics of software.

That means every technical feature of AI must be analysed economically. Larger models, longer context windows, multimodal capability, better reasoning, faster inference, specialised hardware, and model upgrades are not merely engineering facts. They are investments made because someone expects a return.

The economics of AI begins with a simple distinction:

```text
Training builds capability.
Inference pays the running cost of using it.
```

The trained model is reusable. Each request consumes electricity, chip time, and data-centre capacity—not a portion of the model's knowledge.

## Training as Capital Investment

Training is the expensive process that creates or improves a model.

It requires data, hardware, electricity, specialised chips, engineering teams, research, experimentation, evaluation, and time. The largest models may require extraordinary investment. [Epoch AI estimates](https://epoch.ai/trends) that frontier-model training compute has grown at roughly 4–5x per year and that frontier language-model training costs have risen about 3.5x per year since 2020. These are modelled estimates rather than audited disclosures, but they support the central point: frontier model training is a capital-intensive race.

Economically, training resembles capital investment: spending money now to create an asset expected to provide value for years. A company spends heavily upfront to create a model with useful capabilities. That model can then be deployed to many users, products, tasks, and organisations.

The investment is justified only if the model's future value exceeds the cost of creating and operating it.

This explains why AI companies continue to train new models. They are not doing so merely because bigger models are intellectually interesting. They believe better capability will produce economic return: more users, better products, higher subscription revenue, enterprise contracts, developer adoption, platform power, strategic advantage, or lower cost per unit of useful work.

Training is therefore not just a technical process. It is the industrial production of machine capability.

## Inference as Operating Cost

Inference is the use of a trained model. It is an operating cost: a recurring expense created while providing the service, rather than the upfront cost of creating the model.

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
- Whether the model runs locally or in a data centre, a building filled with networked computers, storage equipment, power systems, and cooling.

This makes inference different from traditional software in an important way. Many conventional software operations are extremely cheap once the software is written. AI interactions can remain relatively expensive because each output requires substantial computation.

This does not mean inference will always be expensive. Hardware improves. Models become more efficient. A system can reuse an earlier result (**caching**), send an easy request to a smaller model (**routing**), train a smaller model to reproduce useful behaviour from a larger one (**distillation**), or store the model's numbers in a more compact form (**quantisation**). All can reduce cost. Inference cost nevertheless remains central to AI product economics because every new interaction uses computing resources.

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

The context window is the amount of information a model can consider during inference.

A single function may require little context; a large codebase may require files, tests, specifications, and earlier decisions. More context can improve the result, but it also consumes memory, computation, waiting time, and money. It can introduce noise as well as evidence.

The useful distinction is between **raw context**, the maximum amount a model can read, and **effective context**, the relevant information it can actually use. A smaller window supplied by good retrieval can outperform a larger one filled with irrelevant material. [[10-context-what-the-model-knows-right-now|Context: What the Model Knows Right Now]] develops this problem in detail.

## Multimodality

Multimodal Models can work across text, images, audio, video, code, and other forms of input or output.

This matters because software development is not purely textual. Requirements may appear in screenshots, diagrams, whiteboards, mockups, logs, tables, documents, and user recordings. A developer may need to convert a sketch into an interface, a screenshot into a bug report, a chart into code, or a video of a user session into product insight.

Multimodality extends the range of information AI can process.

But it also increases complexity. Training across multiple modalities requires different kinds of data and alignment among representations. Serving multimodal models may require more compute and more sophisticated product design. Verifying multimodal outputs can be harder than verifying text.

The economic question is again cost versus benefit. Multimodality becomes valuable when it reduces enough human translation work to justify the added complexity.

For software development, the value is obvious in principle. Many software ideas begin visually. Many bugs are seen before they are described. Many workflows are easier to show than explain. A model that can interpret screenshots, diagrams, and code together can reduce communication cost.

## Reasoning

Reasoning is one of the most economically important and difficult AI capabilities. In plain language, it is the work of turning a goal into a sequence of decisions and checks.

Software development requires multi-step reasoning. A model may need to understand a requirement, inspect existing code, infer architecture, identify risks, plan a change, generate code, write tests, interpret failures, and revise. Simple next-token fluency is not enough for reliable engineering.

Better reasoning can produce better software assistance, but it may cost more. Some systems allow the user or application to set a **reasoning effort**: a relative allowance for how much work the model may do before answering. Product labels vary, but they often resemble low, medium, and high. A higher setting can give the model more opportunity to explore alternatives, check intermediate steps, or decide how to use tools. It can also increase latency—the wait for an answer—and the number of billable tokens or other computing resources used.

The economic question is whether the improved outcome justifies the extra inference cost.

For a trivial formatting change, expensive reasoning is wasteful. For a database migration, security-sensitive change, or legacy-system analysis, deeper reasoning may be cheap compared with the cost of a mistake.

This suggests that AI software tools may route tasks dynamically. Simple tasks may go to small fast models using light reasoning. Complex tasks may go to more capable models or heavier multi-step workflows. High-risk tasks may require verification, tool use, and human approval regardless of the reasoning level.

### Choosing the Appropriate Reasoning Level

The appropriate level is the lowest one that completes the task reliably enough to satisfy its acceptance criteria. More reasoning is not automatically better. It can become slow, expensive, or repetitive when the task is simple.

| Reasoning level | Appropriate tasks | Book-writing examples |
| --- | --- | --- |
| **Light** | Direct extraction, classification, formatting, short summaries, or tightly specified changes | Correct spelling, reformat Markdown, change a heading, or update a build number |
| **Balanced** | Comparing a few alternatives, revising a section, explaining a concept, or debugging a bounded problem | Improve one chapter, compare two passages, check clarity, or strengthen an example |
| **Heavy** | Many interacting constraints, unfamiliar material, architecture, risk analysis, or work whose errors are costly | Test the whole book's argument, redesign chapter structure, reconcile conflicting reviews, or examine factual weaknesses |
| **Maximum or extended** | Rare, difficult, quality-first work where an incremental improvement could materially affect the outcome and extra delay is acceptable | A final adversarial review of the entire manuscript or a consequential claim involving many sources |

These are starting points, not laws. A short question can hide a difficult problem, while a long task can sometimes be mostly mechanical. The model, context, tools, and quality standard all matter. The only dependable method is to test representative tasks and compare success, waiting time, token use, human correction, and total cost.

The economic comparison must include more than the price of one request. Heavy reasoning may cost more per attempt but reduce failed attempts, human review, or expensive mistakes. Light reasoning may be cheaper per attempt but expensive overall if the work must be repeated. The goal is not the cheapest answer. It is the lowest total cost for a completed and verified task.

## Why Some Tasks Consume More Tokens

AI cost grows through four main channels: the information read, the answer generated, the reasoning performed, and the repeated tool calls used to inspect, test, and revise. A short answer can still be expensive if it required a long investigation; a long but mechanical answer may be relatively easy.

| Task                        | Why It May Be Cheap Or Expensive                                    |
| --------------------------- | ------------------------------------------------------------------- |
| Translate one sentence      | Little input, little output, familiar pattern                       |
| Summarise a short email     | Small input and short output                                        |
| Explain a programming error | Moderate input, some reasoning, usually short output                |
| Refactor a module           | Many files, dependencies, tests, and revision loops                 |
| Analyse a legacy system     | Large context, unknown rules, high verification cost                |
| Plan a database migration   | Many constraints, risk analysis, tests, rollback planning           |
| Build an agent workflow     | Repeated inference, tool calls, permissions, monitoring, validation |

The price of one request is therefore a poor measure of value. The better measure is the total cost of reaching a completed, checked result. Future AI systems will compete not only by making tokens cheaper, but by avoiding unnecessary tokens, selecting the right model, and stopping when enough evidence has been gathered.

## Model Evolution and Compatibility

Model evolution creates a new kind of software maintenance problem.

Traditional software changes when developers edit code. If they are careful, they can preserve backward compatibility. A new version of a library may add features while attempting not to break old behaviour.

AI models are different. A new model is not merely the old model plus a feature. It may have different training data, architecture, alignment, reasoning behaviour, safety policies, tool-use patterns, and response style. The same prompt may produce different results.

This matters for software systems that depend on AI. A prompt template, evaluation suite, workflow, or agent loop may work well with one model and less well with another. Upgrading a model can resemble changing a dependency whose behaviour is difficult to specify fully.

Therefore a model upgrade can make an old workflow worse even while improving the model overall. Software engineers call this **regression risk**: something that worked before may stop working after a change.

The economic benefit of upgrading is better capability or lower cost. The cost is testing, adaptation, monitoring, and possible behaviour change. Production systems need model versioning, evaluation, fallback, and change management.

In other words, models become part of the software supply chain. Backward compatibility is difficult because model behaviour is not a small set of explicit rules.

If a conventional function adds two numbers, preserving behaviour is straightforward. If an AI model answers questions, writes code, follows policies, reasons through ambiguity, and interprets context, preserving every behaviour while improving capability is much harder.

A model can become better overall while becoming worse for a particular prompt or workflow. It can become safer but less direct. It can become more creative but less predictable. It can follow instructions better in general while interpreting one old instruction differently.

This is not simply carelessness by model builders. It is a consequence of learned distributed behaviour.

For software engineers, the lesson is clear: model upgrades must be tested like serious dependency changes.

## The Cost-Benefit Pattern

Every major AI improvement should be examined through the same pattern:

| Improvement      | Cost                                       | Benefit                                                        | Future Trend                                                                    |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Larger models    | More training and inference compute        | Broader capability and better reasoning                        | More efficient models may reduce cost per capability                            |
| Longer context   | More memory and compute                    | Ability to handle larger tasks and codebases                   | Context will likely expand but require better management                        |
| Multimodality    | More complex data and training             | One system can work across text, image, audio, video, and code | More software workflows will mix modalities                                     |
| Better reasoning | More inference time or specialised methods | Better planning, debugging, and analysis                       | Systems may route reasoning depth by task                                       |
| Training         | Large upfront capital cost                 | Creates reusable model capability                              | Cost per useful capability may fall, but frontier training may remain expensive |
| Inference        | Ongoing operating cost                     | Delivers capability to users                                   | Hardware and model efficiency may lower cost                                    |
| Model evolution  | Testing and compatibility risk             | Better capability, safety, or cost                             | Model management becomes part of software engineering                           |

This table is not final research. It is a way of thinking.

The book should teach readers to ask: what cost is being paid, what capability is being gained, who benefits, and what becomes economically viable as a result?

## The Economics of Intelligence

The phrase economics of intelligence means that intelligence itself can be analysed as something produced, stored, distributed, consumed, priced, and improved.

Training produces machine capability.

The model stores that capability as learned mathematical relationships.

Inference distributes and uses that capability.

Hardware, data centres, energy, chips, and engineering teams determine cost.

Applications determine value.

The hardware shift is visible in company financial reports. [NVIDIA reported](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027) Q1 fiscal 2027 revenue of \$81.6 billion for the quarter ended April 26, 2026, including \$75.2 billion in data-centre revenue. NVIDIA's revenue is not the same as AI model spending, but it is strong evidence that AI demand has shifted enormous value toward specialised computing infrastructure. [Gartner forecast](https://www.gartner.com/en/newsroom/press-releases/2026-05-19-gartner-forecasts-worldwide-ai-spending-to-grow-47-percent-in-2026) worldwide AI spending of \$2.59 trillion in 2026, a broad figure that includes services, software, models, data, development platforms, and infrastructure. It should not be confused with model training alone.

Software development is the clearest case study because it is already a knowledge-intensive activity. If AI lowers the cost of applying software-engineering knowledge, it changes the economics of the software industry.

This is why the book is not simply about AI writing code. It is about the industrialisation of certain forms of cognitive work.

## Bridge to Context

Part III has explained how models acquire capability and why different uses carry different costs. One missing factor determines whether that general capability becomes useful in a real project: what the model can see at the moment it works.

A powerful model without the relevant files, rules, history, or examples may still make a poor decision. [[10-context-what-the-model-knows-right-now|Context: What the Model Knows Right Now]] examines that bridge between general intelligence and a particular task.
