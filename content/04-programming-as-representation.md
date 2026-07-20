---
title: "Programming as Representation"
---

# Programming as Representation

![One procedure, many representations](<figures/FIG-03-01 Procedure Many Representations.png>)

If artificial intelligence is the next abstraction layer, we need to ask what it is abstracting.

The easy answer is "code". AI writes code, so perhaps it hides code. That answer is partly true, but it does not go deep enough. Code is not the essence of programming. Code is one representation of something more fundamental.

Programming is the expression of procedures.

A procedure is a description of what should happen: under which conditions, in which order, using which information, producing which result. A recipe is a procedure. A legal process is a procedure. A factory workflow is a procedure. A bank's lending policy is a procedure. A teacher's rule for flagging repeated absences is a procedure. Software is what happens when procedures are represented precisely enough for a machine to execute.

Programming languages are formal symbolic systems for representing procedures.

That distinction matters because it changes how we understand AI-generated software. If programming were only the act of writing Swift, Python, Java, or C++, then a machine that does not "think" in those languages would seem mysterious. But if programming is the representation of procedures, then AI's task becomes clearer. It must move between different representations of procedure: ordinary language, examples, pseudocode, diagrams, source code, tests, and executable behaviour.

## The Same Procedure in Many Forms

Imagine a teacher wants a simple attendance tool:

> If a student misses more than three days in a week, notify the counsellor.

That sentence is not code, but it contains a procedure. It identifies an entity, a student. It identifies an event, an absence. It defines a time period, a week. It defines a threshold, more than three days. It defines an action, notify the counsellor.

The same procedure could be written as a checklist:

```text
For each student:
  Count absences during the current week.
  If absences are greater than 3:
    Send a notification to the counsellor.
```

It could be drawn as a flowchart:

```text
Start
↓
Choose student
↓
Count weekly absences
↓
More than 3?
↓
Yes -> Notify counsellor
No -> Continue
```

It could be written as pseudocode:

```text
for student in students:
    if absences_this_week(student) > 3:
        notify(counsellor, student)
```

It could be implemented in Python, Swift, JavaScript, SQL, or another programming language. It could ultimately become machine code executed by a processor.

All these forms differ, but they represent the same underlying procedure.

This is the key idea. Programming languages are not magic containers of intelligence. They are formal ways of describing procedures so that machines can execute them reliably.

## Why Programming Languages Exist

Computers are literal machines. They do not understand intention in the human sense. Traditional computers execute precise instructions. If the instructions are ambiguous, incomplete, or wrong, the computer does not negotiate meaning. It does what the instructions say, not what the human hoped they meant.

Programming languages exist because humans cannot productively write everything in raw machine instructions. A language such as Python or Swift gives humans a more manageable way to express procedures. The language has syntax, rules, data structures, control flow, functions, types, libraries, and conventions. These features help humans organise instructions while still allowing the machine to execute them.

A compiler or interpreter performs translation. A compiler usually translates a whole program before it runs; an interpreter commonly reads and executes it as the program runs. Both turn a higher-level representation into lower-level operations the machine can perform.

This is another form of abstraction. Humans write in a language closer to their thinking; tools translate downward toward the machine.

For decades, becoming a programmer meant learning one or more of these formal symbolic languages. A programmer had to adapt to the computer's grammar. They had to learn how to express loops, conditions, variables, functions, data structures, errors, and interfaces in the precise forms the system would accept.

AI changes the boundary because ordinary language can now participate in the translation.

## English Is Not Enough

It would be tempting to say that natural language simply replaces programming languages. That is too simple.

Ordinary language is powerful because humans use it to express goals, concepts, stories, constraints, and intentions. But it is also ambiguous. The sentence "notify the counsellor if absences become worrying" may be meaningful to a teacher, but it is not precise enough for a machine. What counts as worrying? Which counsellor? Which absences? Over what time period? Should illness be treated differently? Should weekends count? Should parents also be notified? What if the data is missing?

Traditional programming languages force precision. They cannot accept "worrying" unless someone defines the rule. That strictness is irritating, but it is also valuable. It exposes ambiguity.

AI-assisted programming changes the process. The user may begin with ordinary language, and the AI may infer missing structure, ask clarifying questions, propose rules, or generate a first version. But the final system still needs precision. Natural language becomes useful as a high-level interface only when it is refined into specifications, examples, tests, constraints, and executable behaviour.

This is why **natural-language programming** should not be understood as casual conversation with a machine. It is closer to disciplined specification. A prompt that controls software behaviour may need to define objectives, rules, constraints, formats, edge cases, failure modes, and unacceptable outputs. In that sense, the prompt becomes a high-level programming artefact.

The language is English, but the discipline remains engineering.

## Why AI Can Move Between Representations

The central mystery remains:

> How can a machine that does not think in Swift still produce good Swift code?

The answer begins with the distinction between procedure and representation.

Swift is one representation of a procedure. Python is another. Pseudocode is another. English can be another, if it is precise enough. A flowchart is another. Machine code is another. The underlying procedure can remain stable while the representation changes.

AI systems are trained on enormous amounts of text, code, documentation, examples, explanations, questions, answers, and structured data. During training, they learn patterns and relationships among these representations. They see natural-language descriptions paired with code. They see code paired with comments. They see error messages paired with fixes. They see documentation paired with examples. They see many ways humans describe the same or similar procedures.

The AI is not simply memorising one correct answer. It is learning relationships.

This connects to Rules vs Relationships. Traditional software stores explicit rules written by humans. AI models store learned mathematical relationships discovered from examples. Traditional software says:

```text
IF A
THEN B
```

AI models learn something more like:

```text
A is related to B in this context.
```

That difference allows AI to generalise. When asked for a Swift function, it can draw on learned relationships among intent, programming patterns, syntax, data structures, APIs, and examples. It can infer that an attendance rule requires counting records, comparing a threshold, and triggering a notification. It can express that inferred procedure in Swift because Swift is one of the symbolic systems whose patterns it has learned.

This does not mean the AI understands software in the way a human engineer does. It means the model has learned enough statistical and structural relationships to produce useful transformations between representations.

## From Rules to Relationships

Traditional software is built by writing rules explicitly.

A human programmer decides what the system should do and encodes that behaviour in a programming language. The machine then follows those instructions. If the programme says to add two numbers, it adds them. If the programme says to reject a login after too many failed attempts, it rejects the login. The knowledge lives in explicit symbolic form.

AI models are different. Their knowledge is distributed across learned parameters. They are not a list of rules that can be read line by line. They are closer to a learned landscape of relationships. Words, phrases, concepts, code patterns, visual structures, and procedures become related through mathematical representation.

This difference explains both AI's power and its weakness.

The power is flexibility. AI can handle variation. It can translate, summarise, explain, infer, rewrite, classify, and generate. It can move from English to code, from code to explanation, from error message to likely cause, from screenshot to interface suggestion, from vague idea to structured plan. It is not limited to a hand-written rule for every possible case.

The weakness is uncertainty. Because AI works through learned relationships rather than explicit deterministic rules, it can produce plausible mistakes. It may infer the wrong requirement, choose an inappropriate pattern, invent a non-existent API, or generate code that looks right but fails under real conditions. [[13-precision-and-probabilistic-ai|Precision and Probabilistic AI]] therefore belongs at the centre of the engineering story.

AI's ability to write software is therefore not magic. It is the consequence of representing information and procedures in a way that allows movement between forms.

## Translation Is One Part of Programming

Programming has always involved translation, but translation is not its whole essence. Before anyone can express a procedure in code, someone must discover the real problem, negotiate competing needs, divide the system into parts, model state, choose an architecture, and decide what failure means.

A user has a goal. A product specialist decides which user problem the software should solve and turns the goal into requirements. A designer turns requirements into workflows and interfaces. A programmer turns workflows into data structures and code. A compiler or interpreter turns code into executable operations. A processor turns operations into physical changes in hardware.

The chain looks like this:

```text
Human goal
↓
Requirements
↓
Design
↓
Source code
↓
Machine instructions
↓
Hardware behaviour
```

AI enters this chain near the top. It can help translate from human goal to requirements, from requirements to design, from design to code, from code to tests, from tests to fixes, and from old code back into explanation.

This is why AI affects software development so broadly. It is not merely a code generator. It is a translation layer across many representations used in software work.

It can translate:

- A vague idea into clarifying questions.
- A requirement into a user story.
- A user story into a data model.
- A data model into code.
- Code into documentation.
- An error message into a likely cause.
- A legacy function into plain English.
- A screenshot into interface feedback.
- A prompt into structured behaviour.

The economic value comes from reducing the cost of these translations. The remaining work—discovering what should be translated and how it belongs in a dependable system—is why cheaper code does not make engineering disappear.

## The Human Programmer as Translator

The traditional programmer has often acted as an intermediary between the person with the problem and the machine that can execute a solution.

This role has been valuable because the machine's language was difficult. Users knew what they wanted in their world. Programmers knew how to express behaviour in the machine's world. Software development required communication across that gap.

AI narrows the gap. A teacher, doctor, accountant, lawyer, scientist, entrepreneur, or small-business owner can now describe a problem to an AI system and receive something closer to software. The user may not need to explain the idea to a human programmer first. In some cases, the user can iterate directly.

The strongest implication is that the person closest to a problem may become more directly involved in creating the software that solves it.

But the argument needs caution. Users are not automatically good programmers simply because AI can generate code. They may know the problem but fail to specify edge cases, security requirements, integration constraints, data quality issues, or long-term maintenance needs. They may accept software that appears to work but is fragile underneath.

The programmer's role may shrink in some places and grow in others. Less time may be spent translating simple intent into routine code. More time may be spent on architecture, verification, integration, performance, security, maintainability, and deciding whether the generated system should exist at all.

AI reduces the cost of translation. It does not remove the need for judgement.

## Natural Language as a Programming Layer

Natural language becomes powerful in AI-assisted development because it sits above traditional programming languages.

When a person writes:

> Create a quiz from these Chinese characters. Ask one question at a time. Include pinyin only in the explanation, not in the choices. Do not reveal the answer until the learner replies.

they are not merely chatting. If the instruction controls software behaviour, it is a specification. It defines rules, sequence, formatting, constraints, and forbidden behaviour. It may need to be tested and refined like code.

In AI-driven features, natural-language prompts can become executable specifications. The model acts like a probabilistic compiler for intent.

The analogy is useful but imperfect. A conventional compiler has formal rules. The same source code should compile consistently. An AI model interprets prompts probabilistically. Wording, context, model version, examples, and configuration can change behaviour. Therefore natural-language programming needs verification even more urgently than traditional programming.

This is where the history of abstraction meets the future of engineering. AI lets humans express behaviour at a higher level, but the higher level is less deterministic. The benefit is speed and accessibility. The cost is uncertainty.

## Why Programming Languages Will Not Vanish

If natural language becomes a higher programming layer, why keep programming languages?

Because formal languages still provide precision.

Swift, Python, SQL, JavaScript, C++, Rust, and other languages give software a level of explicitness that ordinary language does not. They allow compilers, type checkers, linters, test frameworks, static analysis tools, and runtime systems to reason about behaviour. They make software repeatable, inspectable, executable, and sometimes auditable.

AI may generate more of this code, but the code still matters. The deterministic layer still matters. A banking system cannot rely only on a conversational instruction. A medical device cannot treat a vague prompt as sufficient authority. A tax calculation, payroll system, aircraft control system, or legal filing workflow needs precise, testable behaviour.

The likely future is therefore not natural language replacing code entirely. It is natural language moving above code.

Humans express intent. AI helps translate intent into formal structures. Deterministic software executes the parts that require precision. Verification checks whether the system behaves correctly enough.

This layered view resolves a false debate. AI does not make programming languages irrelevant. It changes who must write them, how often humans must interact with them directly, and where human expertise is most valuable.

## Why This Matters Economically

The economic effect of AI-assisted programming comes from reducing translation cost.

Every software project contains translation work:

- From business need to requirement.
- From requirement to design.
- From design to code.
- From code to tests.
- From old system to documentation.
- From bug report to diagnosis.
- From user feedback to product change.

Historically, much of this translation required skilled human intermediaries. AI does not eliminate those intermediaries everywhere, but it can reduce their load, speed their work, and allow more people to participate in earlier stages.

This changes the cost equation introduced in [[03-hidden-engine-of-computing|The Hidden Engine of Computing]]. The scarce resource was not only code-writing ability. It was the ability to move reliably between human intention and machine behaviour. AI attacks that bottleneck by learning relationships among the many representations used in software development.

If that capability improves, the value of software work shifts upward. The important human questions become:

- What problem is worth solving?
- What should the system do?
- What should it not do?
- Which trade-offs are acceptable?
- What risks matter?
- How will we know whether the result is correct?
- How should the system evolve?

These are not syntax questions. They are judgement questions.

## The Bridge to Intelligence

We have now reached the edge of the next problem.

If programming is representation, and AI can move between representations, how does it do so?

It is not enough to say that AI "understands English" or "knows Swift". Those phrases are useful shortcuts but technically misleading. AI does not think in English, Chinese, Swift, Python, or any other human symbolic system in the way people do. It represents patterns and relationships mathematically.

That idea is strange at first. How can meaning become mathematics? How can procedures become mathematical relationships? How can a model move from English to code, from code to explanation, from image to description, or from prompt to software behaviour?

To answer those questions, the book must move from the economics of software and the history of abstraction into the economics of intelligence.

The next part begins with information itself.
