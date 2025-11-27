import { createAxiosInstance } from "@/config/axios.config"
import { Pagination } from "@/core/pagination.core";
import { Post } from "@/core/post.core";
import { useInfiniteQuery } from "@tanstack/react-query"



const axios = createAxiosInstance();

export const useGetAllPost = (query?: string) => {
    return useInfiniteQuery({
        queryKey: ['posts', query],
        queryFn: async ({ pageParam = 0 }) => axios.get<Pagination<Post>>
            (`/posts`, {
                params: {
                    page: pageParam,
                    size: 10,
                    query
                }
            }).then(res => res.data),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined,
        refetchOnWindowFocus: false,
    })
}