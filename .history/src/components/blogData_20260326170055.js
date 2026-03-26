export const blogPosts = [
	{
		id: 1,
		title: 'Why I Built a Health App as a CS Student (And What I Learned)',
		excerpt: 'Building BP Vital taught me more about product development, user empathy, and privacy design than any lecture could. Here\'s the full story of how a real problem led to a real app — validated by a medical specialist.',
		category: 'Product',
		date: 'Apr 8, 2025',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
		content: `When I started building BP Vital, I wasn't trying to create a portfolio piece — I was trying to solve a real problem. People managing blood pressure, especially those recovering from stroke, were struggling to track their readings in a way that was clear, useful, and shareable with their doctor.

I built BP Vital using React Native (Expo) with Node.js on the backend and MongoDB for storage. The core features were simple: log readings, see trends visually, and get personalised summaries. But the part that changed how I think about software was the AI assistant.

I integrated OpenAI's API to generate GP-ready summaries from a user's reading history. Instead of a wall of numbers, the app would produce a concise, readable report the user could bring to their next appointment. That feature alone made the app feel genuinely useful.

**The privacy challenge**

Before I could feel good about shipping this, I had to think seriously about GDPR. Blood pressure data is sensitive health data. That meant designing the system with a privacy-first approach from day one — not as an afterthought. I made sure data stayed scoped to the user, with no unnecessary sharing or third-party analytics.

**The validation that meant most**

I reached out to Dr. Róisín Doogue, a blood pressure specialist, who reviewed the full application. Her feedback was strong and positive, and having a medical professional validate the product gave me confidence that I'd built something genuinely useful — not just technically functional.

**What I took away**

Building BP Vital taught me that the best software comes from deeply understanding the person using it. Features aren't the point — solving the problem is. I now carry this mindset into everything I build, including ClientIn.`,
	},
	{
		id: 2,
		title: 'From Content Agency to SaaS: How MCS Led Me to Build ClientIn',
		excerpt: 'Running MediaConnectStudios taught me something no bootcamp could — what business owners actually struggle with. That insight became the foundation for ClientIn, a loyalty and CRM platform for service businesses.',
		category: 'Startups',
		date: 'Jun 22, 2025',
		readTime: '7 min read',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
		content: `I founded MediaConnectStudios (MCS) in 2024, and it was never meant to become a software company. It started as a content and strategy agency working with Irish brands — filming, editing, posting, and building communities on social media.

Over time, we produced 300+ pieces of content and drove over 200,000 organic views from a single client. We worked directly with business owners — cafés, jewellers, clothing brands. And the same problem kept coming up in every single conversation.

**They couldn't hold onto customers.**

Every business owner I spoke to was great at getting new customers in the door. But keeping them? That was where everything fell apart. Most had no loyalty system, no way to track who was coming back, and no real CRM that made sense for a small service business.

**The insight that changed everything**

I started sketching what a tool for this would look like. Not enterprise software — something simple. Something a café owner or salon manager could actually use without a training course. A loyalty system, a light CRM, automated retention nudges.

That became ClientIn.

**Building in public (kind of)**

I'm currently working with early businesses to validate the product before launch. The goal is to build only what solves the problem — no feature bloat, no complexity for the sake of it. The tech stack is React, Node.js, Supabase, and Stripe, keeping it lean and deployable.

**What running a content agency taught me about software**

The real lesson from MCS was this: the best products come from people who've lived the problem. I've sat across from business owners, heard their frustrations, and watched what they actually use versus what they ignore. That context is something you can't get from a product spec — and it's what I'm building into ClientIn from day one.`,
	},
	{
		id: 3,
		title: 'What I Wish I Knew Starting Computer Science at TU Dublin',
		excerpt: 'Three years in, and here are the things I\'d tell my first-year self — from managing projects and picking tools, to why building things outside of class matters more than you think.',
		category: 'Learning',
		date: 'Aug 14, 2025',
		readTime: '5 min read',
		image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
		content: `Starting Computer Science at Technological University Dublin in 2021, I had no idea how different the experience would be from what I imagined. Here's what I'd tell my first-year self.

**1. Build things outside of assignments — from day one**

The biggest gap between students who get good at software and those who don't is what they build outside of class. Assignments teach you the concepts, but personal projects teach you how to actually think through a problem, make decisions with incomplete information, and ship something real.

I started building seriously in my third year, and I wish I'd started earlier. Even small things — a basic CRUD app, a personal habit tracker, anything — compounds quickly.

**2. Don't wait until you feel "ready"**

Imposter syndrome is real in CS. Everyone around you seems to know more. The truth is, most people feel the same way. The solution isn't to wait until you understand everything — it's to start and learn as you go. Every project I've built has taught me more than the module that supposedly prepared me for it.

**3. The non-technical skills matter**

Data Analytics, UX Design, Business Strategy — these modules didn't feel as exciting as programming, but they changed how I think about software. Understanding users, data, and business context makes you a far better developer. I now use UX thinking on every project I build.

**4. Your network is part of the work**

Through MCS, I built a network of Irish entrepreneurs that directly informed what I'm building now. Meeting people, having real conversations, understanding real problems — that's not just "networking." It's research. It shapes what you build and why.

**5. Your degree is the floor, not the ceiling**

TU Dublin gave me strong fundamentals. But the things that have set me apart — building ClientIn, shipping BP Vital, running a content agency — those all happened outside of it. Use your degree as the foundation. Build everything else on top.`,
	},
	{
		id: 4,
		title: 'Building a Computer Vision System to Detect O-Ring Defects',
		excerpt: 'A deep dive into how I used Python and OpenCV to build an automated inspection system that classifies industrial O-rings as pass or fail — and what I learned about image processing along the way.',
		category: 'Engineering',
		date: 'Mar 5, 2026',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
		content: `For one of my projects at TU Dublin, I built an image processing system to detect defects in industrial O-rings. It might sound niche, but it was one of the most technically interesting things I've worked on.

**The Problem**

Industrial O-rings are small rubber seals used in everything from engines to hydraulic systems. A defective O-ring can cause serious failure. Detecting those defects manually is slow, inconsistent, and expensive. The goal was to automate it.

**The Approach**

I used Python with OpenCV, numpy, and matplotlib. The pipeline worked like this:

1. **Pre-processing** — convert to grayscale, apply Gaussian blur to reduce noise
2. **Thresholding** — isolate the ring from the background using adaptive thresholding
3. **Morphological operations** — clean up the binary image with erosion and dilation
4. **Connected component analysis** — isolate the ring structure specifically
5. **Thickness measurement** — calculate the radial thickness at multiple points around the ring
6. **Classification** — if thickness variation exceeded a defined threshold, the ring failed

**What made it hard**

Lighting inconsistency was the biggest challenge. O-rings photographed under different lighting conditions created dramatically different images, and a threshold that worked perfectly in one image would fail in another. I solved this with histogram equalisation to normalise the image before thresholding.

**What I took from it**

Computer vision forces you to think very concretely about what a computer actually "sees." There's no magic — just matrices of pixel values. Working with raw image data gave me a much deeper appreciation for how AI vision models are trained, and why data quality is everything.

I'm now interested in exploring how lightweight vision models could replace rule-based systems like this one — particularly for mobile deployment.`,
	},
	{
		id: 5,
		title: 'Choosing a Tech Stack as a Solo Founder (And Why I Kept It Simple)',
		excerpt: 'When I started building ClientIn, I had to decide: what tools do I actually use? Here\'s how I picked my stack, what I avoided, and the principle I follow when making every technical decision.',
		category: 'Product',
		date: 'Mar 15, 2026',
		readTime: '5 min read',
		image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
		content: `When you're a solo founder building a product from scratch, the tech stack decision feels huge. But after building BP Vital, the O-Ring system, and now ClientIn, I've landed on a principle that makes every decision easier:

**Use the tools you already know well — until you have a real reason not to.**

Here's what I'm using for ClientIn and why:

**Frontend: React + TypeScript**

I know React. I've built with it extensively. TypeScript adds enough type safety to catch bugs early without slowing me down. For the mobile companion app, I'll extend with React Native (Expo) — same component model, different output.

**Backend: Node.js + Express**

Fast to set up, easy to reason about, and I can move quickly. Express gives me exactly what I need and no more.

**Database: Supabase**

This was the biggest decision. I chose Supabase over MongoDB for ClientIn because the relational model fits the data better — businesses, customers, loyalty transactions, and CRM records all have structured relationships. Plus, Supabase handles auth out of the box, which saved me a week of work.

**Payments: Stripe**

No-brainer. Stripe's documentation is excellent, their API is reliable, and their dashboard is exactly what a small business needs.

**What I avoided**

I didn't introduce microservices. I didn't use GraphQL. I didn't set up Kubernetes. None of those things solve problems I currently have. The best architecture for a solo founder building an MVP is a monolith you can actually ship.

**The principle**

Every technical decision should either: (a) reduce the time to shipping something real, or (b) remove a constraint that's actually blocking you. If it does neither, it's premature complexity.

Build simple. Ship fast. Refactor when you have real users with real problems.`,
	},
	{
		id: 6,
		title: 'How Running a Content Agency Made Me a Better Software Developer',
		excerpt: 'Two years of running MediaConnectStudios before going full-time on software gave me something most developers don\'t have — real experience understanding what businesses actually need.',
		category: 'Startups',
		date: 'Mar 22, 2026',
		readTime: '4 min read',
		image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
		content: `Most developers write code first and try to find a problem later. I did the opposite — and I think it made me significantly better at building software.

Before going deep on software, I ran MediaConnectStudios (MCS), a content and strategy company working with Irish brands. We produced short-form content, ran campaigns, interviewed entrepreneurs, and built audiences for businesses that had no idea how to do it themselves.

**What I observed**

Over two years, I had hundreds of conversations with business owners. I saw the same patterns repeatedly:

- They were overwhelmed by tools that were too complex
- They didn't have visibility into what was actually working
- They couldn't tell you who their best customers were
- Retention was an afterthought

These aren't technical problems on the surface. But underneath, they all have software solutions — and most of the solutions that exist are either too expensive, too complex, or built for enterprises, not the service businesses I was working with.

**How it changed the way I code**

When I sit down to build a feature now, I don't ask "what's the most elegant way to implement this?" I ask "would the café owner I worked with in 2024 actually use this?" That question changes everything.

It affects what I build first. It affects how I name things. It affects the error messages I write. It affects how much I invest in onboarding flows versus feature depth.

**The lesson**

Domain knowledge is a massive competitive advantage in software. If you understand the problem better than the person you're building for, you'll build something genuinely useful. If you don't, you'll build something technically impressive that nobody uses.

Running MCS was the best pre-software-development education I could have had — and I'd do it again.`,
	},
	{
		id: 7,
		title: 'BP Vital: The School Project That a Specialist Said Should Go to Production',
		excerpt: 'What started as a university assignment became something far more real. Here\'s the full story of BP Vital — from the problem that inspired it, to the moment Dr. Róisín Doogue reviewed it and urged me to ship it.',
		category: 'Product',
		date: 'Mar 25, 2026',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
		content: `BP Vital started as a university project. I needed to build a mobile application for one of my modules at TU Dublin, and I wanted to build something that would actually be useful — not just a checkbox to tick.

The idea came from home. A family member managing blood pressure after a stroke was keeping track of their readings in a notebook. Every appointment with their GP meant flicking through handwritten numbers, trying to remember which reading was on which day, and failing to communicate any kind of clear trend. It was frustrating to watch — and it felt like exactly the kind of problem that a well-designed app should solve.

**Building it as a college project**

I built BP Vital using React Native with Expo, so it could run on both iOS and Android from a single codebase. The backend was Node.js and Express, with MongoDB for storing readings. The core flow was deliberately simple: open the app, log a systolic and diastolic reading, and see your history as a clean line chart.

But I kept thinking about the real pain point — the GP appointment. The notebook full of numbers wasn't the problem. The problem was that those numbers meant nothing without context. So I added an AI layer.

**The AI summary feature**

Using OpenAI's API, I built a feature that analyses a user's recent reading history and generates a plain-English summary — something they could actually hand to their doctor. It doesn't diagnose anything. It describes the trend, flags any readings in concerning ranges, and gives the GP a starting point for the conversation.

Getting the tone right took real iteration. The output had to be medically conservative — never alarming, never overstepping — while still being genuinely informative. I spent a lot of time on the prompt engineering to make sure the summaries were useful without being dangerous.

**Privacy as a foundation**

Blood pressure data is sensitive. Before I wrote a single line of backend code, I sat down and mapped out what data BP Vital would collect, where it would live, and who could access it. The answer to the last question had to be: only the user. No third-party analytics. No data sharing. Full GDPR compliance — not as an afterthought, but built into the architecture from day one.

**The moment everything changed**

When the project was done, I was proud of it — but I assumed it would live on my GitHub and that would be it. Then I decided to reach out to Dr. Róisín Doogue, a blood pressure specialist, and ask if she'd be willing to review the application.

She agreed. And her feedback stopped me in my tracks.

Dr. Doogue reviewed the BP categorisation logic, the trend visualisation, the AI summary output, and the overall user experience. Her response was detailed, positive, and direct. She told me the categorisation thresholds aligned with clinical guidelines. She said the AI summaries were appropriately cautious and genuinely useful. And then she said something I wasn't expecting: she urged me to put it into production.

A medical specialist — someone who works with blood pressure patients — told me this wasn't just a good student project. It was something that could help real people.

**What it taught me**

That conversation changed how I think about the projects I build. I'd been treating BP Vital as an academic exercise. Dr. Doogue's review made it real. It reminded me that the things we build as developers — even in college, even as side projects — can have genuine impact if we take them seriously.

I'm now working on the production version of BP Vital, incorporating the feedback from Dr. Doogue and preparing it for a wider release. What started as a university assignment might yet become something that actually helps people manage their health.

That's the kind of software worth building.`,
	},
	{
		id: 8,
		title: 'How MediaConnectStudios Started — and Why I Founded It at 20',
		excerpt: 'MCS wasn\'t a calculated business move. It was a bet that I could help Irish businesses grow through content — and in two years, it taught me more about people, products, and problems than anything else I\'ve done.',
		category: 'Startups',
		date: 'Mar 26, 2026',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
		content: `I started MediaConnectStudios in 2024 when I was 20 years old. I had no business plan, no funding, and no guarantee it would work. What I had was a belief that Irish small businesses were leaving real growth on the table because they didn't know how to use social media — and that I could help them.

**The idea**

I'd been watching short-form content explode across Instagram and TikTok, and I kept seeing the same thing: big brands were doing it well, small businesses were doing it terribly or not at all. The gap wasn't budget — it was knowledge, time, and strategy. Business owners were great at what they did. They weren't great at filming a 30-second video that made someone want to walk through their door.

I thought I could bridge that gap. So I started MCS.

**The early days**

The first few clients came through conversations — people I knew, businesses I'd walked past, founders I'd met through college networks. I'd pitch the idea simply: I'll handle your content, you focus on your business. We'll film, edit, post, and build your audience.

It was scrappier than I make it sound. Early on I was doing everything — strategy, filming, editing, posting, and client calls. The margins were thin and the hours were long. But it worked. Clients saw results. Referrals started coming in.

**What we built**

Over two years, MediaConnectStudios produced more than 300 pieces of content and drove over 200,000 organic views from a single client. We worked with cafés, jewellers, clothing brands, and service businesses across Ireland. Each one was different, but the work was the same: understand the business, understand the audience, make content that connects.

**What I learned that had nothing to do with content**

The most valuable thing I got from running MCS wasn't the content skills. It was the conversations. Over two years, I had hundreds of honest conversations with Irish business owners about what was actually hard about running their businesses.

The answer almost never had anything to do with content. It was almost always about customers — getting them, keeping them, knowing who they were, and bringing them back.

Nobody had a good loyalty system. Nobody had a CRM that actually worked for a small service business. Everyone was losing customers they didn't even know they'd lost.

**The pivot that wasn't really a pivot**

MCS didn't pivot into software. It more accurately gave birth to it. The problems I kept seeing — customer retention, loyalty, relationship management for small businesses — were clearly software problems. And once I saw them clearly, I couldn't unsee them.

That's where ClientIn came from. Not a lightbulb moment. Just two years of paying close attention.

**Why I'd do it again**

Running MCS at 20 taught me things I couldn't have learned in a classroom or a textbook. It taught me that business owners don't need more features — they need less complexity. It taught me that the best way to build something useful is to spend time with the people who'll use it before you write a single line of code.

Most importantly, it taught me that I could build something from nothing. That confidence is the thing I carry into everything I'm working on now — ClientIn, BP Vital, and whatever comes next.`,
	},
];
