import Link from "next/link";
import { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-md border bg-white shadow-sm transition hover:shadow-md">
      {post.image && (
        <div className="h-40 w-full overflow-hidden">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>Por {post.author}</span>
          <span>{new Date(post.date).toLocaleString()}</span>
        </div>
      </div>
    </article>
  );
}
