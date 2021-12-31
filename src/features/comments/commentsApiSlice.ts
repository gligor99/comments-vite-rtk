import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchComments: builder.query<Comments[], number | void>({
        query(limit = 1) {
          return `posts/${limit}/comments`;
        },
      }),
    };
  },
});

export const { useFetchCommentsQuery } = apiSlice;
