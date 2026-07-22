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
    title: "Front matter",
    entries: [
      { slug: "index" as FullSlug, title: "Book Home", shortTitle: "Book Home" },
      {
        slug: "00-author-and-ai-note" as FullSlug,
        title: "Author and AI Note",
        shortTitle: "Author and AI Note",
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
        slug: "20-five-year-and-ten-year-scenarios" as FullSlug,
        title: "Chapter 18: Five-Year and Ten-Year Scenarios",
        shortTitle: "18. Five-Year and Ten-Year Scenarios",
      },
      {
        slug: "21-conclusion-when-intent-becomes-software" as FullSlug,
        title: "Conclusion: When Intent Becomes Software",
        shortTitle: "Conclusion: When Intent Becomes Software",
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
