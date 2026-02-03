import { Metadata } from 'next';
import { getPostsByCategory } from '@/lib/data/posts';
import { CATEGORIES } from '@/lib/constants';
import BlogCard from '@/components/blog/BlogCard';
import AdPlaceholder from '@/components/ui/AdPlaceholder';

export const metadata: Metadata = {
    title: 'technology & Investing',
    description: 'Tech tools, tutorials, and digital innovation insights',
};

export default function technologyPage() {
    const posts = getPostsByCategory('technology');
    const topPosts = posts.slice(0, 5);

    return (
        <div className="bg-white min-h-screen">
            {/* Clean Header */}
            <div className="border-b border-gray-200 py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                        {CATEGORIES.technology.name}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        {CATEGORIES.technology.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Top Guides */}
                        <div className="border border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200" style={{ fontFamily: 'var(--font-display)' }}>
                                Popular Tech Articles
                            </h3>
                            <ul className="space-y-4">
                                {topPosts.map((post, index) => (
                                    <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <a
                                            href={`/technology/${post.slug}`}
                                            className="flex items-start gap-3 group"
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-700 group-hover:text-red-500 transition-colors line-clamp-2 text-sm font-medium">
                                                {post.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ad Placeholder */}
                        <AdPlaceholder variant="sidebar" />
                    </div>
                </div>
            </div>
        </div>
    );
}
