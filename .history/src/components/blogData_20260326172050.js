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

**A gap in the market**

Every business owner I worked with was brilliant at what they did. They had loyal customers, real craft, and genuine community around them. But one thing kept coming up in conversation — there wasn't really a simple, affordable tool built for businesses like theirs to manage customer relationships and keep people coming back. It wasn't a failing on their part. It was just a gap nobody had filled yet.

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
		date: 'Oct 3, 2025',
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
		date: 'Nov 18, 2025',
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
		date: 'Jan 9, 2026',
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
		date: 'Feb 27, 2026',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
		content: `BP Vital started as a university project. I needed to build a mobile application for one of my modules at TU Dublin, and I wanted to build something that would actually be useful — not just a checkbox to tick.

The idea came from research. I started looking into how people managing blood pressure actually track their health day to day — and what I found was surprisingly low-tech. Most people were keeping readings in notebooks or scattered notes on their phone. Every GP appointment meant flicking through handwritten numbers with no clear trend, no context, and no easy way to communicate what was actually happening. It felt like exactly the kind of problem a well-designed app should solve.

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
		excerpt: 'MCS didn\'t start with a business plan. It started with two college students, a hunger to build something real, and a decision to learn from the best entrepreneurs in Ireland before doing anything else.',
		category: 'Startups',
		date: 'Mar 19, 2026',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
		content: `So how did MediaConnectStudios start? Let me tell you the real story.

It started with me and my co-founder. We were still in school, restless, and hungry to create something. We wanted to build something tangible — something we could point to and say, *we made that*. But we didn't know where to begin.

So we did what made the most sense to us: we went to learn from people who had already done it.

**Learning from the best**

Before we built anything, we spent time genuinely studying Irish entrepreneurs — people who had built real businesses, real brands, real legacies. Names like Paul Sheeran of Paul Sheeran Jewellers and Louis Copeland, one of Ireland's most iconic menswear brands. We didn't just watch from a distance. We engaged, we listened, we absorbed everything we could about how they operated, how they thought, and how they'd built trust with their customers over decades.

That curiosity became the foundation of everything we did next.

**The idea that changed everything**

Out of that learning process came MediaConnectStudios — a platform where we interviewed successful Irish entrepreneurs and shared their stories with the world. We wanted to capture the knowledge these founders carried and make it accessible to people like us who were just starting out.

And it worked. The videos resonated. People watched. Entrepreneurs opened up. The content took off in ways we didn't expect, and suddenly businesses started approaching *us* — asking if we'd create content for them.

**From interviews to a marketing agency**

What started as a passion project evolved into something far bigger. Businesses saw the quality of our work and wanted in. We began freelancing, then took on full social media management contracts. Within months, we were running the online presence for some of Ireland's most respected businesses.

Our standout partnership was with **Rock Salt Café** — one of Ireland's biggest and most beloved restaurants, based in Lough. For a full year, we managed their entire social media operation: strategy, filming, editing, and posting. We built their audience, told their story, and helped turn their online presence into something they were genuinely proud of. The results spoke for themselves — over **200,000 organic views** from their account alone, and **300+ pieces of content** produced that captured the warmth and character of the brand.

**What we built along the way**

Running MCS taught us that great content isn't about going viral. It's about understanding a business deeply enough to tell its story in a way that makes people feel something. We sat with business owners. We listened to what they cared about. We translated that into content that connected.

But the deeper lesson — the one that changed the direction of everything — came from the conversations we had off camera.

Across every business we worked with — brilliant, hardworking people building genuinely great things — one theme kept coming up in conversation: customer retention. Not because they were doing anything wrong, but because the tools to manage it simply didn't exist for businesses at their scale. There was no loyalty system built for a small Irish service business. No simple CRM that fit how they actually operated. It was a gap in the market, not a gap in their effort.

**The seed of something bigger**

Those conversations didn't just inform our content — they planted the seed for ClientIn. MCS was never meant to become a software company. But two years of paying close attention to real business problems made it impossible *not* to build one.

What started as two college students wanting to make something real turned into a content agency that worked with some of Ireland's finest brands — and ultimately, into the product idea I'm most proud of.

That's the story of MediaConnectStudios. And it's still going.`,
	},
];
