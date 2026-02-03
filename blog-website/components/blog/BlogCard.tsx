import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/data/posts';
import CategoryBadge from '@/components/ui/CategoryBadge';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group">
            <Link href={`/${post.category}/${post.slug}`}>
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 mb-4">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                </div>
            </Link>

            <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wide">
                    <span className="hidden sm:inline">{formatDate(post.publishedAt)}</span>
                    <span className="hidden sm:inline">•</span>
                    <CategoryBadge category={post.category} size="sm" />
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{post.tags[0]}</span>
                </div>

                <Link href={`/${post.category}/${post.slug}`}>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {post.title}
                    </h3>
                </Link>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {post.excerpt}
                </p>

                <Link
                    href={`/${post.category}/${post.slug}`}
                    className="inline-block text-xs sm:text-sm font-semibold text-red-500 hover:text-red-600 uppercase tracking-wide transition-colors"
                >
                    Read More →
                </Link>
            </div>
        </article>
    );
}
