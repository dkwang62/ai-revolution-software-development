---
title: "How AI Converts English Into Software"
---

# How AI Converts English Into Software

![English to software](<figures/FIG-07-01 English To Software.png>)

We can now return to the question that motivated this book.

How can an idea expressed in ordinary English become working software?

At first, the experience feels almost magical. A person describes a feature. The AI asks a question, proposes a design, writes code, explains errors, and revises the implementation. A conversation becomes an application. For someone who remembers when programming required strict syntax from the first line, the shift is astonishing.

But the point of this book is not to admire the magic. It is to understand how the trick works.

Codex is the practical doorway into that mystery for this book. A simple chat model can show the reader that English can become code. Codex shows something stronger: English can become a supervised software workflow. The prompt does not merely produce a snippet. It can lead to file inspection, code edits, terminal commands, build errors, revisions, and verification.

That is why Codex, the AI coding agent used in this project, matters here. It makes the abstract claim visible.

The explanation is neither memorisation nor secret fluency in Swift, Python, JavaScript, or SQL.

The explanation is representation. Software is a representation of procedure, and AI models can learn relationships among different representations of procedure: English, examples, pseudocode, documentation, source code, tests, errors, and explanations.

## Software Is Procedure

Software tells a machine what to do.

More precisely, software represents procedures precisely enough for a machine to execute them. It defines data, operations, conditions, sequences, permissions, errors, and outputs.

Consider a simple request:

> Build a feature that lets users save favourite Chinese characters and review them later.

This sentence is not code, but it contains software structure. It implies a user. It implies a collection of characters. It implies a save action. It implies persistent storage, meaning the information remains after the application closes. It implies a review screen. It may imply ordering, deletion, search, synchronisation between devices, backup, and different user-interface states such as loading, empty, or ready.

A human developer hears the request and begins translating. What data model—the organised description of the information and its relationships—is needed? Where should favourites be stored? What happens if the same character is saved twice? How does the user remove one? Should favourites sync across devices? What if the database is unavailable?

AI performs a similar kind of translation, though not in the same way a human does. It uses learned relationships to infer likely structures and generate a representation in code.

## Procedure Can Exist in Many Forms

The same feature can be represented in ordinary English:

```text
Let the user save favourite Chinese characters and review them later.
```

It can be represented as requirements:

```text
- The user can mark a character as a favourite.
- The app stores favourites persistently.
- The user can open a favourites screen.
- The user can remove a character from favourites.
- Duplicate favourites are not created.
```

It can be represented as pseudocode:

```text
if user_taps_favourite(character):
    if character not in favourites:
        favourites.add(character)
        save(favourites)
```

It can be represented as a data model, a screen design, a database table, a test case, or a Swift function.

All of these are different forms of the same underlying procedure.

AI-generated software depends on moving between these forms.

## The Intermediate Layer Is Not English

When readers see AI convert English into code, they may imagine a direct path:

```text
English
↓
Swift
```

That is too simple.

A better intuition is:

```text
English
↓
learned mathematical representation
↓
Swift
```

The model receives text, represents it internally through numerical structures, and generates output based on learned relationships. Swift is not what the model fundamentally understands. English is not what it fundamentally understands. Both are external symbolic forms.

This helps answer the question from Programming:

> How can a machine that does not think in Swift still produce useful Swift code?

Because Swift is one way of expressing a procedure. If the model has learned relationships among intent, procedural structure, and Swift syntax, it can generate a plausible Swift representation of the requested behaviour.

This also explains why AI can translate English to Python, English to SQL, code to explanation, error message to fix, or screenshot to interface suggestion. The model is moving through learned relationships among representations.

## Not Memorisation

AI sometimes memorises fragments from training data, but memorisation is not the main explanation for its usefulness.

If AI-generated programming were only memorisation, it would fail whenever a user asked for a slightly new combination of requirements. But AI can often combine patterns: a mobile interface with a database, an import feature with duplicate handling, a quiz generator with formatting constraints, or a settings screen with cloud sync.

That ability comes from generalisation. The model has learned that certain kinds of requests imply certain structures. It has seen many examples of code, explanations, libraries, documentation, errors, and design patterns. When prompted, it predicts a useful continuation that fits the current context.

This is why precise context matters. If the user gives vague instructions, the model fills gaps with likely assumptions. Sometimes those assumptions are helpful. Sometimes they are wrong. If the user gives clear requirements, examples, constraints, and existing code, the model's transformation becomes better grounded.

AI does not remove the need to think clearly. It rewards clear thinking.

## A Worked Example: English To Python

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

That looks like a direct translation:

```text
English request
↓
Python code
```

But internally, the process is closer to this:

```text
English prompt
↓
tokens
↓
numerical representations
↓
layers of learned relationships
↓
probable software structure
↓
Python output tokens
↓
code
```

This is not the exact private machinery of any particular AI system. Different models use different architectures and implementation details. But this is the right mental model for what is happening.

For a chatbot, this may be where the example ends: prompt in, code out.

For Codex, the more important pattern is larger. A **repository** is the project folder together with its recorded change history:

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

That difference matters. An AI coding agent is not merely a model producing text. It is an AI model connected to tools, context, and feedback.

### Step 1: The Prompt Is Broken Into Tokens

The model does not receive the sentence as human meaning.

It receives pieces.

The prompt might be broken roughly like this:

```text
Write | a | Python | function | that | takes | a | list | of | numbers | and | returns | the | average | .
```

The exact tokens depend on the model's tokenizer. Some words may be whole tokens. Some may be split into fragments. Punctuation may be its own token.

For the reader, the important point is that the model begins with tokenised symbols, not with a human understanding of the whole sentence.

### Step 2: Tokens Become Numbers

Each token is converted into a numerical representation.

The token `Python` becomes numbers.

The token `function` becomes numbers.

The token `average` becomes numbers.

Those numbers do not simply mean "dictionary definition of Python" or "dictionary definition of average". They represent learned relationships from training: how those tokens have appeared in code, tutorials, documentation, examples, questions, answers, and surrounding language.

The model now has a numerical version of the prompt.

### Step 3: The Network Builds A Representation Of The Task

The prompt passes through layers.

Early processing may recognise local patterns:

```text
Python
function
list of numbers
returns
average
```

Later processing can combine these into a task structure:

```text
language = Python
artefact = function
input = list of numbers
operation = compute average
output = number
```

The model may also infer common programming concerns:

```text
Need a function name.
Need a parameter.
Need sum(numbers).
Need len(numbers).
Need division.
Maybe handle empty list.
```

No programmer wrote a special rule saying:

```text
If user says "average of list", write sum(numbers) / len(numbers).
```

Instead, the model has learned from many examples that requests about averages, lists, and Python functions are often represented with `sum`, `len`, parameters, return statements, and division.

### Step 4: The Model Predicts The Output One Token At A Time

The model does not generate the whole function in one single act.

It generates output step by step.

It may begin by predicting that a likely first token is:

```python
def
```

Given:

```python
def
```

and the original prompt, a likely continuation is a function name:

```python
average
```

Then:

```python
(
```

Then:

```python
numbers
```

Then:

```python
):
```

The output grows:

```python
def average(numbers):
```

At each step, the model uses the prompt, the tokens it has already generated, and its learned relationships to predict the next useful token.

This is why AI-generated code can look intentional even though it is produced token by token. Each token is conditioned by the task representation and the preceding output.

### Step 5: The Output Becomes A Symbolic Program

Eventually the generated tokens form valid Python:

```python
def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)
```

Python is a symbolic language. The interpreter can execute it because the generated text obeys Python's syntax and semantics.

The AI did not "become Python". It generated a symbolic representation that Python can execute.

That is the central idea:

```text
Human intent
↓
learned mathematical representation
↓
generated symbolic program
↓
machine execution
```

### Step 6: Verification Still Matters

The answer may look correct, but it still contains choices.

Should an empty list return `0`?

Should it raise an error?

Should it return `None`?

Should it handle decimals?

Should it reject non-numeric values?

Should it use type hints?

The prompt did not say.

So the model filled the gap with a plausible assumption.

That is why requirements and verification matter. The model can generate a likely implementation, but someone must decide whether the assumptions match the intended behaviour.

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

```python
from typing import Iterable


def average_score(scores: Iterable[float | None]) -> float:
    """Return the average score rounded to two decimal places, ignoring None values."""
    valid_scores = [score for score in scores if score is not None]
    if not valid_scores:
        raise ValueError("average_score requires at least one numeric score")
    return round(sum(valid_scores) / len(valid_scores), 2)
```

The longer prompt costs more because the model must read and represent more input tokens. The output also costs more because it generates more code and explanation.

But the longer prompt may reduce ambiguity. It may prevent the model from inventing the wrong behaviour.

This is the trade-off:

```text
Short prompt
↓
fewer tokens
↓
cheaper
↓
more assumptions

Longer precise prompt
↓
more tokens
↓
more expensive
↓
fewer hidden assumptions
```

The cheapest prompt is not always the most economical prompt. If a vague prompt produces wrong software, the cost returns later as debugging, testing, rework, or failure.

## What Changes With A Harder Prompt?

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

This is why "reasoning" has an economic meaning. It is not just intelligence. It is work performed by the model.

## The Role of Context

AI does not generate software from the prompt alone. It uses the prompt plus whatever context is available.

Context may include:

- The user's instruction.
- Existing code.
- Error messages.
- Documentation.
- File names.
- Examples.
- Screenshots.
- Prior conversation.
- Constraints.
- Test output.
- Project conventions.

The context window is the model's working memory during inference. A larger context window can allow the model to consider more of a codebase, a longer specification, or more examples. But context is not infinite, and larger context can introduce cost and attention problems.

This is why AI-assisted software development often works best as an iterative process. The human supplies context, examines output, adds correction, narrows the task, tests the result, and asks for revision. The model generates proposals. The human and surrounding tools evaluate them.

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

## Why Code Still Needs Verification

AI can generate code that looks convincing.

That is useful and dangerous.

A generated function may compile but mishandle edge cases. A database query may work for small data but fail at scale. A user-interface change may solve one problem while breaking another. A security check may be missing. A library call may be outdated. An algorithm may be inefficient. A test may pass because it tests the wrong thing.

The model's output is a proposal, not a guarantee.

This is why Software Verification becomes more important, not less. If generation becomes cheap, the bottleneck shifts to knowing whether the generated system behaves correctly enough. Tests, type checking, code review, static analysis, runtime monitoring, user feedback, and human judgement all remain essential.

AI can help with verification too. It can write tests, explain failures, identify suspicious code, and suggest edge cases. But AI-generated tests must themselves be reviewed. The system cannot be trusted merely because the same technology generated both the code and the test.

Reliable software requires independent checks.

## Natural Language Programming

In some AI-driven features, the prompt is not just a request for code. It becomes part of the running system.

For example, a language-learning application might contain an AI quiz feature. Instead of writing every quiz rule in Swift or Python, the developer may write a detailed prompt describing how the AI should behave: what kinds of questions to ask, how difficult they should be, which language to use, when to reveal answers, what format to follow, and which mistakes to avoid.

That prompt is not casual conversation. It is a behavioural specification.

This is Natural Language Programming. The prompt functions like a high-level programming layer. The model acts like a probabilistic interpreter of that specification. The process still requires precision, testing, iteration, and review.

## Field Note: The Prompt Became the Program

This became obvious while building a quiz feature for the language-learning application.

The feature looked simple from the outside: choose captured Chinese material and ask the AI to create a practice quiz. But the real behaviour was not simple at all. The quiz had to draw from the learner's material, use Chinese and English in controlled ways, avoid giving away the answer too early, manage pinyin carefully, ask one question at a time, and keep the interaction moving like a patient teacher rather than a generic chatbot.

I could have tried to encode every rule directly in Swift or Python. Instead, much of the behaviour moved into a long English specification. When the quiz behaved badly, I did not always debug a function. Sometimes I debugged the instruction: a missing constraint, an ambiguous phrase, an unstated edge case, or an output format the app could not safely consume.

That was the moment when "prompt" became too small a word. The text was acting like a program, but at a higher level of abstraction.

This does not mean all software becomes prompts. Conventional code remains essential for user interfaces, databases, security, networking, payments, permissions, performance, and deterministic execution. But for tasks involving language, reasoning, classification, generation, or explanation, natural-language specifications can become part of the software's behaviour.

The boundary between programming and communication begins to move.

## Why This Is Economically Important

The economic significance of AI-generated software is not that machines can produce text that looks like code. The significance is that AI reduces the cost of translation between intent and implementation.

Historically, that translation required scarce experts. A user had to explain a problem to a developer. The developer had to understand it, design a solution, implement it, test it, and revise it. Each handoff introduced cost and delay.

AI can compress some of those steps. A domain expert—someone who knows the subject deeply—can describe a workflow and receive a prototype, or early working model. A developer can describe a refactoring, which improves the internal structure of code without intentionally changing what users can do, and receive a draft. A founder can explore product ideas before hiring a full team. A student can build a tool while learning the concepts. A professional programmer can use AI to move faster through routine implementation and spend more attention on architecture and verification.

The cost reduction is uneven. Simple prototypes may become dramatically cheaper. Safety-critical systems may remain expensive because verification dominates. Enterprise systems may still be costly because integration and governance dominate. But even uneven cost reduction matters if it shifts enough projects across the threshold of economic viability.

## What AI Is Actually Doing

When AI converts English into software, it is performing several transformations at once.

It interprets intent. It identifies what the user appears to want.

It infers structure. It recognises entities, actions, relationships, data, sequence, and constraints.

It maps the structure to software patterns. It may recognise that the problem requires a database, a state variable, a loop, an API call, a view model, a validation function, or a test.

It generates a symbolic representation. That representation may be code, configuration, pseudocode, a test case, or an explanation.

It uses context to fit the output to the project. Existing code, naming conventions, frameworks, errors, and prior discussion all shape the result.

None of this requires the model to think in Swift. It requires learned relationships among intent, procedure, and representation.

That is the essential mechanism.

## The Limits of the Mechanism

Because AI relies on learned relationships, it is strongest where the problem resembles patterns it has learned and where the user provides enough context.

It is weaker when requirements are ambiguous, the domain is highly specialised, the codebase is large and poorly documented, the task depends on hidden business rules, or correctness requires exact reasoning that the model cannot verify alone.

It may also struggle when the best solution is unusual. Models tend to generate plausible solutions based on patterns. Sometimes the right answer requires rejecting the familiar pattern.

This is why human judgement remains central. AI can generate candidate solutions. It can accelerate exploration. It can make expertise more accessible. But someone must still decide whether the result is appropriate.

## Bridge to Model Economics

We now understand the basic mechanism behind AI-generated software.

Software is procedure.

Procedures can be represented in many forms.

AI models learn mathematical relationships among those representations.

Inference uses the model and context to generate a likely useful output.

But this mechanism has costs. Larger models cost more. Longer contexts cost more. Better reasoning may cost more. Multimodal capability costs more. Training is different from inference. Model versions change. Different models behave differently.

[[09-economics-of-models|The Economics of Models]] turns from mechanism to cost.
