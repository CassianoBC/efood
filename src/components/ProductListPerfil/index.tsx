import ProductPerfil from "../ProductPerfil";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Produto } from "../../pages/Home";
import { getDescription } from "../../utils";


export default function ProductListPerfil() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then((res) => setProdutos(res.cardapio))
    }, [id])

    return (
        <>
            <div className="container">
                <Container>
                    {produtos.map((produto) => (
                        <div key={produto.id}>
                            <ProductPerfil
                                title={produto.nome}
                                description={getDescription(produto.descricao)}
                                image={produto.foto}
                            />
                        </div>
                    ))}
                </Container>
            </div>
        </>
    )
}
