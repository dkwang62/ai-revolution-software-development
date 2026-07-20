---
title: "Agents, Tools, and Integrated Systems"
---

# Agents, Tools, and Integrated Systems

In the language-learning application, the on-screen keyboard covered the field where a learner records a character's origin. That was my entire diagnosis. I knew what was wrong for the user; I did not know which part of Apple's interface framework controlled the screen or how the keyboard should change its layout.

The AI coding agent searched the project, found the interface, and made the lower fields scrollable. It also added a way to dismiss the keyboard. The first change did not compile. Instead of presenting the failed code as an answer, it read the compiler's objection, revised the implementation, and built the application again. The second build succeeded.

This episode gave me a practical definition of a word that is now everywhere in AI: **agentic**. A chatbot produces a response. An agent pursues an objective through actions and feedback:

```text
understand the objective
↓
inspect the environment
↓
choose and use a tool
↓
observe the result
↓
revise
↓
verify or stop
```

The model was still generating language, but language was now connected to files, search, editing, terminal commands, and the compiler. It could affect the system and use the system's response as feedback for its next step. Researchers sometimes call this alternation between reasoning and action **ReAct**. The term matters less than the loop.

## From an Answer to an Action

The word _agent_ is used loosely. For this book, an agent is not simply a clever chatbot or any program that calls a model. It is an engineered system that combines a model with a goal, context, tools, state, feedback, and rules for continuing or stopping.

A conventional assistant might explain how to repair a bug. A coding agent can search the repository—the project files and their recorded change history—open the relevant files, make a bounded change, run a test, inspect the failure, and try again. A customer-service agent might retrieve an account record, draft a response, and—if its authority permits—update a case. The distinction is the passage from words to controlled action.

Tools create both the value and the danger. A model that can discuss a database cannot damage it. A model connected to a database may read private information, write an incorrect value, or delete something important. Capability must therefore be separated from authority.

```text
intelligence proposes
permissions constrain
tools execute
logs expose
tests verify
humans remain accountable
```

Giving an AI tools is like giving a worker keys. Permissions decide which rooms the keys can open. Approval rules decide which actions still require the owner's consent. The agent may be capable of an action without being authorised to perform it. That separation is deliberate.

This is why an agent may be confined to a safe area, allowed to read but not change information, given access only to specified systems, required to ask before important actions, limited in how frequently it can act, recorded while it works, and provided with a way to undo changes. Industry terms include **sandbox** (an isolated working area), **read-only mode**, **scoped credentials** (login permissions limited to a specific purpose), **approval gate**, **rate limit**, **audit trail**, and **rollback** (restoring an earlier state). These protections are not bureaucratic decoration. They are part of the contract that a probabilistic model cannot supply by itself.

## Why Codex Felt Different

ChatGPT could suggest code and help me reason about the application. But I usually had to carry the technical situation into the conversation: paste the relevant file, copy the error, run the command, and return with the result.

Codex could work where the software lived. It could inspect the project, search its files, edit Swift or Python, run a build, read the error, and revise its own change. That made the interaction feel less like consulting an answer box and more like supervising a software worker.

The difference was not a claim that one product possessed intelligence and another did not. It was an architectural difference. The model had been connected to an environment and given tools under rules. Claude Code, Cursor, GitHub Copilot, and future systems belong to the same wider movement.

Another request made tool use tangible. I wanted an export command to collect the learner's essential data into one compressed file for backup. I did not specify every file or the implementation. The AI coding agent traced the existing export path, found the relevant services and resources, added a list of the included files, changed the source code, and ran an application build. A language model could describe an export feature. An agent with tools could participate in building and checking one.

These examples should not be mistaken for autonomy without supervision. I supplied the objective, decided which behaviour mattered, controlled permissions, and judged the result. The AI coding agent lowered the cost of implementation; it did not inherit responsibility for the application.

## Grounding: Finding the Real Problem

Agents need more than a request. They need **grounding**: relevant evidence from the world in which they are acting.

I once reported that a highlighted Chinese character was not working correctly while browsing a document. A superficial response would have rewritten the highlighting code. Inspection showed that highlighting already worked. The defect was navigation: the application did not move to the page containing the character, so the learner could not see the existing highlight.

That diagnosis depended on the current project rather than general training. The agent retrieved the relevant code, followed the state changes, and compared the intended workflow with the implemented one. Retrieval-augmented generation, usually shortened to **RAG**, describes the broader pattern of supplying a model with relevant external material at the time of the task. In coding, retrieval may mean repository search, documentation, logs, tests, or previous decisions.

More context is not automatically better. An agent can be distracted by irrelevant files or stale instructions. Useful grounding is selective: enough evidence to identify the actual system and its constraints.

## Human in the Loop Is a Design Choice

A phrase-discovery feature uses AI to identify useful Chinese phrases in text the learner has photographed or imported. The model is good at proposing candidates, but the surrounding application does not silently accept every proposal.

The application preserves the original passage, removes phrases already in the learner's collection, presents the remaining candidates for selection, and protects its stored data. The learner decides what to keep. These are examples of **guardrails**—constraints placed around model behaviour—and of a **human-in-the-loop** workflow.

The phrase can sound like a vague promise that a person will somehow catch mistakes. A serious design says exactly where intervention occurs and what the human can see. Approval before a database change is different from discovering the change afterward. A concise candidate list is different from asking a person to audit an invisible chain of model calls.

Human review should be reserved for consequential or ambiguous decisions. If every harmless step requires approval, the agent saves little time. If irreversible steps require none, the system is unsafe. Good orchestration places deterministic checks and human judgement where each has the greatest value.

## When the Agent Cannot See the Whole

Agentic systems are uneven. They can solve complicated logic and still miss an obvious visual defect.

This happened repeatedly while building the language-learning application and producing this book. On an iPhone, labels such as “Memory” and “Phrases” were squeezed into narrow controls and broke awkwardly across lines. In book diagrams, text escaped its box; one figure contained a blank shape where a label should have appeared. Each file existed, opened, and could be published. A check concerned only with successful generation would have passed.

Once I supplied screenshots, the AI system could recognise many of the defects and correct them. The missing capability was not necessarily vision. The workflow had stopped before rendering and inspecting its own output.

Logic often has crisp tests: given this input, did the order change state? Visual quality depends on geometry, fonts, screen sizes, language, accessibility settings, hierarchy, and human perception. Valid source code does not prove that a screen is usable.

The remedy is an engineering loop: generate the interface, render it at realistic sizes and in realistic states, measure obvious defects, inspect the image, revise, and repeat. The final question—whether the experience is clear and worthwhile—still requires human judgement.

Frameworks and design systems prevent predictable mistakes. Browser and **user-interface (UI) tests** can render several screen sizes. Screenshot comparisons can expose unintended change. Accessibility tools can detect many measurable defects. AI can run these checks, interpret results, and attempt repairs. Humans should increasingly judge whether the experience is clear and worthwhile rather than repeatedly finding that a button is too narrow.

My retrospective estimate is that work on the screens and controls consumed about 80 per cent of my development time. It was not measured by time-tracking software, so it should not be treated as a universal statistic. It describes a scarcity shift in one project: the AI coding agent accelerated underlying implementation more than it accelerated the final work of arranging and judging what the learner would see and touch.

That proportion should fall as multimodal agents close the render–inspect–correct loop. A deeper boundary remains. Overflow is measurable; deciding whether a learning screen feels calm, humane, or worth building is a judgement about people and purpose.

## Verification Creates Trust

An agent can fail at any step, and early errors can create later state. Trust cannot come from the model sounding confident. It must come from observable process.

During one data-recovery task, the AI coding agent identified nineteen missing files. It recovered one exact file from an archive containing 253 files, compared its digital fingerprint with the expected fingerprint, and confirmed that the missing count had fallen to eighteen. The value was not eloquence. Each claim corresponded to evidence the system could expose.

The same principle applies to ordinary development. A credible completion report should identify what changed and what was checked. Builds, tests, records of the changed lines, digital fingerprints of files, screenshots, and activity logs turn an agent's work into something a person can inspect.

This also explains why agents will not sweep traditional software engineering away. Compilers check code; schemas define permitted data; version control records changes; test suites check behaviour; security scanners find known risks; and permission systems limit access. Tools that reveal what a running system is doing provide **observability**. These narrow tools gain precision from their narrowness. The strongest system combines the model's breadth with their certainty.

## Integration Determines Economic Value

An isolated model answers one question at a time. An integrated agent can coordinate many model calls and tools toward a completed workflow. That makes agents potential economic multipliers—but integration and supervision have costs.

An organisation must connect the agent to real systems, maintain permissions, retrieve current context, monitor actions, evaluate outcomes, and handle failure. The useful question is not whether agents are impressive. It is whether a bounded agent reduces enough delay, human effort, and error to justify its inference cost and operational risk.

The best early uses are likely to have clear objectives, observable state, reversible actions, and strong tests: code search, test generation, documentation, migration analysis, data cleanup, and support triage. Critical changes require tighter boundaries and human approval.

Agents make AI feel like a worker. That feeling should not obscure what they are: systems built from models, tools, memory, permissions, and feedback. Greater agency increases the need for engineering discipline.

An AI agent can act. It cannot be allowed to decide by itself what counts as acceptable.
