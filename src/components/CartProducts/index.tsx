import { useDispatch, useSelector } from "react-redux";

import Lixeira from "/lixeira.png"
import { remove } from "../../store/reducers/cart";
import { formataPreco, getTotalPrice } from "../../utils";
import type { RootReducer } from "../../store";

import * as S from "./styles"

type props = {
    onClick: () => void
}

export default function CartProducts({ onClick }: props) {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)


    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        items.length > 0 ? (
                <S.Sidebar>
                    <ul>

                        {items.map(item => (
                            <S.CartItem key={item.id}>
                                <img src={item.foto} alt="Pizza" />
                                <S.CartContent>
                                    <h3>{item.nome}</h3>
                                    <p>{formataPreco(item.preco)}</p>
                                </S.CartContent>
                                <S.CartIcone onClick={() => removeItem(item.id)} src={Lixeira} alt="Lixeira" />
                            </S.CartItem>
                        ))}
                    </ul>
                    <S.CartTotal>
                        <p>Valor total</p>
                        <p>{formataPreco(getTotalPrice(items))}</p>
                    </S.CartTotal>
                    <S.Button onClick={onClick}>
                        Continuar com a entrega
                    </S.Button>
                </S.Sidebar>
            ) : (
                <S.Sidebar>
                    <p className="empty-cart">
                        Seu carrinho está vazio, adicione produtos para finalizar seu pedido.
                    </p>
                </S.Sidebar>
            )
        )
}
