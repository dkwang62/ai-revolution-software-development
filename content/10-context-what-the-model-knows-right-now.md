---
title: "Context: What the Model Knows Right Now"
---

# Context: What the Model Knows Right Now

![Three meanings of context](<figures/FIG-09-01 Three Meanings of Context.png>)

The preceding Part explained models, English-to-software transformation, and the economics of capability. One crucial idea needs its own foundation: a model's behaviour depends both on what it learned during training and on the information available when it is used.

That surrounding information is context.

Context explains why a model can be brilliant in general and still make a poor decision inside a particular project.

The central question is simple:

> What does an AI need to know right now in order to act intelligently in this situation?

## The Simplest Definition

Context is the information surrounding a request that makes the request meaningful.

If I say, "Put it over there," the words are simple but the meaning is almost empty. What is "it"? Where is "there"? Am I speaking in a kitchen, a warehouse, a hospital, a classroom, or a software project? The sentence cannot be interpreted without the surrounding situation.

Software work has the same problem. If the person responsible for deciding what a product should do says, "Add a search feature," the request points toward an intention but does not yet define a system. Search what: Chinese characters, customer records, hotel bookings, medical images, source code? Should spelling mistakes be tolerated? Should results be ranked by relevance, date, popularity, or exact match? Should permissions apply? Should it work offline? The implementation depends on the surrounding facts.

That surrounding information is context.

## Three Meanings of Context

The word "context" is confusing because people use it in several different ways. This book uses the word carefully.

In the broadest sense, context means the surrounding information that gives a request meaning. When precision matters, the book distinguishes several related ideas:

```text
Training knowledge: what the model learned during training.
Context window: temporary working memory during inference.
Retrieved context: external information brought into the context window.
Project context: situation-specific knowledge about a product, codebase, or problem.
Enterprise context: organisation-wide knowledge available to AI systems.
Raw context: maximum token capacity.
Effective context: useful information actually available for solving the task.
```

These ideas are related, but they are not interchangeable. Confusing them leads to confused arguments about what AI "knows."

## Training Knowledge and Working Memory

The first distinction is between what the model has learned and what the model can see right now.

Training gives the model general capability. It has learned patterns involving programming languages, history, physics, law, medicine, economics, literature, databases, software architecture, and countless other subjects. This knowledge is not stored as ordinary documents. It is distributed across the model's parameters as mathematical relationships.

The context window is different. It is the information available to the model during the current inference session. The model is the map; the context window is the viewport.

Imagine Google Maps. The map contains a representation of the world, but the phone screen shows only Singapore's central business district, a neighbourhood, or a particular route. The model's learned knowledge is analogous to the larger map. The context window is the visible portion currently being used.

If a user says:

```text
The hotel has 100 rooms.
Members in the highest customer tier receive special pricing.
The system must support Singapore's goods and services tax (GST).
Online payments are required.
```

that information becomes part of the current context window. The model can use it while answering, but it has not necessarily learned it permanently. When the session ends, the information may disappear unless the application stores, summarises, indexes, or retrieves it later.

That gives us the essential distinction:

```text
Training is education.
The model is long-term learned capability.
The context window is temporary working memory.
Retrieved context is information brought into working memory from outside.
```

## Context Is Not the Same as Knowledge

An AI model may know how login systems usually confirm a user's identity. It may not know how your application does so. It may know common ways of storing data. It may not know your application's particular arrangement of tables, fields, and relationships—what programmers call its **database schema**. It may know how payment systems are generally designed. It may not know the business rules inside a particular bank's older software.

Training gives the model general patterns. Context gives it the particular case.

This is why an AI can answer a general programming question well but make a bad change in a real codebase. The model may understand the language, the framework, and the design pattern. What it lacks is the local context: files, tests, conventions, business rules, previous decisions, edge cases, and hidden constraints that make this system different from every other system.

In software engineering, those details matter enormously.

## Same Instruction, Different Context

Consider the instruction, "Make it faster."

To a web developer, that might mean reducing page-load time. To a database engineer, it might mean creating a faster way to find records. To a machine-learning engineer, it might mean reducing the waiting time for an AI response, known as **inference latency**. To a product manager, who decides which user problems and features matter, it might mean shortening the steps a user must take. To a finance department, which records and reports an organisation's money, it might mean speeding up the process of closing the accounts at the end of each month.

The instruction is identical. The correct action changes because the context changes.

Software development is full of instructions like this: make the screen cleaner, fix the search, improve onboarding, reduce errors, support enterprise customers, make it secure, modernise the system. None of these instructions is self-contained. They require interpretation, and interpretation requires context.

This is one reason AI-assisted software development is not merely "telling AI what to code." The human must supply enough surrounding information for the model to understand what the instruction means in this particular situation. That is why communication becomes engineering.

## The Context Window

When an AI model is used, it does not automatically have access to everything it has ever been told by a user, every file in a codebase, every document inside a company, or every event in the world. It has access to the information placed into its current working area.

That working area is the context window. It may include the user's prompt, earlier messages, system instructions, attached files, code snippets, retrieved documents, tool outputs, application state, examples, constraints, and relevant memory.

A useful analogy is a desk. The model's training is like everything a person has learned over a lifetime. The context window is like the papers currently spread out on the desk. A person may be intelligent and well educated, but if the relevant contract, design note, bug report, or database schema is not on the desk, they may make the wrong decision. The problem is not intelligence. The problem is missing context.

The same is true for AI.

## Why Larger Context Windows Matter

Real software systems are not isolated fragments. A small change may depend on stored data, screen conventions, business rules, security requirements, old decisions, or previous failures. If the model sees only the function being edited, it may produce a locally plausible change that breaks the larger system.

A larger context window can expose more files, requirements, examples, and conversation. It can also add noise. The model may follow stale documentation or miss one decisive constraint among thousands of irrelevant lines. The important question is therefore not only "How much can the model read?" but "Is the right information available at the right moment?"

## Memory and Retrieval

Because the context window is limited, AI systems often need ways to bring relevant information into context when needed. This is where memory and retrieval systems enter.

Memory does not necessarily mean the model permanently changes every time it learns something. In many practical AI systems, memory means that information is stored outside the model and retrieved later. A coding assistant may search relevant source files, recent commits, design documents, API documentation, issue descriptions, error logs, test failures, or prior conversations. The retrieved material is then inserted into the context window so the model can use it.

This distinction matters:

```text
Training creates general model capability.
Inference uses the model for a specific task.
Context is the information available during that task.
Retrieval finds relevant information outside the model.
Memory preserves useful information so it can be retrieved later.
```

An AI system that appears to "remember" a project may actually be searching project files, loading summaries, or consulting an external knowledge base. That does not make the memory fake. It means the memory belongs to the surrounding system, not necessarily to the model itself.

For software engineering, that is a strength. Most project knowledge should not be baked permanently into a general model because it changes too often. Requirements change. APIs change. Tests change. Customers change. Regulations change. Project context must be current, which makes retrieval, memory, indexing, and governance part of the engineering problem.

## Project-Specific Context

An experienced engineer does not merely know programming. They know the project and the history behind it.

They know why a module is written in an awkward way, which customer depends on an old behaviour, why the migration failed three years ago, which test is flaky, which database table is dangerous to change casually, why the documentation is out of date, and which stakeholder will object if a workflow changes.

Much of this knowledge may never appear in code. It may live in meetings, habits, incident reports, customer complaints, chat threads, half-forgotten design decisions, and people's heads.

Programming expertise therefore has two layers:

```text
General software engineering knowledge
+ project-specific context
```

AI is increasingly strong at the first layer because it has been trained on enormous amounts of general programming material. The second layer is harder because it belongs to a specific organisation, product, codebase, customer base, and history.

When AI fails at a software task, the failure is often described as lack of intelligence. Sometimes that is true. But often the failure is more precise: the AI did not have the information it needed. It did not know the business rule, see the test, understand the migration history, know the product constraint, have the architecture decision record, or realise that the old behaviour was intentional.

That is not merely a model problem. It is a context problem.

## Field Note: The Highlight That Already Worked

I once reported that a highlighted Chinese character was not working while I browsed a document in the language-learning application. A superficial response would have rewritten the highlighting code. Inspection showed that the highlight already existed. The real defect was navigation: the application did not move to the page containing it, so the learner could not see it.

The diagnosis depended on the actual project rather than general programming knowledge. The AI coding agent searched the relevant files, followed the state changes, and compared the intended journey with the implemented one. This is **grounding**: connecting a conclusion to evidence from the situation in which the system is acting.

The lesson is simple. A strong model with the wrong context can fix the wrong problem. A good engineering workflow gathers enough evidence to identify the real one.

## Context as an Economic Bottleneck

[[02-economics-of-software-development|The Economics of Software Development]] argued that software has been expensive because expertise is scarce. AI changes that by making general software knowledge more available. A person can ask for help with Python, Swift, SQL, architecture, testing, debugging, or refactoring and receive useful assistance immediately.

But as general expertise becomes cheaper, another bottleneck becomes more visible:

> Does the AI understand this specific situation?

If a company cannot make its internal knowledge accessible to AI, the AI remains generic. It may write plausible code, but it cannot reliably make decisions that depend on the company's systems, customers, policies, risks, and history. If the company can make that knowledge accessible, the value of AI increases dramatically.

This is why companies invest in ways to make code searchable, find relevant documents, connect related facts, use external tools, observe running systems, and search company knowledge. Industry names include **code indexing** (building a searchable guide to code), **document retrieval** (finding relevant documents), **vector databases** (finding items with mathematically similar meanings), **knowledge graphs** (maps of named things and their relationships), **tool use**, **production telemetry** (measurements and events reported by live systems), and **enterprise search** (search across an organisation's information). They all address the same practical problem: supplying the right situation-specific knowledge to AI.

The economic pattern is:

```text
General model capability without context
= broad but generic intelligence

General model capability with high-quality context
= useful intelligence inside a specific situation
```

The value is not only in the model. It is in the combination of model and context.

## Raw Context and Effective Context

Raw context is the maximum number of tokens a model can read. Effective context is the amount of relevant information the system can actually use to solve the problem.

Raw context is what model providers advertise. Effective context is what users experience.

The difference matters because bigger context has diminishing returns. If the task is to write a small script, a million-token context window may add little value. If the task is to understand a large codebase, legacy system, contract archive, or enterprise process, more context may be extremely valuable.

Context also has cost. More tokens usually mean more computation, more memory, more latency, and more expense. If doubling context improves a task only slightly, the economics may not justify the cost.

That is why the race may shift from largest context to smartest context: better retrieval, better reasoning, better tool use, and better verification. The goal is not to stuff everything into the model's working memory. The goal is to supply the right information at the right time, at acceptable cost.

## From Enterprise Knowledge to Working Context

![Enterprise knowledge to context window](<figures/FIG-09-02 Enterprise Knowledge To Context Window.png>)

A company holds far more knowledge than any model can use at once: source code, policies, customer complaints, incident reports, workflows, decisions, and undocumented rules. The knowledge may be scattered across databases, documents, code, email, work-tracking systems, and people's memories.

Enterprise knowledge is therefore not the same as a context window. The organisation may possess the information, yet the AI can use only the relevant pieces retrieved into its temporary working memory:

The relationship looks like this:

```text
Enterprise Knowledge
        |
        v
Knowledge Organisation
        |
        v
Retrieval System
        |
        v
Relevant Documents
        |
        v
Context Window
        |
        v
AI Model
        |
        v
Answer or Action
```

A huge context window with poor retrieval may be less useful than a smaller one supplied with exactly the right evidence. The organisational advantage may therefore lie in accurate knowledge, good search, clear permissions, and **provenance**—a record of where each fact came from.

This suggests a further architectural layer, developed in [[19-enterprise-intelligence-layer|The Enterprise Intelligence Layer]].

Most enterprises need not build their own frontier model. They can rent general capability while owning the specialised context that describes their business reality. That leads to an economic thesis:

> In the AI era, foundation models may become commodities. Enterprise knowledge becomes the competitive advantage.

## Bad Context Creates Bad Software

If context is powerful, bad context is dangerous. AI systems can fail because context is missing, incomplete, out of date, contradictory, irrelevant, too broad, too narrow, untrusted, unauthorised, or misleading.

For example, an AI system may read old documentation that no longer matches the code. It may retrieve a deprecated API, see a workaround but not the reason for it, combine requirements from two different product versions, expose information to a user who should not see it, or give excessive weight to one example while ignoring a stronger rule elsewhere.

This is why context management becomes part of software engineering. The goal is not merely to give AI more information. The goal is to give AI the right information, with the right permissions, at the right time, with enough structure to support reliable action.

In traditional software, data quality already mattered. In AI systems, context quality matters just as much because context directly shapes behaviour.

Context is the bridge between general capability and useful action. Software work always happens inside a particular codebase, organisation, budget, regulation, and history. [[11-communication-becomes-the-interface|Communication Becomes the Interface]] examines the human side of that bridge: how intent and constraints must be expressed when language becomes part of engineering.
