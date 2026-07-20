---
title: "Five-Year and Ten-Year Scenarios"
---

# Five-Year and Ten-Year Scenarios

![Five-year and ten-year scenarios](<figures/FIG-19-01 Future Scenarios.png>)

The rate of change is breathtaking. Tasks that defeated the AI coding agent during my first year building the language-learning application later became routine. Moving the project from a simple web framework to native Apple software initially failed, then became achievable roughly a year later as models, agent environments, tools, feedback, and my own supervision improved together.

That experience makes me suspicious of confident forecasts—including my own. Five years of change may not resemble five equal annual steps. Yet “anything could happen” is not useful either. Scenarios help us ask which forces would have to change for different futures to emerge.

## An Unfinished Revolution

It is tempting to describe the AI revolution as an event that has already happened. A better description is that it is still unfolding.

The [2017 paper _Attention Is All You Need_](https://research.google/pubs/attention-is-all-you-need/) introduced the **Transformer**, the architecture that became the foundation of most modern large language models. Earlier recurrent neural networks usually processed a sequence step by step, carrying information forward as they went. A Transformer uses **attention** to determine which parts of an input are most relevant to one another. This made it much more practical to train large models in parallel and to learn relationships across long passages of language.

The Transformer did not invent generative AI, translation, or neural networks. Those existed earlier. Its importance was that it allowed generation and translation to improve and scale dramatically. Combined with enormous datasets, specialised processors, human feedback, and later tool use, it helped turn experimental language systems into widely useful products.

I took a course on artificial intelligence in 2025, eight years after the Transformer paper appeared. Yet I still did not understand the architecture's historical and economic importance. That is revealing. AI education can present products, terminology, and techniques without making the trajectory clear to an ordinary learner.

Had I understood the significance in 2017, I might have viewed NVIDIA, computing infrastructure, and even the future of computer-science careers differently. That is not a claim that one paper could have identified a certain stock-market winner. It is a lesson about trajectories: a technical breakthrough can begin changing costs and capabilities years before its economic consequences become obvious.

The question in 2026 is therefore not simply, “What has AI achieved?” It is, “Which present developments might look as consequential from the perspective of 2031 or 2036 as the Transformer now looks from 2026?”

## The Forces Extending the Revolution

Several developments are reinforcing one another.

### Architectures Are Becoming Hybrid

The Transformer is unlikely to remain unchanged forever. Researchers are experimenting with recurrence, more selective attention, state-space methods, external memory, tools, and additional computation while a model answers. The probable near-term future is not one architecture suddenly destroying the Transformer. It is a family of hybrid systems in which attention becomes one component among several.

This matters economically. A system that remembers useful information, ignores irrelevant material, or reuses previous work may deliver a better result without repeating every calculation. Architectural progress is valuable when it reduces the total cost of useful intelligence, not merely when it produces a higher benchmark score.

### Reasoning Is Becoming A Variable Cost

Some AI systems can spend more computation on a difficult task before returning an answer. That additional reasoning may help the system compare alternatives, plan, use tools, check intermediate results, and revise after failure. It also consumes more time and computing resources.

The likely direction is **adaptive reasoning**. A simple formatting request should receive little additional computation. A security review, database migration, or unfamiliar legacy system may justify much more. The economic objective is not maximum reasoning on every task. It is the lowest reasoning level that achieves the required reliability, including the cost of checking and correcting the result.

### Agents Are Connecting Language To Action

A language model generates language. An agent connects that model to files, software tools, browsers, terminals, business systems, and other machines. This is the movement from AI that answers to AI that acts.

Software development is an important early proving ground because an agent can inspect a repository, make a change, run tests, observe failure, and try again. The same pattern can later extend to administrative work, scientific research, factories, vehicles, and robots. The opportunity grows, but so does the importance of permissions, verification, reversibility, and human authority.

### Processors And Memory Are Changing The Cost Curve

An AI processor is like a very fast cook. Memory is the pantry holding the ingredients. A faster cook achieves little if the ingredients arrive too slowly. Modern AI systems are therefore constrained not only by calculation, but by how quickly and efficiently data can move among processors, memory, storage, and networks.

Specialised processors perform the repeated mathematical operations used by AI more efficiently than ordinary general-purpose processors. Shorter numerical formats allow more calculations per chip. **High Bandwidth Memory**, or **HBM**, stacks memory close to the processor so that data can move far more quickly. Chiplets, three-dimensional packaging, and faster connections allow many components to behave more like one large computer.

[Micron describes](https://www.micron.com/products/memory/hbm/hbm4) its HBM4 as delivering more than 2.8 terabytes per second from one memory stack, more than double the bandwidth of the preceding generation. [NVIDIA says](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer) its Rubin platform combines processors, HBM4, networking, and context storage to reduce inference cost substantially compared with Blackwell. These are manufacturers' claims rather than guarantees, but the direction is clear: the industry is attempting to produce more useful intelligence for each dollar and watt of electricity.

Longer context and agentic work also create a new memory problem. An agent may need to retain the intermediate information generated during a long task. New memory and storage layers are being designed to preserve and reuse that context instead of keeping everything in scarce, expensive processor memory.

### Capital Determines Which Possibilities Can Be Attempted

Frontier AI requires processors, memory, data centres, electricity, research talent, product development, and repeated experiments that may fail. The likely winners therefore need more than a good current model. They need the ability to generate or raise enormous capital, take several risky bets, tolerate failure, and then concentrate resources behind what works.

Capital alone does not guarantee success. Large companies have missed important technological transitions before. The more decisive combination is:

> capital + appetite for risk + speed of execution + sound capital allocation

Different organisations represent different strategies. Alphabet combines research, models, custom processors, cloud infrastructure, consumer distribution, and work on robotics. Anthropic is attempting to make high-quality software intelligence and agents an indispensable layer of professional work. NVIDIA is expanding from supplying processors toward designing the complete AI-computing system. Elon Musk's group of companies places a riskier bet on combining models, computing infrastructure, communications, vehicles, energy, and physical machines.

These examples are not stock recommendations, and the best technology company is not automatically the best investment at a particular share price. They show where informed organisations are committing money and what each believes the next bottleneck will be. The eventual value may also be divided among several layers rather than captured by one winner.

## A Five-Year Trajectory

By approximately 2031, the most defensible direction is not that AI becomes magically infallible. It is that useful intelligence becomes cheaper, more specialised, more connected to tools, and available in more places.

If current forces continue:

- Routine inference should become substantially cheaper, even if training frontier models remains extraordinarily expensive.
- Systems should allocate reasoning effort according to the difficulty and risk of the task.
- Coding agents should work for longer periods and maintain more project context, while automatic tests and audit trails become more important.
- Hybrid model architectures should combine attention with other forms of memory and recurrence.
- Custom processors should expand as large AI providers try to reduce dependence and cost.
- More AI should run on personal computers, phones, vehicles, factory equipment, and robots.
- Software development should shift further from manually expressing every instruction toward describing intent, constraints, examples, and acceptance criteria.

The economic test will be **cost per dependable completed task**, not cost per token alone. A cheap answer that repeatedly fails may be more expensive than a costly answer that can be verified and used.

## A Ten-Year Trajectory

By approximately 2036, uncertainty becomes much greater. It is reasonable to watch several converging directions without pretending that any is assured.

Processors may be stacked more closely with memory. Some calculations may occur inside or beside memory rather than continually moving data back and forth. Optical connections may carry information between parts of a data centre. AI may move work automatically among personal devices, data centres, vehicles, and robots. Models may use persistent external memory and tools so extensively that the underlying Transformer is no longer perceived as the whole system—only as one organ inside it.

The most consequential change would be a dependable translation chain:

```text
human intention
↓
AI interpretation and planning
↓
software instructions
↓
verified action by digital or physical machines
```

That would extend the book's central argument beyond code generation. AI would become a general interface through which more people can direct complex machines without first mastering all of their internal languages.

The principal constraints may then be energy, trusted information, verification, physical safety, institutional authority, and social permission. Better processors could reduce the energy required for one task while cheaper intelligence causes the total number of tasks to grow much faster. Technological efficiency does not guarantee lower total consumption.

This is why the revolution must be described as ongoing. The Transformer was not the destination. It changed what became economically and technically possible. The next stage will be determined by how architectures, reasoning, agents, processors, memory, capital, and human institutions develop together.

Two forces matter most:

1. How quickly AI capability improves.
2. How much verification and integration cost after the AI generates something.

|                                   | Verification and integration remain expensive                                                                           | Verification and integration become much cheaper                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Capability improves gradually** | **Bounded assistant:** valuable in well-specified, low-risk tasks, with humans carrying most review and integration.    | **Ordinary infrastructure:** AI becomes as routine as compilers, search, and version control across much of development. |
| **Capability improves rapidly**   | **Generation outruns trust:** output explodes, but security, review, maintenance, and coherence become the bottlenecks. | **Agentic organisation:** intent-driven creation and coordinated software work become plausible under human authority.   |

Different domains can occupy different quadrants simultaneously. A disposable marketing prototype and a payment system may inhabit different futures even inside the same company.

## Where We Are Now

AI already assists with explanation, code generation, debugging, refactoring, tests, documentation, requirements, and prototyping. It performs best when the task is well specified, the relevant context is available, the risk is manageable, and the output can be checked.

Codex-like systems show why the model alone is the wrong unit of analysis. They connect an AI model to repositories, terminals, browsers, tests, permissions, and project context. The resulting AI agent becomes operational: it can act, gather feedback, and revise within boundaries.

The unsettled evidence reinforces the need for scenarios. Productivity varies by task, developer, codebase, tool, and quality threshold. Technical capability may move quickly while organisational adoption, regulation, and trust move slowly. The future is more likely to branch than to arrive everywhere at once.

## Scenario One: The Bounded Assistant

If capability improves gradually while verification and integration remain costly, AI becomes a powerful but uneven assistant.

Developers use it to explain unfamiliar code, draft tests, produce documentation, and implement bounded changes. Non-programmers create prototypes, but experienced engineers remain essential for architecture, security, integration, and long-lived systems. High-stakes organisations restrict agents to narrow permissions and require substantial human review.

The economics remain attractive where failure is cheap and feedback is fast. They remain weak where mistakes are difficult to detect or costly to reverse. AI adoption grows, but concentrates in tasks whose output can be tested objectively.

**How we would recognise this future:** AI behaviour would remain unstable, and the time people spend checking generated work would rise as the volume grows. AI would continue to struggle with large, unfamiliar software projects, while organisations would keep strict limits on what agents may do.

## Scenario Two: Ordinary Development Infrastructure

If capability improves gradually while verification and integration become cheaper, AI becomes ordinary development infrastructure.

Reusable software structures, precisely defined connections, automated rules, picture-comparison tests, security checks, and repeated evaluations make generated work easier to constrain. Industry terms include **frameworks**, **typed interfaces**, **policy engines**, **visual regression tests**, **security scanners**, and **automated evaluation**. Developers use AI as routinely as search and ordinary development tools. Mixed, or **hybrid**, systems become normal: probabilistic models interpret requests while deterministic software checks data, permissions, calculations, and execution.

Non-programmers build more internal tools. Legacy modernisation becomes a major use case because AI can document old systems, map dependencies, generate **characterisation tests** that record what an existing system currently does, and work through governed APIs. The job of the programmer moves upward toward requirements, architecture, evaluation, and stewardship.

**How we would recognise this future:** the total cost of completing a dependable task would keep falling—not merely the cost of generating code. Model upgrades would cause fewer disruptions, and automatic checks of behaviour, security, and screen design would become a normal part of AI-assisted work.

## Scenario Three: Generation Outruns Trust

If capability improves rapidly while verification and integration remain expensive, the world receives far more software than it can safely absorb.

AI produces impressive applications, migrations, and interfaces quickly. Small teams attempt portfolios that once required much larger organisations. But code generation outpaces the capacity to review dependencies, permissions, data handling, user experience, and maintenance consequences.

This is the quadrant in which my experience designing the language-learning screens becomes economically important. Producing another interface variation is cheap; judging whether it works across screen sizes, languages, accessibility settings, and real learning behaviour remains costly. Organisations may create fragile systems faster than they can understand them. Security incidents and maintenance burdens could erase apparent productivity gains.

The limiting factor is neither typing nor model intelligence. It is disciplined acceptance: evidence that the generated system is fit to keep.

**How we would recognise this future:** organisations would produce many impressive prototypes but relatively few dependable releases. Security weaknesses and hard-to-maintain shortcuts would accumulate, review queues would grow, and developers would spend more time checking generated work than creating new things.

## Scenario Four: The Agentic Software Organisation

If capability improves rapidly and verification and integration also become much cheaper, software creation becomes more intent-driven.

A domain expert describes an application through conversation, screenshots, examples, business rules, and corrections. Agents scaffold the project by creating its basic structure, choose tested components, construct the data model, implement features, run builds and tests, render the interface at several sizes, prepare the software for release, and maintain an audit trail. Professional developers supervise architecture, security, difficult integrations, and consequential decisions.

Natural language, observed work, and organisational records become source material for software. Code still exists, but much of it may be produced and revised without a person reading every line. The main records people inspect shift toward goals, policies, examples, **acceptance criteria** that state how success will be judged, prohibited actions, and evidence of behaviour.

A software organisation is partly an information-processing system. It receives signals from customers, incidents, regulations, and markets, then turns them into priorities, designs, code, tests, releases, and support. Coordinated agents could perform a meaningful portion of that cycle.

The future unit of production may therefore be neither the unaided programmer nor a single coding assistant. It may be a human objective connected to agents, deterministic services, repositories, tests, institutional context, and governance.

This does not create a human company. Agents do not acquire culture, responsibility, friendship, fear, or moral standing because they coordinate tasks. Capability must still be separated from authority, and people remain accountable for what the organisation permits the system to do.

**How we would recognise this future:** agents would maintain real products successfully over long periods, not merely create demonstrations. Specialised agents would work together safely, systems could automatically record and reverse changes, and repeated AI modifications would not gradually make the software incoherent.

## Why the Forecast May Still Be Too Small

The four scenarios are not an upper bound. Several improvements can reinforce one another:

```text
models reason and code better
↓
agents use more tools and gather better evidence
↓
verification becomes more automatic
↓
successful work creates reusable context and components
↓
more people attempt larger projects
↓
tools improve around those new patterns of use
```

This loop does not prove perpetual acceleration. Cost, energy, data, regulation, security, diminishing returns, and organisational resistance could slow it. But forecasts can underestimate change when they treat the model as a single product. The whole system is improving across models, agents, tools, hardware, context, frameworks, verification, and human practice.

## What Remains Scarce in Every Scenario

No quadrant eliminates the need to choose what is worth building. Requirements, domain knowledge, architecture, taste, verification, integration, and responsibility remain important; their relative cost changes.

The most useful indicator is therefore not tokens, benchmark scores, or lines of generated code. It is **cost per successfully completed task**: the total cost of specification, generation, checking, integration, correction, operation, and failure.

The future of programming is not settled by whether an AI model can produce an answer. It is settled by whether the surrounding system can turn that answer into dependable action—and whether people can justify the action that follows.
