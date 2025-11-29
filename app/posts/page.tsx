"use client"
import { useGetAllPost } from '@/hooks/post.hook';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import PostsLayout from './components/PostsLayout';
// export const metadata = {
//   title: "Blog - Todos os Artigos",
//   description: "Explore todos os nossos artigos e histórias",
// };

export default function PostsPage() {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetAllPost()
  const { ref, inView } = useInView({
    root: typeof window !== 'undefined'
      ? document.querySelector('#scrollable-container')
      : undefined,
    rootMargin: '0px',
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  return (
    <PostsLayout data={data} isLoading={isLoading} hasNextPage={hasNextPage} ref={ref} />
  );
}
