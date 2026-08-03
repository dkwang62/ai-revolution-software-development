---
title: "What Is an AI Model?"
---

![What is an AI model](<figures/FIG-05-01 What Is An AI Model.png>)

When an app displays the Chinese character 木, a learner sees a shape associated with *tree* or *wood*. Inside the app, the same character can be a Unicode number—a standard number computers use to represent written characters—bytes in a file, pixels on a screen, a database record, a pronunciation, and a component inside other characters.

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

Traditional software mainly follows procedures that people specify. An AI model adds a different mechanism: it learns numerical relationships from examples. That is why it can handle variation that would be tedious to describe with thousands of rules—and why it can sometimes make a plausible but wrong suggestion.

I encountered the distinction while building a feature that finds useful phrases in captured Chinese text. The app can send a passage and instructions to a model, which proposes phrase candidates. But it may not return exactly the same list every time. It is not looking up one authorised answer in a database. It is using learned relationships among characters, phrases, context, pinyin—the spelling of Mandarin sounds with the Latin alphabet—and meaning to generate a likely result.

![An app's phrase-extraction feature: a model proposes phrase candidates from text and instructions](<figures/FIG-05-02 Phrase Extraction and Prompt.png>)

*The model proposes phrase candidates. The surrounding app checks the format, rejects unsuitable results, avoids duplicates, and leaves the learner in control of what is saved.*

That is the central bargain of this chapter:

```text
many examples during training
↓
the model learns broad patterns in numerical settings
↓
your request + current context during use
↓
the model proposes words, code, an explanation, or a next step
↓
tools, tests, and people decide what can be trusted or done
```

## A Model Is a Map, Not the World

The word *model* did not begin with AI. A model airplane represents selected features of an airplane. A weather model represents atmospheric behaviour. An economic model represents relationships among incentives, prices, supply, and demand.

None is the thing itself. Each simplifies reality in a form that helps somebody reason or act.

An AI model is likewise not a library, a search engine, or millions of handwritten IF–THEN rules. It is a vast collection of numerical settings shaped by examples. It captures useful patterns from its training material while leaving much out. A weather forecast can guide a picnic without predicting every cloud; an AI model can help write useful code without becoming a flawless source of truth.

The model is a map, not the territory.

## How a Model Is Trained

The full recipe for any named frontier model is private and changes between laboratories and generations. But the broad process is clear:

```text
prepare broad material
↓
turn it into numbers
↓
train the model to predict patterns
↓
teach it to be a useful assistant
↓
give it supervised ways to use tools
```

### 1. Prepare the Material

Teams collect and prepare material such as books, web pages, reference works, scientific papers, source code, documentation, mathematics, tables, conversations, images, diagrams, audio, and video. They remove duplicates, filter obvious noise or unsafe material, check quality, balance different kinds of content, and decide what may legally and ethically be used.

The amount matters, but the *kind* of material matters too. A model can learn only the relationships that appear often enough, clearly enough, and with enough useful feedback in its training material.

### 2. Turn Information into Numbers

A neural network cannot work directly with a word, a photograph, or a sound. Each first becomes numbers.

- Text and code are divided into **tokens**: words, pieces of words, punctuation, or pieces of code.
- An image is commonly divided into small patches of pixels.
- Audio is divided into short pieces of a sound signal.

Each piece becomes a **vector**: an ordered list of numbers. A vector has many positions, or dimensions. Because a model may use hundreds or thousands of dimensions, people call this a **high-dimensional space**.

This phrase can sound mystical. It is not. Think of a normal map: one direction is east–west and another is north–south. A high-dimensional mathematical map has far more directions. Its directions are not labels a person can read, such as “animal” or “formal.” They are numerical features the model has found useful for relating pieces of information.

![From text to a mathematical representation: tokens, vectors, and a two-dimensional shadow of a high-dimensional meaning space](<figures/FIG-05-03 Tokens Vectors and Meaning Space.png>)

*The final panel is only a two-dimensional shadow. A real model uses far more dimensions than a drawing can show.*

Words used in similar contexts can end up with related numerical representations. A request for a Chinese-character quiz can activate patterns involving Chinese characters, questions, plausible wrong answers, interface design, stored progress, and tests—even if the model has never encountered that exact sentence before.

### 3. Adjust the Model Through Prediction

The neural network begins as a huge mathematical structure with numerical settings called **parameters**, or weights. You can imagine each parameter as a tiny adjustable dial. Before training, the settings are random or otherwise unhelpful. The model knows no English, Python, Chinese, mathematics, or visual concepts.

Training repeatedly follows a simple loop:

```text
present an example
↓
make a prediction
↓
compare it with the known answer
↓
adjust many numerical settings slightly
↓
repeat an enormous number of times
```

For a text example, the exercise might be:

```text
The Eiffel Tower is in _____
                         ↓
                    predict: Paris
                         ↓
              compare with the next token in the text
                         ↓
              adjust many parameters a tiny amount
```

This is called **self-supervised learning**. It does not mean the model trains itself without people. People choose the data, build the computers, design the exercise, and evaluate the results. “Self-supervised” means that much of the answer is already present in the material: later words in a sentence can teach the model whether its earlier prediction was good.

The parameters do not store facts like pages in a book. There is no one dial for *dog*, another for Swift syntax, and another for banking regulation. What the model has learned is spread across a vast pattern of settings. That pattern can be capable, but it is not a human-readable rulebook.

### 4. It Learns Grammar Without Receiving a Grammar Book

This is the surprising insight. Nobody gives the model a handbook of English grammar, Python grammar, or Swift grammar and asks it to memorise every rule. To predict well across an immense number of examples, it has to discover recurring structure for itself.

For English, it gradually captures that certain words commonly follow others, that sentences have relationships across distance, and that some ways of expressing an idea are more likely than others. For Python, it encounters indentation, functions, library calls, data structures, tests, errors, and explanations. For Swift, it encounters types, state, user-interface components, and the conventions developers use to organise an Apple app.

```text
English, Python, Swift, documentation, and explanations
↓
all become sequences of tokens
↓
the model repeatedly predicts what belongs next
↓
it learns useful statistical grammar and patterns
```

This is why a model can often translate an ordinary goal into a credible first design or code proposal. It does **not** mean it has learned a perfect formal rulebook. A compiler can still reject code that looks plausible. A test can still show that a program is wrong for this app. The model learns patterns of working software; compilers, tests, and people determine whether one proposed change actually works.

### 5. Turn Broad Ability into an Assistant

A model that can continue text or code is not automatically a helpful assistant. It may imitate the tone of its input, give an unstructured answer, or continue an unsafe request because that is statistically plausible.

**Post-training** is the work of shaping that broad capability into useful behaviour. People, and sometimes carefully checked systems, provide examples of a request and a good response: a bug report and helpful diagnosis, a coding task and a checked solution, an unsafe request and a safe refusal. This is often called **supervised fine-tuning**.

Reviewers can also compare several possible answers and select the clearer, safer, or more useful one. Further training teaches the model to prefer the kinds of response that people repeatedly choose. This is often called preference learning or reinforcement learning from human feedback. It does not make the model factually perfect. It makes broad learned capability easier to direct. [OpenAI, *Training Language Models to Follow Instructions with Human Feedback*](https://arxiv.org/abs/2203.02155)

Safety training is part of this process. It can teach a model to recognise dangerous requests, protect privacy, decline some actions, and express uncertainty. It is not a magic shield. Important systems still require permissions, filters, logs, tests, and accountable people.

### 6. Teach the System to Work with Evidence

For a coding agent, a fluent answer is not enough. The system must learn when it should inspect a project, search for a file, run a compiler, use a test, look at a screenshot, or ask for more information.

That is partly training and partly product design. Researchers evaluate models in realistic environments with goals and tools. A coding task may require an agent to read an issue, inspect an existing codebase, edit only relevant files, run a build, interpret an error, revise its plan, and record what it checked. The product must also provide narrow permissions and actual tools.

```text
user's goal
↓
model proposes a plan or change
↓
tools inspect, calculate, build, search, or test
↓
the results become new evidence
↓
model revises or reports uncertainty
↓
software and people decide what may be accepted or executed
```

The result is not one all-powerful model. It is a model inside a supervised working system.

## Using the Finished Model

**Inference** means using the trained model. When someone asks it to write a Swift function, explain a legal clause, translate a sentence, or generate a quiz, it is not retraining itself from the beginning. It combines the request with information available now and generates an answer one piece at a time.

In practical terms, an answer can draw on four sources:

1. broad patterns learned during training;
2. the words, files, or images supplied for this task;
3. the conversation or project material in its current context; and
4. if allowed, results from tools such as search, a compiler, or a database query.

Your one conversation normally does not permanently change the model's weights. Your prompt, uploaded image, project files, and tool results influence the answer now; they are not automatically written into the model for future users. Providers may later use permitted feedback and evaluation failures to create a new training cycle. That is product improvement, not a model secretly learning every user fact in real time.

This distinction is essential for software. Training may give a model broad knowledge of programming patterns. It does not give it the private rules of a particular company, the current contents of a database, an unusual customer promise, or the reason an awkward screen exists. Those details must be supplied through current project context, approved retrieval, tools, and people who understand the work.

## Why the 2017 Transformer Changed the Trajectory

For years, AI could recognise patterns, classify pictures, translate short passages, and generate limited text. In 2017, Google researchers published [_Attention Is All You Need_](https://research.google/pubs/attention-is-all-you-need/), introducing the **Transformer** architecture.

A Transformer is not a particular chatbot. It is a design for a neural network. Its central idea is **attention**: a way for the model to weigh which earlier pieces of a sequence matter to the piece it is processing now. In “The student put the book into her bag because she needed it later,” attention helps connect *it* with *the book*.

Earlier recurrent designs mostly handled a sequence step by step. Transformers made it practical to process many relationships in parallel during training and to scale training far further. That did not invent language, translation, or generative AI. It made it practical to learn from vastly more text, code, images, and explanations.

**Generative** means producing a new continuation or transformation, rather than selecting a label from a fixed list. Once a model could predict the next useful piece at enough scale, it could generate a paragraph, a program, a translation, or an image description. The Transformer did not make a model all-knowing. It made modern generative models economically significant.

## A Bridge to Software

Software is an especially promising use case because it contains repeated, checkable patterns: code, documentation, errors, tests, interfaces, and corrections. That material can give a model broad skill with familiar programming languages and common development tasks.

But turning English into code is not the same as translating English into another human language. Code must preserve the intended meaning *and* make a computer behave correctly inside an existing system. A model can propose; compilers, tests, rendered screens, and people provide the evidence that decides whether the proposal should be kept.

That is where this chapter stops. [[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] follows the next stage in detail: how a human request becomes requirements, code, tool use, revision, and a verified change.

## When a Model Can See and Hear

Modern models can increasingly work with text, code, images, diagrams, screens, speech, and video. For software development, this matters because important requirements and defects are not always captured in prose.

A screenshot can reveal overflowing text that source code does not make obvious. A screen recording can show a navigation sequence. A rough sketch can communicate intended layout. A spoken explanation can capture domain knowledge from someone who would never write a formal specification.

When a user uploads an image, the model does not inspect it perfectly like a person holding the original device. It converts the picture into numerical evidence and relates that evidence to the user's words. An uploaded error message may reveal the application name, visible warning, and likely failure. If the actual error text can also be copied, that is better: text can be searched and checked precisely.

### Side Story: How a Picture Becomes Tokens

A digital image is a two-dimensional grid of coloured dots, called **pixels**. Each pixel commonly records three numbers: red, green, and blue. One common design divides the picture into small squares, or **patches**, then turns each patch into a vector. This is the central idea of a **Vision Transformer**: treat patches of an image somewhat like tokens of text. [Dosovitskiy et al., *An Image is Worth 16×16 Words*](https://arxiv.org/abs/2010.11929)

For example, a 224 × 224 image divided into 16 × 16-pixel patches produces 14 × 14 = 196 patches. A patch contains 256 pixels; with red, green, and blue values, that begins as 768 numbers. A mathematical transformation turns those numbers into a shorter vector. The model also receives information about the patch's position, because the same blue patch may mean sky at the top of an image but a button near the bottom of a screen.

```text
image → patches → vectors + positions → visual representation
text  → tokens  → vectors + positions → language representation
                                           ↓
                         model relates the two kinds of evidence
```

The comparison with text is useful but imperfect. A text token comes from a fixed vocabulary of words or word pieces. An image patch begins as colours, edges, textures, and shapes. Through successive layers, neighbouring patches and their positions can become a richer interpretation: perhaps a dog, a warning banner, or a button that overlaps its label.

The figures above are a teaching example, not a universal recipe. Models use different image sizes, patch sizes, and internal designs. The principle is the important part: a picture becomes numerical evidence that can be related to language. [OpenAI, *Models*](https://developers.openai.com/api/docs/models)

This expands the model's inputs, not its authority. Screens can be cropped, blurry, outdated, or shown at the wrong device size. While building the app and this book, I sometimes had to show Codex a rendered screen before it recognised that text escaped a box or controls were squeezed into an unusable space. The practical loop remains: generate, render, inspect at relevant sizes, test, and revise.

![An iPad app screen whose controls overflow the left and right borders](<figures/CASE-05-01 App Layout Overflow iPad.png>)

*The code may compile and the screen may render, yet the result can still fail for the person using it.*

## Why Models Differ—and What Upgrades Are Trying to Improve

Different training choices create different models. They may vary in training material, architecture, size, efficiency, safety tuning, context length, multimodal capability, tool use, and intended use. One may be especially good at coding, another at writing, and another small enough to run on a phone.

That is why model names are not interchangeable. It also explains why an upgrade can change behaviour unexpectedly. A traditional application can often add one feature while preserving the rest. A learned model is a large web of relationships: changing its data, training, or architecture can shift many behaviours at once. Applications must test a successor rather than assume it is perfectly compatible.

We cannot see every private experiment behind a model release. We can see the broad, public trajectory: models are being developed from fluent pattern predictors into more reliable, multimodal, tool-using collaborators.

| Direction of effort | What the user notices | Why it is difficult or costly |
| --- | --- | --- |
| Better base training | Broader language, code, and general patterns | Vast data, computing, engineering, and careful data selection |
| Post-training and evaluation | Better instruction following, helpfulness, safety, and factual discipline | Reliable examples and realistic tests are harder to create than raw text |
| Reasoning | Better planning, debugging, mathematics, and analysis on difficult tasks | More computation can mean more time and cost per answer |
| Multimodality | Work with screens, diagrams, images, speech, video, and code | Different kinds of information must be aligned and evaluated together |
| Long context and memory | Follow a larger document, codebase, or task | More context costs memory and computation; relevance still matters |
| Tools and agents | Search, inspect, edit, calculate, run software, and check work | Needs permissions, safe environments, task-specific tests, and failure detection |

The improvement is not simply “more facts.” A stronger agent may be better able to keep an objective, project context, compiler feedback, visual evidence, and verification in one working process.

Consider a request: “The iPhone keyboard covers the lower fields. Fix it without spoiling the iPad layout.” A weak coding model may add some padding, make the code compile, and declare success. A stronger agent can find the relevant screen, distinguish iPhone from iPad layout rules, make a narrow change, build the app, open the keyboard in a Simulator, inspect the rendered result, revise if needed, and report what it checked.

The useful unit of progress is not “code was generated.” It is “a bounded engineering task was completed and checked.”

The defensible ideal is therefore not an all-powerful model. It is an **AI system**: a capable model working with selected context and memory, specialist tools, permissions, tests, records, and human authority.

## What Training Cannot Discover by Itself

The success of grammar learning invites a reasonable question: if a model can discover the statistical grammar of English or Python from examples, why can it not discover every hidden rule in the world?

It can learn some hidden structure. But a learned pattern is not always an explanation of cause.

The comparison with biology makes the limit clear. Human language and DNA are both long sequences with recurring patterns. A model can learn much of the “grammar” of each. Language, however, is designed for communication. Across billions of sentences, grammatical relationships leave visible statistical fingerprints: “the cat,” “the dog,” and “the boy” appear in enough contexts to reveal how they behave.

DNA has patterns too, but its effects are spread through a much longer physical chain:

```text
DNA → RNA → proteins → cells → tissues → organism
```

A sequence can have different effects in a liver cell, a brain cell, a developing child, or a person under environmental stress. There are far fewer complete observations that connect a genome to all those later outcomes than there are sentences showing how language is used. A model can find a DNA pattern associated with disease without discovering the complete biological mechanism that causes it.

Software sits closer to language in one valuable respect: it has an interpreter, a compiler, tests, and often a running system. Many claims can be checked. That makes code unusually fertile training and working material. Even there, no amount of public examples automatically tells a model the private purpose of a particular system.

Three principles follow:

1. **Patterns can be learned from examples.** This is why large-model training is powerful.
2. **A learned grammar is not a complete explanation.** Predicting what is likely is easier than knowing why it happens.
3. **Feedback determines reliability.** Compilers, tests, experiments, and real-world observation turn a plausible pattern into something that can be checked.

The side story [[side-chapter-the-genie-is-not-all-powerful|The Genie Is Not All-Powerful]] explores the genome example further. Here, its purpose is simply to set a boundary on what training alone can promise.

## Capability Has a Cost—and Does Not Remove Responsibility

Training requires specialised hardware, electricity, engineers, data preparation, experiments, and evaluation. It is a large upfront investment that creates a reusable capability. **Inference**—each request to a deployed model—is an operating cost. It depends on model size, input length, output length, speed, reasoning effort, multimodal input, and hardware efficiency.

The economic question is not which model sounds most impressive in isolation. It is which combination of model, context, tools, verification, and human attention completes a valuable task reliably at an acceptable cost.

Training material can contain errors and bias—systematic patterns that favour or disadvantage some answers, groups, or viewpoints. Average performance does not guarantee reliability in a rare or consequential case. Better models can still fabricate references, misunderstand a local purpose, suggest insecure code, or miss an important visual detail.

This is why the phrase-extraction feature at the start of the chapter keeps the original image and OCR text, validates the model's proposed phrases, avoids duplicates, and lets the learner choose what to save. A learned model can handle changing fonts, lighting, camera angles, and image quality that would be difficult to express as exhaustive rules. Conventional software, tests, and human responsibility supply the constraints and evidence the model lacks.

That is the central bargain: AI makes flexible interpretation and generation cheaper; dependable systems still require context, judgement, verification, integration, and trust.

[[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] follows that bargain through one concrete transformation: an ordinary English request becoming executable source code.
