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

Before the detail, the whole mechanism can be pictured like this:

```text
many examples during training
↓
the model learns broad patterns in its numerical settings
↓
your request + current context during use
↓
the model proposes the next useful words, code, or action
↓
tools, tests, and people check what may be trusted or done
```

This chapter explains each part of that chain. The practical question throughout is: where does the model's flexible judgement help, and where must software, evidence, and people take responsibility?

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

## From Raw Material to a Useful Assistant

The full recipe for any named frontier model is private, and it changes between laboratories and generations. But the broad story is clear. A model first learns broad patterns, then learns how to help people, and finally may learn how to work with tools under supervision:

```text
build a foundation
↓
teach it to be useful
↓
teach it to behave and work safely with tools
```

The first movement begins with data, but not simply by pouring “the internet” into a machine. Teams assemble material such as books, web pages, reference works, scientific papers, source code, technical documentation, mathematical problems, tables, conversations, images, diagrams, audio, and video. They remove duplicates, filter obvious noise or unsafe material, check quality, balance different kinds of content, and decide what may legally and ethically be used. The selection matters: a model can learn only the patterns that its material and training method make available.

Next, each kind of material is converted into a form a neural network can process. Text and code are divided into tokens. An image begins as raw pixel values, then is commonly divided into patches and transformed into visual vectors. Audio may begin as a waveform or a visual-like sound map, then becomes segments and vectors. Video is often treated as a sequence of images with timing information. A multimodal model does not need every kind of input to use exactly the same internal machinery. The important achievement is that it learns to relate them: a picture with its caption, speech with its transcript, a diagram with its labels, or a screenshot with a user's question.

Only then does the large training run begin. The Transformer starts with parameters—sometimes billions or more adjustable numerical values—that are random or otherwise unhelpful. At that point it knows no English, Python, Chinese, mathematics, or visual concepts. It is a huge mathematical structure waiting to be shaped.

### Stage 1: Learn Broad Patterns Without a Teacher Explaining Every Rule

The main foundation exercise is **self-supervised learning**. “Self-supervised” does not mean the model trains itself without people. People prepare the data, choose the task, build the computers, and measure results. It means that the data supplies much of its own answer.

For a language model, the exercise may look like this:

```text
The Eiffel Tower is in _____
                         ↓
                    predict: Paris
                         ↓
              compare with the actual next token
                         ↓
              adjust many parameters a tiny amount
```

For code, the missing piece may be a function call, a closing bracket, a test assertion, or the next step in an explanation of a bug. For an image-and-text example, the training task may reward the model when it connects the correct caption with the correct image more strongly than with unrelated images. Research such as OpenAI's CLIP demonstrated this general idea of learning visual concepts from natural-language pairings; modern frontier systems can be trained jointly across text, images, audio, and video. [OpenAI, _CLIP_](https://openai.com/index/clip/); [Google DeepMind, _Gemini Technical Report_](https://deepmind.google/gemini/gemini_1_report.pdf)

No one enters a rule saying, “Paris is the capital of France,” “a loop repeats work,” or “this is a picture of a dog.” Repeated prediction and correction push the numerical parameters towards settings that represent useful regularities. Across an immense number of examples, this can produce grammar, factual associations, programming patterns, visual relationships, and many rough reasoning habits.

### The Astonishing Part: It Learns Code Grammar Too

This is the insight worth pausing over. Nobody gives the model a handbook of English grammar, Python grammar, or Swift grammar and tells it to memorise every rule. It sees enormous numbers of examples, then keeps trying to predict what belongs next.

To predict English well, it must gradually capture patterns such as which words can follow one another and how a sentence holds together. To predict Python well, it must capture that indentation begins a block, that a function call needs the expected inputs, and that a closing bracket must match an opening one. To predict Swift well, it must capture patterns involving types, functions, state, user-interface components, and the conventions programmers use to organise an app.

```text
English, Python, Swift, and source code explanations
↓
all become token sequences
↓
the model repeatedly predicts the next useful piece
↓
it gradually learns the statistical grammar of each form
```

That does not mean the model has learned a perfect formal rulebook. A compiler can still reject code that looks plausible; a test can still expose logic that is wrong for this particular application. The model learns the patterns of working software. The compiler, tests, and human judgement determine whether a proposed program actually works.

### Why Code Is Valuable Training Material—and Why It Is Not Enough

The question is not simply, “Have we fed the model enough code?” There is already an enormous public supply of source code, documentation, tutorials, bug reports, and questions answered by programmers. It is enough to give a frontier model broad skill with common languages, familiar frameworks, standard interface patterns, and ordinary refactoring. That is one reason an AI coding assistant can be so useful so quickly.

Code is especially rich material because it carries several kinds of repeated evidence at once. A program shows its syntax, its structure, its names, and often a written explanation of its purpose. It may also come with a compiler, linter, test suite, error report, code review, or later correction. In simple terms, the model does not only see people *talking* about how code should work; it can often see whether a machine accepted it and whether known checks passed.

```text
raw code alone
↓
useful patterns, but many guesses remain

requirement + code + tests + error + correction
↓
far stronger evidence about how useful software is actually produced
```

For the next improvement, more copied public code is not necessarily the most valuable ingredient. Better examples connect a real goal to an existing project, the change made, the tests run, the failure found, the correction, and a human review. This is why tool-using coding agents are important: they can learn and be evaluated in a loop closer to real engineering, rather than merely completing a code fragment.

Even that is not enough to know what *your* app should do. Public training examples cannot automatically reveal a company's private rules, an unusual customer promise, the current state of its database, or whether a screen feels wrong on a particular iPad. Those details must enter through current project context, tools, tests, and people who understand the problem.

The broader lesson is simple:

> Data volume helps only when it contains repeated, relevant, and checkable relationships.

### A Boundary on What Patterns Can Reveal

The comparison with biology matters here for one reason only: it shows the limit of discovery from patterns alone. Human language and DNA are both long sequences with recurring patterns. A model can learn much of the “grammar” of each. In language, it can learn that certain word orders and phrases belong together. In DNA, it can learn recurring biological patterns such as sequences associated with genes or gene regulation.

Language gives a model unusually rich clues about its own structure. It was made for communication, so the same grammatical relationships reappear across billions of sentences: “the cat,” “the dog,” and “the boy” leave visible statistical fingerprints. Its immediate output is usually more language: earlier words help predict later words.

DNA is different. A raw sequence does not label its own equivalent of a noun, a verb, or a sentence. Its meaning is spread across a living chain:

```text
DNA → RNA → proteins → cells → tissues → organism
```

A sequence may affect that chain differently in a liver cell, a brain cell, a developing child, or a person under environmental stress. There are also far fewer complete observations that connect a genome to all those later outcomes than there are sentences showing how language is used. A DNA pattern can therefore be valuable evidence without revealing the full chain of causes behind a biological outcome.

Python sits closer to language in one respect: it has a deliberately defined interpreter. It can be run, and its behaviour can often be checked. A genome has no single interpreter or complete, visible rulebook. More DNA letters alone do not automatically reveal the missing causes.

Keep these three principles in mind:

1. **Patterns can be learned from examples.** That is why self-supervised training is so powerful.
2. **A learned grammar is not a complete explanation.** Predicting what is likely is easier than knowing why it happens.
3. **Feedback determines reliability.** Compilers, tests, experiments, and real-world observation turn a plausible pattern into something that can be checked.

That is all the biology comparison needs to establish here. The side story [[side-chapter-the-genie-is-not-all-powerful|The Genie Is Not All-Powerful]] explores the genome example in more detail.

This is the strange power of large-model training. The immediate game is simple—predict what belongs next or which pieces belong together—but doing that well across many kinds of material requires the system to capture a great deal of structure.

### Stage 2: Turn a Foundation Model into an Assistant

A foundation model can continue text or code, but it is not automatically a helpful assistant. It may imitate the tone of its input, give an unstructured answer, or continue an unsafe request because that is statistically plausible.

The next stage is usually **post-training**. Humans and sometimes other carefully checked systems provide worked examples: a request and a good answer, a bug report and a helpful diagnosis, a coding task and a correct solution, an unsafe request and a safe refusal. This is **supervised fine-tuning**. It teaches the model the kind of response that a user is meant to receive.

Then reviewers may compare several possible answers and decide which is clearer, more correct, safer, or more useful. A separate learning step teaches the model to prefer the kinds of answers people repeatedly choose. This is often called **preference learning** or **reinforcement learning from human feedback**. It does not make the model morally perfect or factually infallible. It makes the broad capability learned in pre-training easier to direct. [OpenAI, _Training Language Models to Follow Instructions with Human Feedback_](https://arxiv.org/abs/2203.02155)

Safety training is part of this work, not a magic shield added at the end. It can teach a model to recognise dangerous requests, protect privacy, decline some actions, express uncertainty, and follow policies. It cannot guarantee that every harmful or false output disappears. The surrounding software still needs permissions, filters, logging, tests, and human authority.

### Stage 3: Teach It to Work, Not Only to Answer

For an AI coding agent, a fluent answer is not enough. The system must learn when it should inspect a project, search for a file, run a compiler, use a test, look at a screenshot, or ask for clarification. This is partly training and partly engineering around the model.

Researchers therefore evaluate models inside realistic environments with tools and goals. A coding task may require the agent to read an issue, inspect an existing codebase, edit only relevant files, run a build, interpret an error, revise its plan, and leave evidence of what it checked. The model may learn better habits from such examples and feedback; the product also gives it actual tools, narrow permissions, and tests. The result is not one all-powerful model. It is a model inside a supervised working system.

```text
user's goal
↓
model plans and proposes
↓
tools inspect, calculate, build, search, or test
↓
results become new evidence
↓
model revises or reports uncertainty
↓
software and people decide what may be accepted or executed
```

### What Actually Changes—and What Does Not

During training, the main thing that changes is the model's **parameters**, also called weights: the enormous collection of adjustable numbers introduced earlier. A training example slightly changes many of them. Over a long run, those tiny changes create the trained model.

When you use a deployed model, its weights normally do **not** change because of your one conversation. Your prompt, uploaded image, project files, and tool results enter its temporary working context; they influence the answer now, but they are not automatically written permanently into the model. Providers may later study permitted feedback, failures, and evaluations and use them to design another training or post-training cycle. That is continuous improvement of the product, not a model secretly learning every fact from every user in real time.

This distinction matters for software development. Pre-training gives a model a broad library of learned patterns from code, documentation, tests, and explanations. Post-training teaches it to be more useful and careful. Tools and agent environments let it gather local evidence. But none of these steps gives it the private knowledge of a particular app automatically. That must still be supplied through project context, retrieval, tests, and the people responsible for the result.

## Neural Networks Learn the Relationships

A **neural network** is a mathematical system commonly used to learn those relationships. Before training, its numerical settings are mostly unhelpful. Training adjusts them; afterwards, the trained neural network is the AI model people use. In everyday technical discussion, people commonly use _network_ and _model_ for the same trained system. The name comes from a loose historical analogy with connected biological neurons. It does not mean engineers have built a small human brain.

Before entering the network, information is divided into manageable units. Language models use **tokens**, which may be words, parts of words, punctuation, or pieces of code. Images can be divided into patches; audio can be represented as segments of a signal. Each unit becomes numbers that the network transforms through layers.

Those numerical representations are often described as **vectors**—ordered lists of numbers. Training arranges and transforms them so that useful relationships can be expressed. Each position in the list acts like one direction, or dimension, in a mathematical space. Because a vector may have hundreds or thousands of positions, this is called a **high-dimensional space**. Words used in related contexts may occupy related regions within it. A request for a Chinese-character quiz can activate relationships involving quizzes, plausible wrong answers, user interfaces, Chinese characters, state, and tests even if the model has never seen that exact request.

![From text to a mathematical representation: tokens, vectors, and a two-dimensional shadow of a high-dimensional meaning space](<figures/FIG-05-03 Tokens Vectors and Meaning Space.png>)

_A simplified picture of tokens, vectors, and high-dimensional space. The final panel is only a two-dimensional shadow: a real model uses far more dimensions than a drawing can show._

For text generation, the immediate training task is often to predict the next token. That sounds modest. Consider the unfinished sentence: “The capital of France is ___.” To predict _Paris_, the model needs a learned relationship between France and Paris. In code, predicting the next step after “if the list is empty” may require learned patterns about programming logic. In a screenshot, predicting what a label refers to may require recognising its position, a nearby button, and a visible error message.

Training gives the model billions of these small prediction-and-correction exercises. Across books, code, diagrams, conversations, and worked examples, it gradually learns reusable patterns: facts often associated with one another, grammar, cause and effect, software conventions, visual layouts, and common ways people solve problems. This can produce surprisingly broad behaviour. But it is still pattern-based prediction, not human experience or a guarantee that every answer is correct.

## Side Story: The 2017 Breakthrough That Changed the Trajectory

For many years, AI could recognise patterns, classify pictures, translate short passages, and generate limited text. What was missing was an efficient way to train one model on very large amounts of language and let it keep track of relationships across a long passage.

In 2017, Google researchers published a paper called [_Attention Is All You Need_](https://research.google/pubs/attention-is-all-you-need/). It introduced the **Transformer** architecture. A Transformer is not a particular chatbot. It is a design for a neural network.

Its central idea is **attention**. When a person reads the sentence “The student put the book into her bag because she needed it later,” they can connect “it” with “the book.” Attention gives a model a mathematical way to weigh which earlier pieces of information matter to the piece it is processing now. Unlike older recurrent designs, which largely handled a sequence step by step, Transformers made it practical to process many relationships in parallel during training.

That did not invent language, translation, or generative AI. The important change was scale. If a model can learn from vastly more examples of text, code, images, and explanations, then predicting the next useful piece can become a way to generate a paragraph, a program, an image description, or a translation. **Generative** means producing a new continuation or transformation rather than merely selecting a label from a fixed list.

The result was a new trajectory: larger models could learn broader relationships among human symbols and use them to create. The Transformer did not make an AI model all-knowing, and it did not remove the need for facts, context, or verification. But it made modern large-scale generative models practical enough to become an economic force. Later chapters return to the question now becoming important: how might this architecture evolve as memory, reasoning, tools, and specialised hardware improve?

## Inference Uses the Finished Model

**Inference** means using the trained model.

When I ask an AI model to write a Swift function, explain a legal clause, translate a sentence, or generate a quiz, it is not retraining itself from the beginning. It combines my input with its current context and constructs an output from the patterns encoded in its parameters.

In practical terms, an answer can draw on four things: broad patterns learned during training; the words, files, or image supplied for this task; the conversation or project material still in its current context; and, if the product allows them, the results of tools such as search, a compiler, or a database query. It does not reopen and search its original training collection whenever it answers.

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

Real applications combine both. AI can propose, interpret, and, when permitted, act; deterministic software, permissions, tests, and people determine what is allowed and what is accepted.

## Why This Becomes Powerful for Software Development

Software is unusually promising because its patterns are both plentiful and useful. Programs repeatedly use conditions, loops, functions, data structures, APIs, tests, error handling, interface conventions, and architectures. Documentation, tutorials, bug reports, and technical discussions connect those technical structures with the ordinary problems people are trying to solve.

A model trained across that mixture can connect “sort this list” with a likely library operation, or “build a login screen” with fields, validation, state, navigation, and security concerns. It does not need to have seen the exact request before. It can combine nearby learned patterns with the context it has been given now.

This is the source of the apparent magic. A person with domain knowledge can describe an outcome in ordinary language; the model can turn that description into a concrete proposal for screens, data, code, tests, and next steps. It is not retrieving one complete hidden program from memory. It generates a proposal piece by piece, guided by its learned patterns, the request, the available project context, and what it has already generated.

When I ask Codex to alter an app, those learned relationships help it locate likely screen-layout patterns, files, and data structures. The compiler, tests, application framework, screenshots, and my inspection determine whether that proposal becomes a change worth keeping.

That surrounding evidence matters because code can be syntactically correct yet educationally wrong. A quiz may compile and still teach the wrong distinction. A button may work while covering another control on an iPhone. The model shortens the distance from intention to implementation; it does not remove the need to judge the destination. The next section explains why that final gap is the hard part.

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

### Code Must Join an Existing World—and Errors Can Travel Far

Translating one English sentence into Spanish rarely requires knowledge of every other sentence ever written. New code almost always has to fit into a system that already exists.

For an app, a small screen change may need to respect existing data models, navigation, saved records, naming conventions, accessibility settings, iPhone and iPad layouts, and the expectations built into other screens. A change that works alone may still break the app when it meets this surrounding context.

The model must therefore gather or be given project context: relevant files, existing functions, data definitions, design decisions, tests, and the purpose of the feature. This is why an AI coding agent is more useful when it can search the repository, inspect the running application, and use tools rather than receiving one isolated prompt.

If one sentence in a translated paragraph is slightly imperfect, the rest of the paragraph will often remain understandable. In software, one subtle error can travel far. A wrong value may be stored, passed through several functions, used in a report, and cause trouble only under a rare condition days later.

Correctness therefore compounds. The code must work not only along the path imagined when the request was written, but across the paths that real users, unusual data, failed networks, and future changes will create.

This is why “AI can write code” does not automatically mean “software is cheap to build.” AI can reduce the cost of producing a first draft. The remaining cost lies in discovering unstated requirements, gathering context, integrating with the existing system, testing behaviour, checking security, and deciding whether the result serves its users.

Verification is where much of that remaining cost lives—and where agentic AI, deterministic tools, and human judgement must work together.

## When an AI Model Can See and Hear

Models increasingly work across text, images, audio, video, diagrams, screens, and code. For software development, this matters because important requirements and defects are not always expressed well in prose.

A screenshot can expose overflowing text that the source code does not make obvious. A screen recording can show a navigation sequence. A sketch can communicate an intended layout. A spoken explanation can capture domain knowledge from someone who would never write a formal specification. The model can translate these inputs into observations, requirements, code changes, or tests.

### Screens, Errors, and Diagrams as Evidence

When a user uploads an image instead of typing a message, a modern **multimodal model** can work with the picture and the user's words together. It does not treat a screenshot as a tiny webpage that it can inspect perfectly. It divides the image into small visual patches, converts those patches into numerical representations, and relates them to visible words and the question.

Suppose a user uploads a screenshot of an error message and asks, “Why did this fail?” The model can often recognise the error text, the name of the application, warning symbols, buttons, and the surrounding screen. If the user also supplies the actual error text, that is usually even better: text can be copied, searched, and checked more precisely than a blurry image.

Or suppose a user uploads a phone screen and says, “This button is out of alignment.” The model can use the picture as evidence of relationships that source code alone does not reveal: a label may be cut off, a button may overlap another control, or a row may be too crowded at that screen size. A flowchart works similarly. Its boxes, arrows, and labels become visual and textual evidence from which the model can infer a likely sequence.

```text
screenshot, error message, or flowchart
↓
visual patches and visible text become numbers
↓
the model relates positions, labels, arrows, and patterns
↓
an observation, explanation, or proposed next step
```

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

This does not guarantee spatial judgement. While building the application and producing this book, I sometimes had to show Codex a rendered screen before it recognised that words had escaped a box or that controls were squeezed into an unusable space. Source code describes constraints; the rendered picture reveals their combined result. The practical solution is a feedback loop: generate, render, inspect at relevant sizes, test, and revise. Visual regression tools and established interface frameworks can automate much of that loop, while human review remains important where taste or purpose is involved.

The screenshot below shows a real app layout problem. The controls exist, the screen can render, and the code may compile. Yet in the finished iPad view, the interface overflows the left and right edges. The problem is not obvious from a single line of code. It becomes obvious when the system is rendered at the size a user will actually see.

![An iPad app screen whose controls overflow the left and right borders](<figures/CASE-05-01 App Layout Overflow iPad.png>)

Multimodality therefore expands the AI model's inputs, not its authority. It gives the system more evidence from which to reason. The same rule still applies: successful generation is not successful rendering, and a convincing appearance is not proof of correct behaviour.

## Why Models—and Their Upgrades—Differ

Different training choices create different models. They may vary in data, architecture, size, optimisation, safety tuning, tool use, context length, multimodal capability, deployment environment, and intended use. One may excel at coding, another at writing, and another may be small enough to run on a phone.

This is why model names are not interchangeable. It also explains why an upgrade can change behaviour unexpectedly. In traditional software, developers try to add features while preserving old behaviour. A change in training or model architecture may shift many responses at once. A prompt that worked with one version may need to be tested again with its successor.

Model behaviour thus becomes a dependency of every application built around it.

So far, this chapter has explained how a model learns broad patterns and why it must be surrounded by context and checks. The next question is how newer generations are trained to become more useful collaborators.

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

### Where the Upgrade Effort Goes

The earlier training journey described the basic stages: pre-training creates broad capability; post-training makes it easier to direct; tool environments teach and test longer work. A new model can improve any combination of those stages. The important shift is that labs are no longer judging a model only on whether it writes a convincing answer. They increasingly judge whether it can use evidence, keep working through a difficult task, and complete it safely.

For reasoning models, practice tasks reward more than a fluent first response. They reward checking assumptions, working through difficult steps, using evidence, noticing uncertainty, and reaching a correct result. This is why a user can sometimes choose a higher reasoning setting: the system is allowed to spend more computation exploring and checking before responding. It may improve a hard task, but it costs more and takes longer.

Agent training goes one step further. Instead of assessing a single chat answer, researchers put a model in an environment with a goal and tools. It may need to search files, edit code, run a build, read an error, use a browser, inspect a screenshot, or decide that it needs more evidence. OpenAI, Anthropic, and Google describe different methods and priorities, but the shared direction is a system that takes part in a longer, evidence-based workflow rather than merely producing a persuasive paragraph. [OpenAI, _Agent Post-Training, Connectors Research_](https://openai.com/careers/agent-post-training-connectors-research-san-francisco/); [Anthropic, _Claude's Constitution_](https://www.anthropic.com/research/claudes-constitution); [Google DeepMind, _Gemini 3.1 Pro Model Card_](https://deepmind.google/models/model-cards/gemini-3-1-pro)

### Not Every Upgrade Is the Same Kind of Change

An AI model is not updated in quite the same way as an ordinary application. An ordinary application can often receive one new feature while the rest stays unchanged. A learned model is a large web of mathematical relationships. Changing its training can alter many behaviours at once.

Sometimes a lab continues training or post-training an existing model. This is like renovating a house: it can be faster, less expensive, and preserve useful behaviour. It is especially suitable for improving instruction following, safety, coding practice, tool use, or a particular weakness revealed by testing.

At other times, the desired change is large enough to justify a **new foundation model**. The lab may use a better mixture of training data, a different architecture, a new way of representing images or audio, a more efficient training method, or a different balance between model size and training data. This is closer to constructing a new building than renovating an old one. It permits deeper change, but requires an enormous new training run and fresh evaluation.

Neither approach automatically wins. Continued training can preserve valuable strengths but may struggle to overcome deeper limitations. A new foundation can unlock a better direction but may introduce new weaknesses, so applications must test it rather than assume that a bigger version is compatible with an older one.

### What the Upgrade Trajectory Reveals

We cannot see every unpublished experiment or the complete recipe behind a model release. We can, however, see where companies repeatedly put their public research, product work, evaluation, specialist teams, and computing budgets. The observable pattern is more useful than guessing the secret detail of any one version.

| Visible direction of effort | What the user notices | Why the effort is costly or difficult |
| --- | --- | --- |
| Better base training | Broader knowledge, stronger language and code patterns | Requires vast data, computing, engineering, and careful data selection |
| Post-training and evaluation | Better instruction following, helpfulness, safety, and factual discipline | Good examples, realistic test environments, and reliable feedback are harder to create than raw internet text |
| Reasoning | More capable planning, mathematics, debugging, and analysis on difficult tasks | The model may use more computation and take longer before answering |
| Multimodality | It can work with screens, diagrams, images, speech, video, and code as well as prose | Different forms of information must be represented, aligned, and evaluated together |
| Long context and memory | It can keep track of a larger document, codebase, or task | More context consumes memory and computation; selecting the relevant material remains essential |
| Tools and agents | It can search, inspect, edit, calculate, run software, and check its work | The system needs permissions, safe environments, task-specific tests, and a way to detect failure |

This is the important long-term trajectory. Earlier systems mainly tried to produce fluent text. Newer systems are being trained and engineered to understand more forms of evidence, spend more effort when a problem warrants it, remember what matters, use tools, and complete longer pieces of work under supervision.

It is not a law of nature or a guaranteed timetable. Different companies will make different choices; a cheaper, smaller model may be the best product for many tasks. But the direction is visible across the industry: from models that answer questions toward systems that can understand, plan, create, check, and act within defined limits.

For the economics of this book, the lesson is crucial. A newer model is not valuable merely because it sounds more fluent. It is valuable when the extra capability lowers the total cost of a **dependable completed task**—after including the cost of reasoning, context, tools, verification, integration, and the consequences of mistakes.

### The Ideal AI Collaborator

The industry is not simply trying to create a model with a higher score on an intelligence test. Its visible ambition is to fill in the abilities that a useful collaborator lacks.

The first widely visible wave of generative AI made one ability obvious: it could **speak** fluently. The next wave is being trained to do more of the work around an answer: follow instructions, reason through difficult questions, work with code, and recognise uncertainty. The emerging effort is to let systems **act** within bounds: use tools, inspect results, remember what matters, and carry a defined task through to completion.

It is tempting to call the destination one all-powerful model. That is misleading. The defensible ideal is an **AI system**: a capable model working with selected context and memory, specialist tools, permissions, tests, records, and human authority.

| Ability of the ideal collaborator | Plain-language meaning | What keeps it useful rather than dangerous |
| --- | --- | --- |
| Perceive | Understand text, code, screens, diagrams, speech, images, and other relevant evidence | The system must identify what it has actually observed and what remains uncertain |
| Understand and reason | Compare options, detect contradictions, plan steps, and explain its judgement | More reasoning should be used when the task justifies its extra time and cost |
| Remember selectively | Bring the right history, rules, and project details into the current task | Retrieval, permissions, and updates are safer than trying to place an entire organisation permanently in one prompt |
| Use tools | Search, calculate, inspect files, run software, query approved systems, and collect evidence | Each tool needs narrow access, logging, and boundaries on what the system may do |
| Act within authority | Prepare a change, carry out a permitted step, or hand work to another system | A capability to act is not permission to act; consequential actions need approval gates |
| Verify and report | Test results, show evidence, admit uncertainty, and leave an audit trail | Verification must be independent where possible, with people retaining responsibility for important decisions |

This is not a promise of unlimited memory, perfect coding, or unrestricted autonomy. More information can make a system slower, costlier, less private, and even more confused if the wrong material is retrieved. More power to act increases the importance of permission and review. A model can be extremely capable and still lack the local knowledge, authority, or evidence needed to make a decision.

The aspiration is therefore not an all-knowing genie. It is a general-purpose digital collaborator that can understand, reason, create, and act **within defined limits**. That distinction connects the technical trajectory to the central argument of this book: AI makes it easier for people to direct machines, but dependable results still require context, judgement, verification, integration, and trust.

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
