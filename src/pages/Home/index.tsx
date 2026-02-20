import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductListHome";

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
    cardapio: {
        id: number
        nome: string
        descricao: string
        foto: string
        porcao: string
        preco: number
    }
}

export default function Home() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
        .then(res => res.json())
        .then((res) => setProdutos(res))
    }, [])
    
    return (
        <>
            <Header type="home" />
            <ProductList produtos={produtos} />
        </>
    )
}
