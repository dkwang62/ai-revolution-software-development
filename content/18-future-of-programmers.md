---
title: "The Future of Programmers"
---

# The Future of Programmers

Will AI replace programmers?

It is the question everyone asks, but it is not the best question.

A better question is:

> Which parts of programming were really translation work, and which parts require deeper engineering judgement?

For decades, programmers have been necessary intermediaries between human intent and machine execution. Users knew what they wanted in their own domain. Machines required precise formal instructions. Programmers stood between them, translating goals into software.

AI reduces the cost of that translation.

That does not mean programmers disappear. It means the role changes.

## The Programmer as Intermediary

[[04-programming-as-representation|Programming as Representation]] made a deliberately provocative argument: if part of programming is translating ideas into machine action, the user is often the original source of the idea. The teacher knows the attendance problem. The doctor knows the workflow. The business owner knows the process. The scientist knows the experiment.

Why should all of them need a human programmer to translate intent into software?

AI weakens that dependency. A user can describe a workflow directly to a model, refine the output, test a prototype, and sometimes create a useful tool without becoming a traditional programmer.

This is a real shift in power.

But it is not the whole story.

## The Limits of Democratisation

AI tools are available to many people. The capacity to build good software with them is not evenly distributed.

The Limits of AI Democratization adds the necessary correction. Building useful software still requires product clarity, persistence, debugging instinct, tolerance for ambiguity, and the ability to evaluate behaviour. Complex software requires architecture, data modelling, security, integration, testing, and maintenance.

Many people can ask AI to generate an app. Fewer can guide it through weeks or months of refinement, recognise when behaviour is subtly wrong, and make the thousands of product decisions required for a serious system.

AI broadens access. It does not make everyone equally capable.

This distinction is crucial. The future is neither "programmers vanish" nor "nothing changes". The future is a redistribution of software-creation capability.

The positive side of this argument is captured in Democratisation of Expertise. AI does not make a novice equal to the world's best programmer. But it can dramatically narrow the gap by making decades of accumulated programming knowledge available through conversation. Expertise begins to shift from residing only inside the programmer to being shared between the programmer and the AI. The human contributes goals, domain knowledge, constraints, judgement, and accountability. The AI contributes technical knowledge, established practices, rapid implementation, and iteration.

Externalisation of Programming Expertise makes the same point more sharply: for seventy years, programming expertise was stored primarily in the minds of programmers. Today, an increasing proportion of that expertise is being externalised into AI models trained on the collective experience of the software engineering community. The question is not whether an expert programmer is better than AI, or whether AI is better than an expert programmer. The better question is who makes better decisions when they work together.

Context as the Missing Ingredient adds the next refinement. Programming expertise has two layers: general software engineering knowledge and project-specific context. AI is increasingly strong at the first. Experienced engineers often retain an advantage in the second: business context, organisational memory, production history, unwritten requirements, and reasons earlier decisions were made. The sharper question is not whether AI lacks "human superiority," but which advantages of senior engineers come from better reasoning and which come from information the AI simply has not been given.

That is why the future may not belong only to the best programmers. It may belong to those who are best at combining human judgement with the accumulated programming knowledge embodied in AI models.

## What Programmers Stop Doing

Some programming work will become less central.

Writing boilerplate may become less valuable. Looking up syntax may matter less. Generating routine CRUD screens, simple scripts, standard tests, configuration snippets, and common integration patterns may become increasingly automated.

Programmers may spend less time typing first drafts and more time reviewing, shaping, constraining, and improving them.

This is similar to earlier abstraction layers. High-level languages did not eliminate programming. They reduced the need to think in machine instructions. Frameworks did not eliminate developers. They reduced the need to build common structures from scratch. AI may reduce the need to manually produce many routine code artefacts.

## What Programmers Do More Of

As routine implementation becomes cheaper, other skills become more important.

Programmers may do more architecture: deciding how systems should be structured, where boundaries belong, how data flows, and how change should be managed.

They may do more verification: designing tests, evaluations, monitors, and safeguards that determine whether AI-generated or AI-mediated systems behave correctly enough.

They may do more integration: connecting AI capability to legacy systems, databases, APIs, permissions, workflows, and operational constraints.

They may do more domain modelling: translating messy real-world processes into coherent concepts, data structures, rules, and interactions.

They may do more judgement: deciding when generated output is acceptable, when it is dangerous, and when a simpler deterministic system is better than an AI-driven one.

They may do more communication: working with domain experts who can now participate more directly in software creation.

In other words, programmers move upward.

## The Rise of AI-Assisted Builders

A new category is emerging: the AI-assisted builder.

This person may not have a traditional computer-science background. They may not read code fluently at first. But they have domain knowledge, product vision, persistence, and enough technical curiosity to collaborate with AI tools.

My experience belongs in this category. As a non-professional programmer driven by the problem of learning Chinese, I used AI to build increasingly sophisticated software. That was much less realistic before modern AI coding tools.

The project also cautions against an overly cheerful version of the story. The tools were available, but the tools were not enough. Building the application still required months of product decisions, testing, debugging, migration, and stubborn refinement. It moved from a simple web application to native software for Apple devices. It involved stored learning data, extracting Chinese text from photographs, animated stroke order, pronunciation search, analysis of character components, AI instructions, and commercial product decisions.

## One Year Changed What Felt Possible

The speed of improvement became real to me while moving the application from a web-based system to native Apple software.

A simple web framework had allowed me to turn a Python prototype into a working application in a browser. Moving it into Apple's native development environment was a much larger step. It was not enough to translate statements from one programming language into another. The new version needed an Apple application project, an overall structure, ways to represent and store data, navigation, memory of the user's current state, device-specific controls, database access, and a different method of constructing each screen.

My early attempt to use AI to scaffold that migration failed. The model could produce fragments and explain what ought to happen, but it could not reliably hold the whole migration together. Debugging often entered a loop: the AI proposed a fix, the build failed, and the next attempt remained too close to the previous one. Although I was the non-technical participant, I sometimes had to suggest the technical direction that allowed the model to escape.

About a year later, that pattern had become rare. A newer Codex workflow could inspect the working projects, search across files, create or modify the basic structure required by an Apple application, read compiler failures, change its hypothesis, rebuild, and continue. The migration still required gradual work and many decisions, but a task that had crossed the earlier system's capability boundary had become tractable.

I found this astonishing. The change was not simply that the same answer arrived a little faster. The range of problems I could reasonably attempt had expanded.

This is a personal observation rather than a controlled comparison. Several things changed at once. Newer models had stronger training and post-training for coding, reasoning, and tool use. Codex had become a better agent around the model, with improved access to files, terminal commands, builds, screenshots, and persistent project context. The project itself contained more structure for the agent to inspect. I had also become better at stating requirements, recognising failure, and preserving useful context.

It would therefore be too simple to say that training alone solved the migration. A better description is:

~~~text
a more capable model
+ a stronger agent environment
+ better tools and feedback
+ better project context
+ a more experienced human supervisor
↓
a task crosses from impractical to achievable
~~~

The practical result still matters. Earlier in the project, I sometimes had to supply a technical escape route when the AI became trapped. More recently, Codex usually gathers evidence and finds that route itself. Human intervention has moved away from proposing low-level fixes and toward defining the desired behaviour, noticing when the outcome is wrong, and deciding what should be kept.

This experience is also a warning about writing a book during a period of rapid change. A limitation observed last year may already be reduced this year. Claims about what AI “cannot do” may age faster than claims about why the task is difficult. The durable subject is not a fixed list of capabilities. It is the accelerating movement of the boundary between human intention and machine execution.

Codex is the clearest reason this example belongs in the future-of-programmers chapter. It did not simply answer questions about the application. It could enter the working environment: inspect files, search the codebase, run commands, interpret failures, edit the project, and help verify changes.

That makes the future role easier to see.

The AI-assisted builder is not merely someone who chats with a model. The AI-assisted builder is someone who can supervise an AI agent inside a real development loop.

```text
domain problem
↓
human intent
↓
Codex as supervised agent
↓
code, tests, builds, screenshots, fixes
↓
human judgement
```

This is not the end of programming. It is the movement of programming upward into intent, supervision, and verification.

That is not what happens when "anyone" casually asks AI for an app over a weekend. The more accurate lesson is subtler: AI allows a determined domain expert to reach much further than before, but the scarce human qualities do not disappear. Clarity, taste, persistence, judgement, and willingness to test the result still matter enormously.

This category matters because it changes who can initiate software projects. Entrepreneurs, teachers, researchers, doctors, consultants, small-business owners, and hobbyists may build prototypes or even serious tools without first assembling a conventional engineering team.

But the best AI-assisted builders will still need discipline. They must test, question, iterate, and learn. AI is an amplifier, not an autopilot.

## Education Changes

If AI handles more syntax and routine implementation, what should students learn?

They should still learn programming.

But the purpose changes. Learning programming is not only about memorising syntax. It is about understanding procedures, data, state, abstraction, debugging, architecture, and computational thinking. AI can generate code, but the human still needs to reason about whether the code represents the right procedure.

Students may need more emphasis on:

- Problem decomposition.
- Data modelling.
- System design.
- Testing and verification.
- Security and privacy.
- Human-computer interaction.
- Requirements and communication.
- Working critically with AI output.

AI may make shallow programming easier. It makes deep software judgement more important.

## The Labour Market Question

The labour-market effects are uncertain.

AI may reduce demand for some routine coding work. It may increase demand for software by making more projects viable. It may allow smaller teams to build more. It may create new roles around AI evaluation, model integration, prompt operations, agent supervision, and AI governance.

The outcome will vary by industry, risk level, organisation, and task type.

A startup building a prototype may need fewer developers at first. A bank integrating AI into legacy systems may need more engineering discipline, not less. A small business may build tools without hiring a traditional team. A software company may ship faster but face greater verification demands.

The emerging evidence is mixed but useful. A controlled GitHub Copilot experiment found developers completed one bounded JavaScript task 55.8% faster with Copilot. A [2025 preprint reporting field experiments](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) across Microsoft, Accenture, and a Fortune 100 company estimated a 26.08% increase in completed tasks among developers using an AI coding assistant. But [METR's early-2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers working in their own repositories took 19% longer when AI tools were allowed.

The evidence is moving. In [February 2026](https://metr.org/blog/2026-02-24-uplift-update/), METR said the early result no longer represented current tools. Its late-2025 data suggested possible speedups, but participant selection and unreliable time measurement made the size highly uncertain. DORA's [2024 report](https://dora.dev/research/2024/dora-report/) associated greater AI adoption with lower delivery throughput and stability; its [2025 research](https://dora.dev/research/2025/dora-report/) found higher throughput alongside continued instability. These findings are not contradictions that can be averaged into one productivity number. A short, bounded task, work inside a familiar repository, a developer survey, and organisation-level delivery measure different things. The question is always: faster at which task, for whom, under what quality standard, and with what downstream cost?

The lesson is not that AI always helps or always hurts. The lesson is that productivity depends on task type, codebase familiarity, implicit requirements, review burden, tool maturity, and engineering discipline.

Economics adds the adoption argument. The relevant comparison is not AI against the world's best programmer. It is an AI-assisted programmer against an unaided programmer. If AI lets one team deliver acceptable software faster, more cheaply, or with a smaller team, competitors will eventually face pressure to adopt similar tools. Adoption will still depend on whether the savings survive verification, integration, and maintenance.

The labour-market evidence is equally nuanced. The [U.S. Bureau of Labor Statistics](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) projects employment of software developers, quality-assurance analysts, and testers to grow 15% from 2024 to 2034. At the same time, research from labour-market and management organisations suggests that AI is changing skill demand, job descriptions, and the mix of work activities. The more likely near-term story is redistribution rather than disappearance: less value in routine code production, more value in requirements, architecture, verification, integration, and judgement.

Predictions should be cautious. The direction is clear: the boundary between user, programmer, and tool is moving. The exact labour-market distribution is not.

## The Future Role

The future programmer is less likely to be only a code producer.

The future programmer may be:

- An architect of systems.
- A verifier of machine-generated work.
- A translator between domain experts and AI tools.
- A designer of safe boundaries.
- An integrator of models, tools, and legacy systems.
- A maintainer of trust.
- A judge of trade-offs.

This is not a demotion. It is a movement toward higher-leverage work.

The danger is that people mistake code generation for software engineering. The opportunity is that more people can participate in software creation while professional engineers focus on the parts that require deeper expertise.
