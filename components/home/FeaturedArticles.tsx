import Image from 'next/image';
import {
    IoCalendarOutline,
    IoTimeOutline,
    IoArrowForward,
    IoEyeOutline,
    IoHeartOutline,
    IoShareSocialOutline,
} from 'react-icons/io5';

const featuredPosts = [
    {
        id: 1,
        image: '/modern-web-dev-workspace.png',
        title: 'First Article',
        excerpt: 'This is the excerpt of the first article.',
        category: 'Technology',
        readTime: '5 min read',
        author: 'John Doe',
        date: '2023-10-01',
    },
    {
        id: 2,
        image: '/typescript-code-on-screen.png',
        title: 'Second Article',
        excerpt: 'This is the excerpt of the second article.',
        category: 'Science',
        readTime: '7 min read',
        author: 'Jane Smith',
        date: '2023-10-02',
    },
    {
        id: 3,
        image: '/modern-web-dev-workspace.png',
        title: 'First Article',
        excerpt: 'This is the excerpt of the first article.',
        category: 'Technology',
        readTime: '5 min read',
        author: 'John Doe',
        date: '2023-10-01',
    },
];

export function FeaturedArticles() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-[#171717]">
                        Featured Articles
                    </h2>
                    <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-[#312c85] text-[#312c85] hover:bg-[#312c85] hover:text-white bg-transparent transition-all">
                        View All
                        <IoArrowForward className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-card text-card-[#171717] flex flex-col gap-6 rounded-xl border pb-6 shadow-sm group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                                <Image
                                    src={post.image || '/placeholder.svg'}
                                    alt={post.title}
                                    width={600}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* <img
                                    src={post.image || '/placeholder.svg'}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                /> */}
                            </div>
                            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 border-transparent bg-[#6d11b0] text-white">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-muted-[#171717] text-sm">
                                        <IoTimeOutline className="h-4 w-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h3 className="leading-none font-semibold text-xl group-hover:text-[#6d11b0] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-[#171717] text-sm">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="px-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                                            <img
                                                src={`/abstract-geometric-shapes.png?height=32&width=32&query=${post.author}`}
                                                alt={post.author}
                                                className="aspect-square size-full"
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
                                            {post.author}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-muted-[#171717] text-sm">
                                        <IoCalendarOutline className="h-4 w-4 mr-1" />
                                        {post.date}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t">
                                    <div className="flex items-center space-x-4">
                                        <button className="inline-flex items-center gap-1 text-muted-[#171717] hover:text-[#6d11b0] transition-colors">
                                            <IoEyeOutline className="h-4 w-4" />
                                            <span className="text-xs">245</span>
                                        </button>
                                        <button className="inline-flex items-center gap-1 text-muted-[#171717] hover:text-red-500 transition-colors">
                                            <IoHeartOutline className="h-4 w-4" />
                                            <span className="text-xs">12</span>
                                        </button>
                                    </div>
                                    <button className="text-muted-[#171717] hover:text-[#6d11b0] transition-colors">
                                        <IoShareSocialOutline className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
