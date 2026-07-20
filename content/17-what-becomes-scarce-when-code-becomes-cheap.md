---
title: "What Becomes Scarce When Code Becomes Cheap?"
---

# What Becomes Scarce When Code Becomes Cheap?

![Scarcity shift](<figures/FIG-15-01 Scarcity Shift.png>)

The first chapter asked a question that now deserves a fuller answer:

If software becomes much cheaper to create, what becomes scarce?

The answer is not code.

Code still matters. It must run, integrate, perform, and be maintained. But if AI makes code easier to generate, then code is no longer the main constraint in every situation. The bottleneck moves.

This is what happens when an important cost falls. People do not merely produce the same thing more cheaply. They produce more of it, produce new kinds of it, and discover that other constraints become more important.

Software has always been limited by the cost of translating ideas into reliable machine behaviour. If AI reduces that translation cost, the scarce resources shift upward.

## Ideas Become More Important

When implementation is expensive, many ideas die early.

They are not rejected because they are bad. They are rejected because the cost of building them exceeds the expected benefit. A tool for one classroom, one family, one clinic, one research project, one small business, or one temporary workflow may be useful, but not useful enough to justify a conventional software project.

If implementation cost falls, more ideas cross the threshold of viability.

But this does not make all ideas valuable. In fact, abundance makes selection harder. When more things can be built, the question becomes what should be built.

Good ideas become scarce because they require contact with real problems. They come from domain experience, frustration, curiosity, observation, and judgement. AI can suggest ideas, but the most valuable ideas often come from people who live inside a problem long enough to see what outsiders miss.

## Domain Knowledge Becomes More Important

Generic software is easier to imagine than useful software.

A teacher understands classroom routines. A doctor understands clinical workflow. A lawyer understands procedural risk. A factory manager understands exceptions on the production floor. A language learner understands where existing apps fail. A small-business owner understands the irritating manual process no commercial product quite fits.

AI can help transform domain knowledge—deep understanding of the subject in which the software will be used—into software, but it cannot fully replace that knowledge. It can infer, generalise, and suggest. It can ask questions. It can provide examples from patterns it has seen. But the person closest to the problem often knows which details matter.

As the cost of implementation falls, domain expertise becomes a more valuable input into software creation.

## Requirements Become Scarce

Cheap generation does not solve unclear requirements.

It exposes them faster.

If AI can build a prototype quickly, vague intent becomes working ambiguity. A system may appear functional while embodying wrong assumptions. It may handle the normal case and miss the exceptions. It may implement what the user said rather than what the user needed.

This makes requirements more important. The scarce skill is not merely asking AI to build something. It is knowing what behaviour should exist, what should not happen, what edge cases matter, what trade-offs are acceptable, and how success will be measured.

In the AI era, requirements are not a bureaucratic prelude to programming. They are programming at a higher level of abstraction.

## Architecture Becomes Scarce

AI can generate code quickly. It cannot guarantee that the resulting system has a coherent architecture.

Software needs an overall structure that allows it to grow, change, connect to other systems, and remain understandable. The industry calls the discipline of designing that structure **software architecture**. It covers where one part ends and another begins, how data is represented, how parts communicate and depend on one another, who has permission to act, how software is released, how its behaviour is observed, and what happens when it fails.

When software is small, architecture can seem unnecessary. When software grows, architecture becomes the difference between speed and chaos.

AI may generate a working feature, but someone must decide where it belongs, how it interacts with existing systems, how it should be tested, how it will be maintained, and what future changes it should allow.

As code becomes more abundant, architecture becomes more valuable.

## Judgement Becomes Scarce

AI produces plausible output.

Plausibility is not correctness.

Judgement is the ability to decide whether an answer is useful, safe, elegant, excessive, incomplete, risky, or wrong. It requires experience, taste, domain knowledge, ethical awareness, and an understanding of consequences.

AI can help evaluate its own work, but it cannot be the final authority for every decision. Someone must decide when the output is good enough, when the risk is acceptable, when to ask for more evidence, when to stop, and when not to build the thing at all.

In a world of cheap generation, judgement becomes a central human contribution.

## Trust and Verification Become Scarce

The more software we generate, the more we need to know what can be trusted.

[[13-precision-and-probabilistic-ai|Precision and Probabilistic AI]] established the engineering lesson: AI can produce code, explanations, tests, summaries, and decisions quickly, but speed does not prove correctness.

Trust requires evidence. Tests, reviews, monitoring, structured outputs, validations, audits, and human oversight become more important when output becomes abundant.

This is especially true in high-stakes domains. A hobby app and a medical system do not require the same verification burden. The economics of AI will vary by risk.

Cheap code does not make reliability cheap.

Productivity evidence supports this caution. Small, bounded experiments show that AI can accelerate some programming tasks, while results across whole projects and releases are more complex. Google's DevOps Research and Assessment programme, known as **DORA**, found individual benefits alongside lower delivery stability and speed in its [2024 research](https://dora.dev/research/2024/dora-report/). Its [2025 report](https://dora.dev/research/2025/dora-report/) found higher speed but continued instability. In the [2025 Stack Overflow survey](https://survey.stackoverflow.co/2025/ai), 66% of respondents described AI answers that were almost right as a frustration, and 45% cited the time required to debug AI-generated code.

In other words, cheap generation moves the bottleneck. It does not remove it.

## Taste Becomes Scarce

Taste is easy to dismiss because it sounds subjective. But in software, taste matters.

Taste decides what to leave out. It decides whether an interface feels simple or cluttered, whether a workflow respects the user's attention, whether a feature belongs in the product, whether an automation is helpful or intrusive, whether a system is coherent or merely capable.

AI can generate many alternatives. That increases the need to choose.

When production becomes easy, curation becomes valuable.

The language-learning application's interface offered a small example. Once the AI coding agent accelerated functional implementation, more of my attention moved to what remained visible to the learner: spacing, labels, screen sizes, workflow clarity, and the feeling of the finished product. Interface refinement became a larger share of the human work because the machinery underneath had become faster to produce. That allocation need not be permanent. Tested design components, automated layout checks, and agents that render and inspect their own work can remove much of the mechanical correction, leaving people to concentrate on whether the experience serves its purpose.

## A Scarcity Shift in Practice

During parts of the language-learning project, I estimate that interface work consumed about 80% of my time. The figure is personal rather than a measured industry statistic, but the experience reveals how a bottleneck moves.

Codex could construct screens, connect data, migrate code, and implement logic at a speed I could not have approached alone. That made another kind of work more visible. Labels overflowed their boxes. Buttons became too narrow and wrapped words vertically. A keyboard covered the field being edited. A layout that looked acceptable on one screen failed on another. Sometimes the source code appeared reasonable until a screenshot exposed the combined spatial result.

The constraint was no longer whether code could be produced. It was whether the experience made sense to a learner. I had to decide which controls deserved space, what could be removed, which phrase was understandable, and whether an educational interaction worked as intended. Those decisions mixed taste with domain knowledge; a generic coding pattern could not settle them.

Traditional software tools still mattered. Apple's screen-layout framework supplied tested behaviour. Accessibility settings exposed stress cases. Preview and screenshot tools made the result visible. Reusable components reduced variation. Automated interface tests could verify that an element existed and could be tapped, while picture-comparison tests could detect unintended visual changes. The agent could also render the screen, inspect the image, and revise its own output.

Together, those mechanisms can reduce human effort dramatically. They turn “make it look right” into a constrained loop with observable evidence. But the final purpose remains human: the framework can keep text inside a box; it cannot decide by itself whether the box belongs in the learner's journey.

The project therefore demonstrates the larger economic shift. As implementation became cheaper, interface judgement, educational quality, architectural coherence, and verification became the **binding constraints**—the limits that held back further progress. Better AI may lower those costs too. Scarcity will move again rather than disappear.

## The New Software Economy

If software becomes cheaper, the economy of software creation changes.

We should expect more niche software, more internal tools, more personal applications, more temporary systems, more prototypes, and more software created by people whose primary expertise is not programming.

But this does not mean effort disappears. It means effort moves.

The scarce work shifts toward:

- Knowing the problem.
- Defining the desired behaviour.
- Designing coherent systems.
- Evaluating output.
- Integrating with reality.
- Building trust.
- Maintaining quality.

This is the real transformation. AI does not make human skill irrelevant. It changes which human skills matter most.
