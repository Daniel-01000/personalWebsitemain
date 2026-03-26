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
		id: 7,
		title: 'BP Vital: Building a Health App That a Doctor Actually Approved',
		excerpt: 'A full breakdown of how BP Vital was designed, built, and validated — from the problem that sparked it, to the AI feature that makes it genuinely useful, to the blood pressure specialist who reviewed it.',
		category: 'BP Vital',
		date: 'Jan 20, 2026',
		readTime: '10 min read',
		image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
		content: `BP Vital started with a conversation. A family member managing blood pressure after a stroke was struggling to make sense of their readings. They had numbers — lots of them — but no way to understand what they meant, track trends over time, or share a clear summary with their doctor. They were using a notebook.

That felt like a problem software could actually solve. So I built BP Vital.

**The Core Problem**

Blood pressure management is deceptively complex. Readings vary throughout the day, are affected by stress, medication, sleep, and activity — and most people tracking their BP have no clinical training to interpret what they're seeing. A single high reading isn't necessarily alarming. But a pattern of high readings over two weeks is. The app needed to make that distinction visible.

**What BP Vital Does**

The core feature set is focused: log a reading, see your trend over time, understand what it means. The UI is designed to be calm and clear — no clinical jargon, no overwhelming data. A user logs their systolic and diastolic pressure, and the app immediately places it in context using standard BP categories (normal, elevated, hypertension stage 1, stage 2).

The trend view shows a line chart of readings over 7, 30, or 90 days. Patterns become visible immediately — you can see whether your blood pressure is improving, worsening, or stable. That context is what makes the data useful.

**The AI Summary Feature**

The feature I'm most proud of is the AI-generated GP summary. Using OpenAI's API, BP Vital analyses a user's recent reading history and produces a plain-English summary that a user can bring to their next doctor's appointment. Instead of showing a doctor a phone screen full of numbers, the user hands over a concise, readable report.

The prompt engineering for this took real iteration. I had to ensure the output was medically conservative — never diagnosing, never alarming unnecessarily — while still being genuinely informative. The final version flags trends, notes any readings in concerning ranges, and summarises the overall pattern. It doesn't tell users what's wrong. It helps them have a better conversation with someone who can.

**Building with Privacy First**

Health data is some of the most sensitive data that exists. Before writing the first line of backend code, I mapped out exactly what data BP Vital would store, where it would live, and who could access it. The answer to the last question was: only the user.

No third-party analytics. No data sharing. Readings are scoped to the authenticated user and never exposed to anyone else. GDPR compliance wasn't a checkbox — it was a design constraint I built around from day one.

**The Tech Stack**

- **Frontend / Mobile:** React Native with Expo — cross-platform, single codebase, deployable to iOS and Android
- **Backend:** Node.js + Express — lightweight API handling auth, reading storage, and AI summary generation
- **Database:** MongoDB Atlas — flexible document model suited to user health records
- **AI:** OpenAI API (GPT-4) — for generating GP-ready summaries from reading history
- **Auth:** JWT-based authentication with secure token storage on device

**Medical Validation**

The part that changed how I felt about the project: I reached out to Dr. Róisín Doogue, a blood pressure specialist, and asked her to review the full application — the UI, the categorisation logic, the AI summaries, and the overall approach.

Her feedback was detailed and positive. She noted that the BP category thresholds aligned with clinical guidelines, that the AI summaries were appropriately conservative, and that the trend visualisation would genuinely help patients communicate with their GPs. Having a specialist validate the product meant far more to me than any technical benchmark.

**What I Learned**

Building BP Vital taught me three things I carry into every project now.

First: the best features come from understanding the user's actual situation, not just their stated need. My family member didn't ask for an AI summary feature. But once I understood what they actually struggled with — talking to their doctor — it became the most obvious thing to build.

Second: privacy isn't a feature, it's a foundation. Designing with data minimisation from the start is far easier than retrofitting it later.

Third: external validation matters. Shipping something and asking a domain expert to tear it apart is uncomfortable — but it's how you know you've actually built something useful.`,
	},
	{
		id: 8,
		title: 'ClientIn: From a Problem I Watched Businesses Struggle With to a Product I\'m Building',
		excerpt: 'The full story of ClientIn — what sparked it, how it\'s being built, the technical decisions behind it, and why I think small service businesses deserve better software than what currently exists.',
		category: 'ClientIn',
		date: 'Feb 10, 2026',
		readTime: '11 min read',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
		content: `ClientIn didn't start as a software idea. It started as a pattern I kept noticing while running MediaConnectStudios — a content and strategy agency I founded in 2024 to work with Irish small businesses.

Over two years, I worked directly with cafés, jewellers, clothing brands, and service businesses across Ireland. I filmed content, ran campaigns, built social audiences. And in nearly every conversation I had with a business owner, the same frustration came up.

They were great at getting customers in. They had no idea how to keep them.

**The Problem**

Most small service businesses — a barbershop, a beauty salon, a local café — have no real loyalty system. No structured way to track which customers are coming back. No CRM that makes sense for their context. No automated way to re-engage someone who hasn't been in for six weeks.

Enterprise CRM tools are too complex and too expensive. Most loyalty platforms are built for retail, not services. And the tools that do exist for small businesses tend to be feature-heavy, hard to onboard, and require a learning curve that a busy business owner simply doesn't have time for.

That gap is what ClientIn is built to fill.

**What ClientIn Is**

ClientIn is a loyalty and CRM platform for service-based businesses. The core loop is simple: businesses enrol customers into a loyalty programme, track visits and spending, and use automated nudges to bring customers back before they churn.

The three pillars of the product are:

**1. Loyalty Programme Management**
Businesses can create and manage a points-based or visit-based loyalty programme. Customers earn rewards automatically. The business sees who's enrolled, who's active, and who's at risk of lapsing.

**2. Light CRM**
A simple customer database with visit history, spending patterns, and notes. Not Salesforce. Not HubSpot. Something a café owner can actually use in thirty seconds between customers.

**3. Retention Automation**
Automated messages triggered by customer behaviour — a "we miss you" message after 30 days of inactivity, a reward notification when a customer hits a milestone, a re-engagement offer for lapsed customers. All configurable, all running in the background.

**The Tech Stack**

I chose every tool in this stack to maximise speed of development without creating long-term technical debt.

- **Frontend:** React + TypeScript — I know React well, TypeScript catches bugs early
- **Backend:** Node.js + Express — fast to build, easy to maintain, no unnecessary abstraction
- **Database:** Supabase — the relational model is the right fit here. Businesses, customers, visits, rewards, and loyalty tiers all have structured relationships. Supabase also handles auth out of the box, which saved significant time
- **Payments:** Stripe — subscription billing for the SaaS model, clean API, excellent documentation
- **Mobile (planned):** React Native (Expo) — same component model as the web app, extending to mobile without rewriting the business logic

**Why Supabase Over MongoDB**

For BP Vital, MongoDB was the right call — health records are naturally document-shaped and the schema was flexible. For ClientIn, the data is fundamentally relational. A customer belongs to a business. A visit belongs to a customer. A reward is tied to a loyalty tier. Trying to model that in MongoDB would mean fighting the tool. Supabase gives me PostgreSQL's relational power with a developer experience that doesn't slow me down.

**The Go-To-Market Approach**

I'm not building for everyone. The initial focus is Irish service businesses — the sector I know from running MCS. I'm working directly with a small group of early businesses to validate the product before launch. They use it, I watch where they get stuck, and I build only what actually solves their problem.

The pricing model is subscription-based: a flat monthly fee per business location, with tiers based on customer volume. Simple enough that a business owner can evaluate it in under a minute.

**What Makes This Different**

There are loyalty platforms. There are CRM tools. What ClientIn is trying to do is build the specific combination that works for a small service business — without the complexity, cost, or learning curve of existing solutions.

The differentiator isn't the features. It's the focus. Every product decision gets filtered through one question: would a café owner with fifteen minutes a day actually use this? If the answer is no, it doesn't ship.

**Where It Is Now**

ClientIn is in active development with early business validation underway. The core loyalty and CRM flows are built. Stripe integration is live. I'm currently iterating on the retention automation layer based on feedback from early users.

The goal is a public launch in Q3 2026 — with a product that small service businesses would genuinely miss if it disappeared.

**What Building ClientIn Has Taught Me**

Every decision in ClientIn has been shaped by the two years I spent watching business owners struggle with tools that weren't built for them. That context changes how I write code, how I design interfaces, and what I prioritise.

The best thing a developer can do before building a product is spend time with the people who'll use it. Not to interview them. Just to watch, listen, and understand what actually makes their working day harder than it needs to be.

That's where ClientIn came from. And it's what I think gives it a real chance of working.`,
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
