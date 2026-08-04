---
title: "Context: What the Model Knows Right Now"
---

A model can be capable in general and still make a poor decision in a particular project. The missing ingredient is often not intelligence but context: the information that gives the current request its meaning.

If someone says, "Add a search feature," the intention is clear only at the broadest level. Search what: Chinese characters, customer records, hotel bookings, medical images, or source code? Should spelling mistakes be tolerated? How should results be ranked? Which permissions apply? The correct software depends on facts that are not contained in the sentence.

This chapter develops one central idea:

> An AI can act intelligently in a situation only when the relevant facts about that situation are available while it works.

![Three meanings of context](<figures/FIG-09-01 Three Meanings of Context.png>)

## Training Knowledge and Working Context

> **Why it matters:** General knowledge is not a substitute for the specific information needed to make one safe change today.

Training gives a model broad learned capability. It may recognise common patterns in programming, databases, user interfaces, security, and many other subjects. But it does not automatically know how one company's application works, which customer depends on an old behaviour, or what changed in the code yesterday.

The **context window** is the model's temporary working area during a request. It may contain the user's prompt, earlier messages, system instructions, attached files, source code, test results, screenshots, tool output, and retrieved documents.

A useful analogy is a desk. Training is everything a person has learned over a lifetime; the context window is the material currently spread out in front of them. A skilled engineer can still make the wrong decision if the relevant contract, bug report, database schema, or design note is missing from the desk.

The distinction is:

```text
Training knowledge: general capability learned before the request.
Context window: information available during the request.
Retrieved context: outside information brought into that window.
Project context: facts about this product, codebase, and problem.
```

The model may know how login systems usually work but not how this application authenticates users. It may understand database design but not this project's particular tables and relationships. Training supplies patterns; context supplies the case.

## Same Instruction, Different Context

> **Why it matters:** "Make it faster" is not a request a model can safely solve until someone defines what speed, trade-off, and success mean here.

To a web developer, "Make it faster" might mean reducing page-load time. To a database engineer, it might mean finding records more quickly. To a product manager, it might mean removing steps from a workflow. To a finance team, it might mean closing the monthly accounts sooner.

The words are identical. The correct action changes with the surrounding facts.

Software development is full of instructions like this: fix the search, improve onboarding, reduce errors, support enterprise customers, make it secure, modernise the system. None is self-contained. Each requires the person or AI doing the work to discover what the instruction means here, what constraints apply, and what evidence will show that the work succeeded.

This is why AI-assisted development is not merely telling AI what to code. Supplying and testing the surrounding information becomes part of engineering.

## Retrieval and Memory

> **Why it matters:** The goal is not to give AI every document; it is to retrieve the few trustworthy items that matter now.

A model does not automatically have access to every file in a repository, every conversation with a customer, or every decision made by a company. The surrounding system must select useful information and place it in the context window.

For a coding task, that system might search source files, recent commits, design documents, issue descriptions, error logs, tests, API documentation, and prior conversations. **Retrieval** finds relevant material outside the model. **Memory** preserves information so it can be retrieved later.

An assistant that appears to remember a project may therefore be searching files, loading a summary, or consulting an external knowledge base. The memory belongs to the wider system, not necessarily to the model itself. This is useful because project knowledge changes too often to be permanently built into a general model.

More context is not automatically better. A large window can expose more evidence, but it can also contain stale documentation, contradictory rules, or thousands of irrelevant lines that hide one decisive constraint. It also consumes computation, memory, time, and money.

This creates a practical distinction:

```text
Raw context: the maximum amount a model can receive.
Effective context: the relevant information it can actually use.
```

A smaller window supplied by good retrieval can outperform a larger one filled indiscriminately. The objective is not the biggest desk. It is the right material on the desk at the right time.

## Project-Specific Context

An experienced engineer knows more than programming. They know why a module is awkward, which customer depends on an old behaviour, why a migration failed, which test is unreliable, and which undocumented rule matters.

That knowledge may live in code, meetings, incident reports, customer complaints, chat threads, design decisions, or people's heads. Programming expertise therefore has two layers:

```text
general software engineering knowledge
+ project-specific context
```

AI has broad access to the first layer through training. The second belongs to a particular organisation, product, and history. When an AI makes a poor change, the failure may be lack of model capability. But often it is more precise: the AI did not see the business rule, test, product constraint, migration history, or evidence that made this system different.

### Field Note: The Highlight That Already Worked

I once reported that a highlighted Chinese character was not working while I browsed a document in an app. A superficial response would have rewritten the highlighting code. Inspection showed that the highlight already existed. The real defect was navigation: the app did not move to the page containing it, so the learner could not see it.

The diagnosis depended on the actual project. The AI coding agent searched the relevant files, followed the state changes, and compared the intended journey with the implemented one. This is **grounding**: connecting a conclusion to evidence from the situation in which the system is acting.

A strong model with the wrong context can fix the wrong problem. A sound engineering workflow gathers enough evidence to identify the real one.

## From Enterprise Knowledge to Working Context

> **Why it matters:** As general programming knowledge becomes cheaper, preparing accurate project knowledge becomes a larger share of the work.

![Enterprise knowledge becomes working context](<figures/FIG-09-02 Enterprise Knowledge To Context Window.svg>)

A company holds far more knowledge than a model can use at once: source code, policies, customer complaints, incident reports, workflows, decisions, and undocumented rules. The organisation may possess the answer, yet the AI cannot use it until the relevant evidence reaches its working context.

```text
Enterprise knowledge
        ↓
Organisation and permissions
        ↓
Retrieval
        ↓
Relevant evidence
        ↓
Context window
        ↓
Model
        ↓
Answer or action
```

This is why companies invest in searchable code and documents, connected knowledge, tool use, and observations from running systems. The names vary—code indexing, enterprise search, vector databases, knowledge graphs, and production telemetry—but the purpose is the same: make trustworthy situation-specific evidence available when it matters.

The advantage does not come from volume alone. It depends on current information, good search, clear permissions, and **provenance**—a record of where each fact came from. Most organisations need not build their own frontier model. They can obtain general capability while owning and organising the specialised context that describes their business reality.

This suggests a further architectural layer, developed in [[19-enterprise-intelligence-layer|The Enterprise Intelligence Layer]].

## Bad Context Creates Bad Software

> **Why it matters:** A confident answer based on wrong or unauthorised information can be more dangerous than an answer that admits it does not know.

Context can be missing, incomplete, outdated, contradictory, irrelevant, untrusted, or supplied without proper permission. An AI may read documentation that no longer matches the code, combine requirements from two product versions, retrieve a deprecated API, or expose information to someone who should not see it.

Context management is therefore more than loading information. It means supplying the right evidence, from trustworthy sources, under the right permissions, at the right time. It also means checking whether the evidence was sufficient and whether the resulting action behaved as intended.

Context is the bridge between general capability and useful action. Software work always happens inside a particular codebase, organisation, budget, regulation, and history. [[11-communication-becomes-the-interface|Communication Becomes the Interface]] examines the human side of that bridge: how intent and constraints must be expressed when language becomes part of engineering.
