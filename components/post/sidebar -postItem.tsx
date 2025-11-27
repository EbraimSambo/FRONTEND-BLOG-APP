import React from 'react'
import { motion } from 'framer-motion'
import { Post } from '@/core/post.core';
import Link from 'next/link';
const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};
const SidebarPostItem = ({ post }: { post: Post }) => {
    return (
        <motion.article
            variants={itemVariants}
            className="flex gap-4 pb-4 mb-4 border-b border-gray-100 last:border-b-0 hover:opacity-80 transition-opacity cursor-pointer group"
        >
            {/* Thumbnail */}
            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                {post.bannerPath ? (
                    <img
                        src={post.bannerPath}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-300">
                        📝
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <Link href={`/posts/${post.slug}`}>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                    </h4>
                </Link>
                <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                </p>
            </div>
        </motion.article>
    )
}

export default SidebarPostItem