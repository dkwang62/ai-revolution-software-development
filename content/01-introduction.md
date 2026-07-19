---
title: "Introduction"
---

# Introduction

Radix began with dissatisfaction. I was learning Chinese and wanted an application that worked the way I thought a learner needed to work: moving among characters, components, phrases, pronunciation, and the material I encountered in daily life. I could not find that application, and I did not have the conventional programming background required to build it.

Then I began describing what I wanted to artificial intelligence.

At first, the results felt like magic. An idea expressed in ordinary language could appear as a working feature. The feeling did not last unchanged. A quiz that sounded simple required plausible distractors, script consistency, stable answer choices, and acceptable speed. A screen could contain the correct controls while being awkward to use. Code could compile while implementing the wrong educational behaviour.

The productive moments occurred when the Genie and I contributed different things. I knew why a learning activity mattered and when its behaviour felt wrong. The Genie could search the project, translate requirements into code, run tools, read failures, and revise an implementation. The feature became useful only after intention, generation, and verification met.

That experience produced the question behind this book:

> How can an idea expressed in ordinary English become working software?

I found many descriptions of what AI products could do and many predictions about programmers. I found fewer explanations that began with the deeper economic and technical mechanism. Why had software been expensive in the first place? What changed when natural language became part of the engineering interface? Which costs disappeared, which merely moved, and which became more important?

## The Distance Between Intention and Implementation

For most of computing history, creating software required people who could translate human purposes into precise representations a machine could execute. Programming languages made that work easier than machine code, frameworks hid recurring complexity, and cloud services removed the need to build every layer from scratch. Each abstraction lowered the cost of expressing some forms of intention.

AI continues that history, but imperfectly. A language model can connect an informal request with patterns in code, architecture, documentation, and previous examples. A coding agent can go further by inspecting files, editing them, running tests, and responding to feedback from the real system.

The interface is powerful because it is flexible. It is unreliable for the same reason. Ordinary language is ambiguous, models are probabilistic, and a project contains constraints that may never appear in the prompt. AI does not provide the stable contract of a traditional abstraction by itself. Tests, schemas, tools, permissions, frameworks, and human review help supply that contract.

This is the central tension of the book. AI can make implementation dramatically cheaper without making judgement, trust, or responsibility cheap.

## Why Software Comes First

Software is an unusually revealing place to study AI because the work is digital and observable. A model's proposal can become a file. The file can be compiled. Tests can pass or fail. A screen can be rendered. A user can decide whether the behaviour solves the problem.

Software also sits beneath modern organisations. It contains accumulated decisions about customers, payments, products, risk, logistics, and work. Lowering the cost of changing software can therefore alter more than the software industry. It can change who is able to build, which ideas are attempted, how organisations preserve knowledge, and where economic scarcity moves next.

Radix is the recurring field case because it is where I crossed the boundary this book examines. It is not proof that anyone can safely build any system by talking to AI. It is evidence that a motivated domain expert can participate much more directly in software creation by supplying intent, evaluating behaviour, refining requirements, and supervising an AI engineering collaborator.

The Genie in this book is Codex, the coding agent I used most directly, but the argument is not about one vendor. Claude Code, Cursor, GitHub Copilot, and systems still to come belong to the same transition from AI as adviser to AI as supervised actor.

This is also not a manual of prompt tricks. Products and interfaces will change too quickly. The durable questions concern abstraction, representation, models, context, requirements, verification, integration, and economics.

We begin where the practical mystery begins: with the historical cost of software. Until we understand why turning knowledge into reliable systems was expensive, we cannot understand what it means for a Genie to make part of that translation cheaper.
