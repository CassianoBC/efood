import Header from "../../components/Header";
import ProductList from "../../components/ProductListHome";

import { useGetRestaurantsQuery } from "../../services/api";

export type CardapioItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    porcao: string
    preco: number
}

export type Produto = {
    foto: string;
    nome: string;
    id: number
    titulo: string
    descricao: string
    avaliacao: number
    capa: string
    tipo: string
    destacado: boolean
    cardapio: CardapioItem[]
}

export default function Home() {
    const { data: produtos } = useGetRestaurantsQuery();

    if (produtos) {
        return (
            <>
                <Header type="home" />
                <ProductList produtos={produtos} />
            </>
        )
    }
}
