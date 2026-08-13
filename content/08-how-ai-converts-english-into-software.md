---
title: "How AI Converts English Into Software"
---

How can an idea expressed in ordinary English become working software?

The short answer is that an AI model has learned relationships among requests, requirements, designs, source code, tests, errors, and explanations. It can use those relationships to propose code that expresses the requested procedure. But English does not become dependable software in one step. The request must be interpreted, unstated decisions must be exposed, the proposal must fit the existing system, and the result must be checked.

This chapter follows that transformation:

```text
intent
↓
requirements and decisions
↓
software structure
↓
source code
↓
execution and evidence
```

![English to software](<figures/FIG-07-01 English To Software.png>)

An AI chatbox may stop after producing a code snippet. A coding agent can continue through project inspection, file edits, builds, errors, revisions, and verification. In both cases the model generates a proposal. The wider workflow determines whether that proposal becomes working software.

## From Intent to Procedure

> **Why it matters:** English can describe a goal, but software must turn that goal into explicit data, decisions, and behaviour.

Software represents procedures precisely enough for a machine to execute them. It defines data, operations, conditions, sequences, permissions, errors, and outputs.

Consider a simple request:

> Build a feature that lets users save favourite Chinese characters and review them later.

This sentence is not code, but it contains software structure. It implies a user. It implies a collection of characters. It implies a save action. It implies persistent storage, meaning the information remains after the application closes. It implies a review screen. It may imply ordering, deletion, search, synchronisation between devices, backup, and different user-interface states such as loading, empty, or ready.

A human developer hears the request and begins translating. What data model—the organised description of the information and its relationships—is needed? Where should favourites be stored? What happens if the same character is saved twice? How does the user remove one? Should favourites sync across devices? What if the database is unavailable?

A useful first step is to turn the request into requirements:

```text
- The user can mark a character as a favourite.
- The app stores favourites persistently.
- The user can open a favourites screen.
- The user can remove a character from favourites.
- Duplicate favourites are not created.
```

The same behaviour can then be expressed as pseudocode:

```text
if user_taps_favourite(character):
    if character not in favourites:
        favourites.add(character)
        save(favourites)
```

From there it may become a data model, screen design, database table, test case, and Swift function. AI can help move between these forms because the trained model has learned recurring software patterns. The critical intermediate layer is not a hidden programming language. It is the set of decisions that turns a broad intention into behaviour precise enough to implement.

If those decisions remain unstated, the model fills the gaps with plausible assumptions. Sometimes they are helpful; sometimes they create the wrong system. AI does not remove the need to think clearly. It exposes unclear thinking faster.

## A Worked Example: English to Python

Let us slow the process down and use a tiny example.

Suppose the user writes:

```text
Write a Python function that takes a list of numbers and returns the average.
```

A useful answer might be:

```python
def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)
```

The code expresses familiar patterns: define a function, accept a collection, handle the empty case, add the values, and divide by the count. The model did not need to retrieve this exact function from a catalogue. It generalised from related examples of language, mathematics, and Python.

For a chatbox, the example may end here: prompt in, code out. A coding agent can place the proposal inside a larger workflow. A **repository** is the project folder together with its recorded change history:

```text
English prompt
↓
repository context
↓
plan
↓
code change
↓
test or build
↓
error feedback
↓
revision
↓
verified change
```

The model proposes text; the agentic workflow connects that text to tools, project context, and feedback.

The output still contains an unstated decision: an empty list returns `0`. The user might instead want an error, a missing value, or a special message. The model filled a gap with a plausible assumption. This is why generation must lead to requirements and verification, not directly to trust.

## Short Prompt Versus Long Prompt

Now compare the short prompt with a more precise one:

```text
Write a Python function called average_score that takes a list of numbers.
If the list is empty, raise ValueError.
Ignore None values.
Return the result rounded to two decimal places.
Include type hints and a docstring.
```

This prompt has more tokens, but it also gives the model more constraints.

The model now has to represent more requirements:

```text
function name = average_score
input = list of numbers
ignore None
empty list after filtering = error
round output to 2 decimal places
include type hints
include docstring
```

A plausible output becomes:

You do not need to understand every symbol in the code below. Notice only that the longer request produced code containing each rule the user specified: the name, missing values, the empty-list error, rounding, type information, and a short description.

```python
from typing import Iterable, Optional


def average_score(scores: Iterable[Optional[float]]) -> float:
    """Return the average score rounded to two decimal places, ignoring None values."""
    valid_scores = [score for score in scores if score is not None]
    if not valid_scores:
        raise ValueError("average_score requires at least one numeric score")
    return round(sum(valid_scores) / len(valid_scores), 2)
```

The longer prompt costs more because the model must read and represent more input tokens. The output also costs more because it generates more code and explanation.

But the longer prompt may reduce ambiguity. It may prevent the model from inventing the wrong behaviour.

This is the trade-off: a short prompt uses fewer tokens and costs less, but leaves more assumptions for the model to make. A longer, more precise prompt uses more tokens and may cost more, but exposes more of the intended behaviour.

The cheapest prompt is not always the most economical prompt. If a vague prompt produces wrong software, the cost returns later as debugging, testing, rework, or failure.

## What Changes with a Harder Prompt?

> **Why it matters:** Difficulty rises not because code becomes longer, but because more unstated decisions can produce the wrong system.

Now imagine a harder request:

```text
Review this Python billing module, identify why some customers are charged twice,
write a safer implementation, generate tests, and explain the migration risk.
```

This is not merely a longer version of the average function.

The model may need:

- source files
- database schema
- logs
- test failures
- billing rules
- previous discussion
- edge cases
- existing naming conventions
- security constraints
- migration requirements

It must also perform more reasoning:

```text
What is the billing workflow?
Where can duplicate charges occur?
Which code path is risky?
What change is safest?
What tests prove the fix?
What migration risk remains?
```

The output may include:

- explanation
- code changes
- tests
- migration notes
- risk assessment
- rollback plan

That is why some AI tasks are expensive. The cost is not only the length of the user's prompt. It is the amount of context, reasoning, generated output, tool use, and verification needed to produce a useful result.

In a coding agent, the process may involve multiple loops:

```text
read files
↓
infer architecture
↓
edit code
↓
run tests
↓
read errors
↓
revise code
↓
summarise result
```

Each loop consumes more tokens and compute.

The economic consequences of this extra work—context, tool use, checking, and revision—are the subject of [[09-economics-of-models|The Economics of Models]]. Here, the important point is that a difficult request becomes a workflow, not a single act of code generation.

## The Role of Context

> **Why it matters:** A model can be technically capable and still fail if it is denied the one file, rule, screen, or exception that gives the request its meaning.

The transformation uses more than the prompt. Existing code, documentation, errors, examples, screenshots, constraints, tests, and earlier decisions all shape what the request means here. If a vital business rule or source file is missing, a plausible answer can still be wrong.

The process is not:

```text
Say idea once
↓
Receive perfect software
```

It is closer to:

```text
Express intent
↓
Generate proposal
↓
Test behaviour
↓
Clarify requirement
↓
Revise
↓
Integrate
↓
Verify
```

This is still programming, but at a higher level of abstraction.

[[10-context-what-the-model-knows-right-now|Context: What the Model Knows Right Now]] explains how a system selects and supplies this task-specific evidence.

## Why Code Still Needs Verification

> **Why it matters:** Code has a second reader—the computer—and sounding sensible to a person is no evidence that it will work for the system.

AI can generate code that looks convincing.

That is useful and dangerous.

A generated function may compile but mishandle edge cases. A database query may work for small data but fail at scale. A user-interface change may solve one problem while breaking another. A security check may be missing. A library call may be outdated. An algorithm may be inefficient. A test may pass because it tests the wrong thing.

The model's output is a proposal, not a guarantee.

This is why verification becomes more important, not less. If generation becomes cheap, the bottleneck shifts to knowing whether the generated system behaves correctly enough. Tests, type checking, code review, static analysis, runtime monitoring, user feedback, and human judgement all remain essential.

AI can help with verification too. It can write tests, explain failures, identify suspicious code, and suggest edge cases. But AI-generated tests must themselves be reviewed. The system cannot be trusted merely because the same technology generated both the code and the test.

Reliable software requires independent checks.

## Natural Language Programming

> **Why it matters:** When words directly control a model's behaviour, they become production assets rather than disposable chat.

In some AI-driven features, the prompt is not just a request for code. It becomes part of the running system.

For example, an app might contain an AI quiz feature. Instead of writing every quiz rule in Swift or Python, the developer may write a detailed prompt describing how the AI should behave: what kinds of questions to ask, how difficult they should be, which language to use, when to reveal answers, what format to follow, and which mistakes to avoid.

That prompt is not casual conversation. It is a behavioural specification.

This is Natural Language Programming. The prompt functions like a high-level programming layer. The model acts like a probabilistic interpreter of that specification. The process still requires precision, testing, iteration, and review.

## Field Note: The Prompt Became the Program

This became obvious while building a quiz feature for an app.

The feature looked simple from the outside: choose captured Chinese material and ask the AI to create a practice quiz. But the real behaviour was not simple at all. The quiz had to draw from the learner's material, use Chinese and English in controlled ways, avoid giving away the answer too early, manage pinyin carefully, ask one question at a time, and keep the interaction moving like a patient teacher rather than a generic chatbot.

I could have tried to encode every rule directly in Swift or Python. Instead, much of the behaviour moved into a long English specification. When the quiz behaved badly, I did not always debug a function. Sometimes I debugged the instruction: a missing constraint, an ambiguous phrase, an unstated edge case, or an output format the app could not safely consume.

That was the moment when "prompt" became too small a word. The text was acting like a program, but at a higher level of abstraction.

This does not mean all software becomes prompts. Conventional code remains essential for user interfaces, databases, security, networking, payments, permissions, performance, and deterministic execution. But for tasks involving language, reasoning, classification, generation, or explanation, natural-language specifications can become part of the software's behaviour.

The boundary between programming and communication begins to move.

## Why This Is Economically Important

> **Why it matters:** AI reduces the accumulated cost of moving among requirements, code, tests, bugs, and documentation throughout a project.

The economic significance of AI-generated software is not that machines can produce text that looks like code. The significance is that AI reduces the cost of translation between intent and implementation.

Historically, that translation required scarce experts. A user had to explain a problem to a developer. The developer had to understand it, design a solution, implement it, test it, and revise it. Each handoff introduced cost and delay.

AI can compress some of those steps. A domain expert—someone who knows the subject deeply—can describe a workflow and receive a prototype, or early working model. A developer can describe a refactoring, which improves the internal structure of code without intentionally changing what users can do, and receive a draft. A founder can explore product ideas before hiring a full team. A student can build a tool while learning the concepts. A professional programmer can use AI to move faster through routine implementation and spend more attention on architecture and verification.

The cost reduction is uneven. Simple prototypes may become dramatically cheaper. Safety-critical systems may remain expensive because verification dominates. Enterprise systems may still be costly because integration and governance dominate. But even uneven cost reduction matters if it shifts enough projects across the threshold of economic viability.

## The Limits of the Mechanism

> **Why it matters:** The model's broad training helps most when the task is made specific enough for it to recognise the relevant pattern.

Because the model relies on learned relationships, it is strongest where the problem resembles patterns it has learned and where the user provides enough context.

It is weaker when requirements are ambiguous, the domain is highly specialised, the codebase is large and poorly documented, the task depends on hidden business rules, or correctness requires exact reasoning that the model cannot verify alone.

It may also struggle when the best solution is unusual. Models tend to generate plausible solutions based on patterns. Sometimes the right answer requires rejecting the familiar pattern.

This is why human judgement remains central. AI can generate candidate solutions. It can accelerate exploration. It can make expertise more accessible. But someone must still decide whether the result is appropriate.

We now understand the basic mechanism behind AI-generated software: software is procedure, procedures can be represented in many forms, and a model uses learned relationships and current context to produce a likely useful output. The next question is economic. Models, longer contexts, deliberate reasoning, multimodal input, and verification all have costs. [[09-economics-of-models|The Economics of Models]] turns from mechanism to cost.
