import { useDispatch } from "react-redux"; 
import { openModal } from "../../store/reducers/modal";
import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductPerfil from "../ProductPerfil";
import Modal from "../Modal";

import { Container } from "./style";
import { getDescription } from "../../utils";
import { useGetProdutoQuery } from "../../services/api";
import type { CardapioItem } from "../../pages/Home";

export default function ProductListPerfil() {
    const { id } = useParams();
    const { data: produtos } = useGetProdutoQuery(id!);

    const dispatch = useDispatch();

    const [selected, setSelected] = useState<CardapioItem | null>(null);

    function handleOpenModal(produto: CardapioItem) {
        setSelected(produto);
        dispatch(openModal());
    }

    function handleMenu(menuItems: CardapioItem[]) {
        if (!menuItems) {
            return <h3>Carregando...</h3>
        } return (
            menuItems.map((item) => (
                        <div key={item.id}>
                            <ProductPerfil
                                title={item.nome}
                                description={getDescription(item.descricao)}
                                image={item.foto}
                                onOpen={() => handleOpenModal(item)}
                            />
                        </div>
                    ))
        )
    }

    if (!produtos) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <div className="container">
                <Container>
                    {handleMenu(produtos.cardapio)}
                </Container>
            </div>
            {selected && (
                <Modal
                    cardapio={selected}
                />
            )}
        </>
    )
}
