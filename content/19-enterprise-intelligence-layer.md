---
title: "The Enterprise Intelligence Layer"
---

# The Enterprise Intelligence Layer

![The enterprise intelligence layer](<figures/FIG-17-01 Enterprise Intelligence Layer.png>)

Imagine asking an advanced AI to modernise a bank's old software.

It may work effectively with Python, accounting, database design and the usual ways software systems communicate. It may explain fifty-year-old COBOL code and propose a cleaner replacement. Then it encounters a routine that behaves differently at the end of every quarter.

The code does not explain why. The documentation is incomplete. The engineer who understood the decision retired years ago. Perhaps the behaviour reflects a regulation that has since been renamed, an old customer promise or a crisis nobody wants to repeat. Changing it may save money—or quietly break something essential.

The AI has general capability. It does not know the bank.

This distinction may determine which organisations capture the greatest value from AI. If companies can rent increasingly powerful models from the same small group of providers, their lasting advantage will not come from access to intelligence alone. It will come from making their own knowledge usable by that intelligence.

## What the Model Cannot Bring With It

Public attention naturally follows model releases, benchmark scores, context-window announcements, processors and data centres. They are visible. The most valuable knowledge inside a bank, hospital, airline, manufacturer or government agency is usually invisible to outsiders.

It lives in source code, policies, contracts, customer histories, production incidents, architecture decisions, exceptions, regulations and the memories of experienced employees. Some of it is written down. Much of it is scattered across incompatible systems or embodied in routines whose purpose has been forgotten.

A foundation model brings broad patterns learned from enormous amounts of data. It can often supply general language, programming and analytical capability more cheaply than an enterprise could create from scratch. The cost of training frontier models favours providers who can spread that investment across millions of users.

What the provider cannot supply is the organisation's representation of itself.

## The Layer Around the Model

Suppose the bank organises its source code, design documents, database structures, policies, incident reports, test suites, customer issues and release history. It records which material is current and who is allowed to see it. When the AI answers, the system preserves where the information came from, which tools were used and which person approved a consequential action. Generated changes are tested before they enter production; risky cases return to human review.

The model has not changed. The enterprise around it has.

```text
general AI capability
↓
organisational knowledge, permissions and verification
↓
applications, decisions and workflows
```

The middle of this chain is the **Enterprise Intelligence Layer**. It is not one product and it is not merely a chatbot connected to a folder of documents. It is the combination that makes general AI relevant, controlled and useful inside a particular organisation.

## Organisational Memory

Every organisation knows more than any one employee can remember. It also forgets more than it realises.

When an experienced person retires, some knowledge leaves with them. When teams work in separate systems, one department may not know that another already solved the same problem. When software is modified for decades without complete documentation, business policy becomes trapped inside code.

AI changes the economic value of that memory. Knowledge that was too scattered or expensive to retrieve may become useful if a system can find the relevant fragment at the moment a decision is made.

The distinction between a context window and enterprise knowledge is therefore crucial. A model's context window is the material it can consider during one working session. The enterprise's knowledge is the much larger universe from which that material must be selected.

```text
organisational knowledge
↓
the relevant, current and authorised material
↓
the model's working context
↓
an answer or action
```

A larger context window is like a larger desk. It helps only when the right papers are placed on it. Millions of irrelevant, contradictory or outdated words can make a capable model less useful. A smaller working space filled with exactly the right evidence may produce the better result.

The strategic problem is not raw context—how much a model can hold. It is **effective context**: how much useful information the organisation can deliver when it matters.

## Turning a Pile of Files Into Usable Knowledge

An enterprise intelligence layer requires four things: knowledge, organisation, retrieval and governance. In ordinary language, the company must gather what it knows, organise it, fetch what matters and control how it may be used.

The first two are easily underestimated. Documents must be current. Duplicates and contradictions must be handled. Related decisions, policies and systems must be connected. Access restrictions must follow the information. Otherwise the AI will reason from noise or reveal material to the wrong person.

Retrieval then selects the small amount needed for a particular task. The model should not receive everything; it should receive information that is relevant, authorised and reliable.

Governance decides what happens next. Who may ask the question? Which system may the AI touch? What must be logged? Which answer requires independent verification? When must the machine stop and wait for a human decision?

These controls are not administrative decoration around the intelligence. They are what allow intelligence to enter real work.

## From Transactions to Knowledge

Earlier generations of enterprise software transformed organisations by bringing finance, purchasing, inventory, manufacturing, sales and reporting into shared systems. The industry calls these **enterprise resource planning**, or ERP, systems. Their great achievement was making transactions more visible, consistent and measurable.

AI may do something comparable for knowledge.

Transactions are relatively structured. Knowledge is messier. It lives in meetings, exceptions, code comments, diagrams, messages and people's memories. If organisations can make that knowledge usable, one shared layer could support software engineering, customer service, legal review, compliance, finance, training and executive decisions.

This is a larger opportunity than adding a chatbot to every department. The same organisational memory can be reused across many forms of work.

## How the Layer Will Emerge

No sensible chief financial officer will approve a vast intelligence layer simply because the phrase sounds impressive. Large platforms are usually funded through smaller successes.

A software assistant may reduce the time required to understand an old system. A customer-service assistant may resolve routine enquiries. A legal assistant may accelerate contract review. A compliance system may gather evidence for a regulator. Each begins with a specific problem whose costs and benefits can be measured.

Over time, the organisation discovers that all these projects require similar foundations: identity, retrieval, permissions, logging, evaluation, monitoring, integration and human approval. The shared platform becomes visible after repeated local investments create the need for common infrastructure. Cloud computing often spread in the same way—one workload, then another, until a platform strategy became unavoidable.

Claims of enterprise-wide productivity should still be treated carefully. [McKinsey estimated in 2023](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier) that generative AI could add US\$2.6 trillion to US\$4.4 trillion annually across sixty-three uses. That is an estimate of potential, not proof of realised returns.

A serious business case begins with one workflow. Suppose it costs \$1 million a year. AI can assist with half the work; half the staff adopt it; and half of the measured improvement becomes actual financial value. The annual gross benefit is \$125,000, not \$1 million. The organisation must still subtract the cost of the model, integration, checking, security, training and organisational change.

The wider platform earns its place only if enough focused returns accumulate.

## Beyond Cutting Labour

Reducing cost is only one source of value. The larger opportunity may be expanding what an organisation can accomplish.

A bank may process more loans and investigate more fraud. A hospital may summarise more records, prepare compliance evidence faster and communicate more clearly with patients. A software company may resolve more incidents, update more documentation and release more dependable improvements.

This is **enterprise throughput**: the amount of valuable work completed in a given time. AI may matter most when it clears work that was never being done, not when it merely removes people from work already under way.

## The New Strategic Asset

Companies have always accumulated assets: capital, factories, patents, software, brands, customer relationships and skilled employees. In the AI era, they may compete through another asset—organisational knowledge that machines can actually use.

That knowledge must be accurate, current, connected to its source, protected by permissions and available at the moment of need. A directory full of old documents is not an intelligence layer. A living representation of why the organisation works as it does may be.

This leads to a hypothesis:

> When general AI capability can be rented, competitive advantage shifts towards the quality of the private context, working systems and human decisions connected to it.

People do not become less important in this picture. Their experience supplies the knowledge; their authority defines its permitted use; their judgement determines whether an action should survive.

Software development is an early test because software is already made of information. An AI that sees only code can suggest changes. An AI that can also use the requirements, incidents, regulations, customers and reasons behind the code can begin to understand what must be preserved.

The frontier model is the engine. Organisational knowledge and controls turn that engine into a vehicle. The next question is how quickly that vehicle may move—and where it could carry us in five and ten years.
