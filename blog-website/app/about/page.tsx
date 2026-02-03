import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Cpu, Plane, Shield, Award, Users, CheckCircle2, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about The Capital Drafts - your trusted source for Finance, Technology, and Travel content built on research, transparency, and reader-first values.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="border-b border-gray-200 py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        About The Capital Drafts
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Your trusted destination for expert knowledge on Finance, Technology, and Travel.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Who We Are */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Who We Are
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We're a team of passionate writers and researchers dedicated to creating high-quality,
                        actionable content across three core areas that shape modern life: Finance, Technology, and Travel.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our mission is to empower readers with research-based insights to make informed decisions,
                        whether you're building wealth, mastering new technology, or exploring the world.
                    </p>
                </section>

                {/* Our Topics */}
                <section className="mb-16 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Topics
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Finance & Investing</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    From beginner guides to advanced strategies, we provide comprehensive coverage of personal
                                    finance, investing, and wealth-building techniques.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                                    <Cpu className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Technology</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Stay ahead with insights on AI tools, productivity software, web development, and emerging
                                    tech trends that matter.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                                    <Plane className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Travel</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Explore the world through detailed guides, destination reviews, and practical tips for
                                    unforgettable journeys.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="mb-16 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Values
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Research-Based Content</h3>
                                <p className="text-gray-600">
                                    Every article is thoroughly researched, fact-checked, and backed by credible sources.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency</h3>
                                <p className="text-gray-600">
                                    We clearly disclose all affiliate relationships and maintain editorial independence.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Reader-First Approach</h3>
                                <p className="text-gray-600">
                                    Your success is our priority. We create content that genuinely helps readers achieve their goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-gray-200 pt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Have questions or suggestions? We'd love to hear from you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-red-500 text-white font-semibold uppercase tracking-wide text-sm hover:bg-red-600 transition-colors"
                    >
                        Contact Us
                    </Link>
                </section>
            </div>
        </div>
    );
}
