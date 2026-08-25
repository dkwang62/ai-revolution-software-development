---
title: "From DNA to a Machine-Native AI"
description: "An unrestricted exploratory side chapter about whether AI models can discover their own abstraction layers from biology, machine code, execution, and feedback."
---

# From DNA to a Machine-Native AI

## Can a Model Discover Its Own Abstraction Layer?

Date begun: 8 August 2026  
Status: Unrestrained exploratory draft  
Purpose: Deepen the author's understanding of what an AI model is  
Tags: #draft #side-chapter #ai-models #biology #machine-code #abstraction #thought-experiment

> **Working note:** This is intentionally much larger and more speculative than a normal book chapter. It is a laboratory for thought, not an approved part of the manuscript. Established results, interpretations, hypotheses, and speculation are labelled separately so that the argument can later be tested, compressed, divided, or abandoned.

## The Strange Similarity Between a Sentence, a Genome, and a Program

A sentence is a sequence.

A genome is a sequence.

A computer program is a sequence.

That superficial resemblance is easy to overstate. A sentence, a genome, and a program do not mean things in the same way. They were not created for the same purpose. They do not have the same kind of interpreter. Yet all three contain relationships distributed across ordered symbols. That makes them suitable for an unusually powerful kind of machine: a model that learns by trying to predict what belongs in a sequence.

The modern language model began with a deceptively simple training problem. Show the model part of a sequence and ask it to predict what comes next. Repeat this across an enormous collection of text. To improve its predictions, the model must learn regularities. Some are local: which words commonly follow other words. Some extend across a sentence: whether a verb agrees with its subject. Some extend across entire documents: which claim is being defended, which character knows a secret, or which function a piece of code is meant to perform.

The model is not handed a dictionary of every relationship it will need. Training alters millions or billions of parameters until the system becomes better at prediction. Those parameters collectively form a learned representation of the data. The representation is not a database of complete sentences. It is a compressed mathematical structure that makes some continuations likely and others unlikely.

Replace the words with DNA bases and the same broad idea becomes a genome model.

Replace the words with computer instructions and it becomes a machine-code model.

The representations are different. The physical systems are different. The tests of success are different. But the underlying research question is shared:

> How much structure can a model recover from a sequence without being explicitly taught the high-level concepts that produced it?

That question reaches into the heart of what an AI model is.

## Begin With Biology

DNA seems, at first, almost absurdly simple. Its familiar alphabet contains four bases:

- A
- C
- G
- T

From combinations of those four symbols emerge the instructions and regulatory structures involved in building, maintaining, reproducing, and adapting living systems. The compact alphabet creates an irresistible analogy with language and code. People speak of the genetic code, genes as instructions, and the genome as the source code of life.

The analogy is useful. It is also dangerous.

A Python instruction was deliberately designed to have an agreed operational meaning. Consider:

```python
print(2 + 2)
```

In a normal Python environment, the expression is interpreted according to a defined language specification and produces `4`. The program can still fail because of its environment, dependencies, hardware, permissions, or bugs elsewhere, but the language is intended to provide stable formal rules.

DNA is not Python written with four letters. Its effects depend on a living system. A sequence may be active in one cell and silent in another. A regulatory element can influence a distant gene because the genome folds in three-dimensional space. One genetic change may have no visible consequence, cause disease, protect against disease, or matter only in combination with other genes and environmental conditions. The organism changes over time. Cells respond to stress. Molecules interact. Random events occur.

There is no single biological interpreter applying one complete rulebook from the first base to the last.

The genome emerged through evolution. Its structures reflect selection, duplication, mutation, historical accident, reuse, competition, cooperation, and constraints accumulated across deep time. Biology did not begin with a clean architecture document.

For this reason, DNA is a powerful test of the boundary between pattern and understanding. If a model becomes good at predicting DNA, what has it learned? Has it learned only which bases commonly appear together? Has it learned the boundaries of genes? Has it learned regulatory motifs? Has it learned something about protein structure? Has it learned enough to propose a sequence that functions? At what point should any of this be called understanding?

## One Medical Workflow, Several Machine Representations

A personalised cancer vaccine provides a concrete example of why “an AI model” should not be imagined only as a language model, or even as one enormous model doing everything.

The broad workflow can be simplified like this:

```text
patient's tumour and healthy DNA/RNA
↓
find tumour-specific changes
↓
derive candidate protein fragments
↓
estimate which fragments the patient's HLA may present
↓
prioritise candidates for immune response
↓
design an mRNA sequence encoding selected candidates
↓
design and test a delivery formulation
```

At each arrow, both the scientific question and the useful representation change.

| Stage | What enters the model or system | Natural or useful unit | Example output |
| --- | --- | --- | --- |
| Find tumour-specific changes | DNA and RNA sequence data from tumour and healthy samples | Individual bases, k-mers, or learned nucleotide chunks | A list of candidate mutations |
| Derive candidate neoantigens | Mutations interpreted in protein-coding regions | Amino acids | Short mutated peptide sequences |
| Estimate presentation | A candidate peptide plus the patient's HLA sequence | Amino acids in both sequences | A predicted peptide-HLA presentation score |
| Prioritise immune targets | Presentation scores plus expression and other biological evidence | A mixture of sequences and measured features | A ranked shortlist for further testing |
| Optimise mRNA | The chosen protein sequence and possible synonymous RNA sequences | Nucleotides or codons | A candidate mRNA sequence encoding the same protein fragments |
| Develop delivery | Lipid structures, formulation ratios, particle measurements and experimental results | Molecular graphs, chemical strings and numerical features | Candidate lipids or formulations to test |

The first stage begins with the four-letter alphabet of DNA (A, C, G and T), or RNA, which uses U in place of T. A model might process one base at a time. It might group bases into fixed-length **k-mers**, such as 3-mers or 6-mers. It might instead learn a vocabulary of frequently useful chunks. These are alternative engineering choices, not different biological alphabets. Research comparing genome language models shows that tokenisation can materially affect what a model learns and how efficiently it processes long sequences. [Sanabria et al., “DNA language model GROVER learns sequence context in the human genome,” _Nature Machine Intelligence_, 2024](https://www.nature.com/articles/s42256-024-00872-0).

Once a mutation is translated into a possible protein fragment, the representation changes. Proteins are commonly described as sequences drawn from 20 standard amino acids. A **peptide** is a short chain of amino acids. A **neoantigen** is a tumour-associated peptide created by a mutation and potentially recognisable as foreign by the immune system.

The peptide alone is not enough. HLA molecules display selected peptides to immune cells, and people inherit different HLA variants. A model may therefore compare two amino-acid sequences: the candidate peptide and the patient's HLA molecule. For HLA class I, candidate peptides are commonly about 8–11 amino acids long, although other presentation pathways can involve longer peptides. Modern prediction systems can combine peptide sequence, HLA sequence, source-protein context and other evidence to estimate presentation. [Liu et al., “Towards designing improved cancer immunotherapy targets with a peptide-MHC-I presentation model, HLApollo,” _Nature Communications_, 2024](https://www.nature.com/articles/s41467-024-54887-7).

If candidates survive prioritisation and experimental review, the problem may change again: how should an mRNA encode them? Biology already supplies a meaningful three-base grouping. A **codon** is a triplet of nucleotides that specifies an amino acid or a stop signal. Because several codons can specify the same amino acid, many mRNA sequences can encode the same protein. Optimisation can explore those alternatives while preserving the intended amino-acid sequence, seeking better translation or stability. Codon-level input is natural for some systems, but it is not mandatory; other models work directly with nucleotide sequences or combine learned models with established optimisation methods. [Li et al., “Deep generative optimization of mRNA codon sequences for enhanced mRNA translation and therapeutic efficacy,” _Nature Communications_, 2025](https://www.nature.com/articles/s41467-025-64894-x).

Delivery is the useful exception to the sequence story. A lipid molecule is naturally described by atoms and bonds, which form a graph rather than a line. It can be flattened into a text-like chemical notation called **SMILES** and tokenised for a sequence model, but a graph model can preserve the bond structure directly. The complete nanoparticle formulation is more than one molecular graph: proportions of different lipids, particle properties, manufacturing conditions and experimental delivery results may all matter. A current lipid-nanoparticle database therefore combines molecular structures with formulation and assay data rather than pretending the entire delivery problem is one sentence-shaped input. [Lipid Nanoparticle Database, _Nature Communications_, 2026](https://www.nature.com/articles/s41467-026-68818-1).

This example carries three lessons beyond medicine.

First, the “token” is not always a word. It is a chosen computational unit.

Second, one real objective may require several specialised models and representations connected in a pipeline.

Third, a prediction is not a physical result. Candidate neoantigens, mRNA sequences and delivery formulations still require conventional analysis, laboratory experiments, safety assessment and clinical validation. The models help search an enormous space of possibilities. Biology supplies the verdict.

## What Genome Models Have Already Learned

This is not merely a philosophical exercise. Genome models already demonstrate that sequence prediction can produce representations containing biologically useful structure.

Evo 2 is a biological foundation model trained at single-nucleotide resolution on more than nine trillion DNA bases drawn from across the domains of life. Its context can extend to one million tokens. The published work reports that internal representations correspond with features including exon–intron boundaries, transcription-factor binding sites, protein structural elements, and regions associated with bacteriophages. It can predict effects of genetic variation and generate long biological sequences. [Brixi et al., “Genome modelling and design across all domains of life with Evo 2,” _Nature_, 2026](https://www.nature.com/articles/s41586-026-10176-5).

That result matters conceptually. Nobody had to provide the model with an English lecture before every sequence explaining what an exon was. The training process encouraged the model to learn regularities useful for predicting biological sequences. Some of those regularities align with biological structures that scientists can name.

AlphaGenome approaches a related problem from another direction. Given a long DNA sequence, it predicts thousands of molecular measurements connected with gene expression, splicing, chromatin state, accessibility, transcription-factor binding, and physical DNA contacts. In its published evaluations it matched or outperformed external models across most reported variant-effect benchmarks. Its authors also state a critical limitation: predictions of molecular effects do not directly establish the consequences for a whole organism or person. [Avsec et al., “Advancing regulatory variant effect prediction with AlphaGenome,” _Nature_, 2026](https://www.nature.com/articles/s41586-025-10014-0).

The distinction is essential. A model can become increasingly good at mapping:

> sequence → predicted molecular effect

without possessing a complete model of:

> sequence → cell → tissue → organ → organism → environment → lifetime outcome

Prediction can expand faster than causal understanding.

But prediction is no longer the entire story.

## When a Genome Model Began to Design

Researchers used Evo 1 and Evo 2 to generate complete genomes modelled on the bacteriophage ΦX174. A bacteriophage is a virus that infects bacteria. ΦX174 was a tractable experimental target: its genome is only 5,386 nucleotides long and contains 11 genes, yet those genes and regulatory elements must cooperate for the virus to assemble, infect a suitable bacterium, reproduce, and propagate.

The researchers did not simply ask a general chatbot to invent a useful virus. They created a pipeline. They specialised genome models using related phage sequences. They constrained host-related features. They built annotation and filtering systems. They generated candidates, synthesised DNA, introduced it into bacteria, and tested what happened.

Of 285 assembled and tested designs, 16 produced viable phages. Some demonstrated favourable laboratory performance relative to the reference phage. [King et al., “Generative design of novel bacteriophages with genome language models,” _bioRxiv_, 2025](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1).

As of 8 August 2026, this phage-design report remained identifiable as a preprint. It should not be confused with the peer-reviewed publication of the original Evo model in _Science_ or Evo 2 in _Nature_. The result is impressive, but its publication status and later evaluations must remain visible.

What did the experiment prove?

It did not prove that the model understood life.

It did not prove that the model could design a safe treatment.

It did not prove that the model could predict every effect of its generated sequences.

It proved something narrower and still extraordinary:

> A model trained on genomic sequences could learn enough of their distributed constraints to propose complete DNA sequences from which some functioning biological entities emerged after synthesis and experimental testing.

The approximately 94 per cent failure rate is not an embarrassment to be hidden. It reveals the structure of the achievement. The model generated possibilities. Biology selected among them.

The model's output was not self-validating. It could not stare more confidently at a sequence and make the phage real. The sequence had to enter a physical causal system. The bacteria, molecular machinery, experimental conditions, and measurements supplied the verdict.

An independent 2026 preprint analysing the designs argued that Evo substantially enriched for viable sequences compared with random mutation while remaining largely within known evolutionary territory. It characterised the model as a powerful but bounded evolutionary optimiser rather than an unconstrained inventor of radically new biology. It also warned against extrapolating from a compact phage to larger viruses or more complex genomes. [“Quantifying evolutionary novelty and design efficiency in generative genome design,” _bioRxiv_, 2026](https://www.biorxiv.org/content/10.64898/2026.06.12.731871v1.full).

This qualification makes the result more informative, not less. The model does not need magic. It can be valuable by searching a vast design space far more intelligently than random variation.

## Competence Without a Complete Theory

The phage experiment exposes an uncomfortable possibility for anyone who equates intelligence with verbal explanation.

A system may become capable of producing successful designs without possessing a complete causal theory that it can express to a scientist.

That sounds strange only because humans often learn through explanation. A student is asked to show the working. An engineer is expected to justify a design. A scientist proposes a mechanism. Language makes reasoning visible and allows other people to criticise it.

But nature does not require a verbal explanation before something works. Evolution produced wings without writing an account of aerodynamics. It produced immune systems without a textbook of immunology. Selection retained variations that survived and reproduced.

A model trained on sequences and outcomes may find regularities that support successful prediction or generation without translating those regularities into human concepts. Its competence may be real even when its explanation is incomplete.

This does not make explanation unnecessary. Explanation helps people determine when a result will generalise, which causal variables matter, what could go wrong, and whether an intervention is safe. It allows knowledge to transfer beyond one collection of examples. But explanation and performance are not identical.

The deeper lesson is:

> Models can acquire operationally useful structure before humans know whether the model has recovered the correct causal structure.

That gap between capability and understanding is one of the defining features of modern AI.

## Human Language Gives a Model a Head Start

Why, then, have general language models become so broadly capable?

Human language is not merely a stream of arbitrary symbols. It is a culturally accumulated compression of human experience. Words name objects, actions, roles, emotions, institutions, quantities, relationships, and abstractions. Sentences connect causes with effects, agents with intentions, evidence with claims, and present actions with imagined futures.

Consider:

> The king was killed, so the prince inherited the throne.

The sentence is short, but it invokes people, death, time, causality, kinship, political institutions, succession rules, and assumptions about a society. A language model trained across vast amounts of human text receives repeated exposure to these compressed conceptual structures.

Language was not consciously designed once and for all as a perfect representation of thought. It was shaped through biological and cultural evolution to support communication among people. It therefore offers a model an enormous head start in abstraction space.

DNA offers a different head start. It exposes the sequences on which biological processes depend, but it does not label their significance in the terms humans use. Machine code offers yet another. It exposes executable operations, but concepts such as “sorting,” “database,” or “user intention” may be distributed across thousands or millions of instructions and runtime states.

This produces a plausible hypothesis:

> The higher the abstraction level of the training representation, the easier it may be for a model to acquire the high-level concepts already encoded in that representation.

The qualification matters. Easier is not the same as ultimately better.

## The Advantage of the Lower Level

Human language is semantically rich but operationally ambiguous.

Machine code is semantically sparse from a human perspective but operationally precise.

DNA is operationally consequential but interpreted through a changing, context-dependent living system.

The low-level representation has a special advantage: it can be connected directly to outcomes.

A paragraph describing a fast algorithm may be persuasive and wrong. A program claiming to be fast can be executed. Its output can be checked. Its time can be measured. Its memory consumption can be recorded. Its energy use can be estimated or measured. Its crashes can be observed.

This creates a training loop that text alone cannot supply:

> generate → execute → measure → modify → execute again

The environment becomes a teacher.

Suppose three candidate implementations all produce the correct output:

```text
Program A → 1.42 milliseconds
Program B → 1.17 milliseconds
Program C → 0.94 milliseconds
```

For the narrow objective of speed under specified conditions, the result is not a matter of eloquence. Candidate C is faster.

Reality gives the model an objective signal.

But even here, human judgement has not vanished. Who selected the input distribution? What counts as correct? Is numerical precision preserved? Did the program exploit the benchmark? Does it remain secure? Does it use more energy to save time? Does it work on other machines? Has it moved cost outside the measured boundary?

Verifiability does not eliminate specification. It makes parts of the specification enforceable.

## From DNA to Machine Code

DNA is sometimes compared with machine code for biology. The analogy is imperfect, but it reveals a useful parallel.

In biology:

> genome sequence → molecular interactions → cell behaviour → experimental outcome

In computing:

> machine instructions → processor state transitions → program behaviour → measured outcome

The computational loop is generally cheaper and faster. A candidate program can be executed millions of times without synthesising DNA or culturing cells. Processor state can often be inspected with far greater precision than the internal state of a living organism. Tests can sometimes prove properties across bounded input spaces.

If genome models can learn enough from DNA to produce viable candidates, what might a model learn from the representation in which computation actually runs?

## Three AIs

Imagine asking three systems to work with addition.

The first is a language model. It has seen sentences such as:

> John has 25 apples and buys 37 more.

It learns addition through human explanations, examples, symbols, textbooks, conversations, and code.

The second is a conventional machine-code model. It sees recurring instruction patterns:

> load → add → store → compare → jump

It becomes good at predicting which instructions tend to follow others.

The third receives programs compiled for several different processors. It sees x86, ARM64, and RISC-V implementations of the same underlying tasks. Nobody gives it one universal language in which all programs have already been translated.

Eventually, it may detect:

> These different sequences of instructions perform the same computation.

That is the crucial step. The system has begun separating what is computed from how a particular machine computes it.

## Discovering an Esperanto for Computation

Consider three human sentences:

> **English:** The cat is on the table.  
> **French:** Le chat est sur la table.  
> **Chinese:** 猫在桌子上。

Their surface forms differ, but they communicate approximately the same situation. A multilingual model can learn a representation that connects them.

Now replace the languages with instruction sets:

- x86-64
- ARM64
- RISC-V
- GPU instructions
- WebAssembly

Different instructions, register systems, memory rules, and architectural effects can participate in programs that implement the same algorithm.

Today, engineers often normalise these differences through an intermediate representation such as LLVM IR or through binary lifting. In informal terms, the analysis system is given an Esperanto into which the different machine languages can be translated.

The thought experiment asks:

> Could a model discover its own Esperanto for computation?

The phrase is deliberately loose. The learned representation might not resemble a readable language. It might be a distributed geometry inside a neural network. It might combine program structure, state transitions, invariants, data flow, memory behaviour, and predictions of execution.

The model might internally compress ten thousand instructions into something functioning like:

> SORT

or:

> SEARCH

or:

> CACHE-FRIENDLY MATRIX OPERATION FOR THIS HARDWARE

Those labels are human approximations. The model's internal concepts could divide computation differently from us.

## Has Anything Like This Happened?

Parts of the idea already exist.

AlphaDev treated assembly-level algorithm discovery as a reinforcement-learning problem. The system constructed instruction sequences, executed them on test inputs, and received rewards connected with correctness and latency. It discovered faster small sorting algorithms, including instruction sequences incorporated into the LLVM C++ sorting library. Its representation combined a transformer over assembly instructions with encoded processor register and memory state. [Mankowitz et al., “Faster sorting algorithms discovered using deep reinforcement learning,” _Nature_, 2023](https://www.nature.com/articles/s41586-023-06004-9).

AlphaDev did not become a universal machine-code intelligence. It operated in tightly defined environments with constrained action spaces, carefully designed rewards, extensive computation, and specific tasks. But it established a crucial fact:

> A learning-and-search system can operate at the assembly level, use execution as feedback, and discover improvements beyond established human implementations.

AlphaTensor addressed a different computational level. It treated the discovery of matrix-multiplication algorithms as a game involving tensor decomposition. The system found efficient algorithms without beginning from ordinary linguistic descriptions of how matrix multiplication should be performed. [Fawzi et al., “Discovering faster matrix multiplication algorithms with reinforcement learning,” _Nature_, 2022](https://www.nature.com/articles/s41586-022-05172-4).

AlphaChip used reinforcement learning for chip floorplanning. It learned to place circuit components under interacting design constraints, and versions of the approach have been used in Google's TPU design process. [Google DeepMind, “How AlphaChip transformed computer chip design,” 2024](https://deepmind.google/blog/how-alphachip-transformed-computer-chip-design/).

Superoptimisation predates these systems. STOKE used stochastic search over x86-64 binaries to find functionally equivalent programs that could match or outperform compiler-generated or expert assembly in bounded settings. Later work has explored neural superoptimisation, execution-guided program synthesis, and repair based on observed failures.

These projects do not prove the grand hypothesis. They demonstrate that computation offers unusually strong feedback and that useful discoveries can occur below the level of ordinary human-written source code.

## What Does “Without High-Level Reasoning” Mean?

The phrase sounds simple but hides several different propositions.

First, a model might work without producing a natural-language chain of thought. That does not mean it lacks intermediate computation. It may transform internal representations across many layers while never expressing those transformations in words.

Second, a model might work without being given human concepts such as sorting, caching, or recursion. It could learn recurring structures from examples and outcomes.

Third, a specialised model might outperform a general language model within one domain without possessing broad conceptual knowledge.

Fourth, and most radically, a model might succeed without forming any hierarchical abstraction at all—through local pattern matching alone.

The first three are plausible. The fourth is much less clear. A system may look as though it operates without high-level reasoning while actually developing latent structures that serve the same functional purpose.

This suggests a more precise question:

> Can a model become highly capable without human-language reasoning and without human-supplied abstractions, by learning its own domain-specific abstractions from low-level sequences and verifiable outcomes?

That is different from asking whether it can succeed without internal abstraction of any kind.

The ultimate model may not think in English. It may still think—if that word is appropriate—in hierarchical representations learned from the structure of its environment.

## The Abstraction-Head-Start Hypothesis

Language models begin halfway up a ladder constructed by civilisation.

Human language already contains names for algorithms, intentions, causes, programs, objects, institutions, and values. Textbooks explain abstraction. Code repositories pair requirements with implementations. Scientific papers connect observations with theories. Discussion records disagreement and correction.

A language model inherits this organised conceptual residue.

A raw machine-code model begins lower. It sees operations and state changes. To become general, it may have to rediscover structures that humans supplied to language models explicitly.

This is the abstraction-head-start hypothesis:

> High-level representations make general learning efficient because previous intelligences have already compressed the world into reusable concepts.

It helps explain why language models can discuss thousands of domains after one broad training process.

## The Domain-Native-Discovery Hypothesis

The rival hypothesis begins from a different observation.

Human abstractions were designed for human cognitive limits and communication needs. They may not be the best possible representations for every task. A model learning directly from DNA may discover biological regularities that scientists have never formulated in language. A model learning from machine execution may discover computational structures that do not align with functions, classes, compiler passes, or instruction sets created by engineers.

This is the domain-native-discovery hypothesis:

> Given sufficient data, capacity, interaction, search, and verifiable feedback, a model can develop internal abstractions better suited to a specialised domain than the abstractions inherited from human language.

Evo's phages provide early, bounded evidence consistent with this possibility. AlphaDev provides another. Neither establishes that high-level reasoning is unnecessary. Both show that useful design can emerge from specialised representations connected to selection or verification.

The two hypotheses may both be true.

Language gives a model a head start.

Domain-native learning may give it a higher specialised ceiling.

## Why Multiple Architectures Matter

A model trained only on ARM64 may become an excellent ARM64 specialist. It could learn instruction patterns, pipeline behaviour, calling conventions, and common optimisations. But much of its knowledge could remain tied to ARM.

Training across x86-64, ARM64, RISC-V, GPUs, WebAssembly, and compiler representations creates a different pressure. The model repeatedly sees different implementations of equivalent computations.

If it organises its internal representation only by instruction set, it may fail to transfer.

If it begins grouping programs by behaviour, it has learned something above the instruction set.

An informative experiment would train on x86 and ARM, then test on RISC-V. A more demanding one would provide the specification and simulator for a previously unseen processor. Could the model learn to compile or optimise for it with little additional experience?

Success would not prove that the model understood computation universally. It would demonstrate transferable structure not reducible to memorising one architecture.

The hardware running the AI need not be the hardware it targets. A model on a GPU cluster can generate code for an iPhone, just as a conventional compiler can run on one architecture while targeting another.

> AI execution hardware is not target hardware.

The requirement is access to a reliable compiler, emulator, simulator, or physical machine that can return evidence.

## The Ultimate Model Is Not Trapped in Machine Code

The most powerful design would probably not use only machine code.

Raw instructions provide precise connection to execution, but they throw away or obscure useful high-level structure. Natural language provides goals and explanations but is far removed from processor behaviour. Source code, compiler intermediate representations, control-flow graphs, data-flow structures, traces, and hardware descriptions each reveal something different.

The ultimate model would move among them:

> human intention  
> ↓  
> natural language and conceptual knowledge  
> ↓  
> learned internal abstractions  
> ↓  
> algorithms and source code  
> ↓  
> compiler representations  
> ↓  
> machine instructions  
> ↓  
> processor and memory state  
> ↓  
> execution measurements  
> ↓  
> learning and the next design

Each representation supplies an advantage.

Natural language connects the system to human purposes.

Source code exposes named structure.

Compiler representations make transformations tractable.

Machine code connects to actual hardware behaviour.

Execution supplies evidence.

Learned latent representations allow the model to compress relationships in ways no human language designer anticipated.

The system is not language-native or machine-code-native. It is representation-flexible.

## What Would We Ask It to Do?

The first serious experiment should not be “become generally intelligent.” It should be bounded, measurable, and difficult.

For example:

> Take this existing piece of software and make it twice as fast or twice as energy efficient without changing its required behaviour.

That simple sentence hides the real experimental work. The system would need a frozen specification, extensive tests, held-out inputs, security constraints, numerical tolerances, resource boundaries, and repeatable measurements. It would be compared with expert programmers, optimising compilers, conventional search, and existing AI coding tools.

It must not receive credit for deleting work, lowering output quality, exploiting the test harness, caching the answer improperly, shifting cost to another machine, or tuning only for one public benchmark.

If a system repeatedly achieved large improvements across unseen workloads and hardware while preserving behaviour, it would deserve attention. It would show that learning and search connected directly to execution can recover optimisations beyond ordinary language-mediated programming.

## The Highest-Payoff Use: Improving Computing Itself

The largest payoff may not be writing ordinary applications. It may be improving the computational substrate.

Imagine assigning this objective:

> Minimise the energy required for this workload while preserving correctness, required performance, and safety.

The system could search across:

- algorithms
- data structures
- compiler strategies
- memory layouts
- cache use
- vectorisation
- parallelisation
- GPU kernels
- runtimes
- operating-system mechanisms
- processor instructions
- accelerator designs
- chip layouts

Then it could run or simulate candidates and measure the results.

The long-term loop is tempting:

> better optimiser → better code → better hardware → more efficient compute → better optimiser

This is not an automatic explosion. Fabrication takes time and capital. Energy and physical law impose boundaries. Simulation can be wrong. Security and verification grow harder as the optimiser controls more layers. Improvements face diminishing returns. An optimiser can exploit a reward function instead of improving the intended system.

But even a bounded version could matter enormously. Computing consumes resources across nearly every modern industry. Small improvements in widely used algorithms or hardware can propagate into billions of executions.

## Beyond Computing

The same structure extends to domains with reliable simulators or experiments:

> candidate molecule → simulation or assay → measured property → revised molecule

> candidate wing → aerodynamic simulation → drag and lift → revised wing

> candidate protein → structural prediction and experiment → measured function → revised sequence

> control policy → robot action → observed result → revised policy

The crucial ingredient is not machine code. It is the closed loop between representation, intervention, and evidence.

Where the simulator is accurate, learning can proceed rapidly.

Where the simulator omits decisive aspects of reality, the model may optimise the simulation rather than the world.

Biology reminds us of that difference. A genome model can propose a candidate, but the living system remains the final test.

## What Is the Model Actually Learning?

After this journey, the original question returns in a sharper form.

An AI model is not simply a collection of facts.

It is not merely an imitation of language.

It is not necessarily a transparent theory.

It is a learned transformation: a parameterised system shaped by data and objectives so that inputs lead to useful predictions, generations, decisions, or actions.

What it learns depends on at least five things:

1. **Representation:** words, DNA bases, source code, machine instructions, images, sensor readings, graphs, or combinations.
2. **Objective:** predict the next token, reconstruct missing data, classify a function, minimise error, win a game, preserve correctness, reduce latency, or maximise experimental success.
3. **Environment:** a static corpus, a compiler, a simulator, a processor, a laboratory, a market, or the physical world.
4. **Feedback:** human demonstrations, labels, test results, rewards, failures, measurements, or selection.
5. **Architecture and search:** the computational machinery that determines what relationships the model can efficiently represent and how candidate solutions are explored.

Change any of these and the resulting intelligence may change.

A language model trained on human text learns relationships useful for modelling human expression and the knowledge embedded within it.

A genome model trained on DNA learns relationships useful for modelling biological sequences.

A machine-code system trained through execution learns relationships useful for producing computational outcomes.

None is automatically universal. Each sees the world through a chosen interface.

## Is a Learned Representation Understanding?

The word “understanding” creates endless confusion because people use it for several different achievements.

A model may distinguish two kinds of input.

It may predict what happens next.

It may generalise to unfamiliar cases.

It may construct a working design.

It may explain the design in language.

It may identify causal variables.

It may know when its knowledge is insufficient.

It may adapt through experimentation.

These are not the same capability.

Rather than asking whether the model simply “understands,” ask:

- What distinctions does its representation preserve?
- Which transformations can it perform?
- What outcomes can it predict?
- Can it intervene successfully?
- Does it transfer beyond its training distribution?
- Can it explain or expose its evidence?
- Can independent tests verify its result?
- Does it recognise uncertainty and failure?

Evo may possess enough operational understanding of compact phage genomes to enrich for viable designs without possessing a complete causal understanding of virology.

AlphaDev may possess enough operational understanding of assembly-level sorting to discover faster instruction sequences without possessing the general understanding of a computer scientist.

Capability is layered.

Understanding, if we use the word at all, should be described by its scope.

## The Risk of Invisible Abstractions

If models learn their own internal abstractions, performance may improve faster than interpretability.

A human-designed abstraction such as a function has a name, an interface, documentation, and intended semantics. A learned abstraction may be distributed across parameters. It may be difficult to inspect. It may work reliably on familiar inputs and fail for reasons no engineer anticipates.

This creates a paradox.

The system may discover representations better suited to the domain precisely because they are not constrained by human concepts. But the less its reasoning resembles ours, the harder it may be to verify through explanation.

The answer cannot be to demand that every internal operation be translated into a persuasive paragraph. A fluent explanation can be fabricated after the fact. Nor can the answer be blind trust in performance.

The stronger response is layered assurance:

- formal constraints where possible
- exhaustive tests for bounded spaces
- diverse held-out evaluations
- adversarial testing
- independent implementations
- interpretable probes
- causal experiments
- sandboxed deployment
- limited authority
- monitoring and rollback
- physical validation where models meet the world

The more powerful the model becomes, the more important the surrounding system becomes.

## A Research Programme, Not a Single Model

The ultimate thought experiment could be investigated step by step.

Begin with equivalent small programs compiled to x86-64, ARM64, and RISC-V.

Train one model on a single architecture and another across architectures.

Ask each to retrieve equivalent programs, classify what they do, and transfer to a held-out architecture.

Compare them with a model given LLVM IR. If the raw-code model fails, the result shows the value of human-designed abstraction. If it succeeds, inspect whether it learned behaviour rather than compiler fingerprints or superficial patterns.

Then add execution.

Ask the model to generate equivalent implementations. Run them. Reject incorrect outputs. Measure speed, memory, and energy. Test unseen inputs. Compare with compilers and human experts.

Then add a new architecture.

Provide its specification and emulator. Measure how quickly the model adapts.

Then move across layers.

Allow changes to algorithms, compiler transformations, and hardware configurations while tightening verification.

At every stage, retain the possibility that the hypothesis is wrong. Perhaps language and compiler abstractions are indispensable. Perhaps learned latent representations fail to generalise. Perhaps search cost overwhelms the gains. Perhaps the model rediscovers familiar ideas inefficiently. A negative result would still teach us what abstraction contributes.

## The Ultimate Question

Human civilisation advances partly by constructing abstraction layers.

We hide transistors behind instructions, instructions behind programming languages, languages behind frameworks, and frameworks behind applications. Each layer allows people to control more complexity without thinking about every detail below.

Language models entered at the top of this stack. They learned from the representation closest to human intention.

Genome models entered another ancient stack. They learned from the sequences shaped by biological evolution.

A machine-native model would begin nearer the bottom of computation and learn from execution itself.

The deepest possibility is not that one representation defeats the others. It is that an AI system learns to move across all of them—and constructs new abstractions between them.

Then the history of abstraction changes direction.

Until now, humans have designed abstraction layers so that humans can control machines.

In the future, machines may learn abstraction layers that allow them to control complexity more effectively than human-designed representations alone.

That possibility leads to the question this side chapter exists to explore:

> Must intelligence inherit the abstractions encoded in human language, or can a model discover better abstractions directly from the structure and consequences of the world?

Biology suggests that useful design can emerge without a complete verbal theory.

Machine execution offers an environment in which candidate abstractions can be tested at extraordinary speed.

Human language remains the interface through which we express what we want and why it matters.

The ultimate AI model may combine all three:

> language for intention  
> domain-native representations for design  
> reality for verification

That is not yet a finished model.

It is a direction for understanding what models could become.

## Questions to Pursue Next

1. Do cross-architecture binary models already learn representations organised by function rather than instruction set?
2. How much of their transfer comes from compiler fingerprints, shared constants, or dataset leakage?
3. What changes when explicit intermediate representations are withheld?
4. Can execution-trained models invent stable reusable abstractions, or only local optimisations?
5. How does a learned computational representation compare with LLVM IR?
6. Can a model adapt efficiently to a genuinely unseen instruction set?
7. Does natural-language reasoning improve search, or merely make the result easier to communicate?
8. Can a non-verbal specialised model outperform a reasoning model while remaining controllable?
9. Which objectives produce genuine improvements rather than reward hacking?
10. How should semantic equivalence be established for stateful, concurrent, networked, or probabilistic programs?
11. Can learned abstractions transfer between software optimisation and hardware design?
12. What interpretability is necessary when success can be tested independently?
13. Where do simulations become unreliable substitutes for physical reality?
14. Does domain-native learning create a specialised ceiling higher than language-mediated learning?
15. What would falsify the claim that models can discover their own useful abstraction layers?

## Research Status

This is an exploratory argument, not a settled forecast. Its established examples are linked to their sources; its larger claims about machine-native and representation-flexible AI remain hypotheses to investigate. Further work should include a primary-source literature review of cross-architecture binary representation learning, program synthesis, superoptimisation, learned compiler optimisation, reinforcement learning from execution, hardware–software co-design, latent reasoning, interpretability, and reward hacking.
