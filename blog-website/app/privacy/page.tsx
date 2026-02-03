import { Metadata } from 'next';
import { Shield, Eye, Cookie, Lock, UserCheck, Globe, Mail, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'The Capital Drafts Privacy Policy - Learn how we collect, use, and protect your personal information in compliance with GDPR and privacy regulations.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 md:py-12 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Last Updated:</strong> February 3, 2026
                    </p>
                </div>
            </section>

            {/* Quick Summary */}
            <section className="py-12 bg-blue-50 border-b border-blue-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy at a Glance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-5 border border-blue-200">
                            <div className="flex items-start gap-3">
                                <Eye className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">What We Collect</h3>
                                    <p className="text-sm text-gray-600">Email, name, usage data, and cookies</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-blue-200">
                            <div className="flex items-start gap-3">
                                <Lock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">How We Protect It</h3>
                                    <p className="text-sm text-gray-600">Encryption, secure servers, and access controls</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-blue-200">
                            <div className="flex items-start gap-3">
                                <UserCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Your Rights</h3>
                                    <p className="text-sm text-gray-600">Access, correct, delete, or export your data</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-blue-200">
                            <div className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Third Parties</h3>
                                    <p className="text-sm text-gray-600">Google Analytics, AdSense, and email providers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">

                        {/* Section 1 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">Information We Collect</h2>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information You Provide</h3>
                                <p className="text-gray-700 mb-3">
                                    We collect information you voluntarily provide when you:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Subscribe to our newsletter (email address, name)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Fill out contact forms (name, email, message)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Leave comments on blog posts (name, email, comment content)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Participate in surveys or promotions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                                <p className="text-gray-700 mb-3">
                                    When you visit our website, we automatically collect:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>Device Information:</strong> IP address, browser type, operating system</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>Usage Data:</strong> Pages viewed, time spent, referring website</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>Location Data:</strong> General geographic location (country/city level)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">How We Use Your Information</h2>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700 mb-4">We use collected information to:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Send newsletters and updates</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Respond to inquiries</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Improve website content</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Analyze usage trends</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Prevent fraud and abuse</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span className="text-gray-700">Comply with legal obligations</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Cookie className="w-5 h-5 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">Cookies & Tracking</h2>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                                <p className="text-gray-700 mb-4">
                                    We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings.
                                </p>

                                <div className="space-y-3">
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                                        <p className="text-sm text-gray-600">Required for website functionality (login, preferences)</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                                        <p className="text-sm text-gray-600">Help us understand how visitors use our site (Google Analytics)</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Advertising Cookies</h4>
                                        <p className="text-sm text-gray-600">Used to display relevant ads (Google AdSense)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">Third-Party Services</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Google AdSense</h3>
                                    <p className="text-gray-700 mb-2">
                                        We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your browsing history.
                                    </p>
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                        View Google's Privacy Policy →
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Analytics</h3>
                                    <p className="text-gray-700 mb-2">
                                        We use Google Analytics to analyze website traffic. Data is collected anonymously and aggregated.
                                    </p>
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                        View Google's Privacy Policy →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <UserCheck className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">Your Privacy Rights</h2>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                                <p className="text-gray-700 mb-4">
                                    Depending on your location (especially if you're in the EU/EEA), you have the following rights:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">🔍 Right to Access</h4>
                                        <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">✏️ Right to Rectification</h4>
                                        <p className="text-sm text-gray-600">Correct inaccurate information</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">🗑️ Right to Erasure</h4>
                                        <p className="text-sm text-gray-600">Request deletion of your data</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">📦 Right to Portability</h4>
                                        <p className="text-sm text-gray-600">Export your data in a readable format</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">🚫 Right to Object</h4>
                                        <p className="text-sm text-gray-600">Object to processing of your data</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">⏸️ Right to Restrict</h4>
                                        <p className="text-sm text-gray-600">Limit how we use your data</p>
                                    </div>
                                </div>

                                <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-indigo-600">
                                    <p className="text-sm text-gray-700">
                                        <strong>To exercise your rights:</strong> Contact us at{' '}
                                        <a href="mailto:privacy@smartinsights.com" className="text-blue-600 hover:underline">
                                            privacy@smartinsights.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-red-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-0">Data Security</h2>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700 mb-4">
                                    We implement industry-standard security measures to protect your data:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">🔒</span>
                                        <span>SSL/TLS encryption for data transmission</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">🔒</span>
                                        <span>Secure servers with access controls</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">🔒</span>
                                        <span>Regular security audits and updates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">🔒</span>
                                        <span>Limited employee access to personal data</span>
                                    </li>
                                </ul>
                                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <strong>Note:</strong> No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700">
                                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                                </p>
                            </div>
                        </div>

                        {/* Updates */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700">
                                    We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending an email to registered users. The "Last Updated" date at the top of this page indicates when the policy was last revised.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
                        <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Questions About Your Privacy?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us.
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:privacy@smartinsights.com" className="text-blue-600 hover:underline">
                                    privacy@smartinsights.com
                                </a>
                            </p>
                            <p>
                                <strong>Or visit our:</strong>{' '}
                                <a href="/contact" className="text-blue-600 hover:underline">
                                    Contact Page
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
