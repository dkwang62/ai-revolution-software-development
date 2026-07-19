---
title: "Bibliography and Evidence Notes"
---

# Bibliography and Evidence Notes

This is an explanatory book rather than an academic textbook, but its factual claims still require traceable evidence. These notes identify the principal sources, the claims they support, and the limits of the evidence. Unless another date is given, mutable web sources were checked on **19 July 2026**.

## Software labour and the human-expertise bottleneck

- U.S. Bureau of Labor Statistics. [“Software Developers, Quality Assurance Analysts, and Testers.”](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) *Occupational Outlook Handbook*, 2024 employment and wage estimates; 2024–2034 projections.

Used in “The Economics of Software Development” and “The Future of Programmers” for the combined occupation group's 1.8955 million jobs in 2024, \$131,450 median annual pay, approximately 129,200 projected openings per year, and 15% projected employment growth. These are U.S. occupational statistics, not a global estimate and not a forecast of AI's isolated effect.

## Generative-AI economic potential

- McKinsey Global Institute. [“The Economic Potential of Generative AI: The Next Productivity Frontier.”](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier) 14 June 2023.

Used in “The Enterprise Intelligence Layer” for the estimate that generative AI could add US\$2.6 trillion to US\$4.4 trillion annually across 63 use cases. The figure is modelled potential, not realised enterprise profit or audited return on investment.

## AI-assisted developer productivity

- Peng, Sida, et al. [“The Impact of AI on Developer Productivity: Evidence from GitHub Copilot.”](https://arxiv.org/abs/2302.06590) arXiv preprint, 2023.
- GitHub. [“Research: Quantifying GitHub Copilot's Impact on Developer Productivity and Happiness.”](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/) 7 September 2022.
- Cui, Zheyuan (Kevin), et al. [“The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers.”](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) Preprint, June 2025.
- METR. [“Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.”](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) 10 July 2025.
- METR. [“We Are Changing Our Developer Productivity Experiment Design.”](https://metr.org/blog/2026-02-24-uplift-update/) 24 February 2026.
- DORA. [*2024 Accelerate State of DevOps Report*.](https://dora.dev/research/2024/dora-report/) 2024.
- DORA. [*State of AI-Assisted Software Development 2025*.](https://dora.dev/research/2025/dora-report/) 2025, corrected version 2025.2.
- DORA. [“Balancing AI Tensions: Moving from AI Adoption to Effective SDLC Use.”](https://dora.dev/insights/balancing-ai-tensions/) 10 March 2026.
- Stack Overflow. [*2025 Developer Survey: AI*.](https://survey.stackoverflow.co/2025/ai) 2025.

The Peng experiment supports the 55.8% improvement reported for one bounded JavaScript task. The Cui preprint combines three randomized field experiments involving 4,867 developers and estimates 26.08% more completed tasks, while noting that each individual experiment was noisy. METR's early-2025 study found a 19% slowdown among 16 experienced developers working in familiar open-source repositories. METR's 2026 update suggested later tools may have improved but judged the magnitude unreliable because of selection and measurement problems.

DORA measures organisational delivery rather than one programming task. Its 2024 report associated greater AI adoption with individual benefits but reduced throughput and stability. Its 2025 work found higher throughput alongside continued instability. Stack Overflow supplies perception and frustration data, not controlled productivity measurement.

These studies answer different questions. The book does not combine them into a universal “AI productivity” percentage.

## Additional cautionary research

- Song, Yang, Shuyang Agarwal, and Wen Wen. [“The Impact of Generative AI on Collaborative Open-Source Software Development.”](https://arxiv.org/abs/2410.02091) arXiv preprint, 2024.
- Xu, Frank F., et al. [“AI-Assisted Programming May Decrease the Productivity of Experienced Developers by Increasing Maintenance Burden.”](https://arxiv.org/abs/2510.10165) arXiv preprint, 2025.

These working papers support the narrower claim that collaboration, review, and maintenance can absorb gains visible during initial generation. Their preprint status is explicit because the findings should not be treated as settled consensus.

## Evaluation, verification, and agent risk

- National Institute of Standards and Technology. [*Artificial Intelligence Risk Management Framework (AI RMF 1.0)*.](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10) NIST AI 100-1, 26 January 2023.
- NIST AI Resource Center. [“Valid and Reliable.”](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/) Accessed 19 July 2026.
- OpenAI. [“Evaluation Best Practices.”](https://platform.openai.com/docs/guides/evals) Accessed 19 July 2026.
- Google Cloud. [“Evaluate Generative AI Models and Applications.”](https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview) Accessed 19 July 2026.
- OWASP GenAI Security Project. [“LLM05:2025 Improper Output Handling.”](https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/) Accessed 19 July 2026.
- OWASP GenAI Security Project. [“LLM06:2025 Excessive Agency.”](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) Accessed 19 July 2026.

Used in the requirements, precision, trust, and agents chapters. NIST supplies the intended-use meaning of validation; the evaluation guides supply practical measurement methods; OWASP supports the distinction between model capability and the permissions, functionality, and autonomy granted by the surrounding system.

## Software quality, maintenance, and technical debt

- Consortium for Information & Software Quality. [*The Cost of Poor Software Quality in the US: A 2022 Report*.](https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/) 2022.
- McKinsey & Company. [“Tech Debt: Reclaiming Tech Equity.”](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity) 6 October 2020.

Used in “The Legacy Problem” for broad estimates of accumulated technical debt. Neither source measures the cost of legacy systems alone, and the book labels the figures accordingly.

## Public-sector legacy systems

- U.S. Government Accountability Office. [*Information Technology: Agencies Need to Continue Addressing Critical Legacy Systems*.](https://www.gao.gov/products/gao-23-106821) GAO-23-106821, 10 May 2023.
- UK Government Digital Service and Central Digital and Data Office. [“Guidance on the Legacy IT Risk Assessment Framework.”](https://www.gov.uk/government/publications/guidance-on-the-legacy-it-risk-assessment-framework) 29 September 2023; updated 13 March 2025.
- UK National Audit Office. [*Government Cyber Resilience*.](https://www.nao.org.uk/reports/government-cyber-resilience/) 29 January 2025.

Used for the age, operating cost, modernisation planning, and remediation status of government legacy systems. The NAO's data cover 228 recorded systems supplied by 27 departments and do not represent every legacy system in central government.

## Legacy integration and modernisation cases

- Google Cloud. [“Hong Leong Bank: Transforming Finance with AI Workloads on Google Cloud.”](https://cloud.google.com/customers/hongleongbank) Accessed 19 July 2026.
- Publicis Sapient. [“Financial Services Legacy Modernization with Slingshot.”](https://www.publicissapient.com/customers/stories/financial-services-slingshot-legacy-modernization) Accessed 19 July 2026.

These vendor-published cases support the architectural examples in “The Legacy Problem”: governed API access to core systems, and AI-assisted recovery of business rules from legacy COBOL. They are evidence that these methods are being offered and reported in practice, not independent proof of general savings.

## Model economics and AI infrastructure

- Epoch AI. [“Trends in Artificial Intelligence.”](https://epoch.ai/trends) Accessed 19 July 2026.
- NVIDIA. [“NVIDIA Announces Financial Results for First Quarter Fiscal 2027.”](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027) 20 May 2026.
- Gartner. [“Gartner Forecasts Worldwide AI Spending to Grow 47% in 2026.”](https://www.gartner.com/en/newsroom/press-releases/2026-05-19-gartner-forecasts-worldwide-ai-spending-to-grow-47-percent-in-2026) 19 May 2026.

Used in “The Economics of Models.” Epoch's figures are modelled estimates, NVIDIA's figures are company financial results, and Gartner's US\$2.59 trillion forecast covers a broad market definition. The book keeps these categories separate.

## Capital allocation as evidence of belief

- Microsoft Corporation. [*2025 Annual Report*.](https://www.microsoft.com/investor/reports/ar25/index.html) Fiscal year ended 30 June 2025.
- Microsoft Corporation. [Form 10-K for the fiscal year ended 30 June 2025.](https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm)
- Alphabet Inc. [Form 10-K for the year ended 31 December 2025.](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)
- NVIDIA. [“NVIDIA Announces Financial Results for First Quarter Fiscal 2027.”](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027) 20 May 2026.

Microsoft states that it will continue investing in capital expenditure for cloud growth, AI infrastructure, and training. Alphabet reported US\$91.4 billion of 2025 capital expenditure, primarily for technical infrastructure, and said it was scaling infrastructure particularly for AI. NVIDIA's data-centre revenue shows demand reaching a major compute supplier.

These disclosures support a limited inference: informed companies are committing substantial capital because they believe the opportunity warrants the risk. Expenditure is evidence of belief, not proof that the investment will earn an adequate return.

## Enterprise AI returns and shared infrastructure

- McKinsey Global Institute. [“The Economic Potential of Generative AI.”](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier) 14 June 2023.
- Cui, Zheyuan (Kevin), et al. [“The Effects of Generative AI on High-Skilled Work.”](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) Preprint, June 2025.
- DORA. [*State of AI-Assisted Software Development 2025*.](https://dora.dev/research/2025/dora-report/) 2025.
- Google Cloud. [“Wayfair Accelerates Developer Velocity and Reduces CI Fix Time with AI on Google Cloud.”](https://cloud.google.com/customers/wayfair-developer) Accessed 19 July 2026.
- Google Cloud. [“FletcherTech Builds AI Foundation for Data-Driven Accuracy and Operational Efficiency.”](https://cloud.google.com/customers/fletchertech) Accessed 19 July 2026.

The strongest evidence remains workflow-specific. The field experiments and DORA research provide broader measurement; the Wayfair and FletcherTech cases provide vendor-reported examples of CI remediation and internal knowledge retrieval. The case figures have not been independently audited for this book.

The “enterprise intelligence layer” remains a hypothesis: if many useful workflows need the same retrieval, permissions, provenance, evaluation, orchestration, and audit infrastructure, organisations may find it economical to build a shared layer. The sources show the component business cases and organisational conditions; they do not prove that every enterprise should build the architecture.

## Claims discipline

The manuscript separates three kinds of statement:

```text
Observed or measured
= supported by a cited source or documented Radix experience.

Inferred
= an interpretation of evidence, economics, or technical direction.

Unknown
= an uncertainty that scenarios or future research must resolve.
```

This distinction is central to the book's argument. AI capability, adoption, cost, and evidence are changing quickly. A finished citation records what supported a claim at publication; it does not make a volatile claim permanent.
