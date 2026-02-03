interface AdPlaceholderProps {
    variant?: 'sidebar' | 'inline' | 'banner';
    className?: string;
}

export default function AdPlaceholder({ variant = 'sidebar', className = '' }: AdPlaceholderProps) {
    const variantStyles = {
        sidebar: 'w-full h-[600px]',
        inline: 'w-full h-[250px]',
        banner: 'w-full h-[90px]',
    };

    return (
        <div
            className={`${variantStyles[variant]} ${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center`}
        >
            <div className="text-center text-gray-500">
                <svg
                    className="mx-auto h-12 w-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <p className="text-sm font-medium">Ad Placeholder</p>
                <p className="text-xs">{variant}</p>
            </div>
        </div>
    );
}
