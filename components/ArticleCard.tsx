import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ article }: any) => {
    return (
        <Link href={`/blog/${article.id}`} prefetch className="block">
            <div className="bg-white shadow-md rounded-2xl max-w-md overflow-hidden">
                <Image
                    src="/demo_blog.png"
                    alt={article.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                    priority
                />

                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p className="text-gray-700 text-sm mb-4">
                        {article.content}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>By {article.author}</span>
                        <span>
                            {new Date(article.date).toLocaleDateString()}
                        </span>
                    </div>

                    <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                        {article.category}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
