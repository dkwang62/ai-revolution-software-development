import { FullSlug } from "../util/path"

export type BookEntry = {
  slug: FullSlug
  title: string
  shortTitle: string
}

export type BookSection = {
  title: string
  entries: BookEntry[]
}

export const bookSections: BookSection[] = [
  {
    title: "Front Matter",
    entries: [
      { slug: "index" as FullSlug, title: "Book Home", shortTitle: "Book Home" },
      {
        slug: "00-author-and-ai-note" as FullSlug,
        title: "Author and AI Note",
        shortTitle: "Author and AI Note",
      },
      {
        slug: "00-preface" as FullSlug,
        title: "Preface: Why This Book Matters",
        shortTitle: "Preface: Why This Book Matters",
      },
      { slug: "01-introduction" as FullSlug, title: "Introduction", shortTitle: "Introduction" },
    ],
  },
  {
    title: "Part I · The Economics of Software",
    entries: [
      {
        slug: "02-economics-of-software-development" as FullSlug,
        title: "Chapter 1: The Economics of Software Development",
        shortTitle: "1. The Economics of Software Development",
      },
    ],
  },
  {
    title: "Part II · The History of Abstraction",
    entries: [
      {
        slug: "03-hidden-engine-of-computing" as FullSlug,
        title: "Chapter 2: The Hidden Engine of Computing",
        shortTitle: "2. The Hidden Engine of Computing",
      },
      {
        slug: "04-programming-as-representation" as FullSlug,
        title: "Chapter 3: Programming as Representation",
        shortTitle: "3. Programming as Representation",
      },
    ],
  },
  {
    title: "Part III · The Economics of Intelligence",
    entries: [
      {
        slug: "05-what-is-information" as FullSlug,
        title: "Chapter 4: What Is Information?",
        shortTitle: "4. What Is Information?",
      },
      {
        slug: "06-what-is-an-ai-model" as FullSlug,
        title: "Chapter 5: What Is an AI Model?",
        shortTitle: "5. What Is an AI Model?",
      },
      {
        slug: "side-story-cnn-vs-transformer-intuition" as FullSlug,
        title: "Side Story: CNNs and Transformers: Two Different Ways of Finding Meaning",
        shortTitle: "Side Story: CNNs and Transformers, Intuition",
      },
      {
        slug: "side-story-cnn-vs-transformer-engineering" as FullSlug,
        title: "Side Story: CNNs and Transformers, Engineering",
        shortTitle: "Side Story: CNNs and Transformers, Engineering",
      },
      {
        slug: "side-story-transformers" as FullSlug,
        title: "Side Story: Understanding Transformers: From Layers to Context and Coherent Language",
        shortTitle: "Side Story: Understanding Transformers",
      },
      {
        slug: "side-story-reasoning-in-transformers" as FullSlug,
        title: "Side Story: Where Does Reasoning Actually Happen in a Transformer?",
        shortTitle: "Side Story: Reasoning in Transformers",
      },
      {
        slug: "side-story-fossil-record-of-thought" as FullSlug,
        title: "Side Story: The Fossil Record of Thought: What Language Models Actually Learn From",
        shortTitle: "Side Story: The Fossil Record of Thought",
      },
      {
        slug: "side-story-the-jagged-frontier" as FullSlug,
        title: "Side Story: The Jagged Frontier: Why AI Is Brilliant and Baffling in the Same Breath",
        shortTitle: "Side Story: The Jagged Frontier",
      },
      {
        slug: "side-chapter-the-genie-is-not-all-powerful" as FullSlug,
        title: "The Genie Is Not All-Powerful",
        shortTitle: "The Genie Is Not All-Powerful",
      },
      {
        slug: "side-chapter-from-dna-to-a-machine-native-ai" as FullSlug,
        title: "Exploratory Side Chapter: From DNA to a Machine-Native AI",
        shortTitle: "From DNA to a Machine-Native AI",
      },
      {
        slug: "08-how-ai-converts-english-into-software" as FullSlug,
        title: "Chapter 6: How AI Converts English Into Software",
        shortTitle: "6. How AI Converts English Into Software",
      },
      {
        slug: "09-economics-of-models" as FullSlug,
        title: "Chapter 7: The Economics of Models",
        shortTitle: "7. The Economics of Models",
      },
      {
        slug: "10-context-what-the-model-knows-right-now" as FullSlug,
        title: "Chapter 8: Context: What the Model Knows Right Now",
        shortTitle: "8. Context: What the Model Knows Right Now",
      },
    ],
  },
  {
    title: "Part IV · Engineering with AI",
    entries: [
      {
        slug: "11-communication-becomes-the-interface" as FullSlug,
        title: "Chapter 9: Communication Becomes the Interface",
        shortTitle: "9. Communication Becomes the Interface",
      },
      {
        slug: "12-requirements-engineering" as FullSlug,
        title: "Chapter 10: Requirements Engineering",
        shortTitle: "10. Requirements Engineering",
      },
      {
        slug: "side-chapter-building-radix-with-codex" as FullSlug,
        title: "Case Study: Radix Began with One Search Box",
        shortTitle: "Case Study: Radix Began with One Search Box",
      },
      {
        slug: "13-precision-and-probabilistic-ai" as FullSlug,
        title: "Chapter 11: Precision and Probabilistic AI",
        shortTitle: "11. Precision and Probabilistic AI",
      },
      {
        slug: "14-economics-of-trust" as FullSlug,
        title: "Chapter 12: The Economics of Trust",
        shortTitle: "12. The Economics of Trust",
      },
      {
        slug: "15-legacy-problem" as FullSlug,
        title: "Chapter 13: The Legacy Problem",
        shortTitle: "13. The Legacy Problem",
      },
      {
        slug: "16-agents-tools-and-integrated-systems" as FullSlug,
        title: "Chapter 14: Agents, Tools, and Integrated Systems",
        shortTitle: "14. Agents, Tools, and Integrated Systems",
      },
      {
        slug: "side-chapter-personal-librarian" as FullSlug,
        title: "Side Chapter: The Personal Librarian",
        shortTitle: "Side Chapter: The Personal Librarian",
      },
    ],
  },
  {
    title: "Interlude",
    entries: [
      {
        slug: "interlude-a-machine-from-2026-arrives-in-1981" as FullSlug,
        title: "Interlude: A Machine From 2026 Arrives in 1981",
        shortTitle: "The Future Is a System",
      },
    ],
  },
  {
    title: "Part V · The Future",
    entries: [
      {
        slug: "17-what-becomes-scarce-when-code-becomes-cheap" as FullSlug,
        title: "Chapter 15: What Becomes Scarce When Code Becomes Cheap?",
        shortTitle: "15. What Becomes Scarce When Code Becomes Cheap?",
      },
      {
        slug: "18-future-of-programmers" as FullSlug,
        title: "Chapter 16: The Future of Programmers",
        shortTitle: "16. The Future of Programmers",
      },
      {
        slug: "19-enterprise-intelligence-layer" as FullSlug,
        title: "Chapter 17: The Enterprise Intelligence Layer",
        shortTitle: "17. The Enterprise Intelligence Layer",
      },
      {
        slug: "side-story-intelligence-that-does-not-need-to-be-fast" as FullSlug,
        title: "Side Story: The Intelligence That Does Not Need to Be Fast",
        shortTitle: "Side Story: Latency-Indifferent Intelligence",
      },
      {
        slug: "side-chapter-from-demonstration-to-daily-work" as FullSlug,
        title: "Side Chapter: From Demonstration to Daily Work",
        shortTitle: "Side Chapter: From Demonstration to Daily Work",
      },
      {
        slug: "20-five-year-and-ten-year-scenarios" as FullSlug,
        title: "Chapter 18: Five-Year and Ten-Year Scenarios",
        shortTitle: "18. Five-Year and Ten-Year Scenarios",
      },
      {
        slug: "side-story-when-intelligence-acquires-agency" as FullSlug,
        title: "Side Story: When Intelligence Acquires Agency",
        shortTitle: "Side Story: When Intelligence Acquires Agency",
      },
      {
        slug: "side-story-what-would-it-take-rethinking-agi" as FullSlug,
        title:
          "Side Story: What Would It Take? Rethinking Artificial General Intelligence from First Principles",
        shortTitle: "Side Story: What Would It Take?",
      },
      {
        slug: "21-conclusion-when-intent-becomes-software" as FullSlug,
        title: "Conclusion: When Intent Becomes Software",
        shortTitle: "Conclusion: When Intent Becomes Software",
      },
    ],
  },
  {
    title: "Course Preparation",
    entries: [
      {
        slug: "22-preparing-to-lead-agentic-ai" as FullSlug,
        title: "Preparing to Lead Agentic AI: An Executive Pre-Course Guide",
        shortTitle: "Executive Pre-Course Guide",
      },
    ],
  },
  {
    title: "Addendum: Articles in Development",
    entries: [
      {
        slug: "side-story-addendum-dna-to-machine-native-ai" as FullSlug,
        title: "From DNA to a Machine-Native AI",
        shortTitle: "From DNA to a Machine-Native AI",
      },
      {
        slug: "side-story-fossil-record-of-thought" as FullSlug,
        title: "The Fossil Record of Thought",
        shortTitle: "The Fossil Record of Thought",
      },
      {
        slug: "side-story-addendum-decade-ahead" as FullSlug,
        title: "The Decade Ahead: AI and the Remaking of Civilization",
        shortTitle: "The Decade Ahead",
      },
      {
        slug: "side-story-addendum-ai-discovers-biology" as FullSlug,
        title: "AI Discovers Biology Beyond Human Intuition",
        shortTitle: "AI Discovers Biology Beyond Human Intuition",
      },
    ],
  },
  {
    title: "Reference",
    entries: [
      { slug: "98-glossary" as FullSlug, title: "Glossary", shortTitle: "Glossary" },
      {
        slug: "99-bibliography-and-evidence-notes" as FullSlug,
        title: "Bibliography and Evidence Notes",
        shortTitle: "Bibliography and Evidence Notes",
      },
    ],
  },
]

export const bookEntries = bookSections.flatMap((section) => section.entries)
