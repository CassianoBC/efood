import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Produto } from "../pages/Home";

//import type  { CardapioItem } from "../components/ProductListPerfil";

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
        })
    })
})

export const { useGetRestaurantsQuery, useGetProdutoQuery } = api;
export default api;