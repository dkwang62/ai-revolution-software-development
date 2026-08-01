---
title: "What Is an AI Model?"
---

![What is an AI model](<figures/FIG-05-01 What Is An AI Model.png>)

When an app displays the Chinese character 木, a learner sees a shape associated with _tree_ or _wood_. Inside the app, that character is also a Unicode number—a standard number computers use to represent written characters—bytes in a file, pixels on a screen, a database record, a pronunciation, and a component inside other characters.

These are different **representations** of the same thing. Software has always moved information among representations:

```text
human purpose
↓
requirements and diagrams
↓
source code
↓
machine instructions
↓
changes in the world
```

Traditional software relies mainly on procedures people specify. An AI model adds a different mechanism: it learns numerical relationships from examples. That difference explains both its flexibility and its unreliability.

An AI model is not a huge database, a search engine, or millions of handwritten IF–THEN rules. It is a vast collection of numerical settings shaped by examples. During training, those settings are adjusted until the model becomes useful at recognising or producing patterns in language, images, sound, or code. The technical description is that it is a **learned mathematical representation of patterns found in data**. The simpler idea is more important: examples shape the model instead of programmers writing every rule by hand.

I encountered this distinction while building a feature that finds useful phrases in captured Chinese text. The application could send the same passage and instructions to a language model and receive useful phrase candidates, but not necessarily an identical list every time. The model was not looking up one authorised answer in a database. It was using learned relationships among characters, phrases, context, pinyin—the spelling of Mandarin sounds with the Latin alphabet—and meaning to generate a plausible result.

![An app's phrase-extraction feature: a model proposes phrase candidates from text and instructions](<figures/FIG-05-02 Phrase Extraction and Prompt.png>)

_An app's phrase-extraction feature. The model proposes candidates from Chinese text and instructions; the surrounding app still determines what is valid enough to save._

The surrounding application then did what the model could not be trusted to do alone. Conventional software checked the format, rejected invalid lengths, removed phrases already present, and waited for the learner to approve what should be saved. The model supplied flexible judgement; the application supplied records, rules, and authority.

## A Map, Not the Territory

The word _model_ did not begin with AI. A model airplane represents selected features of an airplane. A weather model represents atmospheric behaviour. An economic model represents relationships among incentives, prices, supply, and demand.

None is the thing itself. Each simplifies reality in a form that helps somebody reason or act.

Likewise, an AI model is not the world, a library, or a brain. It captures patterns from its training data while leaving much out. It can be useful and imperfect at the same time. A weather forecast can guide a picnic without predicting every cloud; an AI model can write useful code without becoming a flawless source of truth.

The model is a map, not the territory.

## Training Creates the Model

An AI model is created through **training**. The system sees many examples and repeatedly adjusts itself to become better at predicting, classifying, transforming, or generating information.

The adjustment happens inside **parameters**. A parameter can be imagined as a tiny adjustable dial. During training, an example produces a prediction, the system measures the error, and a learning process alters many dials slightly. Repeated across enormous amounts of data, the resulting pattern of settings becomes the model.

```text
present an example
↓
produce a prediction
↓
measure the error
↓
adjust many parameters slightly
↓
repeat
```

The dials do not store knowledge like pages in a book. There is no single dial for _dog_, another for Swift syntax, and another for banking regulation. What the model has learned is distributed across many parameters. Its capability is real, but it is not stored in a human-readable rulebook.

Training is therefore different from a programmer entering facts into a database. The programmer chooses the data, architecture, training process, objectives, and evaluations; the learning process finds parameter values that capture useful statistical relationships.

## Neural Networks Learn the Relationships

A **neural network** is a mathematical system commonly used to learn those relationships. Before training, its numerical settings are mostly unhelpful. Training adjusts them; afterwards, the trained neural network is the AI model people use. In everyday technical discussion, people commonly use _network_ and _model_ for the same trained system. The name comes from a loose historical analogy with connected biological neurons. It does not mean engineers have built a small human brain.

Before entering the network, information is divided into manageable units. Language models use **tokens**, which may be words, parts of words, punctuation, or pieces of code. Images can be divided into patches; audio can be represented as segments of a signal. Each unit becomes numbers that the network transforms through layers.

Those numerical representations are often described as **vectors**—ordered lists of numbers. Training arranges and transforms them so that useful relationships can be expressed. Each position in the list acts like one direction, or dimension, in a mathematical space. Because a vector may have hundreds or thousands of positions, this is called a **high-dimensional space**. Words used in related contexts may occupy related regions within it. A request for a Chinese-character quiz can activate relationships involving quizzes, plausible wrong answers, user interfaces, Chinese characters, state, and tests even if the model has never seen that exact request.

![From text to a mathematical representation: tokens, vectors, and a two-dimensional shadow of a high-dimensional meaning space](<figures/FIG-05-03 Tokens Vectors and Meaning Space.png>)

_A simplified picture of tokens, vectors, and high-dimensional space. The final panel is only a two-dimensional shadow: a real model uses far more dimensions than a drawing can show._

### Beyond Text: Screens, Errors, and Diagrams

The same basic idea applies when a user uploads an image instead of typing a message. A modern **multimodal model** can work with text and pictures together. It does not treat a screenshot as a tiny webpage that it can inspect perfectly. It divides the image into small visual patches, converts those patches into numerical representations, and combines them with any visible words and the user's question.

Suppose a user uploads a screenshot of an error message and asks, “Why did this fail?” The model can often recognise the error text, the name of the application, warning symbols, buttons, and the surrounding screen. It can connect those clues with learned patterns from documentation, programming discussions, and previous examples. If the user also supplies the actual error text, that is usually even better: text can be copied, searched, and checked more precisely than a blurry image.

Or suppose a user uploads a phone screen and says, “This button is out of alignment.” The model can use the picture as evidence of relationships that source code alone does not reveal: a label may be cut off, a button may overlap another control, or a row may be too crowded at that screen size. The internal representation is not a literal map with one point labelled “misaligned button.” It is a numerical pattern that helps the model relate shapes, positions, words, colours, and familiar interface conventions.

```text
screenshot, error message, or flowchart
↓
visual patches and visible text become numbers
↓
the model relates positions, labels, arrows, and patterns
↓
an observation, explanation, or proposed next step
```

A flowchart works similarly. Its boxes, arrows, and labels become visual and textual evidence from which the model can infer a likely sequence: start here, test this condition, then follow one of two branches. The model is not reading the diagram with human eyes or storing the whole image as one object. It is using learned numerical relationships to form a useful interpretation.

This is powerful, but it remains evidence rather than proof. A screenshot may be cropped, blurry, outdated, or taken at a different device size. A visual model can miss a small alignment problem or misread a word. For important work, the best loop is still: show the image, inspect the actual screen or error text, test the proposed fix, and look again.

### Side Story: How a Picture Becomes Tokens

A digital image begins as a two-dimensional grid of coloured dots, called **pixels**. Each pixel commonly records three numbers: how much red, green, and blue it contains. A model cannot sensibly consider every dot as one separate idea, so one common design breaks the picture into small squares, or **patches**. This is the central idea of a **Vision Transformer**: treat patches of an image somewhat like tokens of text. [Dosovitskiy et al., _An Image is Worth 16×16 Words_](https://arxiv.org/abs/2010.11929)

For example, a 224 × 224 image divided into 16 × 16-pixel patches produces 14 × 14 = 196 patches. One patch contains 256 pixels; with red, green, and blue values, that begins as 768 numbers. A small mathematical transformation turns those numbers into a shorter vector. The model also receives information about where the patch came from, because a blue patch at the top of a screen may be sky or a header, while the same blue patch near the bottom may be a button.

```text
image → small patches → vectors + positions → visual representation
text  → word pieces   → vectors + positions → language representation
                                             ↓
                               model relates the two kinds of evidence
```

The comparison with text is useful but imperfect. A text token comes from a fixed vocabulary of words or word pieces, such as “cat” or “ing.” An image patch has no fixed visual vocabulary: it is a bundle of colours, edges, textures, and shapes. At first it may capture only a corner of an ear, a piece of blue sky, or part of a button. Through the model’s layers, neighbouring patches and their positions help form a richer interpretation: perhaps a dog, a warning banner, or a button that overlaps its label.

The 16 × 16 and 224 × 224 figures are a teaching example, not a universal recipe. Different models resize images differently, use different patch sizes or variable numbers of visual tokens, and combine vision with language in different ways. The principle is the important part: a picture is converted into numerical evidence that can be related to the user’s words. Modern AI models can accept text and image input, but the detailed architecture inside a particular model is not always public. [OpenAI, _Models_](https://developers.openai.com/api/docs/models)

It is tempting to say that meaning becomes location. That is a useful analogy, not a complete account of human meaning. The geometry captures statistical relationships; it does not give the model a human life, purpose, or experience of a Chinese character.

For text generation, the immediate training task is often to predict the next token. That sounds modest. Consider the unfinished sentence: “The capital of France is ___.” To predict _Paris_, the model needs a learned relationship between France and Paris. In code, predicting the next step after “if the list is empty” may require learned patterns about programming logic. In a screenshot, predicting what a label refers to may require recognising its position, a nearby button, and a visible error message.

Training gives the model billions of these small prediction-and-correction exercises. Across books, code, diagrams, conversations, and worked examples, it gradually learns reusable patterns: facts often associated with one another, grammar, cause and effect, software conventions, visual layouts, and common ways people solve problems. This can produce surprisingly broad behaviour. But it is still pattern-based prediction, not human experience or a guarantee that every answer is correct.

## Inference Uses the Finished Model

**Inference** means using the trained model.

When I ask an AI model to write a Swift function, explain a legal clause, translate a sentence, or generate a quiz, it is not retraining itself from the beginning. It combines my input with its current context and constructs an output from the patterns encoded in its parameters.

This explains why AI can answer a question it has never seen word for word. It also explains why it can be wrong. Prediction is not truth. A model may generate something plausible but outdated, unsafe, logically weak, or inappropriate for the user's actual situation.

## What AI Reasoning Means

In this book, **reasoning** means the work of connecting a goal to a conclusion or action through several intermediate relationships. For a software task, that may involve comparing requirements, finding dependencies, considering alternatives, choosing a next step, checking a result, and revising after failure.

This is a practical description of capability, not a claim that the model thinks or understands exactly as a person does. Nor can we assume that an explanation produced by the model is a faithful transcript of its hidden internal process. The explanation is another generated output. It may be useful, but important conclusions still require evidence and checking.

Traditional software and learned models therefore have complementary strengths:

| Traditional software           | AI model                                                  |
| ------------------------------ | --------------------------------------------------------- |
| Executes explicit rules        | Applies learned relationships                             |
| Mostly deterministic           | Probabilistic                                             |
| Easier to inspect line by line | Harder to interpret internally                            |
| Strong where rules are clear   | Strong where variation makes exhaustive rules costly      |
| Changed mainly by editing code | Changed by training, tuning, prompting, and configuration |

Real applications combine both. AI suggests; software decides.

## Why a Model Can Produce Software

Programs contain recurring patterns: conditions, loops, functions, data structures, APIs, tests, error handling, interface conventions, and architectures. Documentation and software discussions also connect ordinary requests with these structures.

A model trained across code, explanations, tutorials, bug reports, and technical conversations can learn many of those relationships. It can connect “sort this list” with a library operation, or associate “build a login screen” with fields, validation, state, navigation, and security concerns.

The model is not executing a complete hidden program that it retrieves from memory. It generates a proposal token by token, conditioned on the request, its learned parameters, the available project context, and what it has already generated.

When I ask Codex to alter an app, learned relationships help it locate likely screen-layout patterns, files, and data structures. The compiler, tests, application framework, screenshots, and my inspection determine whether those relationships produced a change worth keeping.

That surrounding evidence matters because code can be syntactically correct yet educationally wrong. A quiz may compile and still teach the wrong distinction. A button may work while covering another control on an iPhone. The model shortens the distance from intention to implementation; it does not remove the need to judge the destination.

## Natural Language, Computer Language, and Why Code Is Special

At first sight, translating English into Spanish and translating English into Python seem like the same kind of task. In both cases, one language goes in and another comes out.

The basic learning mechanism is indeed similar. English, Spanish, Swift, Python, and other forms of text can all be divided into tokens. A model learns patterns in sequences of those tokens. It is not normally taught English and computer languages as two completely separate school subjects. It learns from a mixture of books, conversations, source code, documentation, tutorials, bug reports, tests, and examples of people explaining software to one another.

That mixture is why a model can connect an ordinary request such as “show my saved characters in a list” with likely software structures: stored data, a screen, navigation, state, and tests.

But producing code has a harder job than translating between human languages.

### Meaning Is Not Enough

A Spanish translation succeeds when a Spanish reader understands the intended idea. There may be several good ways to say the same thing. A slightly awkward phrase can still communicate successfully.

Code must preserve the intended idea **and** make the computer behave correctly. A program is not judged only by whether it looks sensible to a programmer. It must work for real inputs and situations that may never have been mentioned in the original request.

This is the first important distinction:

```text
Natural-language translation: preserve meaning.

English-to-code translation: preserve meaning,
then make the system behave correctly.
```

### Human Language Can Leave Things Unsaid

Suppose somebody says, “Sort the list.” A person may regard that as a complete request. But code needs more decisions:

- Sort by name, date, score, or some other field?
- Ascending or descending?
- What happens if the list is empty?
- What happens if an item has no value to sort by?
- How should two equal items be ordered?
- Should the original list change, or should a new sorted list be created?

Natural language tolerates these gaps because people use shared experience and can ask a follow-up question. A programming language has no such tolerance. The model must ask for clarification, find the relevant product rule in the project, or make a guess. Every silent guess is a possible mismatch between what the person meant and what the program does.

### Code Has an Exacting Second Reader

The first reader of a Spanish translation is a person. The second reader of generated code is the computer itself.

A person can usually understand a sentence with a minor grammatical mistake. A computer may reject a program because of one misplaced bracket, comma, indentation mark, or misspelled name. Even code that passes this first test may fail because it refers to a function that does not exist, gives a library the wrong kind of data, or handles an unusual case incorrectly.

This is why code benefits from forms of evidence that ordinary language does not have:

- a **compiler** can check whether source code follows the language's rules;
- a **test** can check whether known examples produce the expected result;
- a running application can reveal whether a feature works in practice; and
- a screenshot or a human user can reveal whether the result is actually usable.

These checks do not prove that a program is perfect. They turn some important questions from opinion into evidence.

### Code Must Join an Existing World

Translating one English sentence into Spanish rarely requires knowledge of every other sentence ever written. New code almost always has to fit into a system that already exists.

For an app, a small screen change may need to respect existing data models, navigation, saved records, naming conventions, accessibility settings, iPhone and iPad layouts, and the expectations built into other screens. A change that works alone may still break the app when it meets this surrounding context.

The model must therefore gather or be given project context: relevant files, existing functions, data definitions, design decisions, tests, and the purpose of the feature. This is why an AI coding agent is more useful when it can search the repository, inspect the running application, and use tools rather than receiving one isolated prompt.

### Errors Can Travel Far

If one sentence in a translated paragraph is slightly imperfect, the rest of the paragraph will often remain understandable. In software, one subtle error can travel far. A wrong value may be stored, passed through several functions, used in a report, and cause trouble only under a rare condition days later.

Correctness therefore compounds. The code must work not only along the path imagined when the request was written, but across the paths that real users, unusual data, failed networks, and future changes will create.

This is why “AI can write code” does not automatically mean “software is cheap to build.” AI can reduce the cost of producing a first draft. The remaining cost lies in discovering unstated requirements, gathering context, integrating with the existing system, testing behaviour, checking security, and deciding whether the result serves its users.

Verification is where much of that remaining cost lives—and where agentic AI, deterministic tools, and human judgement must work together.

## When an AI Model Can See and Hear

Models increasingly work across text, images, audio, video, diagrams, screens, and code. For software development, this matters because important requirements and defects are not always expressed well in prose.

A screenshot can expose overflowing text that the source code does not make obvious. A screen recording can show a navigation sequence. A sketch can communicate an intended layout. A spoken explanation can capture domain knowledge from someone who would never write a formal specification. The model can translate these inputs into observations, requirements, code changes, or tests.

This does not guarantee spatial judgement. While building the application and producing this book, I sometimes had to show Codex a rendered screen before it recognised that words had escaped a box or that controls were squeezed into an unusable space. Source code describes constraints; the rendered picture reveals their combined result. The practical solution is a feedback loop: generate, render, inspect at relevant sizes, test, and revise. Visual regression tools and established interface frameworks can automate much of that loop, while human review remains important where taste or purpose is involved.

These two diagrams are real examples from this book. The source files were valid enough to publish, but a rendered inspection showed that their text had escaped its intended place. The problem was visible only in the finished image.

![Text escaping its intended box in the English-to-software diagram](<figures/CASE-14-02 Diagram Overflow English To Software.png>)

![A blank label in the AI-model diagram](<figures/CASE-14-03 Diagram Overflow AI Model.png>)

Multimodality therefore expands the AI model's inputs, not its authority. It gives the system more evidence from which to reason. The same rule still applies: successful generation is not successful rendering, and a convincing appearance is not proof of correct behaviour.

## Why There Are Many Models

Different training choices create different models. They may vary in data, architecture, size, optimisation, safety tuning, tool use, context length, multimodal capability, deployment environment, and intended use. One may excel at coding, another at writing, and another may be small enough to run on a phone.

This is why model names are not interchangeable. It also explains why an upgrade can change behaviour unexpectedly. In traditional software, developers try to add features while preserving old behaviour. A change in training or model architecture may shift many responses at once. A prompt that worked with one version may need to be tested again with its successor.

Model behaviour thus becomes a dependency of every application built around it.

## From Text Predictor to Agentic Collaborator

When a company announces a newer model—whether it is a new version of GPT, Claude, Gemini, Grok, or another frontier model—it is tempting to imagine a simple upgrade: the same system, but with more facts inside it.

That is not the main long-term direction.

The exact recipe for any particular version is private. The companies do not publish all their training data, model designs, experiments, or the contribution of each change. We therefore cannot honestly say that one named version is better than its predecessor because of one known training technique.

But the direction across frontier labs is visible. Models are being developed from broad pattern predictors into more reliable, multimodal, tool-using collaborators.

```text
learn broad patterns from data
↓
learn to be helpful, accurate, and safe
↓
learn to work longer on difficult problems
↓
learn to use tools and inspect results
↓
learn from evaluation failures
↓
become a more capable collaborator
```

### The Training Journey in Plain English

The first stage is usually called **pre-training**. The model is exposed to very large collections of text, code, images, audio, and other material, then repeatedly learns to predict missing or next pieces. This gives it broad general capability: language, programming patterns, visual relationships, facts, styles, and examples of how people solve problems.

Pre-training alone does not make a good assistant. A model may be able to continue a passage of text without knowing how to help a person responsibly. The next stage, often called **post-training**, teaches behaviour after the broad model has been created.

In plain language, post-training is like giving a very knowledgeable but inexperienced graduate a series of examples, corrections, practice tasks, and examinations. The system is shown better and worse answers, taught to follow instructions, and rewarded when its responses are more useful, accurate, safe, and well judged. Technical names include **supervised fine-tuning**—learning from worked examples—and **preference learning** or **reinforcement learning**—adjusting behaviour using feedback about which outcome is better.

For reasoning models, the practice tasks increasingly reward more than a fluent first answer. They reward checking assumptions, working through difficult steps, using evidence, noticing uncertainty, and reaching a correct result. This is why a user can sometimes choose a higher reasoning setting: the system is allowed to spend more computation exploring and checking before it responds. It may improve a hard task, but it also costs more and takes longer.

The next frontier is **agent training**. Instead of judging the model only on one answer in a chat window, researchers place it in an environment with a goal and tools. The model may need to search files, edit code, run a build, read an error, use a browser, inspect a screenshot, or decide that it needs more evidence. Its work is assessed not only on its words but on whether it completes the task safely and correctly.

OpenAI describes work on agent post-training in terms of coding, tool use, computer use, long-horizon execution, factuality, calibrated reasoning, and evaluation environments. Anthropic's Constitutional AI work is one example of a different emphasis: using explicit principles, critique, and feedback to teach a model to be more helpful and safer. Google evaluates its frontier Gemini models across reasoning, multimodality, long context, and agentic tool use. The methods differ, but the destination is similar: a system that can take part in a longer, evidence-based workflow rather than merely produce a persuasive paragraph. [OpenAI, _Agent Post-Training, Connectors Research_](https://openai.com/careers/agent-post-training-connectors-research-san-francisco/); [Anthropic, _Claude's Constitution_](https://www.anthropic.com/research/claudes-constitution); [Google DeepMind, _Gemini 3.1 Pro Model Card_](https://deepmind.google/models/model-cards/gemini-3-1-pro)

### A Concrete Example: Improving an App

Consider a request in an app:

> When a learner enters a character's origin, the iPhone keyboard covers the lower fields. Fix it without spoiling the iPad layout.

A less capable coding model may find one likely SwiftUI screen, add a `ScrollView` or some padding, make the code compile, and announce that the task is finished. The code may be valid while the field remains covered on a small phone, the scrolling feels awkward, or the iPad layout has become unnecessarily stretched.

A more capable agent can approach the same task as a chain of evidence:

```text
understand the user problem
↓
find the relevant screen and layout rules
↓
identify the iPhone and iPad differences
↓
make a narrow change
↓
build the application
↓
run it in an iPhone Simulator
↓
open the keyboard and inspect the rendered screen
↓
revise if the result is still wrong
↓
report what changed and what was checked
```

The improvement is not simply that the newer model knows more Swift. It is better able to keep the objective, the project context, the device differences, compiler feedback, visual evidence, and verification in one working process.

The same distinction applies to an app's backup export. A weak solution can create a ZIP file. A stronger agent can trace which records are essential, find the existing export path, list the included resources, check that important records are not missing, build the app, and compare the result with the expected contents. The useful unit of progress is not “code was generated.” It is “a bounded engineering task was completed and checked.”

This also explains why an upgrade does not automatically solve every problem. The better workflow depends on the system around the model: access to the project, the compiler, tests, the Simulator, screenshots, clear permissions, and human review. A stronger model without those tools is still partly guessing. A model with those tools must still be constrained, because greater ability to act creates greater need for verification and authority boundaries.

## Capability Has a Cost

Training requires data, specialised hardware, electricity, engineers, experiments, and evaluation. It is a large upfront investment that creates a reusable asset.

Inference is an operating cost. Every request consumes computation. The amount depends on factors such as model size, input length, output length, latency, and hardware efficiency. Larger context windows, more deliberate reasoning, and multimodal input may improve usefulness while increasing cost.

The economic question is therefore not which model looks most impressive in isolation. It is which combination of model, tools, context, verification, and human attention completes a valuable task reliably at an acceptable cost.

## What the Mechanism Does Not Guarantee

Training data can contain errors and bias—systematic patterns that favour or disadvantage some answers, groups, or viewpoints. Average performance does not guarantee reliability in a rare or consequential case. Larger models and better training can improve capability without eliminating fabricated references, outdated practices, insecure code, or misunderstandings of local purpose.

One feature lets a learner photograph printed Chinese and turns the characters in the image into editable text. The application keeps the original picture, checks the extracted text, removes phrases the learner has already saved, and lets the learner choose what to keep. A learned system makes this possible across changing fonts, lighting, camera angles, and image quality—variations that would be extremely difficult to describe through exhaustive rules. Rules, tests, and human responsibility still matter around the learned result.

This is the central bargain. A learned model handles ambiguity that conventional software struggles to enumerate. Conventional software, tools, and people supply the constraints and evidence the model lacks.

[[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] follows that bargain through one concrete transformation: an ordinary English request becoming executable source code.
