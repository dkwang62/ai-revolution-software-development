---
title: "Side Chapter: From Demonstration to Daily Work"
---

An AI demonstration can be astonishing. A model reads a document, drafts a report, writes a program, spots a pattern, or answers a difficult question in seconds. It is natural to assume that the organisation now possesses that capability.

Usually, it does not—at least not yet.

A demonstration proves that a model can do something under favourable conditions. Everyday work requires something larger: the right problem, reliable information, a useful interface, people who know what to do with the result, clear authority, safeguards, and a way to learn whether the system is actually helping.

The gap between those two things explains why an impressive pilot can fail to become normal work.

## The Day-200 Question

> **Why it matters:** A convincing demonstration has no business value unless it can remain useful, trusted, and affordable long after the demonstration ends.

Imagine a customer-service demonstration. An AI reads a customer message and produces a polite, accurate-looking reply. Everyone in the room is impressed.

Now ask a different question: what should be happening on day 200, after thousands of real customers have used it?

- Does the AI know the current returns policy, not last year's version?
- Can it see the customer's actual order, while respecting privacy?
- Does it know when a refund needs a manager's approval?
- Can a staff member correct a bad draft easily?
- Is somebody measuring whether replies are faster _and_ whether customers are happier?
- What happens when a new product, a new policy, or an unusual complaint changes the situation?

The first question is about model capability. The second is about an operating system for work.

That distinction should make readers more optimistic, not less. The model is no longer the only expensive or scarce ingredient. Organisations can build the surrounding system step by step, beginning with a bounded workflow and improving it through evidence.

## An AI Project Is a Team Sport

AI adoption is often described as if a company merely needs an AI department. In practice, useful systems cross several kinds of knowledge.

| Contributor                              | What that person protects or contributes                                         |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| Business owner                           | Chooses a problem worth solving and defines the value of a better outcome.       |
| Domain expert                            | Explains the exceptions, language, risks, and rules that outsiders do not know.  |
| Users                                    | Reveal whether the workflow is genuinely useful, understandable, and practical.  |
| Data and technology team                 | Connect the relevant information, systems, and tools safely.                     |
| Security, privacy, and compliance people | Set boundaries for sensitive information, permissions, records, and obligations. |
| Leaders                                  | Choose priorities, provide time and resources, and decide who is accountable.    |

No one group can substitute for the others. A brilliant model cannot discover an unstated business rule reliably. A domain expert cannot make an unsafe system secure by wishing it so. A technology team cannot decide whether a faster process is a better process without the people who live with its consequences.

This is the practical meaning of human-in-the-loop. It is not simply a person clicking “approve” at the end. Humans help define the goal, supply missing context, design the exceptions, judge borderline cases, and decide when the evidence is strong enough to expand the system's authority.

## Start With the Work, Not the Technology

> **Why it matters:** Starting from a stubborn, valuable task prevents an organisation from buying an impressive tool with nowhere useful to apply it.

The most productive question is not “Where can we use AI?” It is:

> Which repeated decision, explanation, search, hand-off, or piece of drafting is slow, costly, error-prone, and important enough to improve?

Good early candidates usually have five features:

1. A real user has a recurring problem.
2. The desired outcome can be described in plain language.
3. The task has enough examples or evidence to learn from and evaluate.
4. A mistake is either cheap, detectable, or reviewable.
5. Success can be measured in the real workflow.

This is why a narrowly focused assistant often creates more value than a grand promise to “transform the business.” It can be tested, corrected, and trusted a little at a time.

## Not Every AI Problem Is a Generative-AI Problem

> **Why it matters:** Choosing the simplest suitable technique is often safer, cheaper, and more useful than putting a generative model into every workflow.

The public conversation often treats AI as one thing. It is better understood as a small family of tools, each suited to a different job.

| Kind of system                  | Plain-language question                                                | Example                                                                  | What it should not be confused with                                  |
| ------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Rules and conventional software | “What must happen exactly?”                                            | Calculate tax using an approved formula.                                 | A model should not invent a legally fixed calculation.               |
| Predictive AI                   | “What is likely to happen?”                                            | Estimate which shipment may arrive late.                                 | A prediction does not decide what the company should do.             |
| Optimisation                    | “Which option is best under these constraints?”                        | Choose delivery routes while respecting capacity and time.               | The “best” answer depends on goals and constraints chosen by people. |
| Generative AI                   | “Can you create, explain, summarise, translate, or draft?”             | Draft a customer reply or create a first version of code.                | Fluent output is not proof of factual correctness.                   |
| Perception and robotics         | “What is present in the physical world, and how should a machine act?” | Identify a damaged part on a production line or guide a warehouse robot. | A language model alone is not a safe physical-control system.        |

These tools can be combined. A retailer might use prediction to forecast demand, optimisation to plan replenishment, generative AI to explain the plan to managers, and ordinary software to enforce the ordering rules. This is another reason the future enterprise will be a system of systems, not a single all-powerful model.

## Data Is Both Fuel and Evidence

> **Why it matters:** The same data that helps an AI answer can also be the evidence used to prove whether the answer improved a real decision.

Data has two different jobs in an AI project.

First, it supplies context: the policy, product catalogue, order history, code, document, or sensor reading that helps a system act appropriately now. Second, it supplies evidence: the record of what happened, which lets the organisation discover whether the system helped.

Neither job is automatic. Data may be incomplete, duplicated, old, inconsistent, wrongly labelled, or collected for a purpose different from the new task. A model can appear accurate in a test yet fail in the real world because the real inputs are different. This is called **overfitting**: the system has learned the examples it was shown too closely and does not generalise well to new cases.

The world also changes. A retailer introduces a new product; a bank changes its fraud controls; a company reorganises its approval process. When the patterns in live work change, a model or its supporting instructions can slowly become less useful. This is called **data drift**.

The practical response is not to panic. It is to keep a simple discipline:

```text
Know where important data came from
        ↓
Check whether it is current and suitable for the task
        ↓
Test on realistic cases, including awkward exceptions
        ↓
Monitor live results and complaints
        ↓
Correct the data, instructions, workflow, or model when conditions change
```

This is why the [[19-enterprise-intelligence-layer|Enterprise Intelligence Layer]] needs more than a clever retrieval system. It needs ownership, permission, dates, provenance, feedback, and maintenance.

## Design for the Person at the Moment of Decision

An AI system is not successful merely because it produces a high score in a technical test. It must help a person make or carry out a better decision.

Suppose an AI flags a loan application as risky. A useful design shows the reviewer the relevant evidence, states its uncertainty, lets the reviewer inspect or challenge the result, records the final decision, and provides a route for appeal or correction. An unhelpful design presents a mysterious red warning and silently turns it into an outcome.

Human-centred design does not mean that humans must perform every step forever. It means that the system is designed around the people affected by it: their information, time pressure, dignity, ability to correct errors, and right to know who is responsible.

The appropriate level of autonomy should match the consequence of being wrong:

| Consequence of error               | Sensible design                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| Low                                | AI can draft, search, classify, or recommend, with light checking.                              |
| Moderate                           | AI proposes an action; a person reviews important cases and exceptions.                         |
| High                               | AI may gather evidence and prepare options, but a clearly accountable human makes the decision. |
| Safety-critical or legally binding | Use strict rules, specialist review, audit trails, and carefully bounded automation.            |

[[14-economics-of-trust|Trust]] is therefore not an abstract ethical decoration. It is what determines which useful actions an organisation can safely permit.

## From Pilot to Everyday Work

> **Why it matters:** Adoption is a continuing learning loop, not a launch date; the system must improve alongside the people and process using it.

The path from a promising demonstration to a durable system is usually a loop, not a single launch.

```text
Choose one valuable workflow
        ↓
Define the user, desired outcome, boundary, and measure of success
        ↓
Build a small, reviewable version
        ↓
Test it with real cases and compare it with the old way of working
        ↓
Improve the data, instructions, interface, controls, and training
        ↓
Expand only where the evidence supports it
        ↓
Monitor, maintain, and revise as the work changes
```

This is close to the agentic loop described in [[16-agents-tools-and-integrated-systems|Chapter 14]], but at the organisational scale. The organisation observes, acts, measures, and learns.

There are also strategic choices. A company should ask whether it should buy a finished application, configure an existing platform, connect a foundation model to its own knowledge, or build a specialised system. There is no universal answer. The more distinctive, sensitive, and central the workflow is, the more likely the organisation needs control over its data, interfaces, evaluation, and governance—even if it rents the underlying model.

## The Completeness Test

Before calling an AI initiative successful, ask seven plain questions:

1. What exact work is becoming better, for whom?
2. What evidence will show that it is genuinely better?
3. Which kind of AI is appropriate, and which parts should remain ordinary software?
4. Where does the information come from, and how will it stay current?
5. Who can correct, override, or stop the system?
6. Who is accountable when it fails?
7. What must be maintained when the business, data, model, or regulations change?

These questions make AI less mystical. They turn it back into what it must become to create economic value: a well-designed part of a larger human system.
