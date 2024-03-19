import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const volunteerApi = createApi({
  reducerPath: "volunteerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthunityserver.vercel.app/",
  }),
  tagTypes: ["volunteers"],
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => ({
        url: "volunteers",
        method: "GET",
      }),
      providesTags: ["volunteers"],
    }),

    createVolunteers: builder.mutation({
      query: (volunteerData) => ({
        url: "create-volunteer",
        method: "POST",
        body: volunteerData,
      }),
      invalidatesTags: ["volunteers"],
    }),
  }),
});

export const { useCreateVolunteersMutation, useGetVolunteersQuery } =
  volunteerApi;

export default volunteerApi.reducer;
