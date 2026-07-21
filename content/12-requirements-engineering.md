---
title: "Requirements Engineering"
---

# Requirements Engineering

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

AI can turn an unclear idea into a working prototype within minutes. That is an achievement, but it also makes ambiguity executable. A missing rule no longer waits quietly in a meeting note; it becomes software that confidently does the wrong thing.

When code was expensive, the main bottleneck was translating requirements into implementation. As generation becomes cheaper, the bottleneck moves upward: defining intended behaviour well enough to build, test, and maintain it. Requirements become an active engineering surface rather than paperwork completed before the real work begins.

## From a Vague Request to a Testable Specification

Consider the language-learning quiz used throughout this book. It begins with an ordinary request:

> Create a quiz from these Chinese characters.

That is a useful prompt for exploration. It is not yet a dependable requirement. The AI could choose any material, show all questions at once, reveal the answer immediately, or return text the application cannot read.

The first step is to state the outcome from the learner's point of view:

> The learner can practise the Chinese material they selected, one question at a time, without seeing the answer before responding.

Now the team can ask about boundaries and edge cases:

- May the model use material that was not selected?
- Where may pinyin appear?
- What happens when there is too little source material?
- What counts as a correct answer?
- Can the learner skip a question?
- What must the app do if the model returns an invalid format?

The answers become acceptance criteria—statements that can be checked:

```text
Given selected source material,
when the learner starts a quiz,
then the system asks one question at a time.

The question must not reveal its own answer.
Pinyin may appear in the explanation but not in the choices.
Every question must be traceable to the selected material.
If the response has the wrong structure, the app must reject it safely.
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

## Requirements for AI Behaviour

AI adds questions that ordinary features may not raise. What should the system know or retrieve? What information must it ignore or forget? Must it cite its source? May it take an action, or only recommend one? What happens when it is uncertain? Which decisions require human approval?

These are not separate technical distractions. They are requirements because they change what the user experiences and what risks the organisation accepts. A loan recommendation may require reasons and source evidence. A support agent may be allowed to draft a refund but not approve it. A quiz generator may propose content but never change the learner's stored material without consent.

The greater the system's authority, the more explicit the boundary must be.

## Evaluation Is Not Verification

Because an AI may produce several acceptable answers, teams evaluate it across representative examples. An evaluation can show that the quiz usually follows the expected level, source material, and sequence.

Verification asks a narrower question: can this particular output be safely used now? Does it have the required fields? Did it expose the answer? Can the application parse it? Is every question grounded in permitted material?

Evaluation measures general performance. Verification checks a particular result or system against its stated rules. Both depend on requirements; without an agreed target, a team can measure activity without knowing whether it succeeded.

## The New Economics of Definition

Cheap generation can multiply both good ideas and confused ones. Clear requirements reduce rework because they give the model less room to invent the wrong behaviour and give humans a visible basis for checking the result.

This is where valuable human work moves. Architecture decides where data lives, which parts must be deterministic, and how failures are contained. Domain experts identify the rules that matter in education, banking, medicine, or law. Engineers turn those rules into testable boundaries. AI can assist all three, but it cannot decide by itself what the organisation should value or what risk is acceptable.

The scarce skill is no longer merely telling a computer how to perform a procedure. It is deciding which procedure deserves to exist and describing it well enough that people and machines can tell when it is wrong.
