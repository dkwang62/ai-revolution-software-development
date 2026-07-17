---
title: "Agents, Tools, and Integrated Systems"
---

# Agents, Tools, and Integrated Systems

So far, we have mostly discussed AI as a system that responds to prompts.

A user asks for help. The model generates an answer. The human evaluates it.

But software is moving toward something more active. AI systems increasingly use tools, inspect files, call APIs, run tests, search documents, modify code, and take multi-step actions. These systems are often called agents.

The word "agent" is used loosely, so it needs caution. Not every chatbot is an agent. Not every workflow with an AI call is an agent. For this book, the important idea is that agentic systems combine models, context, tools, memory, goals, feedback, and repeated inference to act across software.

AI Agents Tool Use and Reliability now tracks research support for this chapter. Current agent frameworks from OpenAI, Google, Microsoft, Anthropic, and LangChain all point in the same direction: agents are not merely better prompts. They are engineered systems involving tool loops, state, handoffs, guardrails, tracing, permissions, evaluation, deployment, and integration.

That makes them powerful.

It also makes them risky.

## From Answers to Actions

A basic AI assistant answers a question.

An AI workflow may perform a defined task, such as extracting fields from an invoice or classifying customer messages.

An AI agent goes further. It may pursue a goal through multiple steps:

```text
Goal
↓
Inspect context
↓
Choose action
↓
Use tool
↓
Observe result
↓
Plan next step
↓
Continue or stop
```

In software development, this might mean reading a bug report, searching a codebase, opening relevant files, proposing a fix, editing code, running tests, interpreting failures, revising the change, and summarising the result.

This begins to resemble work.

## Tools Change the Meaning of AI

A model without tools can generate text.

A model with tools can affect systems.

It can query a database, run a compiler, call an API, send an email, modify a file, create a ticket, update a record, or trigger a workflow. Tool use turns language into action.

Anthropic's tool-use documentation makes this boundary clear: the model selects a structured tool call, and the surrounding application or server-side environment executes it. OpenAI's Agents SDK similarly treats repeated tool calls, branching, handoffs, tracing, guardrails, and approval pauses as parts of agent engineering. The Model Context Protocol pushes the same idea into system integration by standardising how AI applications connect to external data sources, tools, and workflows. See AI Agents Tool Use and Reliability.

This is where [[15-legacy-problem|System Integration]] becomes central. An AI agent is valuable only if it connects to real systems. But every connection creates risk. What data can it access? What actions can it take? Which permissions apply? What happens if it misunderstands? How are actions logged? Can a human review before execution? Can the system roll back mistakes?

The more capable the agent, the more important the boundaries.

## Context and Memory

Agents depend on context.

They need to know the goal, the available tools, the current state, previous steps, constraints, user preferences, relevant documents, and system rules. The [[10-context-what-the-model-knows-right-now|context window]] becomes working memory.

For simple tasks, context may be small. For complex engineering work, context may include many files, test results, design notes, issue history, logs, and previous decisions. If the agent lacks context, it may act confidently on incomplete information. If it has too much context, it may focus on the wrong details.

Longer context helps, but it does not solve everything. Agents also need retrieval, summarisation, state tracking, and explicit task structure.

## Verification in Agentic Systems

Agentic errors can compound.

A wrong answer is one mistake. A wrong action can create new state. A wrong action followed by another wrong action can create a chain of failure.

Therefore agents require stronger verification than simple chat systems.

Useful safeguards include:

- Tool permissions.
- Read-only modes.
- Human approval before irreversible actions.
- Sandboxed execution.
- Test suites.
- Action logs.
- Rate limits.
- Rollback mechanisms.
- Confidence thresholds.
- Validation after each step.

These safeguards are not theoretical. OWASP identifies prompt injection, insecure output handling, and excessive agency as major LLM-application risks, and its agentic-application work names agent-specific risks such as tool misuse, identity and privilege abuse, memory and context poisoning, cascading failures, and rogue agents. The Cloud Security Alliance's MAESTRO framework similarly treats agentic AI as requiring layered threat modelling across the agent lifecycle. See AI Agents Tool Use and Reliability.

The principle from the previous chapter still applies:

> AI suggests; deterministic software decides.

For agents, we might extend it:

> AI plans and proposes; tools execute within controlled boundaries.

## Agents in Software Development

Software development is a natural environment for agents because the work is already tool-heavy.

Developers inspect files, run commands, search code, execute tests, use version control, read documentation, update tickets, and deploy systems. An AI agent can assist because many steps are digital and observable.

A coding agent may:

- Read a task description.
- Search the repository.
- Identify relevant files.
- Make a small change.
- Run tests.
- Interpret failures.
- Revise the change.
- Produce a summary.

This can reduce developer effort, especially for well-bounded tasks. But it also raises new questions. Did the agent understand the architecture? Did it modify unrelated behaviour? Did it overfit to tests? Did it ignore security? Did it break a workflow not covered by tests? Did it create code the team can maintain?

Agents make verification and review more important, not less.

## Agents and Legacy Systems

Agents may also matter for legacy modernisation.

Imagine an AI system that can inspect old code, search documentation, map dependencies, generate tests, propose wrappers, compare outputs between old and new systems, and maintain migration notes. This would not replace engineers, but it could reduce the cost of understanding complex systems.

The same risks apply. Legacy systems often support critical operations. An agent must not make uncontrolled changes. It should operate inside strict permissions, with human review, audit logs, and test environments.

The economic value is large because legacy understanding is expensive.

## Agents as Economic Multipliers

A model answers one question at a time. An agent can coordinate many model calls, tools, and checks toward a goal.

That makes agents potential economic multipliers. They can reduce the cost of workflows, not just individual tasks.

But the cost also multiplies. Agents consume repeated inference. They require tool integration. They need monitoring. They create security and permission challenges. They may fail in complex ways. They require evaluation not only of outputs, but of sequences of actions.

The economic question is:

> Does the agent reduce enough human effort, delay, and error to justify the cost and risk of giving AI more agency?

For some tasks, yes. For others, a simple assistant or deterministic workflow will be safer and cheaper.

## Five Years

In a five-year scenario, agents become common in bounded software workflows.

They help with code search, test generation, bug fixing, documentation, migration scripts, data cleanup, support triage, and internal operations. The most successful agents are likely to be constrained: clear goals, limited tools, strong permissions, test environments, and human approval for risky actions.

## Ten Years

In a ten-year scenario, agents may coordinate larger workflows across enterprise systems.

They may monitor processes, propose improvements, maintain documentation, detect anomalies, assist migrations, and orchestrate specialised tools. They may become a layer above existing software, translating human goals into sequences of controlled actions.

This depends on major progress in reliability, context management, security, evaluation, and organisational trust.

## The Engineering Lesson

Agents make AI feel more like a worker than a tool.

That feeling can be misleading. An agent is still a system. It needs architecture, constraints, permissions, tests, monitoring, and accountability.

The more agency we give AI, the more engineering discipline we need around it.

This completes the movement of Part IV. AI changes software engineering by making communication more important, precision more difficult, legacy understanding more valuable, and integration more central.

The final part of the book can now ask what happens if these changes continue.

What becomes scarce when software becomes cheaper?

What happens to programmers?

What might the next five and ten years look like?

## What We Know

Agents combine models, context, tools, goals, feedback, and repeated inference.

Tool use turns AI output into action, which increases both value and risk.

Agents require permissions, validation, logging, testing, rollback, and human oversight for high-impact actions.

Software development is a natural domain for agents because many tasks are digital and tool-based.

## What We Infer

Agents will be economically valuable where they reduce workflow cost, not merely where they produce impressive demonstrations.

Bounded agents with clear permissions and verification are likely to be more useful than unconstrained autonomous systems in serious software environments.

Agents will make system integration and software verification even more important.

## What We Do Not Yet Know

We do not yet know which agent architectures will become standard.

We do not yet know how much autonomy organisations will safely grant AI systems.

We do not yet know how agent reliability will scale across long, complex workflows.
