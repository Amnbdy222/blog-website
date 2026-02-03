import Link from 'next/link';
import { BlogPost } from '@/lib/data/posts';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
    posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                Related Articles
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
