import { useDispatch, useSelector } from "react-redux";

import Close from "/close.png"
import { add, open } from "../../store/reducers/cart";
import { closeModal } from "../../store/reducers/modal";
import type { RootReducer } from "../../store";
import { formataPreco } from "../../utils";

import * as S from "./styles"

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
            <S.Modal  className={isOpenModal ? "visivel" : ""}>
                <div className="container">
                    <S.ModalContainer>
                        <S.CloseImg src={Close} onClick={handleCloseModal} alt="Close" />
                        <S.ModalContent>
                            <img src={cardapio.foto} alt={cardapio.nome} />
                            <div>
                                <S.Title>{cardapio.nome}</S.Title>
                                <S.Description>
                                    {cardapio.descricao}
                                </S.Description>
                                <S.Porcao>Serve: {cardapio.porcao}</S.Porcao>
                                <S.Button onClick={() => addToCart()}>Adicionar ao carrinho - {formataPreco(Number(cardapio.preco))}</S.Button>
                            </div>
                        </S.ModalContent>
                    </S.ModalContainer>
                </div>
                <div onClick={handleCloseModal} className="overlay"></div>
            </S.Modal>
        </>
    )
}
