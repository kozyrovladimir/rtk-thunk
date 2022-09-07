import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit= 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            })
        })
    })
});
