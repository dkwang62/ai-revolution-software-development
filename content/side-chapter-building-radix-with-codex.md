---
title: "Case Study: Radix Began with One Search Box"
---

I did not begin Radix with a product plan, a technical design, or even a basic knowledge of programming.

I began with one small wish: I wanted a simple, free way to enter a Chinese character and see the information that mattered to me. Its pinyin and meaning. Its stroke animation. The components inside the character. Related phrases. I wanted to explore Chinese in the way I naturally thought about it, without paying for another subscription or following somebody else's lesson sequence.

That was all I knew at the start.

I did not know what language to program in. I did not know what a database was for. I did not know what GitHub was. I did not know how an application reached a phone. I had a picture of what I wanted a learner to see.

Radix grew from that picture.

By the time it reached its present form, Radix had become a serious rival to the best Chinese-learning apps on the App Store. It had become a full personal Chinese-learning workspace. A learner can capture Chinese from a photograph, file, clipboard image, or typed text; keep the original reading; use AI to check uncertain OCR; turn a saved page into linked sentences and phrases; and then inspect individual characters through pinyin, meanings, component analysis, variants, stroke animation, pronunciation, and related examples. The same material can become personal notes, favourites, searches, quizzes, conversation practice, and a learning history that can be backed up and moved between devices.

![Radix brings capture, browsing, character detail, phrases, and contextual actions into one learning workspace](<figures/CASE-03-01 Radix Learning Workspace.png>)

_Radix on iPad: a learner can move from a captured page to phrases, character detail, meanings, notes, and next actions without losing the original material._

That combination is unusual. Established Chinese-learning apps are powerful, but they commonly centre on one main job: a dictionary and reference tool, a curated reading library, or a handwriting and review system. Radix joins the whole learner's journey around material encountered in daily life:

```text
capture Chinese from the world
↓
check and understand it
↓
inspect its characters, phrases, and sentences
↓
practise it
↓
keep what matters
```

The remarkable point is not that an AI produced the finished application at the click of a button. It is that someone who began with no programming knowledge could grow one personal need into a serious, feature-rich product—one practical improvement at a time. AI did not merely make one screen faster to build. It made it economically possible to keep following the learner's next question until a simple search box became a system.

## A Morning-by-Morning Project

> **Why it matters:** A useful application can emerge through rapid, informed iteration even when no one can describe the finished product on day one.

The development was haphazard in the most honest sense: I did not know the full requirements on day one because I could not yet see the full possibility.

I would wake up with an idea and try to prototype it that morning. A better way to search. A new view of a character. A phrase tool. A quiz. A way to capture a page. The working app made each idea visible quickly enough for me to decide whether it was worth keeping.

At the same time, I was discovering what AI could do. I did not know how far I could push a coding agent. I began with a small request because a small request was all I could imagine. As Codex helped turn one idea into a working change, the boundary of the possible moved. A feature that would once have sounded too ambitious became the next experiment.

If I had known at the beginning what I know now, I might have planned a more ambitious application. But that is not how discovery works. The first version does not need to contain the final vision. It needs to be real enough to teach the creator what to ask for next.

## The First Question

> **Why it matters:** The right beginning is a small problem you understand well enough to recognise a useful first result.

My first question to ChatGPT was not, “How do I design a software architecture?” It was closer to this:

> I want to search for a Chinese character and show its information. Where do I start?

ChatGPT suggested Python and Streamlit. Python is a programming language that is widely used for working with data. Streamlit is a tool that can turn a small Python program into a simple web page without first learning how to build a full website. It also suggested GitHub, an online home for a project's files and their history.

At the time, those names meant little to me. That did not prevent me from beginning. ChatGPT could explain the next step, tell me what to install, show me where a file belonged, and help when an error appeared. I followed the instructions one step at a time.

The important lesson is that I did not need to learn every part of computing before creating the first useful thing. I needed to learn the next thing required by the problem in front of me.

This is **just-in-time learning**: learning a tool when there is a real reason to use it. AI adds something more. It can offer just-in-time capability: an explanation, a first attempt, and help correcting that attempt while the task is still alive.

## A Small Web App Appears

The first version was a Streamlit app. It had a simple search box and a small set of Chinese reference data. I could type a character, find it, and inspect it.

That first version was not Radix as it exists today. It did not need to be. Its job was to answer one question:

> Is this a better way for me to explore Chinese?

The answer was yes. Once I could search for a character and see useful information in one place, I could see what was missing. I wanted the pinyin and meaning to be clearer. I wanted to see the character's components. I wanted animated stroke order. I wanted the result to remain on the screen while I explored related material.

Each request was small. “Put the character grid above the phrases.” “Keep the grid visible while I look at another phrase.” “Show the meaning more clearly.” “Let me copy a character.” I did not have to describe the internal code. I described what felt wrong or what I wished the screen could do.

The application became a conversation between my learning habits and the working screen.

## The Information Card Grows

At first, the central object was a character information card. It showed the basic information about one Chinese character.

Then I began asking ordinary learner's questions. What phrases use this character? How is the character written? Which components form it? What does it sound like? Can I save a note? Can I find it again later?

The character card grew because my understanding of the problem grew. It acquired pinyin, meanings, stroke order, components, variants, related phrases, notes, speech, and ways to copy or save what mattered.

This is an important point about AI-assisted development. The original idea did not have to contain the whole product. The first working feature created a place from which the next useful question could be asked.

```text
one useful screen
↓
use it yourself
↓
notice the next missing capability
↓
ask for a small change
↓
use the new version
```

The plan was not written in advance. It emerged from use.

## One Extra Feature at a Time

> **Why it matters:** Iteration reduces planning risk because each new feature is chosen after seeing what the previous version made possible.

The project became more capable because each new feature solved a problem I had actually encountered.

I wanted to search by pinyin, meaning, and phrases rather than only by one character. I wanted to add a phrase that I had found myself, including its Chinese, pinyin, and meaning. I wanted to keep personal notes and favourites. I wanted to move my work safely between devices. I wanted the result of a search to remain in Search instead of unexpectedly sending me elsewhere in the app.

None of these required a grand plan. Each began as a sentence in ordinary English. Codex or ChatGPT could inspect the current project, identify the relevant part, explain the choices if necessary, and make a proposed change. I could try it immediately.

Sometimes the answer was, “This simple change has consequences.” For example, a person can add a phrase in Traditional Chinese while the main reference data is stored in Simplified Chinese. The system needs rules about how to search, display, and avoid treating two versions of the same phrase as unrelated. I did not need to invent those rules alone. But I did need to decide what behaviour would make sense to a learner.

That is the division of labour. The human supplies the goal and judges the result. The agent supplies technical options and turns the chosen option into a testable change.

## From a Character Card to a Phrase Card to a Sentence Card

The original character card suggested the next steps.

If one character deserves an information card, perhaps a phrase deserves one too. A phrase is more than a collection of characters. It has its own pinyin, meaning, notes, examples, and place in a real page of Chinese. Later, the same thought led to a sentence card. A sentence can show Chinese, pinyin, English meaning, phrase hints, speech, and a path back to the original page.

The application therefore grew outward from one object:

```text
character
↓
phrase
↓
sentence
↓
saved page
↓
personal learning history
```

This sequence was not a master plan. It was a chain of obvious questions. Once a learner can inspect a character, they naturally want to inspect the phrase in which it occurs. Once they can inspect a phrase, they want the sentence. Once they have the sentence, they want the original page and a way to practise what they have discovered.

AI made it practical to follow those questions instead of leaving them as ideas.

## The App Starts Seeing the World

At first, Radix worked with Chinese that I entered or searched for directly. The next natural question was: what about Chinese already in front of me?

I wanted to photograph a menu, save a page from a book, paste text from a message, or import a screenshot. That led to capture: camera, photos, files, clipboard images, and pasted text. It led to OCR, short for optical character recognition, which means software reading text from an image.

OCR was useful but imperfect. A photograph can be blurry, a magazine can have unusual layout, and Chinese characters can be misread. The next question was not “How do I build a machine-learning system?” It was “Can AI help check this reading while keeping the original available?”

That became an important product rule. Radix can keep the original OCR and show an AI-assisted corrected version separately. The learner can inspect both. AI helps with the work, but it does not quietly erase the source.

From there, a saved page could produce phrase suggestions, cleaned sentences, translations, a quiz, or conversation practice. But every new capability still belonged to the same simple loop:

```text
find Chinese in the world
↓
understand it
↓
practise it
↓
keep the useful result
```

## A Bad Quiz Teaches the Next Lesson

One of the clearest examples began with a quiz.

I wanted a quick quiz that tested whether a learner could recognise a Chinese character. The first version sounded sensible but failed as soon as I used it: the answer was already visible in the question.

I could show Codex the screen and describe a better experience: show a sentence with one character missing, give four similar-looking character choices, and prefer useful verbs. Codex could find the quiz rules, change them, and run checks.

Then the next version exposed more needs. The questions appeared in the same order each time. A supposed quick quiz contained one hundred questions. The learner needed a choice between Simplified and Traditional Chinese.

Nothing about this was planned at the beginning. The requirement became clearer only because I used the feature. This is why AI-assisted development can feel like developing software with a consultant beside you. The consultant can make changes quickly, but real use tells both of you what should change next.

By this stage, Codex was not functioning like a chatbot giving advice from outside the project. It was acting as a coding agent inside the work. Its trained model supplied general programming knowledge; the project files supplied local context; the terminal, compiler, and tests supplied feedback; file-editing tools gave it hands; and my instructions and approvals supplied boundaries. That combination made the rapid back-and-forth possible.

## The Web Prototype Becomes a Native App

> **Why it matters:** A prototype establishes that the problem is worth solving; a production app must then meet the harder requirements of real use.

The Streamlit version proved that the idea was useful. But I wanted an app that felt natural on an iPhone and iPad, could use the camera well, could work with Apple sharing and files, and could eventually be distributed through TestFlight.

This led to Swift and Xcode. Swift is the language used to write Apple applications. Xcode is the program used to build, run, test, and prepare them for distribution.

Again, I did not first become an expert in either. Codex could create and inspect the project, write Swift code, explain a build error, and run the tools that turn source files into an app. I could focus on the result: does the screen work on a phone? Is the text readable on an iPad? Does the camera lead to the page I expect? Can I return to where I came from?

The move from Streamlit to Xcode was not a fresh start. It carried the learning from the prototype into a more capable form. The first web app had taught what the product needed to do. The native app gave that product a better home.

## The Invisible Parts Arrive Later

> **Why it matters:** A beginner need not design the final architecture at the start, but must gradually invest in it as success creates real complexity.

At the beginning, I did not think about databases, backups, performance, or refactoring. That was appropriate. A beginner should not be frightened away from a simple idea by trying to solve every future problem first.

Those concerns arrived when the application gave us a reason to care about them.

As Radix stored more sentences, phrases, saved pages, and links between them, it needed a more dependable way to retrieve information quickly. This led to SQLite, a compact database inside the app. As personal learning work became valuable, it needed backups, recovery copies, and ways to move data between devices. As the app gained more screens, repeated controls and tangled navigation needed refactoring: reorganising the internal code so that the next change would be safer.

As sentence lists grew, the app also had to avoid doing unnecessary work each time a row appeared on the screen. A learner does not care about the technical reason. They care that the app feels quick. Codex could investigate slow parts, explain the cause, and suggest a safer design. I could decide whether the result was fast and simple enough.

The invisible structure came after the visible value. It was built because the growing app needed it, not because I had imagined every future need on day one.

## What Codex Changed

> **Why it matters:** AI did not remove the work of building; it made small, uncertain ideas cheap enough to try, inspect, and improve.

Without Codex, each new idea would have faced the same barrier: I would need to describe it to a programmer, wait for an interpretation, pay for the work, and hope the next version matched what I meant. Small ideas might never have been attempted.

With Codex, I could remain in the loop. I could say what I wanted, show a screenshot, ask why something had failed, request a safer or simpler design, and then see a working version. Codex could read a project that had become too large for me to hold in my head. It could find related files, make a focused change, run a build, investigate errors, refactor repeated structures, and explain the technical reasoning in plain language.

But Codex did not supply the reason for the app. It did not decide which Chinese material was worth studying, whether a quiz felt fair, whether a screen was too crowded, or how much risk was acceptable when storing personal learning history.

The working relationship looked like this:

```text
I describe the need and the result I want
↓
Codex proposes and builds a change
↓
the compiler, tests, and app provide evidence
↓
I use the result and decide what should happen next
```

That is why the app could grow without a complete plan. Each cycle created more evidence and a clearer next question.

## What a Beginner Can Copy

The lesson is not “build a complicated app like Radix.” The lesson is “begin with one useful thing you understand better than a programmer does.”

For another person, that first thing might be a garden log, a clinic form, a music-practice notebook, a restaurant stock check, a family-history search, or a tool for a small business. Begin with the smallest useful screen, not the finished company.

1. Describe the one outcome you want for yourself or another real user.
2. Ask an AI assistant which simple tool can create a first version, and follow one step at a time.
3. Use the first version yourself. Do not judge it by whether the code looks clever; judge it by whether it helps.
4. Add the next feature only when use reveals a real need.
5. Show the agent what went wrong. A screenshot and a plain explanation are often enough.
6. Let technical structure arrive when the growing application needs it: safer storage, backups, testing, faster search, better navigation, or specialist review.
7. Keep the human role. You decide the purpose, the priorities, the trade-offs, and whether the result is acceptable.

Radix began with one search box because I wanted a free way to explore a Chinese character. It became a much larger system not because I knew how to plan a large system, but because AI made it possible to ask the next sensible question and turn the answer into something I could use.

That is the real change. A person with a genuine problem no longer has to stop at an idea. They can begin.
