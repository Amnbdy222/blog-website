export const SITE_CONFIG = {
    name: 'The Capital Drafts',
    description: 'Smart Investing, Modern Tech & Inspiring Travel',
    url: 'https://smartinsights.com',
    author: 'Prashant Dubey',
    social: {
        twitter: 'https://twitter.com/smartinsights',
        linkedin: 'https://linkedin.com/company/smartinsights',
        facebook: 'https://facebook.com/smartinsights',
    },
};

export const CATEGORIES = {
    finance: {
        name: 'Finance & Investing',
        slug: 'finance',
        description: 'Investment strategies, market analysis, and wealth building tips',
        color: {
            primary: 'text-blue-900',
            accent: 'text-emerald-500',
            bg: 'bg-blue-50',
            border: 'border-blue-200',
        },
    },
    technology: {
        name: 'Technology',
        slug: 'technology',
        description: 'Tech tools, tutorials, and digital innovation insights',
        color: {
            primary: 'text-gray-700',
            accent: 'text-indigo-500',
            bg: 'bg-gray-50',
            border: 'border-gray-200',
        },
    },
    travel: {
        name: 'Travel',
        slug: 'travel',
        description: 'Destination guides, travel tips, and adventure inspiration',
        color: {
            primary: 'text-orange-600',
            accent: 'text-teal-500',
            bg: 'bg-orange-50',
            border: 'border-orange-200',
        },
    },
} as const;

export const NAVIGATION = [
    { name: 'Home', href: '/' },
    { name: 'Finance', href: '/finance' },
    { name: 'Technology', href: '/technology' },
    { name: 'Travel', href: '/travel' },
    { name: 'About', href: '/about' },
];

export const FOOTER_LINKS = {
    categories: [
        { name: 'Finance & Investing', href: '/finance' },
        { name: 'Technology', href: '/technology' },
        { name: 'Travel', href: '/travel' },
    ],
    legal: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Disclaimer', href: '/disclaimer' },
    ],
};
