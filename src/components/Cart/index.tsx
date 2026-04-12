import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartProducts from "../CartProducts";
import CartDelivery from "../CartDelivery";
import { close } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";

import * as S from "./styles"

export default function Cart() {
    const dispatch = useDispatch()
    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    const [openDelivery, setOpenDelivery] = useState(false)

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <S.CartContainer className={isOpen ? "is-open" : ""}>
            <S.Overlay onClick={closeCart} />
            {openDelivery === false ? (
                <CartProducts onClick={() => setOpenDelivery(true)} />
            ) : (
                <CartDelivery onClick={() => setOpenDelivery(false)} />
            )}
        </S.CartContainer>
    )
}
