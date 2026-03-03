import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductPerfil from "../ProductPerfil";
import Modal from "../Modal";

import { Container } from "./style";
import { getDescription, formataPreco } from "../../utils";
import { useGetProdutoQuery } from "../../services/api";
import type { Produto } from "../../pages/Home";

export type CardapioItem = Produto['cardapio'];

export default function ProductListPerfil() {
    const { id } = useParams();
    const { data: produtos } = useGetProdutoQuery(id!);

    console.log(produtos)

    const [ menu ] = useState<CardapioItem[]>(produtos.cardapio);

    console.log(menu)

    const [selected, setSelected] = useState<CardapioItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(produto: CardapioItem) {
        setSelected(produto);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setSelected(null);
    }

    if (!menu) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <div className="container">
                <Container>
                    {menu.map((item) => (
                        <div key={item.id}>
                            <ProductPerfil
                                title={item.nome}
                                description={getDescription(item.descricao)}
                                image={item.foto}
                                onOpen={() => openModal(item)}
                            />
                        </div>
                    ))}
                </Container>
            </div>
            {selected && (
                <Modal
                    key={selected.id}
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
