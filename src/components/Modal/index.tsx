import { useDispatch, useSelector } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import { closeModal } from "../../store/reducers/modal";

import { Button, CloseImg, Description, ModalContainer, ModalContent, Porcao, Title, Modal } from "./styles"

import Close from "/close.png"
import type { RootReducer } from "../../store";
import type { CardapioItem } from "../../pages/Home";
import { formataPreco } from "../../utils";

type Props = {
    cardapio: CardapioItem
}


export default function ModalCardapio({ cardapio }: Props) {
    const dispatch = useDispatch()
    const { isOpenModal } = useSelector((state: RootReducer) => state.modal)

    const addToCart = () => {
        dispatch(add(cardapio))
        dispatch(open())
        dispatch(closeModal())
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <>
            <Modal  className={isOpenModal ? "visivel" : ""}>
                <div className="container">
                    <ModalContainer>
                        <CloseImg src={Close} onClick={handleCloseModal} alt="Close" />
                        <ModalContent>
                            <img src={cardapio.foto} alt={cardapio.nome} />
                            <div>
                                <Title>{cardapio.nome}</Title>
                                <Description>
                                    {cardapio.descricao}
                                </Description>
                                <Porcao>Serve: {cardapio.porcao}</Porcao>
                                <Button onClick={() => addToCart()}>Adicionar ao carrinho - {formataPreco(Number(cardapio.preco))}</Button>
                            </div>
                        </ModalContent>
                    </ModalContainer>
                </div>
                <div onClick={handleCloseModal} className="overlay"></div>
            </Modal>
        </>
    )
}
