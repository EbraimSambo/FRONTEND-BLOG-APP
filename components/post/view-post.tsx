import { Post } from '@/core/post.core'
import React from 'react'

const ViewPost = ({ post }: { post: Post }) => {
    return (
        <div className="mx-auto max-w-4xl px-6 py-10 pt-26">
            {post.bannerPath && (
                <div className="mb-6 h-[40vh] w-full overflow-hidden rounded-md">
                    <img src={post.bannerPath} alt={post.title} className="h-full w-full object-cover" />
                </div>
            )}

            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-2 text-sm text-zinc-500">Por {"Admin"} — {new Date(post.createdAt).toLocaleString()}</p>
            <div className="mt-6 whitespace-pre-line ">{post.content}</div>
        </div>
    )
}

export default ViewPost