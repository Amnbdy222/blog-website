import { getFeaturedPosts, getPostsByCategory } from '@/lib/data/posts';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogCard from '@/components/blog/BlogCard';
import Newsletter from '@/components/ui/Newsletter';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import CategoryBadge from '@/components/ui/CategoryBadge';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const financePosts = getPostsByCategory('finance').slice(0, 3);
  const technologyPosts = getPostsByCategory('technology').slice(0, 3);
  const travelPosts = getPostsByCategory('travel').slice(0, 3);

  const mainFeatured = featuredPosts[0];

  return (
    <div className="bg-white">
      {/* Magazine-Style Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {mainFeatured && (
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-900 overflow-hidden">
            {/* Left: Text Content */}
            <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wide">
                  <span>{formatDate(mainFeatured.publishedAt)}</span>
                  <span>•</span>
                  <CategoryBadge category={mainFeatured.category} size="sm" />
                  <span>•</span>
                  <span>{mainFeatured.tags[0]}</span>
                </div>

                <Link href={`/${mainFeatured.category}/${mainFeatured.slug}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hover:text-gray-700 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {mainFeatured.title}
                  </h2>
                </Link>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {mainFeatured.excerpt}
                </p>

                <Link
                  href={`/${mainFeatured.category}/${mainFeatured.slug}`}
                  className="inline-block text-sm font-semibold text-red-500 hover:text-red-600 uppercase tracking-wide transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-64 lg:h-auto min-h-[400px] order-1 lg:order-2">
              <Image
                src={mainFeatured.featuredImage}
                alt={mainFeatured.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>
        )}
      </section>

      {/* Latest Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {financePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Technology
            </h2>
            <p className="text-gray-600">Latest insights and tutorials</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {technologyPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Travel Guides
            </h2>
            <p className="text-gray-600">Explore the world with us</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {travelPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-red-500 text-white font-semibold uppercase tracking-wide text-sm hover:bg-red-600 transition-colors">
              More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
