import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Post } from '@/core/post.core';
import SidebarPostItem from './sidebar -postItem';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const SidebarSection = ({
    title,
    icon,
    posts,
}: {
    title: string;
    icon: React.ReactNode;
    posts: Post[];
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md mb-8"
        >
            <div className="flex items-center gap-3 mb-6">
                {icon}
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {posts.map((post) => (
                    <SidebarPostItem key={post.id} post={post} />
                ))}
            </motion.div>

            <Link
                href="/posts"
                className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
                Ver todos →
            </Link>
        </motion.div>
    )
}

export default SidebarSection