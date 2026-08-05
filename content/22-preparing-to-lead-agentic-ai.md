---
title: "Preparing to Lead Agentic AI: An Executive Pre-Course Guide"
description: "An eight-module reading path, reflection guide, and practical workbook for courses on applied agentic AI and organisational transformation."
---

This appendix turns the book into preparation for an executive course on applied agentic AI and organisational transformation. It is not a substitute for instructors, discussion with experienced participants, live exercises, or the discipline of completing a real project. Its purpose is to make those experiences more valuable.

Many participants arrive at an AI course knowing the names of several products but lacking a framework that connects them. They may have used a chatbot without understanding an agent, heard that AI is expensive without knowing which costs matter, or been told to “transform the organisation” without knowing how to begin with one workflow.

The book supplies that framework. Its central argument is:

> AI lowers the cost of translating human intention into working systems, while moving more of the difficult work into context, requirements, integration, verification, trust, and responsibility.

The eight modules below organise the relevant chapters into a practical preparation path. Each module contains a reading purpose, ideas to understand, questions to consider, and a small exercise. The exercises do not require programming experience. They require knowledge of a real problem and a willingness to make choices explicit.

## How to Use This Guide

You can complete one module each week, or use the guide as an intensive preparation programme before a course begins. For each module:

1. Read the recommended chapters for their argument, not to memorise every technical term.
2. Answer the reflection questions in your own words.
3. Complete the practical exercise using a real workflow you understand.
4. Keep the same workflow where possible so that the exercises gradually become one coherent proposal.

By the end, you should be able to explain an AI initiative to business, technical, security, and governance colleagues without pretending that they all see the problem in the same way.

## Module 1: From a Model to an Agent

**Purpose:** Understand what generative AI and agentic AI are, what they are not, and why the surrounding system matters more than an impressive answer.

**Read:**

- [[06-what-is-an-ai-model|Chapter 5: What Is an AI Model?]]
- [[09-economics-of-models|Chapter 7: The Economics of Models]]
- [[16-agents-tools-and-integrated-systems|Chapter 14: Agents, Tools, and Integrated Systems]]

**Ideas to understand:**

- An AI model is a learned mathematical representation of patterns, not a database of complete truth.
- Generative AI produces new text, code, images, or other outputs rather than selecting only from fixed answers.
- Reasoning is the additional work of planning, comparing, checking, and revising; more reasoning can improve a difficult task while increasing time and cost.
- Multimodal models can use several kinds of evidence, such as text, code, images, speech, and screens.
- An agent combines a model with an objective, context, tools, working state, feedback, permissions, and stopping rules.
- An AI system includes the model and everything required to make it useful and governable in real work.

**Questions to consider:**

1. Which activity in your organisation only needs a generated draft?
2. Which activity needs access to current internal information?
3. Which activity requires the system to use a tool or change another system?
4. At which point does an assistant become an agent in that workflow?
5. What would a model need to check rather than merely predict?

**Exercise — explain the difference:** Write three short descriptions of the same proposed system: first as a chatbot, then as an assistant with internal knowledge, and finally as an agent allowed to take one bounded action. Underline what changes in its authority at each stage.

## Module 2: Choose a Platform Without Starting with a Brand

**Purpose:** Compare commercial services, open models, enterprise platforms, and specialised systems by what the organisation actually needs.

**Read:**

- [[03-hidden-engine-of-computing|Chapter 2: The Hidden Engine of Computing]]
- [[10-context-what-the-model-knows-right-now|Chapter 8: Context: What the Model Knows Right Now]]
- [[side-chapter-from-demonstration-to-daily-work|Side Chapter: From Demonstration to Daily Work]]

**Ideas to understand:**

- A finished AI application, an enterprise platform, a model service, and a locally operated open model solve different parts of the problem.
- Open-source software can offer inspection and control, but somebody must still operate, secure, evaluate, and update it.
- A proprietary service can provide strong capability and managed infrastructure, but may create dependence on a vendor's prices, policies, availability, and model changes.
- Buying, configuring, integrating, and building are points on a spectrum rather than four completely separate choices.
- The model is replaceable more easily when business rules, evaluations, data access, and tool interfaces are kept outside it.

**Questions to consider:**

1. Is the workflow common enough to buy as a finished application?
2. Is it already centred on an enterprise platform the organisation uses heavily?
3. Does it depend on distinctive knowledge or processes that create competitive advantage?
4. Must sensitive data remain in a particular environment or country?
5. How costly would it be to change the model or vendor later?

**Exercise — compare two approaches:** Select one proprietary service and one open or locally operated alternative. Compare capability, data control, integration effort, operating skill, support, switching cost, security responsibility, and estimated total cost. Do not declare a winner until you have stated the workflow.

## Module 3: Connect the Agent to a Digital Ecosystem

**Purpose:** Move from a standalone AI demonstration to a system that can work with existing information, software, and people.

**Read:**

- [[10-context-what-the-model-knows-right-now|Chapter 8: Context: What the Model Knows Right Now]]
- [[15-legacy-problem|Chapter 13: The Legacy Problem]]
- [[16-agents-tools-and-integrated-systems|Chapter 14: Agents, Tools, and Integrated Systems]]
- [[19-enterprise-intelligence-layer|Chapter 17: The Enterprise Intelligence Layer]]

**Ideas to understand:**

- An application programming interface, or API, is an agreed way for one software system to request information or action from another.
- Retrieval brings selected organisational information into the model's working context when it is needed.
- Integration includes data meaning, identity, permissions, timing, error handling, records, and recovery—not merely a technical connection.
- Existing systems are valuable tools and stores of organisational knowledge; an agent should not assume they must be replaced.
- A reliable workflow makes each important hand-off visible.

**Questions to consider:**

1. Which system contains the source of truth for each important fact?
2. Which information may the agent read, and which may it change?
3. How will the agent know that a system is unavailable or a record is incomplete?
4. Which action requires approval before it is sent to another system?
5. What record will allow somebody to reconstruct what happened?

**Exercise — draw the system:** Draw a simple map beginning with the user's request. Add the model, internal information, tools, existing applications, approval point, final action, and feedback. Mark every place where information crosses a boundary.

## Module 4: Secure an Agent That Can Act

**Purpose:** Understand why agent security concerns objectives, access, monitoring, response, and recovery—not only harmful language.

**Read:**

- [[13-precision-and-probabilistic-ai|Chapter 11: Precision and Probabilistic AI]]
- [[14-economics-of-trust|Chapter 12: The Economics of Trust]]
- [[16-agents-tools-and-integrated-systems|Chapter 14: Agents, Tools, and Integrated Systems]]

**Ideas to understand:**

- Capability does not create authority. An agent may be able to perform an action without being permitted to perform it.
- Least privilege means giving an agent only the access required for its current task.
- Prompt injection is an instruction hidden in user content, a document, a web page, or another source that attempts to redirect the agent.
- A sandbox limits what an agent can reach, but one boundary is not a complete security system.
- Security is a continuing cycle: govern, identify, protect, detect, respond, and recover.
- Human training and incident procedures matter because technical controls will sometimes fail.

**Questions to consider:**

1. What is the most damaging action this agent could take with its proposed access?
2. Can its read and write permissions be separated?
3. Which outside content could contain misleading or malicious instructions?
4. What unusual behaviour would trigger an alert or stop?
5. Who can revoke access, restore data, notify affected people, and approve a return to service?

**Exercise — prepare for one failure:** Choose the most credible high-impact failure. Describe how the organisation would prevent it, detect it, contain it, investigate it, restore normal work, and change the system afterward.

## Module 5: Place Agents Inside Business Functions

**Purpose:** Define agents by the work they improve rather than by fashionable job titles.

**Read:**

- [[02-economics-of-software-development|Chapter 1: The Economics of Software Development]]
- [[side-chapter-building-radix-with-codex|Case Study: Radix Began with One Search Box]]
- [[side-chapter-from-demonstration-to-daily-work|Side Chapter: From Demonstration to Daily Work]]

**Ideas to understand:**

- Useful early agents address repeated searches, decisions, hand-offs, drafts, classifications, or exceptions.
- Product design begins with the present workflow and the person experiencing the problem.
- An agent should have a bounded role such as retrieve, summarise, draft, classify, recommend, prepare, or execute with approval.
- AI-enabled outsourcing may reduce repetitive labour while leaving ownership of quality, data, customer relationships, and difficult exceptions unresolved.
- Rapid prototyping lets people discover requirements through use, but successful growth eventually creates a need for architecture and maintenance.

**Questions to consider:**

1. Who experiences the problem every day?
2. What does the current workflow require from that person?
3. Which part is routine, and which part depends on genuine judgement?
4. Where would the agent save waiting, search, translation, or coordination?
5. Could the proposed improvement weaken service quality or move work invisibly to somebody else?

**Exercise — redesign one workflow:** Describe the current workflow in no more than ten steps. Then design an AI-assisted version. For every removed human step, state whether it was eliminated, automated, moved to an exception process, or hidden inside another person's work.

## Module 6: Cross the Last Mile from Pilot to Practice

**Purpose:** Establish whether an AI initiative creates measurable value after the demonstration is over.

**Read:**

- [[12-requirements-engineering|Chapter 10: Requirements Engineering]]
- [[14-economics-of-trust|Chapter 12: The Economics of Trust]]
- [[side-chapter-from-demonstration-to-daily-work|Side Chapter: From Demonstration to Daily Work]]

**Ideas to understand:**

- A baseline records how the workflow performs before AI is introduced.
- A key performance indicator, or KPI, measures whether an intended outcome is being achieved.
- Outcome measures show whether something became better; process measures show whether the work improved; guardrails reveal unacceptable cost or harm.
- Adoption requires training, support, ownership, feedback, maintenance, and a route for people to challenge the system.
- A project should expand only when evidence supports wider authority or use.

**Questions to consider:**

1. What does the workflow cost today in time, money, delay, or error?
2. What would become better for the person receiving the service?
3. Which measure could improve while concealing a worse outcome elsewhere?
4. Who will monitor complaints, corrections, exceptions, and changing conditions?
5. What evidence would justify stopping rather than expanding the project?

**Exercise — create a scorecard:** Choose three to five measures. Include at least one outcome, one process measure, and one guardrail. Record the baseline, the intended improvement, the source of the evidence, the review period, and the person responsible for acting on the result.

## Module 7: Governance, Compliance, Testing, and Ethics

**Purpose:** Turn general promises of responsible AI into named decisions, controls, evidence, and accountability.

**Read:**

- [[12-requirements-engineering|Chapter 10: Requirements Engineering]]
- [[13-precision-and-probabilistic-ai|Chapter 11: Precision and Probabilistic AI]]
- [[14-economics-of-trust|Chapter 12: The Economics of Trust]]
- [[side-chapter-the-genie-is-not-all-powerful|The Genie Is Not All-Powerful]]

**Ideas to understand:**

- Governance decides who may use the system, for which purpose, under which rules, and with whose authority.
- Compliance depends on the jurisdiction, sector, data, and decision involved. Mentioning GDPR, CCPA, HIPAA, or another framework is not a substitute for qualified legal and regulatory advice.
- Evaluation measures performance across representative cases. Verification checks whether a required condition has been satisfied. Neither removes the need for monitoring in real use.
- Sandboxing, structured output, validation, A/B testing, safety checks, staged deployment, audit trails, and human approval test different kinds of risk.
- Fairness and ethical impact concern who benefits, who bears errors, who can appeal, and whether apparent efficiency conceals a transfer of cost or power.
- A risk–speed assessment helps an organisation experiment quickly where failure is visible and reversible while proceeding deliberately where consequences are serious.

**Questions to consider:**

1. Which people could be affected even though they do not use the system directly?
2. Which law, regulation, contract, professional duty, or internal policy may apply?
3. What evidence must be retained for an audit, complaint, or appeal?
4. Which test would expose the most important failure before deployment?
5. Who has the authority and duty to stop the system?

**Exercise — write a governance page:** Name the purpose, owner, users, affected people, permitted data, prohibited actions, approval points, evaluation method, monitoring measures, incident owner, documentation, and review date. If a field has no owner, the plan is incomplete.

## Module 8: Build an Executive AI Road Map

**Purpose:** Combine business value, system design, cost, risk, adoption, and future direction into one defensible proposal.

**Read:**

- [[17-what-becomes-scarce-when-code-becomes-cheap|Chapter 15: What Becomes Scarce When Code Becomes Cheap?]]
- [[18-future-of-programmers|Chapter 16: The Future of Programmers]]
- [[19-enterprise-intelligence-layer|Chapter 17: The Enterprise Intelligence Layer]]
- [[20-five-year-and-ten-year-scenarios|Chapter 18: Five-Year and Ten-Year Scenarios]]
- [[21-conclusion-when-intent-becomes-software|Conclusion: When Intent Becomes Software]]

**Ideas to understand:**

- The strategic opportunity is a lower cost of organisational change, not merely faster production of code or documents.
- A focused workflow can create reusable organisational capability: governed knowledge, tool interfaces, evaluation methods, permissions, and experience.
- The enterprise layer should be model-neutral where practical and use existing applications as tools rather than assuming one giant replacement.
- Five- and ten-year scenarios should distinguish present evidence, visible pressures, plausible trajectories, and speculation.
- Change management is part of the system: people need time, incentives, authority, training, and evidence before a new workflow becomes normal.

**Questions to consider:**

1. Which business change is currently constrained by the cost or delay of changing information systems?
2. What narrow workflow could demonstrate value without requiring an enterprise-wide commitment?
3. Which reusable capability would remain even if the first use case failed or the model changed?
4. How would employees, customers, partners, or regulators experience the proposed change?
5. What decision are you asking an executive to make now?

**Capstone — choose one path:**

1. **AI integration plan:** Design a complete proposal for one business function, including the present workflow, agent role, platform choice, system connections, data, permissions, tests, KPIs, governance, cost, adoption plan, and next decision.
2. **Executive presentation:** Prepare a concise case for an agent-based initiative. Explain the problem, economic value, proposed workflow, evidence, risks, controls, investment stages, and what management should approve.

The strongest capstone is not the most ambitious. It is the one in which the connection from business need to system design, evidence, authority, and economic value is easiest to follow.

## Reusable Template 1: Agent Use-Case Card

```text
Organisation and business function:
People experiencing the problem:
Current workflow and pain:
Desired outcome:
Agent's bounded role:
Information required:
Tools and systems required:
Actions the agent may take:
Actions requiring approval:
Actions the agent must never take:
Likely failure and affected people:
Measures of success:
Named owner:
Next small experiment:
```

## Reusable Template 2: Platform Decision

```text
Workflow being supported:
Option being evaluated:
Required capability:
Required integrations:
Data location and sensitivity:
Permissions and identity controls:
Evaluation and monitoring support:
Operating skills required:
Vendor or platform dependency:
Expected capital and operating cost:
Ease of changing model or provider:
Reason to choose or reject:
```

## Reusable Template 3: KPI Scorecard

| Measure | Type: outcome, process, or guardrail | Baseline | Intended result | Evidence source | Owner | Review date |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## Reusable Template 4: Authority and Risk Map

```text
Information the agent may read:
Information it must not read:
Tools it may use:
Changes it may prepare:
Changes it may execute:
Approval gates:
Logging and monitoring:
Conditions that stop the agent:
Incident owner:
Rollback or recovery method:
People who must be notified:
```

## Readiness Check

Before beginning an applied agentic-AI course—or asking an organisation to fund an initiative—you should be able to answer these questions without using product slogans:

1. What is the difference between a model, an assistant, an agent, and an AI system?
2. Which workflow are you trying to improve, and for whom?
3. What current information and tools does the system require?
4. What may the agent propose, prepare, or execute?
5. How will you measure benefit and detect harm?
6. Who owns security, compliance, operation, and the final decision?
7. What will remain valuable if the model, vendor, or first use case changes?

If those answers are clear, the reader is ready to gain more from a course. The product demonstrations will be easier to judge, the frameworks will attach to a real problem, and the capstone will begin with substance rather than a blank slide.
