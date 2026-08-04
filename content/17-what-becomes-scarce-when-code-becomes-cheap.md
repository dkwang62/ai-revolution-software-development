---
title: "What Becomes Scarce When Code Becomes Cheap?"
---

**As AI lowers the cost of producing code, the difficult part of software moves elsewhere.** The scarce resources become knowing which problem matters, defining the right behaviour, keeping the system coherent, proving that it works, and accepting responsibility for the result.

This does not mean programming disappears or software becomes free. A team may generate a feature quickly and still struggle to decide whether it is useful, how it should fit the existing system, what could go wrong, and what evidence would justify releasing it.

The economic principle is simple:

> When one important cost falls, the bottleneck moves.

![Scarcity shift](<figures/FIG-15-01 Scarcity Shift.png>)

For much of computing history, useful ideas died because implementation cost too much. AI allows more ideas to cross that threshold. It also exposes the constraints that were waiting behind implementation.

## The Bottleneck Moves Upward

> **Why it matters:** Cheap code makes decisions about purpose, evidence, and responsibility more visible—not less necessary.

Imagine a factory that wants a small system to read maintenance reports and warn when a machine may need to stop. An AI agent can generate forms, connect a database, summarise reports, and display an alert. It cannot infer from code alone which combination of vibration, temperature, noise, and repair history signals danger; who has authority to stop production; or what evidence would show that the warning process is safe.

The implementation may be generated faster than those questions can be answered. Factory engineers, operators, maintenance records, safety rules, tests, and accountable managers supply what generation cannot.

The same pattern appears in smaller projects. A teacher's temporary learning tool, a clinic's unusual workflow, or a business owner's internal automation may become affordable for the first time. As more ideas can be attempted, the deciding question changes from “Can this be coded?” to “Is this worth building, and can it be trusted enough for its purpose?”

## Knowing the Problem

Generic software is easier to imagine than useful software.

A doctor knows where a clinical workflow breaks. A factory supervisor knows which exception matters and which is harmless. A teacher knows what distracts a learner. These details rarely arrive as a neat specification. They live in experience.

AI can question, suggest, compare, and make programming knowledge available to people who never studied computer science. It does not automatically possess the private, local knowledge of the problem. As the path from idea to implementation shortens, domain knowledge becomes more—not less—valuable.

## Turning Intention into Requirements

> **Why it matters:** A plausible prototype can hide unclear requirements more effectively than a blank screen can.

An AI can turn a vague instruction into a convincing prototype within minutes. The result may embody the wrong assumptions, handle the normal case while missing the dangerous exception, or implement exactly what someone said rather than what they needed.

The scarce skill is therefore not prompting AI to “build an app.” It is deciding what behaviour should exist, what must never happen, which trade-offs are acceptable, and what evidence will count as success.

Requirements become a higher form of programming. People increasingly define purpose, boundaries, examples, and tests while the implementation is generated. The meaning of “correct” must still come from somewhere.

## Keeping Abundant Code Coherent

> **Why it matters:** When creating a feature is cheap, maintaining a coherent whole becomes a more important engineering discipline.

A feature can work and still make the system worse. Software needs an overall structure: where one part ends and another begins, how information is represented, which component has authority, what happens when something fails, and how future changes can be made without breaking the past.

When implementation was expensive, the effort of producing code limited the rate of change. When AI generates changes rapidly, a weak architecture accumulates disorder just as rapidly. Someone—or some carefully supervised system—must decide where each change belongs, how it interacts with existing systems, and whether it should survive the next revision.

## Proving That It Works

Plausible output is not dependable behaviour.

Tests, reviews, monitors, validators, audit trails, and human approval do not become obsolete when generation gets faster. They become the machinery that allows speed to be trusted. The burden varies with consequence: a personal experiment can tolerate failure; a payment system, medical device, or public service cannot.

An agent can render a screen, run tests, inspect errors, and revise its work. Those mechanisms remove mechanical checking. They still cannot decide whether a control belongs in the user's journey or whether the requirement itself was wise. Verification can show that software behaves as specified. Judgement decides whether the specification deserves to exist.

## Judgement, Taste, and Ownership

> **Why it matters:** When many solutions are affordable, choosing and owning the right one becomes a competitive advantage.

Judgement distinguishes a useful answer from an excessive, unsafe, or incomplete one. Taste decides what to leave out. It separates a coherent product from a collection of generated features and a helpful automation from an intrusive one.

AI can produce alternatives and help evaluate them. That expands the set of choices; it does not remove the need to choose. Nor can a model accept organisational or moral responsibility for the outcome. Someone must decide who may release the system, who monitors it, and who answers when it fails.

## The New Software Economy

The first change is that more people can attempt software. The deeper change is that value migrates away from typing implementation and towards knowing what should be built, supplying context, designing the system, proving its behaviour, and accepting responsibility for its consequences.

Scarcity will keep moving. Models and agents will improve at testing, architecture, interface design, and analysis too. Each improvement will expose the next constraint.

But the direction is already visible: when machines produce more implementation, human effort moves closer to purpose. That changes who can become a builder—and what professional programmers are for.
