---
title: "Introduction"
---

The project began with dissatisfaction. I was learning Chinese and wanted an application that worked the way I thought a learner needed to work: moving among characters, components, phrases, pronunciation, and the material I encountered in daily life. I could not find that application, and I did not have the conventional programming background required to build it.

Then I began describing what I wanted to artificial intelligence.

At first, the results felt like magic. An idea expressed in ordinary language could appear as a working feature. The feeling did not last unchanged. A quiz that sounded simple required plausible distractors, script consistency, stable answer choices, and acceptable speed. A screen could contain the correct controls while being awkward to use. Code could compile while implementing the wrong educational behaviour.

The productive moments occurred when the AI coding agent and I contributed different things. I knew why a learning activity mattered and when its behaviour felt wrong. The AI agent could search the project, translate requirements into code, run tools, read failures, and revise an implementation. The feature became useful only after intention, generation, and verification met.

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

The book is therefore about software development in a broad but disciplined sense. It is not about every use of AI or every object created with a computer. It is about work where human intent must pass through software, engineering representations, tools, and verification before it becomes a useful result.

That includes applications, websites, enterprise systems, and games. It also includes some fields where the final product is not conventional software: animated films and visual effects, digital publishing, chip design, robotics, autonomous vehicles, scientific simulation, industrial design, and drug or materials discovery. In each case, software engineering is part of the machinery that turns an idea into an outcome.

The test is simple: if producing the result requires humans to translate intent through software, representations, tools, and engineering processes, then AI's movement up that chain belongs in this book. If software engineering is not materially involved, the example may be interesting, but it belongs somewhere else.

An app is the recurring field case because it is where I crossed the boundary this book examines. It is not proof that anyone can safely build any system by talking to AI. It is evidence that a motivated domain expert can participate much more directly in software creation by supplying intent, evaluating behaviour, refining requirements, and supervising an AI engineering collaborator.

The genie is only the book's analogy. The actual system I used most directly was Codex, an AI coding agent, but the argument is not about one vendor. Claude Code, Cursor, GitHub Copilot, and systems still to come belong to the same transition from AI as adviser to AI as supervised actor.

This book introduces technical language because readers will encounter it in courses, product announcements, workplaces, and public debate. But the term is never meant to carry the explanation. Each important idea should first be understandable as an ordinary action, problem, or relationship. The recognised industry term then gives the reader a label for something already understood. The glossary provides a place to return to those labels without interrupting the main argument.

This is also not a manual of prompt tricks. Products and interfaces will change too quickly. The durable questions concern abstraction, representation, models, context, requirements, verification, integration, and economics.

## Why Look Beneath the Interface?

If AI succeeds as an abstraction, most users should not need to understand its internal machinery. When I ask Codex to improve Radix or help publish this book, I do not particularly want to manage every model call, tool call, agent thread, context summary, test run, or internal planning step. I want to express the objective clearly and judge whether the result serves the purpose.

That is how successful abstraction usually feels. A Python programmer does not think about CPU registers. A smartphone user does not think about radio protocols. A driver does not manually control fuel injection. The best technology often becomes invisible.

The same may happen with agentic AI. The public conversation is full of terms such as agents, orchestration, retrieval, tool use, memory, and context windows. Some of those terms matter greatly to engineers building AI systems. But for most users, the destination is simpler:

```text
human intent
↓
AI system
↓
useful outcome
```

The user's expertise should remain in the problem: what should happen, why it matters, what constraints apply, what must never be allowed, and how success should be recognised. The AI system should increasingly absorb the implementation layer.

So why read a book about models, tokens, agents, context, verification, and software engineering?

Not because every reader must become an AI engineer. The point is to understand the direction of travel. If we understand what the machinery can already hide, what it still cannot hide, and which limitations are economic rather than fundamental, we can make better judgements about the future. We can ask whether today's weaknesses are permanent barriers or temporary engineering problems. We can see why intent, requirements, domain knowledge, verification, and judgement become more valuable as implementation becomes cheaper.

That is the real reason this book looks beneath the interface. It is not teaching readers how to wire together today's agentic-AI plumbing. Much of that plumbing may disappear. It is teaching readers how to think about the movement of the abstraction boundary itself.

## The Tree of the Book

The structure matters because this is not meant to be a pile of AI observations. It is meant to be a framework.

The first branch is **software economics**. Before we can understand why AI matters, we need to understand why software has been expensive: human expertise, requirements, debugging, testing, integration, maintenance, and the accumulated knowledge embedded in long-lived systems.

The second branch is **abstraction**. Computing has repeatedly advanced by hiding complexity: machine code behind assembly, assembly behind high-level languages, repeated patterns behind libraries and frameworks, infrastructure behind cloud services. AI belongs in that history because it hides more of the translation between human intent and machine-executable behaviour.

The third branch is **information and models**. AI can write code only because language, code, images, diagrams, and examples can all be represented as information. Models learn relationships among those representations. This is where tokens, neural networks, training, inference, context, multimodality, and reasoning belong.

The fourth branch is **engineering with AI**. Once AI can generate useful outputs, the practical question becomes how to make those outputs dependable: requirements, specifications, structured output, validation, testing, tool use, permissions, audit trails, human review, and trust.

The fifth branch is **the future**. If implementation becomes cheaper, scarcity moves. Domain knowledge, architecture, verification, enterprise context, organisational memory, and judgement become more important. Codex-like agents, enterprise intelligence layers, and multimodal production systems are not separate topics; they are examples of the same abstraction boundary moving upward.

That is the tree. Individual stories—Radix, Personal Librarian, legacy systems, AI filmmaking, Macrohard, frontier models, or enterprise AI—matter because they attach to one of those branches. If an example does not help clarify the tree, it does not belong in the book.

We begin where the practical mystery begins: with the historical cost of software. Until we understand why turning knowledge into reliable systems was expensive, we cannot understand what it means for AI to make part of that translation cheaper.
