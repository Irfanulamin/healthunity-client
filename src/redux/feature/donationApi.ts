import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donationApi = createApi({
  reducerPath: "donationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthunityserver.vercel.app/",
  }),
  tagTypes: ["donations"],
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "donations",
        method: "GET",
      }),
      providesTags: ["donations"],
    }),

    createDonations: builder.mutation({
      query: (donationData) => ({
        url: "create-donation",
        method: "POST",
        body: donationData,
      }),
      invalidatesTags: ["donations"],
    }),
  }),
});

export const { useGetDonationsQuery, useCreateDonationsMutation } = donationApi;

export default donationApi.reducer;
