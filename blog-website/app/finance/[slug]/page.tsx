import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/data/posts';
import { formatDate } from '@/lib/utils';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import CategoryBadge from '@/components/ui/CategoryBadge';
import AuthorSection from '@/components/blog/AuthorSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import Newsletter from '@/components/ui/Newsletter';
import { Clock, Calendar } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts
        .filter(post => post.category === 'finance')
        .map((post) => ({
            slug: post.slug,
        }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'finance');

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author.name],
            tags: post.tags,
        },
    };
}

export default async function FinancePostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'finance');

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post, 3);

    return (
        <div className="bg-white min-h-screen">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: 'Finance', href: '/finance' },
                        { label: post.title, href: `/finance/${post.slug}` },
                    ]}
                />

                {/* Category Badge */}
                <div className="mb-6">
                    <CategoryBadge category={post.category} />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    {post.title}
                </h1>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} min read</span>
                    </div>
                    <span>•</span>
                    <span>By {post.author.name}</span>
                </div>

                {/* Featured Image */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-12 bg-gray-100">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 896px"
                    />
                </div>

                {/* Content */}
                <div
                    className="blog-content prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Inline Ad */}
                <div className="my-12">
                    <AdPlaceholder variant="inline" />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm hover:border-gray-900 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Author Section */}
                <div className="mt-12">
                    <AuthorSection author={post.author} />
                </div>
            </article>

            {/* Newsletter CTA */}
            <div className="bg-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Newsletter />
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <RelatedPosts posts={relatedPosts} />
                </div>
            )}
        </div>
    );
}
