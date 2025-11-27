import { Post } from "@/lib/posts";
import PostCard from "./post-card";

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <div className="p-8 text-center text-zinc-500">Nenhum post encontrado.</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
