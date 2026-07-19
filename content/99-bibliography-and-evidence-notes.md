---
title: "Bibliography and Evidence Notes"
---

# Bibliography and Evidence Notes

This draft is primarily an explanatory manuscript, not an academic textbook. Still, several of its major claims depend on external evidence. The notes below identify the main sources used in this version and explain how they should be interpreted. They also separate measured evidence, estimates, and inference so the book does not overclaim.

## Software Labour Market

The U.S. Bureau of Labor Statistics is used as a country-level anchor for the scale and value of software labour. Its 2024 Occupational Outlook Handbook entry for software developers, quality assurance analysts, and testers reports employment, wages, projected growth, and job openings.

Source: [U.S. Bureau of Labor Statistics, Software Developers, Quality Assurance Analysts, and Testers](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm)

How this book uses it:

- To show that software development depends on a large, specialised, highly paid workforce.
- To support the argument that software cost is driven by scarce expertise, not typing speed.
- To avoid simplistic claims that AI automatically eliminates software jobs.

## Generative AI Economic Potential

McKinsey's 2023 report estimates that generative AI could add US$2.6 trillion to US$4.4 trillion in annual value across 63 use cases, with a large share of potential value concentrated in customer operations, marketing and sales, software engineering, and research and development.

Source: [McKinsey, The economic potential of generative AI](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)

How this book uses it:

- To support the claim that generative AI should be analysed as an economic force.
- To frame Enterprise AI ROI as a portfolio of specific use cases.
- To distinguish estimated potential value from already realised enterprise-wide returns.

## AI-Assisted Developer Productivity

A controlled GitHub Copilot experiment found that developers with access to Copilot completed a bounded JavaScript task 55.8 percent faster than the control group.

Source: [Peng et al., The Impact of AI on Developer Productivity: Evidence from GitHub Copilot](https://arxiv.org/abs/2302.06590)

GitHub's own research summary also reported improvements in perceived flow, satisfaction, and reduced mental effort among Copilot users.

Source: [GitHub Blog, Research: quantifying GitHub Copilot's impact on developer productivity and happiness](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)

How this book uses it:

- To support the claim that AI can improve productivity in some software-development tasks.
- To avoid claiming that all software development becomes 55.8 percent faster.
- To reinforce the distinction between code generation and production engineering.

METR's randomized early-2025 study examined experienced open-source developers completing real issues in repositories they knew well. AI use increased completion time by 19% in that specific setting. In February 2026, METR reported that late-2025 tools probably improved on that result, but selection effects and concurrent-agent use made the new estimate unreliable. The book presents both results because capability and measurement conditions are changing together.

Sources:

- [METR, Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [METR, We Are Changing Our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)

DORA measures a different level: software delivery inside organisations. Its 2024 report associated increasing AI adoption with lower throughput and stability despite individual benefits. Its 2025 report found a changed pattern—higher throughput alongside continued instability—and described AI as an amplifier of the organisation around it.

Sources:

- [DORA, 2024 Accelerate State of DevOps Report](https://dora.dev/research/2024/dora-report/)
- [DORA, 2025 State of AI-Assisted Software Development](https://dora.dev/research/2025/dora-report/)
- [DORA, Balancing AI Tensions](https://dora.dev/insights/balancing-ai-tensions/)

The 2025 Stack Overflow Developer Survey provides perception evidence rather than controlled productivity measurement. It records widespread adoption alongside frustration with nearly-correct answers and time-consuming debugging.

Source: [Stack Overflow, 2025 Developer Survey: AI](https://survey.stackoverflow.co/2025/ai)

How this book interprets the combined evidence:

- Bounded experiments, familiar-repository studies, surveys, and delivery metrics answer different questions.
- No single percentage represents “AI productivity” across software development.
- Evidence should be dated and revisited because models, agent tools, and user practices change quickly.

## Cautionary Evidence on AI Coding

More recent studies suggest that AI coding tools may produce mixed effects in real-world collaborative software settings, including coordination, review, and maintenance burdens.

Sources:

- [Song, Agarwal, and Wen, The Impact of Generative AI on Collaborative Open-Source Software Development](https://arxiv.org/abs/2410.02091)
- [Xu et al., AI-assisted Programming May Decrease the Productivity of Experienced Developers by Increasing Maintenance Burden](https://arxiv.org/abs/2510.10165)

How this book uses them:

- To support the argument that productivity must be measured at the system level, not just by code output.
- To explain why verification, architecture, trust, and maintainability become more important when generation becomes cheaper.

## Software Quality, Maintenance, and Technical Debt

The draft uses evidence on software quality, maintenance, technical debt, and poor software quality costs to show that the cost of software does not end when the first version is written.

Sources:

- [Consortium for Information & Software Quality, The Cost of Poor Software Quality in the US: A 2022 Report](https://www.it-cisq.org/the-cost-of-poor-software-quality-in-the-us-a-2022-report.htm)
- [McKinsey, Tech debt: Reclaiming tech equity](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity)

How this book uses them:

- To support the claim that software cost continues after initial development.
- To explain why AI-generated code is not automatically cheap if it creates quality, security, or maintenance burdens.
- To frame legacy modernisation as capital preservation, not merely old-code cleanup.

## Capital Allocation

The book treats major AI infrastructure investment as evidence of belief rather than proof of success. Large capital commitments by AI labs, cloud providers, chip companies, and platform firms show what informed actors consider worth betting on.

Sources for this theme should include annual reports, earnings calls, investor presentations, capital-expenditure announcements, and infrastructure disclosures from companies such as Microsoft, Alphabet, Amazon, Meta, NVIDIA, OpenAI, Anthropic, and xAI. The specific figures will need updating close to publication because AI capital expenditure is changing quickly.

How this book uses it:

- To support the method: technology predicts what is possible; capital predicts what is probable.
- To frame frontier models, GPUs, data centres, inference, and enterprise AI as economic systems.

Important caveat:

Capital expenditure is not proof that the investment will pay off. It is evidence that major firms believe the expected returns justify the risk.

## Enterprise AI ROI

The strongest current evidence for Enterprise AI ROI is project-based rather than enterprise-wide. This book therefore treats enterprise-wide intelligence layers as a hypothesis built from narrower use cases, not as a proven universal outcome.

How this book uses current evidence:

- Software-development assistants, customer-support automation, legal review, document analysis, and internal search can each be analysed as separate business cases.
- If many separate use cases require the same retrieval, governance, permissions, evaluation, and orchestration infrastructure, a shared Enterprise Intelligence Layer may emerge economically.
- The book's stronger claim is incremental: small ROI cases can accumulate into shared infrastructure. The weaker claim would be pretending that every company can already prove enterprise-wide transformation in advance.

## Claims Discipline

This book should continue to distinguish three levels of claim:

```text
What we know
= supported by current evidence.

What we infer
= a reasonable interpretation of evidence and trends.

What we do not yet know
= important uncertainty.
```

That distinction is essential. The book's strongest position is not that it can predict the future perfectly. Its strongest position is that it gives readers a framework for understanding why AI may transform software development if the economics become too compelling to ignore.
