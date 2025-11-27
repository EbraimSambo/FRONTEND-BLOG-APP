"use client";
import { Post } from "@/core/post.core";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  post: Post;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      <Link href={`/posts/${post.slug}`}>
        {/* Image Container */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-200">
          {post.bannerPath ? (
            <>
              <img
                src={post.bannerPath}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </>
          ) : (
            <div className="h-full w-full bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <span className="text-blue-300 text-4xl">📰</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold px-4 py-2 rounded-full">
              {"Artigo"}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end p-6 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold line-clamp-2">{post.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt || post.content.slice(0, 100) + "..."}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
            <span className="font-medium">Por {"Admin"}</span>
            <span>{new Date(post.createdAt).toLocaleDateString("pt-BR")}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
