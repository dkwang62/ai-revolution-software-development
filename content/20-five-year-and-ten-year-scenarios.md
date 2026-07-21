---
title: "Five-Year and Ten-Year Scenarios"
---

# Five-Year and Ten-Year Scenarios

![Five-year and ten-year scenarios](<figures/FIG-19-01 Future Scenarios.png>)

## A Glimpse of Abundant Intelligence

The preceding chapters described the economic and organisational system forming around AI. What might life look like if that system matures?

The morning begins with a teacher worried about one student who understands spoken explanations but struggles with written exercises. The teacher does not search an app store for a product designed for the average learner. She describes the difficulty, shows examples of the student's work and asks for a two-week experiment. An AI system creates a small learning tool, checks it against the school's privacy rules and adapts it as evidence arrives. The software may be discarded when it has served its purpose.

At a clinic, a doctor prepares for an unusual case. The AI does not replace the diagnosis or carry legal responsibility. It gathers the relevant history, finds comparable research, identifies contradictions and shows where the evidence is weak. Expertise that once required access to a major medical centre becomes available in a smaller community, while the doctor remains responsible for the decision.

In a laboratory, researchers describe the properties they need from a new material. Models explore possibilities, simulations reject weak candidates and robotic equipment tests the most promising. The scientists spend less time searching blindly and more time deciding which questions matter and whether the evidence deserves belief.

At a small factory, the owner wants to reduce waste from one production line. The system studies sensor records, proposes a change, simulates the consequences, generates the software and prepares a bounded trial. Nothing touches the real machinery until safety rules are satisfied and an authorised person approves it.

None of these people asks which model is being used. Intelligence has become infrastructure. Simple work is handled locally and cheaply. Difficult problems receive more reasoning, specialised models and remote computing. The system remembers enough of the task to continue, but access to private information remains controlled.

This is the near-nirvana promised by abundant intelligence. It is not a world without work, disagreement, illness or failure. It is a world in which expertise and the power to create are no longer as tightly constrained by the number of specialists available. Millions of ideas that once died before implementation can be tested. Capabilities once reserved for governments, universities and large corporations become available to small organisations and individuals.

The possibility is enormous. So are the obstacles—but they do not all require a scientific miracle.

## The Revolution Does Not Require Fusion

Abundant intelligence does not mean infinite, free computation. It means that the cost of a useful unit of intelligence falls low enough for vastly more tasks to become worthwhile.

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

### Capability Must Last Longer

AI can perform astonishing bounded tasks and still lose coherence during a long, unfamiliar project. It may follow the easiest interpretation, repeat a failed approach or declare success too early.

The route forward is already taking shape. Models are improving, but they are also being placed inside systems that divide work into stages, preserve state, gather evidence, use specialised tools and escalate when confidence is insufficient. A single perfect intelligence is not required if several bounded components can cooperate and expose their failures.

### Reliability Must Be Engineered

Abundance does not require every model response to be correct. Modern society already relies on imperfect people and machines because systems are designed to detect and contain error.

AI can be surrounded by tests, formal calculations, permission rules, simulations, independent checks, audit trails and human review. The model proposes; deterministic software checks what can be checked; people retain authority where consequences demand it.

The path to dependable AI therefore resembles the history of aviation more than the discovery of magic. Aircraft became safe through better machines, procedures, instruments, maintenance, training, investigation and regulation working together. Reliability emerged from the system.

### Intelligence Needs the Right Context

A general model does not arrive knowing a child's learning history, a hospital's procedures or why an old bank routine behaves differently at quarter-end.

Organisations must gather what they know, keep it current, connect it to its source and control who may use it. Better retrieval and memory can place the right information before the model without exposing everything. This work is difficult, but it uses familiar disciplines: records, databases, identity, permissions, documentation and software integration.

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

A forecast becomes more than a guess when it can point to visible forces already pushing in the same direction. In 2026, those forces can be seen in the mathematics, the machinery and the decisions of companies placing large bets.

### The Mathematics Is Seeking Cheaper Memory

The Transformer became powerful partly because **attention** lets a model compare different parts of an input and decide what matters. The difficulty is that ordinary attention can become expensive as the input grows: doubling the length can create roughly four times as many pairwise relationships to examine.

Researchers are therefore exploring ways to preserve the Transformer's strengths without making attention do everything. **State-space models** such as Mamba carry a changing summary forward through a sequence and can scale linearly with its length. Google's Titans research combines attention with a learned long-term memory. These approaches do not prove that one architecture will replace the Transformer. They suggest a more likely path: attention survives as one component inside a hybrid system containing recurrence, persistent memory, specialised models, tools and extra computation for difficult questions. [Gu and Dao, _Mamba_](https://arxiv.org/abs/2312.00752); [Behrouz, Zhong and Mirrokni, _Titans_](https://research.google/pubs/titans-learning-to-memorize-at-test-time/)

Another change is **adaptive reasoning**. A system need not spend the same effort on every task. It can answer a simple question quickly, then allocate more steps, tests or competing attempts to a difficult one. This makes the future partly an economic problem: use expensive intelligence only where its expected benefit exceeds its added cost.

### The AI Computer Is Becoming a Coordinated System

The processor alone does not determine performance. An AI system must continually move enormous quantities of numbers among processors, memory and other machines. If data arrives too slowly, an expensive processor waits like a factory whose raw materials are stuck outside the gate.

That is why the trajectory includes high-bandwidth memory, chiplets, faster links and custom AI accelerators as well as better GPUs. It also includes lower numerical precision. Using shorter numbers—such as four-bit floating-point numbers, often called **FP4**—can reduce storage, data movement and calculation, provided accuracy remains adequate for the job. Micron says its HBM4 memory can exceed 2.8 terabytes per second, while NVIDIA describes Rubin not as a single chip but as a platform combining processors, networking and storage. These are manufacturers' claims, not independent guarantees, but they reveal the engineering direction: the data centre is increasingly designed as one coordinated AI computer. [Micron, “HBM4”](https://www.micron.com/products/memory/hbm/hbm4); [NVIDIA, “Rubin”](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

### Capital and Integration Test Whether the Ideas Matter

Research papers reveal what may be possible. Capital expenditure and product integration reveal what organisations are prepared to risk in order to make it useful.

- **Alphabet** is combining model research, its own Tensor Processing Units (TPUs), cloud infrastructure and mass-market products. It reported US\$91.4 billion of capital expenditure in 2025, mainly for technical infrastructure, and planned substantially more in 2026. This is a vertically integrated bet: improve several layers together.
- **NVIDIA** is expanding from GPUs into processors, networking, memory systems and complete AI platforms. Its strategy is to supply much of the factory, not merely one machine inside it.
- **Microsoft** is integrating models and agents into Azure, GitHub and Microsoft 365 while developing its own accelerators. In April 2026 it said its AI business had passed US\$37 billion in annual recurring revenue and that 140,000 organisations used GitHub Copilot. These company-reported figures show commercial adoption, not audited proof that every customer gained productivity.
- **Anthropic** represents a more software-centred bet on capable models and agents. It reported in February 2026 that Claude Code's annualised revenue run rate had exceeded US\$2.5 billion. The importance of the example is not the precise figure; it is evidence that an AI tool able to work across a real codebase can become a substantial product.
- **SpaceX and xAI** represent a different form of ambition: joining AI, computing infrastructure and physical engineering under common control. That may accelerate difficult experiments, but concentration also increases financial and governance risk.

These are not recommendations about which company's shares to buy. Large expenditure can produce advantage, waste or both. The companies matter here because their contrasting strategies expose the race: mathematical intelligence, specialised hardware, distribution, integration and physical capability are being developed together. [Alphabet, 2025 Q4 earnings call](https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx); [Microsoft, FY2026 Q3 earnings](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3); [Anthropic, Series G announcement](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation); [SpaceX, “xAI Joins SpaceX”](https://x.ai/news/xai-joins-spacex)

| Visible signal | What is changing | Possible future consequence |
| --- | --- | --- |
| Adaptive reasoning | More computation is reserved for harder tasks | Better results without paying the highest cost for every request |
| Hybrid memory | Attention is combined with recurrence or persistent memory | Agents can work coherently over longer projects |
| HBM and custom accelerators | Data moves faster and hardware is designed around AI workloads | Lower cost and latency per useful result |
| Coding agents | AI reads files, uses tools, runs tests and revises work | Software creation moves from isolated answers towards dependable workflows |
| Capital and integration | Models, chips, cloud services and products are developed together | AI becomes ordinary infrastructure rather than a separate application |

These developments do not prove the forecast. They show that the technical work, capital investment and commercial integration are already moving in the forecast's direction.

## Five Years: Intelligence Becomes Ordinary Infrastructure

By approximately 2031, AI is likely to become less visible precisely because it is used more widely.

People will increasingly begin software projects by describing behaviour, supplying examples and defining tests. Agents will work across files, tools and existing systems. Routine tasks will use inexpensive models and little additional reasoning; difficult or consequential tasks will receive more computation and tighter supervision.

The largest early gains may come from work that organisations already know how to verify: code maintenance, documentation, customer support, analysis, compliance evidence and well-defined administrative processes. Legacy modernisation may become especially important because AI can help recover knowledge from software that no one fully understands.

Professional engineers will remain essential, but more of their time will move towards architecture, integration, security and deciding which generated changes deserve to survive. Domain experts will initiate more projects themselves. The distinction between user and builder will begin to blur.

This future will arrive unevenly. A teacher's temporary learning tool may be generated and used in hours. A change to a medical or payment system may still require months of evidence and approval. The model can be identical while the cost of trust differs completely.

By 2031, the winners may be the systems that make AI feel least like magic and most like dependable infrastructure.

## Ten Years: Intention Becomes an Interface

By approximately 2036, the underlying model may no longer be described simply as a Transformer. Attention could remain one organ inside a hybrid system with persistent memory, recurrence, specialised reasoning, tools and several models operating at different costs.

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
