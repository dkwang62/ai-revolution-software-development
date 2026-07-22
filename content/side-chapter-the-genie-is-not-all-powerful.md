---
title: "Side Chapter: The Genie Is Not All-Powerful"
---

# Side Chapter: The Genie Is Not All-Powerful

Once you have watched an AI model write software, interpret an image, explain biology, and answer questions across many subjects, it is easy to form a dangerous idea.

Perhaps the model can eventually map everything.

Perhaps enough data, computing power, and reasoning will turn it into a kind of Superman: able to see every pattern, understand every cause, and answer every question. In the language of this book, the genie begins to look all-powerful.

That is not what an AI model is.

An AI model is a learned representation of patterns found in data. This makes it extraordinarily useful when the patterns are too numerous, subtle, or widely scattered for a person to inspect directly. It does not give the model a complete view of reality. Its answers remain shaped by its training data, objective, architecture, current context, and the evidence available when it is used.

The genie is powerful because it can work with relationships at enormous scale. It is limited because relationships are not the whole of reality.

## Prediction Is Not Explanation

A model may predict that a customer will stop subscribing, a drug candidate is promising, a mutation may increase disease risk, or a section of code probably contains a defect.

The prediction may be valuable. The next question is harder:

> Why?

Sometimes the model can provide a sound explanation supported by evidence. Sometimes it produces only a plausible story after the prediction. Two things may appear together repeatedly without one causing the other. Hidden factors may influence both. The data may describe yesterday's world while the decision concerns tomorrow's.

This distinction matters whenever AI affects credit, medicine, fraud detection, hiring, education, scientific research, or software. Prediction can guide attention. Explanation helps people test, challenge, and improve the decision.

A confident answer does not tell us which one we have received.

## The Genome as a Case Study

The human genome is a useful example because it looks, at first, like a language. DNA is written with only four letters:

- A
- C
- G
- T

AI models are good at learning relationships in long sequences of symbols. Modern biological models can search DNA for patterns and predict effects that would be extraordinarily difficult for humans to examine manually. For example, AlphaGenome predicts thousands of biological measurements involving gene expression, splicing, chromatin, and the physical contacts made by DNA. That is a remarkable expansion of what scientists can investigate. [Nature, _Advancing regulatory variant effect prediction with AlphaGenome_](https://www.nature.com/articles/s41586-025-10014-0)

But DNA is not simply a sentence whose meaning can be read from left to right.

Some DNA provides instructions for making proteins. Other regions help regulate when and where genes are active. A regulatory region may matter in one type of cell and not another. Regions far apart in the written sequence can be brought together when DNA folds inside a cell. The same genetic variation can have different consequences depending on other genes, age, tissue, environment, and chance.

The complexity is not an excuse invented to protect human experts. It is visible in the science. The U.S. National Institute of Diabetes and Digestive and Kidney Diseases describes gene-regulating enhancers as highly specific to cell type and notes that the genome's organisation inside the nucleus can bring distant enhancers together with their target genes. The National Institute of Environmental Health Sciences explains that most diseases arise through interactions between genes and environment rather than from one genetic change alone. [NIDDK, _Gene Regulation and Development_](https://www.niddk.nih.gov/research-funding/at-niddk/labs-branches/laboratory-cellular-developmental-biology/gene-regulation-and-development-section/research); [NIEHS, _Gene and Environment Interaction_](https://www.niehs.nih.gov/health/topics/science/gene-env)

AI can search millions of genomes, identify subtle relationships, and prioritise mutations for investigation. It cannot simply “read the genome” and know everything about a living person.

Experiments still matter.

Interpretation still matters.

Biology still matters.

## Python and DNA

A contrast with Python makes the boundary clearer.

Python is a formal language. It has defined syntax and an interpreter. In an ordinary Python environment, this instruction:

```python
print(2 + 2)
```

produces:

```text
4
```

The symbols were designed by humans to have an agreed meaning. If the syntax is invalid, the program stops. If it is valid, the interpreter follows defined rules.

DNA is different. A sequence may be active in a liver cell and silent in a neuron. A mutation may have no visible effect, slightly change a protein, alter the probability of disease, or matter only when another biological or environmental condition is present. There is no single biological interpreter applying one complete rulebook from beginning to end.

Python programs can often be understood one function at a time. Genes participate in networks. One gene may affect another, which changes the activity of many others, which matters only in a particular tissue or stage of life.

Python was written deliberately for machines to execute. The genome emerged through evolution inside a living system that builds, maintains, responds, reproduces, and changes.

AI can learn patterns in both. The meaning of those patterns is much harder to establish in biology.

## Models Compress Reality

Every model is a compression.

A map is not the territory. A weather model is not the weather. An economic model is not the economy. An AI model is not the world.

Compression is what makes a model useful. Instead of storing every possible situation separately, it captures relationships that help it generalise, predict, and generate something new.

Compression also loses information. A model does not contain every fact, cause, exception, hidden variable, and future event. It contains relationships that proved useful during training. This is why the same model can be brilliant in one situation and wrong in another.

The model is not necessarily failing because it is unintelligent. It is behaving like a model: powerful within the representation it has learned and uncertain where that representation does not match reality.

## Why More Data and Computing Power Are Not Enough

More data helps. More computing power helps. Better architectures, memory, tools, and reasoning help.

But some limitations are not merely computing problems. They are reality problems.

The world is incompletely measured. Data can be wrong or biased. Causes are entangled. Systems change over time. Humans behave inconsistently. Organisations contain incentives, politics, and undocumented knowledge. Biology adapts. Rare events may be absent from the data precisely because they are rare.

A model trained on observations from this world inherits those limits. Greater capability may reduce uncertainty. It does not abolish uncertainty.

Nor does a larger map become the territory simply because it contains more detail.

## AI as Microscope, Not Oracle

A better way to think about AI is as a new kind of instrument.

The microscope did not replace biology. It changed what biologists could see. The telescope did not replace astronomy. It extended the scale of observation.

AI does something similar for patterns. It lets humans examine relationships across collections of text, code, images, measurements, and records too large or multidimensional for unaided inspection.

That is why AI is revolutionary.

But an instrument is not an oracle. A microscope still needs an investigator who knows what sample was prepared, how the instrument works, and whether an apparent feature is real. An AI system still needs context, validation, experiments, and human judgement.

The genie can reveal possibilities that were previously invisible. It cannot guarantee that every possibility is true.

## The Practical Lesson

The right question is not only:

> Can the model answer?

The better questions are:

- What evidence shaped this answer?
- Is this a prediction, an explanation, or a recommendation?
- Which assumptions may be hidden?
- What information might be missing?
- What would count as independent verification?
- What happens if the answer is wrong?
- Is the world stable enough for yesterday's patterns to remain useful?
- Should this result be trusted, tested, or treated as a starting point?

AI models expand what humans can do. They do not remove human responsibility for deciding what the result means or whether it should be used.

The power of AI comes from learning patterns at scale.

Its limitation comes from the fact that patterns are not the whole of reality.

Once we understand both sides, the genie becomes more useful—not less. We can stop asking it to be all-powerful and begin building systems that combine its extraordinary pattern recognition with evidence, experiments, deterministic checks, domain knowledge, and human judgement.

The next chapter returns to software, where the world is more formal than biology but still full of unstated assumptions. [[08-how-ai-converts-english-into-software|How AI Converts English Into Software]] shows how a model turns language into code—and why the result remains a proposal rather than a guarantee.
