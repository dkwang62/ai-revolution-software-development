---
title: "Agents, Tools, and Integrated Systems"
---

# Agents, Tools, and Integrated Systems

So far, we have mostly discussed AI as a system that responds to prompts.

A user asks for help. The model generates an answer. The human evaluates it.

But software is moving toward something more active. AI systems increasingly use tools, inspect files, call APIs, run tests, search documents, modify code, and take multi-step actions. These systems are often called agents.

The word "agent" is used loosely, so it needs caution. Not every chatbot is an agent. Not every workflow with an AI call is an agent. For this book, the important idea is that agentic systems combine models, context, tools, memory, goals, feedback, and repeated inference to act across software.

[[AI Agents Tool Use and Reliability]] now tracks research support for this chapter. Current agent frameworks from OpenAI, Google, Microsoft, Anthropic, and LangChain all point in the same direction: agents are not merely better prompts. They are engineered systems involving tool loops, state, handoffs, guardrails, tracing, permissions, evaluation, deployment, and integration.

That makes them powerful.

It also makes them risky.

## From Answers to Actions

A basic AI assistant answers a question.

An AI workflow may perform a defined task, such as extracting fields from an invoice or classifying customer messages.

An AI agent goes further. It may pursue a goal through multiple steps:

```text
Goal
↓
Inspect context
↓
Choose action
↓
Use tool
↓
Observe result
↓
Plan next step
↓
Continue or stop
```

In software development, this might mean reading a bug report, searching a codebase, opening relevant files, proposing a fix, editing code, running tests, interpreting failures, revising the change, and summarising the result.

This begins to resemble work.

## The Agentic AI Moment

This shift is no longer only theoretical. Analyst firms and AI companies are now treating agentic AI as a distinct category.

Gartner's 2026 agentic-AI research places agentic AI at the peak of inflated expectations, while also reporting that only a minority of organisations have deployed agents so far. That contrast is important. It suggests that agentic AI is both overhyped and strategically serious. Enterprises are interested, but the infrastructure for safe deployment is still immature.

The same pattern is visible in software development. Gartner has described the enterprise AI coding-agent market as entering a new phase of expansion and competitive realignment. Forrester describes agentic software development as a shift from development assistants to semi-autonomous agents that can plan, generate, modify, test, and explain software artifacts across the development lifecycle.

The product market is moving in the same direction. Cursor, Claude Code, Codex, GitHub Copilot, and similar tools are no longer competing only on who can autocomplete code best. They are competing to become the place where developers assign work to agents, supervise progress, review changes, and decide what is safe to merge.

This is why coding agents matter so much to this book. They are one of the first serious markets where AI stops being merely a conversational assistant and begins to behave like a supervised worker.

## Tools Change the Meaning of AI

A model without tools can generate text.

A model with tools can affect systems.

It can query a database, run a compiler, call an API, send an email, modify a file, create a ticket, update a record, or trigger a workflow. Tool use turns language into action.

Anthropic's tool-use documentation makes this boundary clear: the model selects a structured tool call, and the surrounding application or server-side environment executes it. OpenAI's Agents SDK similarly treats repeated tool calls, branching, handoffs, tracing, guardrails, and approval pauses as parts of agent engineering. The Model Context Protocol pushes the same idea into system integration by standardising how AI applications connect to external data sources, tools, and workflows. See [[AI Agents Tool Use and Reliability]].

This is where [[System Integration]] becomes central. An AI agent is valuable only if it connects to real systems. But every connection creates risk. What data can it access? What actions can it take? Which permissions apply? What happens if it misunderstands? How are actions logged? Can a human review before execution? Can the system roll back mistakes?

The more capable the agent, the more important the boundaries.

## Context and Memory

Agents depend on context.

They need to know the goal, the available tools, the current state, previous steps, constraints, user preferences, relevant documents, and system rules. The [[Context Windows|context window]] becomes working memory.

For simple tasks, context may be small. For complex engineering work, context may include many files, test results, design notes, issue history, logs, and previous decisions. If the agent lacks context, it may act confidently on incomplete information. If it has too much context, it may focus on the wrong details.

Longer context helps, but it does not solve everything. Agents also need retrieval, summarisation, state tracking, and explicit task structure.

## Verification in Agentic Systems

Agentic errors can compound.

A wrong answer is one mistake. A wrong action can create new state. A wrong action followed by another wrong action can create a chain of failure.

Therefore agents require stronger verification than simple chat systems.

Useful safeguards include:

- Tool permissions.
- Read-only modes.
- Human approval before irreversible actions.
- Sandboxed execution.
- Test suites.
- Action logs.
- Rate limits.
- Rollback mechanisms.
- Confidence thresholds.
- Validation after each step.

These safeguards are not theoretical. OWASP identifies prompt injection, insecure output handling, and excessive agency as major LLM-application risks, and its agentic-application work names agent-specific risks such as tool misuse, identity and privilege abuse, memory and context poisoning, cascading failures, and rogue agents. The Cloud Security Alliance's MAESTRO framework similarly treats agentic AI as requiring layered threat modelling across the agent lifecycle. See [[AI Agents Tool Use and Reliability]].

The principle from the previous chapter still applies:

> AI suggests; deterministic software decides.

For agents, we might extend it:

> AI plans and proposes; tools execute within controlled boundaries.

## Agents in Software Development

Software development is a natural environment for agents because the work is already tool-heavy.

Developers inspect files, run commands, search code, execute tests, use version control, read documentation, update tickets, and deploy systems. An AI agent can assist because many steps are digital and observable.

A coding agent may:

- Read a task description.
- Search the repository.
- Identify relevant files.
- Make a small change.
- Run tests.
- Interpret failures.
- Revise the change.
- Produce a summary.

This can reduce developer effort, especially for well-bounded tasks. But it also raises new questions. Did the agent understand the architecture? Did it modify unrelated behaviour? Did it overfit to tests? Did it ignore security? Did it break a workflow not covered by tests? Did it create code the team can maintain?

Agents make verification and review more important, not less.

## Screenshot To Diagnosis

Multimodal agents add another important capability: the user can show the problem instead of describing it perfectly.

Imagine adding a screenshot of an Xcode error message to Codex.

The screenshot does not enter the system as meaning. It enters as visual information:

```text
pixels
↓
visual patches
↓
numerical representations
↓
detected text, layout, colours, and UI clues
```

The model may identify the visible error text, the highlighted line, the surrounding interface, and the development tool. It may infer that the screenshot shows a compiler error, test failure, missing dependency, runtime crash, or configuration issue.

But the screenshot alone is rarely enough. Codex becomes useful because it can combine the image with software context:

```text
screenshot
+ user explanation
+ repository files
+ build logs
+ project structure
+ previous edits
↓
diagnosis
```

For example, a screenshot may show:

```text
Cannot find 'CharacterStore' in scope
```

The repository may show that `CharacterStore.swift` exists, but belongs to another target or module.

The likely diagnosis is not "the code does not exist." It may be:

```text
The file exists, but this part of the project cannot see it.
```

That leads to a different class of fix: target membership, imports, module boundaries, file location, or build configuration.

This is why multimodal AI matters for software development. Real debugging information is often scattered across screenshots, logs, code, project settings, terminal output, documentation, and memory. A coding agent becomes more useful when it can connect these forms of evidence.

The final step remains human verification. Screenshots can be cropped, outdated, or misleading. The model can misread visible text or infer the wrong cause. Multimodal input improves context; it does not remove the need for tests, review, and judgement.

## Codex: When The Agent Controls The Development Environment

Codex is useful as a concrete example because it shows the next step beyond code generation.

![Codex as the genie: intent to verified software change](figures/fig-14-01-codex-agent-workflow.png)

An ordinary chatbot can suggest code.

Codex can work inside a development environment.

It can read files, search a repository, edit code, run terminal commands, inspect errors, run tests, and summarise what changed. In some configurations it can also use connected tools, browser diagnostics, plugins, MCP servers, or other authorised sources of context.

That changes the workflow.

The old pattern was:

```text
Human intent
↓
Human programmer
↓
Editor, terminal, browser, build tools
↓
Software
```

The emerging pattern is:

```text
Human intent
↓
Codex
↓
Files, terminal, browser, tests, tools, approvals
↓
Software change
↓
Human review
```

This is why Codex feels different from a normal AI answer. It is not only producing text about software. It can participate in the workflow that changes software.

### The Tool Loop

A typical Codex debugging loop looks like this:

```text
read the user's request
↓
inspect relevant files
↓
form a hypothesis
↓
edit code
↓
run a build or test
↓
read the failure
↓
revise the hypothesis
↓
edit again
↓
verify
```

That loop matters because software development has always depended on feedback. Human programmers rarely write perfect code on the first attempt. They compile, test, inspect errors, search documentation, and revise.

Codex can participate in the same feedback cycle.

The difference is that the user increasingly describes the outcome rather than every command.

### Why Authorization Matters

The more an AI can act, the more permission matters.

Official Codex guidance describes two basic controls:

- sandbox mode: what Codex can technically read, write, or access
- approval policy: when Codex must stop and ask before acting

That is not just product plumbing. It is the engineering answer to agency.

If Codex wants to edit a file inside the current project, that may be allowed.

If it wants to write outside the workspace, use the network, install a dependency, access an external connector, or perform a risky action, approval may be required depending on the configuration.

The principle is:

```text
More agency
↓
more permissions
↓
more audit
↓
more verification
```

This is why agentic AI is not simply "AI gets smarter." It is a new relationship between intelligence and authority.

### Example: Installing A Dependency

Suppose an application fails with:

```text
ModuleNotFoundError: No module named 'pandas'
```

A human developer might inspect the import, check `requirements.txt`, add the dependency, install it, rerun tests, and commit the change.

Codex can follow a similar path:

```text
read error
↓
inspect project files
↓
identify missing dependency
↓
edit dependency file
↓
request approval if network install is needed
↓
run tests
↓
report result
```

The important detail is the approval point. Installing packages usually requires network access and changes the development environment. A safe agent should not silently reach out to the internet or change dependencies without appropriate permission.

This is the new shape of programming: not merely writing code, but supervising an agent that can act on the project.

### Example: Logging Into A Website

Consider a task that requires testing a web workflow after login, such as checking how a feature behaves inside Facebook or another authenticated website.

The safe pattern is not:

```text
Give the AI your password.
```

The safe pattern is:

```text
Codex opens or navigates the site
↓
the human handles login, OAuth, two-factor authentication, or approval
↓
Codex observes the authorised session only if permitted
↓
Codex tests the workflow
↓
Codex reports what it found
```

This distinction is essential.

Agents do not remove authorization. They make authorization more important.

If a browser, plugin, connector, or computer-control feature gives Codex access to a logged-in environment, the question is no longer "Can AI answer?" The question is "What is AI allowed to do?"

That is the same question enterprises will ask about GitHub, Slack, Google Drive, deployment tools, payment systems, customer databases, and internal applications.

### Browser Debugging

For web applications, a coding agent may also use browser diagnostics when enabled and approved.

It may inspect:

- page state
- console errors
- network requests
- runtime exceptions
- screenshots
- visible UI behaviour

The loop becomes:

```text
open app
↓
perform workflow
↓
observe error
↓
inspect console or network
↓
edit code
↓
rebuild
↓
retest
```

This is closer to how a human developer debugs a web application. The agent is no longer merely producing code in isolation. It is using the running system as evidence.

### Radix Field Note: Why Codex Was Different From ChatGPT

My experience building Radix made this difference clear.

ChatGPT could explain ideas, suggest code, and help me think through problems. But it usually depended on me to carry the whole technical situation into the conversation. I had to describe the file structure, paste the relevant code, copy the error message, run the command myself, and then bring the result back.

Codex changed the relationship because it could work inside the project.

It could inspect the Radix files, search the repository, edit Swift or Python, run terminal commands, read build failures, revise its own changes, and report what had been checked. That made the interaction feel less like asking for advice and more like supervising a software worker inside the development environment.

This mattered when Radix problems crossed several boundaries at once: screenshots, OCR capture, web pages, AI prompt templates, database storage, Xcode errors, and user-interface behaviour. A normal chatbot could discuss each piece separately. Codex could help connect them inside one working loop.

Consider a Facebook-like web-capture or scraping problem. The technical issue is not simply "how do I scrape a page?" It may involve whether the user is authorised to access the page, whether the content is visible in the current session, whether it appears as text or image, whether OCR is needed, whether the page structure has changed, whether platform rules allow automated extraction, and whether the captured result flows correctly into the application.

The safe pattern is:

```text
human defines the legitimate task
↓
human handles login or grants approved access
↓
Codex observes only the authorised page, screenshot, file, or output
↓
Codex diagnoses the technical problem
↓
Codex edits local code or extraction logic
↓
Codex reruns permitted checks
↓
human verifies the result
```

That is the important distinction.

ChatGPT can tell me what might be wrong.

Codex can help discover what is wrong by examining the actual working system.

This does not make the human less important. It makes the human's role different. I still decide what Radix should do, whether a capture workflow is legitimate, whether the behaviour is acceptable, and whether a change should be kept. Codex reduces the cost of moving from problem to tested change, but judgement and accountability remain human.

### Ten Codex Examples: From Prompt To Code

The best way to understand Codex is not to list its features. It is to watch the journey from prompt to code.

Here are ten examples from the kind of work I experienced while building Radix and this book.

#### 1. A vague feature becomes requirements

Prompt:

```text
I want Radix to create Chinese quizzes from captured learning material. It should ask one question at a time and not reveal the answer too early.
```

Codex first turns the request into structure:

```text
feature = AI-generated quiz
source = captured Chinese material
interaction = one question at a time
constraints = no early answer, controlled pinyin, bilingual output
```

Only then does code appear. The change may become a prompt builder:

```swift
struct QuizPromptBuilder {
    func buildQuizPrompt(from capture: CaptureItem) -> String {
        """
        Create Quiz

        Use the captured Chinese material below.
        Ask one question only.
        Do not reveal the answer until the learner replies.

        Captured text:
        \(capture.text)
        """
    }
}
```

This is not just code generation. It is requirements engineering through conversation.

#### 2. Domain judgement becomes an algorithm

Prompt:

```text
The quiz choices are too easy. Characters should be visually confusable, but not just because they share any component.
```

Codex searches for the distractor-selection code and turns the judgement into a ranking rule:

```text
bad rule:
any shared component qualifies

better rule:
shared component + script match + visual similarity + not too generic
```

The result may look like:

```swift
func confusabilityScore(_ a: CharacterEntry, _ b: CharacterEntry) -> Int {
    var score = 0
    if a.script == b.script { score += 2 }
    score += sharedSpecificComponents(a, b).count * 3
    score -= sharedGenericComponents(a, b).count
    return score
}
```

The important input was not Swift syntax. It was the educational judgement that some shared components are too generic to create useful confusion.

#### 3. A slow feature becomes a caching problem

Prompt:

```text
The quiz works, but it feels slow when I move between questions.
```

Codex looks for repeated work during screen updates. It may find that answer choices are being rebuilt every time the interface redraws.

Before:

```swift
var choices: [CharacterEntry] {
    buildChoices(for: currentQuestion)
}
```

After:

```swift
@State private var cachedChoices: [CharacterEntry] = []

func loadQuestion(_ question: QuizQuestion) {
    currentQuestion = question
    cachedChoices = buildChoices(for: question)
}
```

The first version may be logically correct. The second version is more usable. That difference is engineering.

#### 4. A prompt becomes an API integration

Prompt:

```text
This Gemini feature is not actually using the API. It should send the captured text to Gemini, receive structured JSON, and add phrases to the database.
```

Codex now has to inspect settings, network code, JSON parsing, error handling, and database insertion.

The code shape changes from a standalone prompt to integration:

```swift
struct ExtractedPhrase: Decodable {
    let chinese: String
    let pinyin: String
    let english: String
}

let phrases = try decoder.decode([ExtractedPhrase].self, from: data)
try phraseStore.insert(phrases)
```

This is where AI stops being a chat window and becomes a component inside software.

#### 5. A screenshot becomes a diagnosis

Prompt:

```text
Here is a screenshot from Xcode. It says Cannot find CharacterStore in scope. Please fix it.
```

Codex can combine the screenshot with the repository:

```text
screenshot text
+ highlighted file
+ project structure
+ source search
+ build configuration
```

The fix may not be a clever algorithm. It may be an import, target-membership change, or shared-module boundary:

```swift
import SharedRadixCore
```

This is why multimodal agents matter. Real debugging evidence often arrives as a mixture of image, text, code, and project state.

#### 6. A web-capture problem becomes a safe workflow

Prompt:

```text
I am trying to capture learning material from a web page I can access, but Radix is not importing it cleanly. Help me diagnose the workflow.
```

The first step is not code. It is the permission boundary:

```text
Is the user authorised to access the page?
Is the content allowed to be captured?
Are credentials kept private?
Is Codex observing only what the user approved?
```

Then Codex can inspect the technical path:

```text
web page or screenshot
↓
OCR or text extraction
↓
parser
↓
normalisation
↓
Radix import format
↓
database insert
```

The resulting code may be modest:

```swift
func normaliseCapturedText(_ raw: String) -> String {
    raw
        .replacingOccurrences(of: "\u{00A0}", with: " ")
        .trimmingCharacters(in: .whitespacesAndNewlines)
}
```

But the workflow is not modest. It connects authorised web access, capture, parsing, storage, and user verification.

#### 7. Migration becomes behaviour preservation

Prompt:

```text
Compare the Streamlit RadixWeb version with the Swift version. The phrase cards and remembered phrases do not behave the same.
```

Codex has to compare two systems:

```text
Streamlit behaviour
Swift behaviour
data model
UI state
search logic
animation behaviour
```

The code may involve matching lookup rules:

```swift
func phraseMatches(_ phrase: Phrase, query: String) -> Bool {
    phrase.chinese == query
        || phrase.pinyin == query
        || phrase.english.localizedCaseInsensitiveContains(query)
}
```

Migration is not copying code. It is preserving what the user experiences.

#### 8. Refactoring becomes controlled change

Prompt:

```text
Radix has grown quickly. Refactor the platform checks and preferences code, but do it cautiously and do not change behaviour.
```

Codex searches for repeated patterns and chooses a narrow slice.

Before:

```swift
if UIDevice.current.userInterfaceIdiom == .pad {
    showSidebar = true
}
```

After:

```swift
struct Platform {
    static var isPad: Bool {
        UIDevice.current.userInterfaceIdiom == .pad
    }
}
```

The value is not that Codex rewrites everything. The value is that it can help make small, reversible improvements.

#### 9. Tests become a safety net

Prompt:

```text
Before changing this import logic, add tests that capture the current behaviour so we know if we break anything.
```

Codex identifies edge cases before changing the code:

```text
empty input
duplicate phrases
traditional characters
pinyin fields
malformed JSON
```

A test might look like:

```swift
func testImportSkipsDuplicatePhrase() throws {
    let store = PhraseStore.inMemory()
    try store.insert(Phrase(chinese: "你好", pinyin: "ni hao", english: "hello"))

    try store.importPhrase(Phrase(chinese: "你好", pinyin: "ni hao", english: "hello"))

    XCTAssertEqual(store.allPhrases().count, 1)
}
```

Trust comes from verification, not from believing the model.

#### 10. A manuscript becomes a website

Prompt:

```text
Publish the Obsidian book manuscript as a public website using Quartz and GitHub Pages.
```

Codex treats this as a software workflow:

```text
vault structure
↓
Quartz configuration
↓
content folder
↓
build command
↓
GitHub Pages deployment
↓
broken-link checks
```

The output may include configuration:

```ts
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The AI Revolution in Software Development",
    baseUrl: "dkwang62.github.io/ai-revolution-software-development",
  },
}
```

This final example matters because it connects the book's method to its subject. The book itself is being built like software: structured, refactored, tested, published, and improved through an AI-assisted workflow.

### Claude Code, Cursor, And The Coding-Agent Race

Codex is not alone.

Claude Code, Cursor, GitHub Copilot, and other tools are competing for the same emerging role: the place where software work is assigned, supervised, reviewed, and merged.

The important question is not which product wins.

The important question is what category is being created.

The category is:

```text
AI as supervised software worker
```

That worker may live in the terminal, the editor, the desktop app, the browser, the cloud, or some combination of all of them. It may read code, run tests, inspect logs, open pages, create pull requests, update tickets, and coordinate with other agents.

This is why the coding-agent market matters so much. It is the first serious attempt to make intent-to-code less painful by putting AI inside the actual development workflow.

### The Future: Painless Intent To Code

The future possibility is not just better autocomplete.

It is a smoother path from human intent to verified software change:

```text
user explains goal by voice, screenshot, sketch, or text
↓
Codex asks clarifying questions
↓
Codex creates a plan
↓
Codex inspects the codebase
↓
Codex edits files
↓
Codex runs tests
↓
Codex opens the app and checks behaviour
↓
Codex reviews the diff
↓
Codex prepares a pull request
↓
human approves
```

In more advanced workflows, Codex-like systems may coordinate multiple specialised agents:

```text
one agent explores the code
one agent writes tests
one agent checks security
one agent updates documentation
one agent validates the user interface
```

The main agent then summarises the work and presents the decision to the human.

This is the direction that points toward [[Macrohard Speculation Packet|Macrohard]]. If a single agent can perform bounded development work, the next question is whether many agents can coordinate larger parts of a software organisation.

But the lesson should be kept grounded.

The future is not "AI does everything without oversight."

The more serious future is:

```text
AI does more of the mechanical work
humans define intent
humans set boundaries
humans verify outcomes
humans remain accountable
```

That is how intent becomes software without pretending that trust, security, and judgement disappear.

## Agents and Legacy Systems

Agents may also matter for legacy modernisation.

Imagine an AI system that can inspect old code, search documentation, map dependencies, generate tests, propose wrappers, compare outputs between old and new systems, and maintain migration notes. This would not replace engineers, but it could reduce the cost of understanding complex systems.

The same risks apply. Legacy systems often support critical operations. An agent must not make uncontrolled changes. It should operate inside strict permissions, with human review, audit logs, and test environments.

The economic value is large because legacy understanding is expensive.

## Agents as Economic Multipliers

A model answers one question at a time. An agent can coordinate many model calls, tools, and checks toward a goal.

That makes agents potential economic multipliers. They can reduce the cost of workflows, not just individual tasks.

But the cost also multiplies. Agents consume repeated inference. They require tool integration. They need monitoring. They create security and permission challenges. They may fail in complex ways. They require evaluation not only of outputs, but of sequences of actions.

The economic question is:

> Does the agent reduce enough human effort, delay, and error to justify the cost and risk of giving AI more agency?

For some tasks, yes. For others, a simple assistant or deterministic workflow will be safer and cheaper.

## Five Years

In a five-year scenario, agents become common in bounded software workflows.

They help with code search, test generation, bug fixing, documentation, migration scripts, data cleanup, support triage, and internal operations. The most successful agents are likely to be constrained: clear goals, limited tools, strong permissions, test environments, and human approval for risky actions.

## Ten Years

In a ten-year scenario, agents may coordinate larger workflows across enterprise systems.

They may monitor processes, propose improvements, maintain documentation, detect anomalies, assist migrations, and orchestrate specialised tools. They may become a layer above existing software, translating human goals into sequences of controlled actions.

This depends on major progress in reliability, context management, security, evaluation, and organisational trust.

## The Engineering Lesson

Agents make AI feel more like a worker than a tool.

That feeling can be misleading. An agent is still a system. It needs architecture, constraints, permissions, tests, monitoring, and accountability.

The more agency we give AI, the more engineering discipline we need around it.

This completes the movement of Part IV. AI changes software engineering by making communication more important, precision more difficult, legacy understanding more valuable, and integration more central.

The final part of the book can now ask what happens if these changes continue.

What becomes scarce when software becomes cheaper?

What happens to programmers?

What might the next five and ten years look like?

## What We Know

Agents combine models, context, tools, goals, feedback, and repeated inference.

Tool use turns AI output into action, which increases both value and risk.

Agents require permissions, validation, logging, testing, rollback, and human oversight for high-impact actions.

Software development is a natural domain for agents because many tasks are digital and tool-based.

## What We Infer

Agents will be economically valuable where they reduce workflow cost, not merely where they produce impressive demonstrations.

Bounded agents with clear permissions and verification are likely to be more useful than unconstrained autonomous systems in serious software environments.

Agents will make system integration and software verification even more important.

## What We Do Not Yet Know

We do not yet know which agent architectures will become standard.

We do not yet know how much autonomy organisations will safely grant AI systems.

We do not yet know how agent reliability will scale across long, complex workflows.
