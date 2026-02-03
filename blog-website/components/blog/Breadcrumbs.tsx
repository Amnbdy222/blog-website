import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900 transition-colors uppercase tracking-wide">
                Home
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4" />
                    {index === items.length - 1 ? (
                        <span className="text-gray-900 font-medium uppercase tracking-wide line-clamp-1">{item.label}</span>
                    ) : (
                        <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase tracking-wide">
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
