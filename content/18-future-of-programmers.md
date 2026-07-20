---
title: "The Future of Programmers"
---

# The Future of Programmers

My first attempt to move the language-learning application from a simple web framework into native Apple software failed.

The AI could generate fragments and explain what ought to happen, but it could not hold the whole migration together. A proposed fix would fail to build; the next proposal would remain too close to the first. Although I was the non-programmer in the partnership, I sometimes had to suggest the technical escape route.

Roughly a year later, the same class of work had become achievable. A newer Codex workflow could inspect both projects, search across files, create the structure required by an Apple application, read compiler errors, revise its hypothesis, rebuild and continue. The migration still demanded many decisions, but a task that had crossed the earlier system's capability boundary had become tractable.

I found this astonishing. The answer had not merely become faster. The range of problems I could reasonably attempt had expanded.

That experience offers a better starting point than the familiar question, “Will AI replace programmers?” The important question is what happens when part of the expertise once locked inside the profession becomes available through an AI system—and when people outside the profession can use it to build.

## Translation Is Becoming Cheaper

For decades, programmers have been necessary intermediaries between human intention and machine execution. A teacher understood the classroom problem. A doctor understood the clinical workflow. A business owner understood the process. But the machine required formal instructions, and the programmer supplied the translation.

AI weakens that dependency. A user can describe a workflow, show an example, test a prototype and correct the result without first mastering a programming language. This is a real redistribution of power.

It is not the disappearance of difficulty.

Many people can ask AI to generate an application. Far fewer can guide it through months of refinement, recognise subtly wrong behaviour, preserve data, manage security and make the thousands of decisions required by a serious product. AI broadens access to software creation; it does not make everyone equally capable.

The positive change is that programming expertise is being externalised. Knowledge that once resided mainly in the minds of programmers is increasingly represented in models trained on the accumulated work of the software community. Through conversation and tools, a novice can draw on parts of that knowledge without acquiring all of it first.

Yet expertise has another layer: knowledge of this organisation, this codebase, this customer and the reasons earlier decisions were made. Experienced engineers often retain an advantage because they possess that context. The future contest is not simply human expert against AI. It is between people and teams that differ in how effectively they combine general machine capability with local knowledge and human judgement.

## What Happened in That One Year

It would be too simple to say that a better model solved my migration. Several things improved together:

```text
a more capable model
+ a stronger agent environment
+ better tools and feedback
+ better project context
+ a more experienced human supervisor
↓
a task crosses from impractical to achievable
```

Newer models were better at coding, planning and tool use. The agent had improved access to files, terminal commands, builds, screenshots and persistent project context. The application itself was better organised. I had also become better at describing requirements, preserving information and recognising failure.

This combined system matters more than any model score. Earlier, I had to supply low-level technical directions when the AI became trapped. More recently, the agent usually gathers evidence and finds a route itself. My role has moved towards defining behaviour, noticing when the outcome is wrong and deciding what should be kept.

That is the trajectory. A fixed list of what AI cannot do will age quickly. The more durable question is how the boundary between human intention and machine execution is moving.

## The AI-Assisted Builder

I am not a professional programmer. I became what might be called an **AI-assisted builder**: someone with a domain problem, product vision, persistence and enough technical curiosity to supervise an AI agent inside a real development loop.

```text
domain problem
↓
human intention and requirements
↓
AI agent working through tools
↓
code, tests, builds, screenshots and corrections
↓
human judgement
```

This category changes who can initiate a software project. Entrepreneurs, teachers, researchers, doctors, consultants, small-business owners and hobbyists can reach further before they need a conventional engineering team. Some will build personal tools. Some will create prototypes. A smaller number, with sufficient discipline and support, will create serious products.

The tools alone are not enough. My application required months of product decisions, testing, debugging, migration and stubborn refinement. It grew to include stored learning data, text extracted from photographs, animated stroke order, pronunciation search, analysis of character components and AI-assisted learning tasks. Wider access does not eliminate the need to learn; it changes what must be learned first.

## Programmers Move Upward

Routine implementation will not vanish, but less human time may be spent producing its first draft. AI can increasingly generate standard forms, settings screens, tests, scripts and common connections between systems. Remembering the exact syntax of a language becomes less valuable when the answer is immediately available.

Professional work moves towards the decisions that hold a system together:

- architecture—how the parts should be organised;
- verification—what evidence proves the software behaves correctly;
- integration—how new capability connects to data, permissions and older systems;
- domain modelling—how messy reality should be represented;
- security—what the system must never be allowed to do;
- judgement—when a generated result is acceptable and when it is not.

This continues the history of abstraction. High-level languages reduced the need to think in machine instructions. Frameworks reduced the need to reconstruct common software patterns. AI reduces the need to express every implementation detail manually.

The programmer does not simply move away from code. The programmer moves closer to consequence.

## Education After Syntax

Students should still learn programming, but not because society needs more people who can memorise syntax.

Programming teaches how procedures, data, state and abstraction fit together. It teaches why systems fail, how to divide a problem and how to test whether a solution works. Those abilities become more important when code can be generated by something that may sound confident while being wrong.

Education should place greater weight on problem decomposition, data modelling, system design, testing, security, human-computer interaction and critical use of AI output. Students should learn to read enough code to question it, but they should also learn to express a requirement, design an experiment and decide what evidence is sufficient.

AI makes shallow programming easier. It raises the value of deep engineering judgement.

## The Labour-Market Question

The evidence does not support a single, clean productivity number. A controlled GitHub Copilot experiment found that developers completed one bounded JavaScript task 55.8% faster. A [2025 preprint reporting field experiments](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) across Microsoft, Accenture and a Fortune 100 company estimated a 26.08% increase in completed tasks among developers using an AI coding assistant. Yet an [early-2025 METR study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that sixteen experienced open-source developers working in their own projects took 19% longer when AI tools were allowed.

The evidence continued moving. In [February 2026](https://metr.org/blog/2026-02-24-uplift-update/), METR said its earlier result no longer represented current tools. Late-2025 data suggested possible speed gains, but the size was highly uncertain. Google's DevOps Research and Assessment programme, known as **DORA**, associated greater AI adoption with lower delivery speed and stability in its [2024 report](https://dora.dev/research/2024/dora-report/); its [2025 research](https://dora.dev/research/2025/dora-report/) found higher speed alongside continued instability.

These findings measure different things: a short task, work in a familiar project, individual perception and organisation-wide delivery. They should not be averaged into one verdict. The useful question is always: faster at which task, for whom, under what quality standard and with what downstream cost?

Economics nevertheless creates adoption pressure. Companies will compare an AI-assisted team with an unaided one. If the assisted team produces dependable software faster or more cheaply, competitors will have to respond. Some routine coding roles may shrink. Falling costs may also make more projects viable and increase the total demand for software.

The [U.S. Bureau of Labor Statistics](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) projects employment of software developers, quality-assurance analysts and testers to grow 15% from 2024 to 2034. That forecast may change, and employment totals can conceal large shifts in tasks and entry routes. The most defensible near-term conclusion is redistribution rather than simple disappearance.

## A Larger Profession, Differently Shaped

The future programmer may be an architect, verifier, integrator, designer of safe boundaries and judge of trade-offs. The future builder may enter through medicine, education, law, science or a problem no software company considered profitable enough to solve.

These groups will overlap. Domain experts will acquire more engineering capability. Professional engineers will spend more time understanding domains and supervising systems that can act. The boundary between user, programmer and tool will become less distinct.

The danger is to mistake code generation for software engineering. The opportunity is much larger: more people can participate in creation while deep expertise is concentrated on the decisions that carry the greatest consequence.

That change will happen first for individuals and small teams. Inside a large organisation, the problem is harder. An AI can bring general programming knowledge, but it still needs access to everything the organisation has learned about itself.
