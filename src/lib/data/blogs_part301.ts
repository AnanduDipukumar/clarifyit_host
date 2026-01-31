import { BlogPost } from "../blogs";

export const BLOGS_PART_301: BlogPost[] = [
    {
        slug: "stock-market-limit-order-ipo",
        title: "Buying a Piece of the Pie: The Stock Market",
        description: "It is not a casino. It is a time machine. It allows companies to borrow money from the future to build things today. How the NYSE actually works.",
        category: "Economics",
        publishedAt: "2027-12-05",
        imageUrl: "/images/stock-exchange-floor.png",
        tags: ["Economics", "Finance", "Ultimate Guide"],
        content: `
## Introduction: The Dutch East India Company
In 1602, the VOC wanted to send ships to Indonesia.
Ships are expensive. If one sinks, you lose everything.
So they invented **Shares**.
6000 citizens bought a piece of the risk. If the ship returned, they split the profit (Dividend).
This was the first IPO.

## 1. The Primary Market (IPO)
When a company uses the market to raise money, it does an **Initial Public Offering**.
It hires Goldman Sachs (Underwriter) to sell 10% of the company to investors.
The company gets the cash ($100 Million). The Investors get the stock.
**Crucial:** Once the IPO is over, the company stops making money from the stock price.

## 2. The Secondary Market (The Exchange)
When you buy Apple stock on Robinhood, you aren't buying it from Apple.
You are buying it from a guy named Dave in Ohio.
The NASDAQ is just a matching engine.
*   **Bid:** "I will buy for $100."
*   **Ask:** "I will sell for $101."
*   **Spread:** The $1 difference (Market Makers eat this).
When Bid meets Ask ($100.50), a trade happens.

## 3. Why does the price move?
In theory: It moves based on **Earnings**.
If Apple sells more phones -> more profit -> higher dividends -> stock goes up.
In reality: It moves based on **Psychology**.
If people *think* Apple will sell more phones, they buy *now* to get ahead.
This speculation creates Bubbles (1929, 2000, 2008).

## 4. The Index (S&P 500)
Picking stocks is gambling.
Buying everything is investing.
The S&P 500 is a basket of the 500 biggest US companies.
Historically, it returns **10% per year**.
It is the wealth-generating engine of the middle class.
Einstein called Compound Interest the "Eighth Wonder of the World".

> **One-Minute Summary**
>
> The **Stock Market** allows companies to raise capital via **IPOs** (Primary Market). Afterwards, investors trade ownership stakes on exchanges like the **NYSE** (Secondary Market). Prices are determined by the laws of Supply and Demand, driven by both fundamental earnings and human psychology. The safest strategy is typically purchasing an **Index Fund** to own the entire market.
        `,
    },
    {
        slug: "insurance-risk-pooling-actuarial",
        title: "Betting Against Yourself: How Insurance Works",
        description: "You pay them money. You hope you never need to ask for it back. They hope the same. The mathematical genius of Risk Pooling.",
        category: "Economics",
        publishedAt: "2027-12-06",
        imageUrl: "/images/insurance-umbrella.png",
        tags: ["Economics", "Finance", "Math", "Ultimate Guide"],
        content: `
## Introduction: The Ship Captains
In ancient Babylon, merchants paid a lender a small fee.
If their ship sank, the loan was forgiven.
If it arrived safe, the lender kept the fee.
This is **Risk Transfer**.
You are paying a small known cost (Premium) to avoid a catastrophic unknown cost (Bankruptcy).

## 1. The Law of Large Numbers
Can you predict if *your* house will burn down? No.
Can you predict how many houses in New York will burn down this year? **Yes.**
With almost perfect accuracy.
Insurers use **Actuarial Science**.
They know that 1 in 1000 houses burns.
So they collect $1000 from 1000 people ($1 Million).
One house burns ($500k).
They pay the victim. They keep the other $500k.
Profit.

## 2. Adverse Selection
The problem: Who wants health insurance the most? Sick people.
Who wants it the least? Healthy people.
If only sick people buy insurance, the premiums skyrocket (Death Spiral).
**The Fix:** Mandates (Obamacare) or Group Pools (Employer insurance).
You force the healthy people into the pool to subsidize the sick people.

## 3. Moral Hazard
If your car is insured, you might drive faster.
If your bank is insured (Bailout), it might make riskier bets.
This is Moral Hazard.
Insurers fight this with **Deductibles**.
"You pay the first $1000."
This forces you to have "Skin in the game".

## 4. Reinsurance
Who insures the insurance company?
What if a Hurricane hits Florida and destroys *all* the houses at once?
State Farm would go bankrupt.
So they buy **Reinsurance** (Swiss Re, Munich Re).
These are massive global banks that insure the insurers against "Black Swan" events.

> **One-Minute Summary**
>
> **Insurance** relies on **Risk Pooling**. By collecting premiums from many, the insurer can pay for the few who suffer losses, leveraging the **Law of Large Numbers** to predict payouts. To function, they must manage **Adverse Selection** (only bad risks joining) and **Moral Hazard** (reckless behavior due to safety nets), often using deductibles and **Reinsurance** to stay solvent.
        `,
    },
    {
        slug: "credit-score-fico-algorithm",
        title: "The Number That defines You: Credit Scores",
        description: "It decides if you get a house, a car, or even a job. But what is FICO measuring? It measures how profitable you are to a bank.",
        category: "Economics",
        publishedAt: "2027-12-07",
        imageUrl: "/images/credit-score-meter.png",
        tags: ["Economics", "Finance", "Life", "Ultimate Guide"],
        content: `
## Introduction: Character, Capacity, Capital
Before 1956, to get a loan, you talked to a bank manager.
He looked you in the eye. "You seem like a good man."
This was subjective (and racist).
Bill Fair and Earl Isaac (FICO) wanted to use **Math**.
They analyzed millions of loans to see which variables predicted default.

## 1. The Algorithm (FICO)
Your score is 300-850.
*   **35% Payment History:** Did you pay on time?
*   **30% Utilization:** Are you maxing out your cards? (0% is bad. 100% is bad. 1-10% is perfect).
*   **15% Length of History:** Don't close your old cards.
*   **10% New Credit:** Don't apply for 10 cards at once.
*   **10% Mix:** Do you have a Mortgage + Car + Card?

## 2. The Trap
A Credit Score does NOT measure wealth.
A billionaire who pays cash for everything has **No Credit Score**.
A score measures **how good you are at borrowing money**.
Banks love people who carry a balance (Interest) but pay it off eventually.
"Deadbeats" are people who pay their full balance every month (Banks make $0 off them).

## 3. The Consequences
China's **Social Credit System** is the dystopian evolution.
FICO tracks money.
China tracks behavior (Jaywalking, buying alcohol, posting online).
If your score drops, you can't buy a train ticket.
In the West, we "only" use it for loans... and rent... and insurance... and employment background checks.
We are closer than we think.

> **One-Minute Summary**
>
> Your **Credit Score (FICO)** is a statistical probability of whether you will repay a loan 90 days late. It heavily weighs **Payment History** and **Credit Utilization**. It was created to remove bias from lending, but has evolved into a quasi-reputation score that affects housing, employment, and insurance rates, despite not actually measuring your wealth or income.
        `,
    },
    {
        slug: "venture-capital-startup-funding",
        title: "Unicorn Hunters: Venture Capital",
        description: "They invest in 100 companies. 90 go bankrupt. 9 survive. 1 becomes Google. The Power Law of VC.",
        category: "Economics",
        publishedAt: "2027-12-08",
        imageUrl: "/images/venture-capital-deal.png",
        tags: ["Economics", "Business", "Startup", "Ultimate Guide"],
        content: `
## Introduction: High Risk, High Reward
Banks lend money to Pizza Shops.
Safe business. Low return (6% interest).
Venture Capitalists (VCs) lend money to "Crazy Ideas" (Uber, Airbnb).
Risky business. Infinite return (10,000x).

## 1. The Power Law
In normal life, things follow a Bell Curve (Height, IQ).
In VC, things follow a **Power Law**.
The best investment returns more than *all other investments combined*.
Example: **Benchmark Capital** put $6.7M into eBay. It turned into $5 Billion.
That one deal paid for every failure they ever made.
Strategy: Swing for the fences.
"If this company works, will it be worth a Billion dollars?"
If the answer is "No", they don't invest. Even if it's a good business.

## 2. The Series (Seed to IPO)
*   **Pre-Seed:** "I have a PowerPoint." ($500k).
*   **Seed:** "I have a product and 10 users." ($2M).
*   **Series A:** "I have Product-Market Fit." ($10M).
*   **Series B/C/D:** "Scale! Grow! Ads!" ($50M+).
*   **Exit:** IPO (Stock Market) or Acquisition (Google buys you).
If you don't Exit, the VCs get $0.

## 3. Dilution
The Founder starts with 100% of the pie.
Every round, he sells 20% of the company for cash.
By the IPO, the Founder might own only 10%.
But 10% of a $10 Billion company > 100% of a Pizza Shop.
"Better to be a small slice of a big pie."

> **One-Minute Summary**
>
> **Venture Capital** funds high-growth startups that are too risky for banks. They operate on the **Power Law**, relying on one massive "Home Run" (Unicorn) to offset dozens of failures. Startups go through funding rounds (Seed, Series A, B, C), trading **Equity** (ownership) for cash, often aiming for an **Exit** via IPO or Acquisition within 7-10 years.
        `,
    },
    {
        slug: "mortgage-amortization-30-year-fixed",
        title: "The American Dream: The 30-Year Mortgage",
        description: "In most countries, interest rates float. If rates go up, you lose your house. In the US, the government guarantees a Fixed Rate. It is a financial anomaly.",
        category: "Economics",
        publishedAt: "2027-12-09",
        imageUrl: "/images/mortgage-house.png",
        tags: ["Economics", "Finance", "Housing", "Ultimate Guide"],
        content: `
## Introduction: The Great Depression
In 1930, mortgages were 5 years long.
You paid interest only. Then a "Balloon Payment" (Full amount) at the end.
Nobody could pay it. Millions lost their homes.
FDR created the **FHA**.
They invented the **30-Year Fixed Rate Mortgage**.
Small monthly payments. Fully Amortized (Paid off at the end).
It created the Middle Class suburbs.

## 1. Amortization (The Kill)
"Mort" means Death. "Gage" means Pledge.
"The Death Pledge".
Look at your first payment.
Payment: $2000.
Interest: $1800.
Principal: $200.
You are paying almost entirely interest compared to equity.
Only in Year 15 does the curve flip.
If you pay an extra $100 towards Principal in Month 1... you save $500 in interest later.

## 2. Securitization (MBS)
Banks don't keep your loan.
They bundle 1000 loans together into a **Mortgage Backed Security (MBS)**.
They sell this bond to investors (Pension Funds, China).
This frees up cash for the bank to lend again.
This system works great... until banks start bundling "Subprime" loans (people who can't pay) and lying about it.
That was 2008.

## 3. The US Anomaly
In the UK or Canada, your rate resets every 5 years.
If rates jump from 3% to 7%, your payment doubles.
In the US, you lock 3% for 30 years.
Even if inflation hits 10%, your payment stays flat.
Inflation *erodes* your debt.
The 30-Year Fixed Mortgage is the best inflation hedge available to normal people.
It is a government-subsidized wealth transfer to homeowners.

> **One-Minute Summary**
>
> The **30-Year Fixed Mortgage** is a US financial innovation designed to stabilize housing. It relies on **Amortization**, where early payments are mostly interest. Banks liquidate risk by bundling loans into **MBS** (Securities) and selling them. For the borrower, it is a powerful hedge against inflation, locking in a housing cost for decades while wages (hopefully) rise.
        `,
    },
];
