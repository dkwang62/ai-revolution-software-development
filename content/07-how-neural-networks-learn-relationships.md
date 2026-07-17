---
title: "How Neural Networks Learn Relationships"
---

# How Neural Networks Learn Relationships

![Rules versus relationships](figures/FIG-06-01 Rules Versus Relationships.png)

The previous chapter described an AI model as a learned mathematical representation of patterns found in data.

That raises the next question:

How is such a model built?

The answer is not that programmers write millions or billions of rules. That older idea is exactly what modern AI moved beyond. Programmers do not write a rule saying that every possible sentence should be translated this way, every possible image should be recognised that way, and every possible programming request should be solved with this exact code.

Instead, engineers build learning systems.

The most important of these systems are Neural Networks.

## The Problem With Hand-Written Rules

Suppose we want a computer to recognise cats in photographs.

An old rule-based approach might begin like this:

```text
If it has whiskers, maybe it is a cat.
If it has pointed ears, maybe it is a cat.
If it has fur, maybe it is a cat.
If it has a tail, maybe it is a cat.
```

Immediately the problems appear. Some cats are photographed from angles where whiskers are not visible. Some dogs have pointed ears. Some cats are hidden under blankets. Some drawings are cats but not photographs. Some statues depict cats. Some images contain two cats and a dog. Some images contain a cat-shaped toy. Some photographs are blurry.

The world is too varied for simple rules.

Language has the same problem. How many rules would we need to understand every way a person might ask for the same software feature? How many rules would cover sarcasm, ambiguity, missing context, technical jargon, unusual grammar, mixed languages, screenshots, code fragments, and half-formed ideas?

Traditional rule-based software works well when the rules are stable and explicit. It struggles when knowledge is fuzzy, contextual, and difficult to write down completely.

Neural networks became powerful because they learn patterns from examples rather than requiring humans to specify every rule.

## Tiny Decision Makers

A neural network is often explained through biology, but we do not need to begin there.

For this book, it is more useful to imagine many tiny adjustable decision makers.

Each one receives signals, gives those signals different importance, and passes along a result. One signal may matter a lot. Another may matter a little. Another may be ignored. During training, the system adjusts how much each signal matters.

One tiny decision maker is not intelligent.

Ten are not intelligent.

But enormous numbers of them, organised into layers and trained on vast amounts of data, can learn complicated patterns.

The intelligence does not live in one tiny unit. It emerges from the relationships among many units and the values learned during training.

## Layers

Layers are crucial because simple patterns can combine into more complex patterns.

In image recognition, early layers may respond to simple visual features such as edges, curves, colours, or textures. Later layers may combine these into shapes. Still later layers may combine shapes into objects.

The progression might look like this:

```text
Pixels
↓
Edges
↓
Shapes
↓
Parts
↓
Objects
↓
Cat
```

Language can be understood similarly, though the details differ:

```text
Characters
↓
Words
↓
Phrases
↓
Sentences
↓
Meaning
↓
Reasoning
```

Software also has layered structure:

```text
Tokens
↓
Syntax
↓
Expressions
↓
Functions
↓
Patterns
↓
Architecture
↓
Procedure
```

These diagrams are simplified, but they convey the intuition. Neural networks can learn lower-level features and combine them into higher-level representations.

That is how meaning begins to become mathematical. Not because someone writes a formula for "cat", "democracy", "database", or "Swift function", but because training adjusts many relationships until similar and related patterns occupy useful positions in the model's learned structure.

## Training Adjusts the Relationships

Training is the process that adjusts the network.

At the beginning, the network is not useful. Its internal settings do not yet encode the patterns we want. During training, it is exposed to examples. It produces predictions. Those predictions are compared with desired outcomes or training signals. The system then adjusts its internal parameters slightly so that future predictions become better.

This happens again and again at enormous scale.

The adjustable-dials analogy helps. Imagine a machine with vast numbers of dials. Each training example turns many dials a tiny amount. No single turn creates intelligence. But after enormous numbers of examples, the collective dial settings capture patterns.

Those settings are not a readable rulebook. They are distributed mathematical relationships.

This is why [[09-economics-of-models|Training]] is expensive. It requires data, computation, specialised hardware, engineering judgement, experimentation, and evaluation. It is not simply "installing knowledge" into a computer. It is an industrial process for producing a useful learned representation.

## Vectors and Neighbourhoods

Eventually, concepts and patterns are represented numerically.

One common intuition is to think of them as points or directions in a high-dimensional space. Similar ideas are near one another. Related concepts form neighbourhoods. Differences become directions.

Dog, cat, wolf, and fox may occupy related regions. Election, voting, constitution, and democracy may occupy another. Function, variable, class, compiler, and API may occupy a software-related neighbourhood.

The model does not store a dictionary definition in the human sense. It stores relationships that allow it to predict, transform, and generate.

This explains why AI can move between English and code. If the model has learned relationships between natural-language descriptions and programming structures, it can generate a likely code representation for a described procedure.

It also explains why AI can make plausible mistakes. Nearby does not always mean correct. Prediction does not guarantee truth. Statistical relationship is not the same as verified fact.

## Why This Is Different From Traditional Programming

Traditional software:

```text
Programmer
↓
writes rules
↓
computer follows rules
```

Modern AI:

```text
Engineers build a learning system
↓
training adjusts relationships
↓
model applies learned patterns during inference
```

This is a different way of building software.

In traditional software, the knowledge is explicit. A human can inspect the code and see the rule. In AI models, the knowledge is distributed. A human can test the behaviour but cannot easily read the internal representation as a list of rules.

That difference explains why AI feels powerful and unsettling.

It is powerful because it can handle patterns too complex for hand-written rules.

It is unsettling because its internal logic is harder to inspect and its outputs are probabilistic.

## Why Neural Networks Matter for Software Development

Software development contains many pattern-recognition tasks.

A developer reads an error message and recognises a likely cause. They see a requirement and recognise a familiar design pattern. They inspect a function and infer its purpose. They compare two APIs. They notice that a bug resembles one they saw before. They read old code and reconstruct the business rule hidden inside it.

AI models can assist with these tasks because neural networks have learned relationships across code, language, documentation, examples, and problem descriptions.

This does not make AI a senior engineer. It lacks direct accountability, lived project context, and reliable judgement. But it can perform many useful transformations:

- Explain code.
- Generate code.
- Translate between languages.
- Suggest tests.
- Identify likely bugs.
- Summarise documentation.
- Propose refactorings.
- Convert requirements into implementation sketches.

These capabilities emerge from learned relationships, not from hand-written rules for every programming situation.

## The Economic Meaning of Neural Networks

Neural networks matter economically because they change how capability is produced.

Traditional software capability is produced by programmers writing rules. AI capability is produced by training systems that learn from examples. This shifts some cost from human labour into data, compute, hardware, research, and infrastructure.

The cost does not disappear. It changes form.

Training a large model may require enormous capital investment. But once trained, the model can be used repeatedly across many tasks. This is why AI companies treat models as strategic assets. A capable model can distribute learned capability to millions of users through inference.

This is the economics of intelligence: the production, storage, distribution, and use of machine-learned capability.

For software development, the implications are enormous. If a model can package useful portions of software-engineering knowledge, then users can access that knowledge without acquiring all of it personally. That does not eliminate expertise, but it changes how expertise is distributed.

## Limits

Neural networks are not magic.

They depend on training data. They can inherit bias, gaps, errors, and outdated patterns. They can produce fluent but false answers. They can struggle with tasks requiring exact calculation unless connected to tools. They may fail when the context is incomplete. They may not understand a company's private business rules unless those rules are provided.

They are also expensive. Training requires capital. Inference requires ongoing computation. Larger contexts, better reasoning, and multimodal capability introduce further cost.

The right response is not to dismiss neural networks because they are imperfect. Nor is it to trust them blindly because they are impressive. The right response is engineering: understand what they are good at, where they fail, and how to build systems around their strengths and weaknesses.

## Bridge to Software Generation

We can now connect the pieces.

Software is information.

Programming languages represent procedures.

AI models store learned relationships among patterns in data.

Neural networks are the machinery that learns those relationships.

Inference uses the trained model to generate outputs.

Now the original mystery becomes answerable:

> How can a machine convert English into software?

It can do so because English descriptions, software procedures, source code, documentation, examples, and error messages can all be represented within a learned mathematical structure. The model has learned relationships among them. When prompted, it can generate a plausible transformation from one representation to another.

The next chapter develops that answer directly.

## What We Know

Neural networks learn patterns from examples rather than relying on humans to hand-write every rule.

Layers allow simple features to combine into more complex representations.

Training adjusts parameters so that the model becomes better at producing useful outputs.

The learned knowledge is distributed across the model rather than stored as a readable rulebook.

Neural networks are powerful where patterns are complex, varied, and difficult to specify explicitly.

## What We Infer

AI can assist software development because software work involves many learned relationships among intent, code, documentation, architecture, errors, and procedures.

The shift from rules to relationships is one of the central differences between traditional software and modern AI.

The economic value of neural networks comes from packaging learned capability so it can be reused through inference.

## What We Do Not Yet Know

We do not yet know which reasoning and software-engineering tasks neural networks will handle reliably at production standards.

We do not yet know how interpretable future models will become.

We do not yet know how the cost of training and inference will change over the next five to ten years.
