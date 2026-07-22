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

## From the Legacy Problem to the Enterprise Layer

[[15-legacy-problem|Chapter 13]] described several kinds of legacy integration pain: abandoned systems, customised enterprise platforms, core banking and transaction systems, industrial-control systems, data-and-reporting conflicts, and integration sprawl. SAP migration and bank-core modernisation are two anchor examples, but they point to the same deeper problem.

The organisation depends on software that embodies business knowledge, yet that knowledge is scattered across code, configuration, data, interfaces, documents, and people's memories.

This chapter uses the customised SAP case for a different purpose. [[15-legacy-problem|Chapter 13]] asked why legacy systems are hard to replace. This chapter asks what an enterprise must build if it wants AI to help with that class of problem again and again, rather than treating each migration as a one-off rescue project.

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

## From One Project to Reusable Infrastructure

For a lay reader, the easiest way to understand this is to imagine an old city.

The city still works. People live there. Roads, bridges, water pipes, power cables, tunnels, offices, and houses are all connected. But nobody has a complete map. Some records are old. Some changes were made during emergencies. Some pipes pass under buildings that were constructed later.

You cannot demolish the city and rebuild it over a weekend. You need to modernise it while people continue living there.

Enterprise systems are similar. A heavily customised SAP system, a core banking platform, or an old manufacturing system may still process essential work every day. The goal is not to tear it out recklessly. The goal is to understand it well enough to change it safely.

[[15-legacy-problem|Chapter 13]] described the practical AI jobs involved: translate old code, map dependencies, document business rules, wrap old functions behind safer interfaces, and migrate carefully. The enterprise-layer question is what remains after those jobs are done.

If the company treats every modernisation project as isolated consulting work, the knowledge disappears again when the project ends. If it captures the recovered rules, maps, tests, approvals, and integration patterns in reusable form, the project becomes the beginning of an enterprise memory.

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

There is also a historical irony. The system integrators who once helped enterprises connect mainframes to web applications, ERP systems to data warehouses, and old databases to mobile apps may now be asked to connect those same estates to AI. The work is different, but the pattern is familiar. Enterprises do not adopt new technology in a vacuum. They adopt it through the systems they already own.

In that sense, system integrators are not merely building AI. They are translating the past so AI can use it.

This is why the history of middleware matters. In the early 2000s, tools such as Forte, CORBA, enterprise application integration platforms, message brokers, and adapters were used to make heterogeneous enterprise systems communicate. [Forte's own interoperability documentation](https://docs.oracle.com/cd/E19957-01/806-6666-01/806-6666-01.pdf) described CORBA as a way for objects written in different languages and running on different operating systems and hardware to interact.

A bank might have a mainframe, a relational database, a Java application server, a reporting system, and a new web front end. None of these systems naturally understood the others. The system integrator's job was to build the bridges.

The AI version of that problem is similar, but not identical. The old middleware question was:

```text
How do we make different systems understand each other?
```

The new Enterprise AI question is:

```text
How do we make a model understand the enterprise?
```

The bridges are different. Instead of only message queues, adapters, service buses, and APIs, the new layer also needs retrieval systems, vector indexes, knowledge graphs, permission models, semantic search, prompt workflows, evaluation harnesses, audit logs, and human approval points.

This can be thought of as intelligence middleware. It does not replace SAP, mainframes, databases, or document repositories. It gives AI a controlled way to see them, retrieve from them, reason over them, and sometimes act through them.

The work also explains why commodity AI is not enough. A public model can know programming, accounting terminology, or general business practice. It does not automatically know a bank's lending exceptions, a manufacturer's plant-specific maintenance procedures, an airline's reservation integrations, or a company's twenty years of SAP customisations. That knowledge has to be exposed safely, organised carefully, governed properly, and embedded into real workflows.

This is the system integrator's opening. In the ERP era, the SI customised software and business processes around a packaged system. In the AI era, the SI may customise enterprise knowledge around a general model.

That is why legacy modernisation can become more than an IT clean-up project. It can become the first practical route toward Enterprise Intelligence. Each recovered business rule, dependency map, API wrapper, test suite, permission model, and audit trail makes the next AI project easier to trust.

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

## A Conservative Cost-Reduction Estimate

There is not yet enough independent evidence to say that an Enterprise Intelligence Layer reduces enterprise software-development cost by a precise percentage. The idea is too new, and most enterprise AI deployments are still reported as isolated projects rather than mature shared platforms.

But a conservative estimate can still be built from evidence that does exist.

[McKinsey has reported](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/breaking-technical-debts-vicious-cycle-to-modernize-your-business) that companies may pay an additional 10 percent to 20 percent on projects to address technical debt, and that CIOs estimate technical debt at 20 percent to 40 percent of the value of the technology estate before depreciation. McKinsey also gives examples where better technical-debt analysis produced hundreds of millions of dollars in trackable benefits over several years. Separately, [field experiments with GitHub Copilot at Microsoft and Accenture](https://mit-genai.pubpub.org/pub/v5iixksv/release/2) found suggestive productivity gains in completed pull requests, while [McKinsey found](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/unleashing-developer-productivity-with-generative-ai) that generative AI can make some coding, documentation, refactoring, and code-generation tasks much faster.

Those studies do not prove Enterprise Intelligence Layer ROI. They do show that the addressable cost pool is real: software teams lose time to understanding, rework, documentation gaps, testing, integration, technical debt, and old systems.

For a large SAP migration, core banking integration, or legacy modernisation programme, a cautious estimate might look like this:

```text
Total programme cost:                         US$100 million
Knowledge-heavy work:                         40% of programme
AI/EIS productivity improvement:              25% on that work
Value captured after review/governance cost:  50%

Estimated direct saving:
US$100m × 40% × 25% × 50% = US$5 million
```

That is only a 5 percent programme saving. It is deliberately cautious. It assumes that AI does not help every part of the project, that not every productivity gain becomes financial value, and that governance, integration, subscriptions, security, and change management all cost money.

But the calculation changes when knowledge is reused.

If the same recovered business rules, dependency maps, interface definitions, test cases, approval flows, and documentation are reused across five later projects, the value is no longer limited to the first programme. The enterprise is not merely reducing one consulting bill. It is turning repeated consulting work into institutional memory.

That is why the realistic economic range might be:

```text
Early project-level saving:        5% to 15%
Mature portfolio-level saving:     10% to 25%
Strategic upside:                  faster change, lower risk, more enterprise throughput
```

These are estimates, not proven results. Their purpose is to show the economic logic. The payoff is potentially large because enterprises already spend heavily on system integrators, SAP consultants, legacy specialists, migration teams, testers, business analysts, and architects to rediscover knowledge that the organisation already owns.

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

## The Economic Takeaway

The technical architecture matters, but the economic conclusion matters more.

The Enterprise Intelligence Layer is valuable because it may reduce the cost of software development inside the enterprise. It does this by reducing the cost of understanding the enterprise itself.

Today, many large organisations pay repeatedly for the same kind of discovery work. A new SAP migration, compliance project, core banking integration, reporting change, customer-service upgrade, or cloud programme begins with consultants and internal teams trying to answer familiar questions:

- What does the current system do?
- Where are the business rules?
- Which interfaces are fragile?
- What custom code exists?
- Which reports depend on which data?
- What must not change?
- How do we prove the new behaviour matches the old behaviour?

Each project pays to recover part of the enterprise's memory. Too often, that memory is captured in slide decks, spreadsheets, project folders, tickets, and consultant deliverables that are difficult to reuse when the next project begins.

The Enterprise Intelligence Layer changes the economic model:

```text
Before:
Every project pays to rediscover the enterprise.

After:
Every project improves the enterprise's reusable memory.
```

That is why the payoff can be large. The first AI-assisted modernisation project may save only a modest percentage of its own cost. But if the recovered knowledge becomes reusable across future projects, the enterprise begins compounding knowledge instead of repeatedly buying discovery.

In plain terms: EIS lowers the cost of software development by making the company easier to understand, easier to change, and less dependent on expensive rediscovery.
