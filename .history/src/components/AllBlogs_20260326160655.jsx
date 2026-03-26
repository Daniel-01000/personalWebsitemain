import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';

const AllBlogs = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [activeCategory, setActiveCategory] = useState('all');
	const [selectedPost, setSelectedPost] = useState(null);
	const navigate = useNavigate();

	const categories = ['all', 'Product', 'Startups', 'Learning', 'Engineering'];

	const filteredPosts = blogPosts.filter((post) => {
		const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
		const matchesSearch =
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Single post view
	if (selectedPost) {
		const currentIndex = blogPosts.findIndex((p) => p.id === selectedPost.id);
		const prevPost = blogPosts[currentIndex - 1];
		const nextPost = blogPosts[currentIndex + 1];

		return (
			<div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
				<div className="max-w-3xl mx-auto">
					<button
						onClick={() => setSelectedPost(null)}
						className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-10 group"
					>
						<ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
						Back to Blog
					</button>

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs mb-4">
							{selectedPost.category}
						</span>
						<h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedPost.title}</h1>
						<div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
							<span className="flex items-center gap-1"><Calendar size={14} />{selectedPost.date}</span>
							<span className="flex items-center gap-1"><Clock size={14} />{selectedPost.readTime}</span>
						</div>
						<img
							src={selectedPost.image}
							alt={selectedPost.title}
							className="w-full h-64 object-cover rounded-2xl mb-10"
						/>
						<div className="prose prose-invert max-w-none">
							{selectedPost.content.split('\n\n').map((para, i) => {
								if (para.startsWith('**') && para.endsWith('**')) {
									return <h3 key={i} className="text-white font-bold text-xl mt-8 mb-3">{para.replace(/\*\*/g, '')}</h3>;
								}
								if (para.includes('**')) {
									return (
										<p key={i} className="text-gray-300 leading-relaxed mb-4"
											dangerouslySetInnerHTML={{
												__html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
											}}
										/>
									);
								}
								if (para.startsWith('1.') || para.startsWith('-')) {
									const items = para.split('\n').filter(Boolean);
									return (
										<ul key={i} className="space-y-2 mb-4 ml-4">
											{items.map((item, j) => (
												<li key={j} className="text-gray-300 leading-relaxed list-disc ml-4">
													{item.replace(/^[\d\-\.\s]+/, '')}
												</li>
											))}
										</ul>
									);
								}
								return <p key={i} className="text-gray-300 leading-relaxed mb-4">{para}</p>;
							})}
						</div>
					</motion.div>

					<div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
						{prevPost ? (
							<button
								onClick={() => setSelectedPost(prevPost)}
								className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
							>
								<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
								<span className="text-sm">{prevPost.title}</span>
							</button>
						) : <div />}
						{nextPost ? (
							<button
								onClick={() => setSelectedPost(nextPost)}
								className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
							>
								<span className="text-sm">{nextPost.title}</span>
								<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
							</button>
						) : <div />}
					</div>
				</div>
			</div>
		);
	}

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
			<div className="max-w-7xl mx-auto">
				{/* Back to Home */}
				<button
					onClick={() => navigate('/')}
					className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-10 group"
				>
					<ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
					Back to Home
				</button>

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-16"
				>
					<p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4">BLOG</p>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						Thoughts & <span className="gradient-text">Lessons</span>
					</h2>
					<p className="text-gray-400 max-w-2xl mb-8">
						Writing about building products, learning software, and the journey from content agency to founder.
					</p>
				</motion.div>

				{/* Search and Filters */}
				<div className="mb-12">
					<div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
						<div className="relative">
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
							<input
								type="text"
								placeholder="Search posts..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-12 pr-4 py-3 rounded-lg bg-dark-800/50 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
							/>
						</div>
						<div className="flex flex-wrap gap-3 justify-center lg:justify-end">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
										activeCategory === category
											? 'bg-primary-500 text-white'
											: 'border border-white/20 text-gray-300 hover:border-primary-500 hover:text-white'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Blog Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredPosts.map((post, index) => (
						<motion.article
							key={post.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							onClick={() => setSelectedPost(post)}
							className="group relative glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />
							</div>
							<div className="p-6">
								<div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
									<span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
									<span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
								</div>
								<h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">
									{post.title}
								</h3>
								<p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
								<span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs">
									{post.category}
								</span>
							</div>
						</motion.article>
					))}
				</div>

				{filteredPosts.length === 0 && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
						<p className="text-gray-400 text-lg">No posts found matching your search.</p>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default AllBlogs;
