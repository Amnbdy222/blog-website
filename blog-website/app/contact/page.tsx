'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (status === 'error') {
            setStatus('idle');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="border-b border-gray-200 py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600">
                        Have a question or suggestion? We'd love to hear from you.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                            Send Us a Message
                        </h2>

                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                                Thank you for your message! We'll get back to you within 24-48 hours.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800">
                                Please fill in all required fields.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || status === 'success'}
                                className="px-8 py-4 bg-red-500 text-white font-semibold uppercase tracking-wide text-sm hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                        <a href="mailto:hello@thecapitaldrafts.com" className="text-gray-600 hover:text-red-500 transition-colors">
                                            hello@thecapitaldrafts.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                                        <p className="text-gray-600 text-sm">
                                            24-48 hours<br />
                                            Monday - Friday
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                                        <p className="text-gray-600 text-sm">
                                            Remote Team<br />
                                            Serving Globally
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Quick Links
                            </h3>
                            <div className="space-y-2">
                                <a href="/about" className="block text-gray-600 hover:text-red-500 transition-colors">
                                    About Us
                                </a>
                                <a href="/privacy" className="block text-gray-600 hover:text-red-500 transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/disclaimer" className="block text-gray-600 hover:text-red-500 transition-colors">
                                    Disclaimer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
