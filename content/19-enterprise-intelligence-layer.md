---
title: "The Enterprise Intelligence Layer"
---

# The Enterprise Intelligence Layer

![The enterprise intelligence layer](<figures/FIG-17-01 Enterprise Intelligence Layer.png>)

The next major enterprise software platform may not begin as a grand AI strategy. It may begin with a very ordinary problem: an old business system that everybody depends on and nobody fully understands.

Imagine a large manufacturing company that has used SAP for twenty-five years. SAP is not an abandoned product. The vendor still exists. The software is famous, widely used, and professionally supported. This is not the same as a small vendor disappearing and leaving customers stranded.

The problem is subtler.

To understand it, we first need to understand why ERP systems get customised at all.

ERP stands for enterprise resource planning. In ordinary language, an ERP system is the large central software system a company uses to run important business processes such as finance, purchasing, inventory, manufacturing, sales, payroll, reporting, and compliance. SAP is one of the most famous ERP systems in the world.

ERP systems are sold as standard packages, but no large company is completely standard. Two manufacturers may both make products, buy parts, pay suppliers, ship goods, and close their accounts every month. Yet the details differ. One company may approve purchases above $10,000 through a regional finance director. Another may require approval by product line, country, and factory. One warehouse may pick goods by pallet. Another may pick by serial number. One country may require a particular tax report. Another may require a different invoice format. One customer may receive special pricing because of a long-term contract. Another may require electronic delivery notices in a precise format before accepting a shipment.

The ERP package provides the common foundation. Customisation makes it fit the actual business.

For example, a company might customise SAP so that:

- invoices above a certain value follow a special approval path;
- purchases from approved suppliers move faster than purchases from new suppliers;
- inventory is valued differently for different countries;
- a factory receives production-planning reports in the exact format its managers use every morning;
- a warehouse scanner updates stock in a non-standard way;
- a bank payment file is generated in the format required by a local bank;
- a sales report combines standard SAP data with data from a separate customer system;
- an old acquisition continues using an interface built before the companies merged.

None of these examples sound dramatic. That is the point. Enterprise software becomes complicated through thousands of small, reasonable decisions. Each decision solves a local business problem. Over decades, those decisions accumulate into a system that is no longer merely "SAP." It is that company's particular version of SAP.

Over many years, the company has customised its SAP system to match the way it actually works. It has added custom reports, special approval rules, tax handling for different countries, warehouse exceptions, manufacturing workflows, supplier integrations, finance controls, old interfaces to banks, and thousands of lines of ABAP code. ABAP is SAP's programming language, used to extend and customise SAP systems.

Some of those changes are well documented. Many are not. Some were introduced after acquisitions. Some were created to satisfy regulators. Some exist because a factory manager, finance director, or supply-chain team needed the system to behave in a very specific way. The people who made those decisions may have retired or moved on.

Now the company faces modernisation pressure. It may need to move from an older SAP environment to S/4HANA, connect to cloud services, expose cleaner APIs, improve reporting, support mobile workflows, or integrate AI into finance, procurement, manufacturing, and customer service.

This sounds like a software upgrade. It is really an archaeology project.

The company does not merely need to move code from one place to another. It needs to recover the business knowledge hidden inside its own systems. Why does this invoice approval rule exist? Which custom report is still used? Which old interface feeds the warehouse? Which nightly batch job updates inventory before the factory opens? Which tax calculation depends on a local regulation? Which exception exists because a previous migration once failed?

This is where the Enterprise Intelligence Layer becomes real.

## The Custom SAP Problem

SAP is a useful example because it shows that "legacy" does not always mean obsolete, unsupported, or badly engineered. Sometimes legacy means deeply embedded.

A heavily customised SAP system may run finance, procurement, inventory, manufacturing, sales, logistics, and reporting. It may connect to payroll, banks, suppliers, tax authorities, warehouses, barcode scanners, factory systems, customer portals, business intelligence tools, and dozens of smaller applications built over decades.

To a lay reader, SAP may look like "the accounting system." Inside a large company, it can be closer to the nervous system. Purchase orders, invoices, inventory movements, production plans, approval chains, cost centres, revenue recognition, and management reports all pass through it.

That is why replacing it is hard. The risk is not only that the new software might crash. The greater risk is that the new system might behave almost the same as the old one while quietly losing one rule that matters.

Perhaps a report no longer matches the finance team's reconciliation process. Perhaps an inventory adjustment is posted in the wrong period. Perhaps a factory receives the wrong planning signal. Perhaps a tax field is interpreted differently. Perhaps an interface that nobody remembered still feeds a downstream system every night.

Modernisation fails when the organisation discovers too late that the old system contained knowledge nobody had written down.

## Not All Legacy Pain Is the Same

There are several kinds of legacy pain. They often overlap, but separating them helps readers understand why system integration becomes so expensive.

The first is the abandoned-system problem. A company depends on software whose vendor has disappeared, whose source code is poorly maintained, or whose technology is no longer supported. The pain is obvious: nobody wants to own it, nobody wants to change it, and every new requirement becomes dangerous.

The second is the customised-enterprise-platform problem. SAP migration is the clearest example. The vendor may still be healthy, but the customer's own implementation has become unique after years of custom code, local rules, reports, interfaces, approvals, tax handling, and business exceptions. The pain is not "we have no vendor." It is "our version of the system has become part of how the business works."

The third is the core-transaction-system problem. A bank's core banking system, an insurance policy administration system, or an airline reservation platform may process money, bookings, claims, balances, and customer commitments every day. The system may be old, but it is also authoritative. The danger is not only technical failure. It is financial, legal, and reputational failure.

The fourth is the industrial-control problem. Factories, power stations, warehouses, hospitals, ports, and transport systems often contain specialised software connected to physical equipment: scanners, machines, robots, sensors, medical devices, or control systems. Here, integration is difficult because software changes may affect physical operations, safety, maintenance, and downtime.

The fifth is the data-and-reporting problem. A company may have dozens of databases, spreadsheets, reporting tools, data warehouses, and departmental systems that disagree about customers, products, costs, inventory, or revenue. Modernisation then becomes less about replacing one program and more about reconciling what the organisation believes to be true.

The sixth is the integration-sprawl problem. Over decades, companies connect systems through APIs, file transfers, message queues, nightly batch jobs, manual uploads, middleware, and one-off scripts. Each connection may have made sense when it was built. Together they become a maze.

SAP ECC, old Oracle systems, customised ERPs, core banking systems, insurance platforms, airline reservation systems, hospital systems, government case-management systems, and manufacturing control environments are therefore not separate curiosities. They are examples of the same deeper pattern: the organisation depends on software that embodies business knowledge, but the knowledge is scattered across code, configuration, data, interfaces, documents, and people's memories.

That distinction matters because it prevents the argument from becoming unfair to SAP or any other serious enterprise vendor. SAP itself has a real modernisation path. SAP has announced [mainstream maintenance for SAP Business Suite 7 core applications until the end of 2027](https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html), with optional extended maintenance until the end of 2030. SAP also provides S/4HANA conversion guidance covering readiness checks, simplification items, add-on compatibility, sizing, and custom-code analysis.

The existence of those tools proves the point. If migration were trivial, customers would not need custom-code analysis, readiness checks, simplification databases, conversion guides, and years of planning.

## Why This Becomes the Killer App

The Enterprise Intelligence Layer can sound abstract if it is introduced as "a company-wide AI brain." No chief financial officer will fund that phrase.

But a painful modernisation project is different. It has deadlines, risks, costs, consultants, testing plans, business owners, and measurable outcomes. The company already knows it must do something.

This is why legacy integration may become the starting point for Enterprise Intelligence.

The first business case is not:

```text
Build an Enterprise Intelligence Layer.
```

It is:

```text
Reduce the cost and risk of understanding, integrating, testing,
and modernising this business-critical system.
```

That is concrete. It has a budget. It has an owner. It has a pain point.

The AI does not begin by replacing SAP. It begins by helping humans understand the customised environment around SAP. It reads old ABAP programs, configuration notes, interface specifications, database tables, test cases, incident reports, support tickets, finance policies, warehouse procedures, and migration documents. It helps answer questions that previously required scarce specialists:

- Which custom programs still matter?
- Which reports are no longer used?
- Which interfaces connect to which systems?
- Which business rules are embedded in code?
- Which workflows depend on country-specific or customer-specific exceptions?
- Which parts can be wrapped with APIs?
- Which behaviours must be preserved exactly?
- Which areas are too risky to migrate first?

This is not glamorous AI. It is economically powerful AI.

## AI as Archaeologist, Translator, and Mapmaker

For a lay reader, the easiest way to understand this is to imagine an old city.

The city still works. People live there. Roads, bridges, water pipes, power cables, tunnels, offices, and houses are all connected. But nobody has a complete map. Some records are old. Some changes were made during emergencies. Some pipes pass under buildings that were constructed later.

You cannot demolish the city and rebuild it over a weekend. You need to modernise it while people continue living there.

Enterprise systems are similar. A heavily customised SAP system, a core banking platform, or an old manufacturing system may still process essential work every day. The goal is not to tear it out recklessly. The goal is to understand it well enough to change it safely.

AI can help in several practical roles.

As an archaeologist, it examines old code and documents to recover what happened. As a translator, it explains technical logic in ordinary language for business people. As a mapmaker, it traces dependencies between systems. As a documentation assistant, it turns code and tickets into clearer specifications. As a wrapper builder, it helps expose old functions through modern APIs. As a testing assistant, it helps create checks that compare old and new behaviour.

The pattern looks like this:

```text
Legacy System Pain
        |
        v
AI-Assisted Understanding
        |
        v
Business Rule Extraction
        |
        v
Dependency Mapping
        |
        v
API Wrappers and Integration Layers
        |
        v
Tests, Dual Running, and Human Review
        |
        v
Gradual Migration
        |
        v
Reusable Enterprise Knowledge
        |
        v
Enterprise Intelligence Layer
```

Notice what happens. The company starts with one painful project. But in order to solve it, the company begins building reusable knowledge infrastructure: indexed code, linked documents, permissions, retrieval, testing, audit trails, and business-rule libraries.

That infrastructure is the beginning of the Enterprise Intelligence Layer.

## The Model Is Not the Enterprise

A foundation model contains broad learned patterns from enormous amounts of data. It may know general programming concepts, SQL, Python, accounting vocabulary, REST APIs, software architecture, and the public meaning of ERP.

It does not automatically know the enterprise.

It does not know why a particular company customised its invoice approval workflow in 2008. It does not know which warehouse report the Singapore team still depends on every morning. It does not know that a strange field in a data feed exists because a regulator once required it. It does not know that an old interface must remain active until a supplier finishes its own migration.

For most organisations, the realistic architecture is therefore:

```text
Foundation Model
        |
        v
Enterprise Intelligence Layer
        |
        v
Enterprise Applications and Workflows
```

The foundation model supplies general capability. The Enterprise Intelligence Layer supplies relevance, permission, memory, evidence, and control. The applications and workflows turn that into business action.

The strategic question is not whether every company should build its own GPT, Claude, Gemini, or Grok. Most will not. The better question is what knowledge the enterprise must organise so that any capable model can become useful inside the business.

## What the Enterprise Must Own

The enterprise must own its representation of itself. That representation includes code, documents, business rules, policies, contracts, customer knowledge, product knowledge, system architecture, operational history, incident reports, regulatory obligations, security permissions, approval workflows, and audit trails.

This is not merely data. It is institutional memory.

When an experienced employee retires, changes job, or forgets why a decision was made, some of that memory disappears. When a system has been modified for decades without complete documentation, business knowledge becomes trapped inside code. When teams work in separate tools, the organisation knows more than any one person can access.

AI changes the value of that memory. Knowledge that was once scattered, buried, or informal becomes economically valuable if it can be retrieved, permissioned, interpreted, and used by AI systems.

## Context Window Versus Enterprise Knowledge

A model's context window is the information it can consider during one reasoning session. Enterprise knowledge is the much larger universe of information held by the organisation. The two are related, but not identical.

```text
Enterprise Knowledge
        |
        v
Knowledge Organisation
        |
        v
Retrieval
        |
        v
Relevant Context
        |
        v
AI Context Window
        |
        v
Answer or Action
```

The context window is working memory. Enterprise knowledge is long-term organisational memory.

The economic challenge is not simply to buy a model with a larger context window. Larger context helps only if the right information is placed inside it. A model that can read millions of tokens may still fail if it receives irrelevant, outdated, contradictory, or unauthorised material. A model with a smaller context window may perform better if the enterprise retrieves exactly the right information at the right time.

This is the difference between raw context and effective context. Raw context is how much information the model can hold. Effective context is how much relevant information the system can actually use.

In a customised SAP migration, raw context might mean loading thousands of pages of documentation into the model. Effective context means retrieving the exact custom program, configuration note, interface definition, test case, and finance policy relevant to the question being asked.

The future competition may not be won by the organisation with the largest context window. It may be won by the organisation with the best enterprise knowledge architecture.

## Enterprise Knowledge Architecture

An Enterprise Intelligence Layer rests on four foundations: knowledge, organisation, retrieval, and governance.

The organisation first needs knowledge in machine-usable form: code, documents, decisions, policies, logs, contracts, diagrams, process descriptions, tickets, messages, meeting transcripts, and structured data. It then needs to organise that knowledge so AI systems do not reason from noise. Material must be cleaned, indexed, tagged, permissioned, updated, deduplicated, summarised, and connected.

Retrieval is the next foundation. The system must decide which knowledge matters for each task, because the AI should not receive everything. It should receive what is relevant, current, authorised, and useful.

Governance turns this into an enterprise system rather than a clever search tool. The organisation must control who can ask what, which systems may be touched, which answers require verification, what must be logged, and where human approval is required.

These controls are not bureaucracy added after the fact. They are what allow AI to enter real work. A system that can suggest changes to finance workflows, procurement rules, production planning, or payment interfaces must be governed. Otherwise it is not enterprise software. It is a risk.

## ERP Digitised Transactions. AI Digitises Knowledge.

Enterprise software history provides a useful comparison. ERP systems digitised transactions. They standardised finance, procurement, inventory, manufacturing, sales, and reporting. Their value came from making business processes more visible, consistent, and measurable.

Enterprise AI is different. It does not merely digitise transactions. It digitises knowledge.

Transactions are relatively structured. Knowledge is messier. It lives in code, documents, meetings, decisions, exceptions, comments, diagrams, and people's memories. That makes Enterprise AI harder to implement than simply connecting a model to a document repository. It also makes the potential payoff broader.

If an organisation can make its knowledge usable by AI, the same layer can support software engineering, customer support, legal review, compliance, finance, product management, operations, training, and executive decision-making. The business case is not one application. It is the reuse of organisational knowledge across many workflows.

This is why a customised SAP modernisation project matters beyond SAP. The work required to understand the old system creates knowledge assets that other projects can reuse. Once the finance rules, procurement exceptions, interface maps, approval workflows, and test evidence are organised for one migration, they become useful for reporting, compliance, support, training, auditing, and future development.

## How It Will Be Funded

Most large enterprises will not begin by approving a vast Enterprise Intelligence Layer because the concept sounds impressive. Chief financial officers do not buy visions. They buy business cases.

The more likely path is incremental. A software engineering assistant saves engineering time. A customer-support assistant handles common enquiries. A legal assistant accelerates contract review. A compliance assistant helps prepare evidence and reports.

But the strongest first business case may be legacy modernisation, because the pain is already funded.

A company facing an SAP migration, a core banking integration, or a legacy manufacturing upgrade already expects to spend money on consultants, testing, documentation, custom-code analysis, business workshops, migration tools, integration work, and risk management. AI does not need to invent the problem. The problem is already on the table.

If AI can reduce the effort required to understand custom code, map dependencies, generate documentation, create test cases, expose stable APIs, and compare old and new behaviour, it has a measurable role in a project the enterprise already knows it must do.

Over time, the organisation discovers that these projects require similar foundations: identity, retrieval, permissions, logging, evaluation, monitoring, integration, human approval, and audit trails. The shared layer emerges because repeated local investments create a need for common infrastructure.

This is how many major enterprise technologies spread. Cloud computing did not always begin as a single company-wide strategy. Often one application moved first, then another, then another. Eventually the platform became obvious. Enterprise AI may follow the same pattern.

## The ROI Portfolio

Enterprise AI should not be justified by vague claims that everyone will become more productive. A more serious method is to treat it as a portfolio of use cases.

This is also how current evidence should be read. [McKinsey estimated in 2023](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier) that generative AI could add US\$2.6 trillion to US\$4.4 trillion annually across sixty-three use cases, with much of the value concentrated in customer operations, marketing and sales, software engineering, and research and development. That is not proof of realised enterprise-wide ROI. It is evidence that the most credible business cases are likely to begin with specific workflows that have measurable outcomes.

For each workflow, the organisation can estimate the current cost base, the share of work addressable by AI, the measured productivity improvement, realistic adoption, how much of the improvement becomes financial value, and the cost of subscriptions, inference, integration, governance, security, training, and change management.

The basic logic is:

```text
Annual Gross Benefit
= Addressable Cost Base
× Adoption Rate
× Productivity Improvement
× Capture Rate
```

Then the organisation subtracts the cost of running and governing the system. This prevents the book from claiming that enterprise-wide AI ROI is already proven. The evidence is stronger for focused workflows than for complete enterprise transformation.

Legacy modernisation fits this portfolio well because the benefits are not only labour savings. They include reduced migration risk, faster documentation, fewer missed dependencies, better test coverage, safer integration, lower reliance on scarce specialists, and preservation of accumulated business knowledge.

## Beyond Cutting Labour

Reducing cost is only one source of value. The larger opportunity may be expanding what an organisation can accomplish.

A bank may process more loans and investigate more fraud. A hospital may summarise more records, prepare compliance evidence faster, and communicate more clearly with patients. A manufacturer may connect planning, inventory, suppliers, production lines, and maintenance history more effectively. A company modernising SAP may complete more upgrades, expose more APIs, retire more unused custom code, and respond faster to regulatory change.

This is enterprise throughput: the amount of valuable work completed in a given time.

AI may matter most when it clears work that was never being done, not when it merely removes people from work already under way. Many companies have old reports nobody dares remove, interfaces nobody wants to touch, documentation nobody has time to write, and process exceptions nobody fully understands. AI can turn some of that neglected work into addressable work.

## The New Strategic Asset

Historically, companies accumulated capital, factories, machinery, patents, software, brands, customer relationships, and skilled employees. In the AI era, they may also compete by accumulating high-quality machine-readable organisational knowledge.

The strategic asset is not merely documents. It is knowledge that is accurate, current, permissioned, retrievable, interpretable, auditable, and usable by AI.

That leads to the Enterprise Context Hypothesis:

> In the AI era, the competitive advantage of an enterprise may depend less on the number of software engineers it employs and more on the completeness, quality, governance, and accessibility of the organisational context available to its AI systems.

This does not mean people stop mattering. It means people increasingly work through systems that can remember, retrieve, interpret, and apply what the organisation knows.

## Why This Matters for Software Development

Software development is one of the clearest early examples because software is already made of information. An enterprise AI system that understands code without understanding the business is useful but limited. An enterprise AI system that understands the code, the architecture, the requirements, the incidents, the customers, the regulations, and the business rules becomes much more powerful.

The customised SAP example shows the broader future. AI does not create value merely by writing new code. It creates value when it helps the enterprise understand what already exists, decide what must be preserved, and change systems without destroying the knowledge embedded inside them.

The frontier model is the engine. The Enterprise Intelligence Layer is the vehicle. A painful legacy modernisation project may be the road that gets the vehicle moving.
