---
title: "Glossary"
---

# Glossary

## Purpose

Define the most important terms in plain English so that intelligent readers without a computer science background can follow the book's argument.

This glossary is intentionally practical rather than academic. It defines terms as they are used in this book.

## Central Question

Which terms must readers understand before the book's central argument becomes clear?

## Key Terms

## Abstraction

Abstraction is the process of hiding complexity behind a simpler interface. The complexity does not disappear; it moves downward into a lower layer. In computing, abstraction allows humans to accomplish more without understanding every technical detail beneath the surface.

## Agent

An agent is an AI system that does more than answer a question. It can use tools, follow multi-step instructions, inspect information, make intermediate decisions, and sometimes act on external systems. Agents require stronger boundaries, permissions, monitoring, and verification than ordinary chatbots.

## AI Model

An AI model is a mathematical representation of patterns learned from data. It is not a database, search engine, encyclopedia, or collection of hand-written rules. During training, the model's internal parameters are adjusted so that it can later produce useful responses during inference.

## Architecture

Architecture is the high-level structure of a software system: its components, boundaries, data flows, responsibilities, integrations, trade-offs, and constraints. As AI makes code easier to generate, architecture becomes more important because someone still has to decide how the system should fit together.

## Codex

Codex is the AI coding agent used in this book as the recurring concrete example of the "genie in the bottle." It represents a broader class of tools that can move beyond answering questions and begin operating inside a development environment: reading files, editing code, running commands, inspecting errors, using tools, requesting approvals, and helping verify changes. The book is not a Codex product guide; Codex is the lived example through which the larger shift becomes visible.

## Context

Context is information that helps an AI system interpret a task. The word has several meanings in the book:

- User context: what the user has said or supplied.
- Context window: what the model can consider during one reasoning session.
- Enterprise context: the broader organisational knowledge that may be retrieved and supplied to the model.

These meanings are related but not identical.

## Context Window

The context window is the amount of information a model can consider at one time during inference. It is like working memory. A larger context window can help the model consider more documents, code, or conversation, but relevance matters as much as size.

## Effective Context

Effective context is the useful information actually available to the model for solving a task. It depends not only on context-window size, but also on retrieval quality, summarisation, organisation, permissions, and whether the right information is supplied at the right time.

## Enterprise Context

Enterprise context is the knowledge an organisation possesses: code, documents, policies, systems, customers, regulations, decisions, meetings, incidents, workflows, and business rules. It is much larger than any one context window.

## Enterprise Intelligence Layer

The Enterprise Intelligence Layer is the shared architecture that connects AI models to enterprise knowledge, retrieval systems, permissions, workflows, validation, audit trails, and applications. It allows general AI capability to become useful inside a specific organisation.

## Foundation Model

A foundation model is a large general-purpose AI model trained on broad data and adaptable to many tasks. Examples include major language and multimodal models. Enterprises may use foundation models as rented general capability while connecting them to proprietary knowledge.

## Hallucination

A hallucination is an AI output that appears plausible but is wrong, unsupported, fabricated, or misleading. Hallucination happens partly because generative models predict likely responses rather than retrieve guaranteed truth.

## Inference

Inference is the process of using a trained model to produce an output. When a user asks a question and the model answers, that is inference. Training creates the model; inference uses it.

## Model Parameters

Parameters are the internal adjustable numbers of an AI model. During training, these numbers are changed so that the model captures statistical relationships in the training data. A useful analogy is a vast machine with billions or trillions of tiny dials.

## Multimodal Model

A multimodal model can work with more than one kind of information, such as text, images, audio, video, diagrams, or code. Multimodality matters because real software development involves more than source code.

## Natural Language Programming

Natural language programming is the use of ordinary language to specify behaviour that AI helps turn into software or software-like actions. It does not make precision unnecessary. It makes communication, requirements, and verification more important.

## Neural Network

A neural network is the machinery used to learn patterns from examples. It consists of layers of mathematical operations that gradually transform input into useful internal representations. In this book, the important point is not the mathematics but the shift from hand-written rules to learned relationships.

## Prompt

A prompt is an instruction, question, specification, or piece of context given to an AI model. In serious software work, prompts often become closer to requirements documents than casual commands.

## Probabilistic AI

Probabilistic AI produces outputs based on learned likelihoods rather than fixed deterministic rules. This makes it flexible and powerful, but also means its outputs must be checked when correctness matters.

## Requirements Engineering

Requirements engineering is the discipline of deciding what a system should do, what constraints it must satisfy, how success will be judged, and what edge cases must be handled. AI makes requirements more important because generation becomes cheaper while judging correctness remains difficult.

## Retrieval

Retrieval is the process of finding relevant information and supplying it to an AI system. Good retrieval turns scattered knowledge into useful context. Poor retrieval can make even a strong model produce weak answers.

## Software Verification

Software verification is the process of checking whether software behaves correctly. In AI-assisted development, verification includes tests, validation, structured outputs, human review, monitoring, and safeguards around model behaviour.

## System Integration

System integration is the work of making different software systems communicate and operate together. It is especially important in enterprises with legacy systems, databases, packaged applications, APIs, and custom software built over many decades.

## Token

A token is a piece of information processed by an AI model. In text, a token may be a word, part of a word, punctuation mark, number, or code fragment. In multimodal systems, images, audio, and video may be broken into different kinds of processable units. Tokens matter because context windows, inference cost, latency, and model behaviour are all affected by how much information the model must process.

## Tokenizer

A tokenizer is the system that breaks input into tokens before the model processes it. Different tokenizers may split the same text or code differently. The important point is that the model does not receive human meaning directly; it receives numerical representations of tokens.

## Training

Training is the process by which an AI model learns patterns from data. It requires large amounts of computation and adjusts the model's parameters. Training is usually a capital-intensive process; inference is the ongoing cost of using the trained model.

## Trust

Trust is the degree to which people and organisations are willing to rely on AI in real workflows. Trust is not created by intelligence alone. It depends on reliability, security, governance, auditability, explainability, verification, and human accountability.

## Related Notes

- [[TERMINOLOGY]]
- [[Three Meanings of Context]]
- [[What Is an AI Model]]
- [[Neural Networks]]
- [[Tokens]]
- [[Training]]
- [[Inference]]
- [[The Economics of Trust]]
- [[CODEX_AS_THE_GENIE]]

## Future Work

- Add page references after the manuscript stabilises.
- Decide whether glossary entries should include short examples.
- Align this glossary with [[TERMINOLOGY]] before publication.
