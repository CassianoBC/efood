import ProductPerfil from "../ProductPerfil";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Produto } from "../../pages/Home";


export default function ProductListPerfil() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then((res) => setProdutos(res))
    }, [id])

    return (
        <>
            <div className="container">
                <Container>
                    {produtos.map((item) => (
                        <ProductPerfil
                            key={item.id}
                            title={item.cardapio.nome}
                            description={item.cardapio.descricao}
                            image={item.cardapio.foto}
                        />
                    ))}
                </Container>
            </div>
        </>
    )
}
