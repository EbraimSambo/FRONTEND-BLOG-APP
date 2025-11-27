import PostList from "@/components/post-list";
import { listPostsByAuthor } from "@/lib/posts";

export default function MyPostsPage() {
  // For demo purposes we assume the user is 'admin'
  const posts = listPostsByAuthor("admin");

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Meus Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
