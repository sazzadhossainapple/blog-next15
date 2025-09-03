import { notFound } from 'next/navigation';
import { Article } from '@/types/article';
import Image from 'next/image';

interface Props {
    params: Promise<{ id: string }>; // 👈 mark params as Promise
}

async function getArticle(id: string): Promise<Article | null> {
    try {
        const res = await fetch(`https://api.vercel.app/blog/${id}`, {
            cache: 'no-store', // SSR fetch
        });

        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export default async function ArticleDetails({ params }: Props) {
    // ✅ must await params in async server component
    const { id } = await params;

    const article = await getArticle(id);
    if (!article) return notFound();

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <Image
                src={article.image || '/demo_blog.png'}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                width={600}
                height={300}
                priority
            />
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-700 mb-6">{article.content}</p>

            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>By {article.author}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>

            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {article.category}
            </span>
        </div>
    );
}
