---
title: "What Is Information?"
---

# What Is Information?

When Radix displays the character 木, a learner sees a shape associated with *tree* or *wood*. Inside the application, that same character appears in several forms: a Unicode number, bytes in a file, pixels on a screen, a record in a database, a pronunciation, and a component inside other characters.

None of those forms is the character's meaning by itself. Each is a representation that another part of the system can store, transmit, compare, or display.

That is the useful idea of information for this book: a distinction represented in a form that can make a difference to a system. The representation may be ink, voltage, binary digits, text, sound, or numbers in a model. Its usefulness depends on an interpreter—a person, a program, or another machine process—that knows what to do with it.

## One Thing, Several Representations

A payment instruction can be spoken, written in English, encoded as JSON, stored in a database, or translated into machine instructions. The physical forms differ while the intended relationship remains recognisable.

Software development has always moved among representations:

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

Traditional programs depend mainly on procedures that people specify explicitly. A programmer defines how the system should transform one representation into another. Learned models add a different mechanism: training adjusts numerical parameters until the system captures statistical relationships that help it predict or generate useful outputs.

This is why an AI model can work across text, code, images, and sound. Each input is converted into numerical representations. Training makes some patterns and relationships more useful than others.

## “Meaning Becomes Location” Is an Analogy

Models often represent tokens as vectors—lists of numbers that can be treated as locations in a high-dimensional space. Items used in related contexts may occupy related regions. This helps explain how a model can associate *refund*, *payment*, and *order* or connect a plain-English request with relevant programming structures.

It is tempting to say that meaning becomes location. That phrase is memorable but incomplete. The geometry captures statistical relationships learned from data; it does not settle what human meaning is. A nearby position can support useful behaviour without giving the model a human experience of the concept.

The distinction matters because the next chapter asks what an AI model actually contains. It is not a database of complete answers and not a collection of hand-written rules. It is a learned numerical structure that can reproduce, adapt, and combine patterns when given new context.

That mechanism shortens the distance between representations. In software development, it allows ordinary language to influence code—not because English has become perfectly precise, but because the model has learned enough relationships among language, programs, and tasks to propose a translation that can then be tested.
