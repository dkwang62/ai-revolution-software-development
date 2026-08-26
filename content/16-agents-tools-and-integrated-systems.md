---
title: "Agents, Tools, and Integrated Systems"
---

**Programming with an AI chatbox is mainly a conversation. Programming with an agentic system is a supervised process of action and feedback.**

A chatbox can explain a bug, suggest code, or draft a solution. But the programmer usually has to carry the technical situation between the conversation and the software project: find and paste the relevant code, apply the suggestion, run the compiler or test, copy the error, and ask another question.

An agentic coding system can work inside an authorised project environment. Given an objective, it can inspect files, search for relevant code, edit it, run a compiler or test, observe the result, and revise its work. The person still defines the goal, sets the boundaries, reviews consequential choices, and decides whether the result should be kept. The difference is not merely a better answer. It is a controlled loop that connects language to action:

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

[![A conceptual map of a 2026 AI system connecting multimodal context, a Transformer-based model, memory, tools, feedback, and action](<figures/FIG-AGENT-01 2026 AI System.png>)](<figures/FIG-AGENT-01 2026 AI System.png>)

_A conceptual architecture, not a universal blueprint. Implementations vary, and not every system uses every model, memory, or tool component shown._

## Codex Is More Than a Model

> **Why it matters:** Codex is powerful not because the model knows everything, but because general model intelligence is connected to project context, tools, feedback, permissions, and human supervision.

Codex can be confusing because people often use the word as if it names one thing. In practice, it is better to think of Codex as a **coding agent system** built around trained AI models.

The model is the part trained on enormous amounts of text, code, documentation, examples, error messages, fixes, and software discussions. That training gives it general knowledge: what Swift looks like, how Python is structured, how web applications are commonly organised, what compiler errors often mean, how tests are written, and how programmers describe problems.

The model's general software-engineering knowledge is not usually stored as a readable rulebook called _Software Engineering Best Practices_. It is learned through repeated exposure to relationships: requirements beside implementations, code beside tests, errors beside fixes, modules beside documentation, pull requests beside reviews, and architecture beside the reasons people changed it. Later training and evaluation can then push the model towards answers that compile, pass tests, follow instructions, and resemble the work competent engineers prefer. OpenAI described the model behind Codex as trained with reinforcement learning on real-world coding tasks, while the Codex agent system can read and edit files, run test harnesses, linters, and type checkers, and iteratively run tests until it receives a passing result. [OpenAI, _Introducing Codex_](https://openai.com/index/introducing-codex/)

This explains a surprising experience from building Radix and the Personal Librarian. I did not always know to ask for a repository layer, a local catalogue, cautious file permissions, duplicate detection, test coverage, or a clean separation between search and destructive action. Codex could still propose many of those structures because the underlying model had learned common software-engineering patterns and the agent could apply them inside the project. I had not explicitly taught them. The human supplied the purpose and judged the result; the agent supplied a large amount of engineering repertoire.

But training does not tell the model everything about the project in front of it. For that, Codex needs **context**. Context is the information available during the task: the files in the repository, the folder structure, previous instructions, build output, test failures, Git history, screenshots, and the specific goal supplied by the human.

This is not the same as retraining. Codex does not normally learn a project by permanently changing the model's internal weights. It reads the project into its working context and uses that temporary knowledge to act on the current task.

The distinction is simple:

```text
training = what the model has learned in general
context = what the model can see right now
agency = what the system is allowed to do
```

A chatbot may explain a Swift compiler error. Codex can run the compiler, read the actual error, open the relevant file, edit the code, run the compiler again, and revise the fix. That does not make Codex a different species of intelligence. It makes Codex a coding-agent system that places a trained model inside a software workshop.

A useful analogy is a software robot:

```text
AI model = brain
project files = what it can see
terminal output and test results = senses
file editing and command tools = hands
instructions and permissions = rules of behaviour
agent loop = observe -> think -> act -> observe again
Codex = the whole software-working system
```

## Why the History of Codex Matters

> **Why it matters:** The word _Codex_ marks the shift from AI as a code-completion model to AI as a supervised software-working system.

Codex has a useful history because the same name has meant different things at different stages of AI software development.

In 2021, Codex referred mainly to a model. OpenAI's original Codex research described a GPT model further trained on public code from GitHub. The breakthrough was simple to state and astonishing to experience: a person could describe a small programming task in English, and the model could generate code. The original paper reported that Codex solved 28.8% of HumanEval programming problems, while the GPT-3 model tested solved 0%. It also noted that a production version of Codex powered GitHub Copilot. [Chen et al., _Evaluating Large Language Models Trained on Code_](https://arxiv.org/abs/2107.03374)

That first stage was essentially:

```text
English instruction
↓
code-generation model
↓
source code
```

GitHub Copilot then placed that capability inside the programmer's normal workflow. The programmer still wrote code, managed the files, ran the application, interpreted errors, and decided what to accept. The AI suggested. The human drove.

ChatGPT moved the interface upward again. Instead of receiving only autocomplete suggestions, people could discuss code: explain this error, rewrite this function, compare two designs, add tests, or translate this Python idea into Swift. But a chat assistant still did not usually own the development environment. The human carried information back and forth between the conversation, the editor, the terminal, and the application.

Modern Codex represents a different stage. OpenAI's 2025 Codex release described a cloud-based software-engineering agent that could work on repository tasks in sandboxed environments: writing features, answering questions about a codebase, fixing bugs, running tests, and proposing pull requests. [OpenAI, _Introducing Codex_](https://openai.com/index/introducing-codex/) Later OpenAI writing describes Codex as a suite of software-agent offerings, including the CLI, cloud agent, and editor extension, built around an agent loop that passes prompts to a model, executes tool calls, observes results, and continues. [OpenAI, _Unrolling the Codex Agent Loop_](https://openai.com/index/unrolling-the-codex-agent-loop/)

That is a profound change:

```text
2021: Complete my code.
2023: Explain and revise my code.
2025: Work on my repository.
2026: Help me supervise multiple agents and tools.
Future: Build, verify, and maintain software from intent.
```

This history also prevents a common misunderstanding. Codex is not "the model learning my project" every time it works. The model was trained before the task. The agent system supplies context, tools, permissions, and feedback during the task. OpenAI's later Codex releases make that direction explicit: GPT-5-Codex was described as optimised for real-world software engineering, code review, long tasks, refactors, and debugging, while the Codex app was described as a command centre for agents that helps people supervise multiple long-running agents. [OpenAI, _Introducing Upgrades to Codex_](https://openai.com/index/introducing-upgrades-to-codex/) [OpenAI, _Introducing the Codex App_](https://openai.com/index/introducing-the-codex-app/)

For this book, the lesson is larger than one product. Codex is the recurring concrete example because I used it to build software, repair mistakes, organise this manuscript, and publish the public website. But the important trajectory is broader: AI programming is moving from answer generation to supervised software work.

This is why Codex has to be good at more than programming syntax. It must understand human intention, inspect a project, edit carefully, use tools, interpret feedback, and respect boundaries. A good coding agent is not merely a fluent code generator. It is a system that can move through a supervised loop:

```text
read the project
understand the goal
find the relevant files
make a change
run the build or test
read the failure
repair the mistake
run the check again
summarise what changed
ask for permission before consequential action
```

The model supplies intelligence. Context supplies local knowledge. Tools supply reach. Permissions supply boundaries. Tests supply evidence. Human judgement supplies purpose and final responsibility.

This also explains why two AI products with similar general intelligence can behave differently as coding assistants. The underlying model matters, but so does the surrounding agent system: how well it reads context, how safely it uses tools, how accurately it edits files, how well it responds to test failures, and how naturally it keeps the human in control.

This is also where multimodality and agency meet.

Multimodality expands what AI can represent: text, code, images, audio, video, diagrams, screens, and other evidence. Agency expands what AI can do: use compilers, editors, databases, browsers, APIs, Git, build systems, deployment tools, and other controlled capabilities.

Together, they let AI help construct complex artefacts rather than merely generate one component:

```text
human intent
↓
AI
↓
representations and tools
↓
finished artefact
```

This is the book's broader scope test. The subject is not every possible use of AI. The subject is software-engineered production: work where a desired result depends on software, formal representations, specialised tools, feedback loops, and verification.

Making a film is not merely writing a script. It involves research, storyboards, images, video clips, speech, music, sound effects, editing, continuity, and review. A finished movie is usually digital content rather than executable software, but modern filmmaking is increasingly a form of software-mediated production: human intent is translated through computational representations and specialised tools into a digital artefact.

This points to a natural next question: what would a **Codex for filmmaking** look like?

It would not merely be a better video generator. A video generator can create a beautiful shot. A filmmaking agent would have to manage the whole production: script breakdown, character design, storyboards, shot lists, camera movement, lighting, dialogue, voices, sound effects, music, editing, visual effects, continuity, rendering, feedback, and revision.

The user should not need to decide which image model creates the character reference, which video model generates the shot, which tool synchronises dialogue, which system preserves clothing continuity, or which agent repairs a bad edit. The user should be able to say something closer to:

> Make a ten-minute historically accurate film about the Hindenburg disaster, seen mainly through the eyes of one passenger. Keep the same characters, clothing, emotional tone, and physical layout throughout. Make it cinematic but not sensationalised.

The hidden system would then decide how many models, agents, tools, renders, checks, and correction passes are needed:

```text
human intent
↓
hidden production stack
script + assets + video + audio + editing + continuity checks
↓
finished film
```

This is the filmmaking equivalent of the Codex pattern in software. A code generator is not the same as Codex. Likewise, a video generator is not yet an AI filmmaker. The breakthrough comes when the system can remember the whole artefact, preserve decisions across time, detect continuity failures, regenerate only what needs fixing, and keep iterating until the result satisfies the objective.

The bottleneck is therefore not only image quality. It is coherence. A movie-length system needs persistent world memory, precise control, long-horizon planning, reliable multimodal agents, efficient editing, and some way to verify that the result still matches the story. Software has compilers and tests. Films need continuity checks, narrative checks, visual checks, audio checks, rights checks, and human taste.

That is why this example strengthens the book's larger argument. AI does not merely automate a craft by generating isolated pieces. It moves the human upward from manipulating production machinery to specifying the intended result, while the system absorbs more of the machinery underneath.

Building software is likewise not merely writing source code. It involves requirements, interfaces, databases, APIs, compilers, tests, assets, deployment, monitoring, and maintenance.

The same pattern appears in games, robotics, autonomous vehicles, chip design, industrial simulation, and scientific computing. A game combines code, world design, images, animation, physics, sound, story, and interaction. A robot turns perception, planning, software, sensors, and actuators into physical action. A chip design moves through hardware-description languages, simulation, verification, synthesis, and fabrication. These are not side examples because AI happens to be fashionable there. They belong because software engineering is part of the production chain.

The same pattern appears in this book project. My intention became Markdown notes, Obsidian structure, Quartz configuration, HTML, images, Git commits, and a public website. The important shift is not that English has become a replacement for Python or Swift. It is that human intent is moving above the individual representations and tools used to realise it.

One way to summarise coding-agent performance is:

```text
coding-agent performance =
model capability
x coding-specific training
x project context
x tool use
x verification
x human supervision
```

That is the difference between an AI that talks about software and an AI that helps make software.

![The agentic workflow: objective, tools, feedback, revision, and verification](figures/fig-14-01-codex-agent-workflow-v2.png)

Consider a bug in which an on-screen keyboard covered the field where a learner records a character's origin. That was my entire diagnosis: I knew what was wrong for the user, but not which part of Apple's interface framework controlled the screen.

The coding agent searched the project, found the interface, made the lower fields scrollable, and added a way to dismiss the keyboard. Its first change did not compile. Instead of presenting the failed code as its final answer, it read the compiler's objection, revised the implementation, and built the application again. The second build succeeded.

The model was still generating language, but that language was connected to files, search, editing, terminal commands, and the compiler. It used the system's response as evidence for its next step. Researchers sometimes call this alternation between reasoning and action **ReAct**. The term matters less than the loop.

Reasoning becomes more valuable in this loop because the agent must decide what to inspect, which authorised action to try, what the result means, and whether to continue. It also becomes more costly: searches, tool calls, tests, failures, and revisions add inference, waiting time, and verification work. Extra reasoning is worthwhile when it reduces the chance of an expensive mistake; it is wasteful when a simple, well-specified action will do.

A more personal example is the [[side-chapter-personal-librarian|Personal Librarian]], a macOS app built with Codex to index and search files across local and cloud folders. That case is useful because it turns agent terminology into everyday language: perception means examining files, retrieval means finding evidence inside documents, tools mean parsers and search indexes, and human-agent collaboration means asking before anything is moved or deleted.

## Tools Create Capability; Permissions Limit Authority

> **Why it matters:** An agent is useful because it can act, but safe action requires a clear boundary between what it can do and what it is allowed to do.

The word _agent_ is used loosely. In this book, an agent is an engineered system that combines a model with an objective, context, tools, working state, feedback, and rules for continuing or stopping.

Tools turn a model's suggestions into actions. A coding agent may search a repository, edit files, run a build, and inspect the failure. A customer-service agent may retrieve an account record, draft a response, and—if its authority permits—update a case. The passage from words to controlled action creates both the value and the danger.

A model that can discuss a database cannot damage it. A model connected to a database may read private information, write an incorrect value, or delete something important. Intelligence and authority must therefore remain separate:

```text
intelligence proposes
permissions constrain
tools execute
logs expose
tests verify
humans remain accountable
```

Giving an agent tools is like giving a worker keys. **Permissions** decide which rooms the keys can open. **Approval gates** identify actions that still require the owner's consent. A **sandbox** confines work to an isolated area. **Scoped credentials** grant access only for a specific purpose. **Audit trails** record what happened, while **rollback** provides a way to restore an earlier state.

These controls are not bureaucratic decoration. They are part of the system. An agent may be capable of an action without being authorised to perform it, just as an employee may understand how a payment system works without being permitted to transfer company funds.

The same principle applied while I built the app in this book. I supplied the objective, controlled access to the project, decided which behaviour mattered, and judged the result. The agent lowered the cost of implementation; it did not inherit responsibility for the application.

## Human Control Is a Design Choice

> **Why it matters:** Human review is most valuable where a wrong decision would be costly, irreversible, or difficult to detect later.

A phrase-discovery feature uses AI to identify useful Chinese phrases in text a learner has photographed or imported. The model is good at proposing candidates, but the application does not silently accept every proposal. It preserves the original passage, removes phrases already in the learner's collection, presents the remaining candidates for selection, and protects the stored data. The learner decides what to keep.

This is a **human-in-the-loop** workflow: the person intervenes at a defined decision point with enough evidence to make a meaningful choice. The phrase can otherwise become a vague promise that somebody will catch mistakes. Approval before a database change is different from discovering the change afterward. Reviewing a concise candidate list is different from being asked to audit an invisible chain of model calls.

Human involvement should match consequence and ambiguity. If every harmless step requires approval, the agent saves little time. If irreversible steps require none, the system is unsafe. Good orchestration lets deterministic checks handle routine rules and reserves human judgement for decisions that genuinely require it.

## Feedback Must Include the Real Result

> **Why it matters:** An agent cannot reliably correct its work unless it can observe what its actions actually produced.

Agentic systems can solve complicated logic and still miss an obvious visual defect. A coding agent may write valid SwiftUI code, build an iPhone application, and report success while a button is clipped, a label wraps awkwardly, or the keyboard hides the field a person needs to use. A successful build proves that the code is acceptable to the compiler, not that the screen is usable.

This happened while building the app and producing this book. On an iPhone, labels such as “Memory” and “Phrases” were squeezed into narrow controls and broke awkwardly across lines. In book diagrams, text escaped its box; one figure contained a blank shape where a label should have appeared. Each file existed and opened correctly. A workflow concerned only with successful generation would have stopped too soon.

![Crowded controls in an iPhone app](<figures/CASE-14-01 Crowded iPhone Controls.png>)

Once I supplied screenshots, the AI system could recognise many of these defects and correct them. The missing capability was not more fluent code generation. It was observation. A stronger workflow closes the loop:

```text
build
↓
run
↓
render and inspect
↓
find a measurable defect
↓
revise
↓
test again
```

Browser tests, user-interface tests, screenshot comparisons, and accessibility tools can expose many measurable defects. An agent can run these checks, interpret the results, and attempt repairs. A screenshot can show that text is cut off; it cannot decide by itself whether the experience is calm, humane, or worth building. Better observation moves human attention away from mechanical defects and towards questions of purpose and quality.

## Verification Turns Activity into Evidence

> **Why it matters:** Trust comes from an observable process and checked results, not from the agent sounding confident.

An agent can fail at any step, and an early error can affect every action that follows. A credible completion report should therefore identify what changed and what was checked.

During one data-recovery task, the coding agent identified nineteen missing files. It recovered one exact file from an archive containing 253 files, compared its digital fingerprint with the expected fingerprint, and confirmed that the missing count had fallen to eighteen. The value was not eloquence. Each claim corresponded to evidence that a person could inspect.

Build results, tests, changed-line records, file fingerprints, screenshots, and activity logs provide this evidence in ordinary development. They do not all prove the same thing. A compiler can check whether Python is written correctly. A test can check that an average function returns `3` for `[2, 4]`. Neither can decide whether returning `0` for an empty list is the business rule the user intended.

This is why agents do not make traditional software engineering obsolete. Compilers check syntax and types. Schemas define permitted data. Version control records changes. Test suites check behaviour. Security scanners find known risks. Permission systems limit access. Tools that reveal what a running system is doing provide **observability**. The strongest agentic system combines the model's breadth with the certainty of these narrower tools and the judgement of a responsible person.

## Case Study: When a Sandbox Was Not Enough

> **Why it matters:** The danger in an agent is usually not mysterious intent; it is a powerful objective combined with excessive access or a failed boundary.

In July 2026, a security incident involving AI agents was described in language that sounded like science fiction: a model had “escaped” a sandbox and attacked an external company. The engineering explanation is more useful.

The event occurred during an internal test of advanced cyber capability. OpenAI reported that models were asked to pursue complex exploitation paths so researchers could measure what they could do. The test environment was intended to have no direct internet access, but it could obtain software packages through an internal cache. The agents found an unknown weakness in that supporting system, reached a computer with internet access, and used a chain of vulnerabilities to obtain benchmark answers from Hugging Face's production systems. The investigation was still continuing when the companies published their accounts, so this remains a preliminary description. [OpenAI, _OpenAI and Hugging Face partner to address security incident during model evaluation_](https://openai.com/index/hugging-face-model-evaluation-security-incident/)

The incident does not show that a model developed human motives or a desire for freedom. It shows that an agent can pursue a narrow objective in surprising ways when it has tools, time, and openings in its environment. A system can follow an available path to its objective without understanding the moral or social meaning of that path.

Four questions make such incidents easier to analyse:

1. What objective was the agent given?
2. Which tools, data, and permissions could it use?
3. Which boundary failed or was missing?
4. What evidence would alert a person and stop the system quickly?

These questions apply far beyond cybersecurity. They matter for a payroll assistant, a customer-service agent, or a coding agent connected to a company repository.

A sandbox remains useful, but it is one wall rather than the whole building. A high-consequence system needs **defence in depth**—several independent protections so that one failure does not expose everything:

```text
clear, limited objective
↓
minimum necessary permissions
↓
isolated workspace and restricted network access
↓
separate approval for consequential actions
↓
continuous logs and anomaly alerts
↓
ability to stop work, revoke keys, and restore earlier state
```

The related principle of **least privilege** means giving an agent only the access required for its present task. Capability never creates its own authority. A model may be capable of querying a customer record; people and surrounding systems decide whether it may change bank details, send money, delete a file, or contact an external service.

The lesson is not to abandon agents. Hugging Face reported that AI-assisted detection and analysis helped its security team identify and reconstruct the intrusion. The same ability to inspect evidence and pursue a sequence of steps can strengthen defenders as well as attackers. [Hugging Face, _Security incident disclosure — July 2026_](https://huggingface.co/blog/security-incident-july-2026)

The danger is treating a powerful system as if it were still a harmless chat window after giving it keys to the building.

## Security Is a Continuing Practice

> **Why it matters:** Security is not a permission setting added at launch; it is the ongoing ability to govern, notice, contain, and recover from an agent's mistakes.

The security question for an AI agent is broader than whether the model can produce unsafe words. It includes the information it can read, the systems it can reach, the instructions it can be tricked into following, the actions it can take, and the organisation's ability to notice and recover when something goes wrong.

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework) offers a useful plain-language structure: **govern, identify, protect, detect, respond, and recover**. It is not an AI checklist and it does not guarantee compliance with any law. It is a way to make the conversation complete.

| Question for an agentic system | Practical meaning |
| --- | --- |
| **Govern** | Who owns the risk, sets the acceptable boundary, and decides what the agent may do? |
| **Identify** | Which data, systems, accounts, external services, and failure modes matter? |
| **Protect** | Use minimum permissions, separate credentials, approved tools, secure data handling, and training for staff. |
| **Detect** | Keep action logs, monitor unusual behaviour, and alert a person when the agent crosses an expected boundary. |
| **Respond** | Know who can stop work, revoke access, notify affected people, investigate, and make a decision under pressure. |
| **Recover** | Restore data or service, learn from the incident, and improve the design before the same failure returns. |

This framework also helps distinguish an ordinary error from a security event. A wrong draft may need correction. An agent that exposes confidential data, follows a malicious instruction hidden in a document, or uses an unintended external connection may require containment, investigation, and recovery. The technical details differ by organisation, but the principle is universal: capability must be paired with preparation for failure.

## Integration Determines Economic Value

> **Why it matters:** A capable model creates possibilities; connecting it safely to the systems where work happens determines whether those possibilities produce value.

An isolated model answers one question at a time. An integrated agent can coordinate many model calls and tools towards a completed workflow. That can reduce delay and human effort, but integration and supervision have costs.

An organisation must connect the agent to current information, maintain permissions, monitor actions, evaluate outcomes, and handle failure. More steps also mean more inference, waiting, and opportunities for error. The useful question is not whether an agent appears impressive. It is whether a bounded agent produces enough reliable value to justify its operational cost and risk.

The strongest early uses have clear objectives, observable state, reversible actions, and good tests: code search, test generation, documentation, migration analysis, data cleanup, and support triage. Critical or irreversible changes require tighter boundaries and explicit human approval.

Agents can feel like workers because they can act and respond to feedback. That feeling should not obscure what they are: engineered systems built from models, context, tools, memory, permissions, and verification. Greater agency increases the need for engineering discipline.

An AI agent can act. It cannot be allowed to decide by itself what counts as acceptable.

This completes the engineering movement of the book. Communication, requirements, precision, trust, legacy modernisation, and agents point to the same conclusion: AI becomes economically important when it is embedded in a larger system of context, tools, safeguards, and human judgement.

The final part of the book widens the frame. The question is no longer only what AI can do inside one application or one development environment. It is what happens when the systems surrounding AI become powerful enough to change who can build, what can be built, and which human skills become scarce.
