---
title: "The Economics of Software Development"
---

# The Economics of Software Development

Imagine a bank changing one apparently simple rule: customers who receive a particular kind of payment should become eligible for a different service.

The visible change may be a line of text and a button. Behind it lie questions about customer identity, transaction history, regulation, fraud, permissions, databases, older systems, mobile screens, audit records, testing, and what happens when the rule is wrong. The cost is not primarily the number of characters a programmer types. It is the cost of understanding the organisation well enough to change its behaviour safely.

This is why software has historically been expensive.

## Software Is Accumulated Knowledge

Code is the visible artifact, but a working system contains more than code. It embodies decisions about customers, products, exceptions, data, sequence, authority, and failure. Some decisions are explicit in requirements or tests. Others are scattered across old files, employee memory, database fields, and behaviour nobody dares to change.

Software can therefore be understood as accumulated knowledge made operational. It is knowledge that causes things to happen repeatedly: a payment is accepted, a student is enrolled, an order is routed, a warning appears, or access is denied.

Creating software is expensive because the knowledge must be discovered, negotiated, represented, tested, integrated, and maintained. Programming skill is one part of that work. Domain expertise, architecture, coordination, security, and verification are others.

## The Human Expertise Bottleneck

Historically, an idea reached software through scarce specialists. A customer or domain expert explained the need. Analysts and designers refined it. Engineers translated it into structures and procedures a machine could execute. Testers and users exposed the misunderstandings. Operations teams kept it running.

Every handoff consumed time and introduced loss. The person closest to the problem often could not change the software directly. The programmer who could change it might not understand the problem's full context.

The economic bottleneck was human expertise coordinated across that gap.

![The human expertise bottleneck in traditional software development](figures/FIG-01-02-Human-Expertise-Bottleneck.png)

The scale is visible in one national snapshot. The [U.S. Bureau of Labor Statistics](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) counted about 1.9 million software developers, quality-assurance analysts, and testers in 2024. Their median annual wage was $131,450, with roughly 129,200 openings projected each year over the following decade. These numbers cover only three occupations in one country; they exclude product managers, designers, security specialists, operations staff, domain experts, and the cost of delay. They do not prove that software is inefficient. They show how much specialised human capacity society already devotes to turning knowledge into dependable machine behaviour.

Salaries make the bottleneck visible but do not define it completely. An employee costs an organisation more than salary: benefits, equipment, management, recruiting, office and cloud services, coordination, and the delay before a team can deliver value. A project also carries the cost of requirements, design, security, testing, deployment, support, and maintenance.

A useful conceptual model is:

```text
software cost
=
discovery and requirements
+ architecture and implementation
+ integration and verification
+ deployment and operation
+ maintenance and change
```

This is not an empirical equation with universal coefficients. It is a reminder that reducing one term does not eliminate the others.

## Why Typing Faster Was Never Enough

Tools have long made programmers more productive. Better languages, libraries, frameworks, cloud services, and open-source packages reduced the amount that had to be built from scratch. Yet demand for software continued to expand because organisations attempted more systems and made existing systems more ambitious.

The same response may follow AI. If producing a first implementation becomes cheaper, projects that were previously too small, specialised, or uncertain may become worth attempting. A teacher may build a narrow learning tool. A department may automate a workflow no software vendor would serve. A company may test several prototypes before choosing one.

Lower cost does not automatically create proportional demand. The response depends on trust, complementary costs, organisational capacity, and whether the new software creates enough value. Cheap generation is of little use when integration, approval, or risk remains prohibitive.

## What AI Changes

AI makes portions of expert knowledge available on demand. A model can reproduce and adapt patterns associated with programming languages, libraries, common architectures, debugging, tests, documentation, and interface design. A coding agent can connect that capability to files, terminal commands, browsers, and build systems.

This reduces several kinds of cost:

- **Translation cost:** moving from an informal request toward specifications and code.
- **Search cost:** finding relevant APIs, patterns, files, and explanations.
- **Drafting cost:** producing a first implementation, test, migration script, or document.
- **Iteration cost:** changing the draft after feedback.
- **Coordination cost:** making an idea visible earlier so that people can respond to something concrete.

Radix illustrates the change at a small scale. I could describe a learning behaviour in ordinary English, observe a working version, and refine it without first becoming fluent in every layer of Swift and Xcode. The Genie compressed the journey from idea to testable artifact.

It did not eliminate the journey. A quiz still needed good educational rules. Generated code still required builds and testing. User interfaces still had to fit different screens. Rapid feature growth created pressure to refactor the architecture. AI reduced the cost of some expertise while exposing the value of other expertise.

## The New Costs

AI introduces its own economic terms: model fees, latency, context preparation, tool integration, security, evaluation, supervision, and the review of generated work. An organisation may generate code faster and then spend more time understanding, validating, or maintaining it.

The relevant unit is therefore not the cost of generated tokens or lines of code. It is the **cost per successfully completed task** after correction, integration, and risk.

For a low-stakes prototype, an imperfect first attempt may still be valuable. For a medical, financial, or safety-critical system, verification can dominate the economics. The same model capability has different value depending on the system around it.

## Why This Changes the Software Economy

When the cost of implementation falls, ideas and domain judgment can move closer to production. Traditional engineers gain leverage. Non-traditional builders can participate. Small organisations can attempt specialised software. Established companies can explore old systems more cheaply.

The benefit will not be evenly distributed. People and organisations with clear goals, accessible data, good architecture, evaluation discipline, and authority to change workflows will capture more value than those who merely purchase a model subscription.

The deeper consequence is a shift in scarcity. Code does not become worthless; it becomes less likely to be the binding constraint. Requirements, context, architecture, integration, trust, and taste take a larger share of the remaining work.

To understand why AI can create this shift, we need to place it inside a much older history. Computing has repeatedly advanced by allowing people to work at a higher level while machinery handles more of the detail below. That mechanism is abstraction.
