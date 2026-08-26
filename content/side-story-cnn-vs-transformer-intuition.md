# CNNs and Transformers: Two Different Ways of Finding Meaning

Neural networks are loosely inspired by how brain neurons connect and influence each other — not a simulation of the brain, but the same underlying idea: intelligence can emerge from huge numbers of simple numerical connections, called weights, learned from experience rather than programmed by hand. Different architectures organize those connections differently. Two of the most important are the **Convolutional Neural Network (CNN)** and the **Transformer**, and the easiest way into their difference isn't math — it's two things humans already do naturally. Looking at a picture, we zoom: details, then structures, then the whole. Reading a sentence, we understand one word by its relationship to the others around it. CNNs build meaning the first way, detail to whole. Transformers build it the second way, relationship to context to meaning. Neither analogy is exact, but together they make both architectures far easier to hold onto.

[![CNNs build from local details while Transformers relate patches across the whole image](<figures/FIG-SC-02 CNN and Transformer From Details to the Big Picture.png>)](<figures/FIG-SC-02 CNN and Transformer From Details to the Big Picture.png>)

## How a Computer Sees, and How a CNN Learns To

A photograph starts, for a computer, as a grid of pixels — numbers describing brightness and color, nothing more. Getting from that grid to "a face" is the problem CNNs were built to solve, and they solve it the way you'd zoom out on a photo: pixels resolve into edges and textures, edges combine into an eye or the curve of a cheek, and those combine into a face. Each CNN layer does something similar — combining what the previous layer found into something broader — so early layers see small patches and deeper layers see progressively more.

The tool doing this combining is the **filter**: a small grid of learned numbers that slides across the image performing the same small calculation everywhere, a process called convolution. A layer might have dozens of filters, each a different lens on the image; the next layer processes what those filters found, and the hierarchy builds — pixels, to patterns, to combinations of patterns, to meaning.

Nobody programs a filter to look for eyes. It's discovered through **training**: photos go in, the network guesses, the guess is compared to the right answer to produce an error called the **loss**, and **backpropagation** works backward through the network figuring out how to nudge every weight to shrink that error. Repeat millions of times and the filters become genuinely useful — not because anyone designed them, but because reducing error kept nudging them there. Crucially, the network doesn't need one filter set per face. Training on millions of faces produces one general-purpose filter set that works on Alice, Bob, or someone it's never seen — a general way of extracting the kind of information a face contains.

## The Condo Gate, and Training vs. Inference

That's what runs inside a condominium's facial-recognition gate. The camera locates and crops your face, then runs it through the trained model to produce an **embedding** — a few hundred numbers, like [0.17, -0.42, 0.81, …], with your identity distributed across all of them rather than sitting in any one. When you were enrolled, the system stored your embedding; each time you approach the gate, it compares a fresh embedding to the stored one and opens if they're close enough.

Notice what the condo *isn't* doing: training. The hard learning happened earlier, elsewhere, on a huge labeled dataset. The condo is doing **inference** — using an already-finished model. That's the whole distinction: training means finding the right numbers to put in the model's adjustable cells; inference means using those finished numbers to calculate an answer for something new. Once training ends, the weights are frozen, and enrolling a new resident is nothing more than running one more photo through an unchanging model.

## Now Consider Language

CNNs give us zoom: detail to whole. Language poses a different problem. Take: "The bank raised its interest rate because it feared inflation." The word "it," alone, tells you almost nothing. You resolve it by relationship — it connects to bank, bank connects to interest rate, interest rate connects to inflation. Meaning isn't sitting in any single word; it emerges from how the words relate.

This is the Transformer's whole premise, built around a mechanism called **attention**, which — for each piece of information — asks which other pieces matter most right now. And those relationships shift with context, not the word alone: "bank" means something different next to "deposited" than it does next to "river." A CNN asks what patterns can be built from the details. A Transformer asks what other information is relevant to understanding this one.

## Both Are Built from Layers

Here's what ties the two together: both are stacks of layers, each one refining what the last one produced and passing something richer along — neither throws its progress away and starts over. Inside a CNN layer, filters scan for visual patterns. Inside a Transformer layer, attention examines relationships among words or patches. In a Transformer's early layers, a word picks up mostly on nearby words; passing through more layers, those relationships get revisited and refined into something closer to the meaning of the whole sentence.

One adjustment to the zoom intuition: in a CNN, depth means a *wider* field of view, layer by layer. In a Transformer, a word can already relate to a distant word even in an early layer — depth instead means the relationships it already found get reinterpreted more thoroughly. CNN layers progressively build the bigger picture. Transformer layers progressively build richer contextual meaning. Different job, same basic move underneath.

## Can a Transformer Understand an Entire Book?

If attention can relate a word to nearby words, then to the sentence, then the paragraph — can it do the same across an entire book, relating the conclusion back to something said in chapter one? Broadly, yes, as long as the whole book fits in what the model can look at at once, its **context window**. One correction is worth making, though: the Transformer isn't distilling the book into one "meaning of the book" number the way a face becomes one embedding. It maintains a running representation for *every* word, each shaped by relevant context pulled in from elsewhere in the text. And fitting inside the context window isn't a guarantee of understanding every part equally well — relating very distant pieces reliably does get harder as a document grows. But the core idea holds, and it sharpens the original analogy rather than complicating it: a CNN zooms across the *spatial* structure of an image; a Transformer zooms across the *contextual* structure of a document. Both move between detail and the bigger picture — they just travel through entirely different kinds of space to get there.

## Why Transformers Can Also Process Images

Transformers aren't limited to language. Slice an image into small patches, and a Vision Transformer can apply attention across them — asking which regions of an image are relevant to understanding others, the same mechanism used for words. CNNs build meaning hierarchically from local patterns; Transformers build it by learning relationships among regions, wherever they sit. So it's a mistake to reduce this to "CNN equals images, Transformer equals text." The real difference is how information gets organized and related inside the network, not which kind of data it happens to process.

## Two Routes Toward Meaning

Picture a photograph again: a detail, then another, then those details combining into structures you eventually recognize as a face. That's the CNN — details, patterns, bigger picture. Now picture a paragraph: one ambiguous word, clarified by the words around it, the sentence before it, how the ideas connect — until you understand what the writer means. That's the Transformer — relationships, context, meaning. Underneath both sit enormous numbers of learned weights; the architecture decides how they're organized, training adjusts them through experience, inference puts them to use on something new. A CNN builds the bigger picture from visual patterns at different scales. A Transformer builds meaning by discovering which pieces of information matter to one another. Both transform raw data into something useful. They just take different routes to get there.

*If you're curious how this plays out in a real engineering decision — what these architectures actually cost to run, and when one genuinely beats the other — there's a companion essay on that.*
