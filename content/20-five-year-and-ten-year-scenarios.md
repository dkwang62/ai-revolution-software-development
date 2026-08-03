---
title: "Five-Year and Ten-Year Scenarios"
---

![Five-year and ten-year scenarios](<figures/FIG-19-01 Future Scenarios.png>)

## A Glimpse of Abundant Intelligence

The preceding chapters described the economic and organisational system forming around AI. This chapter offers conditional scenarios, not a promise or a timetable. It asks what might become possible if capability improves, costs fall, and verification, integration, and institutions keep pace.

Imagine an ordinary morning in this future. A teacher is worried about one student who understands spoken explanations but struggles with written exercises. She does not search an app store for a product designed for the average learner. She describes the difficulty, shows examples of the student's work, and asks for a two-week experiment. An AI system creates a small learning tool, checks it against the school's privacy rules, and adapts it as evidence arrives. The software may be discarded when it has served its purpose.

At a clinic, a doctor prepares for an unusual case. The AI does not replace the diagnosis or carry legal responsibility. It gathers the relevant history, finds comparable research, identifies contradictions and shows where the evidence is weak. Expertise that once required access to a major medical centre becomes available in a smaller community, while the doctor remains responsible for the decision.

In a laboratory, researchers describe the properties they need from a new material. Models explore possibilities, simulations reject weak candidates and robotic equipment tests the most promising. The scientists spend less time searching blindly and more time deciding which questions matter and whether the evidence deserves belief.

At a small factory, the owner wants to reduce waste from one production line. The system studies sensor records, proposes a change, simulates the consequences, generates the software and prepares a bounded trial. Nothing touches the real machinery until safety rules are satisfied and an authorised person approves it.

The scenes share one pattern. AI makes it cheap to propose, explore, and create; evidence, tests, permission, and professional judgement decide what may be trusted or done. Simple work is handled locally and cheaply. Difficult problems receive more reasoning, specialised models, and remote computing. The system remembers enough of the task to continue, but access to private information remains controlled.

This is one optimistic scenario for abundant intelligence. It is not a world without work, disagreement, illness, or failure. It is a world in which expertise and the power to create are no longer as tightly constrained by the number of specialists available. Millions of ideas that once died before implementation can be tested. Capabilities once reserved for governments, universities, and large corporations become available to small organisations and individuals.

The possibility is enormous. So are the obstacles—but they do not all require a scientific miracle.

## The Revolution Does Not Require Fusion

Abundant intelligence does not mean infinite, free computation. It means that the cost of a dependable answer or completed task falls low enough for vastly more tasks to become worthwhile.

That can happen through improvements already visible: smaller specialised models, hybrid architectures, adaptive reasoning, reusable memory, more efficient processors, faster connections, better utilisation of data centres and movement of simple work onto personal devices. None requires nuclear fusion. Fusion would expand the energy frontier if it became practical, but the AI trajectory does not depend upon it.

The International Energy Agency reported in 2026 that energy use per AI task had recently been falling by at least an order of magnitude each year. At the same time, more people were using AI and the tasks were becoming more demanding, so electricity consumption from data centres was still rising rapidly. The IEA expects data-centre electricity demand to double by 2030 and consumption in AI-focused facilities to triple. [IEA, _Key Questions on Energy and AI_](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

This is not evidence that energy is unimportant. It shows how abundance usually arrives. Efficiency lowers the cost of one task; lower cost releases demand for millions of new tasks; investment then flows into processors, memory, power generation and grids. Existing energy technologies—renewables, storage, conventional generation and nuclear fission—can all contribute while efficiency continues to improve. The challenge is large-scale investment and construction, not waiting for limitless energy.

The essential measure is not energy per token or the advertised price of a model. It is **cost per dependable completed task**:

```text
model computation
+ reasoning
+ context and memory
+ tools
+ verification
+ integration
+ correction
+ cost of failure
```

A cheap answer that requires hours of professional repair is expensive intelligence. A more costly agent that finishes the task, supplies evidence and survives checking may be remarkably cheap.

Once this total cost falls below the value of the result, another use of AI becomes economically possible. That is the mechanism that can carry intelligence from scarcity towards abundance.

## The Obstacles Are a Road Map

Five barriers stand between today's impressive models and the world just imagined. Each is serious. None is equivalent to demanding a machine that knows everything or an unlimited source of energy.

### Capability Must Stay Coherent for Longer

AI can perform astonishing short, clearly defined tasks and still lose the thread during a long, unfamiliar project. It may follow the easiest interpretation, repeat a failed approach, or declare success too early.

The route forward is already taking shape. Models are improving, but they are also being placed inside systems that divide work into stages, preserve state, gather evidence, use specialised tools and escalate when confidence is insufficient. A single perfect intelligence is not required if several bounded components can cooperate and expose their failures.

### Reliability Must Be Engineered

Abundance does not require every model response to be correct. Modern society already relies on imperfect people and machines because systems are designed to detect and contain error.

AI can be surrounded by tests, mathematical checks, permission rules, simulations, independent checks, audit trails, and human review. The model proposes; deterministic software checks what can be checked; people retain authority where consequences demand it.

The path to dependable AI therefore resembles the history of aviation more than the discovery of magic. Aircraft became safe through better machines, procedures, instruments, maintenance, training, investigation and regulation working together. Reliability emerged from the system.

### Intelligence Needs the Right Context

A general model does not arrive knowing a child's learning history, a hospital's procedures or why an old bank routine behaves differently at quarter-end.

Organisations must gather what they know, keep it current, connect it to its source, and control who may use it. Better retrieval—finding the few relevant records from a much larger collection—and memory can place the right information before the model without exposing everything. This work is difficult, but it uses familiar disciplines: records, databases, identity, permissions, documentation, and software integration.

### The Physical World Moves More Slowly

Digital abundance will arrive before material abundance. Software can be copied almost without cost; food, houses, medicine and machines still require energy, materials, factories and transport.

Robots also face a harder world than software agents. A warehouse floor is structured. A family home is not. A mistake in a document may be reversible; a mistake involving a vehicle, surgical tool or frail person may not be.

Progress therefore need not wait for a universal human-shaped robot. Specialised machines can spread first: laboratory equipment, warehouse vehicles, agricultural systems, inspection devices and machines designed for one controlled process. Each useful deployment expands physical capability without requiring robotics to solve every human environment at once.

### Abundance Must Be Distributed

Even if intelligence becomes cheap to produce, access may remain concentrated. Processors, models, data centres, energy and organisational data can be owned by a small number of companies or governments.

Competition, public infrastructure, education, open technologies, regulation and new business models will influence who benefits. This is the least purely technical obstacle and perhaps the most important. Technology can enlarge the amount society is able to produce. It cannot decide how the gains are shared.

The barriers can therefore be summarised in four sentences:

> **Technology determines capability. Cost determines diffusion. Verification determines trust. Institutions determine distribution.**

## Signals From 2026

A forecast becomes more than a guess when visible forces are already pushing in the same direction. Four signals in 2026 ground the scenarios that follow.

First, the mathematics is seeking cheaper ways to remember. The Transformer became powerful partly because **attention** lets a model compare different parts of an input. But attention becomes expensive when the input is very long. Researchers are therefore testing hybrids: systems that combine attention with other ways of carrying useful information forward, such as recurrent processing and learned long-term memory. **State-space models** such as Mamba and memory research such as Google's Titans are examples. This does not prove that the Transformer will disappear. It suggests that attention may become one useful component inside a larger system. [Gu and Dao, _Mamba_](https://arxiv.org/abs/2312.00752); [Behrouz, Zhong and Mirrokni, _Titans_](https://research.google/pubs/titans-learning-to-memorize-at-test-time/)

Second, reasoning is becoming adaptive. A system need not spend the same effort on every task. It can answer a simple request quickly and reserve more steps, tests, or competing attempts for a difficult one. The aim is not maximum reasoning everywhere, but the lowest total cost for a dependable result.

Third, the AI computer is becoming a coordinated system. A fast processor is of little use if data cannot reach it quickly enough. New high-speed memory, smaller linked chips, faster connections, specialised AI processors, and lower-precision numbers all reduce the time and energy needed to move and calculate information. Manufacturers now describe complete platforms combining processors, networking, memory, and storage—not simply one faster chip. [Micron, “HBM4”](https://www.micron.com/products/memory/hbm/hbm4); [NVIDIA, “Rubin”](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

Fourth, capital and integration are testing whether the ideas matter. Alphabet is combining models, its own Tensor Processing Units, cloud infrastructure, and mass-market products. NVIDIA is expanding from GPUs into complete computing platforms. Microsoft is integrating agents into cloud, office, and development tools. Anthropic's Claude Code represents a software-centred bet on agents that work across real projects. SpaceX and xAI represent the attempt to connect AI with physical engineering under common control.

These companies are examples, not share recommendations. Large bets can produce advantage, waste, or both. Their importance is that mathematics, hardware, distribution, software integration, and physical capability are being pursued together. The direction is visible even though the winners are not. [Alphabet, 2025 Q4 earnings call](https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx); [Microsoft, FY2026 Q3 earnings](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3); [Anthropic, Series G announcement](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation); [SpaceX, “xAI Joins SpaceX”](https://x.ai/news/xai-joins-spacex)

| Visible signal | Possible consequence |
| --- | --- |
| Adaptive reasoning | Difficult tasks receive more effort without charging every request the highest cost |
| Hybrid memory | Agents remain coherent across longer projects |
| HBM and custom accelerators | Cost and waiting time fall per useful result |
| Coding agents | Software creation moves from isolated answers towards checked workflows |
| Capital and integration | AI becomes ordinary infrastructure rather than a separate application |

These signals do not prove the forecast. They show that research, investment, and commercial integration are already moving in its direction.

## The Battle to Become the Interface for Enterprise Intent

For decades, the centre of enterprise power has been the application in which work is recorded: the ERP system, customer database, payroll system, spreadsheet, document store, email system, or specialised operational tool. People had to learn each system's screens, fields, reports, and procedures. A change in business often required a costly change in several of them.

AI may move the centre of gravity upward. The important question becomes: **where does a person begin when they want the organisation to do something new?** If they begin with an agent that understands the goal, gathers the relevant knowledge, proposes a workflow, and calls approved tools, that agent becomes the new interface to **enterprise intent**—the organisation's stated purpose for a piece of work.

```text
people with a goal
↓
AI agent and working interface
↓
model-neutral Enterprise Intelligence Layer
(knowledge, permissions, evidence, and tool connections)
↓
approved enterprise tools: existing systems, records, and infrastructure
```

The systems do not disappear and do not need to be replaced. They still hold customer records, contracts, accounts, transactions, documents, permissions, and operational history; many also perform specialised work reliably. In this future, they are approved tools the agent can use. The Enterprise Intelligence Layer is the superglue that helps the agent find knowledge, respect permissions, gather evidence, and coordinate action across a messy collection of old and new systems.

This is the strategic risk for a company that owns established software. The risk is not that a useful existing system suddenly becomes worthless. It is that a closed or awkward system becomes less relevant when people can accomplish the same business goal through an agent that uses more open tools. In the opposite direction, an incumbent can remain central by making its data and functions easy for the best approved agents to use. Owning the intelligence is not the only path to value; becoming an open, trusted system of record and a dependable tool is another.

No vendor is guaranteed either role. Frontier model companies, AI-native coding environments, workplace-software incumbents, cloud platforms, and open-source systems can all compete at different layers. The likely future is not one giant replacement system. It is a changing collection of models and agents above a more durable, model-neutral layer of enterprise memory, permissions, tools, and records.

## Five Years: Intelligence Becomes Ordinary Infrastructure

By approximately 2031, AI is likely to become less visible precisely because it is used more widely.

People will increasingly begin software projects by describing behaviour, supplying examples and defining tests. Agents will work across files, tools and existing systems. Routine tasks will use inexpensive models and little additional reasoning; difficult or consequential tasks will receive more computation and tighter supervision.

Inside organisations, more work may begin with an agent rather than inside one named application. An employee might ask, “Prepare the merger integration plan, identify conflicting customer records, show the approvals required, and draft the changes for review.” The agent would use the existing customer, document, approval, and reporting systems as tools. It would interpret the intention, retrieve the relevant context, and coordinate approved work across them. Which model performs that work may change over time; the organisation's knowledge, permissions, records, and tools should not have to change with it.

The largest early gains may come from work that organisations already know how to verify: code maintenance, documentation, customer support, analysis, compliance evidence and well-defined administrative processes. Legacy modernisation may become especially important because AI can help recover knowledge from software that no one fully understands.

Professional engineers will remain essential, but more of their time will move towards architecture, integration, security and deciding which generated changes deserve to survive. Domain experts will initiate more projects themselves. The distinction between user and builder will begin to blur.

This future will arrive unevenly. A teacher's temporary learning tool may be generated and used in hours. A change to a medical or payment system may still require months of evidence and approval. The model can be identical while the cost of trust differs completely.

By 2031, the most successful systems may be those that make AI feel least like magic and most like dependable infrastructure.

## Ten Years: Intention Becomes an Interface

By approximately 2036, the underlying model may no longer be described simply as a Transformer. Attention could remain one organ inside a hybrid system with persistent memory, recurrence, specialised reasoning, tools and several models operating at different costs.

The enterprise consequence could be just as significant. A company may keep its accounting system, customer platform, document store, factory-control system, and many specialist tools because each continues to do something valuable. But employees may increasingly begin with an agent that understands the goal and uses those systems as tools to coordinate approved action across them.

The larger change would be the completion of a dependable chain:

```text
human intention
↓
AI interpretation and planning
↓
software instructions
↓
tests, permissions and verification
↓
action by digital or physical machines
```

Computing began by forcing people to express intention in the language of the machine. This chain would allow machines to meet people much closer to the language of human purpose.

Software would be the first great case because it is already made of information. Science, administration and carefully bounded physical systems could follow. The change would not depend on AI developing consciousness or becoming an all-knowing genie. It would depend on intelligence becoming sufficiently capable, inexpensive and well controlled to coordinate many existing technologies.

## Where the Story Can Branch

Two variables determine how quickly the promise is realised: the rate of capability improvement and the cost of verification and integration.

|                                   | Verification and integration remain expensive                                                                           | Verification and integration become much cheaper                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Capability improves gradually** | **Bounded assistant:** AI remains valuable in well-specified, low-risk tasks, with people carrying most review.         | **Ordinary infrastructure:** AI becomes as routine as compilers, search and version control across much of development.  |
| **Capability improves rapidly**   | **Generation outruns trust:** output explodes, but security, maintenance and coherence become the bottlenecks.          | **Agentic organisation:** intent-driven creation and coordinated work become plausible under human authority.           |

Different parts of society can occupy different quadrants simultaneously. The path to abundance is unlikely to be one dramatic crossing. It will be a succession of tasks becoming cheap and dependable enough to move from one quadrant to another.

## Beyond Ten Years: At the Gates of Abundance

If those movements continue, AI eventually stops looking like a separate industry. Intelligence becomes an ordinary ingredient of education, medicine, science, government, business and personal life, much as computation became an ingredient of almost everything after 1981.

Software becomes personal and temporary. Expertise becomes available on demand. Small teams command capabilities once reserved for large organisations. Scientific discovery accelerates because machines explore possibilities while humans decide which questions and evidence matter. Specialised robots gradually carry more of that intelligence into the physical world.

This is not paradise. Abundant answers can make truth scarcer. Abundant content can consume human attention. Abundant software can produce disorder. Abundant productive power can be captured by those who own the infrastructure.

Near-nirvana is therefore a possibility, not an automatic consequence. The same technology can widen human capability or concentrate control. It can give people time and agency or surround them with systems whose decisions they cannot question.

The obstacles are real, but they are recognisable. We need cheaper computation, more electricity and better grids—not infinite energy. We need more reliable systems—not an infallible mind. We need specialised physical automation—not a perfect humanoid servant. We need institutions capable of spreading opportunity—not a change in the laws of physics.

The revolution may be closer than it appears because its remaining barriers are increasingly engineering, economic and institutional. Those barriers can be worked on.

For most of history, humanity has been constrained by what it could produce. In an age of abundant intelligence, we may increasingly be constrained by what we can wisely choose.

Technology may bring us to the gates of abundance. It cannot decide what kind of world lies beyond them.
