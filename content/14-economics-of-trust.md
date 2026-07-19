---
title: "The Economics of Trust"
---

# The Economics of Trust

AI does not enter serious software systems simply because it becomes more intelligent. It enters when people and organisations become willing to rely on it, and that is a different threshold.

A model can be impressive in a demonstration and still be unusable in production. It may write elegant code, summarise complex documents, answer difficult questions, and reason through business problems, yet still be rejected if the organisation cannot answer a more practical question:

> Can we trust this system enough to use it where mistakes are expensive?

Trust, in this sense, is not sentiment, optimism, or faith in a model's intelligence. It is an engineering and economic condition. A system becomes trustworthy when its behaviour is bounded, monitored, verified, governed, audited, and understood well enough that people are willing to depend on it.

Capability creates possibility. Trust creates adoption.

## Intelligence Is Not Enough

Many discussions about AI focus on intelligence: how well the model reasons, how much code it writes, how large its context window is, or how many benchmarks it beats. Those questions matter, but they are not enough.

In low-risk settings, raw usefulness may be sufficient. If AI helps draft an email, summarise an article, brainstorm product names, or explain a programming concept, the cost of error is usually low. The user can read the answer, reject it, edit it, or try again.

Enterprise software is different. If AI modifies production code, recommends a medical treatment, approves a loan, files a regulatory report, changes a factory-control system, interprets a legal contract, or moves money, the cost of error can be enormous. The question changes from whether AI can produce an answer to whether it can produce an answer that is safe enough, correct enough, explainable enough, and governed enough for the situation.

That is why trust belongs in the economics of AI. An untrusted model can be clever and still have little production value. A trusted system, even with narrower capability, can become part of real work.

## Trust as an Economic Boundary

Every organisation lives with risk. Banks accept credit risk, hospitals accept operational risk, airlines accept scheduling risk, and software companies accept defect risk. The issue is never whether risk exists. The issue is whether the expected benefit of an action exceeds its expected cost, including the cost of failure.

AI adoption follows the same logic. For any workflow, an organisation is implicitly asking:

```text
Expected benefit
>
Cost of implementation
+ cost of verification
+ cost of governance
+ expected cost of failure
```

If the answer is yes, adoption becomes economically rational. If the answer is no, the AI remains a demonstration, a pilot, or a personal productivity tool.

This is why trust sits at the boundary between experimental AI and production AI. The more valuable the workflow, the more trust it demands.

## A Radix-Scale Example

The same principle appears even in a small product like Radix.

For the AI-generated quiz feature, I did not need the model to be trusted with everything. I needed it to be trusted within a boundary. It could generate quiz questions from captured Chinese material, choose varied practice styles, explain answers, and adapt the interaction to the learner. But it should not reveal the answer too early, ignore the source material, put pinyin in the wrong place, invent unsupported content, or produce output the app could not handle.

That distinction mattered. I was willing to let AI behave like a flexible teacher inside the quiz interaction. I was not willing to let it silently rewrite the app's data model, bypass the user interface, change stored material, or make irreversible decisions. The surrounding software still handled the interface, storage, model selection, import flow, and user control. The prompt defined the desired behaviour; the app constrained where that behaviour could matter.

This is bounded reliance. AI was useful because it was given room to be flexible, but not unlimited authority. The lesson scales upward. A bank, hospital, airline, or government agency faces more complex risks, but the underlying question is the same: what may AI do, under which constraints, with what checks, and with whose approval?

## Bounded Reliance

The right goal is not blind trust. It is bounded reliance.

An organisation may trust AI to draft a document but not send it, suggest code but not deploy it, classify support tickets but not close high-risk cases, summarise contracts but not approve legal obligations, query internal knowledge but not expose confidential customer records, or recommend a migration plan but not modify a legacy system without review.

This is how serious software has always worked. Systems earn trust when their authority is bounded, their permissions are clear, their failures are detectable, and humans know where responsibility lies. AI does not abolish that discipline. It makes it more important.

## The Components of Trust

Trust in AI-enabled software is built from several components. None is sufficient alone. Together, they determine whether AI can move from experimentation to valuable work.

**Verification** asks whether an output, action, or system can be relied upon. Traditional software verification often involves unit tests, integration tests, regression tests, type checks, static analysis, and acceptance tests. AI makes this harder because its output is probabilistic. The same prompt may not always produce the same result, and a model may be correct in one case, plausible but wrong in another, and confidently misleading in a third.

That does not make AI unusable. It means AI must sit inside systems that verify what matters. Generated code can be compiled, tested, reviewed, linted, benchmarked, and scanned for security issues. Generated documents can be checked against source material. Generated database queries can be sandboxed. Generated actions can require approval. In short: AI suggests; reliable systems verify.

**Governance** defines who may use AI, for what purpose, with what data, under what rules, and with what oversight. Without governance, adoption becomes chaotic. Employees paste sensitive data into tools without understanding the consequences. Teams build disconnected pilots. Prompts become undocumented business logic. Generated outputs enter workflows without review. No one knows which model version produced which decision, or who is accountable for it. Governance is how organisations turn raw capability into controlled capability.

**Security** matters because AI systems often sit between humans, data, tools, and enterprise systems. A conventional application usually does what its code says. An AI-enabled application may interpret instructions, retrieve documents, call tools, generate code, send messages, or operate across systems. That creates attack surfaces such as prompt injection, data leakage, excessive tool permissions, insecure retrieval, model poisoning, untrusted documents influencing behaviour, confidential information leaking into outputs, and agents acting beyond their intended authority. An isolated chatbot can make a mistake. An AI agent connected to enterprise systems can cause damage.

**Auditability** is the ability to reconstruct what happened. Serious organisations need to know who asked the AI, what context it received, which documents it retrieved, which model produced the output, what tools it called, what action it took, who approved it, and what changed afterward. Banks, hospitals, governments, insurers, airlines, and manufacturers cannot operate on "the AI did it." They need records, traceability, logs, and escalation paths.

**Explainability** does not always mean exposing the internal mathematics of a model. In most practical settings, it means the system can provide reasons, sources, evidence, assumptions, confidence levels, alternatives considered, known limitations, and escalation triggers. If AI recommends a software architecture, the team does not need to inspect every neural-network parameter, but it does need to know why that architecture was recommended, what trade-offs it implies, and what evidence supports it. If AI summarises a contract, the lawyer needs citations to the clauses. If AI explains a legacy system, the engineer needs links to the relevant code.

**Human approval** is not a sign that AI has failed. In high-value workflows, it may be the mechanism that makes AI economically useful. If AI reduces a five-hour contract review to one hour, the human still reviews the result, but the economics have changed. If AI produces a first draft of a migration plan, engineers still evaluate it, but the cost of planning falls. The question is not whether humans remain in the loop. The question is where human judgement creates the most value.

## Trust and Agents

Trust becomes especially important when AI moves from answering questions to taking actions. A chatbot can be wrong. An agent can be wrong and do something about it.

An AI agent may open files, modify code, run commands, query databases, create tickets, send emails, call APIs, update documents, or trigger workflows. Each capability increases usefulness, and each also increases risk. Therefore agentic systems need stronger boundaries than simple assistants: sandboxes, permission levels, human approval gates, tool restrictions, action logs, rollback mechanisms, monitoring, and escalation paths.

An unconstrained agent may be impressive in a demo. A bounded agent is more likely to be useful in production.

## Trust and Legacy Systems

The trust problem becomes sharper when AI touches legacy systems. These systems often contain decades of accumulated business knowledge: payments, policies, reservations, claims, trades, medical records, tax records, or factory operations. Many are poorly documented, written in older languages, full of hidden dependencies, and correct for reasons no one fully remembers.

AI may help explain, document, test, and modernise these systems. But organisations will not allow AI to change mission-critical infrastructure simply because it sounds confident. They will need tests, staged migration, rollback plans, audit trails, and human accountability.

Trust is the bridge between AI capability and legacy modernisation. Without it, AI can describe the old system. With it, AI can help change the old system safely.

## The Trust Equation

Trust is not binary. It increases as uncertainty and risk are reduced. A simple way to think about it is:

> [!summary] The Trust Equation
> **Trust = useful capability + protective controls - unmanaged exposure**
>
> | What raises trust | What lowers trust      |
> | ----------------- | ---------------------- |
> | Capability        | Risk                   |
> | Verification      | Uncertainty            |
> | Governance        | Unclear accountability |
> | Security          | Unbounded access       |
> | Auditability      | Invisible actions      |
> | Explainability    | Unexplained behaviour  |

This is not a mathematical formula. It is a way of remembering that model intelligence is only one component. An extremely capable model with poor governance may be less useful than a slightly weaker model inside a well-designed system.

That is one reason enterprise AI may not be won simply by the smartest model. It may be won by the system that makes AI most trustworthy in valuable workflows.

## The Economics of Trust

Trust changes adoption because it changes expected value. Untrusted AI can only be used where mistakes are cheap. Partially trusted AI can assist humans under supervision. Highly trusted AI, inside bounded workflows, can take on more valuable work.

The progression looks like this:

> [!example] Trust Changes What AI Is Allowed To Do
> | Trust level | Typical use |
> |---|---|
> | Low trust | Low-risk tasks where mistakes are cheap |
> | Moderate trust | Human-supervised workflows |
> | High trust | Bounded production use |
> | Institutional trust | High-value enterprise adoption |

This is why the future of AI in software development will not be determined by capability alone. It will be determined by the relationship between capability and trust. The more an AI system can be verified, governed, secured, audited, and explained, the more valuable work it can perform.

## What We Know

AI systems can produce useful outputs while also making mistakes.

Enterprise software environments require security, governance, auditability, and accountability.

AI agents and tool-using systems increase both capability and risk.

Verification and human review remain essential in high-stakes workflows.

## What We Infer

Trust will become one of the major economic bottlenecks in enterprise AI adoption.

Organisations will adopt AI first in bounded workflows where risk is manageable and verification is practical.

The most valuable AI systems may not be the most autonomous systems, but the systems that combine capability with reliable trust boundaries.

## What We Do Not Yet Know

We do not yet know which governance patterns will become standard.

We do not yet know how regulators will treat many AI-assisted decisions.

We do not yet know how much trust infrastructure will cost relative to the productivity gains AI creates.

We do not yet know whether future models will become reliable enough to reduce verification cost dramatically, or whether verification will remain a major constraint.
