---
title: "How Neural Networks Learn Relationships"
---

# How Neural Networks Learn Relationships

Radix can use a camera image to recover Chinese text. Writing an exhaustive rulebook for that task would be nearly impossible. A character changes with the typeface, lighting, angle, blur, background, and quality of the camera. Yet people still recognise it.

Optical character recognition works because a learned system does not require a programmer to enumerate every acceptable arrangement of pixels. Training exposes a neural network to examples and adjusts it so that useful visual patterns influence the result. The same broad mechanism allows language models to learn relationships among words, instructions, code, and outcomes.

## Pieces, Dials, and Layers

Before entering a neural network, information is divided into manageable units. Language models use **tokens**, which may be words, parts of words, punctuation, or pieces of code. Image systems divide pictures into patches or related numerical units. Audio can be represented as segments of a signal.

Each unit becomes numbers. A neural network then transforms those numbers through layers containing adjustable parameters. It is helpful to imagine an enormous arrangement of dials. Training changes the dials so that patterns useful for prediction receive more influence and unhelpful patterns receive less.

The name *neural network* comes from a loose historical analogy with connected neurons. It should not be read as evidence that engineers have built a miniature human brain. Modern networks are mathematical systems optimized to perform tasks. They can exhibit striking capabilities without sharing human biology, consciousness, or understanding.

## Training Is Repeated Error Correction

At a simplified level, training follows a loop:

```text
present an example
↓
produce a prediction
↓
compare it with the desired result
↓
measure the error
↓
adjust many parameters slightly
↓
repeat across enormous amounts of data
```

No programmer decides the value of every parameter. The learning algorithm finds values that reduce error across the training process. Layers allow the system to build increasingly useful internal representations: local patterns can contribute to larger structures, and those structures can influence the next prediction.

For text generation, the immediate task is usually to predict the next token given the tokens already present. This sounds narrow. At sufficient scale, succeeding requires the model to capture many regularities in language, code, reasoning traces, documents, and interactions. The resulting behaviour can look far richer than next-token prediction suggests.

It is still generation under uncertainty. The model does not retrieve a complete hidden program and copy it to the screen. It produces one token, then another, conditioned on the prompt, its learned parameters, the available context, and the tokens already generated.

## Relationships, Not a Rulebook

Traditional programs primarily execute explicitly specified procedures. A learned model derives much of its behaviour from parameters fitted to data. Both are software, and real systems often combine them.

This difference explains both the power and the weakness of AI. The model can respond to inputs no programmer anticipated exactly because it has learned broad statistical relationships. For the same reason, it may produce an answer that is plausible rather than correct.

When I ask the Genie to alter Radix, learned relationships help it associate my request with SwiftUI patterns, data structures, and likely files. The application, compiler, tests, and my own inspection then determine whether those associations produced an acceptable change.

## Vectors and Neighbourhoods

Tokens and other inputs are commonly represented as vectors: ordered lists of numbers. Training arranges these representations so that useful relationships can be expressed through geometry and transformation. Related uses may form neighbourhoods even when the surface forms differ.

This is why models can generalise. They need not have seen my exact sentence about a Radix quiz. The request may resemble patterns involving quizzes, distractors, state, user interfaces, Chinese characters, and software tests. The network combines those relationships in the current context.

“Resemble” does not mean “understand exactly as a person does.” Models can connect patterns effectively while missing purpose, consequences, or unstated local knowledge.

## What the Mechanism Does Not Guarantee

Training data can contain errors and bias. Optimising average performance does not guarantee reliability in a rare or consequential case. A model may imitate an outdated practice, invent a reference, or produce code that compiles while violating the user's real intention.

More training and larger models can improve capability, but a production system still needs context, constraints, deterministic checks, and evaluation. Radix's OCR output is useful because the surrounding application can preserve the image, validate text, filter known phrases, and let the learner decide what to keep.

The economic significance is not that neural networks make rules obsolete. They reduce the cost of handling tasks for which exhaustive rules would be too expensive or brittle. They expand what software can attempt, while transferring more work to evaluation and verification.

The next chapter follows that mechanism through one concrete transformation: a request written in ordinary English becoming executable source code.
