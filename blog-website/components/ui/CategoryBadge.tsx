import { CATEGORIES } from '@/lib/constants';

interface CategoryBadgeProps {
    category: 'finance' | 'technology' | 'travel';
    size?: 'sm' | 'md' | 'lg';
}

export default function CategoryBadge({ category, size = 'md' }: CategoryBadgeProps) {
    const categoryConfig = CATEGORIES[category];

    const sizeClasses = {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-2',
    };

    return (
        <span
            className={`inline-block font-semibold rounded-full ${categoryConfig.color.accent} ${categoryConfig.color.bg} ${sizeClasses[size]}`}
        >
            {categoryConfig.name}
        </span>
    );
}
