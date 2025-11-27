"use client";
import { Star } from "lucide-react";
import { useGetAllPost } from "@/hooks/post.hook";
import { Post } from "@/core/post.core";
import { Skeleton } from "./ui/skeleton";
import SidebarSection from "./post/sidebar-section";


export default function BlogSidebar() {
  const { data, isLoading } = useGetAllPost()

  const featuredPosts = data?.pages[0].content.slice(0, 3) || [];
  const latestPosts = data?.pages[0].content.slice(3, 6) || [];

  if (isLoading) {
    return <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-74 w-full bg-gray-200 rounded-2xl" />
      ))}
    </div>
  }

  return (
    <aside className="space-y-8">
      <SidebarSection
        title="Destaques"
        icon={<Star size={20} className="text-blue-600" />}
        posts={featuredPosts as Post[]}
      />
      {latestPosts?.length > 0 && <SidebarSection
        title="Recentes"
        icon={<div className="w-5 h-5 bg-blue-600 rounded-full"></div>}
        posts={latestPosts as Post[]}
      />}
    </aside>
  );
}
