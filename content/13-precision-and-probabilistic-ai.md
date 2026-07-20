---
title: "Precision and Probabilistic AI"
---

# Precision and Probabilistic AI

![Reliable software around probabilistic AI](<figures/FIG-12-01 Precision Wrapper.png>)

Traditional software is built on a promise of repeatability.

Given the same input under the same conditions, the system should produce the same output. A banking calculation cannot be creative. A payroll system cannot improvise. A medical device cannot decide that today it feels like interpreting the rules differently. Deterministic software matters because modern civilisation depends on systems that behave predictably.

Generative AI works differently.

It produces outputs based on probabilities shaped by training, prompt, context, configuration, and model behaviour. The same prompt may produce different but plausible answers. A slightly different wording can change the result. A new model version can alter behaviour. The system may generate a fluent explanation that is wrong.

This creates the central engineering tension of AI-assisted software:

> How can probabilistic intelligence be used inside systems that require reliable behaviour?

The solution is not to pretend AI is deterministic. The solution is to design hybrid systems.

Another distinction lies underneath this problem. AI often gives similar answers when explaining established knowledge, such as Einstein's theory of relativity, but produces different answers when asked to design a hotel reservation system. The difference is not captured by calling one task deterministic and the other probabilistic.

AI does not possess direct access to objective truth. It constructs responses from patterns learned across the body of human knowledge represented in its training data. Where humanity has reached broad agreement, AI tends to produce consistent answers. Where experts disagree, AI should reflect disagreement. Where no established answer exists, AI generates new possibilities by combining learned patterns. That is why two different designs for a hotel-booking system can both be reasonable, while two conflicting explanations of an established scientific theory usually signal that at least one explanation needs checking.

Engineering sits largely in the second and third categories. It seeks fitness for purpose under constraints, not a single universal answer.

That means variation in software design is not always failure. Sometimes it is the natural result of navigating a large design space with many valid solutions.

## Two Different Reliability Problems

There are two situations that are often confused.

The first is AI creating software. A developer asks AI to write, modify, explain, or test code. The AI participates in development, but the output becomes conventional software. That code can be inspected, compiled, executed, tested, reviewed, and monitored. The AI may be probabilistic, but the resulting program can still be deterministic.

The second is AI operating inside software. A running application calls a model to classify a document, generate a response, choose a tool, summarise a medical note, extract invoice data, write a SQL query—an instruction for reading or changing information in a database—or decide what action to propose next. In this case, AI is part of the live system. Its uncertainty affects users and workflows directly.

The second case is harder.

When AI is part of the running application, software engineering must build reliable boundaries around probabilistic behaviour.

## AI Suggests; Software Decides

A useful principle is:

> AI suggests; deterministic software decides.

AI is valuable where interpretation, language, classification, summarisation, and judgement-like pattern recognition are useful. Deterministic software remains essential where rules, calculations, permissions, commitments, payments, safety, and irreversible actions are involved.

For example, an AI system may read a customer email and suggest that it is a refund request. But deterministic software should check whether the customer is eligible, whether the order exists, whether the refund period has expired, whether the amount is correct, and whether the user has permission to approve it.

AI may propose an action. Conventional software should enforce the rules.

This division of labour is central to reliable AI systems.

## Structured Output

One safeguard is structured output.

Instead of asking an AI system to write an unrestricted paragraph, software can make it fill in a form. The form might have boxes for the type of request, the order number, the recommended next step, and the evidence. Ordinary software can then check whether every required box is filled and whether each answer is one of the allowed choices.

Programmers call the formal definition of those fields and choices a **schema**:

```text
category: refund_request | complaint | technical_support | other
confidence: number
order_id: string or null
recommended_action: approve | reject | manual_review
evidence: short explanation
```

The vertical lines mean "choose one of these options," and `null` means that no order number was supplied.

Structure reduces ambiguity. It allows conventional software to validate fields, reject invalid values, require missing data, and route cases appropriately.

Structured output does not make AI correct. A model can place the wrong value into a valid field. But structure makes mistakes easier to detect and contain.

## Field Note: Testing Behaviour, Not Syntax

A Chinese-character quiz feature also shows why precision changes shape in AI systems.

The problem was not only whether a generated prompt looked well written. The real test was behavioural. Did the quiz ask one question and then stop? Did it avoid revealing the answer before the learner replied? Did it keep pinyin out of the wrong places? Did it use the captured material rather than drifting into generic Chinese practice? Did the result remain useful when opened in Gemini, Claude, ChatGPT, or another model?

Those questions are closer to product tests than grammar checks. A prompt can be fluent and still fail the feature. A model response can be impressive and still violate the rules. The engineering task is to define which behaviours are allowed, which are forbidden, and which failures should cause the app to ask for correction, retry, or hand control back to the user.

That is why AI precision cannot mean identical output every time. It has to mean dependable behaviour inside a controlled boundary.

## Validation

Every AI output should be treated as an untrusted proposal until validated.

Validation may include:

- Checking required fields.
- Confirming values are allowed.
- Verifying calculations with deterministic tools.
- Checking permissions.
- Ensuring database records exist.
- Rejecting unsafe commands.
- Detecting hallucinated citations or APIs.
- Comparing output against policy.
- Sending uncertain cases to a human.

This is ordinary software engineering applied to AI output.

The difference is that the AI layer may produce richer, more flexible, and less predictable proposals. The validation layer must decide which proposals can proceed.

In the refund example, validation checks that the order exists, the customer is eligible, the permitted period has not expired, and the proposed amount matches the transaction. The AI identifies the kind of request; validation determines whether its proposal is allowed to continue.

## Tool Use

AI should not be trusted to perform every operation from memory.

If exact calculation is required, use a calculator or deterministic function. If current information is required, query an authorised database or retrieval system. If code correctness matters, run tests. If syntax matters, use a compiler. If permissions matter, check the access-control system.

AI can decide which tool may be useful, but the tool should provide the authoritative result.

For the refund request, the AI may recognise that it needs the customer's order. An authorised order system—not the model's memory—must supply the real purchase date, amount, and status.

This pattern combines probabilistic interpretation with deterministic execution:

```text
AI interprets intent
↓
Software validates request
↓
Tool performs exact operation
↓
Software checks result
↓
User or system receives output
```

The model becomes an intelligent coordinator, not the sole authority.

## Evaluation

Traditional unit tests often expect exact answers. AI systems may have many acceptable outputs, so evaluation becomes more complex.

An AI summariser may produce different wording while preserving meaning. A coding assistant may generate different implementations that all pass tests. A customer-support assistant may use different phrasing while applying the same policy.

Evaluation must therefore measure outcome, not only string equality.

Developers may need datasets of representative cases, edge cases, adversarial examples designed to expose weaknesses, safety checks, format checks, checks that answers are supported by evidence, and human review. They may need to monitor production outputs—results from the live system used by real people—because model behaviour can drift or change after upgrades.

Software verification therefore becomes more important in the AI era. Cheap generation increases the need to know whether outputs are correct enough.

## Versioning Models and Prompts

In conventional software, teams version code. In AI systems, they must also version models, prompts, tools, retrieval sources, configuration, and evaluation datasets.

A prompt that works with one model may fail with another. A new model may follow instructions more carefully in general but behave worse for one production workflow. A longer context window may improve some tasks and introduce new failure modes. A change in tool permissions may alter what an agent can do.

Production AI systems therefore need repeated tests that reveal whether a change broke behaviour that previously worked. This is called **regression testing**: after making a change, rerun earlier tests to make sure old capabilities still work.

Before changing a model or prompt, teams should rerun evaluations. They should record which model and prompt produced which output. They should preserve the ability to investigate failures. In high-risk systems, they may need rollback plans.

For example, a customer-service team can preserve a set of earlier refund requests, including difficult and unusual cases. Before adopting a new model or prompt, it reruns those cases to see whether the system still classifies them correctly and applies the same safeguards.

Model behaviour is part of system behaviour.

## Fallback and Escalation

Reliable systems do not assume everything works.

They ask what happens when it does not.

If the model is uncertain, validation fails, required data is missing, or consequences are serious, the system should have fallback and escalation paths. It may retry with better context. It may switch to a more capable model. It may fall back to a deterministic workflow. It may ask the user for clarification. It may send the case to a human.

If the refund email contains no order number, the system should not invent one or approve the payment. It can ask the customer for the missing information or send the case to a person who can investigate.

Reliability does not require AI to be perfect. It requires the system to detect, contain, and recover from AI failure.

## Redefining Precision

In deterministic software, precision often means exact repeatability.

In AI systems, precision must be defined in terms of acceptable outcome.

A translation may use different words while preserving meaning. A quiz generator may produce different questions while following the rules. A code assistant may produce different implementations that all pass the same tests. A summariser may vary phrasing while preserving the relevant facts.

Precision therefore means:

> The system consistently achieves the required outcome within acceptable tolerances.

This definition is more useful than demanding identical output from a probabilistic system. The engineering task is to decide which parts of a workflow allow variation and which parts require exactness.

## Hybrid Systems

The most reliable AI systems are likely to be hybrid systems.

They use probabilistic AI where interpretation and flexibility create value. They use deterministic software where rules, calculations, permissions, safety, auditability, and commitments require exactness.

The design question becomes:

> Which parts of this task benefit from probabilistic reasoning, and which parts require deterministic control?

That question will appear repeatedly in AI software engineering.

AI should not replace the deterministic layer. It should sit above it, beside it, or inside controlled boundaries. It interprets, proposes, summarises, classifies, and generates. Conventional software validates, constrains, records, executes, and enforces.

## The Economics of Reliability

Reliability is not free.

Evaluation costs money. Validation costs money. Human review costs money. Monitoring costs money. Building safe tool-use systems costs money. Model upgrades require testing. Compliance—showing that the system follows laws, regulations, and organisational rules—requires documentation.

These costs must be included in the economics of AI-assisted software.

The optimistic argument says AI makes software cheaper. The engineering correction says: cheaper generation is not the same as cheaper reliable production software.

Both statements can be true.

AI may dramatically reduce the cost of producing first drafts, prototypes, explanations, tests, and routine implementations. At the same time, high-stakes systems may remain expensive because verification, integration, governance, and accountability dominate the cost.

This is not a failure of AI. It is the normal economics of reliability.

## Bridge to Existing Systems

Precision becomes even more important when AI interacts with existing systems.

Most valuable software does not run in isolation. It connects to databases, payment systems, customer records, legacy applications, regulatory workflows, factory equipment, medical devices, and enterprise platforms. A mistake at an integration boundary can have consequences far beyond a bad chat response.

That leads to the next engineering problem: legacy systems and system integration.

AI's greatest value may not be writing brand-new software. It may be helping organisations understand, preserve, and modernise the software they already depend on.
