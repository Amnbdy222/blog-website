import Image from 'next/image';
import { Author } from '@/lib/data/posts';

interface AuthorSectionProps {
    author: Author;
}

export default function AuthorSection({ author }: AuthorSectionProps) {
    return (
        <div className="border border-gray-200 p-6 md:p-8">
            <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-200">
                    <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                        About {author.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{author.bio}</p>

                    {author.social && (
                        <div className="flex gap-4 text-sm">
                            {author.social.twitter && (
                                <a
                                    href={author.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                                >
                                    Twitter
                                </a>
                            )}
                            {author.social.linkedin && (
                                <a
                                    href={author.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                                >
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
