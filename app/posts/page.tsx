"use client"
import BlogHero from "@/components/blog-hero";
import BlogCard from "@/components/blog-card";
import { useGetAllPost } from "@/hooks/post.hook";
import { Skeleton } from "@/components/ui/skeleton";
import BlogSidebar from "@/components/blog-sidebar";
import { useInView } from "react-intersection-observer";
import React from "react";
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
    <div className="bg-white">
      {/* Hero Section */}
      <BlogHero />

      {/* Main Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Todos os Artigos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra todas as nossas histórias e insights.
            </p>
          </div>

          {/* Posts Grid with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Posts Grid */}
            <div className="lg:col-span-2">
              {isLoading && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-84 w-full bg-gray-200 rounded-2xl" />
                ))}
              </div>}
              {data && data?.pages[0].content.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data?.pages[0].content.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>}
              {hasNextPage && <div ref={ref} className="h-20" />}
              {/* Empty State */}
              {data && data?.pages[0].content.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ainda não há posts
                  </h3>
                  <p className="text-gray-600">
                    Seja o primeiro a compartilhar sua história.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tem uma história para compartilhar?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se à nossa comunidade de autores e compartilhe seus conhecimentos com o mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
              Criar post
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
              Saiba mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
