import React from 'react';
import BlogCard from '@/components/post/blog-card';
import { Skeleton } from '@/components/ui/skeleton';


export default function PostsGrid({ data, isLoading, hasNextPage, ref }: { data: any; isLoading: boolean; hasNextPage: boolean; ref: (node: HTMLElement | null) => void; }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Posts Grid */}
            <div className="lg:col-span-2">
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Skeleton key={index} className="h-84 w-full bg-gray-200 rounded-2xl" />
                        ))}
                    </div>
                )}
                {data && data?.pages[0].content.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data?.pages[0].content.map((post: any, index: number) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                )}
                {hasNextPage && <div ref={ref} className="h-20" />}
                {/* Empty State */}
                {data && data?.pages[0].content.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ainda não há posts</h3>
                        <p className="text-gray-600">Seja o primeiro a compartilhar sua história.</p>
                    </div>
                )}
            </div>


        </div>
    );
}
