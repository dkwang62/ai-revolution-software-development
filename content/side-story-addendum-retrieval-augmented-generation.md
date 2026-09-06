# Retrieval-Augmented Generation: Understanding RAG, Harnesses, Connectors and AI Agents

## Introduction

Retrieval-Augmented Generation, usually abbreviated **RAG**, is frequently presented as an important technology in modern artificial intelligence. Universities teach courses on it, vendors advertise "enterprise RAG," and organizations hire engineers to build RAG systems. The terminology can make RAG sound more mysterious than it is. At its core, RAG addresses a very ordinary problem: an AI cannot give a well-informed answer if it does not have the information required to answer the question. A large language model may possess extraordinary general knowledge and reasoning ability, but it does not automatically know what is contained in a company's private files, what happened in a particular lawsuit, what a customer said yesterday, or what changed in an organization's database five minutes ago. RAG provides a mechanism for retrieving relevant external information and giving it to the model before the model produces its answer.

Once understood this way, however, RAG raises several questions. Haven't computer systems retrieved information for decades? Haven't enterprises long used adapters and connectors to access databases and applications? If retrieval is so fundamental, shouldn't it simply be part of the AI harness? Is RAG an industry standard that projects implement? Does every project need a RAG specialist? And with increasingly capable coding agents, why should an application developer learn how to manually construct one?

Answering these questions reveals something more interesting than RAG itself. RAG is best understood as one stage in the evolution from the standalone language model toward the AI agent operating through a general-purpose harness. This essay is organized so that each section builds on the last. Sections 1–6 explain what RAG is and why it exists. Sections 7–11 place RAG in the context of older enterprise technology and modern agent harnesses. Sections 12–14 focus on reliability and evaluation, the part of RAG that is genuinely difficult. Sections 15–19 look at where RAG stops applying, how it relates to agentic systems, and where the whole field is heading. A glossary appears at the end for readers who want a quick reference to the terms introduced along the way.

---

# 1. A Real RAG Application: The AI Legal Assistant

Consider a large law firm representing a company in a commercial dispute. The case concerns allegations that a supplier knowingly sold defective components while assuring its customer that there were no significant reliability problems. The litigation has generated an enormous collection of information: contracts and amendments, hundreds of thousands of emails, engineering reports, test results, meeting minutes, witness statements, invoices, internal memoranda, depositions, statutes and regulations, and previous court decisions. Suppose this amounts to two million pages.

A lawyer asks the firm's AI assistant: "What evidence do we have that the supplier knew about the defect before signing the contract, and what arguments could support a claim of fraudulent misrepresentation?" A powerful language model may understand contract law and fraudulent misrepresentation extremely well, but it cannot answer the first half of that question from its general training. It does not inherently know what happened in this case.

Somewhere among those two million pages might be an email written three months before the contract was signed: "Engineering has now reproduced the component failure under high-temperature conditions. We should not describe the current design as production-ready until this is resolved." That email could be crucial evidence. The model cannot reason about evidence it has never seen, and the law firm cannot simply place two million pages into every prompt. The system therefore needs to find the small amount of information relevant to the lawyer's particular question. That is the essential RAG problem.

---

# 2. The Basic RAG Process

The process can be represented simply: the lawyer's question leads to retrieving relevant information, which is given to the LLM, which generates a grounded answer.

The retrieval system might find the internal engineering email acknowledging the defect, a subsequent stress-test report documenting repeated failures, meeting minutes showing that senior management discussed the problem, an email to the customer stating that there were "no known reliability concerns," the relevant contractual representations, and applicable statutes and cases concerning fraudulent misrepresentation. These materials are supplied to the model as part of its temporary working context, and the model can then reason across them. It might conclude that the engineering email and test report provide evidence that the supplier knew of the problem before making its later representation to the customer, and analyze that evidence against the elements required to establish fraudulent misrepresentation.

The division of labour is important: the LLM contributes general knowledge, language, and reasoning, while retrieval contributes specific evidence and authoritative information. RAG combines the two.

This same pattern applies whether the underlying collection is two million pages or twenty. A student building a small class project — say, a chatbot that answers questions about a single course syllabus and a dozen readings — is doing RAG in exactly the same architectural sense as the law firm. The techniques may be simpler, using a single small index rather than a distributed system with access controls, but the underlying problem, finding the right small slice of a larger collection and giving it to the model, is identical. Scale changes the engineering difficulty; it does not change the concept.

---

# 3. What Does "Retrieval-Augmented Generation" Actually Mean?

The terminology becomes less intimidating when separated into its three components. Retrieval means finding information relevant to the current task. Augmented means supplying that retrieved information to the model as additional context. Generation means the model uses that information when generating its response. Retrieval plus LLM generation together make up Retrieval-Augmented Generation.

A useful analogy is an examination. A conventional LLM resembles an extraordinarily knowledgeable student taking a closed-book examination: it must answer from what it already knows. A RAG system gives the student access to a library, turning the same test into an open-book examination. The student's intelligence has not changed; what has changed is the ability to obtain the information needed for the particular question. The legal assistant illustrates why this matters — a model could know almost everything ever published about fraudulent misrepresentation and still completely miss the decisive internal email. General intelligence cannot substitute for access to the relevant facts.

This distinction matters practically. When a RAG system gives a wrong answer, it is tempting to blame "the AI." But the open-book-exam analogy suggests a more useful diagnostic habit: ask first whether the student, meaning the model, was ever handed the right page (retrieval), before asking whether the student read it correctly (reasoning). Many apparent reasoning failures are actually retrieval failures in disguise — the model never had the crucial passage in front of it, so no amount of intelligence could have produced the correct answer. Section 17 returns to this diagnostic idea in more detail.

---

# 4. Why Can't We Simply Give the Model All the Documents?

If the law firm has two million pages, why not simply let the model read everything? Because the amount of potentially available information can vastly exceed what is sensible or economical to place into the model's working context, and more importantly, most of it is irrelevant to any particular question. If the lawyer asks "Did the supplier know about the defect before signing?", the model probably does not need thousands of invoices concerning unrelated products, correspondence about employee holidays, or years of irrelevant accounting records. The system needs to reduce two million pages to perhaps twenty highly relevant passages before asking the model to reason. This is why retrieval is not merely about obtaining information — it is about obtaining the right information.

Two distinct constraints are at work here, and it helps to name them separately. The first is the context-window constraint: every model has a maximum amount of text it can process in a single request, and even where that limit is very large, filling it entirely with mostly irrelevant material has a real cost. It is slower, more expensive, and — perhaps counterintuitively — can make the model's reasoning worse, not better, because relevant details become harder for the model to weigh against a flood of noise. Researchers sometimes describe this as needles being lost in a haystack that has grown too large. The second is the cost and latency constraint: processing more text costs more money and takes longer, regardless of whether the context window technically permits it. A retrieval system that returns twenty well-chosen passages instead of two thousand marginally relevant ones is not just more accurate — it is also cheaper and faster, which matters enormously when a system is meant to serve many users at once. Both constraints point toward the same design goal: retrieve as little as possible while still retrieving everything necessary.

---

# 5. Keyword Search Is Not Always Enough

Traditional search might look for words such as "defect," "component failure," "reliability," and "contract." That will find some useful documents. But imagine the critical email instead says: "The new units continue to fail thermal cycling. Engineering recommends delaying production release." The word "defect" never appears. A good retrieval system should nevertheless understand that the passage may be highly relevant to a question about whether the supplier knew the product was defective.

This is why modern RAG systems frequently combine different retrieval techniques. Traditional keyword search remains useful, particularly for exact names, product numbers, legal citations and technical terms. Semantic retrieval attempts to find passages with similar meaning, even when they use different words. More sophisticated systems may retrieve a larger set of candidates and then rerank them to determine which are most relevant. A possible pipeline runs from the question through keyword and semantic search to candidate passages, then reranking, then the best evidence, and finally the LLM. These are important implementation techniques, but they should not obscure the underlying requirement: find the evidence the model needs in order to answer correctly.

## 5.1 A Closer Look at How Semantic Retrieval Actually Works

It is worth pausing on how a computer can search by meaning rather than by exact words, since this is the part of RAG that feels most like magic until it is unpacked.

A semantic retrieval system converts each passage of text into a list of numbers — a vector — using a model trained so that passages with similar meaning produce similar vectors, even when they share no words in common. "The units keep failing thermal cycling" and "the components are not reliable under heat" would produce vectors that sit close together in this numerical space, because an embedding model has learned that these sentences are about the same underlying situation. These vectors are stored in a specialized database, often called a vector database or vector store, optimized to answer the question "which stored vectors are closest to this new vector?" quickly, even across millions of entries. When the lawyer asks a question, the question itself is converted into a vector using the same embedding model, and the system searches for the stored document vectors closest to the question's vector.

Before any of this happens, long documents must be broken into smaller pieces called chunks, because an embedding vector represents a passage best when that passage is reasonably short and topically coherent. A forty-page deposition transcript is not embedded as one vector; it is split into paragraphs or sections, each embedded separately. Where to draw those boundaries — mid-sentence, by paragraph, by section heading — turns out to matter a great deal in practice: a chunk boundary that splits a crucial sentence in half can cause a system to retrieve half an idea, or miss it entirely.

Reranking exists because semantic and keyword search are typically fast but somewhat approximate — they are designed to quickly narrow two million pages down to a few hundred candidates. A second, slower, more careful model can then examine that shortlist and rerank it, since it is now looking at a small enough set of candidates to apply more computationally expensive judgment. None of this changes the underlying goal described in Section 4; it simply describes the machinery used to pursue it.

---

# 6. Real-Time and Contextualized Data

RAG is often discussed alongside the phrase "real-time, contextualized data." The two concepts should be distinguished. Real-time refers to freshness; contextualized refers to relevance. Suppose the lawyer asks, "Has the defendant produced the engineering documents we requested?" The answer may depend on documents uploaded this morning, and an index last updated three days ago is insufficient — the AI needs current information.

Now suppose the firm's litigation system contains fifty million documents across thousands of cases. The lawyer working on the supplier case should not receive information from unrelated clients merely because some documents contain similar words. The system needs information appropriate to this lawyer, this client, this case, this question, and this moment. That is contextualized information. Put together, currency, relevance, and authorization are what make context useful.

Freshness has a hidden engineering cost. Keeping an index perfectly current means the system must detect when a source document changes, re-process it, and update the index continuously, for millions of documents, without disrupting queries that are running at the same time. This is one reason "real-time RAG" is harder than it sounds: freshness is not just a retrieval-time decision, it is an ongoing data-pipeline responsibility that runs whether or not anyone is currently asking a question.

---

# 7. Haven't Enterprise Systems Always Done This?

This is where RAG should be placed in historical perspective. Enterprise applications have retrieved information from other systems for decades. Traditional enterprise architecture frequently looked something like an application connected through an adapter or connector to an enterprise information system. Adapters connected applications to systems such as databases, ERP systems, CRM systems, mainframes and document repositories, and they handled matters such as authentication, protocols, schemas, APIs, data formats, and transactions.

Modern AI systems still require these capabilities. A contemporary architecture might look like an AI agent connected through a harness to a connector, which in turn reaches an enterprise system. The connector answers one question: how can the AI access this system? RAG answers a different one: which information accessible through these systems should be placed into the model's context for this particular question? The distinction matters because connectors are not a new invention created by generative AI, and neither are databases, search engines, APIs or information retrieval.

---

# 8. So What Is Actually New?

The genuinely interesting development is not that computers can retrieve information — they have done that for generations. The more important change is increasingly who determines what should be retrieved. Traditional applications generally have predetermined information flows: a programmer might write logic that takes a customer number, retrieves the account record, retrieves the orders, and displays specified fields. The programmer determines the path beforehand.

Now return to our lawyer, who asks: "Did the supplier know about the defect before signing the contract?" An agentic AI might initially search engineering records and find evidence of failures. It then reasons about who knew about these failures, and searches management correspondence, which reveals that a vice-president received the engineering report. The agent then asks what the company subsequently told the customer, searches external correspondence, and discovers the statement that there were "no known reliability concerns." It then retrieves the contract and relevant legal authorities. The process becomes a loop of reasoning, retrieving, observing, reasoning again, retrieving again, and finally synthesizing. The programmer did not necessarily anticipate and hard-code that exact investigative path — the model helps determine which information it needs next. That is a much more consequential development than merely connecting an LLM to a vector database.

---

# 9. The Harness Is the Bigger Concept

RAG becomes easier to place once we distinguish the model from the harness surrounding it. The model provides general capabilities: language, reasoning, interpretation, and planning. The harness allows that intelligence to operate in a real environment. A modern harness might sit beneath the model and provide retrieval, context management, memory, tools, connectors, permissions, execution, verification, logging, and error handling.

The model might determine, "I need all engineering reports produced before the contract date concerning thermal failures." The harness determines how to make that happen: it may select the appropriate connector, authenticate against the document system, perform searches, enforce permissions, return the relevant information, and preserve its provenance. This leads to a broader architecture in which the model, a general harness, and project-specific data, tools, and rules together make up the AI application. RAG is one mechanism within that architecture.

---

# 10. Is the Harness General, or Must Every Project Build One?

Ideally, much of the harness is general-purpose. There is little reason for every law firm, bank, hospital or manufacturer to independently reinvent basic mechanisms for tool invocation, retrieval, authentication, context management, memory, retries, logging, error handling, and verification. These capabilities increasingly belong in reusable platforms and agent harnesses.

What changes between applications is the environment. For the law firm, a general harness is paired with a case-management system, a document repository, legal databases, email, and a billing system, all governed by legal rules and permissions. A manufacturing company would connect different systems, and a bank would connect still others. The project-specific work therefore increasingly concerns what information exists, where it is, which source is authoritative, who may access it, how current it must be, and what constitutes a correct answer. These are largely information architecture, security, domain and business-requirement questions.

---

# 11. Is RAG an Industry Standard?

No. RAG is not an industry-standard specification comparable to HTTP, SQL or OAuth. There is no document defining a universal set of requirements that every "RAG-compliant" application must satisfy. RAG is an architectural pattern. Different RAG systems may use completely different databases, search engines, embedding models, indexing strategies, chunk sizes, ranking algorithms, and context-management systems — RAG describes an architectural pattern, not a technical standard. This means that saying "implement RAG" is not a sufficient project specification. The project still needs to define the required behavior.

---

# 12. Does Every Project Need a RAG Specialist?

Not necessarily. The basic architecture is increasingly conventional. A project specification might say: index all documents belonging to a legal matter, support exact and semantic search, retrieve the most relevant evidence for each question, preserve document identity and page references, enforce existing matter-level permissions, cite every factual assertion back to its source, and test retrieval against a set of known questions and evidence. A capable coding agent can implement much of this using established software components, following a pipeline that runs from documents through extraction, indexing, retrieval, ranking, and context, into the LLM.

But there is an important qualification: basic RAG is relatively straightforward, while reliable enterprise RAG can be difficult. Consider the legal assistant. What happens if it retrieves the wrong version of a contract, exposes another client's privileged document, relies on a judgment that has subsequently been overturned, misses the most damaging email, retrieves ten documents supporting one side while overlooking three contradicting it, or attributes a statement to the wrong witness? The code may be functioning perfectly while the system remains professionally unacceptable. The difficult problem becomes reliability.

---

# 13. Retrieval Must Be Evaluated

Suppose the lawyer asks, "What evidence establishes that management knew about the defect?" The RAG system returns ten documents containing the words "management" and "defect." Technically, retrieval succeeded. But perhaps the decisive evidence is an email saying, "I briefed the executive committee yesterday on the thermal cycling failures." The system has failed if it doesn't find that email. Therefore the important question isn't "does the RAG run?" It is whether it reliably retrieves the evidence required to perform the task.

A good project should therefore contain evaluation cases. For example, given the test question "Did senior management know about the thermal failures before the contract was signed?", the system should be expected to discover an engineering report dated March 12, an email to the vice-president dated March 15, and executive committee minutes dated March 19. Now the retrieval system can be tested. This illustrates a broader change brought about by AI-assisted programming: as implementation becomes easier, specifying and testing the intended outcome becomes more important.

## 13.1 Vocabulary for Evaluating Retrieval

Two concepts borrowed from information retrieval are worth knowing by name, because they capture two different ways a system can fail. Recall asks: of all the passages that were actually relevant, how many did the system find? A system with poor recall misses evidence, such as failing to surface the executive committee minutes above — missed evidence is often the more dangerous failure in a legal or medical context, because the system and the user may never know what was overlooked. Precision asks the opposite question: of all the passages the system returned, how many were actually relevant? A system with poor precision buries the model, and the human reviewer, in noise, such as ten documents about "management" and "defect" that have nothing to do with the actual question.

There is usually a trade-off between the two: casting a wider net tends to improve recall at the cost of precision, and vice versa. This is exactly why the two-stage "retrieve broadly, then rerank" pipeline from Section 5 exists — it tries to get the recall benefits of a wide net together with the precision benefits of careful filtering.

Groundedness is a related but distinct concept, this time about generation rather than retrieval. It asks whether every claim in the model's final answer is actually supported by the retrieved evidence, or whether the model has quietly added something from its own general knowledge, or invented something outright. A RAG system can have excellent retrieval and still produce an ungrounded answer, if the model embellishes beyond what the evidence supports. This is why the strongest RAG systems require the model to cite the specific passage supporting each claim — citation is not just a courtesy to the reader, it is a mechanism that makes groundedness checkable.

---

# 14. Then Why Take a Course to Learn RAG?

The answer depends upon what the student intends to become. Someone planning to specialize in AI information retrieval should understand embeddings, vector databases, semantic similarity, hybrid search, chunking, reranking, retrieval metrics, latency, and context-window management. Those subjects remain technically valuable.

But someone intending to design applications using coding agents has a different educational requirement. That person needs to understand enough to specify what information the AI must be able to find, what sources it should trust, how fresh the information must be, what information the user is permitted to see, what should happen when sources conflict, and how the team will know whether retrieval is working correctly. A coding agent can increasingly handle implementation details. This changes the development process from learning implementation, then writing code, then debugging, then building, toward a different sequence: understand, specify, let the AI implement, and then verify. The technical knowledge has not disappeared. Its center of gravity has shifted.

---

# 15. A Useful Counterexample: The Personal Librarian

It is equally important to understand what should not automatically be called RAG. Consider a Personal Librarian designed primarily to synchronize software projects through GitHub and iCloud between a MacBook and Mac mini, and to allow a user to tidy and organize Gmail using natural-language instructions.

Suppose the user says, "Make sure my Radix project is synchronized between the MacBook and Mac mini." The system needs to inspect the current repository and filesystem state, compare versions, identify differences or conflicts, reason about what should happen, and then perform or propose the appropriate synchronization operation. Or the user says, "Clean up promotional emails, but don't touch anything concerning Marriott or banking." The system searches Gmail, examines candidate messages, classifies them according to the user's intention, and then archives, labels or deletes the appropriate messages.

Both tasks involve retrieval. But calling the whole Personal Librarian a RAG system would stretch the term beyond usefulness. Its fundamental process is to understand intention, inspect current state, reason, and act. The lawyer's RAG system, by contrast, fundamentally moves from a question to retrieving relevant knowledge or evidence, augmenting the model's context, and generating a grounded analysis.

This distinction is important. Not every AI system that retrieves information is a RAG system. Retrieval is a general capability; RAG describes a particular use of retrieval — augmenting the information available to a generative model so that its generated response is grounded in relevant external information. A simple test a learner can apply is to ask what the system's output actually is. If the output is a generated answer, report, or piece of analysis that needs to be grounded in retrieved evidence, RAG is a fitting description. If the output is an action taken on the world — a file moved, an email archived, a repository synchronized — the retrieval involved is better described as part of an agent's general sense-and-act loop, even though the underlying search techniques, such as keyword matching or semantic similarity, may be identical under the hood.

---

# 16. Search, RAG and Agentic Retrieval

We can now distinguish three related architectures. In plain search, a query goes to a search engine and comes back with results, which the user interprets. In RAG, retrieved information is supplied to the model: the question is retrieved against, the results become context, and the LLM produces a grounded answer, which it interprets and synthesizes itself. In agentic retrieval, the AI can repeatedly decide what information it needs, moving through cycles of reasoning, retrieving, reasoning again, retrieving again, deciding, and acting. The retrieval process becomes part of an ongoing reasoning-and-action loop, which is increasingly important because AI is moving beyond answering questions toward accomplishing objectives.

It is tempting to think of these three as competing technologies, but a cleaner way to see it is as increasing autonomy over the same underlying retrieval machinery. Plain search hands control entirely to the human. RAG hands the model a single, human-triggered retrieval step and asks it to synthesize. Agentic retrieval hands the model repeated, self-directed control over when and what to retrieve. The embeddings, indexes, and rerankers described in Section 5 can be identical across all three; what changes is who decides when to invoke them, and how many times.

---

# 17. Why the Fancy Terminology?

There was a legitimate historical reason to give RAG a name. Early LLM applications were largely a simple chain from prompt to model to response. Adding external retrieval substantially changed what these applications could do, and researchers and engineers needed terminology to describe the architecture.

The terminology also remains useful for diagnosing failures. An incorrect legal answer could arise for several distinct reasons: retrieval failed and the system never found the crucial email; context construction failed and the email was found but the relevant passage wasn't supplied to the model; reasoning failed and the model received the correct evidence but interpreted it incorrectly; generation failed and the model's final explanation misstated its reasoning or evidence; or, in an agentic system, tool execution failed and the correct decision was reached but the subsequent action failed. Engineers need these distinctions, but users do not necessarily need to think about them every time they use an AI system.

A practical diagnostic habit follows from this. When a learner is debugging a RAG system that gave a wrong answer, the fastest first step is usually to inspect what was actually retrieved and handed to the model, not to inspect the model's reasoning. If the crucial passage was never retrieved, no improvement to prompting or reasoning will fix the answer; the fix belongs in the retrieval or indexing stage. If the passage was retrieved but the model still answered incorrectly, the problem lies downstream, in generation or reasoning. This single check — was the evidence even in the context window — resolves a large share of real-world RAG debugging sessions before any deeper investigation is needed.

---

# 18. RAG May Eventually Disappear into the Harness

This leads to an interesting prediction. Many technologies begin as specialist capabilities and eventually become ordinary infrastructure. As agent harnesses mature, a developer may no longer explicitly construct a RAG pipeline for every project. Instead, the developer might specify: the agent has authorized access to these case documents, legal databases and correspondence; when answering substantive questions, retrieve the most relevant authoritative information, verify its currency, preserve client permissions, cite the evidence used, and search again when the available evidence is insufficient.

The harness could determine which retrieval technique to use, which sources to search, how much information to retrieve, whether reranking is necessary, whether another search is needed, and how to construct the model context. At that point, saying "this application uses RAG" may eventually become about as remarkable as saying "this application uses a database." RAG would remain essential — it would simply have become infrastructure.

---

# 19. The Broader Lesson for Software Development

RAG illustrates a larger transformation occurring in software engineering. Traditionally, a human programmer encoded much of the procedure: the human specified how. Increasingly, the human can specify what instead. For the legal assistant, the requirement might be: determine whether there is evidence that the supplier knew about the defect before contracting, use only authorized sources, identify contradictory evidence, cite every material conclusion, and do not assert anything that cannot be traced to the evidentiary record.

The AI system increasingly determines which repositories to search, which search terms to use, whether semantic retrieval is appropriate, whether it has enough evidence, whether it should search again, and which documents contradict its tentative conclusion. The coding agent can meanwhile implement much of the underlying software. The valuable human contribution increasingly moves toward defining objectives, identifying authoritative sources, establishing constraints, expressing domain knowledge, defining permissions, designing evaluation criteria, and deciding what constitutes success.

---

# Conclusion: RAG in Its Proper Place

Retrieval-Augmented Generation is neither magic nor merely meaningless jargon. It solved an important limitation of standalone language models: a model cannot reason about information it does not have. RAG gives the model relevant external information when that information is needed. The legal assistant provides a clear example. General legal intelligence is insufficient when the answer depends upon a particular email buried among two million pages of evidence. The system must find that email, provide it to the model, and allow the model to reason about it alongside the relevant law and other evidence.

But retrieval itself is not new. Databases are not new. Search is not new. Enterprise connectors and adapters are not new. What is increasingly new is the presence of a sufficiently capable general-purpose model that can determine what it needs to know, where it might find it, whether what it found is sufficient, what else it should retrieve, and what conclusion follows from the evidence — and, increasingly, what it should do next. This produces a broader progression, from a plain LLM, to an LLM with RAG, to an LLM with tools, to a full agent operating through a harness and connectors.

The Personal Librarian illustrates the final distinction particularly well. It retrieves information from GitHub, iCloud and Gmail, but its principal purpose is to understand the current state of those systems and act upon them. It is better understood as an agent using connectors and tools than as a RAG application. The law-firm assistant, on the other hand, retrieves evidence specifically so that a generative model can produce an answer grounded in information outside its original knowledge. That is RAG in the clearest sense.

For a university student, therefore, the most important lesson is not how to memorize a collection of fashionable AI acronyms. It is to understand the architecture as a whole: the model, the harness, the connectors, the external information, and the project rules working together. The model supplies general intelligence. Connectors provide access to external systems. Retrieval selects the information relevant to the current problem. RAG places that information into the model's context so it can generate a grounded response. The harness coordinates these mechanisms, and an agent increasingly decides how to use them dynamically.

Seen from this perspective, RAG is neither mysterious nor trivial. It is one important mechanism in a much larger transition: from software in which humans explicitly program the path to information, toward intelligent systems capable of determining for themselves what information they need in order to accomplish the intention we give them.

---

# Glossary

**Chunking** — Splitting a long document into smaller passages before indexing, so each passage can be searched and embedded individually.

**Connector / adapter** — Software that lets an application or agent communicate with a particular external system (a database, an email inbox, a document repository), handling authentication, protocols and data formats.

**Context window** — The maximum amount of text a model can process at once in a single request; retrieved passages must fit within it alongside the question and any instructions.

**Embedding** — A numerical vector representation of a piece of text, produced so that passages with similar meaning have vectors that are close together, enabling search by meaning rather than by exact wording.

**Grounded answer / groundedness** — An answer in which every substantive claim can be traced back to specific retrieved evidence, rather than being invented or drawn solely from the model's general training.

**Harness** — The surrounding software infrastructure — retrieval, memory, tools, connectors, permissions, logging, verification — that lets a model's general reasoning operate inside a real environment.

**Hybrid search** — Combining keyword search and semantic search, typically to capture both exact-match terms (names, citations, product numbers) and conceptually similar passages that use different wording.

**Precision** — Of the passages a retrieval system returned, the proportion that were actually relevant.

**Recall** — Of all the passages that were actually relevant, the proportion the retrieval system successfully found.

**Reranking** — A second, more careful pass over an initial, larger set of retrieved candidates, used to reorder them by relevance before the smallest and best subset is passed to the model.

**Vector database / vector store** — A database specialized for storing embeddings and quickly finding which stored vectors are closest to a new query vector.
