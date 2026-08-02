---
title: "Case Study: Building Radix with Codex"
---

The central claim of this book can sound too large until it meets a real project. Can a person with deep knowledge of a problem, but no conventional programming career, genuinely help create a useful application with an AI coding agent?

Radix is my answer. It is a Chinese learning app for iPhone, iPad, and Mac. A learner can capture Chinese from a page, photo, file, clipboard, or typed text; inspect characters and phrases; use AI to help understand the material; practise it; and return to it later.

Its product loop is simple:

```text
Scan → Review → Practise → Keep
```

The app is not simple. It has a dictionary, phrase data, saved pages, character information, pronunciation, notes, search, AI workflows, quizzes, sentence study, backups, and safeguards for different Apple devices. The point of this story is not that one prompt created all of that. It did not. The point is to show the sequence by which a domain expert and an AI coding agent can build it together.

## A Practical Blueprint

Radix provides a template for a different way to build software. The sequence below is the practical progression from a first idea to a tested, native application: begin with the problem, organise the information, make a fast prototype, move to the right platform, let real use improve the requirements, then protect and maintain what has been created.

The details will differ for a health tool, gardening app, logistics system, music project, or small business. The pattern remains the same. AI-assisted development does not make complexity vanish. It brings the relevant technical help closer to the moment when a domain expert needs to make the next decision.

## Begin With the Problem, Not the Programming Language

Radix began with a learning problem. I encountered Chinese in the world around me: menus, articles, book pages, subtitles, screenshots, and messages. Existing learning apps often began with their own fixed lesson. I wanted an app that began with the learner's material instead.

That idea is domain expertise. It did not require knowing Swift, Python, databases, or mobile design patterns. It required knowing what was frustrating about the existing experience and what a better experience should achieve.

Before asking an AI agent to build a screen, a novice should be able to answer a few ordinary questions:

- Who is this for?
- What are they trying to accomplish?
- What information do they begin with?
- What should they be able to do next?
- What must they never lose, expose, or change accidentally?

For Radix, the answer was not “make a Chinese app.” It was more specific: help a learner turn real Chinese into personal study material, without losing the original source or the learning work built around it.

That answer became the first product rule. A captured page should not be treated as a disposable input. It should remain connected to the phrases, notes, sentences, and practice created from it.

## Start With the Information, Then Choose a Database

People often say, “start with the database.” That is almost right, but it can mislead a beginner. The first job is not choosing a fashionable database. The first job is describing the information that must exist and the relationships that must survive.

A database is simply a dependable way to store and retrieve organised information. Before choosing one, Radix needed a map of its information:

```text
Reference material
  dictionary entries, character components, phrase library

Personal learning material
  added phrases, saved pages, notes, favourites, history, practice

Links
  a page can contain sentences and phrases
  a phrase can be connected to a page and characters
  a learner can return to the source of an item later
```

This revealed an important distinction. The dictionary and broad phrase library were foundation data supplied with the app. A learner's additions, notes, captured pages, and study history were personal data. The two kinds of data have different rules. Foundation data should remain stable and searchable. Personal data must be editable, backed up, restored, and portable.

This is a decision a domain expert can make. Codex can then turn it into technical choices: a bundled dictionary, a searchable phrase store, a separate place for user additions, stable identifiers, backup formats, and later a faster database for a growing sentence library.

The early Radix design used reference files and a phrase database for the supplied material, with a separate user-editable phrase store. As the app accumulated saved sentences and links back to pages, that live sentence library moved to SQLite. SQLite is a compact database built into many applications. The learner does not see SQLite; they see a sentence list that can search, page through results, and remain responsive as it grows.

The lesson is simple: start with the learner's information and its ownership. Let the technical storage follow from that.

## Use a Fast Prototype to Discover the Real Product

The first working version used Python and Streamlit. Python is a general-purpose language that is popular for data work. Streamlit is a tool that can turn Python code into a simple web interface quickly. It was a sensible prototype environment because the early question was not “Can I ship a perfect iPhone app?” It was “Does this learning workflow make sense at all?”

The first Streamlit app already had a working entry point, search, reference data, and screens for inspecting Chinese material. It also immediately revealed practical constraints. Community web hosting could treat project files as read-only, so the app could not casually overwrite its own data. Changes had to be kept safely in memory or made available for download. A search result should remain in the search experience rather than sending the learner into an unexpected screen. The phrase editor should make personal additions visible without forcing the learner to browse the entire reference collection.

These are examples of prototyping doing its proper job. A prototype is not a failed final product. It is a question made visible. It lets the expert learn which assumptions were wrong while changing them is still cheap.

## Treat Migration as a New Design, Not a Translation Exercise

When the idea needed a native mobile experience, Radix moved to Swift and Xcode. Swift is Apple’s programming language; Xcode is Apple’s development environment for creating, running, testing, and distributing apps. The goal was not to copy every web screen exactly. The goal was to preserve the learner’s workflow while taking advantage of a phone camera, iPad layout, file sharing, speech, and a real app’s storage and distribution model.

This is where an AI coding agent becomes far more useful than a chatbot. Codex could inspect the earlier project and data, create Swift structures, connect screens to stored information, and run an Xcode build. A build asks whether the project can be assembled into a running app. It does not prove that the app makes sense, but it catches many technical mistakes quickly.

The human instructions were still expressed as outcomes rather than code. For example:

> Show the character grid first. Keep it visible while I inspect related phrases.

> Let me add a phrase with Chinese, pinyin, and meaning. Do not force it to depend on the character currently selected.

> If I search in Traditional Chinese, help me find the matching Simplified phrase when that is appropriate.

Codex could locate the relevant files, explain the trade-offs, propose an implementation, make a small change, and compile it. I could run the app and decide whether the learner’s experience had improved.

The migration therefore had two parallel jobs:

```text
Preserve the product meaning
  Scan → Review → Practise → Keep

Rebuild the technical form
  native screens, storage, device layouts, builds, tests, distribution
```

## Build One Complete Path Before Adding Everything Else

A novice should not ask an AI agent to build every desired feature at once. That creates a large and confusing answer, with too little evidence that any part works. A better method is a **vertical slice**: one small path that works from beginning to end.

For Radix, an early vertical slice could be described in ordinary language:

```text
Capture or enter Chinese text
↓
Save it as a page
↓
Open the page and inspect a character or phrase
↓
Keep a useful item for later study
↓
Return to it later
```

Once that path existed, each addition had somewhere to belong. Camera capture and imported images became ways to create a page. Optical character recognition, or OCR, became a way to read text from an image. AI correction became assistance for difficult OCR, not a replacement for the original source. Sentence extraction, translation, phrase discovery, and conversation practice became ways to transform a saved page into study material.

This sequence mattered because it protected the product from becoming a collection of unrelated AI demonstrations. Every feature had to strengthen the same loop: capture, understand, practise, and keep.

## Let Real Use Write the Missing Requirements

The most revealing Radix changes did not begin as technical discoveries. They began with a learner using a real feature and finding that it failed its purpose.

One early goal was a short quiz that tested whether a learner could recognise a single Chinese character. The first version sounded plausible but failed immediately: it showed the answer in the question. The correction was not simply “fix the bug.” The learning behaviour had to be described more clearly:

```text
Show a sentence with one character missing.
Offer four similar-looking character choices.
Prefer useful verbs where possible.
Do not reveal the answer before the learner chooses.
```

The next trial uncovered more missing requirements. The questions appeared in the same order every time. A supposedly quick quiz contained one hundred questions. The learner needed a choice between Simplified and Traditional Chinese. The requirements became more precise only because a real person used the app.

This is the practical meaning of iterative development. Planning does not disappear. It becomes a conversation with evidence. Codex can make the next version much faster, but the person who understands the task still has to notice that the current behaviour is unsatisfactory and explain why.

The same happened with the interface. A row of controls might look correct in a desktop preview but overflow the edges of an iPad in portrait orientation. A novice need not know the name of the failed layout rule. They can show Codex a screenshot and state the visible problem: “A learner cannot see the whole control.” Codex can inspect the layout, propose a correction, build the app, and report the result. The human judges the screen, not the code.

## Refactor When the First Good Answer Stops Being Good Enough

Rapid development creates a new risk. The first solution may work, but several quick additions can make the code or the user journey tangled. **Refactoring** means changing the internal structure of software without changing its intended purpose for the user.

Radix needed this repeatedly. As it gained more Study areas, separate screens and controls began to duplicate one another. A learner could lose their place or see the same choice represented in several ways. Codex helped trace the related state and refactor it into connected Study sections with shared controls. The visible result was simpler navigation. The technical result was that later changes had fewer places to go wrong.

The project also moved large responsibilities out of a single central store into smaller parts: navigation, search, capture, AI settings, data transfer, sentence study, and maintenance. A novice does not need to decide the exact filename or class structure. But they do need to recognise the symptom: “Every change is becoming risky because too many things are joined together.” Codex can map the project, identify duplication, suggest a safe boundary, make a small refactor, and run the relevant checks.

Refactoring is one reason AI-assisted development can be transformative. Without AI, a non-programmer may be able to pay for a first version but be unable to afford continuous improvement. With an agent that can read the existing project and explain its proposed changes, cleanup can become part of normal iteration rather than a crisis postponed indefinitely.

## Let Data Growth Change the Architecture

The original data design did not need to predict every future feature. It did need to preserve a path for growth.

When Radix added page-linked sentences, phrase hints, practice records, and a history of learning activity, simple in-memory lists were no longer enough for a responsive experience. The sentence library moved into SQLite, and the app began requesting only the small page of results visible to the learner. Searches and filters became database queries rather than repeated scans of every saved sentence.

This also exposed a less visible kind of requirement: performance. A feature is not useful if opening it causes the app to freeze. Radix therefore moved expensive phrase discovery away from ordinary screen drawing. The app performs the more comprehensive search when the learner explicitly opens the Phrase tool, instead of doing unnecessary work each time a sentence row appears.

The rule behind this is understandable without database theory:

> Do the work needed for the learner’s present action, not every possible piece of work every time the screen redraws.

Codex can help identify expensive paths, explain why they are slow, and suggest alternatives. The domain expert still chooses what delay is acceptable and which richness is worth its cost.

## Build Trust Into the Ordinary Workflow

An application becomes more valuable when it contains more personal work. That also makes loss, confusion, and incorrect automation more costly.

Radix therefore needed more than features. It needed recovery copies before important changes, portable backups, restore previews, careful handling of imported data, and clear ownership of original material. It also needed the ability to preserve an original OCR page while allowing an AI-assisted corrected version to be inspected separately. A learner should be able to see what the source said and what the system changed.

These safeguards reflect a broader principle from this book: AI is most useful when it is embedded in a supervised system. The model may suggest an OCR correction, a phrase, a sentence, or quiz content. Conventional software checks its format. The app preserves the relevant source. The learner decides whether the result becomes part of their study material.

Before a version was prepared for TestFlight, the app also needed repeated builds on iPhone, iPad, and Mac-compatible targets. The compiler, automated tests, screenshots, real devices, backup checks, and user review formed a chain of evidence. No single check proved the app was correct. Together, they made it less likely that a change would quietly damage a learner’s work.

## What the Domain Expert Actually Contributed

The phrase “AI built the app” is too simple. Radix was built by a division of labour.

I provided the purpose: turn real Chinese into connected study material. I supplied examples, priorities, awkward screens, bad quiz results, and the judgement that a feature was useful or confusing. I decided what should be retained, what should be reversible, what information was personal, and what risks were unacceptable.

Codex provided technical leverage. It could inspect a codebase too large for me to hold in my head, find related files, explain unfamiliar concepts at the moment they mattered, propose an implementation, make edits, run builds and tests, investigate failures, and record the work for the next session.

The surrounding tools provided evidence. Frameworks supplied reusable building blocks and sensible defaults. The compiler rejected invalid code. Tests checked known rules. The database retrieved information predictably. Screenshots and real devices exposed spatial problems. Backups made recovery possible.

```text
domain expert: purpose, examples, priorities, acceptance
↓
Codex: plans, implementation, investigation, refactoring
↓
tools: build, test, store, measure, protect
↓
domain expert: observe, question, accept, revise, or reject
```

This is not the disappearance of software engineering. It is a change in who can participate directly in it. The human work moves upward toward problem definition, context, exceptions, taste, safety, and verification. The agent and its tools carry more of the technical translation.

## The Path From Start to Finish

A novice with domain expertise could follow the same broad path, even if their app concerned health, gardening, logistics, music, or a small business rather than Chinese learning:

1. State the real user problem and the outcome that would make it better.
2. List the important information, its ownership, and the relationships that must remain intact.
3. Build a disposable prototype to test the workflow, not to prove technical sophistication.
4. Use the prototype yourself. Record every moment that feels confusing, slow, unsafe, or incomplete.
5. Move to the platform that matches the real use case, while preserving the data and product meaning.
6. Build one complete path from input to useful outcome before adding a wide range of features.
7. Turn observed failures into clearer requirements and acceptance criteria.
8. Ask the agent to make small, reviewable changes; build and test after each meaningful step.
9. Refactor repeated or tangled parts before they make the next improvement dangerously expensive.
10. Add backup, permissions, verification, and specialist review before the system affects important people or data.

The final lesson of Radix is not that a programming novice can safely build every kind of system alone. A payment service, medical system, aircraft controller, or large public platform still needs specialist engineering, security, legal, and operational expertise. But a domain expert no longer has to stop at an idea or a slide presentation. With an AI coding agent, they can participate in the full cycle from problem to prototype, product, evidence, and continuing improvement.

The “genie” is not all-powerful. It does not know the learner’s purpose, discover every hidden requirement, or carry the responsibility for a mistake. But it can make the distance between an informed human idea and a working, testable system dramatically shorter.
