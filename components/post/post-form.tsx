"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostForm({ defaultAuthor = "admin" }: { defaultAuthor?: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(defaultAuthor);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, excerpt, content, author, image }),
      });

      if (!res.ok) throw new Error("failed to create");
      const created = await res.json();
      router.push(`/posts/${created.id}`);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Título</label>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">Slug</label>
        <input required value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">Resumo</label>
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">Conteúdo</label>
        <textarea required value={content} onChange={(e) => setContent(e.target.value)} rows={8} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">Autor</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">Imagem (URL)</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <button type="submit" className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" disabled={loading}>
          {loading ? "Criando..." : "Criar Post"}
        </button>
      </div>
    </form>
  );
}
