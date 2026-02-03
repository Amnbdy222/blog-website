import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/data/posts';
import CategoryBadge from '@/components/ui/CategoryBadge';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowRight, Star } from 'lucide-react';

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <article className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-white/20">
            <Link href={`/${post.category}/${post.slug}`}>
                <div className="relative h-[450px] md:h-[550px]">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority
                        sizes="100vw"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                    {/* Decorative Corner Element */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-amber-500 rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-sm font-bold text-white">Featured</span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <div className="mb-5">
                        <CategoryBadge category={post.category} size="lg" />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 group-hover:text-amber-300 transition-colors leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        {post.title}
                    </h2>

                    <p className="text-lg md:text-xl text-slate-200 mb-6 line-clamp-2 max-w-4xl leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold">
                                {post.author.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium">{post.author.name}</span>
                        </div>
                        <span>•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime} min</span>
                        </div>
                        <span>•</span>
                        <span className="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:gap-3 transition-all">
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
