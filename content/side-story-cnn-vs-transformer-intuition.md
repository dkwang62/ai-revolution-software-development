# CNNs and Transformers: Two Different Ways of Finding Meaning

Artificial neural networks were originally inspired, in a loose sense, by the way neurons in the brain connect to and influence one another. It's worth being careful with that comparison, though. Modern neural networks aren't simulations of the human brain. But one piece of the original idea still holds up: intelligence can emerge from huge numbers of simple numerical connections, called weights, whose strength is learned from experience rather than programmed in by hand.

Different types of neural networks organize those connections in different ways, and two of the most important architectures are the **Convolutional Neural Network**, or CNN, and the **Transformer**. People often learn about these by diving straight into the math and mechanics. But there's an easier way in. Before touching any equations, it helps to notice two things humans already do, quite naturally, whenever we try to understand something.

When we look at a picture, we can zoom in and zoom out. We notice small details first, then how those details form larger structures, and finally what the whole image is showing us.

When we read a sentence, we do something different. We figure out what a word means by looking at the words around it — by noticing how it relates to everything else being said.

Those two habits of mind turn out to be a genuinely useful way to understand the two architectures. A CNN works roughly like the first habit: it moves from details, to parts, to the whole. A Transformer works roughly like the second: it moves from relationships, to context, to meaning. Neither comparison is technically precise — these are computer programs, not minds — but together they make the underlying ideas far easier to hold onto.

## How a Computer Sees a Picture

Imagine looking at a photograph of someone's face. Instantly, without any effort, you see eyes, a nose, cheeks, a mouth — a face. A computer doesn't start out seeing any of that. A digital photograph begins its life as a grid of pixels, and each pixel is just a handful of numbers describing its brightness and color. So where a person sees a face, a computer initially receives something closer to an enormous spreadsheet of numbers, with no built-in sense of what any of them mean.

That's the real puzzle CNNs were built to solve: how do you get from millions of individual numbers to something as abstract as the concept of "a face"?

## The CNN: From Detail to the Bigger Picture

Picture yourself looking very closely at a photograph — so closely that all you can make out are individual pixels and small shifts in brightness. Now slowly pull back. Edges appear, then curves, then textures. Pull back further, and those small patterns start combining into larger structures: the shape of an eye, the curve of a cheek, the contour around a nose. Keep pulling back, and eventually all of it resolves into a face.

That zooming-out process is a good intuition for what happens inside the layers of a CNN. The network isn't literally zooming a camera in and out, but something similar is happening mathematically. Each layer takes what the previous layer discovered and combines it into something broader and more abstract. Raw pixels become small visual patterns. Small patterns combine into larger ones. Larger patterns combine into complex features. And complex features eventually combine into an overall representation of what's in the image.

Early layers in the network are only looking at small patches of the picture at a time. Deeper layers combine information from progressively wider areas, building on whatever the earlier layers already found. The effect resembles a shift in the question being asked. At first: what details are present? Then: how do these details fit together? And finally: what does the whole pattern represent?

## Filters: What the CNN Learns to Look For

The tool a CNN uses to do this is called a filter. A filter is nothing more than a small grid of numbers — weights, learned from experience — that gets applied repeatedly across different parts of an image. Going back to the spreadsheet picture: imagine the whole photograph as one giant spreadsheet. Now imagine a tiny 3-by-3 spreadsheet, containing numbers the network has learned, sliding across that giant spreadsheet and performing the same small calculation at every position it passes over. That sliding, repeating calculation is called convolution, and it's where the "C" in CNN comes from.

A single layer of a CNN typically contains dozens or even hundreds of these filters, each one a different numerical lens for examining the image. If the first layer has 64 filters, one image becomes 64 different feature maps — 64 different ways of highlighting patterns in that same picture. The next layer then processes whatever those 64 maps found, and the hierarchy keeps building: raw pixels, to simple patterns, to combinations of patterns, to representations that carry more and more meaning.

## The Filters Are Learned, Not Programmed

Here's the part that tends to surprise people. Nobody sits down and writes rules like "filter one should detect vertical edges" or "filter twenty-seven should look for eyes." Instead, the network discovers useful filters entirely on its own, through a process called training.

Imagine a face-recognition company with a million labeled photographs. At the very start, the CNN's weights are essentially random — untrained and useless. A batch of photographs goes in, and an output comes out the other side. Because the training data includes the correct answers — which photos show the same person, which show different people — the system can measure exactly how wrong that output was. That measurement of error has a name: the loss.

What happens next is the crucial step. A process called backpropagation works backward through all the calculations the network just performed and figures out, mathematically, how each weight should be nudged to make the error a little smaller. Then another batch of photos goes through, and the same cycle repeats: predict, measure the error, adjust the weights. This might happen millions of times over the course of training.

Bit by bit, the filters shift from random noise into something genuinely useful — numerical patterns that pick out exactly the kind of visual information needed to recognize faces. It's worth separating two ideas here, because they're easy to blur together. The architecture determines how the network is allowed to process information — the structure of the filters and layers. Training determines what it actually learns to look for within that structure.

## The CNN Learns a Way of Seeing Faces

This distinction matters because it explains something that might otherwise seem strange: the CNN doesn't need a separate set of filters for every individual person. Millions of training faces produce one trained collection of filters, and that same trained network can then process Alice, Bob, Mary, or someone it has never seen before. The filters haven't memorized specific faces — they've learned a general way of extracting useful information from any human face. That's exactly why a facial-recognition system can enroll a brand-new resident without retraining the underlying neural network from scratch.

## Your Condominium Gate

Consider a condominium that uses facial recognition at its entrance. When you walk up to the gate, the camera initially sees a jumble of everything in frame — your face, your body, your clothing, the wall behind you, trees, the gate itself. The system's first job is to locate the face within that mess and crop it out.

That cropped face is then run through the trained recognition model, and what comes out the other end isn't a decision — it's a list of numbers, something like [0.17, -0.42, 0.81, 0.06, …], often hundreds of numbers long. This is called an embedding. It's tempting to think each number corresponds to a specific feature — number one for the nose, number two for the eyes, and so on — but that's not how it works. The identity information is spread out across the whole set of numbers, not localized to any single one of them.

When you were first enrolled as a resident, the system generated an embedding from your face and stored it. Every time you approach the gate afterward, the live camera image gets converted into a new embedding, which the system compares against the one it has on file. If the two are close enough, that's a match, and the gate opens.

Notice what the condominium itself is not doing: it's not training an AI system. All of the difficult learning happened earlier, somewhere else, on that huge labeled dataset. What the condominium is doing is called inference — simply using an already-trained model to do useful work.

## Training Versus Inference

This distinction becomes especially clear if we return to the spreadsheet analogy one more time. During training, picture an enormous workbook full of millions of adjustable cells. The system repeatedly runs through a loop: take an input, calculate an output, measure how wrong that output is, work backward to figure out why, and adjust the cells accordingly. Training is the process of changing that spreadsheet, cell by cell, until it produces good answers.

Once training is finished, those learned numbers are saved, and the workbook stops changing. During inference, a new image goes in, a series of forward calculations run using the finished weights, and an embedding comes out. There's no backpropagation this time, because there's nothing left to learn — the network is simply being used.

Put simply: training means finding the right numbers to put into the model's adjustable cells. Inference means using those finished numbers to calculate an answer for something new.

## Now Consider Language

The CNN gives us a clean intuition built around changing visual perspective — detail, to pattern, to whole. Language poses a different kind of problem entirely. Take this sentence:

*The bank raised its interest rate because it feared inflation.*

What does "it" refer to? Almost certainly the bank — but nothing about the word "it" on its own tells you that. You figure it out through relationships: "it" connects to "bank," "bank" connects to "interest rate," and "interest rate" connects to "inflation." Meaning here isn't sitting inside any single word. It emerges from the way the words relate to each other. That's the intuition behind the Transformer.

## The Transformer: Understanding Through Relationships

Suppose someone says, simply, "I went to the bank." On its own, that sentence doesn't tell you much about what kind of bank they mean. Now add more: "I went to the bank to deposit a cheque." Suddenly the words "deposit" and "cheque" pin the meaning down immediately — this is clearly a financial institution. Compare that to: "We sat on the bank and watched the river." Now "bank" connects to "river" instead, and the meaning flips entirely.

People do this kind of reading almost without noticing. We understand each piece of language partly by weighing it against the other pieces around it. The Transformer is built around a mechanism called attention, which gives it a computational way of doing something similar. A useful way to describe what attention is doing is to imagine it constantly asking, for every piece of information: which other pieces of information matter most right now?

So while a CNN is essentially asking, "what useful patterns can I build from these details?", a Transformer is asking something more like, "what other information here is relevant to understanding this piece?"

## Attention Changes With Context

What makes this especially powerful is that these relationships aren't fixed in advance. Take the word "mouse." In the sentence "The mouse ate the cheese," it clearly means a small animal. In "I clicked the mouse," it clearly means a computer peripheral. The word itself hasn't changed at all — what changed is its relationship to the words around it, and the Transformer's representation of that word shifts accordingly. Pair "mouse" with "cheese" and the network leans toward "animal." Pair "mouse" with "clicked" and it leans toward "computer device." This capacity to let meaning shift with context, rather than treating each word as fixed, is a big part of why Transformers turned out to be so effective for language.

## Both Are Built from Layers

There's one more piece worth adding, because it makes the jump between the two architectures much easier to follow: underneath their differences, CNNs and Transformers are built the same basic way. Both are stacks of layers, one feeding into the next. Input goes into layer one, layer one's output feeds layer two, that feeds layer three, and so on — sometimes through dozens of layers before the network produces a final answer. Neither architecture throws away what it already figured out at each step and starts fresh. Each layer takes the representation it receives, refines it a little further, and passes something richer along to the next.

What differs is what's happening inside each layer. Inside a CNN layer, filters are scanning for useful visual patterns. Inside a Transformer layer, attention is examining relationships among words, or patches, or whatever the tokens happen to be.

Go back to our sentence: "The bank raised interest rates because it feared inflation." In a Transformer's early layers, the network is mostly picking up on fairly basic, nearby relationships between words. As that representation passes through more layers, those relationships get revisited and refined again and again, gradually building toward an understanding of the sentence as a whole, not just its individual pieces.

This is where the zooming-out intuition for CNNs needs a small adjustment before it carries over cleanly. In a CNN, going deeper genuinely means widening the field of view — layer by layer, the network can physically take in a larger patch of the image. In a Transformer, a word can already be related to a distant word even in an early layer; attention doesn't need to build up to long-distance relationships the slow way a CNN does. What deepens instead, layer after layer, isn't how *far* the network can look, but how refined and abstract its understanding becomes. Each layer takes the relationships the previous layer found and reinterprets them, producing something a little richer and more contextual than before.

So it helps to hold both pictures side by side: CNN layers progressively build the bigger picture. Transformer layers progressively build richer contextual meaning. Different job, same basic move underneath — take what came before, refine it, and pass something better along.

## Can a Transformer Understand an Entire Book?

If a Transformer can relate a word to nearby words, then to the sentence, then to the paragraph, a natural question follows: can it do the same thing at the scale of an entire book, relating something in the final chapter back to something said at the very start?

Broadly, yes — as long as the whole book fits within what the model can look at in one go, its **context window**. Attention doesn't stop at the sentence or the paragraph; it can, in principle, relate a word in chapter fifteen to a word in chapter two just as directly as it relates two neighboring words. So if a book introduces an idea early on, develops it through several examples, and returns to it in the conclusion, a Transformer working with the whole book in view can interpret that conclusion in light of everything that came before it.

One part of the mental model is worth correcting, though. It's tempting to imagine the Transformer reads the whole book and distills it down into a single "meaning of the book" number, the way a face gets reduced to one embedding. That's not quite what happens. The Transformer maintains a running representation for every single word as it goes, and each of those word-level representations gets updated by pulling in relevant information from elsewhere in the text. There's no one final summary sitting at the end — just many individual pieces of the text, each one now carrying context from the rest.

It's also worth being honest that fitting inside the context window isn't a guarantee of understanding every part equally well. In practice, relating distant pieces of a very long document reliably gets harder as that document grows, even for a Transformer built to do exactly this. But the underlying idea holds: the context window marks out the full stretch of material a Transformer can draw on when building its understanding, the same way your own field of view marks out how much of a page you can take in before you have to turn it.

That extension actually sharpens the original analogy rather than complicating it. A CNN changes perspective across the *spatial* structure of an image — zooming across physical space, pixel by pixel. A Transformer changes perspective across the *contextual* structure of a document — zooming across meaning, word by word. Both move between detail and the bigger picture. They just travel through entirely different kinds of space to get there.

## The Human Intuition Behind the Difference

It's worth pausing to draw the two intuitions back together. When we look at a complicated picture, we naturally ask what the details are, what structures those details form, and what the whole picture ultimately shows — and that progression, detail to pattern to whole, is a useful mental model for the CNN. When we try to understand language, we naturally ask what something means in relation to everything else being said — and that progression, information to related information to context to meaning, is a useful mental model for the Transformer.

None of this is a claim that CNNs and Transformers think the way humans do. They don't. It's simply a way of making two very different computational strategies feel intuitive rather than abstract.

## Why Transformers Can Also Process Images

Here's where the picture gets more interesting: Transformers are no longer limited to language at all. An image can be sliced up into small pieces called patches, and a Vision Transformer can apply attention across those patches, learning which regions of an image are relevant to understanding other regions. In effect, it can ask: which other parts of this image matter for making sense of this part?

That means the two worlds have started to overlap. CNNs build meaning hierarchically, from local visual patterns upward. Transformers can build meaning by learning relationships among regions of an image, using the same underlying mechanism they use for words. Some modern systems even combine ideas from both approaches. So it's a mistake to reduce the distinction to "CNNs are for images, Transformers are for text." The deeper difference isn't about what kind of data each one handles — it's about how information is organized and related inside the network.

## Two Routes Toward Meaning

The simplest way to hold onto all of this isn't through equations at all. Picture yourself looking at a photograph. You notice one detail, then another. You mentally step back and watch those details combine into larger structures, until eventually you understand the whole picture. That's the CNN: details, patterns, bigger picture.

Now picture yourself reading a paragraph. A single word, on its own, might be ambiguous. You look at the words around it, what was said earlier, how the ideas connect — and eventually you understand what the writer means. That's the Transformer: relationships, context, meaning.

Underneath both architectures sit enormous numbers of learned weights. The architecture decides how those weights are organized and allowed to interact. Training adjusts them through repeated exposure to examples. Inference uses the finished weights to make sense of something new. The mathematics involved can get enormously complicated, but the underlying idea stays simple: a CNN builds the bigger picture out of visual patterns at different scales, while a Transformer builds meaning by figuring out which pieces of information matter to one another. Both are, in the end, transforming raw data into something useful — they just take different routes to get there.

*If you're curious how this plays out in a real engineering decision — what these architectures actually cost to run, and when one genuinely beats the other — there's a companion essay on that.*
