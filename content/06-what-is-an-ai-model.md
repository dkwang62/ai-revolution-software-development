---
title: "What Is an AI Model?"
---

# What Is an AI Model?

![What is an AI model](<figures/FIG-05-01 What Is An AI Model.png>)

Most people hear names such as GPT, Claude, Gemini, or Llama and assume they are ordinary software programs.

They are not.

They run inside software systems, of course. They are served by applications, APIs, data centres, chips, operating systems, and user interfaces. But the thing that makes them powerful is not a conventional list of instructions written by programmers. It is a model.

If readers do not understand what a model is, they will never fully understand why AI can write software, why different AI systems behave differently, why new versions sometimes break old prompts, why training costs so much, why inference costs money, why GPUs became strategically important, and why AI companies keep investing enormous sums in infrastructure.

So we should begin by clearing away misconceptions.

An AI model is not a huge database.

It is not a gigantic encyclopedia.

It is not a search engine.

It is not millions of hand-written IF-THEN rules.

It is not simply a normal program with more features.

An AI model is a learned mathematical representation of patterns found in data.

That sentence is the centre of this chapter.

I encountered the distinction while working on Radix Phrase Discovery. Radix could send the same Chinese passage and instructions to a language model and receive useful phrase candidates, but not necessarily an identical list every time. The model was not looking up one authorised answer stored in the Radix database. It was using learned relationships among characters, phrases, contexts, pinyin, and meanings to generate a plausible result.

Radix then did what the model could not be trusted to do alone. Conventional software checked the format, rejected invalid lengths, removed phrases already present, and waited for the user to approve what should be saved. The episode made the boundary concrete: the model supplied flexible judgement; the application supplied records, rules, and authority.

## Models Before AI

The word "model" did not begin with artificial intelligence.

A model airplane is not an airplane. It is a simplified representation of an airplane. It may capture shape, proportion, and structure while leaving out engines, passengers, fuel systems, regulations, and real flight behaviour.

A weather model is not the weather. It is a mathematical representation of atmospheric behaviour. It uses measurements, equations, and computation to estimate what may happen next.

An economic model is not the economy. It is a simplified representation of economic behaviour. It may help explain incentives, prices, demand, supply, growth, inflation, or trade-offs, while leaving out much of the messy detail of the real world.

Likewise, an AI model is not the world, a library, or a brain. It is a representation. More specifically, it is a mathematical representation of patterns learned from data.

This is why models can be useful and imperfect at the same time. A weather model can be valuable without predicting every storm perfectly. An economic model can reveal a relationship while still leaving out important human behaviour. An AI model can capture many patterns in language, code, images, and reasoning without becoming a flawless source of truth.

The model is a map, not the territory.

## Training Creates the Model

An AI model does not appear fully formed. It is created through Training.

Imagine, very loosely, showing a child enormous numbers of books, conversations, diagrams, code examples, explanations, questions, answers, images, and corrections. Over time, the child begins to recognise patterns. They learn grammar, style, facts, procedures, cause and effect, social cues, and relationships among ideas.

AI training is not the same as human learning, but the analogy helps at first. The system is exposed to examples and gradually adjusts itself so that it becomes better at predicting, completing, classifying, transforming, or generating information.

The adjustment happens inside the model's parameters.

A parameter can be imagined as an adjustable dial. A small model has many dials. A frontier model may have vast numbers of them. During training, examples turn these dials slightly. One example adjusts some relationships. Another example adjusts others. Over time, the pattern of all those dial settings becomes the model's learned representation.

The dials do not store knowledge like pages in a book. There is no single dial for "dog", another for "Swift syntax", and another for "banking regulation". Knowledge is distributed across the pattern of many parameters. That is one reason models are difficult to inspect. Their capability is real, but not stored in a human-readable rulebook.

The trained model is the finished learned artefact.

## Neural Networks Build Models

People often confuse models and neural networks.

A neural network is the machinery used to learn patterns. The model is the resulting learned structure used during inference.

The distinction matters. If training is a factory, the neural network is part of the machinery and process, while the model is the product that comes out. Once the model is trained, it can be deployed and used. Users interact with the deployed model, usually through an application such as a chat interface, coding assistant, or API.

This helps explain why AI companies invest in training. Training is expensive because it requires data, computation, engineering, specialised hardware, experimentation, and evaluation. But once a capable model exists, it can be used many times. The economics resemble capital investment: a large upfront cost creates an asset that can produce value repeatedly through inference.

## Inference Uses the Model

Inference is the use of a trained model to produce an output.

When a user asks an AI system to write a Swift function, explain a legal clause, summarise a report, translate a sentence, or generate a quiz, the system is not retraining itself from scratch. It is using the trained model.

The model takes the input, combines it with the current context, and generates an output based on the patterns it has learned. It does not retrieve a prewritten answer in the way a search engine retrieves a web page. It predicts and constructs a response.

This is why AI can be flexible. It can generate answers to prompts it has never seen exactly before because it is using learned relationships, not only stored answers.

It is also why AI can be wrong. Prediction is not the same as truth. A model may generate a plausible continuation that is factually incorrect, logically weak, outdated, unsafe, or inappropriate for the user's actual context.

Inference is therefore both powerful and risky.

## Why This Can Produce Software

Software is information.

Programs contain patterns: loops, conditions, functions, classes, data structures, APIs, architectures, tests, error handling, user-interface conventions, database queries, and documentation. Programming also contains relationships between human intent and machine behaviour. A natural-language requirement often relates to familiar implementation patterns.

If a model has been trained on enough examples of code, documentation, explanations, bug reports, tutorials, and software discussions, it can learn many of these relationships. It can learn that a request to "sort a list" often relates to known algorithms or library functions. It can learn that a login form requires input fields, validation, password handling, error states, and security concerns. It can learn that a mobile app screen has state, layout, user interaction, and navigation.

This does not mean the model "knows how to code" in the same way an experienced engineer does. It means it has learned patterns that allow it to generate code-shaped and often useful solutions. The more precise the request, the better the context, and the stronger the model, the more useful the result is likely to be.

The model's ability to write software follows from the same principle that allows it to translate, summarise, classify, and explain. It has learned relationships among representations of information.

## Traditional Software and AI Models

The difference between traditional software and AI models can be summarised like this:

| Traditional Software                | AI Model                                                       |
| ----------------------------------- | -------------------------------------------------------------- |
| Stores explicit rules               | Stores learned mathematical relationships                      |
| Humans write the rules              | Learns patterns from data                                      |
| Mostly deterministic                | Probabilistic                                                  |
| Knowledge is symbolic and localised | Knowledge is distributed across parameters                     |
| Modified by editing code            | Modified by training, fine-tuning, prompting, or configuration |
| Easier to inspect line by line      | Harder to interpret internally                                 |
| Strong where rules are clear        | Strong where patterns and variation matter                     |

This table explains a great deal.

It explains why AI can generalise beyond explicit instructions. It also explains why AI can hallucinate. It explains why model updates can change behaviour. It explains why prompts need testing. It explains why AI inside production software requires safeguards. It explains why programming languages remain important for deterministic parts of systems.

AI models are not better than traditional software in every way. They are different tools with different economics.

## Why There Are Many Models

If a model is a learned representation, then different training choices produce different models.

Models may differ in training data, architecture, size, optimisation, safety tuning, tool use, context length, multimodal capability, deployment environment, and intended use. One model may be strong at coding. Another may be strong at writing. Another may be small enough to run on a phone. Another may require large data-centre infrastructure but perform more complex reasoning.

This is why model names are not interchangeable. GPT, Claude, Gemini, Llama, and other model families may all belong to the broad category of AI models, but they do not represent the same learned structure. They may have different strengths, weaknesses, costs, policies, and behaviours.

It also explains why a new model version is not exactly like a conventional software update. In traditional software, developers can often add a feature while trying to preserve old behaviour. With AI models, changes in training, alignment, architecture, or inference behaviour may shift responses in subtle ways. A prompt that worked well with one model may behave differently with another.

This creates a new maintenance problem for software systems that depend on AI. Model behaviour becomes part of the system's behaviour.

## The Economics of Models

A model is not only a technical artefact. It is an economic artefact.

Training is an upfront investment. It requires data, specialised hardware, electricity, engineers, research, experimentation, and evaluation. At the frontier, the full cost is rarely disclosed consistently and public estimates vary widely. The durable point is that training creates an expensive reusable asset before most users make their first request.

Inference is an operating cost. Every time a user asks a question, generates code, analyses a document, or runs an AI feature, compute is consumed. Provider prices change quickly, but the underlying cost drivers remain: model size, context length, output length, hardware efficiency, latency requirements, and scale.

Model size is a trade-off. Larger models may offer broader capability, but they cost more to train and run. Smaller models may be cheaper and faster but less capable.

Context windows are a trade-off. A longer context lets the model consider more information, but it can increase memory and computation cost.

Multimodality is a trade-off. A model that can handle text, images, audio, and video may be more useful, but training and serving such a model is more complex.

But multimodality is not only a technical feature. It is also an access layer.

Text-based computing has always favoured people who are comfortable typing, writing, reading screens, using files, and translating messy experience into structured language. That excludes more knowledge than we usually admit. Much human expertise is spoken, shown, demonstrated, remembered, sketched, corrected in context, or carried through years of practical experience.

This matters especially in an ageing world. Many older experts possess deep domain knowledge but may never have been fully comfortable expressing that knowledge through formal computer interfaces. A retired factory supervisor may understand a machine by its sound. A nurse may understand a workflow through sequence and habit. A small-business owner may explain a process better in conversation than in a spreadsheet. An executive may have decades of judgement but little patience for typing detailed prompts.

Voice, image, video, screen sharing, diagrams, and gestures create a different path. They let people communicate with AI in forms closer to how they already think and work. The AI can then translate that interaction into notes, requirements, process maps, documentation, software specifications, or workflows.

This is not just convenience. It is the same kind of interface shift that changed office work when professionals moved from dictating paperwork to secretaries toward using email, calendars, spreadsheets, and enterprise systems directly. The work did not disappear. The interface changed, and the translation layer shrank.

This is why Multimodal Models may become economically important. They do not merely allow AI to see pictures or hear speech. They may unlock expertise that text-first computing left outside the software economy.

## When the Genie Learned to See, Hear, Speak, and Perform

My own experience of the Genie has been dominated by words and software. I used conversation to write this book and used Codex to help build Radix. That experience is real, but it is not a boundary around the technology.

The first mass encounter with generative AI was largely textual: a person typed words and received words. That beginning now looks misleadingly narrow. Multimodal AI can work across text, images, voices, music, video, diagrams, screens, and code. More importantly, it can connect them. A spoken description can become a transcript. A photograph can become a moving scene. A sketch can become an interface. A voice can be translated while some of its timing and emotion are preserved. A screenshot of a broken layout can lead to a change in the code that produced it.

The Genie is not simply acquiring more output formats. It is gaining access to more of the ways human beings perceive, remember, explain, and create.

### From a Picture of Rome to a Moving World

I understood the significance more clearly when I saw online videos that appeared to reconstruct ancient Rome. These were not stationary illustrations. The camera moved through streets and buildings. Human figures walked through the scene. Clothing, light, architecture, and faces combined into something that looked, at first glance, like filmed history.

I did not make those videos, and I cannot verify the particular production process from viewing the finished result. The honest claim is not that one prompt recreated Rome accurately. It is that moving historical simulation of this kind has become possible for creators without physically rebuilding Rome.

A likely workflow may combine several systems and many human decisions:

~~~text
historical research and references
↓
script and shot descriptions
↓
concept images, locations, characters, and costumes
↓
image-to-video or text-to-video generation
↓
camera movement, dialogue, voices, music, and sound
↓
selection, correction, continuity work, and editing
↓
finished sequence
~~~

That distinction matters. The striking result may look like one act of machine magic, but it is often a production pipeline. AI lowers the cost of several stages and lets one person attempt work that previously demanded many specialised people, physical resources, or both.

By 2025, Google was describing Flow explicitly as an AI filmmaking tool combining its Veo video model, Imagen image generation, and Gemini. Its announced controls included reusable visual ingredients, camera movement, scene extension, consistent characters, and generated sound. Later versions added dialogue, richer audio, reference images, longer shots, and tools to insert or remove elements. Runway separately demonstrated consistent characters, objects, and locations generated from reference images. Adobe placed generated video and the extension of existing footage inside its established creative-production tools.

These are company demonstrations and product claims, not proof that a model can independently make a coherent feature film. But together they show the direction of travel: generation is moving from isolated clips towards an integrated audiovisual workflow.

### Voice Is Part of the Performance

Voice deserves equal attention. Speech is not merely text read aloud. It carries identity, age, accent, hesitation, rhythm, emphasis, and emotion.

Current systems can transcribe speech, generate voices, clone a voice with permission, translate it, and dub audiovisual work into other languages. Providers now claim to preserve more of the original timing and emotional delivery during translation. This could let a teacher reach students in several languages, help a small creator distribute work internationally, restore speech for someone who has lost it, or give a fictional character a repeatable voice.

It also creates the machinery of impersonation. A familiar voice can be made to say words its owner never spoke. The same capability that expands access can enable fraud, political deception, harassment, or the unauthorised replacement of performers. Multimodal capability enlarges both the means of creation and the burden of verification.

### The Artificial Movie Star

It is now possible to imagine a movie star who was never born.

The industry term **synthetic performer** refers to a wholly digital person who does not resemble a recognisable real performer and is not voiced by one. This differs from a **digital replica**, which reproduces the voice or likeness of an identifiable person. The distinction is already present in performers' union terminology and contracts. It is therefore not merely a distant science-fiction question.

A synthetic performer might appear at any age, speak many languages, work in impossible locations, and remain available across a long-running series. A small studio could build stories around a licensed artificial cast. Audiences might form attachments to fictional performers just as they already do to animated characters, except that the new performer could look photographic and behave as though captured by a camera.

But an artificial star is not automatically free of copyright or other rights. It may avoid the biology, schedule, and physical location of a human actor, yet still be governed by:

- copyright in human-authored character design, scripts, music, settings, and finished editing;
- trademark and contractual control over the character as a commercial identity;
- rights of publicity or privacy if it resembles a real person;
- consent and compensation rules if a person's face, voice, or performance contributed to it;
- licences and restrictions attached to training material, models, and production tools; and
- uncertainty about how much copyright protection a largely machine-generated performance receives without sufficient human authorship.

The United States Copyright Office has treated copyrightability, training data, and digital replicas as separate questions. It has also recommended stronger protection against unauthorised realistic replicas. The safer conclusion is not that synthetic performers exist outside ownership. It is that ownership, authorship, and performance rights are being rearranged.

### A Movie Is More Than a Plausible Clip

The progress is breathtaking, but a convincing few seconds should not be confused with a finished film.

Long-form storytelling requires a world to persist. A character must remain the same person across shots. Objects must stay where the story left them. Injuries, clothing, lighting, geography, and time must remain consistent. Actions must have consequences. Dialogue must support character and plot. Emotional development must survive more than one spectacular scene.

Research benchmarks still identify long-duration coherence, event ordering, object identity, prompt adherence, and narrative consistency as difficult problems. Generated historical video introduces another weakness: visual plausibility is not historical evidence. A beautiful reconstruction can confidently combine the wrong architecture, clothing, social behaviour, language, or period. The more realistic it looks, the easier it may be to mistake invention for observation.

For the foreseeable future, serious production therefore remains an act of direction and verification. Humans choose the purpose, research the subject, establish the visual language, judge performances, reject weak generations, maintain continuity, edit the sequence, clear rights, and decide what the work means. AI can greatly reduce the cost of rendering alternatives without possessing taste, historical accountability, or the intention behind the story.

### The Economic Change Is Who Gets to Attempt the Work

The most important change may not be that large studios make the same films more cheaply. It may be that far more people can attempt forms of expression previously closed to them.

A historian might create a walk through an ancient city. A teacher might turn a lesson into a multilingual visual story. An architect might let a client move through a building before it exists. A small company might produce demonstrations without a film crew. A novelist might test characters and scenes before approaching a studio. A child might direct a story rather than merely describe it.

This resembles the Radix story at a different scale. I did not become a conventional software engineer before attempting software. The Genie reduced the distance between intention and implementation. Multimodal AI may reduce the distance between imagination and audiovisual production.

That does not eliminate craft. When the cost of producing an image or clip falls, judgement becomes more important because the number of possible outputs explodes. The scarce capability moves towards deciding what is worth making, identifying what is false or derivative, maintaining coherence, and turning generated fragments into a work that deserves attention.

### When Seeing Is No Longer Believing

There is also a social price. Photography, recorded speech, and video have never been perfect proof, but they carried a presumption that some event stood before a camera or microphone. Synthetic media weakens that presumption.

Technical responses already exist. Watermarks, detection systems, and the C2PA standard for **Content Credentials** can record information about the origin and editing history of a media asset. Such provenance can help a viewer assess where material came from. It cannot by itself prove that every claim in the picture is true, and metadata may be removed or lost. NIST therefore treats provenance, watermarking, detection, testing, and public understanding as complementary measures rather than a complete solution.

This creates a paradox. The Genie can make human imagination more visible while making visible evidence less trustworthy. Society will need both greater creative literacy and greater verification literacy.

### What I Know, What I Observed, and What I Infer

This part of the revolution lies beyond my deepest direct experience. That should be disclosed, but it should not cause the book to ignore a transformation already under way.

Three kinds of claim must remain separate:

1. **Experience:** I used multimodal Codex workflows when screenshots of Radix or book diagrams revealed problems that text alone had not communicated adequately.
2. **Documented observation:** current systems demonstrably generate and edit images, voices, audio, and moving video, while production tools increasingly connect these capabilities.
3. **Inference:** synthetic performers, individual filmmaking, personalised visual worlds, and radically smaller production teams are plausible consequences, not settled outcomes.

The responsible response is neither to dismiss a capability because I have not personally mastered it nor to describe every demonstration as a completed revolution. The task is to show what has crossed into reality, what remains difficult, and why the economic boundary is moving.

The Genie learned to converse first. It is now learning to perform.

### Sources for This Section

- Google, [Introducing Flow: Google's AI filmmaking tool designed for Veo](https://blog.google/innovation-and-ai/products/google-flow-veo-ai-filmmaking-tool/).
- Google DeepMind, [Veo](https://deepmind.google/technologies/veo/).
- Runway, [Gen-4: AI Video Generation with World Consistency](https://runwayml.com/research/introducing-runway-gen-4).
- Adobe, [Meet the Firefly Video Model](https://blog.adobe.com/en/publish/2025/02/12/meet-firefly-video-model-ai-powered-creation-with-unparalleled-creative-control).
- ElevenLabs, [Introducing Dubbing v2](https://elevenlabs.io/blog/introducing-dubbing-v2).
- SAG-AFTRA, [Terms to Know](https://www.sagaftra.org/terms-know).
- U.S. Copyright Office, [Copyright and Artificial Intelligence](https://www.copyright.gov/ai/?category=23).
- International Labour Organization, [Generative AI and the media and culture industry](https://www.ilo.org/publications/generative-ai-and-media-and-culture-industry).
- NIST, [Reducing Risks Posed by Synthetic Content](https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content).
- C2PA, [Content Credentials explainer](https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html).
- Zheng and others, [LoCoT2V-Bench: A Benchmark for Long-Form and Complex Text-to-Video Generation](https://arxiv.org/abs/2510.26412).

Reasoning is a trade-off. More careful reasoning may produce better answers, but can require more inference time and compute.

These trade-offs are why ECONOMICS_OF_INTELLIGENCE matters. Every improvement should be analysed as cost versus benefit. The question is not merely whether a model is more impressive. The question is what new value the improvement creates, what cost it introduces, who pays that cost, and whether the benefit justifies the investment.

## Why This Matters for the Book

Once we understand models, many later questions become clearer.

Why can AI write software? Because software is information, and the model has learned patterns in code, language, procedures, and software design.

Why do models hallucinate? Because inference is prediction and generation, not guaranteed retrieval of truth.

Why do different models behave differently? Because they are different learned representations.

Why are models expensive? Because training and inference consume scarce compute, engineering, and infrastructure.

Why do model upgrades create risk? Because changing a learned representation can change behaviour in ways that are not as predictable as editing a conventional program.

Why does software engineering still matter? Because models generate proposals, but reliable systems require requirements, architecture, verification, integration, governance, and judgement.

The model is the central unit in the economics of AI.

Now we need to look more closely at the machinery that creates it.

That machinery is the neural network.
