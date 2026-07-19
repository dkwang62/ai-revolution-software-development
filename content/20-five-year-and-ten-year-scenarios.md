---
title: "Five-Year and Ten-Year Scenarios"
---

# Five-Year and Ten-Year Scenarios

![Five-year and ten-year scenarios](<figures/FIG-19-01 Future Scenarios.png>)

The future should be approached with humility.

AI is changing quickly. Model capabilities, costs, tools, regulations, business models, and social expectations are all unstable. Any confident prediction about a specific product, company, or model version is likely to age badly.

But careful scenarios can still be useful.

A scenario is not a prophecy. It is a structured way to ask what might happen if certain economic and technical trends continue. The purpose is not to predict exactly. It is to identify the forces that matter.

The forces this book has followed are:

- The cost of producing software.
- The level of abstraction available to humans.
- The cost of training and inference.
- The reliability of AI systems.
- The quality of integration with real software.
- The skills that remain scarce.

There is one more force that now belongs at the centre of this chapter: whether AI can move from assisting individual tasks to coordinating software work at the level of teams, workflows, and eventually parts of organisations.

That is why the most useful speculative image for the future may be [[Macrohard Speculation Packet|Macrohard]].

Macrohard may fail as a specific product, company, or Musk project. That would not surprise me. Many bold technology projects fail. But the concept is too important to dismiss. It asks whether a software company is ultimately a building full of people, or a system for turning goals, information, judgement, code, tests, support, and feedback into digital products.

If the answer is even partly the second, then AI agents may eventually simulate pieces of that system.

That possibility is the heart of this book's Futures section.

The fact that Macrohard was even proposed matters. It shows that this book's most ambitious speculation is not floating alone. The idea of an AI-run or AI-simulated software company has already entered public strategic imagination. Macrohard does not prove that such a company can work. It proves that the question has become serious enough for major AI actors to ask.

There is also a more extreme branch of the same future: [[AGI Side Story - If The Genie Stops Waiting|AGI]].

This book does not depend on AGI arriving. AI is already changing software development without it. But AGI would change the trajectory. The current revolution lowers the cost of turning human intent into software. AGI-like systems could lower the cost of organising the cognitive work around software: deciding, planning, coordinating, testing, improving, and learning.

In that world, the question would no longer be only whether AI can write code. It would be whether AI can coordinate enough of the software organisation itself to become a new kind of production system.

## The Current Position

At the current stage, AI can already assist with many software tasks: explanation, code generation, debugging, refactoring, tests, documentation, requirements clarification, and prototyping.

It is not equally reliable across all tasks. It works best when the task is well specified, the context is available, the risk is manageable, and the output can be checked.

The strongest near-term value is not full autonomy. It is acceleration. AI helps people move faster through understanding, drafting, exploring, and iterating.

Codex-like systems show the direction of travel. They are not merely better chat interfaces. They connect models to repositories, terminals, browsers, tests, permissions, and project context. That makes them early examples of the genie becoming operational: not just answering, but acting within boundaries.

The main constraints are verification, context, integration, cost, trust, and organisational adoption.

The labour-market signal is still mixed. [[Labour-Market Effects on Programmers]] suggests that the near-term impact may appear first in skills, role expectations, and hiring patterns rather than in a simple collapse of programmer employment. Official projections can still show growth while the content of the job changes substantially.

## The Forecast May Be Too Small

The greatest weakness in any five- or ten-year scenario may be that it imagines today's AI becoming gradually better. My experience with Radix suggests a less comfortable possibility: the boundary of what is feasible can move dramatically within a single year.

The failed attempt to scaffold the Streamlit-to-Xcode migration and the later success were not separated by a generation of computing. They were separated by roughly a year of progress in models, agent environments, tools, feedback, project context, and my own ability to supervise the work. If a difficult task can cross from impractical to achievable on that timescale, a five-year forecast cannot safely assume five similar annual increments.

Several forms of improvement can reinforce one another:

~~~text
models reason and code better
↓
agents use more tools and gather better evidence
↓
verification becomes more automatic
↓
successful work produces better context and reusable components
↓
more people attempt larger projects
↓
tools improve around the new patterns of use
~~~

This does not prove that progress will continue at the same rate. Bottlenecks, cost, regulation, energy, data, reliability, security, and diminishing returns could slow it. Adoption by organisations may also move much more slowly than technical capability.

But the opposite error matters too. Forecasts can underestimate compounding change because they evaluate the model as a single product. The real system is improving across several layers at once: model, agent, tools, hardware, context, frameworks, verification, and human practice.

The ordinary-infrastructure and intent-driven scenarios later in this chapter should therefore be read as a middle branch, not an upper bound.

## Five-Year Acceleration Branch

In a more dramatic five-year scenario, AI is not merely ordinary development infrastructure. For many bounded projects, it becomes the primary implementer.

A domain expert may describe an application through conversation, screenshots, examples, business rules, and corrections. An agent system scaffolds the project, chooses tested components, constructs the data model, writes the first implementation, runs builds and tests, renders the interface at several sizes, corrects visual defects, prepares deployment, and maintains an audit trail. Professional developers supervise architecture, security, difficult integrations, and the projects whose consequences justify deeper control.

Small teams may operate software portfolios that previously required much larger engineering organisations. Temporary and highly specialised software becomes economical because the cost of creating and later discarding it falls sharply. Applications may be generated for one classroom, one research investigation, one legal matter, one patient workflow, or one short-lived business process.

This branch does not require a machine with every human intellectual capability. It requires agent systems that are sufficiently reliable inside bounded environments, surrounded by frameworks, tests, permissions, and rollback.

## Ten-Year Acceleration Branch

A dramatic ten-year branch is harder to picture precisely because its products may not resemble today's development tools.

Natural language, examples, observed work, and organisational records could become the normal source material for software. Code would still exist, but much of it might be produced, tested, revised, and retired without a person reading every line. The important human artefacts would increasingly be goals, policies, acceptance criteria, prohibited actions, and evidence that the resulting system behaves appropriately.

Agent systems might coordinate large portions of the software lifecycle: research, requirements, design, implementation, testing, deployment, monitoring, support, migration, documentation, and continuous improvement. A small number of people could direct something that resembles a software organisation assembled from specialised agents and deterministic services.

If that occurs, the most dramatic change would not be faster programming. It would be a large expansion in the quantity and specificity of software humanity can afford to create. Many activities that now adapt themselves to general-purpose products could instead receive software shaped around the activity.

This remains speculation. Ten years could also bring disappointment, fragmentation, regulation, or a reliability ceiling. The purpose of the acceleration branch is not to claim that the most dramatic outcome will occur. It is to acknowledge that the changes already observed over one year make today's apparently ambitious forecast an unreliable upper limit.

## Five-Year Scenario: AI as Ordinary Development Infrastructure

In a plausible five-year scenario, AI becomes ordinary infrastructure for software development.

Developers use AI assistants as routinely as they use search engines, compilers, documentation, package managers, and version control. AI helps read code, write tests, explain errors, generate migrations, update documentation, and suggest designs.

Non-programmers build more prototypes and internal tools. Some become serious AI-assisted builders. Organisations create policies for model use, data sharing, prompt templates, evaluation, and security.

AI features appear inside more applications, but production systems increasingly use hybrid designs: probabilistic AI for interpretation and deterministic software for validation, permissions, calculations, and execution.

Legacy modernisation becomes a major use case. AI helps document old systems, generate tests, map dependencies, and create integration layers.

Agents become useful in bounded workflows, especially where tools, permissions, and test environments are clear.

The main assumption behind this scenario is that model capability continues improving while inference becomes affordable enough for everyday development workflows.

## Five-Year Risks

The five-year scenario could disappoint if verification costs remain too high, organisations fail to integrate AI safely, model behaviour remains unstable, data-security concerns restrict usage, or productivity gains prove uneven.

There may also be a wave of poor-quality AI-generated software. If generation becomes cheap but engineering discipline does not improve, many organisations may create fragile systems faster than they can maintain them.

The limiting factor may not be AI capability. It may be human and organisational discipline.

## Ten-Year Scenario: Intent-Driven Software Creation

In a plausible ten-year scenario, software creation becomes far more intent-driven.

Humans describe goals, workflows, constraints, data, examples, and desired outcomes. AI systems propose architectures, generate implementations, run tests, integrate tools, monitor behaviour, and explain trade-offs.

Programming languages still exist, but many humans interact with them less directly. Code becomes an intermediate representation that AI can generate, inspect, and revise. Humans focus more on intent, design, verification, domain knowledge, and accountability.

Personal, niche, temporary, and organisation-specific software becomes more common. A teacher creates a classroom tool. A doctor prototypes a workflow aid. A researcher builds a specialised analysis interface. A family creates a private coordination app. A small business builds internal systems that previously would have been uneconomic.

Enterprise AI systems may reason across larger portions of organisations: finance, inventory, compliance, operations, customer service, and software infrastructure. Agents may coordinate workflows across tools, but serious systems still require permissions, logs, human review, testing, and governance.

[[Enterprise Context]] sharpens this scenario. The competitive advantage of future enterprises may depend less on the raw number of software engineers they employ and more on the quality, completeness, and accessibility of the organisational context available to their AI systems. Companies may compete by turning source code, documentation, architecture decisions, incidents, customer complaints, regulations, and business policies into machine-readable institutional memory.

The main assumption behind this scenario is that AI reliability, context management, tool use, and integration improve enough for organisations to trust AI with larger workflows.

## The Macrohard Scenario: The Software Company As An Agent System

The more radical scenario is not that AI writes more code.

It is that AI begins to coordinate more of the software organisation itself.

A software company is usually described as a collection of people: executives, product managers, designers, engineers, testers, support teams, technical writers, security specialists, sales engineers, and operations staff. But from another angle, a software company is an information-processing system. It receives signals from customers, competitors, regulations, incidents, and markets. It turns those signals into priorities, requirements, designs, code, tests, documentation, releases, support responses, and future plans.

That is the Macrohard question.

Can an AI system simulate enough of that information-processing machinery to become something like a software company?

Not a human company. Not a company with culture, ambition, politics, friendship, fear, pride, or moral responsibility. But a functional approximation of some company processes: gathering requirements, generating designs, writing code, running tests, triaging bugs, drafting documentation, monitoring usage, answering support questions, and proposing improvements.

The first version would not replace Microsoft. It would probably look much smaller and more practical. It might build internal tools. It might maintain dashboards. It might refactor code. It might update documentation. It might translate customer complaints into bug reports. It might coordinate a swarm of specialised agents around one product team.

But if that works, the unit of software production changes.

The old unit was the programmer.

The current unit is the AI-assisted programmer.

The future unit may be the agentic software organisation: a human objective connected to a coordinated system of agents, tools, tests, repositories, context, and governance.

That is why Macrohard matters. It is not important because its name is funny, or because one company may or may not build it. It is important because it gives the future a shape. It turns the question from "Can AI write code?" into "Can AI coordinate the work required to create and maintain software?"

If that answer becomes yes, even partially, then the economics of software change again.

Companies would not merely ask how many programmers they need. They would ask what work should be done by employees, what work should be done by AI agents, what context those agents need, what systems they may touch, what tests constrain them, and who remains accountable for the result.

The true test of Macrohard is therefore not code generation.

The true test is whether AI can handle ambiguity, priority, integration, verification, trust, and maintenance.

Those are the things software companies actually do.

## Ten-Year Risks

The ten-year scenario could fail or fragment.

AI may remain excellent at prototypes but unreliable at long-lived systems. Verification may dominate cost in high-stakes domains. Regulation may slow adoption. Security risks may limit tool use. Model providers may become infrastructure bottlenecks. Organisations may accumulate unmaintainable AI-generated systems. Human expertise may erode in dangerous ways if people rely on AI without understanding enough to evaluate it.

There may also be inequality in capability. People and organisations with strong domain knowledge, good data, engineering discipline, and access to powerful tools may benefit greatly. Others may use the same tools poorly and receive disappointing results.

## What Should We Watch?

The future depends on several signals.

First, cost per useful task. Not cost per token, model size, or benchmark score alone, but the cost of completing valuable work reliably.

Second, verification methods. If AI systems become easier to test, monitor, constrain, and audit, adoption in serious software will accelerate.

Third, context and memory. If models can reliably use larger, more relevant context, they can work on larger software systems.

Fourth, tool integration. The more safely AI can use tools, the more it can move from answering to acting.

Fifth, model stability. If behaviour changes unpredictably across versions, production use becomes harder.

Sixth, education. If people learn to specify, verify, and collaborate with AI, the benefits spread. If they treat AI as magic, failures multiply.

Seventh, labour-market composition. Watch whether employers reduce routine coding roles, increase demand for AI-literate developers, create more evaluation and governance roles, compress junior career ladders, or broaden software creation to product managers and domain experts.

Eighth, enterprise context. Watch whether organisations invest in code indexing, knowledge graphs, retrieval systems, documentation quality, meeting and decision capture, data governance, and AI-access policies as seriously as they once invested in cloud infrastructure.

Ninth, agentic organisation. Watch whether AI systems move beyond individual coding assistance into coordinated multi-agent workflows: product agents, testing agents, documentation agents, support agents, security agents, deployment agents, and planning agents working together under human supervision.

Tenth, company simulation. Watch whether any organisation demonstrates that AI can reliably perform a meaningful slice of a software-company function, not merely a task. The signal is not a demo where an agent builds a toy app. The signal is a system that maintains, improves, supports, and governs real software over time.

## The Industrialisation of Intelligence

The broader frame for this book may be the industrialisation of intelligence.

The Industrial Revolution mechanised physical work. AI begins to mechanise certain kinds of cognitive work: translation, drafting, summarisation, coding, classification, explanation, and planning.

Software development is the clearest case study because it is both knowledge work and machine work. It requires human intent, symbolic representation, formal execution, and economic value. If AI changes software creation, it shows how machine intelligence can alter the production of useful cognitive artefacts.

But the lesson is larger than software.

When intelligence becomes cheaper to access, the scarce resource shifts. The future belongs not merely to those who can produce output, but to those who know what output is worth producing, how to judge it, and how to connect it safely to the real world.

## The Final Question

The genie in the bottle is not simply that AI writes code.

The deeper mystery is that human intent can increasingly be transformed into working systems through conversation, examples, feedback, and machine-learned representation.

Codex gives that mystery a practical form. It is the genie I met: a system that could take intent, inspect the surrounding software world, use tools, revise code, and keep going until the work became something I could test.

That transformation is technical, but its consequences are economic.

It changes who can build software, what can be built, how quickly ideas become systems, and where human judgement creates value.

The future is not a world without programmers. It is a world in which programming moves upward, closer to intent, and software creation becomes available to more kinds of people.

The question is not whether AI will change software development.

It already has.

The question is whether we will understand the change deeply enough to use it well.
