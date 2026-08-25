---
title: "The Economics of Models"
---

AI changes the economics of software only if the value of using a model exceeds the cost of creating and operating it. That is the central idea of this chapter.

[[06-what-is-an-ai-model|What Is an AI Model?]] explained how models acquire capability. [[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] showed that using this capability may require context, reasoning, tools, and verification. Each of those choices has a cost and a possible return.

The economics of AI begins with a simple distinction:

```text
Training builds capability.
Inference pays the running cost of using it.
```

Training is paid largely in advance. The trained model is reusable, but every request still consumes electricity, chip time, and data-centre capacity. The first cost resembles building a factory; the second resembles running it.

## Training as Capital Investment

> **Why it matters:** Training is a large upfront bet that can make a skill available repeatedly; it is closer to building a power station than paying one worker for one job.

Training is the expensive process that creates or improves a model.

It requires data, hardware, electricity, specialised chips, engineering teams, research, experimentation, evaluation, and time. The largest models may require extraordinary investment. Epoch AI estimates that frontier-model [training compute grew roughly 4–5x per year](https://epoch.ai/publications/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year) from 2010 to May 2024, while the amortised hardware and energy cost of final frontier training runs [grew about 2.4x per year](https://epoch.ai/publications/how-much-does-it-cost-to-train-frontier-ai-models) from 2016. These are modelled estimates rather than audited disclosures, but they support the central point: frontier model training is capital-intensive.

Economically, training resembles capital investment: spending money now to create an asset expected to provide value for years. A company spends heavily upfront to create a model with useful capabilities. That model can then be deployed to many users, products, tasks, and organisations.

The investment is justified only if the model's future value exceeds the cost of creating and operating it.

This explains why AI companies continue to train new models. They are not doing so merely because bigger models are intellectually interesting. They believe better capability will produce economic return: more users, better products, higher subscription revenue, enterprise contracts, developer adoption, platform power, strategic advantage, or lower cost per unit of useful work.

Training is therefore not just a technical process. It is the industrial production of machine capability.

## Inference as Operating Cost

> **Why it matters:** A model can be inexpensive for one request yet costly to use millions of times, so deployment economics matter as much as model brilliance.

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

This is why inference must be analysed separately from training. Training is the upfront creation of capability; inference is the repeated spending of that capability. Epoch AI reports [rapid but uneven declines in inference prices](https://epoch.ai/data-insights/llm-inference-price-trends) at fixed performance levels. The direction matters: as inference becomes cheaper, more AI features become economically viable; where it remains expensive, use must be reserved for higher-value tasks.

For software development, this matters because AI-assisted tools must be worth the inference they consume. A coding assistant that saves an engineer an hour may easily justify the cost of many model calls. A trivial feature used by millions of people may need much cheaper inference.

## Paying for Capability

The most capable model is not automatically the most economical one. A useful system matches the capability to the task.

### Larger Models

Larger models are not automatically better in every situation, but they can offer broader capability.

A larger model may capture more patterns, handle more varied tasks, produce better reasoning, follow instructions more reliably, and generalise across domains. That can make it valuable for software development because programming requires language understanding, code generation, architecture awareness, debugging, documentation, and domain reasoning.

But larger models cost more to train and often more to run.

The economic question is:

> Does the additional capability justify the additional cost?

For some tasks, yes. A complex refactoring, legal analysis, medical summarisation, enterprise code migration, or multi-step software design may justify a more capable model. For simpler tasks, a smaller model may be enough.

This is why one system may use several models. Different tasks have different cost-benefit profiles.

### Context Windows

The context window is the amount of information a model can consider during inference.

A single function may require little context; a large codebase may require files, tests, specifications, and earlier decisions. More context can improve the result, but it also consumes memory, computation, waiting time, and money. It can introduce noise as well as evidence.

The useful distinction is between **raw context**, the maximum amount a model can read, and **effective context**, the relevant information it can actually use. A smaller window supplied by good retrieval can outperform a larger one filled with irrelevant material. [[10-context-what-the-model-knows-right-now|Context: What the Model Knows Right Now]] develops this problem in detail.

### Multimodality

Multimodal models can work across text, images, audio, video, code, and other forms of input or output.

This matters because software development is not purely textual. Requirements may appear in screenshots, diagrams, whiteboards, mockups, logs, tables, documents, and user recordings. A developer may need to convert a sketch into an interface, a screenshot into a bug report, a chart into code, or a video of a user session into product insight.

Multimodality extends the range of information AI can process.

But it also increases complexity. Training across multiple modalities requires different kinds of data and alignment among representations. Serving multimodal models may require more compute and more sophisticated product design. Verifying multimodal outputs can be harder than verifying text.

Scientific AI makes this cost especially visible. A DNA model working one base at a time preserves fine detail but must process a very long sequence; grouping bases into k-mers shortens the sequence but changes what the model can easily notice. A molecular graph preserves atoms and bonds directly but requires machinery suited to graphs. A medical pipeline may use separate models for genomic scanning, peptide-HLA prediction, mRNA optimisation and delivery, then connect them with conventional software and laboratory tests. The cost lies not only in running each model, but also in translating between representations and validating each hand-off.

The economic question is again cost versus benefit. Multimodality becomes valuable when it reduces enough human translation work to justify the added complexity.

For software development, the value is obvious in principle. Many software ideas begin visually. Many bugs are seen before they are described. Many workflows are easier to show than explain. A model that can interpret screenshots, diagrams, and code together can reduce communication cost.

### Reasoning

> **Why it matters:** More reasoning should be reserved for tasks where better planning and checking are worth the extra time and cost.

Reasoning is one of the most economically important and difficult AI capabilities. In plain language, it is the work of turning a goal into a sequence of decisions and checks.

Software development requires multi-step reasoning. A model may need to understand a requirement, inspect existing code, infer architecture, identify risks, plan a change, generate code, write tests, interpret failures, and revise. Simple next-token fluency is not enough for reliable engineering.

Better reasoning can produce better software assistance, but it may cost more. Some systems allow the user or application to set a **reasoning effort**: a relative allowance for how much work the model may do before answering. Product labels vary, but they often resemble low, medium, and high. A higher setting can give the model more opportunity to explore alternatives, check intermediate steps, or decide how to use tools. It can also increase latency—the wait for an answer—and the number of billable tokens or other computing resources used.

The economic question is whether the improved outcome justifies the extra inference cost.

For a trivial formatting change, expensive reasoning is wasteful. For a database migration, security-sensitive change, or legacy-system analysis, deeper reasoning may be cheap compared with the cost of a mistake.

This suggests that AI software tools may route tasks dynamically. Simple tasks may go to small fast models using light reasoning. Complex tasks may go to more capable models or heavier multi-step workflows. High-risk tasks may require verification, tool use, and human approval regardless of the reasoning level.

#### Choosing the Appropriate Reasoning Level

The appropriate level is the lowest one that completes the task reliably enough to satisfy its acceptance criteria. More reasoning is not automatically better. It can become slow, expensive, or repetitive when the task is simple.

| Reasoning level         | Appropriate tasks                                                                                                                      | Software examples                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Light**               | Direct extraction, classification, formatting, short summaries, or tightly specified changes                                           | Rename a variable, reformat a file, change a label, or update a build number                                    |
| **Balanced**            | Comparing a few alternatives, revising a bounded component, explaining a concept, or debugging a contained problem                     | Improve one screen, compare two implementations, trace a known error, or strengthen a test                      |
| **Heavy**               | Many interacting constraints, unfamiliar material, architecture, risk analysis, or work whose errors are costly                        | Redesign a subsystem, plan a migration, diagnose an intermittent failure, or reconcile conflicting requirements |
| **Maximum or extended** | Rare, difficult, quality-first work where an incremental improvement could materially affect the outcome and extra delay is acceptable | Conduct an adversarial review of a security-critical change or a consequential architecture decision            |

These are starting points, not laws. A short question can hide a difficult problem, while a long task can sometimes be mostly mechanical. The model, context, tools, and quality standard all matter. The only dependable method is to test representative tasks and compare success, waiting time, token use, human correction, and total cost.

The economic comparison must include more than the price of one request. Heavy reasoning may cost more per attempt but reduce failed attempts, human review, or expensive mistakes. Light reasoning may be cheaper per attempt but expensive overall if the work must be repeated. The goal is not the cheapest answer. It is the lowest total cost for a completed and verified task.

## The Cost of a Completed Task

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

The price of one request is therefore a poor measure of value. The better measure is the total cost of reaching a completed, checked result. A more expensive attempt can be economical if it avoids retries, human correction, or failure. A cheap attempt can be expensive if the work must be repeated.

## The Capability Frontier and the Autonomy Frontier

> **Why it matters:** A model can become economically more valuable without merely becoming "smarter" in the abstract.

There are now two frontiers in AI progress.

The first is the **capability frontier**:

```text
How difficult a problem can the model solve?
```

This is the familiar frontier measured by many benchmarks. Can the model write better code? Can it answer harder questions? Can it reason through more complex material?

The second is the **autonomy frontier**:

```text
How large a piece of useful work can the system complete before a human must intervene?
```

For software development, this second frontier may matter even more economically. An assistant that can answer one question is useful. An agent that can inspect a codebase, plan a change, edit files, run tests, interpret failures, revise its work, and return when it needs a decision changes the cost of an entire workflow.

The direction can be described as a movement in the unit of work:

```text
tokens
↓
answers
↓
tasks
↓
projects
↓
objectives
```

As the unit of work moves upward, the human interface moves upward too:

```text
code
↓
prompt
↓
specification
↓
intent
```

This does not mean humans disappear. It means human effort moves toward deciding what objective matters, supplying context, setting constraints, approving risky actions, and judging whether the result is good enough.

The economic value of a future model is therefore not only:

```text
How intelligent is it?
```

It is:

```text
How much dependable work can it complete
per unit of time, compute cost, and human supervision?
```

This explains why verification becomes part of model value rather than a separate afterthought. A model that writes code but leaves all checking to people is less economically powerful than a system that writes, tests, detects problems, repairs, and presents evidence. Verification remains necessary because AI is fallible. But as agents improve, some verification work itself becomes something AI can help perform.

## Model Evolution and Compatibility

> **Why it matters:** A new model version is not a routine software patch; it can improve one behaviour while quietly changing another.

Model evolution creates a new kind of software maintenance problem. A new model is not merely the old model plus a feature. It may have different training data, architecture, alignment, reasoning behaviour, safety policies, tool-use patterns, and response style. The same prompt may produce different results.

This matters for software systems that depend on AI. A prompt template, evaluation suite, workflow, or agent loop may work well with one model and less well with another. Upgrading a model can resemble changing a dependency whose behaviour is difficult to specify fully.

Therefore a model upgrade can make an old workflow worse even while improving the model overall. Software engineers call this **regression risk**: something that worked before may stop working after a change.

The economic benefit of upgrading is better capability or lower cost. The cost is testing, adaptation, monitoring, and possible behaviour change. Production systems need model versioning, evaluation, fallback, and change management.

A model can become better overall while becoming worse for a particular prompt or workflow. Models therefore become part of the software supply chain, and model upgrades must be tested like serious dependency changes.

## The Economics of Intelligence

> **Why it matters:** Once intelligence is supplied through infrastructure, organisations can choose how much of it to buy, where to apply it, and what level of checking it deserves.

The phrase **economics of intelligence** means that machine capability can be produced, distributed, consumed, priced, and improved. Training produces it. Models make it reusable. Inference applies it. Hardware, data centres, energy, and engineering determine its cost. Applications determine its value.

The hardware shift is visible in company financial reports. [NVIDIA reported](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027) Q1 fiscal 2027 revenue of \$81.6 billion for the quarter ended April 26, 2026, including \$75.2 billion in data-centre revenue. NVIDIA's revenue is not the same as AI model spending, but it is strong evidence that AI demand has shifted enormous value toward specialised computing infrastructure. [Gartner forecast](https://www.gartner.com/en/newsroom/press-releases/2026-05-19-gartner-forecasts-worldwide-ai-spending-to-grow-47-percent-in-2026) worldwide AI spending of \$2.59 trillion in 2026, a broad figure that includes services, software, models, data, development platforms, and infrastructure. It should not be confused with model training alone.

Software development is the clearest case study because it is already a knowledge-intensive activity. If AI lowers the cost of applying software-engineering knowledge, it changes the economics of the software industry.

The chapter's economic test is therefore simple, even when the calculation is not: what is the total cost of the capability, and what useful work does it make possible? This book is not simply about AI writing code. It is about the industrialisation of certain forms of cognitive work.

Part III has explained how models acquire capability and why different uses carry different costs. One missing factor determines whether that general capability becomes useful in a real project: what the model can see at the moment it works. A powerful model without the relevant files, rules, history, or examples may still make a poor decision. [[10-context-what-the-model-knows-right-now|Context: What the Model Knows Right Now]] examines that link between general intelligence and a particular task.
