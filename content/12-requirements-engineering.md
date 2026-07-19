---
title: "Requirements Engineering"
---

# Requirements Engineering

AI-assisted software development is often described as a shift from coding to prompting.

That description is too small.

The deeper shift is from programming languages toward requirements. If AI can produce code quickly, the most important question is no longer only whether humans can write the implementation. It is whether humans can define the intended behaviour clearly enough for the system to build, evaluate, and maintain it.

This is why [[Requirements Engineering]] deserves its own place in the book. It is not the same as [[Prompt Engineering]]. Prompt engineering is one visible technique. Requirements engineering is the larger discipline of deciding what the system should do, why it should do it, under which conditions it should behave differently, and how anyone will know whether the result is correct.

Traditional software often followed a path like this:

```text
Requirements
↓
Design
↓
Programming
↓
Testing
```

AI changes the shape of the work:

```text
Requirements
↓
Conversation
↓
Iterative refinement
↓
Software
↓
Evaluation and verification
```

The programming language is no longer always the bottleneck. Understanding the problem becomes the bottleneck.

## Why Requirements Become More Valuable

When implementation is expensive, many ideas never reach software because the cost of programming exceeds the expected benefit. AI lowers that implementation cost, sometimes dramatically. That sounds as if software development becomes easier in every respect.

In one sense it does.

But the reduction in implementation cost exposes a different scarcity. If code is cheaper, unclear requirements become more expensive by comparison. A confused instruction can now become a confused prototype in seconds. A missing constraint can be converted into working but wrong behaviour. A vague description can produce an application that looks impressive while solving the wrong problem.

This is not a minor inconvenience. It is a structural change in the economics of software.

In the old bottleneck, the scarce resource was the ability to translate requirements into code. In the new bottleneck, the scarce resource is the ability to define requirements well enough that AI-generated implementation can be trusted, tested, and improved.

That means requirements are no longer just the document before software development begins. They become an active engineering surface.

## Requirements Are Not Prompts

A prompt may express a requirement, but the two are not identical.

A prompt is an instruction given to an AI system. A requirement is a claim about what the software must do. A prompt may be casual, temporary, and model-specific. A requirement should be inspectable, stable enough to discuss, and precise enough to test.

This distinction matters because AI systems can make prompts feel deceptively powerful. A user can type a request and receive working code. That is remarkable, but it can also hide ambiguity. The generated result may satisfy the wording of the prompt while violating the real intention behind it.

For example, "create a quiz" is a prompt. A requirement asks harder questions:

- What material may the quiz use?
- What level should the learner be tested at?
- Should questions appear one at a time?
- When may the answer be shown?
- What counts as a correct answer?
- What mistakes must the system avoid?
- What output format does the application require?
- How should the system behave when the input is incomplete?

Once those questions are answered, the prompt begins to resemble a specification.

That is why natural language does not remove engineering discipline. It moves engineering discipline into language.

## Evaluation Is Not Verification

AI also changes the testing conversation.

Traditional software relies on unit tests, integration tests, regression tests, acceptance tests, code review, static analysis, monitoring, and many other practices. These remain essential.

AI systems add another layer:

- Evaluation datasets.
- Benchmarks.
- Human feedback.
- Prompt evaluation.
- Model evaluation.
- Continuous evaluation.

This is not merely a theoretical distinction. [[AI Evaluation and Verification]] now tracks early research support for this chapter. NIST connects validation to requirements for a specific intended use. OpenAI describes evals as structured tests for measuring model performance despite generative variability. Google Cloud's evaluation documentation shows how production systems may use grounding, safety, fluency, exact match, custom rubrics, and custom functions. OWASP identifies risks such as insecure output handling and excessive agency when LLM outputs flow into applications and tools.

Evaluation asks whether an AI system performed well across examples. Verification asks whether a particular result, workflow, or system can be trusted for its intended use.

The difference is crucial.

An AI quiz generator might perform well across an evaluation set. It may usually create appropriate questions, usually avoid revealing answers, and usually follow the expected sequence. That is evaluation.

Verification asks a sharper question: can this particular quiz result be imported into the app, shown to a learner, and trusted not to contain the answer in the question, use the wrong source material, or break the application's format?

Evaluation measures performance. Verification establishes confidence.

This distinction should become central to the book because it explains why AI-assisted software development is not merely about generating more code. The more AI participates in software creation, the more engineering effort shifts toward specifying, evaluating, verifying, and governing behaviour.

## Explainability Becomes a Requirement

In traditional software, explainability is often implicit. If a program rejects a transaction, calculates a tax amount, or displays a warning, engineers can usually inspect the relevant code path.

AI makes this harder.

Suppose an AI system recommends rejecting a loan. Why?

Suppose it helps diagnose cancer. Why?

Suppose it generates a software architecture. Why this architecture and not another one?

In many domains, the answer cannot be "because the model said so." Explainability becomes an engineering requirement, especially when software affects money, health, safety, law, education, employment, or public services.

This does not mean every AI system must expose its internal mathematics to the user. Most users would not understand that even if it were possible. But the system must often provide reasons, evidence, traceability, source references, confidence levels, logs, fallback paths, or human review mechanisms.

Explainability is therefore not merely a philosophical problem. It is part of requirements engineering.

## Memory Changes Software Behaviour

AI also introduces a new kind of software memory.

This is not only "ChatGPT memory" in the consumer-product sense. It is the broader question of how AI-enabled applications remember context, retrieve knowledge, and maintain continuity across interactions.

Modern AI applications may use:

- Retrieval-augmented generation.
- Knowledge bases.
- Vector databases.
- Persistent context.
- User profiles.
- Document stores.
- Conversation histories.
- Application state.

These mechanisms change requirements. A conventional feature might ask, "What should the application do when the user clicks this button?" An AI-enabled feature must also ask, "What should the system know, remember, retrieve, ignore, forget, or cite?"

Memory therefore connects [[Requirements Engineering]] to [[Context Windows]], [[System Integration]], [[AI Agents]], and [[Software Verification]]. The behaviour of an AI system depends not only on the model but on what information surrounds it at the moment it acts.

## Agents Require Requirements Discipline

Agents should not be introduced as magic autonomous entities. They become possible when several capabilities are combined:

- Tools.
- Memory.
- Planning.
- Evaluation.
- Verification.
- Permissions.
- Monitoring.

Without those surrounding systems, an "agent" is just a model producing text. With them, it can take actions in the world: call APIs, update records, generate files, run workflows, or interact with other systems.

That makes requirements more important, not less.

An agent needs clear boundaries. What may it do? What must it ask permission for? What tools can it use? What data can it access? What should be logged? When must it stop? When must it escalate to a human?

The more agency a system has, the more explicit its requirements must become.

## Architecture Becomes More Valuable

AI makes coding cheaper. It does not make architecture less important.

In fact, architecture may become more valuable because cheap code increases the risk of building many disconnected pieces quickly. If every team, department, teacher, doctor, accountant, or entrepreneur can generate software, the question becomes how all that software fits together.

Architecture answers questions that code generation alone cannot:

- Where should the data live?
- Which systems should be authoritative?
- What should be deterministic?
- Where is probabilistic AI acceptable?
- How should errors be contained?
- How should components communicate?
- What must be observable?
- What must be reversible?
- What should be reused rather than regenerated?

AI can assist with these questions, but it does not make them disappear. If anything, it raises their importance because the volume of generated software may increase faster than organisations can govern it.

This is another economic shift. When coding was expensive, writing code consumed much of the budget. When coding becomes cheaper, design, architecture, integration, verification, and judgement absorb more of the value.
