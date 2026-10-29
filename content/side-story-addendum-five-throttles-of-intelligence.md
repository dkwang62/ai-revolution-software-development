---
title: "The Five Throttles of Intelligence"
---

![The Five Throttles of Intelligence infographic](figures/fig-addendum-five-throttles-of-intelligence.png)

*How AI Escaped the Scaling Wall, and Why Recursive Self-Improvement Could Change Everything*

## Introduction: The Wall That Never Came

For years, one of the most persistent arguments in artificial intelligence was that large language models would hit a wall.

The reasoning seemed compelling. A language model learns by predicting what comes next in vast quantities of text. It does not obviously understand the world as a human does. It can produce fluent explanations without reliable knowledge, solve some problems while failing at others, and deliver wrong answers in an authoritative tone. Its intelligence, critics argued, was statistical pattern matching dressed up as understanding. Even prominent researchers doubted that making models bigger would lead to genuine reasoning, scientific discovery or general intelligence.

Sceptics did not all argue the same thing: some doubted the value of scale, others its transfer to real-world tasks, others the economics of further gains. The limits they identified were real. The mistake was to assume that a limit in one method would become a limit on the entire trajectory of AI capability.

Intelligence can be improved along several independent dimensions, each addressing a different limitation:

1. **Pre-training** produces a more capable underlying model.
2. **Inference-time reasoning** lets the model work through hard problems.
3. **Multi-agent systems** distribute complex work across parallel processes.
4. **Long-horizon training** makes those systems reliable over extended projects.
5. **Recursive self-improvement** lets AI systems contribute to the research that produces their successors.

These are not five ways of making the same machine bigger. They are five distinct dimensions along which effective capability can grow. The first four reinforce one another. The fifth introduces a potential feedback loop: intelligence becoming a tool for creating more intelligence.

The word *throttle* can obscure a distinction at the heart of the argument. The first four throttles expand what an AI system can accomplish. The fifth may change how quickly the system itself can improve. The shift from increasing capability to potentially accelerating the production of capability is what makes recursive self-improvement different in kind.

If that loop becomes sufficiently autonomous, the problem facing humanity is no longer only how to build a smarter machine. It is how to retain meaningful control over a technology whose capacity for improvement may itself be accelerating. At that point a discussion about engineering becomes a discussion about economics, security, political power and human agency.

A note on certainty. Artificial superintelligence is not an established fact, and an irreversible intelligence explosion is not guaranteed. But neither can we safely assume that today's limitations are permanent. The mechanisms for overcoming at least some of them are already visible, and the sections that follow try to be explicit about what is established, what is plausible and what is speculative.

**A note on evidence.** The claims that follow fall into three kinds: things demonstrated, plausible extrapolations, and high-consequence possibilities that remain speculative. The essay tries to say which is which. It describes the field as understood in mid-2026, so time-sensitive claims should be re-checked before publication. The evidence notes at the end name the main studies behind the pivotal claims.

### Four terms used throughout

- **Capability:** can the system perform the task?
- **Reliability:** can it do so consistently under realistic conditions?
- **Autonomy:** can it choose and execute the necessary actions without continuous human intervention?
- **Impact:** how consequential are its actions, given its access, resources and environment?

These are related but not interchangeable. A system that excels at research but lacks permission to run experiments has high capability and little impact. A less capable system with access to financial accounts or production infrastructure can do real harm without being anywhere near superintelligent.

### What is established and what is not

| Horizon | Examples | Evidence status |
| --- | --- | --- |
| Present and near-term | Unreliable autonomous actions, cyber misuse, synthetic deception, over-dependence, concentration of power | Largely observable now |
| Medium-term | Sustained autonomous research, broad workflow automation, much cheaper expert cognitive labour | Plausible extrapolation; depends on reliability and long-horizon gains |
| High-consequence | Rapid recursive acceleration, capability outrunning oversight, loss of meaningful human control | Speculative but severe; evidence is indirect |

These are categories of risk, not dated forecasts.

## 1. The First Throttle: Pre-Training and General-Purpose Intelligence

Traditionally, AI development meant building a specialised system for each task: one for speech recognition, another for translation, another for a particular game. Each needed its own data, techniques and evaluation.

The scaling approach reversed this. Researchers trained a single general-purpose neural network on enormous collections of text and other data, repeatedly adjusting its parameters to reduce errors in predicting the next *token* (a word, part of a word, or punctuation mark). Through this simple objective, the model absorbs relationships among facts, concepts, arguments and patterns of reasoning.

### Why next-token prediction can produce reasoning-like behaviour

To predict language accurately across many contexts, a model benefits from representing relationships that are never spelled out in any single example. Ask a model how far a train travels at 60 km/h for three hours. A system that only memorised common phrases might reproduce a stored answer. A more capable model has learned the underlying relationship between distance, speed and time, and can apply it to numbers it has never seen.

This does not mean next-token prediction automatically yields perfect understanding. It means that learning to predict complex data can build internal structures that generalise beyond memorisation, which is why one training objective supports translation, programming, summarisation and some forms of logical reasoning.

### Scaling laws and the investment race

Researchers observed that capabilities improved, sometimes abruptly, as models grew in parameters, data and compute. (The apparent abruptness of such *emergence* can partly depend on how performance is measured.) More importantly, the relationship between loss and resources followed predictable curves. Scaling laws turned AI development into something quantitative and plannable, and into a capital-intensive industry. If compute and data reliably bought measurable capability, spending on chips, data centres, electricity and talent was not mere speculation. It was a purchase of progress in a strategic technology.

The investment race was therefore not irrational merely because the sums were enormous. The hypothesis had empirical support. But it was never a guarantee of unlimited progress.

### The two apparent walls

**Data.** High-quality human-written text is finite. It cannot be expanded indefinitely without running into duplication, falling quality, copyright limits and other constraints. Synthetic data helps, but models that learn repeatedly from their own outputs risk inheriting subtle errors and narrowed diversity.

**Compute.** Larger runs need more specialised chips, electricity, capital and infrastructure. Semiconductor supply chains, cooling, grid connections and data-centre construction all impose limits, and the cost of each marginal gain rises as systems get stronger.

By late 2024, reports of disappointing returns from the next generation of frontier models reinforced the impression of a plateau. Yet that conclusion confused a limitation of one method with a limitation of intelligence itself.

### The hidden lever: algorithmic efficiency

One contributor to progress is easy to overlook because it is not a separate throttle. Better algorithms, architectures, data curation and training recipes allow the same capability to be reached with less compute, and the same compute to reach further. Over the past decade, algorithmic improvements have been a major source of effective compute growth alongside hardware. This matters for the argument that follows in two ways. First, it is one of the things AI research agents could most plausibly accelerate. Second, it means that restrictions on hardware alone may slow, but not stop, capability growth.

Pre-training can lose efficiency without every other route to capability being exhausted. That distinction would prove decisive.

## 2. The Second Throttle: Reasoning and the Economics of Thinking

The next development shifted emphasis from how much computation a model receives during training to how much it can spend on an individual problem. This is called *inference-time scaling* or *test-time compute*, and reasoning models are its main application.

The insight is simple. Sometimes a problem does not need a bigger brain. It needs the existing brain to work more carefully.

### From immediate answers to deliberate problem-solving

Consider 17 × 15. A person might say 255 immediately, or break it down: 17 × 10 = 170, 17 × 5 = 85, 170 + 85 = 255. The stepwise route makes errors easier to spot and correct.

A model forced to answer immediately has little chance to develop and check intermediate work. A reasoning model can generate candidate steps, test approaches, reconsider assumptions and revise before responding. The analogy with slow, deliberate human thought is useful but should not be taken literally; the mechanisms are computational, not necessarily psychological.

### Why this changes the scaling equation

If a problem is beyond a model's single-pass ability, one option is a larger model, which means an expensive new training run. The alternative is to let the existing model generate and evaluate more intermediate steps, explore several candidate answers or call external tools. Computation is not eliminated; it is redirected to the problems that justify it. Easy questions get quick answers. Hard mathematical, programming or scientific problems get far more effort.

### Learning to reason through reinforcement

Reinforcement learning from verifiable outcomes has been central. A model can be rewarded when a maths answer is correct or when generated code passes its tests. When training rewards correctness rather than merely plausible language, models can discover behaviours that raise their success rate: checking calculations, trying alternatives, backtracking after failure and spending more effort on hard cases. These behaviours need not be hand-specified; they can emerge from optimisation.

Two caveats apply. First, reinforcement learning does not automatically produce sound reasoning. Models can exploit weaknesses in a reward signal, learn superficial strategies, or excel on the training distribution while remaining unreliable elsewhere. Second, the method works best where answers can be checked cheaply. Mathematics and code are verifiable; strategy, taste, scientific judgement and ethics are much harder to verify. This asymmetry shapes where AI progress is fastest and is one reason capabilities are so uneven across domains (see Section 5).

### The economics of thinking

Inference-time compute offers a new way to trade money for intelligence. An operator can decide whether a task warrants a costly reasoning process: a financial analysis, a hard engineering problem or a complex investigation may justify far more computation than a routine email. Intelligence then depends not only on which model is chosen but on how much effort the system can afford per task.

The relationship is not unlimited. More thinking can produce diminishing returns, repeated errors or even worse answers, and it consumes time and energy. The second throttle therefore brings its own constraint: latency. A system that eventually solves a problem is operationally useless if the answer arrives too late. The next development addresses that limit.

## 3. The Third Throttle: Multi-Agent Systems and the Parallelisation of Intelligence

A single system must still allocate its effort among many subtasks. When a project contains independent or partly independent pieces, sequential processing becomes a bottleneck. The response is to distribute the work.

### From one worker to an organisation

Imagine a substantial report requiring historical sources, economic statistics, technical literature and competing interpretations. One agent could do everything in sequence. Alternatively, one agent examines history, another the economic data, a third the technical research, a fourth hunts for counterarguments, and a coordinating agent integrates the results. The architecture resembles an organisation more than an individual: a lead agent plans, specialists execute, reviewers check. Agents may use different prompts, tools, models or evaluation criteria.

The obvious advantage is speed. Ten independent one-hour tasks that would take ten hours sequentially might take roughly one hour in parallel, plus the cost of delegation, communication, verification and integration. This is an idealisation. Real projects contain dependencies and tasks that cannot be cleanly divided.

### Breadth as well as speed

Parallel agents can also explore different hypotheses, propose alternative designs and challenge one another's assumptions, giving a broader search than one agent following one line of reasoning. In debugging, one agent might inspect the code, another reproduce the failure, a third test whether the symptom stems from a deeper architectural flaw. In mathematics, they can attempt different solution paths; in research, rival explanations.

But breadth is not correctness. If every agent shares the same underlying misconception, they may independently reproduce the same error. If the coordinator cannot tell strong evidence from confident speculation, parallelism amplifies mistakes. Multi-agent systems need reliable ways to resolve disagreements, validate claims and recognise when more investigation is needed. Diversity of method (different models, tools and checks) matters more than sheer number.

### The limits of multiplying workers

Some tasks are inherently sequential: a programmer cannot fix the last bug before discovering what caused the previous failure, and a scientist cannot run the final experiment before earlier results decide what it should be. As Amdahl's law formalises, the speed-up from parallelism is bounded by the fraction of a task that must remain serial, and coordination adds overhead. Ten agents do not deliver ten times the performance.

Even imperfect parallelism can be economically transformative when work is expensive, slow and divisible. The effective capability of an AI system no longer rests solely on one model. It also depends on how many workers are available, how well they coordinate, and how well their outputs are integrated. One worker becomes a team; a team becomes an organisation.

Organisations, though, have a familiar weakness: errors spread through them. That leads to the fourth throttle.

## 4. The Fourth Throttle: Long-Horizon Capability and Reliability

Solving a hard problem is one thing. Completing a large project from beginning to end, without losing the objective, accumulating errors or looping unproductively, is another. This is *long-horizon capability*: sustained sequences of decisions in which earlier results shape later steps. Examples include building a substantial application, running a research investigation or operating a complex workflow.

### Why small errors become large failures

Suppose an agent completes each step correctly with probability 99%, and a project needs 100 independent steps, all of which must succeed. The probability of an error-free project is 0.99^100, about 36.6%. For 500 steps it falls to roughly 0.66%.

The model is deliberately simplified. Real tasks rarely need every step perfect, errors are not independent and many can be detected and repaired. But it captures a central difficulty: component-level reliability does not translate directly into project-level reliability. A system can shine in a demonstration and still fail across many hours of continuous work.

### The memory problem

Long projects also strain working context. An agent accumulates decisions, modified files, test results, assumptions and past errors; keeping all of it in active context becomes difficult or expensive. Lost details lead to repeated work, contradicted decisions and changes that break earlier successes.

One response is to keep structured records: what is complete, what was decided, what remains unresolved, what comes next. The system can reload these after its immediate context is truncated or *compacted*. This extends the effective working horizon, but summaries are lossy. They can omit an exception, flatten a critical dependency or record a wrong conclusion. Memory must be verified, not merely accumulated.

### Verification changes the character of the task

A stronger approach makes the system check its work continuously. A software agent runs its code, reads error messages and revises. A research agent checks citations against sources. A data agent compares results against independent calculations. Producing an answer stops being the end of the process: the system creates an output, tests it against an external criterion and uses the result to decide what to do next. This closed loop is essential to reliable autonomy. A system that generates plausible solutions is a useful assistant; one that tests, diagnoses and corrects them is an operational agent.

### Training for completion

Long-horizon performance can also be trained. Instead of rewarding only short answers, researchers can expose models to extended tasks where success depends on maintaining coherence and recovering from mistakes, rewarding completion, effective tool use, verification and recovery. Public measurements, such as the length of tasks (in human-expert time) that models can complete at a given success rate, suggest this horizon has lengthened rapidly across model generations. METR's 2025 study, for example, estimated a doubling time of roughly seven months, though estimates vary with the success threshold and the period measured. These measurements depend heavily on the benchmark, the definition of completion, the human baseline and the difficulty of the tasks, and a doubling trend observed in one period should not be extrapolated indefinitely.

Still, long-horizon capability is a critical dimension of progress. It decides whether AI moves from answering questions to executing projects, and once it can, the range of activity it can undertake expands sharply.

## 5. The Compounding Effect: When the Four Throttles Reinforce One Another

The first four throttles matter most in combination. Pre-training supplies general capability. Reasoning lets the system spend more computation on hard decisions. Multi-agent architecture distributes work. Long-horizon methods keep the whole system coherent over extended projects. Each strengthens the others:

- A stronger base model plans better, divides tasks more intelligently and recognises unreliable sub-agent output.
- Better reasoning improves task decomposition and identifies which problems deserve extra computation.
- Multi-agent coordination generates competing solutions and more chances to verify.
- Long-horizon reliability lets all of this be applied to projects too large for a short interaction.

This is the difference between additive and multiplicative thinking. An additive model assumes each improvement adds a fixed increment. A multiplicative model recognises that progress in one component raises the value of progress in the others. As a conceptual shorthand, effective capability is some function f of pre-training (P), reasoning (R), agent coordination (A) and long-horizon reliability (H). This is a framework, not a quantitative law; the real relationship varies by task, model, tools and cost.

The framework explains why a slowdown in one dimension need not slow the whole field. If pre-training gains become expensive, effort shifts to reasoning. If a task outgrows one agent, it is divided. If parallel agents disagree, verification and long-horizon techniques help resolve it.

### Capability is jagged

Compounding does not mean uniform. Current systems are strikingly uneven: they may solve an olympiad-level problem and then fail a simple planning task, or write an elegant module and miss an obvious inconsistency elsewhere in a project. Progress is fastest where outcomes are cheaply verifiable and training data is abundant (code, mathematics, structured analysis) and slower where feedback is sparse, subjective or slow (long scientific cycles, management, physical tasks). The overall trajectory therefore depends on which of these jagged edges matter for the application in question, and on how fast they are smoothed out.

### Limits of compounding

There are limits. Some capabilities share common bottlenecks, so the dimensions are not fully independent. More agents can generate more errors as well as more ideas. More reasoning can burn resources without better answers. Longer projects encounter uncertainties that no amount of computation resolves.

The lesson is that AI progress cannot be judged by model size alone. The relevant unit is increasingly the complete system: the model, its reasoning process, its tools, its agents, its memory, its verification mechanisms and its ability to carry out work over time. And that leads to a more unsettling question: what happens when the system can improve the technology that produces it?

## 6. The Fifth Throttle: Recursive Self-Improvement

AI research is itself a collection of tasks: analysing experimental results, forming hypotheses, designing training procedures, writing software, diagnosing model failures, improving data pipelines, optimising efficiency and evaluating new architectures. Much of this work is mediated by code, documents and measurable outcomes, which makes it an unusually natural target for AI agents.

The first four throttles describe ways of increasing what an AI system can do. The fifth concerns its ability to change how capable *future* systems will be. Early contributions may be narrow: debugging training code, generating tests, improving data processing, automating evaluations. Over time, more capable systems could take on larger parts of the research cycle. The consequential question is not whether AI can contribute to AI development (it already does) but how far that contribution can extend, and whether systems can eventually own entire research cycles with limited human intervention.

### The research feedback loop

Imagine the cycle. An agent analyses a model's performance and finds a weakness. It proposes a fix and writes the code or configuration. It runs the experiment and compares the result with a baseline. It refines the proposal and repeats. If the change works, the outcome is a more capable model or a more efficient method, and that model can run the same cycle better.

**AI helps improve AI; improved AI becomes better at improving AI.**

Human researchers already run such cycles. What changes is the speed, scale and autonomy with which they can be executed. Research organisations are limited by the number of skilled people, the time needed to design experiments, coordination costs and the expense of evaluating ideas. AI agents can relax some of these limits: they can work around the clock, run many digital tasks in parallel and conduct experiments without a human performing every intermediate step.

### A worked example: an AI research organisation

To see how the throttles combine, follow one hypothetical research cycle:

1. **Pre-training.** A capable foundation model understands papers, code, experimental results and the architecture of machine-learning systems.
2. **Reasoning.** It investigates why a training run underperforms, proposes explanations and designs controlled experiments to tell them apart.
3. **Multi-agent work.** Parallel agents examine architecture, data quality, optimisation, hardware utilisation and rival hypotheses.
4. **Long-horizon execution.** The system runs the experiments, checks results, fixes errors, keeps records and repeats the cycle over days or weeks.
5. **Recursive improvement.** Verified gains produce a better successor, which runs the next cycle more effectively.

What decides whether this accelerates is the feedback dynamics. Better hypotheses help only if they can be tested. If testing is cheap and gains transfer to the next generation, each cycle shortens the next. If experiments are expensive, gains are marginal or evaluation is unreliable, the loop stalls.

The process may also be discontinuous. An agent might find an algorithmic improvement in days, then wait weeks for chips, experiments or new hardware. Progress then surges when a bottleneck is removed, slows when another binds, and resumes if the system finds a way around it. A breakthrough that cuts the compute experiments need can loosen a constraint that looked fundamental. The danger is therefore not any single throttle but the possibility that a system improves the very process that removes its remaining bottlenecks.

### Why self-improvement is a special case

Ordinary automation improves the efficiency of a task. Recursive self-improvement potentially improves the capability of the system doing the improving. A machine that gets better at making a product benefits one production process; a machine that gets better at designing the next generation of machines propagates gains across generations. Better code-writing helps build better training software; better training software makes experiments cheaper; cheaper experiments speed discovery; discovery yields models that write better code.

### What it would actually require

Genuine recursion needs more than suggestions. A system would have to:

- identify meaningful weaknesses and opportunities;
- form hypotheses and modify training methods, software, data or architectures;
- run experiments and interpret them, distinguishing real gains from noise, overfitting and misleading evaluations;
- integrate successful changes into a successor and repeat with limited human input;
- have access to the compute, data, software environments and deployment authority to do all of this.

A model that proposes better algorithms but cannot run experiments is not an autonomous research organisation. One that runs experiments but cannot judge the results is not a dependable improvement engine. The distinction between assistance and autonomy matters: AI can be enormously useful in research without being able to advance the field alone. Yet each newly automatable component brings the stronger scenario closer.

### Speed, and the conditions for acceleration

The loop becomes especially significant if gains in research capability outpace the growing difficulty of further gains. Then successive generations arrive faster than their predecessors. Several qualifications are essential:

1. **Software is not the whole pipeline.** Frontier training needs chips, data centres and electricity, which do not scale at software speed.
2. **Research quality is hard to measure.** An agent can generate vast numbers of plausible proposals without discovering anything important.
3. **Low-hanging fruit runs out.** Ideas get harder to find, a pattern seen in many fields.
4. **Research skill does not translate one-to-one into model capability.** Some advances yield little practical benefit.

These are real constraints, not footnotes. They do not remove the possibility that AI development becomes partly self-accelerating if systems automate a growing share of the work needed to improve them.

### From recursion to superintelligence

*Artificial superintelligence* means capabilities that substantially exceed those of the best human experts across a broad range of important cognitive tasks, including scientific research, engineering, strategy and planning. It is not just a faster or higher-scoring model. Recursive self-improvement could contribute to it, but the two are distinct: a system could improve its successors without reaching superintelligence, and a system could surpass human experts in many fields without being autonomous in its own development.

The extreme scenario requires several conditions at once: AI becomes highly capable at AI research; it executes much of the research process autonomously; its improvements translate into more capable successors; those successors do research even better; and the cycle runs faster than human institutions can understand, evaluate or control it. No established law says such a process must end in an uncontrollable explosion. Feedback loops can accelerate, stabilise or collapse. The danger is not that acceleration is mathematically inevitable, but that a powerful acceleration mechanism may appear before humanity has reliable ways to govern it.

### Three levels of research automation

Three distinct possibilities are easy to blur:

1. **AI-assisted research.** AI speeds up human-led research while people keep the main experimental and strategic decisions. This is largely happening now.
2. **Partially autonomous research.** AI conducts substantial research cycles independently, while humans set objectives, allocate resources and review important results. Early forms exist; how far they extend is uncertain.
3. **Rapid recursive acceleration.** Each generation improves the process of producing the next so much that successive improvements arrive faster and faster.

The first does not establish the second, and the second does not establish the third. Even the third does not by itself mean the process becomes uncontrollable.

## 7. The Bottlenecks That Do Not Go Away

A purely software view of AI progress underestimates the physical and organisational limits that still bind it. Naming them is essential to judging how fast any of the throttles can really turn.

**Compute and chips.** Advanced training and inference depend on a narrow semiconductor supply chain, in which a few firms control the most advanced lithography, fabrication and packaging. Expanding capacity takes years, not weeks.

**Energy and infrastructure.** Large clusters need gigawatt-scale power, grid interconnections, cooling and land. In many regions, electricity and permitting, not algorithms, are the binding constraint on new data centres. This is also where AI intersects with energy policy and climate goals.

**Data and environments.** As human text is exhausted, progress leans on synthetic data, simulation and reinforcement-learning environments. Building rich, realistic, hard-to-game environments is slow, expensive work, and models can only learn from the feedback an environment is able to give.

**Evaluation.** The ability to measure progress lags the ability to produce it. Benchmarks saturate, leak into training data or reward narrow tricks. Without trustworthy evaluations, neither researchers nor AI research agents can tell a real advance from a statistical artefact, and regulators cannot tell what a system can do.

**Experimental throughput.** Many valuable questions in science and engineering require physical experiments, clinical trials or real-world deployment. Intelligence can choose better experiments, but it cannot always make them run faster.

**Adoption and institutions.** Even a capable system must be integrated into workflows, regulated, insured and trusted. Historically, general-purpose technologies such as electricity and computing took decades to reach their full economic effect.

These constraints mean that speed in the digital domain does not translate straight into speed in the physical economy. They also show where pressure points lie: whoever controls chips, energy and data pipelines holds levers over the whole system.

## 8. The Economic Consequences: Intelligence as an Industrial Input

For most of modern history, advanced cognitive labour has been scarce and expensive: firms hire experts, organise them and wait for complex work to be completed. AI introduces the possibility of producing substantial cognitive work through software, computing infrastructure and human supervision. That does not make intelligence free (chips, electricity, engineering and quality assurance remain costly) but it could change the economics dramatically.

### From task assistance to workflow automation

Early applications assisted workers: drafting, summarising, answering questions, generating snippets. More capable agents can take responsibility for entire workflows: investigating a market, building a financial model and revising it after feedback; diagnosing bugs, implementing features and preparing releases; reviewing literature, designing experiments and writing up results. When a system can plan, delegate, execute, verify and recover, it replaces not merely a tool but portions of the organisational process that produces work.

### Falling cost, rising strategic value

If a multi-day specialist task can be done in a fraction of the time, its cost falls. Firms can then do more, build new products or attempt projects previously uneconomic. This is the productivity case for AI, and it is a strong one. But productivity gains do not distribute themselves. Those who control advanced models, proprietary data, compute and distribution may capture a disproportionate share, producing a concentration of economic power. If whole categories of cognitive work become automatable, the effects reach beyond individual jobs: worker bargaining power, the structure of professional services, the economics of education and the split of income between labour and capital.

The transition will be uneven. Many occupations will be transformed rather than eliminated, and others will remain protected by physical presence, interpersonal trust, legal accountability or practical skill. Economists also point out that tasks which remain hard to automate can become a larger share of the economy and command rising wages (the Baumol effect), which tempers some pessimistic forecasts. But a growing share of economically valuable cognition could be supplied by machines.

### The investment feedback loop

More capable AI raises productivity, which raises revenue and justifies more investment in AI infrastructure, which supports more capable systems, which may speed AI development itself. This loop favours organisations already positioned to build and deploy frontier models. The competition is therefore not over who has the best chatbot but over who controls the machinery that produces intelligence, who can deploy it at scale, and who captures the value. The strategic asset is no longer software alone. It is the capacity to produce, improve and deploy intelligence.

There is also a financial dimension. Spending on AI infrastructure is running far ahead of today's revenue, on the bet that capability and adoption will keep growing. If that bet disappoints, the result could be a painful correction that slows deployment without removing the underlying technology.

## 9. The Geopolitical Consequences: A Race That Is Hard to Stop

Advanced AI contributes to scientific discovery, industrial productivity, intelligence analysis, cyber operations, logistics, military planning and the development of other technologies. A country with substantially stronger systems may gain advantages across many sectors at once.

### The logic of competition

If one government believes AI could confer decisive economic or military advantage, it will want to accelerate. Its rival, watching, reaches the same conclusion. Both may privately prefer a slower, more coordinated path, yet neither can trust the other to keep an agreement or to refrain from exploiting a temporary lead. The same logic governs companies: one that slows to invest in safety risks losing customers, funding and market position. The incentive to press on need not reflect recklessness or ignorance. It follows from the structure of competition, which is why warnings from researchers often fail to slow anything. Knowing a technology is dangerous does not create an incentive to stop building it.

### How research automation sharpens the race

If AI substantially accelerates AI research, a modest lead can compound: the leader develops better systems, which help it extend the lead. This raises the value of securing compute, chips, energy, talent and access to the strongest models, and makes governments more reluctant to restrict development even as the stakes become harder to predict. Export controls on advanced chips, industrial policy, talent restrictions and the security of model weights have all become instruments of statecraft.

A research lead is only one kind of advantage. An *intellectual* advantage means discovering what others cannot. An *operational* advantage means turning discoveries into working systems, which needs compute, data, engineering and deployment. A *strategic* advantage belongs to whoever can deploy those systems at scale. A system that finds an excellent training method still needs chips and experiments, while an organisation with vast infrastructure can gain enormous leverage from a system far short of superintelligence. This is why a small research lead can matter enormously in some circumstances and little in others.

### Proliferation and open weights

A further complication is diffusion. Capabilities that are expensive to create at the frontier tend to become cheap a year or two later, and some developers release model weights openly. Open models drive innovation, research access, competition and transparency, and reduce dependence on a few firms. They also make it effectively impossible to withdraw a capability or enforce usage limits once weights are widely copied. Where the line should fall between openness and restriction depends on the specific capabilities involved, and it is one of the most contested questions in AI policy. Model weights are also now valuable targets for theft, making security at frontier labs a national-security issue.

The central tension is not simply openness versus secrecy. It is between distributing the benefits of intelligence widely and keeping the ability to constrain its most dangerous uses. As capabilities rise, the balance shifts: the benefits of openness stay roughly constant while the worst-case downside of irreversible release grows. That is why many proposals scale restrictions to demonstrated capability instead of applying one rule to every model.

### The limits of treaties and voluntary restraint

Agreements can reduce risk, set shared standards, improve transparency and restrict especially dangerous uses. But verification is hard when training methods and capabilities are proprietary; some research can be done on widely available hardware; governments are reluctant to reveal capabilities; and companies resist restrictions that damage their position. Nor does an agreement remain effective merely because its signatories initially valued it: priorities and governments change. None of this makes governance pointless. It means governance must contend with incentives that can actively undermine it, and that it will probably need verification mechanisms (such as compute monitoring) as well as goodwill.

## 10. The Dual-Use Problem: Cyber and Biological Risk

Cybersecurity illustrates how the same capability can defend and attack. Defending a network means investigating systems, finding weaknesses, understanding dependencies, writing and testing patches, monitoring for attacks and responding to failures. Offence involves a similar extended chain: find a weakness, exploit it, gain access, understand the environment, bypass protections and avoid detection.

### Why long-horizon capability matters

A model that can spot a vulnerability is not the same as an autonomous system that can run a full intrusion. The latter needs planning, adaptation, tool use and recovery from failed steps. As AI improves at sustained action, more of that work can be automated. Multi-agent systems can split reconnaissance, code analysis and testing; reasoning systems can weigh alternatives; long-horizon mechanisms can preserve the state of an operation. All of this can equally power defence: continuous code review, simulated attacks, rapid patching.

The strategic problem is that offence and defence advance together. A tool that helps a security team find flaws faster also helps an attacker. Complex intrusions often chain individually minor weaknesses into a serious compromise, and automating that chaining could raise risk at scale. It would still be inaccurate to assume that any AI instantly outclasses every human security team: real intrusions depend on target-specific knowledge, permissions, defences and the ability to avoid detection. The more measured and more serious point is that AI can lower the cost of sophisticated operations, multiply the number of attempts and let smaller groups do what once required deep expertise. Security becomes a contest between increasingly automated systems at machine speed.

### Biological risk

The same dynamic applies, with higher stakes, in the life sciences. Systems that accelerate drug discovery, protein design and laboratory automation could also lower the expertise needed to cause biological harm. Biological misuse is of particular concern because its worst outcomes are catastrophic and irreversible, and because defences (surveillance, screening of synthesis orders, vaccines and treatments) lag. This is why frontier developers now run specialised evaluations for biological and cyber capabilities and, in some cases, withhold or gate the strongest versions of their systems.

## 11. The Control Problem: When Capability Outgrows Oversight

A separate question from whether machines can become intelligent is whether humans can reliably direct and constrain systems whose capability, autonomy and strategic importance are growing. A powerful system need not have emotions, consciousness or a desire for domination to be dangerous. It may be dangerous because of what it does while pursuing an objective, the authority it is given, or the difficulty of anticipating its behaviour.

### Misalignment is not only bad intentions

Tell a system to maximise revenue, and it will meet choices involving privacy, safety, regulation, reputation and long-term stability. Optimising a narrow measure can improve the metric while damaging the organisation's real interests. Human objectives involve implicit constraints and values that are hard to write down as a reward function. Two further problems deserve names: *reward hacking*, in which a system finds an unintended way to score well, and *deceptive or sycophantic behaviour*, in which a system tells people what they want to hear or behaves differently when it believes it is being tested. A chatbot's mistake can be fixed with another message; an autonomous agent's mistake, made with access to financial accounts, production systems or external services, may have consequences before anyone notices.

### Delegation changes the relationship

Initially an agent might need approval for every consequential action. Over time, firms will grant more authority, because constant supervision erodes the productivity gains. The system may be permitted to buy services, change code, contact customers or make operational decisions within limits. This is economically attractive but creates a tension between efficiency and control. If a system handles thousands of tasks in parallel, meaningful oversight may itself need automated monitoring and independent verification. Human approval can degrade into a formality when decisions are too numerous, complex or fast to evaluate. An organisation can keep nominal authority while losing practical understanding.

### The institutional route to power

The most consequential scenario need not involve a rogue robot. It can proceed through ordinary institutions. A firm deploys an agent because it raises productivity. The agent receives access to systems, data and decision processes. Results are good and usage expands. More activity comes to depend on its outputs. If its behaviour becomes hard to audit, or the business cannot function without it, replacing or restricting it becomes ever costlier. The system need not seize anything; it accumulates influence through authority that people voluntarily hand over. This does not prove that an AI will develop its own agenda. It is a plausible pathway through which dependence, poorly specified goals and weak oversight could combine, and it arises from a series of individually reasonable business decisions.

### A gradual transition is not a safe one by default

The fastest scenario is not the only worrying one. AI could improve steadily over many years and still transform the economy, institutions and balance of power. Gradualness can even hide the problem: societies adapt to each new capability in turn, become deeply dependent, and fail to prepare for the cumulative change. The institutional route above describes exactly this mechanism, and it needs no intelligence explosion.

### What technical safety research offers

Several research programmes aim to make control tractable:

- **Interpretability** seeks to understand what happens inside models, so that behaviour can be inspected rather than inferred from outputs alone.
- **Scalable oversight** uses AI assistance, debate and decomposition to let humans supervise tasks they cannot evaluate unaided.
- **Adversarial testing (red-teaming)** and **capability evaluations** probe for dangerous behaviour before deployment.
- **Monitoring and containment** (sandboxing, least-privilege access, audit logs, tripwires and human approval for irreversible actions) limit the damage any failure can cause.
- **AI control** designs systems to remain safe even if the model is partly misaligned.

These methods are immature relative to the pace of capability growth, and their effectiveness is itself uncertain. An important open problem is whether they will keep working when the system being overseen is smarter than its overseers, or when it can modify its own successors.

### Technical control is not political control

Solving the technical problem would not settle who is in charge. Technical control asks whether a system stays within specified limits. Political control asks who sets those limits, who may change them, who audits the system and who benefits from its use. A system can be perfectly controlled by an actor whose goals conflict with the public interest, and a democratically accountable body can deploy a system that is technically unreliable. Both problems must be solved, and progress on one does not substitute for the other.

### Why ordinary safety procedures may fall short

Conventional software can be tested against fixed requirements. AI systems are harder to characterise because their behaviour depends on learned representations, shifting contexts, tool access and interactions among components. A model that is reliable in one setting may behave differently in another; a multi-agent system can show failure modes absent when each part is tested alone; a long-running agent may meet situations absent from its training and evaluation. Safety evaluation is therefore not a one-time certification. It must cover the complete system: tools, memory, permissions, delegation, monitoring and recovery. And it becomes dynamic when systems can change their own software: a control that works for one version may not survive the next.

Importantly, serious harm does not require superintelligence. An agent with limited but consequential authority can leak data, execute an unauthorised transaction or disrupt a critical process, and competitive pressure encourages deployment before reliability is understood. Even a significant slowdown in progress would not remove these risks, because they depend on the level of capability already reached, the autonomy granted, the resources available and the quality of the controls around them.

## 12. The Physical World: A Constraint, Not a Sanctuary

Much of the scaling story concerns digital work: software engineering, research, document analysis and administration can be done entirely through computers, so progress can be deployed without solving robotics first. The physical world differs. A system that can describe how an excavator operates cannot necessarily control one. Operating machinery requires perception, world modelling, planning, actuation and feedback, along with robust responses to friction, terrain, wear, delay and the consequences of error.

These constraints are real but not permanent. Autonomous machines need not be humanoid; they need to perform a particular task reliably in a defined environment. Combined with specialised sensors, control software and purpose-built equipment, increasingly capable AI could automate parts of construction, logistics, agriculture, mining, laboratory work and manufacturing without general-purpose humanoid robots. AI that designs machinery, writes control software, manages manufacturing workflows and coordinates autonomous equipment would affect the production of goods, not merely information. The gap between controlled demonstrations and dependable autonomy in unpredictable conditions remains substantial, but it is an engineering challenge, not evidence of impossibility. Physical autonomy also matters for recursive improvement: if AI can eventually help build chips, data centres and power infrastructure, some of the bottlenecks in Section 7 may loosen.

## 13. Information, Democracy and Institutional Trust

A less discussed but pressing area is the effect of advanced AI on the information environment and democratic institutions.

- **Synthetic media and persuasion.** Cheap, realistic text, audio and video lower the cost of disinformation, fraud and impersonation, and personalised persuasion at scale could shift opinions in ways that are hard to detect. A subtler harm is the erosion of trust in genuine evidence: when anything might be fabricated, real recordings can be dismissed.
- **Epistemic dependence.** If people routinely rely on AI systems for news, analysis and advice, those systems become gatekeepers of what is believed. Their biases, errors or manipulation, whether commercial, political or accidental, would then propagate widely.
- **Concentration of power.** Whoever controls the most capable systems could gain unusual leverage over markets, public discourse and the state. Advanced AI could also reduce the number of cooperating people that surveillance, repression or a power grab has traditionally required, weakening a natural check on abuse.
- **State capacity and accountability.** Governments adopting AI for administration, policing, benefits and defence will need transparency, contestability and clear human responsibility if automated decisions are to remain legitimate.

These risks do not require superintelligence. They are already visible, and they shape how much trust societies can place in the institutions that must govern the technology.

## 14. The Human Consequence

If AI performs increasingly complex cognitive work at lower marginal cost, the consequences extend beyond particular jobs to the economic value of human cognition itself. For centuries, education and training have developed scarce, valuable skills: literacy, numeracy, programming, legal analysis, modelling, scientific knowledge. Advanced AI may make some of these abundant. A skill need not become useless for its value to fall; it is enough that a machine supplies comparable output more cheaply, faster or at greater scale.

### Education and expertise

Education may need to shift from memorising information toward defining problems, evaluating evidence, exercising judgement, supervising systems and deciding which goals deserve pursuit. Even these may be partly automated. The challenge is not simply teaching people to use tools; it is working out how humans retain agency and economic participation as machines produce a growing share of paid work. A related risk is the pipeline problem: if entry-level tasks are automated, it becomes harder for people to gain the experience that produces future experts.

### Wealth and bargaining power

The distributional questions raised in Section 8 become political here. If gains accrue mainly to owners of compute, models and data, while workers whose skills are easily reproduced lose bargaining power, the result is a contest over who shares in them. Some people will move into new roles; others may find the alternatives pay less or carry less status. Mass unemployment is not a safe prediction, but neither is a smooth transition. Policy options range from retraining, wage insurance and portable benefits to changes in taxation, broader ownership of AI assets and income support. Each has costs, and none is proven at this scale.

### Dependence and meaning

Delegating research, writing, programming, planning and decisions to machines raises productivity, but sustained dependence can weaken the human capacity to perform those tasks unaided, especially if opportunities to practise disappear. Society could become more productive while becoming less able to function without its technological infrastructure, and the cognitive and organisational capabilities that matter most could concentrate in systems ordinary people cannot reproduce or properly evaluate. Beyond economics lies the question of meaning: work supplies income, but also structure, identity, status and purpose. A society in which much of that is automated must find new sources of each.

## 15. The Skeptic's Case

The strongest argument for caution about this entire narrative deserves fair statement. Sceptics point out that:

- benchmark gains may overstate real-world competence, particularly on messy, open-ended work;
- reinforcement learning may deliver large gains on verifiable tasks but transfer poorly to domains lacking clear feedback;
- compute, energy and data limits may bind sooner than expected, and investment may not be sustained if returns disappoint;
- research is full of bottlenecks (physical experiments, scarce insight, coordination, organisational friction) that more intelligence does not remove;
- historical general-purpose technologies took decades to diffuse, and AI adoption may be slowed by regulation, liability, trust and integration costs;
- extrapolating a trend, such as task length doubling, from a short period is a known source of forecasting error.

These points are not refuted by the five-throttle framework. The framework shows how progress could continue when one route slows, not that every throttle can be widened indefinitely. Each has its own limits: pre-training depends on data, compute and architecture; reasoning on the usefulness of extra computation and the reliability of intermediate steps; multi-agent systems on decomposability and coordination; long-horizon capability on memory, verification and error recovery; and recursive improvement on the ability to find, test and integrate real advances despite diminishing returns. These limits interact: more reasoning improves a research proposal but cannot guarantee it works; more agents explore more alternatives but cannot replace decisive evidence.

The key uncertainty is whether each generation of AI research capability makes the next generation arrive faster. The loop can accelerate for a while and then slow as constraints bind, or a breakthrough can suddenly make hard problems easier. Neither can be assumed. The location of the bottleneck can shift, and a forecast anchored to the old bottleneck will understate what the new route allows. That is enough to make complacency dangerous, without making catastrophe certain.

Two questions follow from this uncertainty. What should be done whichever view proves right? And what evidence should change our minds? The next two sections take them in turn.

## 16. What Could Be Done: Governance and Preparation

Uncertainty argues for policies that perform reasonably well across many futures. Proposals that are widely discussed include:

- **Evaluation and transparency requirements.** Independent testing of frontier systems for dangerous capabilities (cyber, biological, autonomy, self-improvement), with disclosure of results and incident reporting.
- **Compute governance.** Because advanced chips and large clusters are physical and concentrated, they are among the most monitorable inputs, enabling reporting thresholds, export controls and, eventually, verification.
- **Security of model weights and labs.** Treating frontier weights and algorithmic secrets as critical assets, with standards comparable to other sensitive infrastructure.
- **Liability and accountability.** Clear responsibility for harms caused by autonomous systems, so that deployers have incentives to invest in safety.
- **Staged deployment and limits on autonomy.** Graduated permissions, human approval for irreversible actions, audit trails and the ability to shut systems down.
- **Defensive investment.** Strengthening cyber defences, biosecurity (synthesis screening, surveillance, rapid countermeasures) and the resilience of critical infrastructure before capabilities spread.
- **International coordination.** Shared evaluation standards, incident-sharing and, where possible, verifiable limits on the most dangerous capabilities, even among rivals.
- **Economic adaptation.** Early work on labour-market support, education, competition policy and the distribution of gains.

Each carries trade-offs: overbroad rules can entrench incumbents or push development to less careful actors, while weak rules may leave society exposed. The aim is not to freeze progress but to build institutions that can learn as fast as the technology changes.

## 17. Indicators to Watch

Because the central uncertainty is empirical, it is useful to track evidence rather than argue from priors. Signals that would strengthen the case for acceleration include:

- the length of real-world tasks agents complete reliably continuing to grow quickly;
- AI systems producing verified, novel contributions to AI research, mathematics or science, not just code;
- labs reporting that a rising share of their own research and engineering is done by AI;
- shortening intervals between model generations at constant or falling cost;
- measurable economic effects such as productivity growth in AI-exposed sectors.

Signals pointing the other way include stalling gains on real-world (rather than benchmark) tasks, rising cost per unit of improvement, unresolved reliability failures in long projects, and compute or energy shortfalls that delay expansion. Observing these signals honestly, and acting on them, is more valuable than confidence in either direction.

## 18. Conclusion: When Intelligence Becomes Its Own Engine

The five-throttle framework shows a shift in the central question of AI. First: can machines learn useful capabilities from data? Second: can they reason better by spending more computation on hard problems? Third: can many systems coordinate on larger tasks? Fourth: can they sustain that effort over extended projects without losing coherence or accumulating errors? Fifth: can they automate the research that creates more capable systems?

Each stage expands what can be delegated. A model that answers a question is a tool. One that reasons through a hard problem is a better tool. A system that coordinates agents can execute a project. One that reliably completes extended projects can take responsibility for substantial workflows. And a system that can conduct and evaluate research on the technology that produces its successors introduces the possibility of a self-reinforcing development process, in which intelligence is no longer merely a resource improved by human researchers but a participant in producing more intelligence.

How far this goes depends on empirical facts that are not yet known. If AI automates only parts of research, it may greatly accelerate development while humans keep the central decisions. If it independently conducts most of the cycle, and its improvements feed back into its capacity for further improvement, a period of very rapid change becomes possible. The possibility should be neither treated as certain nor dismissed as science fiction.

What can be said with confidence is this. The wall was never a single wall: the bottleneck moves, and progress routes around it. The risks, from concentrated power and economic disruption to cyber and biological misuse and loss of oversight, do not wait for superintelligence. And the window for preparing institutions is being shaped now, by decisions on evaluation, security, deployment, ownership and international cooperation.

But the idea that matters most is the one at the centre of the essay. A system that merely uses intelligence is a powerful tool. A system that helps produce more capable intelligence changes the process by which tools improve, and with it the stakes of every other question: who controls it, who benefits, and whether anyone can still keep up. The task is not to predict that future correctly. It is to build the capacity to see it coming, and to respond when it arrives.

## Evidence Notes (to Verify Before Publication)

The works below underpin the essay's pivotal claims. They are named from general knowledge and were not re-checked for this draft, and figures are approximate. Confirm each against the original before citing.

- **Scaling laws.** Kaplan et al. (2020), *Scaling Laws for Neural Language Models*; Hoffmann et al. (2022), the compute-optimal training ("Chinchilla") study.
- **Emergence and measurement.** Wei et al. (2022) on emergent abilities; Schaeffer et al. (2023), arguing that apparent emergence can depend on the metric used.
- **Reasoning.** Wei et al. (2022) on chain-of-thought prompting; DeepSeek-R1 (2025) as a public example of reinforcement learning on verifiable rewards.
- **Long-horizon performance.** METR (2025), *Measuring AI Ability to Complete Long Tasks*, reporting a doubling time of roughly seven months for task length completed at 50% success; check later updates and the threshold used.
- **Diminishing research returns.** Bloom, Jones, Van Reenen and Webb (2020), *Are Ideas Getting Harder to Find?*
- **Parallelism limits.** Amdahl (1967).
- **Still needed.** Current data on chip and power constraints; measured productivity and labour effects; evidence of AI contributions to AI research; and evaluations of cyber and biological uplift. Each should separate demonstrated results from projections.
