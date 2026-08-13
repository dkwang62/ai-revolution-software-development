---
title: "Requirements Engineering"
---

AI-assisted software development is often described as a shift from coding to prompting.

That description is too small.

The deeper shift is from programming languages toward requirements. If AI can produce code quickly, the most important question is no longer only whether humans can write the implementation. It is whether humans can define the intended behaviour clearly enough for the system to build, evaluate, and maintain it.

This is why the disciplined work of defining a system deserves its own place in the book. It asks what the system should do, why it should do it, when it should behave differently, and how anyone will know whether the result is correct. The industry calls this **requirements engineering**. It is broader than prompt engineering, which focuses on the instructions supplied to an AI system.

The main terms form a simple ladder. A **prompt** says what you are asking the AI to do now. A **requirement** states what the finished system must do. A **specification** makes the requirements precise enough to build and test. **Evaluation** asks whether the result is useful. **Verification** asks whether it satisfied the stated rules. **Architecture** decides how the parts of the system will work together.

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

> **Why it matters:** AI makes ambiguity executable, which means an omitted rule can become a working mistake before anyone notices.

AI can turn an unclear idea into a working prototype within minutes. That is an achievement, but it also makes ambiguity executable. A missing rule no longer waits quietly in a meeting note; it becomes software that confidently does the wrong thing.

When code was expensive, the main bottleneck was translating requirements into implementation. As generation becomes cheaper, the bottleneck moves upward: defining intended behaviour well enough to build, test, and maintain it. Requirements become an active engineering surface rather than paperwork completed before the real work begins.

## From a Vague Request to a Testable Specification

Consider a customer-support assistant. It begins with an ordinary request:

> Help customers return unwanted items.

That is a useful prompt for exploration. It is not yet a dependable requirement. The AI might offer a return that is outside the policy, miss an exception, expose account information, or make a promise the company cannot keep.

The first step is to state the outcome from the customer's point of view:

> A customer with an eligible order can understand the return options and begin the correct process without the AI approving money or changing the order by itself.

Now the team can ask about boundaries and edge cases:

- Which return policy applies to this product and country?
- How does the system identify the correct order without exposing private information?
- What happens if the return window has expired?
- Which cases need a human approval?
- What must happen if the customer provides too little information?
- What must the system do if the model returns an invalid or unsupported recommendation?

The answers become acceptance criteria—statements that can be checked:

```text
Given an identified order and the current return policy,
when a customer asks to return an item,
then the system explains only the options for which that order is eligible.

The AI must not approve a refund or alter the order.
The response must cite the policy or order facts it used.
Cases outside the policy must be routed to a person or a defined conventional workflow.
If the response has the wrong structure, the system must reject it safely.
```

Only then should the team decide how to implement the behaviour: which instructions the model receives, what information it may retrieve, what output fields it must return, what deterministic checks the app performs, and when a human must remain in control.

The chain is the important part:

```text
vague request
↓
user outcome
↓
constraints and edge cases
↓
acceptance criteria
↓
testable specification
↓
implementation and verification
```

A prompt asks the AI to do something now. A requirement states what the finished system must do. A specification makes that behaviour precise enough to build and test. They can be written in the same language, but they serve different purposes.

## Field Note: When the Prompt Became the Specification

> **Why it matters:** Natural language can become a programming layer, but only when it carries enough precision to guide behaviour and testing.

The quiz feature in Radix taught me this lesson directly. At first, “create a quiz” sounded like a simple AI task. In reality, it contained many hidden requirements.

The quiz should draw from the learner's captured Chinese material. It should produce questions in Chinese with useful English explanation. It should avoid revealing the answer too early. It should not place pinyin where pinyin would give away the answer. It should vary the question styles. It should respect the learner's level. It should wait for the learner's answer before explaining the result. It should not pretend to be the learner. It should output text that the app and the human could actually use.

Those rules did not feel like “coding” in the traditional sense because I was writing them in English. But they were not casual conversation either. They were behaviour-defining instructions. When the quiz behaved badly, the repair often meant improving the specification rather than changing Swift code.

That experience reveals the new role of language:

```text
vague intention
↓
behavioural rules
↓
AI prompt/specification
↓
generated interaction
↓
human testing and refinement
```

This is why prompt engineering is too small a phrase. The important skill is not finding magic words that please a model. It is expressing intent, constraints, examples, forbidden behaviours, output format, evidence requirements, and stopping rules clearly enough that the AI system and the surrounding software can be checked.

In traditional software, a compiler rejects code that violates the programming language. Natural-language specifications do not have such a strict compiler. The rejection often comes later, when the user sees the wrong behaviour. That makes requirements discipline even more important, not less.

## Requirements for AI Behaviour

> **Why it matters:** An AI feature needs a specification not only for its answer, but for its evidence, uncertainty, permissions, and right to act.

AI adds questions that ordinary features may not raise. What should the system know or retrieve? What information must it ignore or forget? Must it cite its source? May it take an action, or only recommend one? What happens when it is uncertain? Which decisions require human approval?

These are not separate technical distractions. They are requirements because they change what the user experiences and what risks the organisation accepts. A loan recommendation may require reasons and source evidence. A support agent may be allowed to draft a refund but not approve it. A quiz generator may propose content but never change the learner's stored material without consent.

The greater the system's authority, the more explicit the boundary must be.

## Evaluation Is Not Verification

> **Why it matters:** A system can perform well on typical examples and still be unfit for a decision that demands an exact guarantee.

Because an AI may produce several acceptable answers, teams evaluate it across representative examples. An evaluation can show that the quiz usually follows the expected level, source material, and sequence.

Verification asks a narrower question: can this particular output be safely used now? Does it have the required fields? Did it expose the answer? Can the application parse it? Is every question grounded in permitted material?

Evaluation measures general performance. Verification checks a particular result or system against its stated rules. Both depend on requirements; without an agreed target, a team can measure activity without knowing whether it succeeded.

## The New Economics of Definition

> **Why it matters:** Clear definition is now a source of speed: it prevents a cheap first draft from becoming an expensive chain of corrections.

Cheap generation can multiply both good ideas and confused ones. Clear requirements reduce rework because they give the model less room to invent the wrong behaviour and give humans a visible basis for checking the result.

This is where valuable human work moves. Architecture decides where data lives, which parts must be deterministic, and how failures are contained. Domain experts identify the rules that matter in education, banking, medicine, or law. Engineers turn those rules into testable boundaries. AI can assist all three, but it cannot decide by itself what the organisation should value or what risk is acceptable.

The scarce skill is no longer merely telling a computer how to perform a procedure. It is deciding which procedure deserves to exist and describing it well enough that people and machines can tell when it is wrong.

That leads naturally to the next problem. Even when the requirement is clear, AI remains probabilistic. The system may produce several plausible outputs, and only some will be safe to use. [[13-precision-and-probabilistic-ai|Precision and Probabilistic AI]] asks how reliable software can be built around a model that does not behave like a traditional deterministic function.
