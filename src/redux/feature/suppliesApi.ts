import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const suppliesApi = createApi({
  reducerPath: "suppliesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthunityserver.vercel.app/",
  }),
  tagTypes: ["supplies"],
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),

    getSupplyById: builder.query({
      query: (id) => `supplies/${id}`,
    }),
    createSupply: builder.mutation({
      query: (newSupply) => ({
        url: "create-supply",
        method: "POST",
        body: newSupply,
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: ({ id, updatedSupply }) => ({
        url: `update-supply/${id}`,
        method: "PUT",
        body: updatedSupply,
      }),
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `delete-supply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetSupplyByIdQuery,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = suppliesApi;

export default suppliesApi.reducer;
