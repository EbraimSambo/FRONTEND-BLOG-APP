import { createAxiosInstance } from "@/config/axios.config";
import { Post } from "@/core/post.core";


const axios = createAxiosInstance();

export const getPostBySlug = async (slug: string) => {
    return await axios.get<Post>(`/posts/slug/${slug}`).then(res => res.data);
};