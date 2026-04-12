import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PurchaseResponse = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-ebac.vercel.app/api/efood"
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Produto[], void>({
            query: () => "restaurantes"
        }),
        getProduto: builder.query<Produto, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayloadProps>({
            query: (body) => ({
                url: "checkout",
                method: "POST",
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, useGetProdutoQuery, usePurchaseMutation } = api;
export default api;