import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductPerfil from "../ProductPerfil";
import Modal from "../Modal";

import { Container } from "./style";
import { getDescription, formataPreco } from "../../utils";
import type { Produto } from "../../pages/Home";


type CardapioItem = Produto['cardapio'];

export default function ProductListPerfil() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState<CardapioItem[]>([])
    const [selected, setSelected] = useState<CardapioItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then((res) => setProdutos(res.cardapio))
    }, [id])

    function openModal(produto: CardapioItem) {
        setSelected(produto)
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
        setSelected(null)
    }

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
                                onOpen={() => openModal(produto)}
                            />
                        </div>
                    ))}
                </Container>
            </div>
            {selected && (
                <Modal
                    title={selected.nome}
                    media={selected.foto}
                    description={selected.descricao}
                    porcao={selected.porcao}
                    price={formataPreco(selected.preco)}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
