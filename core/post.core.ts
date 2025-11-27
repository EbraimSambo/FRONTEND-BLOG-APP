
export interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
    excerpt?: string;
    createdAt: string;
    updatedAt: string;
    bannerPath: string
}