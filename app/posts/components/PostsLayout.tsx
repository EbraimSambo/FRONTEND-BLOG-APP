import React from 'react';
import PostsHero from '@/app/posts/components/PostsHero';
import PostsGrid from '@/app/posts/components/PostsGrid';
import PostsCTA from '@/app/posts/components/PostsCTA';

interface PostsLayoutProps {
    data: any;
    isLoading: boolean;
    hasNextPage: boolean;
    ref: (node: HTMLElement | null) => void;
}

export default function PostsLayout({ data, isLoading, hasNextPage, ref }: PostsLayoutProps) {
    return (
        <div className="bg-white">
            <PostsHero />
            <section className="px-6 py-16 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <PostsGrid data={data} isLoading={isLoading} hasNextPage={hasNextPage} ref={ref} />
                </div>
            </section>
            <PostsCTA />
        </div>
    );
}
