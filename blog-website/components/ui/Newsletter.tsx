'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest articles on Finance, Technology & Travel delivered to your inbox weekly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                    disabled={status === 'success'}
                />
                <button
                    type="submit"
                    className="px-8 py-4 bg-red-500 text-white font-semibold uppercase tracking-wide text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                    disabled={status === 'success'}
                >
                    {status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </button>
            </form>

            {status === 'error' && (
                <p className="mt-4 text-red-300">Please enter a valid email address.</p>
            )}
            {status === 'success' && (
                <p className="mt-4 text-green-300">Thank you for subscribing!</p>
            )}

            <p className="mt-6 text-sm text-gray-400">
                No spam. Unsubscribe anytime.
            </p>
        </div>
    );
}
