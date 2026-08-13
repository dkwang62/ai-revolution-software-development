---
title: "What Is Information?"
---

Before asking how AI can write software, we need a clear idea of what it works with.

**Information is meaning or structure that can be represented in different forms.** Consider two sentences:

```text
The cat sat on the mat.
```

```text
猫坐在垫子上。
```

The symbols, sounds, and writing systems differ. Yet someone who understands both languages can recognise that the sentences carry essentially the same information. English and Chinese are not the information itself. They are ways of encoding it so that it can be communicated, stored, transformed, and acted upon.

Software also moves information among forms. An intended procedure may begin as a conversation, become requirements and diagrams, appear as source code, and end as machine instructions that change something in the world. Each form serves a different purpose. The software succeeds only if the transformations preserve the behaviour that matters.

An app used throughout this book makes the idea concrete. A Chinese character appears on screen as a shape, but the app may also store its Unicode number, pronunciation, English meaning, components, stroke data, notes, and membership in phrases. None is the character itself. Each representation preserves information needed for a particular task.

When I asked an AI coding agent to change how the app handled a character, it had to follow that information through my description, Swift data structures, database records, and the pixels shown to the learner. The feature worked only when those representations remained consistent.

That is the foundation of this chapter: information can change form, but each transformation must preserve the relationships that matter.

## Symbols Carry Meaning

> **Why it matters:** AI becomes useful when it can relate different representations while preserving the information needed for the task.

Humans use words, numbers, diagrams, gestures, equations, maps, legal clauses, programming languages, and images. Each symbol system has conventions. Languages have grammar. Mathematics has notation. Programming languages have syntax. Maps have legends and scales.

Symbols let us store and communicate meaning outside our minds, but a symbol is not the thing it represents. The word “dog,” the Chinese character 犬, and a photograph of a dog are different representations connected to the same broad concept.

This distinction explains why translation requires more than substitution. A translator tries to preserve meaning across languages, including context, tone, culture, and implication. Converting an English procedure into Python likewise requires more than replacing words with code. The sequence, conditions, data, constraints, and intended result must survive the change of form.

Modern AI operates among these representations. It can summarise text, translate languages, describe images, explain errors, and generate code because it has learned patterns connecting one form of information to another.

## Information Can Change Form

> **Why it matters:** AI feels mysterious because it moves information across forms that humans usually treat as separate.

A doctor reads a scan and writes a report. A lawyer reads a contract and summarises the risk. A programmer reads a request and writes code. A teacher looks at test results and changes a lesson. A designer hears an idea and sketches a screen. A musician reads notation and produces sound.

In each case, information changes representation.

The important question is not whether the surface form changed. It is what survived the change. Did the doctor's report preserve what mattered in the scan? Did the legal summary preserve the obligation in the contract? Did the programmer's code preserve the behaviour the user needed?

Software development is full of these transformations:

```text
conversation
↓
requirements
↓
architecture
↓
source code
↓
tests
↓
running behaviour
```

Each step can lose information. A user may describe the problem poorly. A requirement may omit an exception. Code may implement the normal case but not the dangerous edge case. A test may verify the wrong behaviour. This is why AI-generated software can be both impressive and wrong: the model may successfully transform the representation while preserving the wrong relationship.

The central insight is therefore simple:

> Information is deeper than any particular human language, programming language, image, sound, or symbol system.

Once that is understood, AI-generated software becomes less magical. Software is information. Requirements are information. Code is information. Error messages are information. Screenshots are information. AI can participate in software creation because software belongs to the broader world of representable structure.

## Rules and Learned Relationships

> **Why it matters:** Explicit rules provide predictability; learned relationships handle variation that would be impractical to describe rule by rule.

Traditional software usually represents knowledge through rules:

```text
IF the password is wrong five times
THEN lock the account
```

Rules are powerful when the required behaviour is clear. They make accounting, databases, compilers, transaction systems, and access controls predictable and inspectable. Given the same input under the same conditions, deterministic software should produce the same output.

Some knowledge is much harder to express this way. How would a programmer write every rule needed to recognise cats in arbitrary photographs, translate jokes, judge whether a sentence is polite, or infer what a user meant by an incomplete request? The number of variations and exceptions becomes unmanageable.

Modern AI models learn relationships from examples instead:

```text
A is related to B
in this context
with this degree of likelihood
```

![Rules versus learned relationships](<figures/FIG-06-01 Rules Versus Relationships.png>)

A language model encounters words near other words, questions paired with answers, code beside explanations, and errors followed by fixes. Across enormous numbers of examples, it develops numerical relationships among symbols, structures, and procedures. Those relationships let it respond flexibly to new combinations rather than requiring one rule for every possible case.

Flexibility changes the nature of reliability. An account-lock rule can be inspected directly. A learned model may produce an excellent interpretation in one case and a plausible but wrong one in another. Learned relationships therefore complement rather than replace deterministic rules. The model handles variation; conventional software and people supply boundaries, checks, and authority.

## Information Becomes Numerical Structure

> **Why it matters:** A model does not keep each concept in one readable location; it distributes useful relationships across many numerical settings.

To work with words, code, images, or sound, an AI model turns pieces of them into numbers. Training adjusts a vast numerical structure so that related pieces of information influence one another in useful ways.

One rough intuition is a map organised by relationship rather than alphabetically. _Dog_, _cat_, _wolf_, and _animal_ would occupy a related region; _Swift_, _Python_, _function_, and _compiler_ would occupy another. A real model uses far more dimensions than a drawing can show, and its internal directions do not carry simple human-readable labels.

The phrase “AI thinks in mathematics” is therefore too strong. More accurately, an AI model represents learned patterns numerically. Those patterns can connect English, Chinese, code, images, and sound without making the forms identical or giving the model human understanding.

Another way to imagine this is that meaning becomes partly a matter of location. Not physical location, but position inside a learned space of relationships. _Dog_, _cat_, _wolf_, and _animal_ are related. _Swift_, _Python_, _function_, and _compiler_ are related. _Refund_, _receipt_, _return window_, and _customer order_ are related. A model does not store these relationships in neat labelled drawers. It distributes them across many numerical settings.

This is why the same model can appear to move between subjects. It is not opening a separate English engine, Chinese engine, Swift engine, and image engine. It is using learned relationships among many representations. The mechanism is not human understanding, but it is rich enough to transform information in useful ways.

The final connection to software is now easier to see.

## Why This Matters for Software

> **Why it matters:** AI can connect a request, a diagram, code, a test, and a screen because each can provide evidence about the same intended behaviour.

Software development is a chain of representation changes:

```text
need → requirements → design → code → tests → running behaviour
```

AI has encountered many relationships along this chain: code with comments, documentation with examples, bugs with fixes, tasks with tests, and designs with implementation patterns. It can therefore help move information from one stage to another.

It can also preserve the wrong thing. A request may be misunderstood. Generated code may compile but violate a business rule. A test may confirm the implementation while checking the wrong requirement. The ability to transform information does not guarantee that the intended meaning survived.

That is the conceptual bridge from information to models. Software is representable structure; AI models learn relationships among representations. [[06-what-is-an-ai-model|What Is an AI Model?]] explains where those relationships come from and how they produce a response.
