import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductPerfil from "../ProductPerfil";
import Modal from "../Modal";

import { Container } from "./style";
import { getDescription, formataPreco } from "../../utils";
import { useGetProdutoQuery } from "../../services/api";
import type { Produto } from "../../pages/Home";

export default function ProductListPerfil() {
    const { id } = useParams();
    const { data: produtos } = useGetProdutoQuery(id || '');
    console.log(produtos)

    const [selected, setSelected] = useState<Produto[] | undefined>(produtos);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(selected)

    function openModal(produtos: Produto[]) {
        setSelected(produtos);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setSelected(undefined);
    }

    if (!produtos) {
        return <h3>Carregando...</h3>
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
                                onOpen={() => openModal(produtos)}
                            />
                        </div>
                    ))}
                </Container>
            </div>
            {selected && (
                <Modal
                    title={selected.name}
                    media={selected.foto}
                    description={selected.descricao}
                    porcao={selected.cardapio.porcao}
                    price={formataPreco(selected.cardapio.preco)}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
