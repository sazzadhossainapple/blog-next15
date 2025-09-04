import ArticleCard from '@/components/ArticleCard';

const Blog = async () => {
    const data = await fetch('https://api.vercel.app/blog', {
        cache: 'no-store',
    });
    const posts = await data.json();

    return (
        <div className="container mx-auto px-6 py-4 sm:py-6 lg:py-10">
            <h1 className="text-3xl mb-7 font-bold text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts?.map((data: any) => (
                    <ArticleCard key={data.id} article={data} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
