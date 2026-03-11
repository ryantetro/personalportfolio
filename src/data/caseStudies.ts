import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'student-athlete',
    category: 'Student Athlete',
    title: '5 National Championships in 5 Years',
    kicker: '5X titles',
    subtitle: 'Winning taught me the standards, discipline, and pressure tolerance I now bring to startups and engineering.',
    description: 'Five straight BYU soccer national championships shaped how I train, lead, and execute when the stakes are high.',
    summary: 'I spent five years as a BYU student athlete and was part of a team that won five consecutive national championships from 2021 to 2025. That run, plus coming back from an ACL tear, shaped how I think about standards, resilience, and high-performance environments.',
    readingTime: '4 min read',
    highlight: '5 straight titles from 2021 to 2025, plus an ACL comeback',
    tags: ['BYU Soccer', 'Leadership', 'Discipline', 'Resilience'],
    facts: [
      { label: 'Team', value: 'BYU Soccer' },
      { label: 'Run', value: '2021-2025' },
      { label: 'Titles', value: '5 straight national championships' },
      { label: 'ACL rehab', value: 'Roughly 9 months back to competition' },
    ],
    callouts: [
      { label: 'Lesson #1', text: 'Standards beat motivation' },
      { label: 'Lesson #2', text: 'Systems beat adrenaline' },
      { label: 'Lesson #3', text: 'Resilience compounds over time' },
    ],
    imageSlots: [
      {
        title: 'Championship Team Photo',
        caption: 'Championship team photo from the title run. This is the environment that shaped how I think about standards, accountability, and team performance.',
        layout: 'wide',
        src: '/case-studies/championship-team-photo.png',
        alt: 'BYU soccer team posing with the NIRSA Championship Series trophy',
      },
      {
        title: 'Locked In',
        caption: 'A quieter game-night moment. The standards, discipline, and patience behind the comeback mattered just as much as the visible result.',
        layout: 'square',
        src: '/case-studies/student-athlete-portrait.jpeg',
        alt: 'Ryan Tetro in BYU soccer kit during a match',
      },
      {
        title: 'Return To Play',
        caption: 'Back on the field competing again. This is the part of the story where the rehab work turns back into performance.',
        layout: 'square',
        src: '/case-studies/student-athlete-action.jpeg',
        alt: 'Ryan Tetro striking the ball during a BYU soccer match',
      },
    ],
    content: `I spent five years as a BYU student athlete and was part of a team that won **five consecutive national championships from 2021 to 2025**.

From the outside, that kind of run looks like momentum or talent.

From the inside, it looks like **standards**.

Championship teams are not built in big moments. They are built in the normal ones, the daily sessions that nobody watches.

Every season had the same rhythm:

- showing up ready to train every day
- executing the small details repeatedly
- holding each other accountable
- trusting the system when things got difficult

The trophies came later. The work came first.

## What people do not see

When people hear "five national championships," they imagine the highlight moments.

The celebrations. The photos. The final whistle.

What they usually do not see is how **steady elite teams actually are**.

The best teams are not emotional all the time. They are disciplined.

They know what good looks like. They know the standard. And when pressure shows up, they do not improvise a response. They fall back on preparation.

That environment shaped how I think about performance in every part of my life.

Whether it is solving a hard engineering problem, shipping a product, or working through a difficult deadline, I do not want to rely on adrenaline. I want to rely on **process and preparation**.

## The ACL setback

In the middle of my college career, I tore my ACL.

Anyone who has been through that injury knows it changes everything.

For months, your life revolves around recovery:

- rebuilding strength
- retraining balance and stability
- slowly regaining confidence in movement

The recovery process took close to nine months, and during that time I became deeply focused on performance data and training technology.

I used tools like:

- wearable metrics to track fatigue and heart data
- force plates to measure leg strength and balance
- rehab protocols designed to safely return athletes to play

It was not just about getting back on the field. It was about doing it the **right way**.

That process taught me patience and discipline in a way nothing else had. You do not rush recovery. You build it one day at a time, and eventually the work compounds.

When I returned, I was able to rejoin the team and continue competing at a championship level.

## Winning changed how I work

Being part of a championship environment makes certain things obvious.

Weak habits are obvious. Excuses are obvious. The gap between talking and executing is obvious.

That experience made me value:

- **direct communication**
- **consistent execution**
- **ownership of outcomes**

The best players I have been around were not just talented. They made everyone else better.

They kept the standard high. They communicated clearly. They cared about the result more than credit.

That mindset carries directly into how I build products and work on teams. I care about the **entire system**, not just my piece of it.

## What I still carry with me

Even though I have moved deeper into startups, engineering, and building products, the athlete mindset has not left.

I still think in terms of scoreboards, repetition, preparation, and performance under pressure.

Sports gave me something incredibly valuable: a real understanding of what **high-performing environments feel like**.

Five championships gave me great memories. But the more valuable thing was the **operating system behind them**.

That is the system I bring with me into startups, engineering teams, and every project I work on.`,
  },
  {
    id: 2,
    slug: 'founder-in-college',
    category: 'Founder in College',
    title: 'I Started PostGame AI While I Was Still in College',
    kicker: '0 to 1',
    subtitle: 'School, Sandbox, and real coaches forced me to stop theorizing and build something useful.',
    description: 'PostGame AI came from seeing a real pain point up close and deciding to build around the workflow coaches already had.',
    summary: 'I started PostGame AI while finishing school at BYU and going through the Sandbox Fellowship. The company started with a simple observation: coaches already give useful feedback, but the way that feedback gets captured and used is broken.',
    readingTime: '5 min read',
    highlight: 'Built while finishing BYU and working through Sandbox',
    tags: ['PostGame AI', 'BYU Sandbox', 'Zero to One', 'Founder'],
    facts: [
      { label: 'Company', value: 'PostGame AI' },
      { label: 'Context', value: 'Built while at BYU' },
      { label: 'Program', value: 'Sandbox Fellowship' },
      { label: 'Trigger', value: 'Coach feedback workflow problem' },
    ],
    callouts: [
      { label: 'Lesson #1', text: 'Reality beats theory' },
      { label: 'Lesson #2', text: 'Ugly first versions win' },
      { label: 'Lesson #3', text: 'Constraints create focus' },
    ],
    imageSlots: [
      {
        title: 'Early Product Mockup',
        caption: 'Placeholder for an early PostGame AI screen, whiteboard sketch, or first prototype.',
        layout: 'wide',
      },
      {
        title: 'Coach Feedback Workflow',
        caption: 'Placeholder for coach interview notes, audio-to-summary flow, or a product process diagram.',
        layout: 'square',
      },
      {
        title: 'BYU / Sandbox Founder Moment',
        caption: 'Placeholder for a founder photo, Sandbox presentation, or campus work session image.',
        layout: 'square',
      },
    ],
    content: `PostGame AI did not start from a trend deck or a vague ambition to "build something in sports tech."

It started from a workflow that was obviously broken.

Coaches already give meaningful feedback all the time. They notice details in the moment. They say useful things out loud. But turning that into something athletes can actually revisit later is slow, messy, and inconsistent. That gap stuck with me because it was real and easy to understand.

So the question became simple: what if the product started with how coaches already work instead of asking them to adopt a completely new behavior?

## The first version did not need to be impressive

One of the best things about building in college is that you do not have the luxury to overthink forever.

I was finishing school at BYU, working, and trying to build at the same time. There was no space for fake productivity. If I was going to spend time on something, it had to get me closer to a real product.

That pressure was useful. It pushed me toward the ugliest honest version first.

I did not need a perfect system. I needed to know whether coaches actually wanted the workflow. Could they send quick audio feedback? Would athletes use structured summaries? Would the product save time in a way people could feel immediately?

Those questions mattered more than polish.

## Sandbox changed the pace

BYU Sandbox gave me accountability at the right time.

It is easy to sit on an idea when nobody is expecting progress from you. Sandbox made that harder in a good way. It pushed me to keep moving, talk to users, and show evidence instead of theories.

That environment changed how I think about startups. A startup is not just an idea you are excited about. It is a loop:

- notice something real
- build a version people can react to
- listen carefully
- tighten the product around what actually matters

That sounds obvious, but it is surprisingly easy to avoid when you enjoy building.

## College made me more practical

A lot of people talk about time management like it is some clean system.

It is not.

When you are in school and building a company, you are constantly deciding what deserves your energy. That constraint made me much more practical. I learned to ask better questions:

- Is this solving a real pain point?
- Is this the part users actually care about?
- Am I building something useful or just something interesting?

That mindset still shapes how I work. I would rather ship something focused that solves a true problem than build a technically impressive product that nobody needs.

## What I took from it

Starting PostGame AI in college made me more action-oriented and less precious.

It taught me that real products come from proximity to the user, not from cleverness. It taught me that early feedback is worth more than private perfection. And it taught me that constraints can make you sharper if you let them.

That is probably the biggest thing I carry from that season: build around reality, not around your own imagination of what sounds impressive.`,
  },
  {
    id: 3,
    slug: 'ai-in-everything-i-do',
    category: 'AI Operator',
    title: 'AI Is My Default Way of Working',
    kicker: 'AI x work',
    subtitle: 'I use Claude, Codex, Cursor, and Gemini across coding, research, writing, and startup execution because AI is the next major shift.',
    description: 'I treat AI as an operating layer across engineering, learning, and company building, not as a gimmick or a side tool.',
    summary: 'I use AI in everything I do because I think it is the biggest shift in how ambitious people will learn, build, and operate. For me, AI is not just about speed. It is about leverage, iteration, and better decision-making.',
    readingTime: '5 min read',
    highlight: 'Claude, Codex, Cursor, and Gemini are part of my daily workflow',
    tags: ['Claude', 'Codex', 'Cursor', 'Gemini'],
    facts: [
      { label: 'Core tools', value: 'Claude, Codex, Cursor, Gemini' },
      { label: 'Use cases', value: 'Coding, research, writing, startup ops' },
      { label: 'Belief', value: 'AI is the next major platform shift' },
      { label: 'Approach', value: 'Use the best tool for the task' },
    ],
    callouts: [
      { label: 'Lesson #1', text: 'Use the best tool for the task' },
      { label: 'Lesson #2', text: 'AI sharpens judgment, it does not replace it' },
      { label: 'Lesson #3', text: 'Shorter loops create real leverage' },
    ],
    imageSlots: [
      {
        title: 'AI Workspace / Tool Stack',
        caption: 'Placeholder for a desk setup, multi-window workflow, or AI tooling collage showing Claude, Codex, Cursor, and Gemini.',
        layout: 'wide',
      },
      {
        title: 'Coding With AI',
        caption: 'Placeholder for an editor screenshot, terminal session, or code review workflow assisted by AI.',
        layout: 'square',
      },
      {
        title: 'Research / Writing Workflow',
        caption: 'Placeholder for notes, prompt drafts, or a side-by-side research and writing process image.',
        layout: 'square',
      },
    ],
    content: `I use AI in everything I do.

That sentence sounds trendy right now, but for me it is not a branding thing. It is just how I work.

The more time I spent with these tools, the more obvious it became that AI is not a side feature. It is a new layer for thinking, building, and operating. I think it will change how the best people work across almost every field, and I want to be fully inside that shift rather than watching it happen from the outside.

## I do not use one tool for everything

I have tried all of them. Claude. Codex. Cursor. Gemini.

I do not care about picking a winner and treating it like a religion. I care about leverage.

Different tools are good at different things. Claude is great for reasoning through product decisions, writing, and framing ideas. Codex is strong when I want to work directly in a codebase and push execution forward. Cursor helps me move faster while I am actually building. Gemini gives me another model perspective when I want comparison, synthesis, or a different line of thinking.

That is how I think about AI now: not as one assistant, but as a system of tools that helps me reduce friction across the work itself.

## Where AI actually helps me

The best AI use cases are usually not flashy. They are practical.

I use AI across:

- coding and debugging
- architectural tradeoffs
- product copy and writing
- research and synthesis
- startup ideas and market thinking
- turning rough thoughts into something structured faster

What matters is not whether the output feels magical. What matters is whether it shortens the loop between idea and execution.

That is the real advantage. I can explore more options, pressure-test more decisions, and move faster without lowering my standards.

## What people get wrong

A lot of people use AI like a shortcut to avoid thinking. I think that is exactly backwards.

AI is most valuable when it sits inside real work and sharpens your judgment, not when it replaces it. Taste still matters. Truth still matters. Product sense still matters. You still need to know what good looks like.

If anything, AI makes judgment more important because it gives you so many more options. The bottleneck becomes discernment.

## Why this matters to me

I care a lot about speed, but not speed for its own sake.

I care about learning faster. Building faster. Testing ideas faster. Getting to the truth faster.

That is why AI is part of my default workflow now. It helps me move across engineering, research, product, and startup work with less drag. It makes me more effective. And I think the people who learn to work this way early will have a very real advantage over the next few years.

So when I say I use AI in everything I do, I mean it literally. It is not the whole job. But it is increasingly part of every serious job I do.`,
  },
];
