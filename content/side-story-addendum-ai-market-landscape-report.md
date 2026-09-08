# When Intelligence Becomes Cheap

MARKET LANDSCAPE REPORT

The Economics of the Agentic AI Era, and Where Value Will Accrue

Prepared for the Investment Committee

AI Sector Strategy & Market Structure Analysis

September 2026

## Executive Summary

The central investment question in artificial intelligence is no longer simply how capable models will become. It is how cheap useful intelligence becomes, how explosively that cheap intelligence gets consumed once autonomous agents rather than human typists are the ones requesting it, and — most important for capital allocation — which layer of the AI stack retains pricing power once today's scarcity premiums compress.

We organize this report around three structural forces that we believe will define returns across the AI value chain over the next investment cycle:

1. Falling unit cost of intelligence. Compute, model development, and inference are all on cost curves that point sharply downward, echoing fifty years of computing history — even as aggregate industry spending rises.

2. Exploding, increasingly machine-generated demand. Agentic AI decouples consumption from human attention. A single instruction can spawn thousands of machine-to-machine operations, and cheap intelligence unlocks work that was never economical to do at human labor costs.

3. A moving contest for value capture. As generic intelligence commoditizes, scarcity migrates to other layers — power, advanced packaging, memory, proprietary data, workflow ownership, and evaluation infrastructure. Positioning capital against the current scarce layer is a mistake if that layer is competed away within the investment horizon.

Bottom line for allocators: this is not a binary bet on "AI gets smarter." It is a bet that falling cost and exploding agentic demand together create one of the largest profit pools in the global economy — and the winners will be defined by what they control once intelligence itself is abundant, not by who has the cheapest tokens today.

## 1. Investment Thesis: Three Forces, One Equation

Today's AI market is being priced during a period of genuine scarcity: constrained advanced-node fabrication capacity, limited high-bandwidth memory supply, multi-year data center and grid buildout timelines, and a small pool of frontier research talent. Scarcity produces the extraordinary margins currently visible across the accelerator, cloud, and frontier-model layers.

Scarcity, however, is a starting condition, not a permanent business model. The historical pattern in computing — and, we believe, in AI — runs as follows:

Scarcity → high prices → extraordinary returns → new capital investment → expanding capacity → intensifying competition → falling unit cost.

The defining equation for the sector, and the organizing lens for this report, is:

Cost of useful intelligence: sharply falling. Quantity of useful intelligence consumed: rising far faster, driven by agentic demand. Net effect: a rapidly growing total market whose profit pool keeps relocating across the stack.

Each of the following sections examines one leg of that equation and its portfolio implications.

## 2. Force One: The Cost of Intelligence Is Falling

### 2.1 The supply response to scarcity is already under way

High current returns are attracting exactly the capital response economic theory predicts. Semiconductor manufacturers are expanding advanced-node and packaging capacity; memory producers are scaling high-bandwidth memory output; hyperscalers are designing proprietary accelerators; and AMD and emerging custom-silicon programs are chipping at Nvidia's near-monopoly on merchant AI compute. Data-center construction is expanding across multiple geographies simultaneously.

At the same time, the intelligence produced per unit of hardware keeps improving through better architectures, quantization, sparsity, distillation, improved inference serving, and smaller, more specialized models. The metric investors should track is therefore not cost per GPU or even cost per token, but cost per unit of useful, reliable outcome — a figure that can fall even as absolute industry capital expenditure keeps climbing.

### 2.2 Frontier model development is becoming a cumulative, compounding asset

It is a mistake to model each new frontier model generation as a fresh, stand-alone R&D expenditure. In practice, model development compounds at the organizational level: existing models are continually post-trained and distilled, models generate synthetic data for their successors, evaluation suites and training infrastructure persist and improve, and research know-how accumulates. The true productive asset at a frontier lab is best understood as the combined stack of models, data, training recipes, evaluation systems, infrastructure, and institutional research knowledge — not any single checkpoint.

For investors, this reframes the diligence question away from "what did this model cost to train" and toward "what is the lab's marginal cost of advancing the frontier one more step, and how defensible is that marginal-cost advantage." Incumbent frontier labs with large accumulated stacks may therefore hold more durable structural advantages than headline training-cost figures suggest.

### 2.3 AI is starting to manufacture its own improvement

Model-assisted research — reading papers, writing experiment code, generating synthetic data, building evaluations, triaging failures — is already reducing the human-labor intensity of frontier research. As this automation deepens, a lab's effective research capacity is better measured in supervised AI research agents than in human headcount alone, creating a feedback loop in which better models accelerate the production of still-better models.

Critically, this dynamic should not be read as compute-deflationary for the industry. If automation cuts the cost of running an experiment by a factor of one hundred, the economically rational response is not to bank the saving — it is to run one hundred or a thousand times as many experiments. Human labor per experiment falls; the number of experiments run rises. AI research is shifting from a labor-intensive activity toward an industrial, compute-intensive one, which argues for continued strength in compute demand even as per-experiment costs collapse.

### 2.4 Hardware depreciates; institutional knowledge does not — and that gap is an underappreciated risk

Model weights, research methodology, and evaluation infrastructure accumulate. Physical accelerators do not: a chip purchased today can remain fully functional in five years while being thoroughly uneconomic to run, because a newer generation produces materially more useful intelligence per watt, per rack, and per dollar of cooling and power infrastructure.

Physical life is not economic life. An investor can be entirely correct that AI demand will keep growing and still lose money by financing the wrong hardware vintage. Being right about AI demand does not guarantee being right about AI capital returns — this is one of the more important, and currently underpriced, risks in the sector's infrastructure financing stack.

There is a secondary effect worth tracking, however: depreciated accelerators do not necessarily retire. They migrate down the workload hierarchy — from frontier training, to premium inference, to ordinary inference, to batch processing, to background agentic workloads — and, once largely written off, can become sources of very cheap compute. Whether this materializes depends heavily on site-specific electricity cost, cooling economics, and utilization; a fully depreciated accelerator is worthless if its power draw makes it uneconomic to run. Where cheap power and suitable infrastructure exist, however, yesterday's premium hardware becomes tomorrow's cheap-token factory — a dynamic that favors data center operators and power-advantaged regions over the original hardware vendor.

## 3. Force Two: Agentic AI Is Rewiring the Demand Curve

### 3.1 The chatbot era was bounded by human attention

The chatbot interaction model is a simple one-human-to-one-response relationship, and human attention is a hard constraint: there are only so many prompts a person can type in a day. Even at billions of users, chatbot-style consumption is ultimately capped by waking human hours. This is the demand ceiling that most current AI revenue projections implicitly assume.

### 3.2 Agentic systems decouple consumption from human attention

A single human instruction routed through an agent harness can fan out into planning agents, specialist sub-agents, tool calls, simulations, verification passes, and retries — potentially thousands or millions of discrete model operations from one request. Consider a manager asking simply whether to acquire a company: a sufficiently capable agentic system could spin up dedicated agents for financial analysis, legal due diligence, market research, competitive intelligence, technology assessment, cybersecurity, regulatory review, customer analysis, and scenario modeling, each generating further sub-agents and cross-checks. One question, hundreds of thousands of reasoning operations.

The resulting shift — from human-generated demand to machine-generated demand — is, in our view, the single most important variable for sizing the AI infrastructure opportunity. A 10,000-employee enterprise is no longer necessarily limited to 10,000 AI seats; it may eventually run hundreds of thousands or millions of persistent and ephemeral agents working continuously, including while its human workforce sleeps.

### 3.3 Probabilistic outputs create their own demand: verification

Because AI outputs are probabilistic rather than deterministic, a single answer is often not simply trusted — it may be checked by a second model, solved independently by a third, and adjudicated by a fourth. A high-value task can therefore involve one unit of productive reasoning plus several units of verification reasoning. This looks inefficient next to deterministic software, but is economically attractive whenever machine intelligence is cheap relative to human expertise or the cost of an error. Probabilistic AI simultaneously makes models harder to treat as perfectly interchangeable and creates incremental demand for AI itself — a dynamic that favors evaluation and verification infrastructure as an investable category in its own right (Section 3.6).

### 3.4 Cheap intelligence unlocks work that does not exist today

Perhaps the largest and least-modeled demand category is latent demand for cognition that is currently rationed by cost. Companies do not today continuously audit every transaction, test every software path, reread every contract daily, investigate every anomaly, or assign a dedicated analyst to every employee — not because these activities lack value, but because human analytical labor is too expensive to justify it. If an investigation that costs a human analyst several hundred dollars can be run by an agent for a few cents, the relevant demand curve does not merely shift the existing task to AI — it creates an entirely new volume of work nobody previously considered worth doing.

### 3.5 Four sources of AI demand

| Category | Description | Investment relevance |
| --- | --- | --- |
| Substitution | AI performs work humans already do (coding, research, document review, support). | Near-term, most visible; margin pressure on labor-intensive incumbents. |
| Intensification | Existing activities happen far more often (periodic audit → continuous audit; scheduled testing → continuous testing). | Expands addressable spend within existing budget lines. |
| Previously uneconomic work | Organizations perform valuable analysis that was never affordable at human labor cost. | Largest, least-modeled category; hardest to size from historical spend data. |
| Machine-generated work | Agents create tasks for other agents, breaking the link between human population and intelligence consumption. | Structurally decouples demand from headcount; key driver of long-run compute demand. |

Together these categories describe a possible exponential phase of AI demand as activity shifts from human-generated to machine-generated consumption. That growth phase cannot continue indefinitely — electricity, capital, physical infrastructure, organizational absorption capacity, and diminishing returns will eventually impose limits — but during the transition itself, compute consumption could grow far faster than most current capacity plans assume.

### 3.6 Why "cost per token" is the wrong metric for underwriting demand or competition

Traditional software is deterministic: given an input, it must produce a defined output. AI output is instead a distribution over possible responses conditional on the prompt and the model. Two models given an identical prompt through an identical API can produce materially different results, and even repeated calls to the same model can differ. API compatibility is therefore not behavioral equivalence, and open standards do not guarantee substitutability. This limits how directly conventional commoditization arguments from earlier computing cycles transfer to AI, and argues for evaluating providers on reliability-adjusted cost, not headline token pricing.

### 3.7 Evaluation is becoming critical infrastructure

Safely substituting a cheaper model for an expensive one requires proof that the cheaper model performs adequately across an organization's actual workload — which requires task datasets, simulation, A/B testing, and continuous monitoring at scale. As agent harnesses increasingly route individual tasks to whichever model offers the best reliability-adjusted cost, evaluation and monitoring tooling becomes a durable infrastructure layer in its own right, analogous to the role observability and testing tooling played in the earlier cloud-software cycle.

## 4. Force Three: Who Captures the Value

Falling cost combined with exploding demand creates an enormous pool of economic value. It does not follow that the entities producing the intelligence capture that value. The central strategic question for every layer of the stack is where durable scarcity remains once generic model capability commoditizes.

### 4.1 The AI value chain

Value flows, roughly, from physical inputs through to end applications:

Electricity → Foundries / advanced packaging / HBM → Accelerators & networking → Data centers → Cloud infrastructure → Models → Agent harnesses & evaluation → Enterprise software → System integration → Proprietary data & workflows → Applications & robotics

Technological progress can destroy scarcity — and therefore pricing power — at one layer while simultaneously creating or revealing it at another. Profits migrate to wherever that scarcity resettles, which is why a single-layer bet (for example, only owning accelerator manufacturers) is a narrower wager than it may currently appear.

### 4.2 Positioning by layer

| Layer / Company | Current position | Strategic risk | What we watch |
| --- | --- | --- | --- |
| Nvidia | Owns GPUs, CUDA, networking, and systems software at enormous scale; margins reflect both real differentiation and extraordinary demand. | Custom silicon (Google, Amazon, others) and AMD erode the hardware layer if Nvidia defends only gross margin rather than platform control. | Whether Nvidia sacrifices hardware margin to keep custom accelerators dependent on its networking/software stack. |
| TSMC | Architecture-neutral pure-play foundry; wins regardless of which accelerator architecture (Nvidia, AMD, TPU, Trainium, custom ASIC) prevails. | Rent extraction that pushes customers to build alternative capacity (the risk TSMC has historically managed well). | Capacity allocation discipline and customer diversification across competing chip architectures. |
| Korea memory (SK Hynix, Samsung) | HBM is a binding constraint across all accelerator architectures; Samsung's memory+foundry+packaging integration is a further lever. | Cyclical memory pricing; potential for Samsung to move up-stack into design. | HBM capacity additions and qualification cycles relative to accelerator roadmaps. |
| Broadcom | Custom-silicon and networking expertise positioned between hyperscalers (who own the workload) and foundries (who own manufacturing). | Value of the middle must be continuously defended as hyperscalers internalize design expertise. | Customer concentration and whether hyperscalers backward-integrate design in-house. |
| Hyperscalers (Amazon, Google, Microsoft, Meta) | Own data centers, power procurement, cloud, custom silicon, models, applications and distribution — a multi-way hedge across nearly every scenario. | Capital intensity and the residual-value risk on owned infrastructure if a scenario doesn't play out. | Capex discipline, custom-silicon yield, and cloud-consumption growth as a signal of realized agentic demand. |
| China AI stack | Building an increasingly independent chain from fabrication through applications; does not need the top model to affect global pricing. | Export-control exposure; execution risk on leading-edge fabrication. | Domestic-model cost/performance versus Western frontier models as a global pricing-pressure signal. |
| Frontier labs | Can act as a "teacher" cascading capability down into domain, specialist, and edge models — occupying the whole hierarchy. | Requires accepting deteriorating unit economics at the low end, or ceding that tier to a competitor. | Willingness to self-cannibalize premium-tier pricing rather than protect it (the "IBM lesson", Section 4.3). |
| Enterprise software (SAP, Oracle, Salesforce, ServiceNow, Microsoft) | Already inside enterprise workflows with permissions, data relationships, and business logic — a natural place to insert agents. | Generic AI vendors attempting to disintermediate the workflow layer directly. | Whether the winning agent harness in a given workflow emerges from the incumbent platform or a new entrant. |
| System integrators (Accenture, IBM Consulting, TCS, Infosys and peers) | Historically monetized scarce technical labor; enterprises increasingly prefer fewer internal experts plus many agents over large external headcount. | Headcount-based labor arbitrage faces structural pressure from agentic AI. | Evidence of a shift from expertise-as-labor toward expertise-as-software (proprietary agents, methodologies, verification systems). |

### 4.3 Strategic patterns worth underwriting against

The IBM lesson: new technologies typically begin with lower prices and worse margins than the incumbent product they eventually replace. Protecting today's high-margin business while a cheaper alternative gains volume, developer mindshare, and customer relationships is how incumbents lose strategic control even while remaining profitable in the short run. This applies as much to AI labs and cloud providers as it once did to enterprise computing.

Expect frontier-lab self-cannibalization: smaller specialist and edge models do not threaten frontier labs that build them; they threaten labs that refuse to. A rational lab will sell a $10-per-task model, then its own $1 replacement, then the ten-cent version, rather than let a competitor do so.

Workflow ownership and proprietary context become scarcer as generic intelligence becomes abundant. The economically relevant unit shifts from "model" to "model + proprietary data + memory + tools + workflow + evaluation," which favors incumbents who already sit inside enterprise data and process flows over point-solution model vendors.

Capital bears hidden residual-value risk. Data centers, power generation, and accelerators are financed years ahead of full clarity on their economic (not physical) useful life. Faster-than-expected hardware obsolescence can destroy capital even in a scenario of genuinely explosive end-demand — the loss simply lands on whichever balance sheet (lab, hyperscaler, data-center operator, infrastructure fund, or lender) bears residual-value risk.

Power and physical infrastructure remain the floor under a seemingly virtual industry. Every unit of intelligence ultimately rests on electricity, fabrication, memory, packaging, networking, cooling, and data-center capacity. As one constraint eases, another becomes binding — abundant accelerators make electricity the bottleneck; faster processors make networking the bottleneck — and durable economic rents tend to follow wherever the bottleneck currently sits.

## 5. Cheap Does Not Mean Commodity

A critical distinction for valuation work: technological cost decline, market price decline, and commoditization are three different things. AI can become dramatically cheaper to produce without becoming interchangeable in the market. Superior models can remain more reliable; platforms can retain switching costs; proprietary data and integrated ecosystems can retain customers; and frontier capability can command a premium even as last generation's frontier becomes nearly free.

Because AI is probabilistic rather than deterministic, buyers are not purchasing identical calculations from interchangeable machines — they are purchasing varying distributions of intelligence, reliability, and failure. The competitive metric that should anchor comparative valuation work across model providers is therefore useful, reliable outcomes per dollar of total economic cost (inference cost plus retries, verification, and human intervention on failure) — a considerably higher bar to commoditize than raw token pricing, and one on which headline price wars can be a misleading signal of competitive erosion.

## 6. Investment Implications

### 6.1 Where we see durable scarcity over the medium term

Power and physical siting. Access to cheap, reliable electricity and grid interconnection is a multi-year-to-build constraint that does not compress as fast as compute or model cost — a structurally advantaged position relative to any single hardware or model vendor.

Architecture-neutral manufacturing and memory. Positions that profit regardless of which accelerator architecture ultimately wins (foundry, HBM) diversify away model- and vendor-specific risk.

Proprietary data, workflow ownership, and evaluation infrastructure. As generic model capability commoditizes, the enterprises and platforms that already sit inside the data and the workflow — and the tooling that lets buyers safely substitute among probabilistic models — should capture a rising share of value.

Multi-way hedges. Hyperscaler-type positions that can win under several different competitive outcomes (own silicon or third-party, own models or hosted, high-margin or high-volume) carry lower dispersion of outcomes than single-layer bets.

### 6.2 Where we would underwrite more carefully

Pure hardware-margin exposure. Positions whose thesis depends on sustaining today's accelerator gross margins, rather than on platform or ecosystem control, are exposed to the same competitive-erosion dynamics that have compressed margins in prior computing cycles.

Labor-arbitrage system integration. Business models built on headcount-based billing face a structural, not cyclical, challenge from agentic AI and should be evaluated on their transition toward productized, agent-based service delivery.

Infrastructure financed against optimistic hardware useful-life assumptions. Underwriting should explicitly separate physical life from economic life and stress-test residual value against faster-than-expected obsolescence.

Point-solution model vendors without proprietary data or workflow lock-in. These are the positions most exposed to the commoditization pressure this report describes, even if near-term revenue growth looks strong.

## 7. Key Risks and Uncertainties

- Demand elasticity is the largest unknown. If machine-generated demand fails to materialize at the scale this thesis assumes, the current infrastructure buildout could substantially overshoot realized consumption.

- Capital overbuild risk: an industry can experience genuine, rapid demand growth while simultaneously destroying capital at the balance-sheet level through overbuilding or hardware obsolescence — the two are not mutually exclusive.

- Geopolitical and export-control risk affects the semiconductor and China-stack layers directly and could alter the pace and geography of cost decline.

- Regulatory and safety developments could slow agentic deployment in higher-stakes enterprise workflows, compressing the "previously uneconomic work" and "machine-generated work" demand categories specifically.

- Energy and grid constraints could bind faster than compute or model-cost curves improve, shifting scarcity — and rents — toward power markets sooner than the stack currently prices in.

## 8. Three Questions to Monitor Going Forward

#### 1. How fast does the cost of useful intelligence actually fall?

Track semiconductor and memory capacity additions, algorithmic efficiency gains, and the degree to which AI-automated research measurably compounds — not headline model benchmark scores.

#### 2. How much demand does cheap intelligence create, and how much of it is machine-generated?

Track enterprise agent deployment counts and utilization (agents per employee, agent-to-agent task volume) rather than human seat counts, which understate the shift this report describes.

#### 3. Where is value accruing this quarter, and has that layer changed from last quarter?

Track margin trends layer-by-layer across the value chain in Section 4.1 rather than assuming today's scarce layer (currently accelerators and frontier models) remains scarce through the investment horizon.

## 9. Conclusion

The AI investment opportunity is ultimately less about a handful of extraordinarily intelligent models than about making useful intelligence cheap enough to consume without deliberation — and, critically, about machines beginning to consume intelligence on behalf of other machines. Reasoning generates verification; software generates continuous testing; research generates continuous experimentation; businesses move from periodic analysis to continuous optimization. The relevant transition is from billions of humans occasionally requesting intelligence to billions of humans and organizations directing trillions of machine reasoning processes.

This is not simply a wager that AI becomes smarter. It is a wager that civilization finds enough valuable uses for cheap intelligence to absorb an extraordinary amount of compute — and, for capital allocation purposes, a wager on correctly anticipating where scarcity resettles as that absorption happens. The winners are unlikely to be defined solely by who produces the cheapest tokens or the single most capable model. They will be defined by who controls whatever remains genuinely scarce once intelligence itself becomes abundant.

This report is a market and strategy framework for internal investment discussion. It does not constitute investment advice or a recommendation to buy or sell any security, and forward-looking statements about cost curves, demand elasticity, and competitive positioning are inherently uncertain.
