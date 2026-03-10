export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-ai-products-that-people-actually-use',
    title: 'Building AI Products That People Actually Use',
    excerpt: 'Most AI products fail not because the technology is wrong, but because the product is. Here\'s what I\'ve learned shipping AI features to real users at PostGame AI and Soar.',
    category: 'AI & Product',
    date: '2026-02-15',
    readingTime: '6 min read',
    content: `## The AI Product Trap

Most AI products fail not because the model is bad, but because the product is wrong. I've seen this firsthand — both in my own work and watching dozens of startups at Utah Innovation Fund.

The pattern is always the same: a team builds something technically impressive, wraps it in a generic chat interface, and wonders why nobody uses it.

## What Actually Works

After shipping AI features at **PostGame AI** and **Soar**, I've landed on a few principles:

### 1. Solve the Workflow, Not the Technology

At PostGame AI, coaches don't care about AI. They care about giving feedback to 20 athletes in 10 minutes instead of 2 hours. The AI is invisible — it transforms a voice memo into structured, actionable insights.

The best AI products feel like **magic shortcuts**, not science projects.

### 2. Start with the Output

Before writing a single prompt, I design the output format. What does the user actually need to see? At Soar, our lead generation tool doesn't show raw embeddings or similarity scores. It shows a ranked list of companies with one-line explanations of why they match.

### 3. Build for Trust, Then Speed

Users need to trust AI output before they'll rely on it. We added confidence indicators and source attribution at Soar. Usage went up 3x after that single change.

## The Technical Stack That Scales

For AI products, I've settled on a stack that lets me iterate fast:

\`\`\`
Next.js + Supabase + OpenAI API + Pinecone
\`\`\`

The key insight: **use vector databases early**. Even if you start with simple prompts, having embeddings infrastructure means you can add semantic search, recommendations, and personalization without rebuilding.

## Ship Fast, Measure Everything

The biggest lesson: ship the simplest version that delivers value, then instrument everything. At PostGame AI, our first version was embarrassingly simple — a single audio upload that returned a text summary. But coaches loved it because it saved them real time.

Build for the outcome, not the demo.`,
  },
  {
    slug: 'architecture-decisions-i-got-wrong',
    title: 'Architecture Decisions I Got Wrong (And What I\'d Do Differently)',
    excerpt: 'Honest reflections on technical choices that seemed smart at the time but cost me weeks. From over-engineering auth to premature database optimization.',
    category: 'Engineering',
    date: '2026-01-20',
    readingTime: '8 min read',
    content: `## The Cost of Being "Right"

As engineers, we love making the "correct" architectural choice. But I've learned that the correct choice and the right choice are often different — especially at startup speed.

Here are the decisions I got wrong and what I'd do differently.

## Mistake 1: Custom Auth Instead of Supabase Auth

On an early project, I built custom JWT authentication from scratch. Password hashing with bcrypt, refresh token rotation, email verification flows — the works.

It took two weeks. Supabase Auth would have taken two hours.

**The lesson:** Don't build infrastructure that isn't your product. Auth, payments, email — use managed services until you have a specific reason not to.

## Mistake 2: Premature Database Optimization

At Soar, I spent a week optimizing database queries before we had more than 100 users. I added indexes, denormalized tables, and set up read replicas.

None of it mattered until we hit 10,000 users six months later — and by then, the usage patterns had changed so much that half my optimizations were wrong anyway.

**The lesson:** Optimize when you have real data about real bottlenecks. Not before.

## Mistake 3: Microservices at Day One

For a side project, I split the backend into four microservices because "that's how you scale." What I got was four things to deploy, four sets of logs to monitor, and network calls where function calls would have worked.

**The lesson:** Start with a monolith. Split when you feel the pain, not before. A well-structured monolith can handle more than most startups will ever need.

## What I Do Now

My current approach is boring and it works:

- **Monorepo with Next.js** — API routes for the backend until it hurts
- **Supabase for auth + database** — PostgreSQL with Row Level Security
- **Vercel for deployment** — Zero-config, automatic previews
- **OpenAI for AI features** — Don't train models, use APIs

The pattern: **use the most boring technology that solves your problem**. Save your creativity for the product, not the infrastructure.

## The Meta-Lesson

Every wrong decision had the same root cause: I was optimizing for a future that hadn't arrived yet. The best architecture is the one that lets you ship today and change tomorrow.`,
  },
  {
    slug: 'lessons-from-founding-a-startup-in-college',
    title: 'What I Learned Founding a Startup in College',
    excerpt: 'From BYU\'s Sandbox Fellowship to launching PostGame AI — the unfiltered truth about building a company while getting a master\'s degree.',
    category: 'Startups',
    date: '2025-12-08',
    readingTime: '7 min read',
    content: `## The Sandbox Effect

BYU's Sandbox Fellowship changed how I think about building companies. Not because of the curriculum — but because it forced me to ship something real while surrounded by people doing the same.

The fellowship gives you a small stipend, mentors, and a cohort of other student founders. But the real value is the **accountability to ship**.

## Starting PostGame AI

PostGame AI started from a simple observation: my soccer coaches spent hours writing feedback that athletes barely read. What if a coach could just talk for 30 seconds and AI could do the rest?

The first version was a React app with an audio recorder and an OpenAI API call. I built it in a weekend. The architecture was terrible — no queue, no error handling, everything synchronous.

But coaches tried it. And they loved it.

## The Hard Parts Nobody Talks About

### Time Management is a Lie

You can't "manage" time when you're taking 15 credits, working part-time at Soar, and building a startup. You can only **choose what to sacrifice**. For me, that meant:

- No social media
- Saying no to most social events
- Sleeping less than I should have

I don't recommend this approach, but I'm being honest about what it actually takes.

### Your First Users Don't Care About Your Tech Stack

When I pitched PostGame AI to coaches, not a single one asked what framework I used. They asked: "Can it handle a noisy gym?" and "Will it work on my phone?"

Build for your user's questions, not for Hacker News.

### Co-founders vs. Solo

I chose to start solo, which meant I could move fast but also meant every decision was mine. The loneliest part of founding isn't the late nights — it's having nobody to sanity-check your ideas at 2 AM.

## What I'd Tell My Past Self

**Ship the ugly version.** My instinct was always to polish before showing anyone. The features I was embarrassed to ship got the most useful feedback.

**Talk to users before writing code.** I spent two weeks building a "team analytics dashboard" that exactly zero coaches wanted. They wanted individual player summaries. I would have known this from one conversation.

**Your degree and your startup aren't competing.** The coursework in data engineering and machine learning directly improved PostGame AI. The startup gave context to my classes. They're complementary.

## Where Things Stand

PostGame AI now has paying coaches, a mobile-friendly platform, and AI that actually works in noisy environments. It's not a unicorn — it's a real product solving a real problem for real people.

And that's exactly what I set out to build.`,
  },
];
