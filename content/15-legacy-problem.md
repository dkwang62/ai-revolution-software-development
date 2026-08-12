---
title: "The Legacy Problem"
---

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

> **Why it matters:** Replacing a legacy system means preserving thousands of decisions that may never have been written down as requirements.

The most important point is that legacy software is not merely code.

It is accumulated business knowledge.

A bank's COBOL system is not valuable because of COBOL, an older programming language still used in many large organisations. It is valuable because it may contain decades of lending policies, risk calculations, accounting practices, regulatory responses, fraud-detection rules, exception handling, reporting requirements, and operational judgement.

An airline reservation system contains more than seat data. It contains pricing rules, route structures, loyalty logic, rebooking policies, regulatory constraints, partner integrations, and decades of operational exceptions.

A hospital system contains workflows, permissions, clinical processes, billing rules, reporting obligations, and patient-safety constraints.

Much of this knowledge may not exist anywhere else. It may not be fully documented. It may live only in code, database schemas, stored procedures, configuration files, batch jobs, integration scripts, and the memories of long-serving staff.

This is why rewriting a large system can be more expensive than building it the first time. The first build created the system. The rewrite must rediscover everything the old system came to know.

## Why Rewrites Fail

> **Why it matters:** A clean new design can fail because it omits the awkward exceptions that made the old system valuable in real life.

Executives often ask a reasonable question:

> Why don't we just rewrite it?

The answer is economics.

A rewrite must reproduce visible features and hidden behaviour. It must preserve business rules, data relationships, exceptions, integrations, permissions, reports, compliance requirements, and user workflows. It must do so while the old system continues running. It must avoid interrupting the business.

The risk is enormous. If the new system misses a hidden rule, the organisation may not discover the failure until real customers, transactions, patients, flights, or payments are affected.

This is why "big bang" replacement is dangerous. Switching everything at once concentrates risk. Gradual migration spreads risk over time.

## Integration Becomes the Dominant Cost

> **Why it matters:** When an enterprise cannot stop operating, the challenge is not building the new system but making old and new systems cooperate safely.

Because organisations cannot replace everything overnight, new systems must coexist with old ones.

This creates System Integration.

Modern applications must communicate with mainframes—large computers built to process enormous volumes of important transactions—programs written in older languages such as COBOL, commercial databases such as Oracle, enterprise resource planning systems such as SAP, custom applications, payment networks, medical devices, factory controllers, industrial robots, identity systems, reporting tools, and cloud platforms. An **enterprise resource planning (ERP) system** is shared software that connects activities such as finance, purchasing, inventory, manufacturing, sales, and human resources.

Integration is not glamorous, but it is where software becomes economically real.

A demo can stand alone. A production system must connect.

At integration boundaries, all the hidden complexity appears: data formats, authentication, permissions, latency, error handling, inconsistent records, old assumptions, missing documentation, and operational risk.

In many organisations, the biggest cost is not writing new software. It is making new software work safely with everything that already exists.

This is where technical debt and integration meet. A system can be valuable because it embodies business knowledge, while also expensive because that knowledge is trapped in forms that are hard to inspect, test, change, or connect. AI's opportunity is not merely to produce new code faster. It is to reduce the cost of recovering, documenting, testing, and safely changing knowledge already embedded in software.

## The Cloud Did Not Erase Legacy

It is natural to assume that the web, cloud computing, mobile apps, and modern APIs would have swept away these old systems by now. In some cases, they did. Many systems were replaced, simplified, or moved to modern platforms.

But in many large organisations, the opposite happened. The industry built new layers on top of old foundations.

A bank might add a mobile app while the account balance still lives in a core banking system. A manufacturer might add dashboards while planning and inventory still depend on a customised ERP system. A government agency might create an online portal while eligibility rules still run through older databases and batch processes. A cloud migration might move servers from one data centre to another without changing the shape of the application underneath.

This is not failure in a simple sense. Often it is the safest economic choice. Replacing the old system would be too risky, so the organisation wraps it, connects it, extends it, and gradually builds around it.

The result is a layered enterprise:

```text
Modern App
        |
API or Integration Layer
        |
Old System
        |
Embedded Business Knowledge
```

That layered history matters because AI enters the enterprise through the same paths. An AI agent cannot help a customer, approve a claim, reconcile an invoice, or explain a production problem unless it can reach the systems where the facts and rules live. The AI may be new, but the enterprise it must understand is old.

## Kinds of Legacy Integration Pain

Legacy pain appears in several forms. They often overlap, but separating them helps explain why system integration becomes so expensive.

This list is not meant to be exhaustive, but it covers the recurring cases that appear across public audits, SAP migration material, banking modernisation examples, healthcare interoperability work, industrial-control guidance, and legacy-modernisation tooling. The details differ by industry. The underlying pattern is the same: old systems continue to perform essential work while new systems must connect to them safely.

The first is the abandoned-system problem. A company depends on software whose vendor has disappeared, whose source code is poorly maintained, or whose technology is no longer supported. Every change becomes risky because there may be no safe source of expertise.

The second is the customised-enterprise-platform problem. SAP migration is a useful example. The vendor may still be healthy, but the customer's implementation has become unique after years of custom code, local rules, reports, interfaces, approvals, tax handling, and business exceptions. The pain is not "we have no vendor." It is "our version of the system has become part of how the business works."

The third is the core-transaction-system problem. A bank's core banking system, an insurance policy administration system, or an airline reservation platform may process money, bookings, claims, balances, and customer commitments every day. The system may be old, but it is also authoritative. The danger is not only technical failure. It is financial, legal, and reputational failure.

The fourth is the industrial-control problem. Factories, power stations, warehouses, hospitals, ports, and transport systems often contain specialised software connected to physical equipment: scanners, machines, robots, sensors, medical devices, or control systems. Here, integration is difficult because software changes may affect physical operations, safety, maintenance, and downtime.

The fifth is the data-and-reporting problem. A company may have dozens of databases, spreadsheets, reporting tools, data warehouses, and departmental systems that disagree about customers, products, costs, inventory, or revenue. Modernisation then becomes less about replacing one program and more about reconciling what the organisation believes to be true.

The sixth is the integration-sprawl problem. Over decades, companies connect systems through APIs, file transfers, message queues, nightly batch jobs, manual uploads, middleware, and one-off scripts. Each connection may have made sense when it was built. Together they become a maze.

SAP systems, old Oracle applications, customised ERPs, bank cores, insurance platforms, airline reservation systems, hospital systems, government case-management systems, and manufacturing control environments are therefore not separate curiosities. They are examples of the same deeper pattern: organisations depend on software that embodies business knowledge, but the knowledge is scattered across code, configuration, data, interfaces, documents, and people's memories.

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

> **Why it matters:** AI's largest legacy opportunity may be to make hidden knowledge visible before anyone tries to replace it.

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

AI can reduce the cost of rediscovering what an organisation already knows but has buried inside software. Its role is assistance: understand, document, test, wrap, integrate, and migrate gradually.

Another way to say this is that AI-assisted modernisation is not one action. It is a collection of narrower jobs: code analysis, documentation, test generation, data mapping, API wrapping, security review, cloud preparation, monitoring, and gradual migration. Vendor roadmaps often package these activities under the single phrase "AI-driven legacy modernisation", but readers should hear the phrase carefully. The useful question is always: which part of the modernisation problem is AI helping with?

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

## From Machine Code to Meaning

> **Why it matters:** Some legacy knowledge may survive only as executable behaviour, not as readable source code or documentation.

So far this chapter has mostly discussed source code: COBOL programs, SAP customisations, stored procedures, scripts, and configuration. Source code is the form programmers can read and edit.

But old organisations may not always have complete source code. They may have an executable program, an old library, a compiled component, or a running system whose original development environment has vanished. To understand why AI might help, we need one more representation change.

Source code is not what the machine ultimately runs. A compiler transforms source code into lower-level instructions:

```text
source code
↓
compiler
↓
machine code
↓
processor executes instructions
```

Machine code is made of bytes. Tools may show those bytes as hexadecimal numbers, such as:

```text
B8 2A 00 00 00 C3
```

On its own, this is not meaningful to most people. With the correct processor architecture and analysis tool, the bytes can be interpreted as instructions: move a value, compare two values, jump to another instruction, read memory, call a function, return a result.

For an AI system, the important point is that machine code is still information. It can be represented as bytes, instructions, control-flow graphs, function boundaries, strings, library calls, or embeddings:

```text
machine code
↓
bytes and instructions
↓
tokens or structured representations
↓
embeddings
↓
model
```

The first representation given to the model does not have to be raw bytes. A better architecture may use deterministic tools to lift machine code into a common **intermediate representation**, often shortened to IR. The purpose is to reduce hardware-specific clutter before asking AI to reason about meaning.

Different processors express similar behaviour differently:

```text
x86-64 instructions
ARM64 instructions
RISC-V instructions
```

A direct model would have to learn that several different instruction patterns can mean roughly the same computation. A reconstruction system can instead use specialised tools first:

```text
x86-64 machine code ──┐
ARM64 machine code  ──┼──→ common IR → AI model
RISC-V machine code ──┘
```

The IR may describe control flow, arithmetic, memory operations, function calls, and data movement in a more hardware-independent form. That does not solve the entire problem. It may tell the system that a value is multiplied by `0.9`, but not whether the value represents a customer discount, fuel estimate, or salary adjustment.

That suggests three layers:

```text
Layer 1: Machine
x86-64, ARM64, RISC-V instructions
↓
deterministic lifting

Layer 2: Common IR
control flow, memory operations, arithmetic, function calls
↓
AI reasoning

Layer 3: Semantic representation
customer, invoice, discount, price, business rule, workflow
↓
modern source code
```

Layer 3 is where AI may add something different from a conventional compiler or decompiler. A compiler moves from meaning toward implementation. AI reconstruction tries to move from implementation back toward probable meaning.

This suggests a powerful possibility. AI may not need to translate every low-level instruction into a line of Python. It may try to infer the higher-level behaviour represented by many instructions.

For example, hundreds of low-level operations might correspond to something a human would write as:

```python
total = sum(prices)
```

The low-level instructions may load values from memory, loop through them, add numbers, update a register, check whether the loop is finished, and store a result. A literal translation would be long and ugly. A useful reconstruction might say: this part of the program totals a collection of prices.

That distinction matters. The objective is not always:

```text
Recover every original line.
```

It may be:

```text
Understand the behaviour well enough to build an equivalent modern system.
```

This is the difference between literal translation and **semantic reconstruction**.

## Why Exact Source Code May Be Gone Forever

> **Why it matters:** AI can infer missing meaning, but it cannot recover information that compilation has destroyed with certainty.

Compilation throws away information.

A programmer may have written:

```python
annual_customer_discount = price * 0.9
```

After compilation, the executable may preserve the multiplication by `0.9`, but not the words `annual`, `customer`, `discount`, or `price`. Comments disappear. Formatting disappears. Helpful function names may disappear. Some abstractions are flattened or rearranged. Compiler optimisations may change the structure of the program while preserving its behaviour.

The machine code may reveal:

```text
take this value
multiply it by 0.9
store the result
```

It may not reveal why.

The missing meaning could be a customer discount, a salary adjustment, a fuel calculation, a tax rule, a probability estimate, or something else. If surrounding parts of the application contain words such as `Customer`, `Invoice`, `Price`, and `Discount`, the model has evidence. If the user interface says "Apply annual discount," the evidence becomes stronger. If the database contains a `customer_discount_rate` column, stronger again.

But the AI is no longer merely recovering information. It is probabilistically reconstructing information that may have been lost.

That is why legacy reconstruction must remain cautious. A model may make an excellent guess. It may also attach the wrong business meaning to a mathematically similar operation. The organisation needs evidence, review, tests, runtime observation, and domain experts who can confirm whether the recovered interpretation is right.

It helps to separate three objectives:

| Objective | Meaning | Plausibility |
| --- | --- | --- |
| A. Determine what the machine instructions do | Analyse the low-level behaviour | Often possible with tools and expertise |
| B. Generate understandable high-level code implementing that behaviour | Produce modern code that behaves the same way | Increasingly plausible with AI assistance and verification |
| C. Recover the exact original source code | Recreate names, comments, formatting, and original structure | Often impossible if the information was destroyed |

The economically important goal is usually B, not C. A bank does not necessarily need the exact lost source file from 1997. It needs to understand what the system does well enough to preserve required behaviour in a safer modern form.

## The `app.exe` Thought Experiment

> **Why it matters:** The future of legacy modernisation may be less about reading code line by line and more about reconstructing system behaviour from every available clue.

Imagine that a company possesses an old executable called:

```text
app.exe
```

The source code is incomplete. The original developer is gone. The program still runs on an old machine and performs a business function nobody wants to lose.

A future AI-assisted reconstruction system would not simply paste the whole executable into a chatbot. A realistic workflow would combine deterministic analysis tools with AI reasoning:

```text
app.exe
↓
executable analysis
↓
machine instructions
↓
functions and control flow
↓
data structures and external calls
↓
inferred program behaviour
↓
inferred business logic
↓
modern specification
↓
newly generated implementation
```

The system would not rely only on raw instructions. It could gather evidence from many sources:

- machine code
- embedded strings
- menus, forms, icons, and images
- database schemas
- files read and written by the program
- API calls
- operating-system calls
- network protocols
- configuration files
- logs
- observed runtime behaviour
- inputs and outputs from real examples

This is much more powerful than instruction-by-instruction decompilation. A traditional decompiler may help produce low-level readable code. Semantic reconstruction asks a larger question: what role does this program appear to play in the business?

For example, an executable may contain strings such as `Invoice Number`, `Customer ID`, `Late Fee`, and `Statement Date`. It may read a table containing invoices, call a printing function, and write a file sent nightly to another system. Even if the source code is gone, these clues help reconstruct meaning.

The reconstructed specification might say:

```text
This program calculates late fees for unpaid invoices,
generates monthly statements,
and exports a reconciliation file for finance.
```

That specification can then guide a modern implementation. The new system would still need tests, sample data, business-owner review, parallel runs against the old program, and careful rollout. AI can accelerate understanding. It does not remove the need to prove equivalence.

## How Such Models Could Be Trained

> **Why it matters:** Legacy reconstruction is speculative at the frontier, but the training signal is not mysterious.

One reason this idea is technically plausible is that training examples can be generated automatically.

Start with source code:

```text
def add_tax(price):
    return price * 1.08
```

Compile it:

```text
source code → compiler → machine code
```

Now the source and the compiled output form a training pair. The same program can be compiled with different compilers, optimisation settings, operating systems, and processor architectures such as x86, ARM, or RISC-V:

```text
source program
↓
many compilers and settings
↓
many machine-code versions
↓
training pairs for reconstruction
```

This does not require a human to label every instruction manually. The labels come from the fact that the source and compiled output are related by the compiler. A specialised system could learn many relationships among source code, machine instructions, function boundaries, library calls, control flow, and higher-level behaviour.

That does not mean a company would train an entirely new frontier model from nothing. More likely, a strong existing coding and reasoning model would be specialised with tools, data, and workflows for binary analysis and software reconstruction. Deterministic tools would do the cheap mechanical work first: identify functions, strings, libraries, resources, control flow, and known patterns. AI reasoning would then be concentrated on interpretation, abstraction, explanation, and proposed modern equivalents.

```text
deterministic analysis tools
↓
structured evidence
↓
AI interpretation where meaning is uncertain
↓
human review and verification
```

This architecture matters economically. Analysing a large application may be expensive, but the entire executable does not have to be handed to the most expensive model all at once. Cheaper tools can prepare the evidence. Retrieval can select relevant parts. The model can focus on the sections where judgement and reconstruction are valuable.

The comparison is not:

```text
AI reconstruction cost versus zero
```

It is:

```text
AI reconstruction cost
versus
months or years of programmers, analysts, consultants,
testers, and domain experts rediscovering the system by hand
```

Even tens or hundreds of thousands of dollars of compute and tooling could be attractive if it reduces the cost, duration, or risk of a multimillion-dollar modernisation programme.

This is another version of the book's central economic argument. AI does not have to make legacy reconstruction free. It only has to make the translation from existing knowledge to working modern software cheaper, faster, or safer than the human-intensive alternative.

## Side Story: Replacing a System That Cannot Stop

The United States air-traffic-control system is a useful test of this chapter's argument because it is a legacy system in which a careless replacement is unthinkable.

The Federal Aviation Administration (FAA) manages the National Airspace System: the connected people, procedures, communications, surveillance, weather, navigation, and computer systems that help controllers guide aircraft. Controllers rely on it to manage more than 45,000 flights a day. This is not one old computer that can be unplugged on Friday and replaced on Monday. It is a safety-critical network of many systems, facilities, aircraft operators, and trained people that must continue operating throughout every change.

The legacy risk is real, not a metaphor. In 2025, the U.S. Government Accountability Office (GAO) reported that the FAA had assessed 138 air-traffic-control systems: 51 were unsustainable and another 54 were potentially unsustainable. Some of those systems have critical effects on the safety and efficiency of the national airspace. The GAO also found that planned investments for several especially concerning systems were still at least six to ten years from completion as of May 2024. [This does not mean aircraft are controlled by one failing machine.](https://www.gao.gov/products/gao-25-108162) It means the replacement problem is large, urgent, and difficult to organise safely.

The FAA's **NextGen** programme shows what responsible modernisation looks like. It has introduced newer communications, navigation, surveillance, automation, and information-management capabilities over many years. One especially relevant component is **System Wide Information Management (SWIM)**: a data-sharing backbone designed to let diverse aviation systems publish information once and allow approved users to obtain it through a common connection. The FAA describes the earlier problem plainly: some legacy systems were unconnected or depended on custom point-to-point interfaces. In other words, even before modern AI, the practical answer was not to replace every system at once. It was to create safer ways for systems to share information while selected components were improved or replaced. [FAA NextGen](https://www.faa.gov/nextgen) and [FAA SWIM overview](https://www.faa.gov/air_traffic/technology/swim/overview).

AI is not the FAA's replacement strategy, and this book does not claim that an AI model should autonomously run air traffic control. The case is useful for a different reason: it shows where AI could lower the cost of a carefully supervised replacement programme.

| Replacement work        | How AI could assist                                                                     | What still requires evidence and human authority                                       |
| ----------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Understand old systems  | Summarise code, interfaces, incident reports, operating procedures, and dependency maps | Controllers and engineers confirm what the system actually does                        |
| Specify a new component | Turn recovered knowledge into draft requirements, diagrams, and test cases              | Safety specialists decide the required behaviour and safety boundaries                 |
| Build and integrate     | Help write adapters, data transformations, tools, and parts of new software             | Engineers review the design, cybersecurity, performance, and failure modes             |
| Prove equivalence       | Generate test scenarios; compare old and new outputs; flag unexpected differences       | Formal testing, simulation, certification, and operational acceptance establish safety |
| Move into service       | Help prepare rollout notes, monitoring rules, and rollback plans                        | Authorised operators decide when, where, and whether a change may go live              |

The important word is **assist**. AI can make the hidden work of replacement more visible and less expensive. It can help a team find an obscure dependency, translate a decades-old rule into a test, or compare thousands of records during a migration. It cannot supply proof that a new safety-critical system will behave safely in every operational condition. That proof comes from engineering discipline, simulation, testing, staged deployment, monitoring, and accountable human decisions.

Air traffic control therefore sharpens—not weakens—the book's claim. AI changes the economics of replacement by reducing the cost of understanding, specifying, building, testing, and migrating. It does not abolish the duty to replace physical equipment, certify critical functions, or protect people when a system is wrong.

## Gradual Migration

> **Why it matters:** A staged migration turns one enormous gamble into a sequence of smaller changes that can be observed, corrected, and reversed.

The safest path for many organisations is gradual migration: moving from an old system to a new one in controlled stages.

One module. One interface. One database. One workflow. One service. One report.

Each part is understood, documented, tested, and replaced or wrapped while the business continues operating.

AI can support this process by helping engineers inspect the old system and generate the scaffolding around it. It may suggest integration layers, create tests that capture existing behaviour, identify high-risk dependencies, and help translate old code into more modern forms.

The economic benefit is risk reduction.

Replacing software is not only a development cost. It is business risk. A failed migration can disrupt operations, damage customers, attract regulatory attention, and destroy trust. If AI can reduce the uncertainty around old systems, it preserves capital.

The same principle appeared at a much smaller scale while building an app. After many AI-assisted changes, the app did not need one dramatic rewrite. It needed cautious refactoring. Codex and I moved one slice at a time: preference storage behind service boundaries, device-specific checks behind a shared interface, study state behind one defined set of choices, and fragile screen behaviour behind clearer rules. Each change was narrow, built, tested, and committed as a separate unit.

That is app-scale evidence for the larger enterprise pattern. The safest improvement is often not to replace the whole system, but to understand one boundary, improve it, verify it, and then move to the next. AI made the work faster by inspecting code, suggesting refactors, and running through the change loop, but the discipline came from doing the migration gradually.

## Capital Preservation

> **Why it matters:** Existing systems are not only technical debt; they are expensive organisational capital that should be understood before it is discarded.

The phrase "capital preservation" usually means protecting money or assets already accumulated. It also applies to software.

Organisations have invested vast sums in software over decades. That investment includes code, data, processes, integrations, knowledge, training, and operational habits. Throwing it away is rarely simple.

If AI can help organisations preserve the value of existing systems while gradually modernising them, it creates economic value beyond developer productivity.

It protects prior investment.

It lowers migration risk.

It makes hidden knowledge accessible.

It helps old systems communicate with new ones.

It may turn legacy software from a burden into a source of recoverable institutional knowledge.

This is why system integration belongs near the centre of the book's engineering argument. The future of AI in software will not be built only in **greenfield applications**, projects started from a clean slate without an older system to preserve. It will be built in contact with old systems.

This chapter has described the problem: valuable knowledge trapped inside systems that cannot simply be replaced. AI may not erase those systems, but it can make them legible again.

That distinction matters. Once a legacy system becomes legible, the enterprise can capture what was previously hidden: business rules, data definitions, dependency maps, interface behaviour, test evidence, approval logic, and migration paths. Those are not one-time project artefacts. They are reusable enterprise knowledge.

That is the bridge to a later enterprise argument. Legacy integration is the wedge. The [[19-enterprise-intelligence-layer|Enterprise Intelligence Layer]] is the platform that emerges when the knowledge recovered from one modernisation project becomes reusable across the next project, and the next, and the next.

Before returning to that enterprise platform, we need one more engineering step: what happens when AI does not merely explain or generate, but acts through tools inside real systems?

## The Economic Lesson

Legacy systems teach humility.

It is easy to build a prototype. It is much harder to replace software that carries decades of business knowledge.

AI will matter in enterprise software not because it can generate impressive demos, but because it may reduce the cost of understanding, preserving, integrating, and carefully changing systems that cannot fail.

That is the economic lesson.

Enterprises already spend enormous sums on system integrators, SAP consultants, legacy specialists, testers, business analysts, architects, and migration teams because changing old software is expensive and risky. Much of that money is spent rediscovering knowledge the enterprise already owns but can no longer easily see.

If AI can make old systems legible, the cost structure changes. The company no longer pays only to rewrite code or connect applications. It begins reducing the cost of understanding itself.

That is a deeper economic story than "AI writes code". It is the possibility that AI may reduce one of the largest hidden costs in enterprise software: the cost of changing systems whose knowledge has become trapped.
