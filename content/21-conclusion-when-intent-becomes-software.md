---
title: "Conclusion: When Intent Becomes Software"
---

# Conclusion: When Intent Becomes Software

Before the Genie, many of my ideas for Radix would have ended as notes.

I could describe the learning problem, sketch the behaviour, and imagine how an application might help. The remaining distance—from intention to architecture, code, debugging, and a working interface—was too great for me to cross alone.

AI shortened that distance. It did not remove it.

The difference can be seen in a small Radix feature. I wanted a quiz that used visually plausible Chinese characters rather than random wrong answers. The first statement of the idea was easy. Turning it into useful software required decisions: which characters were genuinely confusable, whether Simplified and Traditional forms should mix, how choices should remain stable, what happened when the candidate pool was small, and whether the screen responded quickly enough.

The Genie could turn each refinement into implementation. I still had to recognise what counted as a good learning experience. The resulting feature was neither my work alone nor an autonomous creation of the model. It emerged from a loop of intention, generation, observation, correction, and verification.

That loop is the practical meaning of this book's argument.

## The Next Abstraction Is a System

AI raises the level at which people can work with computers. Ordinary language, images, examples, and conversation can now influence software directly. This continues the history of abstraction that moved programming away from machine instructions toward forms closer to human purpose.

But AI is an unusual abstraction. It interprets rather than merely compiles. Its flexibility allows it to handle variation that no practical rulebook could enumerate. The same flexibility makes it probabilistic, sensitive to context, and capable of persuasive mistakes.

The dependable abstraction is therefore not the model alone. It is the model surrounded by engineering:

```text
human purpose
↓
model interpretation and generation
↓
tools and formal representations
↓
tests, validators, permissions, and observation
↓
human judgment and responsibility
```

This is why “AI suggests; software decides” remains important even as agents become capable of action. A tool may execute a change, but its authority should be bounded. A model may propose a solution, but evidence should determine whether the solution survives.

## Cheap Code Changes What Matters

When implementation becomes cheaper, the value does not vanish. It moves.

The scarce work increasingly lies in choosing worthwhile problems, expressing requirements, designing coherent systems, supplying organizational context, verifying behaviour, integrating with existing software, and earning trust. Domain knowledge becomes more valuable because the person who understands the problem can participate more directly in building the solution. Architecture becomes more valuable because abundant changes can produce abundant disorder. Taste becomes more visible because a functional screen is not necessarily a humane one.

Radix made that shift tangible to me. AI dramatically accelerated logic and implementation, while user-interface refinement consumed most of my time. That balance will change as multimodal agents learn to render, inspect, and correct their own work. The mechanical defects should shrink. The responsibility for deciding what the experience ought to be will remain.

Organisations face the same pattern at larger scale. Their advantage will not come from renting access to the same general model as everyone else. It will come from connecting models to proprietary knowledge, reliable systems, permissions, provenance, and workflows without losing control of the decisions embedded in them.

## What Humans Choose to Build

The most important consequence of cheaper software may be the ideas that no longer die before implementation.

A teacher may test a learning method without first raising money for a development team. A small organisation may build a tool for a workflow too specialised to interest a software vendor. A domain expert may turn years of tacit knowledge into a system others can use. Many experiments will fail. Some will create fragile software that should never be deployed. Lower barriers increase the need for judgment as well as the supply of possibilities.

The future of programming is therefore not captured by the question of whether AI will replace programmers. Tasks, roles, and pathways will change. Experts may gain enormous leverage; newcomers may enter through domain knowledge and supervision; organisations may need fewer people for some forms of routine implementation and more capacity for review, integration, security, and product judgment.

I began Radix because the application I wanted did not exist. I began this book because the explanation I wanted did not exist. In both cases, the Genie made production possible. It did not decide what was worth producing, notice every mistake, or accept responsibility for the result.

That remains the human part of the bargain.

When ideas can become software more easily, the final question is no longer only *Can we build it?*

It is *What should we ask the Genie to make—and what evidence will justify keeping it?*
