---
title: "The Future of Programmers"
---

AI is changing programming in two directions at once. It allows more people to create software, and it moves professional programmers towards the parts of software engineering where mistakes, scale, and long-term consequences matter most.

This is more precise than asking whether AI will replace programmers. Producing a first version of code is only one part of the profession. Software also requires someone to define the problem, fit the change into an existing system, protect data, test behaviour, manage failure, and remain accountable after release.

As AI takes on more implementation, the boundary moves:

```text
more people can begin building
↓
more software can be attempted
↓
professional value moves towards architecture, integration,
verification, security, and responsibility
```

The result is not simply fewer programmers or unchanged programmers. It is a larger and differently shaped software-building profession.

## Translation Is Becoming Cheaper

> **Why it matters:** The historic monopoly on translating human needs into machine instructions is weakening.

For decades, programmers were necessary intermediaries between human intention and machine execution. A teacher understood the classroom problem. A doctor understood the clinical workflow. A business owner understood the process. But the machine required formal instructions, and a programmer supplied the translation.

AI reduces that dependency. A person can describe a workflow, provide examples, inspect a prototype, and correct the result without first mastering a programming language. Knowledge that once resided mainly in the minds of programmers is increasingly available through models trained on the accumulated work of the software community.

This redistribution is real, but incomplete. General programming knowledge does not include the private rules of one organisation, the history of one codebase, or the needs of one customer. Nor does a generated answer prove that the software is safe or correct.

Translation becomes cheaper. Responsibility does not.

## The Boundary Between Builder and Engineer

> **Why it matters:** The consequence of a system—not whether AI helped create it—determines how much engineering discipline it needs.

Consider a marketing analyst who wants a private tool that gathers campaign results and drafts a weekly summary. An AI agent can help the analyst connect exported data, generate the report, and revise the layout. If the tool fails, the error is visible and the old process remains available. This is a good setting for an AI-assisted builder.

Now extend the request. The tool will write directly to customer records, allocate advertising spend, serve several countries, and run automatically every night. The code may still be easy to generate, but the system now needs reliable data definitions, permissions, audit trails, failure recovery, integration tests, monitoring, and an accountable owner.

The example supports a simple distinction:

```text
AI-assisted building expands who can create a useful tool.
Professional engineering manages consequence, scale, and endurance.
```

The categories overlap. A domain expert can learn substantial engineering discipline. A professional engineer can use AI to move faster. What changes is the point at which specialist judgement becomes necessary, not the existence of that judgement.

## The AI-Assisted Builder

> **Why it matters:** Domain expertise can now enter the building process directly instead of being handed across a long translation chain.

An **AI-assisted builder** begins with a problem, product idea, or specialised knowledge and uses an AI agent inside a development loop:

```text
domain problem
↓
intention, examples, and requirements
↓
AI agent using project tools
↓
code, tests, builds, screens, and corrections
↓
human judgement
```

Entrepreneurs, teachers, researchers, consultants, small-business owners, and hobbyists can now reach further before they need a conventional engineering team. Some will create personal or temporary tools. Some will build prototypes. A smaller number, with sufficient discipline and support, will create durable products.

My own application followed this path. I was not a professional programmer, but I understood the learning problem and could judge whether the product helped a learner. AI gave me access to implementation capability. Months of requirements, testing, debugging, migration, and refinement were still required to turn that capability into a coherent application.

Wider access does not eliminate learning. It changes what a new builder must learn first: how to describe behaviour, inspect evidence, recognise failure, and know when the work has exceeded their competence or authority.

## Programmers Move Towards Consequence

> **Why it matters:** The most durable professional skills concern the decisions that hold a system together.

AI can increasingly produce standard screens, tests, scripts, database queries, and routine connections between systems. Remembering exact syntax becomes less valuable when a model can supply it immediately.

Professional work moves towards:

- **architecture:** how the parts should be organised;
- **domain modelling:** how messy reality should be represented;
- **integration:** how new capability connects to data, permissions, and older systems;
- **verification:** what evidence proves the software behaves correctly;
- **security and resilience:** what the system must resist and how it recovers; and
- **judgement:** whether a generated change belongs in the product at all.

This continues the history of abstraction. High-level languages reduced the need to think in machine instructions. Frameworks supplied common software structures. AI reduces the need to express every implementation detail manually.

The programmer does not simply move away from code. The programmer moves closer to consequence.

## Education After Syntax

Students should still learn programming, but not because society needs more people who can memorise syntax.

Programming teaches how procedures, data, state, and abstraction fit together. It teaches how to divide a problem, trace failure, and test whether a solution works. Those abilities become more important when code can be generated by a system that may sound confident while being wrong.

Education should therefore place greater weight on problem decomposition, data modelling, system design, testing, security, human-computer interaction, and critical use of AI output. Students should learn enough code to question what was generated, while also learning to express a requirement, design an experiment, and decide what evidence is sufficient.

AI makes shallow programming easier. It raises the value of deep engineering judgement.

## The Labour-Market Question

> **Why it matters:** Productivity evidence cannot be reduced to one number because the effect depends on the task, user, system, and quality standard.

Studies already show different results. [Field experiments reported in 2025](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) estimated a 26.08% increase in completed tasks among developers using an AI coding assistant. An [early-2025 METR study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that sixteen experienced open-source developers working in their own projects took 19% longer when AI tools were allowed. In [February 2026](https://metr.org/blog/2026-02-24-uplift-update/), METR said a later experiment produced an unreliable estimate because of selection and measurement problems. Its researchers believed developers were probably receiving greater gains than in early 2025, but described the evidence for the size of that change as weak.

These findings measure different work under different conditions. The useful question is always: faster at which task, for whom, under what quality standard, and with what downstream cost?

Economics nevertheless creates adoption pressure. Companies will compare AI-assisted teams with unaided teams. Some routine roles may shrink if the same work requires fewer people. Falling costs may also make more projects viable, expanding the total demand for software and for people who can supervise consequential systems.

The [U.S. Bureau of Labor Statistics](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) projects employment of software developers, quality-assurance analysts, and testers to grow 15% from 2024 to 2034. Forecasts can change, and employment totals can conceal large shifts in tasks and entry routes. The most defensible near-term conclusion is redistribution rather than simple disappearance.

## A Larger Profession, Differently Shaped

The future programmer may be an architect, verifier, integrator, designer of safe boundaries, and judge of trade-offs. The future builder may enter through medicine, education, law, science, or a problem no software company considered profitable enough to solve.

These groups will overlap. Domain experts will gain more engineering capability. Professional engineers will spend more time understanding domains and supervising systems that can act. The boundary among user, programmer, and tool will become less distinct.

The danger is to mistake code generation for software engineering. The opportunity is larger: more people can participate in creation while deep expertise concentrates on the decisions with the greatest consequence.

Individuals and small teams will encounter this shift first. Inside a large organisation, the problem is harder. General model capability must be connected to private knowledge, established systems, permissions, and accountability. [[19-enterprise-intelligence-layer|The Enterprise Intelligence Layer]] examines that institutional problem.
