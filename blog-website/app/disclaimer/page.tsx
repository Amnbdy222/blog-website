import { Metadata } from 'next';
import { AlertTriangle, DollarSign, Code, Plane, Scale, ExternalLink, Info, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'The Capital Drafts Disclaimer - Important information about our content, affiliate relationships, and legal notices for Finance, Technology, and Travel content.',
};

export default function DisclaimerPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-10 md:py-12 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Disclaimer
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                        Important information about the content, recommendations, and affiliate relationships on The Capital Drafts.
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Last Updated:</strong> February 3, 2026
                    </p>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-12 bg-yellow-50 border-b border-yellow-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 border-2 border-yellow-400 shadow-sm">
                        <div className="flex items-start gap-4">
                            <ShieldAlert className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    Please Read Carefully
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The information provided on The Capital Drafts is for <strong>general informational and educational purposes only</strong>.
                                    It should not be considered professional advice in finance, technology, travel, or any other field.
                                    Always consult with qualified professionals before making important decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Financial Disclaimer */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Financial Disclaimer</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-600" />
                                    Not Financial Advice
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Content related to finance, investing, stocks, cryptocurrency, and other financial topics is provided
                                    for <strong>educational and informational purposes only</strong>. This content does not constitute
                                    financial, investment, tax, or legal advice.
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-600" />
                                    Do Your Own Research (DYOR)
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Before making any financial decisions, you should:
                                </p>
                                <ul className="mt-3 space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Conduct your own thorough research</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Consult with a qualified financial advisor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Consider your personal financial situation and risk tolerance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Understand the risks involved in any investment</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                                <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                    Investment Risks
                                </h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>All investments carry risk</strong>, including the potential loss of principal.</p>
                                    <p>Past performance does not guarantee future results.</p>
                                    <p>The value of investments can go down as well as up.</p>
                                    <p>You may lose some or all of your invested capital.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-600" />
                                    No Guarantees
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We make no representations or warranties regarding the accuracy, completeness, or timeliness of any
                                    financial information on our website. Market conditions can change rapidly, and information may become
                                    outdated. Always verify current information before making decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Affiliate Disclosure */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <ExternalLink className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Affiliate Disclosure</h2>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                <strong>The Capital Drafts participates in various affiliate marketing programs</strong>, which means we may
                                earn commissions on purchases made through our links to retailer sites.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">💎 Transparency</h4>
                                    <p className="text-sm text-gray-600">
                                        We clearly disclose all affiliate relationships and mark affiliate links where applicable.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Honest Recommendations</h4>
                                    <p className="text-sm text-gray-600">
                                        We only recommend products we genuinely believe will benefit our readers.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">💰 Your Cost</h4>
                                    <p className="text-sm text-gray-600">
                                        Using our affiliate links costs you nothing extra—the price is the same.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">✍️ Editorial Independence</h4>
                                    <p className="text-sm text-gray-600">
                                        Our opinions remain independent and are not influenced by affiliate partnerships.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                                <p className="text-sm text-gray-700">
                                    <strong>Affiliate Programs:</strong> We participate in Amazon Associates, ShareASale, CJ Affiliate,
                                    and other affiliate networks. When you click on an affiliate link and make a purchase, we may receive
                                    a small commission at no additional cost to you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technology Disclaimer */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Technology Disclaimer</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Content</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our technology articles, tutorials, and guides are provided for educational purposes. While we strive
                                    for accuracy, technology evolves rapidly, and information may become outdated. Always verify current
                                    best practices and documentation.
                                </p>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Use at Your Own Risk</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Any code, software recommendations, or technical instructions provided on our website should be:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">•</span>
                                        <span>Tested in a safe development environment first</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">•</span>
                                        <span>Reviewed by your development team</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">•</span>
                                        <span>Adapted to your specific use case and requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">•</span>
                                        <span>Never deployed directly to production without proper testing</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Warranty</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We provide no warranties regarding the functionality, security, or suitability of any software, tools,
                                    or technologies discussed on our website. You are solely responsible for evaluating and implementing
                                    any technical solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Travel Disclaimer */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Plane className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Travel Disclaimer</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Experiences</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our travel guides and recommendations are based on personal experiences, research, and available
                                    information at the time of writing. Your travel experience may differ based on timing, personal
                                    preferences, and changing conditions.
                                </p>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Changing Conditions</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Travel information can change rapidly, including:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Prices and availability of accommodations, flights, and attractions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Safety conditions and travel advisories</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Visa requirements and entry regulations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Local laws, customs, and cultural norms</span>
                                    </li>
                                </ul>
                                <p className="text-gray-700 mt-3">
                                    <strong>Always verify current information</strong> from official sources before making travel plans.
                                </p>
                            </div>

                            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                                <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                    Safety Responsibility
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We are not responsible for your safety while traveling. Always research destinations thoroughly,
                                    follow local laws and customs, check travel advisories, purchase appropriate travel insurance, and
                                    take necessary safety precautions. Your safety is your responsibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advertising */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <ExternalLink className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Advertising</h2>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Capital Drafts displays advertisements through Google AdSense and other advertising networks. We do not
                                control the content of these advertisements and are not responsible for the products or services advertised.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Third-party advertisers may use cookies and tracking technologies. Please review their privacy policies
                                for information on how they collect and use data.
                            </p>
                        </div>
                    </div>

                    {/* External Links */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                <ExternalLink className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">External Links</h2>
                        </div>

                        <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to external websites. We are not responsible for the content, privacy
                                practices, accuracy of information, or availability of external sites. Clicking on external links is
                                at your own risk. We recommend reviewing the terms and privacy policies of any external sites you visit.
                            </p>
                        </div>
                    </div>

                    {/* Accuracy of Information */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                <Info className="w-5 h-5 text-gray-700" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Accuracy of Information</h2>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                                While we make every effort to ensure the accuracy of information on The Capital Drafts, we make no
                                representations or warranties of any kind, express or implied, about the completeness, accuracy,
                                reliability, suitability, or availability of the information, products, services, or related graphics
                                contained on the website for any purpose.
                            </p>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <Scale className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                        </div>

                        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>To the fullest extent permitted by law</strong>, The Capital Drafts, its authors, contributors,
                                and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive
                                damages arising out of:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Your access to or use of our website or content</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Any investment, financial, or business decisions made based on our content</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Implementation of technical solutions or code examples</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Travel decisions or experiences</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Any errors, omissions, or inaccuracies in our content</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Professional Advice */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Seek Professional Advice</h2>

                        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>The content on The Capital Drafts is not a substitute for professional advice.</strong> Always seek
                                the advice of qualified professionals regarding:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">💼 Financial Matters</h4>
                                    <p className="text-sm text-gray-600">Consult a certified financial advisor or investment professional</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">⚖️ Legal Issues</h4>
                                    <p className="text-sm text-gray-600">Seek advice from a qualified attorney</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">💰 Tax Planning</h4>
                                    <p className="text-sm text-gray-600">Consult with a certified tax professional or CPA</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">💻 Technical Implementation</h4>
                                    <p className="text-sm text-gray-600">Work with experienced developers and IT professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Changes to Disclaimer */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
                                posting to the website. Your continued use of The Capital Drafts after changes are posted constitutes your
                                acceptance of the updated disclaimer.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
                        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Questions About This Disclaimer?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions or concerns about this disclaimer, please contact us.
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:legal@smartinsights.com" className="text-blue-600 hover:underline">
                                    legal@smartinsights.com
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
