---
title: "What Is an AI Model?"
---

# What Is an AI Model?

![What is an AI model](<figures/FIG-05-01 What Is An AI Model.png>)

When Radix displays the Chinese character 木, a learner sees a shape associated with *tree* or *wood*. Inside the application, that character is also a Unicode number, bytes in a file, pixels on a screen, a database record, a pronunciation, and a component inside other characters.

These are different **representations** of the same thing. Software has always moved information among representations:

```text
human purpose
↓
requirements and diagrams
↓
source code
↓
machine instructions
↓
changes in the world
```

Traditional software relies mainly on procedures people specify. An AI model adds a different mechanism: it learns numerical relationships from examples. That difference explains both its flexibility and its unreliability.

An AI model is not a huge database, a search engine, or millions of handwritten IF–THEN rules. It is a **learned mathematical representation of patterns found in data**.

I encountered this distinction while working on Radix Phrase Discovery. Radix could send the same Chinese passage and instructions to a language model and receive useful phrase candidates, but not necessarily an identical list every time. The model was not looking up one authorised answer in the Radix database. It was using learned relationships among characters, phrases, context, pinyin, and meaning to generate a plausible result.

Radix then did what the model could not be trusted to do alone. Conventional software checked the format, rejected invalid lengths, removed phrases already present, and waited for the user to approve what should be saved. The model supplied flexible judgement; the application supplied records, rules, and authority.

## A Map, Not the Territory

The word *model* did not begin with AI. A model airplane represents selected features of an airplane. A weather model represents atmospheric behaviour. An economic model represents relationships among incentives, prices, supply, and demand.

None is the thing itself. Each simplifies reality in a form that helps somebody reason or act.

Likewise, an AI model is not the world, a library, or a brain. It captures patterns from its training data while leaving much out. It can be useful and imperfect at the same time. A weather forecast can guide a picnic without predicting every cloud; an AI model can write useful code without becoming a flawless source of truth.

The model is a map, not the territory.

## Training Creates the Model

An AI model is created through **training**. The system sees many examples and repeatedly adjusts itself to become better at predicting, classifying, transforming, or generating information.

The adjustment happens inside **parameters**. A parameter can be imagined as a tiny adjustable dial. During training, an example produces a prediction, the system measures the error, and a learning process alters many dials slightly. Repeated across enormous amounts of data, the resulting pattern of settings becomes the model.

```text
present an example
↓
produce a prediction
↓
measure the error
↓
adjust many parameters slightly
↓
repeat
```

The dials do not store knowledge like pages in a book. There is no single dial for *dog*, another for Swift syntax, and another for banking regulation. What the model has learned is distributed across many parameters. Its capability is real, but it is not stored in a human-readable rulebook.

Training is therefore different from a programmer entering facts into a database. The programmer chooses the data, architecture, training process, objectives, and evaluations; the learning process finds parameter values that capture useful statistical relationships.

## Neural Networks Learn the Relationships

A **neural network** is the mathematical machinery commonly used to learn those relationships. The name comes from a loose historical analogy with connected biological neurons. It does not mean engineers have built a small human brain.

Before entering the network, information is divided into manageable units. Language models use **tokens**, which may be words, parts of words, punctuation, or pieces of code. Images can be divided into patches; audio can be represented as segments of a signal. Each unit becomes numbers that the network transforms through layers.

Those numerical representations are often described as **vectors**—ordered lists of numbers. Training arranges and transforms them so that useful relationships can be expressed. Words used in related contexts may occupy related regions in a high-dimensional space. A request about a Radix quiz can activate relationships involving quizzes, distractors, user interfaces, Chinese characters, state, and tests even if the model has never seen that exact request.

It is tempting to say that meaning becomes location. That is a useful analogy, not a complete account of human meaning. The geometry captures statistical relationships; it does not give the model a human life, purpose, or experience of a Chinese character.

For text generation, the immediate training task is often to predict the next token. That sounds modest. But predicting well across books, programs, documentation, conversations, and worked solutions requires the network to capture a great many regularities. At sufficient scale, that narrow training operation produces surprisingly broad behaviour.

## Inference Uses the Finished Model

**Inference** means using the trained model.

When I ask the Genie to write a Swift function, explain a legal clause, translate a sentence, or generate a quiz, it is not retraining itself from the beginning. It combines my input with its current context and constructs an output from the patterns encoded in its parameters.

This explains why AI can answer a question it has never seen word for word. It also explains why it can be wrong. Prediction is not truth. A model may generate something plausible but outdated, unsafe, logically weak, or inappropriate for the user's actual situation.

Traditional software and learned models therefore have complementary strengths:

| Traditional software | AI model |
|---|---|
| Executes explicit rules | Applies learned relationships |
| Mostly deterministic | Probabilistic |
| Easier to inspect line by line | Harder to interpret internally |
| Strong where rules are clear | Strong where variation makes exhaustive rules costly |
| Changed mainly by editing code | Changed by training, tuning, prompting, and configuration |

Real applications combine both. AI suggests; software decides.

## Why a Model Can Produce Software

Programs contain recurring patterns: conditions, loops, functions, data structures, APIs, tests, error handling, interface conventions, and architectures. Documentation and software discussions also connect ordinary requests with these structures.

A model trained across code, explanations, tutorials, bug reports, and technical conversations can learn many of those relationships. It can connect “sort this list” with a library operation, or associate “build a login screen” with fields, validation, state, navigation, and security concerns.

The model is not executing a complete hidden program that it retrieves from memory. It generates a proposal token by token, conditioned on the request, its learned parameters, the available project context, and what it has already generated.

When I ask Codex to alter Radix, learned relationships help it locate likely SwiftUI patterns, files, and data structures. The compiler, tests, application framework, screenshots, and my inspection determine whether those relationships produced a change worth keeping.

That surrounding evidence matters because code can be syntactically correct yet educationally wrong. A quiz may compile and still teach the wrong distinction. A button may work while covering another control on an iPhone. The model shortens the distance from intention to implementation; it does not remove the need to judge the destination.

## When the Genie Can See and Hear

Models increasingly work across text, images, audio, video, diagrams, screens, and code. For software development, this matters because important requirements and defects are not always expressed well in prose.

A screenshot can expose overflowing text that the source code does not make obvious. A screen recording can show a navigation sequence. A sketch can communicate an intended layout. A spoken explanation can capture domain knowledge from someone who would never write a formal specification. The model can translate these inputs into observations, requirements, code changes, or tests.

This does not guarantee spatial judgement. During the Radix and book work, I sometimes had to show Codex a rendered screen before it recognised that words had escaped a box or that controls were squeezed into an unusable space. Source code describes constraints; the rendered picture reveals their combined result. The practical solution is a feedback loop: generate, render, inspect at relevant sizes, test, and revise. Visual regression tools and established interface frameworks can automate much of that loop, while human review remains important where taste or purpose is involved.

Multimodality therefore expands the Genie's senses, not its authority. It gives the system more evidence from which to reason. The same rule still applies: successful generation is not successful rendering, and a convincing appearance is not proof of correct behaviour.

## Why There Are Many Models

Different training choices create different models. They may vary in data, architecture, size, optimisation, safety tuning, tool use, context length, multimodal capability, deployment environment, and intended use. One may excel at coding, another at writing, and another may be small enough to run on a phone.

This is why model names are not interchangeable. It also explains why an upgrade can change behaviour unexpectedly. In traditional software, developers try to add features while preserving old behaviour. A change in training or model architecture may shift many responses at once. A prompt that worked with one version may need to be tested again with its successor.

Model behaviour thus becomes a dependency of every application built around it.

## Capability Has a Cost

Training requires data, specialised hardware, electricity, engineers, experiments, and evaluation. It is a large upfront investment that creates a reusable asset.

Inference is an operating cost. Every request consumes computation. The amount depends on factors such as model size, input length, output length, latency, and hardware efficiency. Larger context windows, more deliberate reasoning, and multimodal input may improve usefulness while increasing cost.

The economic question is therefore not which model looks most impressive in isolation. It is which combination of model, tools, context, verification, and human attention completes a valuable task reliably at an acceptable cost.

## What the Mechanism Does Not Guarantee

Training data can contain errors and bias. Average performance does not guarantee reliability in a rare or consequential case. Larger models and better training can improve capability without eliminating fabricated references, outdated practices, insecure code, or misunderstandings of local purpose.

Radix's optical character recognition is useful because the surrounding application can preserve the image, validate extracted text, filter known phrases, and let the learner decide what to keep. Neural networks reduce the cost of tasks for which exhaustive rules would be too expensive or brittle. They do not make rules, tests, or responsibility obsolete.

This is the central bargain. A learned model handles ambiguity that conventional software struggles to enumerate. Conventional software, tools, and people supply the constraints and evidence the model lacks.

The next chapter follows that bargain through one concrete transformation: an ordinary English request becoming executable source code.
