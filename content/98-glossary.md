---
title: "Glossary"
---

This glossary is intentionally practical rather than academic. It defines terms as they are used in this book.

## Abstraction

Abstraction is the process of hiding complexity behind a simpler interface. The complexity does not disappear; it moves downward into a lower layer. In computing, abstraction allows humans to accomplish more without understanding every technical detail beneath the surface.

## Acceptance Criteria

Acceptance criteria are specific conditions used to decide whether a feature is finished and acceptable. For a school attendance tool, they might state that an alert must be sent after four absences, must identify the correct student, and must not count weekends.

## Agent

An agent is an AI system that does more than answer a question. It can use tools, follow multi-step instructions, inspect information, make intermediate decisions, and sometimes act on external systems. Agents require stronger boundaries, permissions, monitoring, and verification than ordinary chatbots.

## Agentic AI

Agentic AI describes AI systems that can pursue an objective through a sequence of decisions and actions. While building an app, the AI coding agent displayed agentic behaviour when it inspected the project, changed code, ran a build, interpreted a failure, revised the change, and checked again.

## Agentic Loop

An agentic loop is the repeated cycle through which an agent understands a task, chooses an action, uses a tool, observes the result, and decides what to do next. It differs from a single AI response because evidence from one action influences the next.

## AI Adoption

AI adoption is the process of making an AI capability part of normal work. It includes choosing a useful problem, preparing information, designing the workflow, training people, setting boundaries, measuring results, and maintaining the system. A successful demonstration is not yet adoption.

## AI Accelerator and Tensor Processing Unit (TPU)

An AI accelerator is a processor designed especially for the mathematical operations used by AI. A Tensor Processing Unit, or TPU, is Google's name for its family of AI accelerators. GPUs can also accelerate AI, but they began as more general processors for graphics and parallel calculation. The different names matter less than the common purpose: perform large amounts of AI mathematics quickly and efficiently.

## AI Model

An AI model is a mathematical representation of patterns learned from data. It is not a database, search engine, encyclopedia, or collection of hand-written rules. During training, the model's internal parameters are adjusted so that it can later produce useful responses during inference.

## AI System

An AI system is the complete arrangement that makes a model useful in the real world: the model plus its context, retrieval, tools, permissions, tests, records, user interface, and people who supervise it. A powerful model alone is not the same thing as a dependable system.

## Algorithm

An algorithm is a step-by-step method for solving a problem or completing a task. A recipe is an everyday example. In software, an algorithm might sort names, find the shortest route, or calculate an average.

## Application Programming Interface (API)

An application programming interface is an agreed way for one piece of software to request information or an action from another. A weather application, for example, may use an API to ask a weather service for today's forecast.

## Architecture

Architecture is the high-level structure of a software system: its components, boundaries, data flows, responsibilities, integrations, trade-offs, and constraints. As AI makes code easier to generate, architecture becomes more important because someone still has to decide how the system should fit together.

## Attention

Attention is a mechanism that helps an AI model determine which parts of its input are most relevant to one another. In the sentence “The student put the book into her bag because she needed it later,” attention helps the model connect “it” with “the book.” The Transformer architecture uses attention extensively to learn relationships across language, code, images, and other information.

## Audit Trail and Auditability

An audit trail is a time-ordered record of what happened: who acted, what information was used, what changed, and who approved it. Auditability is the ability to use those records to reconstruct and check an event. These are important when software affects money, health, safety, or legal obligations.

## Backend

The backend is the part of an application that runs behind the visible screen. It commonly handles business rules, databases, accounts, permissions, and communication with other systems. The user-facing part is often called the frontend.

## Batch Job

A batch job processes a collection of work automatically, often at a scheduled time. A bank might run a batch job overnight to calculate interest for millions of accounts.

## Benchmark

A benchmark is a standard task or test used to compare performance. An AI benchmark may compare how accurately different models answer the same set of questions. A high benchmark score does not guarantee good performance in every real situation.

## Bias

Bias is a systematic tendency that favours some answers, assumptions, groups, or outcomes over others. AI bias can arise from training data, design choices, evaluation methods, or the way a system is used.

## Boilerplate

Boilerplate is standard supporting code or text that many projects need but that contains little of the project's distinctive idea. Tools and frameworks often generate it automatically.

## Build

A build is the process of turning source code and other project files into software that can run. Developers also use _build_ as a noun for the resulting version. A successful build proves that the tools could assemble the software; it does not prove that the software behaves correctly.

## Business Rule

A business rule states how an organisation has decided a process should work. Examples include who qualifies for a discount, when a payment is considered late, and which employee may approve a refund. Many important business rules are embedded in software.

## Capital Investment and Capital Expenditure

Capital investment is money spent now to create or improve an asset expected to provide value over several years. Capital expenditure is the accounting term for much of this spending. Building a data centre or training a frontier AI model can require large capital investment.

## Chiplet

A chiplet is one smaller component of a processor package. Instead of manufacturing every function as one enormous chip, designers can combine several specialised chiplets closely together. This can improve manufacturing economics and allow processors, memory, and communications components to be designed for different purposes.

## Cloud Computing

Cloud computing lets people rent computing power, storage, databases, or software over a network instead of buying and maintaining every machine themselves. The rented computers still exist physically; they usually operate in the provider's data centres.

## COBOL, CICS, IMS, and DB2

COBOL is an older programming language still used in many banks, governments, insurers, and other large organisations. CICS is software that helps mainframes process transactions. IMS and DB2 are long-established IBM systems for organising and retrieving data. Readers do not need to remember the names; they illustrate how current services may still depend on technology created decades ago.

## Codebase and Repository

A codebase is the complete body of source code for a software project. A repository stores the project's files together with a history of changes, usually through a version-control system such as Git. In everyday development, people sometimes use the terms almost interchangeably.

## Codex

Codex should not be understood as only one AI model. In this book, it means a coding-agent system built around trained AI models, project context, tools, permissions, and a supervised loop of action and feedback. The model supplies general programming knowledge. The project files, instructions, build results, tests, and screenshots supply current context. Editing tools, terminal commands, Git, and verification steps allow the system to act inside a software project.

Codex is the AI coding agent used as the recurring concrete example in this book. The “genie in the bottle” is only an analogy for the experience of turning an idea into software through conversation; it is not the name or technical description of Codex. Codex represents a broader class of tools that can move beyond answering questions and begin operating inside a development environment: reading files, editing code, running commands, inspecting errors, using tools, requesting approvals, and helping verify changes. The book is not a Codex product guide; Codex is the lived example through which the larger shift becomes visible.

## Compiler and Interpreter

A compiler translates source code into a form a computer can run, often before the program starts. It understands both a source language, such as C++ or Swift, and a target platform, such as x86-64 or ARM64. An interpreter commonly reads and executes instructions while the program runs. Both bridge the gap between a programming language and machine operations.

## Compliance

Compliance means following the laws, regulations, standards, contracts, and internal rules that apply to an organisation or system. Compliance work often requires evidence showing what controls exist and whether people followed them.

## Configuration

Configuration is the collection of settings that controls how software behaves without necessarily changing its main code. Examples include a selected AI model, a server address, a feature switch, or a permission rule.

## Context

Context is information that helps an AI system interpret a task. The word has several meanings in the book:

- User context: what the user has said or supplied.
- Context window: what the model can consider during one reasoning session.
- Enterprise context: the broader organisational knowledge that may be retrieved and supplied to the model.

These meanings are related but not identical.

## Context Window

The context window is the amount of information a model can consider at one time during inference. It is like working memory. A larger context window can help the model consider more documents, code, or conversation, but relevance matters as much as size.

## Data Centre

A data centre is a building or site filled with networked computers, storage equipment, power systems, cooling, and security. Cloud services and large AI models often run in data centres.

## Data Drift

Data drift is a change in the patterns of real-world information after an AI system has been tested or deployed. For example, customer behaviour may change after a new product launch. A system that once worked well can then become less reliable, so its results need monitoring and sometimes updating.

## Data Model

A data model describes the kinds of information a system stores and how they relate. In a school system, it might describe students, teachers, classes, and the connections among them.

## Data Provenance

Data provenance is a record of where information came from, when it was collected or changed, and how it was processed. It helps people judge whether information is current, authorised, and suitable for an AI-assisted decision.

## Database

A database stores organised information so software can find, add, change, and remove it efficiently. A school database might contain student records, classes, attendance, and results. The database is the stored information system; an AI model is a learned pattern system, so the two are not interchangeable.

## Deployment and Production

Deployment is the process of releasing software into an environment where it can be used. Production is the live environment in which real users and real data depend on the software. A feature can work on a developer's computer yet still fail after deployment to production.

## Decompiler

A decompiler is a tool that tries to turn machine code or another compiled form back into more readable code. It can help people understand old software, but it usually cannot recover the exact original source code because compilation may have removed names, comments, formatting, and higher-level structure.

## Deterministic Software

Deterministic software follows explicit rules so that the same input under the same conditions should produce the same result. A calculator is mostly deterministic. AI models are probabilistic, although real applications often combine both kinds of system.

## Domain and Domain Expert

A domain is the real-world subject in which software is used, such as education, banking, medicine, logistics, or law. A domain expert understands that subject deeply even if they are not a programmer. Domain knowledge helps determine whether software solves the right problem.

## Edge Case

An edge case is an unusual or extreme situation that software must still handle correctly. An attendance system may work for most students but fail when a student changes school in the middle of a week. Such cases often reveal hidden assumptions.

## Effective Context

Effective context is the useful information actually available to the model for solving a task. It depends not only on context-window size, but also on retrieval quality, summarisation, organisation, permissions, and whether the right information is supplied at the right time.

## Embedding

An embedding is a numerical representation of a piece of information, such as a word, code fragment, image patch, sound segment, or machine instruction. Related pieces of information can have related embeddings, which helps a model connect different forms of evidence.

## Enterprise Context

Enterprise context is the knowledge an organisation possesses: code, documents, policies, systems, customers, regulations, decisions, meetings, incidents, workflows, and business rules. It is much larger than any one context window.

## Enterprise Intelligence Layer

The Enterprise Intelligence Layer is the shared architecture that connects AI models to enterprise knowledge, retrieval systems, permissions, workflows, validation, audit trails, and applications. It allows general AI capability to become useful inside a specific organisation.

## Enterprise Resource Planning (ERP) System

An enterprise resource planning system is shared business software that connects major organisational activities such as finance, purchasing, inventory, manufacturing, sales, projects, and human resources. Instead of each department keeping unrelated records, an ERP system gives them common processes and data. SAP is a well-known supplier of ERP software.

## Evaluation and Evaluation Suite

Evaluation measures how well an AI system performs across a collection of examples. An evaluation suite is the organised set of test cases, expected qualities, scoring rules, and sometimes human judgements used for that measurement. Evaluation shows general performance; verification asks whether a particular result or system is dependable for its intended use.

## Executable

An executable is a program file that a computer can run, such as an `.exe` file on Windows. It usually contains machine code and supporting resources rather than the original human-readable source code.

## Generalisation and Overfitting

Generalisation is an AI system's ability to work well on new cases it has not seen before. Overfitting is the opposite problem: the system matches its training or test examples so closely that it performs poorly in real situations. A model that looks good in a demonstration may still be overfitted.

## Generative AI

Generative AI produces a new output rather than merely selecting a label from a fixed list. It can continue a sentence, draft a report, translate a passage, generate code, describe an image, or create other material from patterns learned during training. A generated output can be useful without being automatically correct, which is why context and verification still matter.

## Human-Centred Design

Human-centred design means designing a system around the needs, knowledge, time pressure, ability to correct errors, and rights of the people who use it or are affected by it. In AI, this includes showing useful evidence, making uncertainty visible, and providing a clear route for human correction or appeal.

## Explainability

Explainability is the practical ability to provide understandable reasons, evidence, sources, assumptions, or limitations for a result. It does not necessarily mean exposing every internal calculation of an AI model.

## Floating-Point Precision and FP4

Floating-point precision describes how many binary digits a computer uses to represent a number and therefore how much detail that number can retain. FP4 uses only four bits per number. Shorter numbers need less memory and can be moved and calculated more cheaply, but may lose accuracy. AI engineers therefore choose precision according to the task instead of assuming that more detail is always worth its cost.

## Foundation Model

A foundation model is a large general-purpose AI model trained on broad data and adaptable to many tasks. Examples include major language and multimodal models. Enterprises may use foundation models as rented general capability while connecting them to proprietary knowledge.

## Framework and Library

A library is reusable code that a program calls for a particular capability. A framework supplies a larger structure within which developers build an application. Both reduce the need to create common mechanisms from the beginning.

## Governance

Governance is the system of authority and oversight that decides who may use a technology, for what purpose, with which data, under which rules, and with whose approval. Good governance connects capability to responsibility.

## Graphics Processing Unit (GPU)

A graphics processing unit is a chip designed to perform many calculations in parallel. It was originally associated mainly with computer graphics, but the same ability makes GPUs useful for training and running AI models.

## Grounding

Grounding means connecting an AI response to relevant evidence rather than relying only on what the model learned during training. When the AI coding agent inspects the application's actual source files before proposing a change, those files ground its conclusion.

## Guardrail

A guardrail is a rule or technical control that limits an AI system's actions or checks its outputs. Permissions, approval requirements, protected databases, validation rules, sandboxes, and human review can all serve as guardrails.

## Hallucination

A hallucination is an AI output that appears plausible but is wrong, unsupported, fabricated, or misleading. Hallucination happens partly because generative models predict likely responses rather than retrieve guaranteed truth.

## High Bandwidth Memory (HBM)

High Bandwidth Memory is memory designed to move very large quantities of data to and from a processor quickly. Its memory chips are stacked vertically and placed close to an AI processor. A useful analogy is a large pantry built immediately beside a busy kitchen, with many wide doors so ingredients can reach the cooks without delay.

## HTTP and REST API

HTTP is the basic set of rules used to exchange information on the web. A REST API is a common style of web API in which software requests or changes named resources using standard web operations. The detail matters less than the function: it gives separate systems a predictable way to communicate.

## Human In The Loop

Human in the loop means that a person remains part of an AI-assisted decision or action. In a feature that finds useful phrases in photographed Chinese text, AI proposes candidates, conventional software filters them, and the learner decides which phrases should be saved.

## Hybrid AI Architecture

A hybrid AI architecture combines different methods instead of depending on one technique for every job. A future system might use attention for relationships within the current material, a state-space method for efficient sequence processing, persistent memory for long projects, specialised models for particular tasks, and conventional software for exact checks.

## Inference

Inference is the process of using a trained model to produce an output. When a user asks a question and the model answers, that is inference. Training creates the model; inference uses it.

## Intermediate Representation (IR)

An intermediate representation is a form used inside compiler and analysis tools between source code and final machine code. It describes program behaviour in a way that is less tied to one programming language or one processor. In legacy reconstruction, IR can help AI reason about what code does without learning every hardware instruction pattern directly.

## Just-in-Time Capability

Just-in-time capability means obtaining and applying the technical knowledge needed for a task while doing the task, instead of mastering every tool in advance. In AI-assisted work, a model, framework, documentation, and testing tools can supply explanations, suggestions, working examples, and checks at the point of need. It does not remove the human responsibility to set the goal, grant permission, judge the risk, and accept the result.

## Key Performance Indicator (KPI)

A key performance indicator is a small, agreed measure used to tell whether an effort is achieving its intended outcome. For an AI support assistant, useful KPIs might include response time, customer satisfaction, the rate of incorrect answers, and the number of cases escalated to a person. A KPI should measure the real result, not merely how often the model was used.

## Latency

Latency is waiting time. In an AI system, it commonly means the delay between sending a request and receiving a usable response.

## Legacy System

A legacy system is older software or hardware that an organisation still depends on. It may remain reliable and valuable, but can be difficult to understand, change, secure, or connect to newer systems.

## Mainframe

A mainframe is a large computer designed for highly reliable processing of enormous numbers of important transactions. Banks, governments, airlines, and insurers still use mainframes for core work.

## Migration

Migration is the process of moving data, software, or work from one system to another. A gradual migration replaces or connects one controlled part at a time; a “big bang” migration attempts the change all at once.

## Model Parameters

Parameters are the internal adjustable numbers of an AI model. During training, these numbers are changed so that the model captures statistical relationships in the training data. A useful analogy is a vast machine with billions or trillions of tiny dials.

## Multimodal Model

A multimodal model can work with more than one kind of information, such as text, images, audio, video, diagrams, or code. Multimodality matters because real software development involves more than source code.

## Natural Language Programming

Natural language programming is the use of ordinary language to specify behaviour that AI helps turn into software or software-like actions. It does not make precision unnecessary. It makes communication, requirements, and verification more important.

## Neural Network

A neural network is a mathematical system that learns patterns from examples. Training adjusts its numerical settings; afterwards, the trained neural network is commonly called an AI model. It consists of layers of mathematical operations that repeatedly transform numerical representations. In this book, the important point is the shift from hand-written rules to learned relationships.

## Observability

Observability is the ability to reconstruct what an agent did and what happened: which information it inspected, which tools it used, which actions it attempted, and where it failed. Observability makes supervision, diagnosis, auditing, and improvement possible.

## Open-Source Software

Open-source software makes its source code available under a licence that permits people to inspect, use, modify, and often redistribute it. Open source allows communities and companies to build on shared work instead of creating every component alone.

## Operating Cost

An operating cost is a recurring expense created while running a service or organisation. AI inference, electricity, cloud services, support, and monitoring can all be operating costs. This differs from upfront capital investment used to create a long-lived asset.

## Orchestration

Orchestration is the coordination of models, tools, workflows, and sometimes multiple agents. An orchestrator decides which participant should do what, in which order, with what information, and under which limits.

## Probabilistic AI

Probabilistic AI produces outputs based on learned likelihoods rather than fixed deterministic rules. This makes it flexible and powerful, but also means its outputs must be checked when correctness matters.

## Prompt

A prompt is an instruction, question, specification, or piece of context given to an AI model. In serious software work, prompts often become closer to requirements documents than casual commands.

## Prompt Engineering

Prompt engineering is the practice of designing and testing instructions for AI systems. For ordinary users it is often disciplined communication. In production software it may also involve reusable templates, retrieved information, fixed output fields, safety rules, evaluations, and version tracking.

## Post-Training

Post-training is the work done after a broad foundation model has learned general patterns from large datasets. It uses examples, feedback, evaluations, and sometimes reinforcement learning to make the model more useful as an assistant: for example, better at following instructions, reasoning, coding, using tools, or observing safety rules. It changes behaviour; it does not make a model infallible.

## Pre-Training

Pre-training is the large initial learning stage in which a model absorbs broad statistical patterns from material such as text, code, images, audio, or video. A simple description is that it repeatedly learns to predict missing or next pieces. Pre-training creates general capability; post-training shapes how that capability is used in an assistant or agent.

## Prototype

A prototype is an early version built to explore or demonstrate an idea. It can reveal whether the idea is useful, but it usually lacks some of the reliability, security, testing, performance, and polish required for production use.

## Provenance

Provenance is a record of where information came from and how it changed. In an AI system, provenance can show which source documents supported an answer, making the result easier to check.

## Reasoning and Reasoning Effort

In this book, reasoning means the work of connecting a goal to a conclusion or action through intermediate relationships, decisions, and checks. Reasoning effort is a setting available in some AI systems that gives the model relatively more or less opportunity to perform that work before answering. Higher effort may improve difficult analysis, planning, coding, and tool use, but it can also increase waiting time and computing cost. It does not guarantee correctness or replace verification and human judgement.

## Recurrent Neural Network

A recurrent neural network is a neural-network design often used for sequences before Transformers became dominant. It commonly processes information step by step while carrying a numerical summary of earlier steps forward. This makes sequence order natural, but it can make training slower and distant relationships harder to preserve.

## Refactoring

Refactoring improves the internal structure of existing code without intentionally changing what users can do. It may make the code easier to understand, test, maintain, or extend.

## Regression Testing

Regression testing reruns earlier tests after a change to check that behaviour which worked before has not been broken. It matters especially when changing a model, prompt, dependency, or shared component.

## Requirements Engineering

Requirements engineering is the discipline of deciding what a system should do, what constraints it must satisfy, how success will be judged, and what edge cases must be handled. AI makes requirements more important because generation becomes cheaper while judging correctness remains difficult.

## Retrieval

Retrieval is the process of finding relevant information and supplying it to an AI system. Good retrieval turns scattered knowledge into useful context. Poor retrieval can make even a strong model produce weak answers.

## Retrieval-Augmented Generation (RAG)

Retrieval-augmented generation supplies a model with information retrieved for the current task before it generates a response. The model remains general, but retrieved documents or records make its answer specific to a project, person, or organisation.

## Return on Investment (ROI)

Return on investment compares the value gained from an investment with what it cost. If a system costs \$100,000 and creates \$150,000 of measurable benefit, the gross gain is \$50,000 before considering other effects. Forecast ROI is an estimate, not proof that the return will occur.

## Rollback

A rollback restores software, data, or settings to an earlier known state after a change causes trouble. The ability to roll back reduces the risk of deployment and agent actions.

## Runtime

Runtime means the period when a program is actually executing. It can also refer to the supporting software that helps a program execute. A runtime error occurs while the program is running, unlike a compiler error found before execution.

## Sandbox

A sandbox is an isolated environment that limits what software or an AI agent can reach or change. It allows experimentation while protecting files, systems, or networks outside the boundary.

## Schema

A schema describes the required shape of data: which fields exist, what kind of value each field may contain, and how pieces relate. It turns “return something useful” into a more precise contract.

## Security Terms for AI

**Prompt injection** is a malicious instruction designed to redirect an AI system. **Data leakage** is the unintended exposure of private information. **Excessive permissions** give a person or agent more access than needed. **Least privilege** means giving an agent only the access required for its current task. **Model poisoning** attempts to corrupt training or reference material so that the model behaves improperly. Good security also includes the ability to detect unusual behaviour, respond by stopping or limiting the system, and recover from an incident.

## Semantic Reconstruction

Semantic reconstruction is the attempt to understand what an old system does well enough to describe its business meaning and build an equivalent modern system. It differs from recovering exact original source code, which may be impossible when names, comments, formatting, and abstractions were lost during compilation.

## Software Verification

Software verification is the process of checking whether software behaves correctly. In AI-assisted development, verification includes tests, validation, structured outputs, human review, monitoring, and safeguards around model behaviour.

## Source Code and Machine Code

Source code is the human-readable form of a program written in a language such as Python or Swift. Machine code is the lower-level numerical instruction form executed by a computer's processor. Compilers and interpreters help bridge the two levels.

## Stakeholder

A stakeholder is a person or group affected by a project or able to influence it. Users, customers, employees, managers, regulators, and owners can all be stakeholders with different needs.

## Startup

A startup is a young organisation trying to discover and grow a repeatable business model, often under significant uncertainty. Not every new or small business is a startup in this sense.

## State-Space Model

A state-space model processes a sequence while carrying forward a changing internal summary, or “state,” of what it has encountered. Unlike standard attention, it does not need to compare every item directly with every other item. This can make long sequences more efficient, although the best current systems may combine state-space methods with attention rather than choosing only one.

## Static Analysis

Static analysis checks source code for likely defects, security problems, or rule violations without running the program. A linter is a common static-analysis tool that checks code quality and style.

## Structured Query Language (SQL)

Structured Query Language is a language used to read and change information in many databases. A SQL query might ask for all orders placed today or update the delivery status of one order.

## Syntax

Syntax is the set of writing rules that determines which arrangements of symbols are valid in a language. Programming-language syntax is similar to grammar: code with invalid syntax cannot be interpreted correctly by the language tools.

## System Integration

System integration is the work of making different software systems communicate and operate together. It is especially important in enterprises with legacy systems, databases, packaged applications, APIs, and custom software built over many decades.

## Technical Debt

Technical debt is the future cost created when software takes shortcuts, accumulates duplication, or becomes difficult to understand and change. Like financial debt, it may speed progress today while creating continuing costs later.

## Testing Terms

A **unit test** checks one small piece of software. An **integration test** checks whether pieces work together. An **acceptance test** checks whether the finished behaviour meets the user's agreed needs. A **characterisation test** records what an existing system currently does, especially when its original rules are unclear. A **visual regression test** compares images of an interface to detect unintended changes.

## Throughput

Throughput is the amount of work completed in a given time. Enterprise throughput might include orders processed, customer cases resolved, or software changes safely released each week.

## Token

A token is a piece of information processed by an AI model. In text, a token may be a word, part of a word, punctuation mark, number, or code fragment. In multimodal systems, images, audio, and video may be broken into different kinds of processable units. Tokens matter because context windows, inference cost, latency, and model behaviour are all affected by how much information the model must process.

## Tokenizer

A tokenizer is the system that breaks input into tokens before the model processes it. Different tokenizers may split the same text or code differently. The important point is that the model does not receive human meaning directly; it receives numerical representations of tokens.

## Tool Use

Tool use occurs when an AI system calls an external capability to obtain information or affect a system. Reading a file, searching a project, building an application, querying a database, or using an authorised connector are examples. The model chooses or requests the action; the surrounding agentic system executes it.

## Training

Training is the process by which an AI model learns patterns from data. It requires large amounts of computation and adjusts the model's parameters. Training is usually a capital-intensive process; inference is the ongoing cost of using the trained model.

## Transformer

A Transformer is a neural-network architecture introduced in the 2017 paper _Attention Is All You Need_. It uses attention to learn which parts of an input relate to one another and can process many parts in parallel during training. Transformers did not invent generative AI, but they made it practical to build much larger and more capable language models and became a foundation of the current AI revolution.

## Trust

Trust is the degree to which people and organisations are willing to rely on AI in real workflows. Trust is not created by intelligence alone. It depends on reliability, security, governance, auditability, explainability, verification, and human accountability.

## User Interface (UI)

The user interface is what a person sees, touches, types into, or otherwise uses to control software. Screens, buttons, menus, labels, forms, and gestures are all parts of the UI.

## Vector and Vector Database

A vector is an ordered list of numbers used to represent features or relationships mathematically. A vector database stores these representations so a system can find items with similar meaning or characteristics, even when they do not contain the same words.

## Version Control

Version control records changes to files over time. It lets people compare versions, work on separate changes, combine work, and return to an earlier state. Git is a widely used version-control system.

## Workflow

A workflow is the sequence of steps through which work moves from beginning to completion. Processing an insurance claim, approving a purchase, or reviewing and releasing a software change are all workflows.
