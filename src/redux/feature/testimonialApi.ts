import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialApi = createApi({
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthunityserver.vercel.app/",
  }),
  tagTypes: ["testimonials"],
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "testimonials",
        method: "GET",
      }),
      providesTags: ["testimonials"],
    }),

    createTestimonials: builder.mutation({
      query: (testimonialData) => ({
        url: "create-testimonial",
        method: "POST",
        body: testimonialData,
      }),
      invalidatesTags: ["testimonials"],
    }),
  }),
});

export const { useGetTestimonialsQuery, useCreateTestimonialsMutation } =
  testimonialApi;

export default testimonialApi.reducer;
