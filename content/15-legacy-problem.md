---
title: "The Legacy Problem"
---

# The Legacy Problem

![Legacy systems as accumulated business knowledge](<figures/FIG-13-01 Legacy Accumulated Knowledge.png>)

Imagine the chief executive of a major bank announcing that every computer system will be replaced over the weekend.

It is impossible.

Not because the technology does not exist. Not because programmers cannot write new software. It is impossible because the business would stop.

Modern organisations resemble cities. A city cannot be demolished and rebuilt in a weekend. Roads, bridges, buildings, utilities, transport systems, and communications networks must be repaired and replaced gradually while people continue living there.

Software evolves the same way.

Organisations cannot simply throw away the systems that run payments, insurance claims, hospital records, airline reservations, factory production, government benefits, telecommunications networks, and supply chains. Those systems may be old, awkward, poorly documented, and difficult to change. They may also be essential.

This is the legacy problem.

## Old Does Not Mean Bad

Many people assume that old software is bad software.

Sometimes it is. Old systems can be fragile, insecure, poorly understood, expensive to maintain, and difficult to integrate.

But age alone is not the problem.

Some old systems are stable. They process enormous transaction volumes. They embody decades of operational experience. They have survived real-world edge cases newer systems have never encountered. They may be ugly but reliable.

The real problem is that legacy systems were built for a different technological world.

They may use obsolete languages, old databases, outdated operating systems, fragile interfaces, and assumptions that no longer fit modern business needs. The original developers may have retired. Documentation may be incomplete. Source code may be missing. Dependencies may be unknown. Business rules may be hard-coded in places no one remembers.

The system still works, but the organisation no longer fully understands it.

This is not only a technical inconvenience. It is an economic drag. The [Consortium for Information & Software Quality](https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/) estimated U.S. accumulated software technical debt at about \$1.52 trillion in 2022, while [McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity) reported estimates from chief information officers (CIOs)—the executives responsible for an organisation's information technology—that technical debt can amount to 20% to 40% of the value of its technology systems before accounting for their loss of value with age. Those figures are broad estimates, not legacy-system measures specifically, but they help explain why old software can become expensive even when it still works.

Public-sector audits make the problem more concrete. The [U.S. Government Accountability Office](https://www.gao.gov/products/gao-23-106821) identified 10 critical federal legacy systems in 2019 that ranged from 8 to 51 years old and collectively cost about \$337 million annually to operate and maintain. Several used older languages such as COBOL, and agency modernisation plans were often incomplete. The UK government created a formal [Legacy IT Risk Assessment Framework](https://www.gov.uk/government/publications/guidance-on-the-legacy-it-risk-assessment-framework), while its [National Audit Office](https://www.nao.org.uk/reports/government-cyber-resilience/) reported that departments lacked fully funded remediation plans for roughly half of government's recorded legacy IT assets in March 2024.

## Software as Accumulated Business Knowledge

The most important point is that legacy software is not merely code.

It is accumulated business knowledge.

A bank's COBOL system is not valuable because of COBOL, an older programming language still used in many large organisations. It is valuable because it may contain decades of lending policies, risk calculations, accounting practices, regulatory responses, fraud-detection rules, exception handling, reporting requirements, and operational judgement.

An airline reservation system contains more than seat data. It contains pricing rules, route structures, loyalty logic, rebooking policies, regulatory constraints, partner integrations, and decades of operational exceptions.

A hospital system contains workflows, permissions, clinical processes, billing rules, reporting obligations, and patient-safety constraints.

Much of this knowledge may not exist anywhere else. It may not be fully documented. It may live only in code, database schemas, stored procedures, configuration files, batch jobs, integration scripts, and the memories of long-serving staff.

This is why rewriting a large system can be more expensive than building it the first time. The first build created the system. The rewrite must rediscover everything the old system came to know.

## Why Rewrites Fail

Executives often ask a reasonable question:

> Why don't we just rewrite it?

The answer is economics.

A rewrite must reproduce visible features and hidden behaviour. It must preserve business rules, data relationships, exceptions, integrations, permissions, reports, compliance requirements, and user workflows. It must do so while the old system continues running. It must avoid interrupting the business.

The risk is enormous. If the new system misses a hidden rule, the organisation may not discover the failure until real customers, transactions, patients, flights, or payments are affected.

This is why "big bang" replacement is dangerous. Switching everything at once concentrates risk. Gradual migration spreads risk over time.

## Integration Becomes the Dominant Cost

Because organisations cannot replace everything overnight, new systems must coexist with old ones.

This creates System Integration.

Modern applications must communicate with mainframes—large computers built to process enormous volumes of important transactions—programs written in older languages such as COBOL, commercial databases such as Oracle, enterprise resource planning systems such as SAP, custom applications, payment networks, medical devices, factory controllers, industrial robots, identity systems, reporting tools, and cloud platforms. An **enterprise resource planning (ERP) system** is shared software that connects activities such as finance, purchasing, inventory, manufacturing, sales, and human resources.

Integration is not glamorous, but it is where software becomes economically real.

A demo can stand alone. A production system must connect.

At integration boundaries, all the hidden complexity appears: data formats, authentication, permissions, latency, error handling, inconsistent records, old assumptions, missing documentation, and operational risk.

In many organisations, the biggest cost is not writing new software. It is making new software work safely with everything that already exists.

This is where technical debt and integration meet. A system can be valuable because it embodies business knowledge, while also expensive because that knowledge is trapped in forms that are hard to inspect, test, change, or connect. AI's opportunity is not merely to produce new code faster. It is to reduce the cost of recovering, documenting, testing, and safely changing knowledge already embedded in software.

## What Integration Looks Like In Practice

In a large bank, the new application is rarely allowed to reach directly into the core banking system. The usual architecture is layered.

The customer might use a mobile app. Its request first passes through a controlled entrance that decides which internal service should receive it. Other connecting software may pass messages immediately, collect them for later processing, read databases, or reach a mainframe. Industry terms for these parts include **API gateway**, **integration layer**, **message queue**, **event stream**, and **batch job**. A batch job processes a collection of work automatically, often at a scheduled time; a message queue holds messages until another system is ready to handle them. Deep underneath may be decades-old technologies with names such as **COBOL**, **CICS**, **IMS**, or **DB2**. The names matter less than the point: a simple tap may cross many boundaries before reaching the system that owns the record.

The point is not that every bank has exactly this architecture. The point is that enterprise systems usually meet through boundaries:

| Boundary                       | Why it exists                                              |
| ------------------------------ | ---------------------------------------------------------- |
| API gateway                    | Controls and routes access to services                     |
| Service layer                  | Separates modern applications from legacy internals        |
| Message queue or event stream  | Decouples systems that cannot all change at the same speed |
| Batch feed                     | Moves large volumes of records on a schedule               |
| Identity and permission system | Controls who and what may act                              |
| Audit log                      | Records what happened and why                              |
| Testing and validation layer   | Proves that new behaviour matches required old behaviour   |

This is where system integration becomes more than "connecting A to B". It becomes the discipline of allowing new systems to cooperate with old systems without breaking the business.

Public banking examples show the pattern. A [Google Cloud case study](https://cloud.google.com/customers/hongleongbank) describes Gemini operating inside Hong Leong Bank's hybrid environment, using API calls to connect with existing databases and backend systems. For personalised post-login tasks, Gemini acts as a control layer that directs specialised agents to make secure calls to backend APIs and retrieve real-time data from the core banking system. The source is a vendor case study rather than an independent evaluation, but its architecture is instructive: AI enters through governed integration points.

[Publicis Sapient describes](https://www.publicissapient.com/customers/stories/financial-services-slingshot-legacy-modernization) a different part of the same problem: a global bank needed to understand nearly three million lines of legacy COBOL across hundreds of programs and more than 300 critical batch feeds. Its AI-assisted code-to-specification work focused on extracting business rules, producing reviewable specifications, creating traceability, and reducing modernisation risk. This too is a vendor-reported case, so it demonstrates a method rather than proving a general productivity rate.

These examples are vendor and media reports, so they should not be treated as universal proof. But they support the engineering thesis of this chapter. In serious enterprises, AI usually arrives as one participant in a complicated ecosystem of old software, new services, APIs, queues, data stores, permissions, test evidence, regulators, and human accountability.

## Where AI Enters

AI is usually discussed as a way to create new software, but that may not be its largest economic opportunity. It may be extraordinarily valuable because it can help humans understand existing software.

It can analyse source code, explain old functions, generate documentation, identify dependencies, suggest APIs, translate between programming languages, detect dead code, summarise database schemas, compare old and new behaviour, generate tests, and help engineers reason about migration paths.

For a non-technical reader, it helps to separate the work into five plain-English jobs.

First, AI can act as a **translator**. It can read an old COBOL program, database schema, batch job, or interface definition and explain, in ordinary English, what the system appears to do. That does not mean the explanation is automatically correct, but it gives engineers a starting point that may otherwise require weeks of manual code reading.

Second, AI can act as a **mapmaker**. Old systems often contain hidden pathways: one program updates a file, another reads it overnight, a third produces a regulatory report, and a fourth sends a feed to another system. AI tools can help trace those relationships and show which parts of the system depend on which other parts.

Third, AI can act as a **documentation assistant**. Many legacy systems are under-documented because the system evolved over decades. AI can generate draft specifications, business-rule summaries, interface notes, and test descriptions that humans can review and correct.

Fourth, AI can act as a **wrapper builder**. Instead of replacing the old system, engineers may expose a safe doorway into it: an API, service layer, adapter, or integration bridge. The old system keeps running, while new applications communicate with it through controlled interfaces.

Fifth, AI can act as a **migration assistant**. It may help translate old code into a newer language, generate test cases, compare old and new outputs, and highlight places where behaviour does not match. This is where caution matters most. In a business-critical system, AI-generated transformation is not enough. The organisation still needs deterministic checks, parallel runs, audit trails, and human accountability.

These five jobs are the important idea:

```text
Translate
↓
Map
↓
Document
↓
Wrap
↓
Migrate carefully
```

In other words, AI is not magic dust sprinkled over an old mainframe. It is a set of tools for reducing the cost of understanding, connecting, testing, and gradually changing software that cannot simply be switched off.

This does not mean AI replaces legacy systems automatically. The more realistic and valuable role is assistance:

```text
Understand
↓
Document
↓
Test
↓
Wrap
↓
Integrate
↓
Migrate gradually
```

AI can reduce the cost of rediscovering what an organisation already knows but has buried inside software.

The market is already moving in this direction. Vendor offerings from Amazon Web Services (AWS), [Google Cloud](https://cloud.google.com/solutions/mainframe-modernization), [IBM](https://www.ibm.com/products/watsonx-code-assistant-z), [OpenLegacy](https://www.openlegacy.com/), [Kodesage](https://kodesage.ai/), and [CloudFrame](https://cloudframe.com/CodeNavigator) point toward code assessment, documentation generation, dependency mapping, business-rule extraction, API generation, code transformation, functional-equivalence testing, and gradual migration. These are vendor claims and should be treated cautiously, but they reveal something important: the commercial opportunity is not only generating new code. It is recovering knowledge from old systems.

There is also an important distinction between AI-assisted understanding and deterministic transformation.

AI is useful when the organisation needs to understand what old software does. It can explain, summarise, map, classify, and propose. But when a bank or airline needs a new system to behave exactly like the old one, deterministic tools and formal tests become essential. CloudFrame, for example, emphasises deterministic COBOL-to-Java transformation. IBM describes watsonx Code Assistant for Z as combining AI and automation for mainframe modernisation. OpenLegacy emphasises AI-assisted API generation from legacy systems. Kodesage emphasises AI-driven understanding of old code, dependencies, and business logic.

For the reader, the lesson is simple:

```text
AI helps humans understand.
Automation helps transform.
Tests prove what changed.
Humans remain accountable.
```

That is the realistic version of AI in legacy modernisation.

## Gradual Migration

The safest path for many organisations is gradual migration: moving from an old system to a new one in controlled stages.

One module. One interface. One database. One workflow. One service. One report.

Each part is understood, documented, tested, and replaced or wrapped while the business continues operating.

AI can support this process by helping engineers inspect the old system and generate the scaffolding around it. It may suggest integration layers, create tests that capture existing behaviour, identify high-risk dependencies, and help translate old code into more modern forms.

The economic benefit is risk reduction.

Replacing software is not only a development cost. It is business risk. A failed migration can disrupt operations, damage customers, attract regulatory attention, and destroy trust. If AI can reduce the uncertainty around old systems, it preserves capital.

The same principle appeared at a much smaller scale while building my language-learning application. After many AI-assisted changes, the application did not need one dramatic rewrite. It needed cautious refactoring. Codex and I moved one slice at a time: preference storage behind service boundaries, device-specific checks behind a shared interface, study state behind one defined set of choices, and fragile screen behaviour behind clearer rules. Each change was narrow, built, tested, and committed as a separate unit.

That is app-scale evidence for the larger enterprise pattern. The safest improvement is often not to replace the whole system, but to understand one boundary, improve it, verify it, and then move to the next. AI made the work faster by inspecting code, suggesting refactors, and running through the change loop, but the discipline came from doing the migration gradually.

## Capital Preservation

The phrase "capital preservation" usually means protecting money or assets already accumulated. It also applies to software.

Organisations have invested vast sums in software over decades. That investment includes code, data, processes, integrations, knowledge, training, and operational habits. Throwing it away is rarely simple.

If AI can help organisations preserve the value of existing systems while gradually modernising them, it creates economic value beyond developer productivity.

It protects prior investment.

It lowers migration risk.

It makes hidden knowledge accessible.

It helps old systems communicate with new ones.

It may turn legacy software from a burden into a source of recoverable institutional knowledge.

This is why system integration belongs near the centre of the book's engineering argument. The future of AI in software will not be built only in **greenfield applications**, projects started from a clean slate without an older system to preserve. It will be built in contact with old systems.

## The Engineering Lesson

Legacy systems teach humility.

It is easy to build a prototype. It is much harder to replace software that carries decades of business knowledge.

AI will matter in enterprise software not because it can generate impressive demos, but because it may reduce the cost of understanding, preserving, integrating, and carefully changing systems that cannot fail.

That is a deeper economic story than "AI writes code".
