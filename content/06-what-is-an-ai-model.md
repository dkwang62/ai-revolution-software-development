---
title: "What Is an AI Model?"
---

An **AI model is a system that has learned patterns from many examples**. Give it a new input—a question, a passage, an image, or a request for software—and it uses those learned patterns to predict a useful response.

For a text model, the underlying task is surprisingly simple: predict what piece of text should come next. During training, the model makes this prediction across an enormous amount of text, code, and other material. Each error slightly adjusts its numerical settings. Repeated at vast scale, this process teaches the model patterns of language, explanation, programming, and reasoning without anyone writing a separate rule for every possible request.

When you later use the finished model, it does not search a catalogue containing one authorised answer to every question. It combines the patterns learned during training with the information available in your current request. It then generates a response piece by piece.

This distinction explains both the power and the limitation of an AI model:

```text
many examples during training
↓
patterns captured in numerical settings
↓
your new request and current context
↓
the model predicts a useful response
↓
the response must still be checked
```

![What is an AI model](<figures/FIG-05-01 What Is An AI Model.png>)

Because the model has learned broad patterns, it can handle new wording and situations that nobody specified in advance. Because it is predicting rather than consulting a perfect source of truth, it can also produce an answer that sounds convincing but is incomplete or wrong.

Consider a feature that finds useful phrases in captured Chinese text. The app sends a passage and instructions to a model. The model uses learned relationships among characters, phrases, context, pronunciation, and meaning to propose likely phrases. It can cope with passages it has never seen before, but it may not return exactly the same list every time—and some suggestions may be unsuitable.

![An app's phrase-extraction feature: a model proposes phrase candidates from text and instructions](<figures/FIG-05-02 Phrase Extraction and Prompt.png>)

_The model supplies flexible prediction. The surrounding software supplies fixed checks, and the learner decides what is saved._

That is the central bargain of AI: learned patterns make flexible interpretation and generation possible; tools, tests, conventional software, and people determine what can be trusted or done.

## A Model Is a Map, Not the World

> **Why it matters:** A model may know broad patterns extremely well while knowing nothing about the private purpose, current facts, or hidden constraints of your particular task.

The word _model_ did not begin with AI. A model airplane represents selected features of an airplane. A weather model represents atmospheric behaviour. An economic model represents relationships among incentives, prices, supply, and demand.

None is the thing itself. Each simplifies reality in a form that helps somebody reason or act.

An AI model is likewise not a library, a search engine, or millions of handwritten IF–THEN rules. It is a vast collection of numerical settings shaped by examples. It captures useful patterns from its training material while leaving much out. A weather forecast can guide a picnic without predicting every cloud; an AI model can help write useful code without becoming a flawless source of truth.

The model is a map, not the territory.

## How a Model Is Trained

> **Why it matters:** The surprising capability comes from a simple prediction exercise repeated at enormous scale, not from engineers writing down the rules of English or Swift.

The full recipe for any named frontier model is private and changes between laboratories and generations. But the broad process is clear:

```text
prepare broad material
↓
turn it into numbers
↓
train the model to predict patterns
↓
teach it to be a useful assistant
```

### 1. Prepare the Material

Teams collect and prepare material such as books, web pages, reference works, scientific papers, source code, documentation, mathematics, tables, conversations, images, diagrams, audio, and video. They remove duplicates, filter obvious noise or unsafe material, check quality, balance different kinds of content, and decide what may legally and ethically be used.

The amount matters, but the _kind_ of material matters too. A model can learn only the relationships that appear often enough, clearly enough, and with enough useful feedback in its training material.

### 2. Turn Information into Numbers

A neural network cannot work directly with a word, a photograph, or a sound. Each first becomes numbers.

- Text and code are divided into **tokens**: words, pieces of words, punctuation, or pieces of code.
- An image is commonly divided into small patches of pixels.
- Audio is divided into short pieces of a sound signal.

Each piece becomes a **vector**: an ordered list of numbers. A vector has many positions, or dimensions. Because a model may use hundreds or thousands of dimensions, people call this a **high-dimensional space**.

This phrase can sound mystical. It is not. Think of a normal map: one direction is east–west and another is north–south. A high-dimensional mathematical map has far more directions. Its directions are not labels a person can read, such as “animal” or “formal.” They are numerical features the model has found useful for relating pieces of information.

![From text to a mathematical representation: tokens, vectors, and a two-dimensional shadow of a high-dimensional meaning space](<figures/FIG-05-03 Tokens Vectors and Meaning Space.png>)

_The final panel is only a two-dimensional shadow. A real model uses far more dimensions than a drawing can show._

The fruit example makes this less abstract. "Apple" and "orange" tend to land near one another because they appear in similar situations: grocery lists, recipes, school lunches, fruit bowls, nutrition advice, and everyday comparisons. The model is not given a human-written rule saying, "put apples beside oranges." It learns from use.

There is one timing detail worth being clear about. At the start of training, each token points to a row in an embedding table, and that row contains a vector. Those vectors are not fixed labels. During self-supervised training, the model repeatedly tries to predict missing or next pieces of text, compares its prediction with the actual text, and adjusts its internal numbers. The embedding vectors change along with the rest of the network's weights. Over many examples, words and fragments that help make similar predictions acquire related representations. Later layers then refine those representations according to the surrounding context, which is why the same word can behave differently in different sentences.

A request for a Chinese-character quiz can then activate patterns involving Chinese characters, questions, plausible wrong answers, interface design, stored progress, and tests—even if the model has never encountered that exact sentence before.

That is the text path: symbols become tokens, and tokens become vectors the model can process.

Images and audio take a different route. A photograph is not first translated into English before a computer can process it. It begins as pixels: tiny coloured dots arranged in a grid. A sound recording begins as a signal: changing pressure represented as numbers over time. Vision and audio systems convert those signals into numerical representations too, but the pieces are patches, frames, waveforms, or other learned features rather than ordinary word tokens.

```text
text or code → tokens → vectors → model
image        → pixels or patches → visual vectors → model
audio        → sound signal pieces → audio vectors → model
```

Older AI systems often handled these forms separately. One model might classify images. Another might transcribe speech. Another might translate text. The output of one system could become the input to another, but the systems were specialised.

Modern multimodal models try to bring these forms into a more shared space of representation. The image does not literally become text. The voice does not literally become text. Instead, the system learns ways to relate visual, audio, and symbolic evidence so that a screenshot, a spoken instruction, a diagram, and a code file can contribute to the same task.

Machine code adds one more useful case. It may sound mysterious, but machine code is already digital information. It is made of bytes, usually written in hexadecimal notation by tools that inspect executables. A tiny fragment might look like this:

```text
B8 2A 00 00 00 C3
```

To a human reader, this looks meaningless. To the right processor and the right analysis tool, those bytes can be interpreted as low-level instructions. Conceptually, an AI system can be given a representation of that material:

```text
machine code
↓
bytes and instructions
↓
tokens or structured representations
↓
embeddings
↓
model
```

This does not mean the model understands the original programmer's intention perfectly. It means machine code, like English, Python, pixels, and sound waves, can become numerical evidence. That idea becomes important later, when the book returns to legacy software whose source code, documentation, or original developers may no longer be available.

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

The parameters do not store facts like pages in a book. There is no one dial for _dog_, another for Swift syntax, and another for banking regulation. What the model has learned is spread across a vast pattern of settings. That pattern can be capable, but it is not a human-readable rulebook.

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

Reviewers can also compare several possible answers and select the clearer, safer, or more useful one. Further training teaches the model to prefer the kinds of response that people repeatedly choose. This is often called preference learning or reinforcement learning from human feedback. It does not make the model factually perfect. It makes broad learned capability easier to direct. [OpenAI, _Training Language Models to Follow Instructions with Human Feedback_](https://arxiv.org/abs/2203.02155)

Safety training is part of this process. It can teach a model to recognise dangerous requests, protect privacy, decline some actions, and express uncertainty. It is not a magic shield. Important systems still require permissions, filters, logs, tests, and accountable people.

## Using the Finished Model

> **Why it matters:** Training gives a model general skill; current context, tools, and people supply the local truth it needs to act usefully.

**Inference** means using the trained model. When someone asks it to write a Swift function, explain a legal clause, translate a sentence, or generate a quiz, it is not retraining itself from the beginning. It combines the request with information available now and generates an answer one piece at a time.

In practical terms, an answer can draw on four sources:

1. broad patterns learned during training;
2. the words, files, or images supplied for this task;
3. the conversation or project material in its current context; and
4. if allowed, results from tools such as search, a compiler, or a database query.

Your one conversation normally does not permanently change the model's weights. Your prompt, uploaded image, project files, and tool results influence the answer now; they are not automatically written into the model for future users. Providers may later use permitted feedback and evaluation failures to create a new training cycle. That is product improvement, not a model secretly learning every user fact in real time.

This distinction is essential for software. Training may give a model broad knowledge of programming patterns. It does not give it the private rules of a particular company, the current contents of a database, an unusual customer promise, or the reason an awkward screen exists. Those details must be supplied through current project context, approved retrieval, tools, and people who understand the work.

## Why the 2017 Transformer Changed the Trajectory

> **Why it matters:** The Transformer made it practical to learn from far more relationships at once, turning generative AI from an interesting idea into an economic force.

For years, AI could recognise patterns, classify pictures, translate short passages, and generate limited text. In 2017, Google researchers published [_Attention Is All You Need_](https://research.google/pubs/attention-is-all-you-need/), introducing the **Transformer** architecture.

A Transformer is not a particular chatbot. It is a design for a neural network. Its central idea is **attention**: a way for the model to weigh which earlier pieces of a sequence matter to the piece it is processing now. In “The student put the book into her bag because she needed it later,” attention helps connect _it_ with _the book_.

The deeper idea is that a Transformer does not merely compare two tokens in isolation. It allows the relationship between two tokens to be influenced by relationships established among other tokens in earlier layers. Consider:

> The bank raised its interest rate because it feared inflation.

When the model processes _it_, attention can connect _it_ with _bank_. But that connection is shaped by the surrounding words: _raised_, _interest rate_, _feared_, and _inflation_. A simple word-matching system might only notice that _bank_ and _it_ both appear in the sentence. A Transformer can build a richer chain of relationships: _interest_ belongs with _rate_; _bank_ can raise interest rates; the entity that raises rates may also fear inflation. Later layers work with these already-contextualised meanings, so the model can build relationships upon relationships.

Earlier recurrent designs mostly handled a sequence step by step. Transformers made it practical to process many relationships in parallel during training and to scale training far further. That did not invent language, translation, or generative AI. It made it practical to learn from vastly more text, code, images, and explanations.

**Generative** means producing a new continuation or transformation, rather than selecting a label from a fixed list. Once a model could predict the next useful piece at enough scale, it could generate a paragraph, a program, a translation, or an image description. The Transformer did not make a model all-knowing. It made modern generative models economically significant.

## When a Model Can See and Hear

> **Why it matters:** A screenshot or recording adds evidence to a task, but it is still evidence to inspect—not direct knowledge of what the user experiences.

Modern models can increasingly work with text, code, images, diagrams, screens, speech, and video. For software development, this matters because important requirements and defects are not always captured in prose.

A screenshot can reveal overflowing text that source code does not make obvious. A screen recording can show a navigation sequence. A rough sketch can communicate intended layout. A spoken explanation can capture domain knowledge from someone who would never write a formal specification.

When a user uploads an image, the model does not inspect it perfectly like a person holding the original device. It converts the picture into numerical evidence and relates that evidence to the user's words. An uploaded error message may reveal the application name, visible warning, and likely failure. If the actual error text can also be copied, that is better: text can be searched and checked precisely.

### Side Story: How a Picture Becomes Tokens

A digital image is a grid of coloured dots called **pixels**. One common design divides the picture into small squares, or **patches**, and turns each patch into a vector. A **Vision Transformer** can then relate those visual pieces somewhat as a text Transformer relates tokens. Position also matters: the same blue patch might be sky near the top of a photograph or a button near the bottom of a screen. [Dosovitskiy et al., _An Image is Worth 16×16 Words_](https://arxiv.org/abs/2010.11929)

```text
image → patches → vectors + positions → visual representation
text  → tokens  → vectors + positions → language representation
                                           ↓
                         model relates the two kinds of evidence
```

The comparison is useful but imperfect. Text tokens come from a vocabulary of word pieces; image patches begin as colours, edges, textures, and shapes. Models also use different image sizes and internal designs. The principle is what matters: a picture becomes numerical evidence that can be related to language. [OpenAI, _Models_](https://developers.openai.com/api/docs/models)

This expands the model's inputs, not its authority. Screens can be cropped, blurry, outdated, or shown at the wrong device size. While building the app and this book, I sometimes had to show Codex a rendered screen before it recognised that text escaped a box or controls were squeezed into an unusable space. The practical loop remains: generate, render, inspect at relevant sizes, test, and revise.

![An iPad app screen whose controls overflow the left and right borders](<figures/CASE-05-01 App Layout Overflow iPad.png>)

_The code may compile and the screen may render, yet the result can still fail for the person using it._

### Video Is Representation Over Time

Video is a useful contrast with text because it makes the representation problem impossible to ignore.

A digital movie is not one object. It is a sequence of images plus sound:

```text
movie = frames over time + audio over time
```

A ten-second clip at 30 frames per second contains 300 images. Each image contains many pixels. The audio is another stream of numerical measurements over time. Compared with text, raw video is enormous. A sentence might become a few dozen tokens. A few seconds of high-resolution video can contain millions of pixel values.

This is why a video model does not normally treat every final pixel in every frame as if it were a word token. It needs compression and abstraction:

```text
pixels over time
↓
visual encoder
↓
compressed video representation
↓
model
```

For video, there is also the dimension of time. The system must represent not merely:

```text
There is a person and a ball.
```

but:

```text
The person throws the ball.
The ball moves through the air.
Another person catches it.
```

In technical language, video requires **spatiotemporal** representation. _Spatial_ means what exists and where it is. _Temporal_ means how things change through time.

This resembles the machine-code example earlier in the chapter. Raw machine instructions can be lifted into a more useful intermediate representation. Raw pixels over time can likewise be compressed into a latent video representation before the final frames are produced:

```text
raw machine code → intermediate representation → useful program evidence
raw video frames → latent video representation → useful visual evidence
```

The forms differ, but the principle is the same. The model is not fundamentally a word machine. It is learning relationships within and between representations.

### Making a Movie Is Not One Generation

Now imagine a prompt:

```text
A woman walks along a deserted beach at sunset.
A red balloon blows past her.
She notices it, turns around, and starts chasing it.
```

A video-generation system must turn that language into a sequence of visual states:

```text
English prompt
↓
semantic representation
↓
compressed video representation
↓
frames
↓
video
```

This is harder than generating one image. A still image of a red Ferrari outside a hotel needs to be internally coherent only once. A video of the Ferrari driving around the hotel must preserve the same car, the same hotel, consistent lighting, changing reflections, plausible wheel movement, physical motion, and continuity from one moment to the next.

Video generation is therefore not simply:

```text
generate image 1
+ generate image 2
+ generate image 3
```

If it worked that way, the Ferrari might change model, colour, or shape between frames. The system has to preserve relationships through time.

Longer films are harder still. Generating five seconds of a person walking is one problem. Generating a two-hour film in which the same person keeps the same face, clothes, motivations, relationships, memories, and physical environment is a much larger problem. At that point, the system needs something closer to a model of the movie's world:

```text
characters
↓
world
↓
story state
↓
scene
↓
shots
↓
video, dialogue, music, and sound
```

This is why a convincing ten-minute AI-generated historical video is usually not best imagined as one continuous ten-minute generation. A more practical workflow is closer to filmmaking:

```text
story
↓
script
↓
shot list
↓
many short generated clips
↓
editing
↓
voice, music, and sound
↓
finished film
```

Consider a hypothetical video placing a fictional passenger aboard the Hindenburg's final voyage. The creator might use historical photographs, plans, descriptions, and reference images. Instead of asking the model to generate ten uninterrupted minutes, the creator might generate many shorter shots:

```text
Hindenburg approaching the airfield
passenger looking through a window
passengers eating in the dining room
passenger walking down a corridor
exterior view over the Atlantic
```

Each shot is easier than maintaining a perfectly coherent world for ten minutes. Frequent cuts let the system restart the visual problem while the human editor preserves the story.

The economic change is still enormous. Traditionally, recreating such a scene could require actors, costumes, sets, historical consultants, cameras, lighting, visual-effects artists, sound production, and editing. AI can synthesize parts of that chain, allowing a skilled individual to attempt work that previously required a production team.

A current industry test makes the point more concrete. Trade coverage in 2026 described _Critterz_ as an AI-assisted animated family feature whose first-look footage was shown to buyers at Cannes, with the team aiming to compress a multi-year animation process into something closer to a year. The important claim is not that AI made an entire film by itself. The useful lesson is that a smaller human team built a production system around AI tools, sketches, characters, scene work, versioning, continuity, and judgement. [Forbes](https://www.forbes.com/sites/maureenkerr/2026/05/26/why-critterz-is-the-real-test-of-ai-filmmaking/) and [Native Foreign](https://nativeforeign.co/work/critterz) describe the project as a test of AI-assisted filmmaking rather than a completed replacement for human direction.

The same movement is visible at the studio level. In June 2026, Runway announced an expanded Lionsgate partnership in which Lionsgate took an equity interest and the companies planned a joint development programme for new AI-assisted content and IP. [Runway's announcement](https://runway.com/news/company-news/runway-and-lionsgate-expand-partnership) matters here because it treats AI filmmaking not as a single prompt-to-video trick, but as a production environment involving tools, rights, creators, workflow, and business strategy.

The lesson for this book is not about movies alone. It is about representation. Text, code, images, audio, video, and machine instructions are different forms. A foundation model is valuable because it can learn relationships within and between those forms.

## Why Models Differ

> **Why it matters:** A model should be judged by how reliably and economically it completes the intended task, not by one universal ranking.

Training material, architecture, size, post-training, efficiency, context length, and supported media all shape a model's behaviour. One model may excel at coding, another at writing, and another may be small enough to run on a phone. Model names are therefore not interchangeable.

A newer model can also improve overall while becoming worse for one established prompt or workflow. Learned behaviour is spread across a large web of numerical relationships, so changing the training can shift many behaviours at once. [[09-economics-of-models|The Economics of Models]] examines the cost, capability, and upgrade trade-offs in detail.

## What Training Cannot Guarantee

> **Why it matters:** Data can reveal what tends to happen; proving why it happens still requires theory, experiments, tools, and real-world feedback.

Learning patterns does not guarantee that a model has discovered causes, captured rare exceptions, or received the private facts of the current task. Training data can also contain errors and bias. A confident continuation is still a prediction, not independent evidence that the answer is true.

Software offers unusually strong feedback because code can often be compiled, run, and tested. Even then, tests cannot reveal a business rule that nobody supplied. [[side-chapter-the-genie-is-not-all-powerful|The Genie Is Not All-Powerful]] develops this boundary through a scientific example where prediction and causal explanation are especially easy to confuse.

## A Bridge to Software

Software is a promising use case because it contains repeated, checkable patterns: code, documentation, errors, tests, interfaces, and corrections. Training can give a model broad programming skill. Current files, requirements, tools, and people must still supply the local truth.

Turning English into code is therefore more than translation between languages. The result must preserve the intended meaning _and_ make a computer behave correctly inside an existing system. The model proposes; compilers, tests, rendered screens, and people determine whether the proposal should be kept.

The side chapter that follows sets a firm boundary on what learned patterns can establish. [[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] then follows one transformation in detail: an ordinary request becoming executable code.
