---
title: "Preparing to Lead Agentic AI: An Executive Pre-Course Guide"
description: "An eight-module reading path, worked-answer guide, and practical workbook for courses on applied agentic AI and organisational transformation."
---

This appendix turns the book into preparation for an executive course on applied agentic AI and organisational transformation. It is not a substitute for instructors, discussion with experienced participants, live exercises, or the discipline of completing a real project. Its purpose is to make those experiences more valuable.

Many participants arrive at an AI course knowing the names of several products but lacking a framework that connects them. They may have used a chatbot without understanding an agent, heard that AI is expensive without knowing which costs matter, or been told to “transform the organisation” without knowing how to begin with one workflow.

The book supplies that framework. Its central argument is:

> AI lowers the cost of translating human intention into working systems, while moving more of the difficult work into context, requirements, integration, verification, trust, and responsibility.

The eight modules below organise the relevant chapters into a practical preparation path. Each module contains a reading purpose, ideas to understand, a worked answer, and a practical application note. The application notes do not require programming experience. They require knowledge of a real problem and a willingness to make choices explicit.

## How to Use This Guide

You can complete one module each week, or use the guide as an intensive preparation programme before a course begins. For each module:

1. Read the recommended chapters for their argument, not to memorise every technical term.
2. Read the worked answer and identify the business, technical, security, and governance choices it makes.
3. Adapt the same pattern to a real workflow you understand.
4. Keep the same workflow where possible so that your notes gradually become one coherent proposal.

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

**Worked answer:** A customer-service chatbot may only need to draft a reply to a complaint. An assistant becomes more useful if it can retrieve the customer's order history, warranty terms, and previous support tickets. It becomes an agent only when it is allowed to prepare a refund, open a replacement order, or update the ticket status. Before doing that, it should check policy limits, customer identity, stock availability, and whether the action requires human approval.

**How to apply it:** Describe one proposed system at three levels: chatbot, assistant with internal knowledge, and agent with one bounded action. The important change is not the tone of the answer. It is the authority the system has been given.

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

**Worked answer:** A generic meeting-summary tool may be bought because many vendors already solve that problem. A claims-assessment assistant may be different because it depends on the organisation's policy wording, past decisions, local regulations, and risk appetite. In that case, the platform choice should be judged by how well it connects to internal records, preserves data control, supports audit trails, and allows the organisation to change models without rebuilding the whole workflow.

**How to apply it:** Compare a proprietary service with an open or locally operated alternative only after naming the workflow. A platform is good or bad in relation to a task, not in the abstract.

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

**Worked answer:** In a procurement workflow, supplier names may come from the vendor database, purchase limits from finance policy, delivery status from the logistics system, and approvals from the workflow platform. The agent may read all four, but should not change supplier bank details or approve spending above a threshold. If a system is unavailable, the agent should stop and record the missing source rather than guessing. The audit record should show the request, information retrieved, recommendation made, approval received, and final action.

**How to apply it:** Draw the workflow as a chain of hand-offs. Mark where the agent reads, recommends, prepares, acts, waits for approval, records evidence, and stops.

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

**Worked answer:** A finance agent that can prepare payments should not also be able to approve and release them. Its most damaging action would be changing bank details or sending money to the wrong account. It may read invoices and vendor records, but payment release should require a human approver. A sudden request to change many vendors, bypass approval, or follow instructions embedded inside an invoice should trigger a stop. Finance, security, and operations need named roles for revoking access, restoring records, and notifying affected parties.

**How to apply it:** Name one serious failure and describe prevention, detection, containment, investigation, recovery, and the change that would stop the same failure recurring.

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

**Worked answer:** In HR onboarding, the employee, manager, HR officer, IT team, and payroll team all experience delay. Routine work includes collecting forms, checking required documents, creating accounts, sending standard messages, and tracking missing items. Judgement remains with HR and the manager when immigration, seniority, compensation, or performance-sensitive issues arise. The agent could prepare the checklist, chase missing documents, draft reminders, and create IT requests, but it should not make employment or pay decisions.

**How to apply it:** Rewrite one current workflow in no more than ten steps, then show which steps are eliminated, automated, moved to exceptions, or still owned by a human.

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

**Worked answer:** A pilot that drafts customer replies might reduce average handling time from ten minutes to six minutes. That is useful only if customers still receive accurate answers and fewer cases are reopened. The scorecard should therefore include handling time, first-contact resolution, customer complaints, correction rate, and escalation rate. If speed improves but complaints or incorrect replies rise beyond the agreed limit, the project should pause for redesign instead of expanding.

**How to apply it:** Build a scorecard with at least one outcome measure, one process measure, and one guardrail. A faster workflow is not a success if it quietly creates more errors or complaints.

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

**Worked answer:** A loan-screening assistant may be used by bank staff, but applicants are the people most affected. The organisation should consider financial regulation, anti-discrimination rules, privacy obligations, internal credit policy, and appeal rights. The system should retain the data used, recommendation made, human decision, reasons given, and any override. Testing should include borderline cases, protected groups, incomplete records, and attempts to produce unsupported explanations. A named risk owner must be able to stop use immediately.

**How to apply it:** Write a one-page governance note naming the purpose, owner, users, affected people, permitted data, prohibited actions, approval points, evaluation method, incident owner, documentation, and review date.

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

**Worked answer:** After a merger, the business may need faster cross-selling, but customer information sits in separate systems. A narrow first workflow could help account managers prepare a combined customer brief before a meeting. Even if the first pilot is imperfect, the organisation may still gain reusable connectors, permission rules, retrieval methods, evaluation cases, and experience governing AI-assisted work. The executive decision is not to “transform with AI” in general; it is to approve a bounded pilot with named systems, risks, measures, owners, and a review date.

**Capstone — choose one path:**

1. **AI integration plan:** Design a complete proposal for one business function, including the present workflow, agent role, platform choice, system connections, data, permissions, tests, KPIs, governance, cost, adoption plan, and next decision.
2. **Executive presentation:** Prepare a concise case for an agent-based initiative. Explain the problem, economic value, proposed workflow, evidence, risks, controls, investment stages, and what management should approve.

The strongest capstone is not the most ambitious. It is the one in which the connection from business need to system design, evidence, authority, and economic value is easiest to follow.

## Worked Case: HorizonCare Clinics

The same eight-module structure becomes clearer when applied to one imaginary organisation. Suppose **HorizonCare Clinics** is a regional healthcare group with multiple outpatient clinics, a call centre, a scheduling system, a customer-relationship system, billing records, and approved patient-information documents. It wants to improve administrative service without allowing AI to make clinical decisions.

The strategic answer is not simply "add a chatbot". Different AI capabilities create different kinds of value:

| Capability | What it can do for HorizonCare | Control required |
| --- | --- | --- |
| Chatbot | Answer approved questions about locations, opening hours, preparation instructions, and billing basics. | Use approved content and avoid medical advice. |
| Reasoning model | Compare clinic location, specialty, urgency, insurance network, and appointment availability before recommending options. | Check constraints and explain assumptions. |
| Multimodal AI | Read referral letters, insurance cards, forms, voice transcripts, and uploaded documents. | Validate extraction and protect patient information. |
| Agentic AI | Check availability, reserve an appointment slot, update a case, and send confirmation. | Limit authority, log actions, and require approval for sensitive steps. |

This gives the organisation a simple rule: informational answers can be automated earlier; recommendations need stronger checking; actions require explicit permission; clinical, financial, or legally significant decisions remain under human authority.

### Cost and Benefit Sketch

A serious proposal should include more than model subscription fees. For HorizonCare, a preliminary estimate might look like this:

| Initial cost category | Estimated cost |
| --- | ---: |
| Workflow analysis and requirements | US$40,000 |
| User-interface development | US$60,000 |
| Scheduling and customer-system integration | US$120,000 |
| Data preparation and knowledge base | US$50,000 |
| Security, privacy, and legal review | US$35,000 |
| Testing and employee training | US$45,000 |
| **Estimated implementation cost** | **US$350,000** |

| Annual operating cost category | Estimated annual cost |
| --- | ---: |
| Model and API usage | US$90,000 |
| Cloud infrastructure | US$45,000 |
| Monitoring and evaluation | US$55,000 |
| Support and maintenance | US$70,000 |
| Security and compliance | US$40,000 |
| **Estimated annual operating cost** | **US$300,000** |

Suppose HorizonCare handles 1.2 million administrative interactions each year at an average labour cost of US$2.50 per interaction. If the system safely resolves 35 percent of those interactions, the released labour capacity is:

```text
1,200,000 x 35% x US$2.50 = US$1,050,000
```

After subtracting annual operating costs, the rough annual net benefit is:

```text
US$1,050,000 - US$300,000 = US$750,000
```

That would recover the initial US$350,000 implementation cost in roughly six months after successful deployment. But the word **successful** matters. The pilot must test whether 35 percent safe resolution is real, whether staff time is actually released, whether errors remain acceptable, and whether patients experience the service as helpful rather than evasive.

### Platform Answer

For HorizonCare, the strongest answer is likely a **hybrid enterprise AI platform**, not a public chatbot and not a fully autonomous agent. The system would combine:

- a commercially hosted model with enterprise privacy protections;
- retrieval from approved HorizonCare policies and patient-service documents;
- a controlled agent layer connected to scheduling and customer-service systems;
- deterministic software rules for authentication, eligibility, and transaction approval;
- human review for exceptions and high-risk decisions.

A public chatbot is unsuitable because it lacks current clinic data and should not receive protected patient information. A completely autonomous agent is also unsuitable because healthcare administration contains privacy, safety, financial, and legal risks. The agent should work inside a restricted workflow, use approved tools, and escalate cases that exceed its authority.

The open-source versus proprietary choice should be pragmatic. A proprietary enterprise model may provide faster implementation, strong capability, support, and managed infrastructure. An open or locally operated model may offer greater control and data-location assurance, but HorizonCare would then need the staff, infrastructure, security processes, and evaluation discipline to operate it properly. A sensible first step is to use a proprietary enterprise model behind an abstraction layer, while keeping business rules, retrieval, tests, and tool interfaces separate enough to change models later.

### Landing-Page and User-Experience Answer

If the course asks participants to use AI to generate a landing page or mock-up, the answer should still respect the real service boundary. HorizonCare could describe the system like this:

```text
Headline:
Healthcare appointments without the waiting.

Subheading:
Horizon Assistant helps you find a clinic, prepare for your visit, and request an appointment at any time.

Main benefits:
- Available 24 hours a day.
- Find suitable clinics and appointment times.
- Receive preparation instructions and reminders.
- Transfer to a staff member whenever necessary.

Safety statement:
Horizon Assistant provides administrative support only. It does not diagnose conditions or replace medical advice. For emergencies, contact the appropriate emergency service.
```

The important lesson is not the wording of the page. It is the discipline behind it. The interface must tell users what the AI can do, what it cannot do, when a human will take over, and why the service should be trusted only within its proper boundary.

## Other Industries

The HorizonCare example is only one setting. The same structure can be reused wherever an organisation has repeated information work, fragmented systems, costly hand-offs, and decisions that require different levels of authority.

| Industry | Example organisation | Strong agent use case |
| --- | --- | --- |
| Banking | Regional retail bank | Customer-service and loan-document collection agent |
| Insurance | General insurer | Claims intake, document review, image assessment, and case routing |
| Hospitality | Hotel or resort group | Reservation, guest-service, service recovery, and upselling agent |
| Manufacturing | Industrial manufacturer | Maintenance, procurement, and production-support agent |
| Retail | Omnichannel retailer | Shopping, inventory, delivery, and returns agent |
| Logistics | Freight and delivery company | Shipment exception and route-coordination agent |
| Education | University | Student-advising and administrative-services agent |
| Government | Municipal authority | Citizen-service and permit-processing agent |
| Legal services | Mid-sized law firm | Matter intake, research, document review, and deadline tracking |
| Real estate | Property-management company | Tenant-service and maintenance-coordination agent |
| Telecommunications | Mobile-network operator | Technical-support and customer-retention agent |
| Energy | Utility company | Outage, billing, and field-service agent |
| Construction | Main contractor | Project-document and site-coordination agent |
| Pharmaceuticals | Drug manufacturer | Regulatory-document and medical-information agent |
| Travel | Airline | Disruption-management and rebooking agent |
| Accounting | Professional-services firm | Bookkeeping, reconciliation, and client-query agent |

Different industries make different lessons visible. Insurance is especially good for multimodal AI because claims may include forms, photographs, estimates, police reports, voice descriptions, and policy documents. Logistics is strong for agent integration because delays require coordination across carriers, customers, routes, and priorities. Manufacturing shows why probabilistic AI must work beside deterministic safety systems. Government and banking expose governance, fairness, auditability, and public accountability. Hospitality and retail make customer experience and measurable commercial benefit easy to understand.

The point is not to find the most glamorous use case. It is to choose a workflow where the business need is real, the authority boundary is clear, the data and tools can be identified, and the benefit can be measured.

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

Before beginning an applied agentic-AI course—or asking an organisation to fund an initiative—the participant should be able to explain the following without using product slogans:

1. The difference between a model, an assistant, an agent, and an AI system.
2. The workflow being improved and the people who experience the problem.
3. The current information, tools, and systems the agent requires.
4. The actions the agent may propose, prepare, or execute.
5. The evidence that will measure benefit and detect harm.
6. The people who own security, compliance, operation, and the final decision.
7. The reusable capability that remains valuable if the model, vendor, or first use case changes.

If those answers are clear, the reader is ready to gain more from a course. The product demonstrations will be easier to judge, the frameworks will attach to a real problem, and the capstone will begin with substance rather than a blank slide.
