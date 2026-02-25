# ⚖️ Justice Index

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live](https://img.shields.io/badge/Live-justice--index.org-blue)](https://justice-index.org)

**Analyzing racial bias across American institutions — with data.**

🔗 **Live:** [justice-index.org](https://justice-index.org)

---

## The Project

Justice Index is a data journalism project that applies the same question across different American institutions: **do people of different races receive equal treatment?**

Each investigation takes a large public dataset, controls for relevant factors, and measures what remains.

## Investigations

| | Investigation | Question | Data | Findings |
|---|---|---|---|---|
| 🏛️ | **[Same Crime, Different Time](https://samecrimedifferenttime.org)** | Same crime, same sentence? | 1.3M federal cases (USSC) | Black +3.85 months after controls |
| 🚔 | **[Same Stop, Different Outcome](https://samestopdifferentoutcome.org)** | Same stop, same treatment? | 8.6M traffic stops (Stanford OPP) | Search rate disparities + hit rate paradox |
| 🏦 | **[Same Loan, Different Rate](https://sameloandifferentrate.org)** | Same loan, same rate? | 1.9M mortgages (HMDA/CFPB) | Black +7.1bps, Hispanic +9.7bps |

**Story arc:** The project traces a life path through American institutions — from the street, to the courtroom, to the bank — asking at each stage whether race predicts outcome after controlling for relevant factors.

## Tech Stack

- **Frontend:** React / Next.js + Tailwind CSS
- **Analysis:** Python (statsmodels, pandas)
- **Deployment:** Vercel

## Repos

- [`justice-index`](https://github.com/brunobossgang/justice-index) — Same Crime, Different Time
- [`same-stop`](https://github.com/brunobossgang/same-stop) — Same Stop, Different Outcome
- [`same-loan`](https://github.com/brunobossgang/same-loan) — Same Loan, Different Rate
- [`justice-index-hub`](https://github.com/brunobossgang/justice-index-hub) — This repo (hub landing page)

## License

MIT — see [LICENSE](LICENSE).

## Author

**Bruno Beckman** · [justice-index.org](https://justice-index.org)
