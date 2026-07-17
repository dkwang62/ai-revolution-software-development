---
title: "What Is Information?"
---

# What Is Information?

Before we can understand how AI writes software, we need to ask a more basic question.

What is information?

That may sound philosophical, but it is the doorway into modern AI. If we begin with neural networks, parameters, tokens, and GPUs, most readers are forced to memorise technical terms before they understand the problem those terms solve. The better path is to begin with something familiar: meaning.

Consider two sentences:

```text
The cat sat on the mat.
```

```text
猫坐在垫子上。
```

The symbols are different. The sounds are different. The writing systems are different. Yet a person who understands both English and Chinese can recognise that the two sentences carry essentially the same information.

That distinction matters. English is not the information itself. Chinese is not the information itself. They are representations of information. They are ways of encoding meaning so it can be communicated, stored, transformed, and acted upon.

The same is true of software.

A procedure can be described in English, drawn as a flowchart, written as pseudocode, implemented in Python, translated into machine code, and executed by a processor. Each representation is different, but they may all refer to the same underlying procedure.

AI becomes less mysterious once we see that language, code, images, sound, and diagrams are not separate universes. They are different ways of representing information.

## Symbols and Meaning

Humans usually handle information symbolically.

We use words, numbers, diagrams, gestures, music, equations, maps, legal clauses, programming languages, and images. Each symbol system has rules. A language has grammar. Mathematics has notation. A programming language has syntax. A map has conventions. A musical score has marks that musicians know how to interpret.

Symbols let us store and communicate meaning outside our own minds. They make culture possible. They make science possible. They make law, accounting, engineering, medicine, and software possible.

But symbols are not meaning itself. The word "dog" is not a dog. The Chinese character 犬 is not a dog. A photograph of a dog is not a dog. A vector drawing of a dog is not a dog. Each is a representation that points toward a concept.

This is why translation is possible. A translator does not merely replace one word with another. They try to preserve information across symbolic systems. Sometimes the translation is straightforward. Sometimes the meaning depends on context, tone, culture, implication, or specialised knowledge.

Software translation is similar. Converting a procedure from English into Python is not word substitution. It requires preserving structure: conditions, sequence, data, constraints, goals, and expected behaviour.

AI operates in this space between representation and meaning.

## Information Can Change Form

Information often moves between forms.

A doctor reads a scan and writes a report. A lawyer reads a contract and summarises the risk. A programmer reads a user request and writes code. A teacher looks at test results and adjusts a lesson plan. A designer hears a product idea and sketches a screen. A musician reads notation and produces sound.

In each case, information changes representation.

Computers have always transformed information too, but traditional software usually required humans to define the transformation explicitly. If the input looks like this, do that. If the record contains this value, calculate that output. If the user clicks this button, run this function.

Modern AI changes the nature of the transformation. It can move between representations without a human writing explicit rules for every case. It can summarise text, translate languages, describe images, generate code, explain errors, classify documents, and answer questions because it has learned patterns among representations.

That is why the idea in Information is central to the book:

> Information is deeper than any particular human language, programming language, image, sound, or symbol system.

Once readers understand that, AI-generated software becomes less magical. Software is information. Code is information. Requirements are information. Error messages are information. Architecture diagrams are information. AI can work with software because software belongs to the same broader world of representable structure.

## The Old Way: Rules

Traditional software usually stores knowledge as explicit rules.

If the account balance is below zero, charge a fee. If the password is wrong five times, lock the account. If the user is an administrator, show the admin panel. If the temperature exceeds a threshold, send an alert.

This rule-based approach is powerful when the rules are clear. It is why traditional software is so reliable in domains such as accounting, payroll, databases, compilers, and transaction processing. Given the same input under the same conditions, deterministic software should produce the same output.

But not all knowledge is easy to express as rules.

How do you recognise a cat in a photograph? How do you judge whether a sentence is polite? How do you translate a joke? How do you detect that a paragraph is evasive? How do you decide whether a codebase is poorly structured? How do you infer what a user meant when their request is incomplete?

For decades, many such problems were difficult because humans could often perform them but could not easily write down complete rules. The world contains too much variation.

Old AI often tried to solve intelligence by storing explicit rules. But rules became brittle. There were too many exceptions, too many contexts, too many edge cases.

Modern AI works differently.

## The New Way: Relationships

Modern AI stores learned relationships.

This is the distinction captured in Rules vs Relationships. Traditional software says:

```text
IF A
THEN B
```

AI models learn something closer to:

```text
A is related to B in this context, with this degree of likelihood.
```

That difference is profound.

A model trained on language sees that words appear near other words, ideas occur in certain contexts, explanations have structure, code follows patterns, error messages relate to fixes, and questions relate to answers. Over enormous numbers of examples, the system learns relationships among symbols, concepts, structures, and procedures.

This does not mean it possesses human understanding. It means it has learned a mathematical structure rich enough to transform information in useful ways.

That is why AI can translate English into Chinese, summarise a legal paragraph, describe an image, explain a programming error, or draft Swift code. It is not switching between unrelated systems. It is operating over learned relationships among representations.

## Meaning Becomes Location

One useful intuition is that modern AI represents information in mathematical spaces.

The reader does not need linear algebra to understand the basic idea. Imagine concepts arranged not alphabetically but by relationship. Dog, cat, wolf, fox, and animal would be near one another. Democracy, election, voting, constitution, and parliament would form another neighbourhood. Swift, Python, function, variable, class, and compiler would occupy related regions.

In such a space, meaning becomes partly a matter of location and distance. Similar ideas are closer together. Related concepts cluster. Differences become directions.

This is only an intuition, but it helps explain why the same model can move between domains. If English, Chinese, code, images, and sound can all be represented as mathematical relationships, then translation becomes a movement through that learned structure.

The phrase "AI thinks in mathematics" can be useful as a metaphor, but it must be handled carefully. AI does not think like a human mathematician. More accurately, an AI model represents patterns in data through numerical structures learned during training. Those structures allow it to transform one representation into another.

That explanation is less magical, but more durable.

## Why This Matters for Software

Software development is full of representation changes.

A user describes a need. A developer turns it into requirements. Requirements become architecture. Architecture becomes code. Code becomes tests. Tests become confidence. Error messages become fixes. Old code becomes documentation. Documentation becomes new understanding.

AI can assist because it has learned relationships among many of these representations. It has seen code with comments, documentation with examples, questions with answers, bugs with fixes, designs with implementation patterns, and natural-language tasks with software structures.

This does not make AI infallible. It can infer wrongly. It can produce plausible nonsense. It can generate code that looks correct but fails. It can misunderstand the business rule. It can use outdated APIs. It can miss a security issue.

But the possibility is clear: if software is information, and AI can transform information, then AI can participate in software creation.

This is the conceptual bridge from abstraction to models.

The next question is: where are these learned relationships stored?

They are stored in an AI model.

## What We Know

Information is not identical to any one representation such as English, Chinese, source code, image, or sound.

Human beings often store and communicate information symbolically.

Traditional software usually stores explicit rules.

Modern AI models store learned mathematical relationships among patterns in data.

Software is information because it represents procedures, rules, relationships, and behaviour.

## What We Infer

AI can work with software because software is one form of representable information among many.

AI-generated code is less mysterious once we understand that English, pseudocode, source code, and machine behaviour can all represent related procedures.

The ability to move between representations is one of the foundations of AI-assisted software development.

## What We Do Not Yet Know

We do not yet know how far current mathematical representations can support reliable reasoning in complex software systems.

We do not yet know which forms of meaning remain difficult for AI because they depend on embodied experience, institutional context, tacit knowledge, or human judgement.

We do not yet know how best to teach information representation to non-technical readers without oversimplifying the mathematics.
