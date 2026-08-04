---
title: "What Becomes Scarce When Code Becomes Cheap?"
---

![Scarcity shift](<figures/FIG-15-01 Scarcity Shift.png>)

**As AI lowers the cost of producing code, the difficult part of software moves elsewhere.** The scarce resources become knowing which problem matters, defining the right behaviour, keeping the system coherent, proving that it works, and accepting responsibility for the result.

This does not mean programming disappears or that software becomes free. It means implementation is less likely to be the only—or even the main—constraint. A team may be able to generate a feature quickly and still struggle to decide whether it is useful, how it should fit the rest of the system, what could go wrong, and what evidence would justify releasing it.

This chapter is about that shift in scarcity. As the supply of code increases, value moves towards six things:

- knowledge of the real problem;
- clear requirements and boundaries;
- architecture that keeps many changes coherent;
- evidence that the software works;
- judgement about which possibilities deserve to exist; and
- accountable ownership of the outcome.

Imagine a factory that wants a small system to read maintenance reports and warn when a machine may need to be stopped. An AI agent could quickly generate forms, connect a database, summarise reports, and display an alert. But the difficult questions would remain: Which combinations of vibration, temperature, noise, and repair history indicate danger? When should the system interrupt production rather than schedule routine maintenance? Who has authority to stop the line? What evidence would show that the warning rules are safe?

The software can be generated faster than those questions can be answered. The factory's engineers, operators, maintenance records, safety rules, tests, and accountable managers supply what code generation cannot. This is the chapter's economic lesson: **when one important cost falls, the bottleneck moves**. For most of computing history, many useful ideas died because turning them into code cost too much. AI allows more ideas to cross that threshold, but it also exposes the constraints that were waiting behind implementation. Those constraints will shape the next software economy.

## The Bottleneck Moves Upward

> **Why it matters:** Cheap code does not make software effortless—it makes the earlier decisions about purpose, evidence, and responsibility more visible.

Suppose a teacher has an idea for a tool that would help one class for one term. A clinic needs a small application for an unusual workflow. A business owner is tired of copying the same information between two systems. A language learner wants an application that behaves differently from every product on the market.

In the past, such ideas often failed an economic test before they failed a technical one. They were valuable, but not valuable enough to pay for the programmers, designers, testing, deployment, and maintenance required to make them real.

As implementation becomes cheaper, more ideas cross that threshold. We should expect more personal software, more internal tools, more specialised applications and more temporary systems built for a particular moment.

Abundance, however, creates a new problem. If we can build far more, how do we decide what deserves to exist?

## Knowing the Problem

Generic software is easier to imagine than useful software.

A doctor understands where a clinical workflow breaks down. A lawyer recognises procedural risk. A factory supervisor knows which exception on the production floor matters and which is harmless. A teacher understands what distracts a learner. These details rarely arrive as a neat specification. They live in experience.

AI can question, suggest, infer and compare. It can make programming knowledge available to someone who has never studied computer science. But it does not automatically possess the private, local knowledge of the problem. The person closest to the work often knows why the obvious solution will fail.

This reverses an old relationship. Domain experts once handed their needs to programmers, who translated them into software. Now those experts can participate directly in the act of building. Their knowledge becomes more valuable because there is a shorter path from what they know to what a machine can do.

## Turning Intention Into Requirements

Cheap generation does not solve unclear requirements. It exposes them faster.

An AI can turn a vague instruction into a plausible prototype within minutes. That prototype may look convincing while embodying the wrong assumptions. It may handle the normal case and miss the dangerous exception. It may implement exactly what someone said rather than what that person needed.

The scarce skill is therefore not simply prompting an AI to “build an app”. It is deciding what behaviour should exist, what must never happen, which trade-offs are acceptable and what evidence will count as success.

Requirements become a higher form of programming. Instead of expressing every machine instruction, people increasingly define purpose, boundaries, examples and tests. The implementation may be generated; the meaning of “correct” still has to come from somewhere.

## Keeping Abundant Code Coherent

> **Why it matters:** When creating a feature is cheap, maintaining a coherent whole becomes a more important form of engineering discipline.

A feature can work and still make the whole system worse.

Software needs an overall structure: where one part ends and another begins, how information is represented, which component has authority, what happens when something fails, and how future changes can be made without breaking the past. This is the work of software architecture.

When code was expensive, the effort of producing it limited the rate of change. When AI can generate changes rapidly, a weak architecture can accumulate disorder just as rapidly. The danger is no longer only that too little software will be built. It is that organisations will build more than they can understand, integrate or maintain.

Architecture therefore rises in value. Someone—or some carefully supervised system—must decide where a generated change belongs, how it interacts with existing systems, how it will be tested and whether it should survive the next revision.

## Proving That It Works

Plausible output is not the same as dependable behaviour.

The more software we generate, the more evidence we need. Tests, reviews, monitors, validations, audit trails and human approval do not become obsolete when generation gets faster. They become the machinery that allows speed to be trusted.

The burden varies with consequence. A personal experiment can tolerate failure. A payment system, medical device or public service cannot. AI adoption will therefore move at different speeds even when the underlying models are identical. The decisive cost is not the price of generating an answer. It is the total cost of obtaining a result that is safe and useful enough to keep.

This is what the interface problems in my own application taught me. Traditional tools still mattered. Apple's layout framework supplied tested behaviour. Accessibility settings revealed stress cases. Screenshots exposed what source code concealed. Reusable components reduced variation, while automated tests could check that a control existed and responded.

Those mechanisms can remove much of the mechanical checking. An agent can render a screen, inspect the result and revise its own work. Yet even a flawless layout does not decide whether the control belongs in the learner's journey. Verification can show that the software behaves as specified. Judgement must still decide whether the specification was worth pursuing.

## Judgement and Taste

> **Why it matters:** Once many solutions are affordable, choosing the one that best serves people becomes a competitive advantage.

When production is difficult, people accept whatever can be made. When alternatives become cheap, choosing among them becomes the work.

Judgement determines whether an answer is useful, safe, excessive, incomplete or wrong. Taste decides what to leave out. It can distinguish a coherent product from a collection of features, a helpful automation from an intrusive one, and a humane interface from a technically functional screen.

AI can produce alternatives and help evaluate them. That increases the range of possible choices; it does not remove the need to choose. In a world overflowing with generated possibilities, restraint may become more valuable than production.

## The New Software Economy

> **Why it matters:** The scarce resource shifts from the ability to type implementation to the ability to define, connect, verify, and own a useful change.

The first great change is that many more people will be able to attempt software. The deeper change is that value will migrate away from typing code and towards knowing what should be built, supplying the context, designing the system, proving its behaviour and accepting responsibility for the result.

Scarcity will not disappear. Better models and agents will reduce some of these costs too. They will improve at interface design, testing, architecture and analysis. Each improvement will expose the next constraint.

But the direction is already visible. When machines can produce more of the implementation, human effort moves closer to purpose.

That movement changes more than the cost of software. It changes who can become a builder—and what professional programmers are for.
