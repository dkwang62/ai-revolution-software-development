---
title: "Five-Year and Ten-Year Scenarios"
---

# Five-Year and Ten-Year Scenarios

![Five-year and ten-year scenarios](<figures/FIG-19-01 Future Scenarios.png>)

The rate of change is breathtaking. Tasks that defeated the AI coding agent during my first year building the language-learning application later became routine. Moving the project from a simple web framework to native Apple software initially failed, then became achievable roughly a year later as models, agent environments, tools, feedback, and my own supervision improved together.

That experience makes me suspicious of confident forecasts—including my own. Five years of change may not resemble five equal annual steps. Yet “anything could happen” is not useful either. Scenarios help us ask which forces would have to change for different futures to emerge.

Two forces matter most:

1. How quickly AI capability improves.
2. How much verification and integration cost after the AI generates something.

| | Verification and integration remain expensive | Verification and integration become much cheaper |
|---|---|---|
| **Capability improves gradually** | **Bounded assistant:** valuable in well-specified, low-risk tasks, with humans carrying most review and integration. | **Ordinary infrastructure:** AI becomes as routine as compilers, search, and version control across much of development. |
| **Capability improves rapidly** | **Generation outruns trust:** output explodes, but security, review, maintenance, and coherence become the bottlenecks. | **Agentic organisation:** intent-driven creation and coordinated software work become plausible under human authority. |

Different domains can occupy different quadrants simultaneously. A disposable marketing prototype and a payment system may inhabit different futures even inside the same company.

## Where We Are Now

AI already assists with explanation, code generation, debugging, refactoring, tests, documentation, requirements, and prototyping. It performs best when the task is well specified, the relevant context is available, the risk is manageable, and the output can be checked.

Codex-like systems show why the model alone is the wrong unit of analysis. They connect an AI model to repositories, terminals, browsers, tests, permissions, and project context. The resulting AI agent becomes operational: it can act, gather feedback, and revise within boundaries.

The unsettled evidence reinforces the need for scenarios. Productivity varies by task, developer, codebase, tool, and quality threshold. Technical capability may move quickly while organisational adoption, regulation, and trust move slowly. The future is more likely to branch than to arrive everywhere at once.

## Scenario One: The Bounded Assistant

If capability improves gradually while verification and integration remain costly, AI becomes a powerful but uneven assistant.

Developers use it to explain unfamiliar code, draft tests, produce documentation, and implement bounded changes. Non-programmers create prototypes, but experienced engineers remain essential for architecture, security, integration, and long-lived systems. High-stakes organisations restrict agents to narrow permissions and require substantial human review.

The economics remain attractive where failure is cheap and feedback is fast. They remain weak where mistakes are difficult to detect or costly to reverse. AI adoption grows, but concentrates in tasks whose output can be tested objectively.

**Signals to watch:** persistent model instability; review time rising with generated volume; weak performance in large unfamiliar repositories; tight organisational limits on agent authority.

## Scenario Two: Ordinary Development Infrastructure

If capability improves gradually while verification and integration become cheaper, AI becomes ordinary development infrastructure.

Frameworks, typed interfaces, policy engines, visual regression tests, security scanners, and automated evaluation make generated work easier to constrain. Developers use AI as routinely as search, compilers, package managers, and version control. Hybrid systems become normal: probabilistic models interpret requests while deterministic software validates data, permissions, calculations, and execution.

Non-programmers build more internal tools. Legacy modernisation becomes a major use case because AI can document old systems, map dependencies, generate characterization tests, and work through governed APIs. The job of the programmer moves upward toward requirements, architecture, evaluation, and stewardship.

**Signals to watch:** falling cost per successfully completed task; stable model interfaces; widespread automated evaluation; strong visual and behavioural testing integrated into agent workflows.

## Scenario Three: Generation Outruns Trust

If capability improves rapidly while verification and integration remain expensive, the world receives far more software than it can safely absorb.

AI produces impressive applications, migrations, and interfaces quickly. Small teams attempt portfolios that once required much larger organisations. But code generation outpaces the capacity to review dependencies, permissions, data handling, user experience, and maintenance consequences.

This is the quadrant in which my experience designing the language-learning screens becomes economically important. Producing another interface variation is cheap; judging whether it works across screen sizes, languages, accessibility settings, and real learning behaviour remains costly. Organisations may create fragile systems faster than they can understand them. Security incidents and maintenance burdens could erase apparent productivity gains.

The limiting factor is neither typing nor model intelligence. It is disciplined acceptance: evidence that the generated system is fit to keep.

**Signals to watch:** growth in AI-generated vulnerabilities and technical debt; larger review queues; rapid prototype growth without durable deployment; developers spending more time auditing than creating.

## Scenario Four: The Agentic Software Organisation

If capability improves rapidly and verification and integration also become much cheaper, software creation becomes more intent-driven.

A domain expert describes an application through conversation, screenshots, examples, business rules, and corrections. Agents scaffold the project, choose tested components, construct the data model, implement features, run builds and tests, render the interface at several sizes, prepare deployment, and maintain an audit trail. Professional developers supervise architecture, security, difficult integrations, and consequential decisions.

Natural language, observed work, and organisational records become source material for software. Code still exists, but much of it may be produced and revised without a person reading every line. Human-facing artefacts shift toward goals, policies, examples, acceptance criteria, prohibited actions, and evidence of behaviour.

A software organisation is partly an information-processing system. It receives signals from customers, incidents, regulations, and markets, then turns them into priorities, designs, code, tests, releases, and support. Coordinated agents could perform a meaningful portion of that cycle.

The future unit of production may therefore be neither the unaided programmer nor a single coding assistant. It may be a human objective connected to agents, deterministic services, repositories, tests, institutional context, and governance.

This does not create a human company. Agents do not acquire culture, responsibility, friendship, fear, or moral standing because they coordinate tasks. Capability must still be separated from authority, and people remain accountable for what the organisation permits the system to do.

**Signals to watch:** agents maintaining real products over time; safe coordination across specialised agents; automatic rollback and audit; evidence that generated systems remain coherent after repeated change.

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
