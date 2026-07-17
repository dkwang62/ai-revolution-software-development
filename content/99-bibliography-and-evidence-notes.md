---
title: "Bibliography and Evidence Notes"
---

# Bibliography and Evidence Notes

This draft is primarily an explanatory manuscript, not an academic textbook. Still, several of its major claims depend on external evidence. The notes below identify the main sources used in this version and explain how they should be interpreted.

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

## Cautionary Evidence on AI Coding

More recent studies suggest that AI coding tools may produce mixed effects in real-world collaborative software settings, including coordination, review, and maintenance burdens.

Sources:

- [Song, Agarwal, and Wen, The Impact of Generative AI on Collaborative Open-Source Software Development](https://arxiv.org/abs/2410.02091)
- [Xu et al., AI-assisted Programming May Decrease the Productivity of Experienced Developers by Increasing Maintenance Burden](https://arxiv.org/abs/2510.10165)

How this book uses them:

- To support the argument that productivity must be measured at the system level, not just by code output.
- To explain why verification, architecture, trust, and maintainability become more important when generation becomes cheaper.

## Software Quality and Maintenance

The draft uses existing research notes on software quality, maintenance, technical debt, and poor software quality costs. These should be strengthened before publication with final source review and exact citations.

How this book uses them:

- To support the claim that software cost continues after initial development.
- To explain why AI-generated code is not automatically cheap if it creates quality, security, or maintenance burdens.

## Capital Allocation

The book treats major AI infrastructure investment as evidence of belief rather than proof of success. Large capital commitments by AI labs, cloud providers, chip companies, and platform firms show what informed actors consider worth betting on.

How this book uses it:

- To support the method: technology predicts what is possible; capital predicts what is probable.
- To frame frontier models, GPUs, data centres, inference, and enterprise AI as economic systems.

Important caveat:

Capital expenditure is not proof that the investment will pay off. It is evidence that major firms believe the expected returns justify the risk.

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
