import { getPostBySlug } from "@/actions/get-post";
import ViewPost from "@/components/post/view-post";

interface Props { params: Promise<{ id: string }> };

export default async function PostView({ params }: Props) {
  const post = await getPostBySlug((await params).id);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-xl font-semibold">Post não encontrado</h1>
      </div>
    );
  }

  return (
    <ViewPost post={post} />
  );
}
