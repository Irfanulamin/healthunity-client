import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthunityserver.vercel.app/",
  }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: "comment-section",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),

    createComments: builder.mutation({
      query: (commentData) => ({
        url: "create-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentsMutation } = commentApi;

export default commentApi.reducer;
