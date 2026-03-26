export const blogPosts = [
	{
		id: 1,
		title: 'Why I Built a Health App as a CS Student (And What I Learned)',
		excerpt: 'Building BP Vital taught me more about product development, user empathy, and privacy design than any lecture could. Here\'s the full story of how a real problem led to a real app — validated by a medical specialist.',
		category: 'Product',
		date: 'Jan 15, 2026',
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
		date: 'Feb 3, 2026',
		readTime: '7 min read',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
		content: `I founded MediaConnectStudios (MCS) in 2024, and it was never meant to become a software company. It started as a content and strategy agency working with Irish brands — filming, editing, posting, and building communities on social media.

Over time, we produced 300+ pieces of content and drove over 200,000 organic views for our clients. We worked directly with business owners — cafés, jewellers, clothing brands. And the same problem kept coming up in every single conversation.

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
		date: 'Feb 20, 2026',
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

Fast to set up, easy to reason about, and I can move quickly. I don't need a complex framework at this stage. Express gives me exactly what I need and no more.

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
];
