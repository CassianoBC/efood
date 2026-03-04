import { useDispatch, useSelector } from "react-redux";
import { remove, close } from "../../store/reducers/cart";

import { Button, CartContainer, CartContent, CartIcone, CartItem, CartTotal, Overlay, Sidebar } from "./styles"

import Lixeira from "/lixeira.png"
import type { RootReducer } from "../../store";
import { formataPreco } from "../../utils";

export default function Cart() {
    const dispatch = useDispatch()
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map(item => (
                        <CartItem key={item.id}>
                            <img src={item.foto} alt="Pizza" />
                            <CartContent>
                                <h3>{item.nome}</h3>
                                <p>{formataPreco(item.preco)}</p>
                            </CartContent>
                            <CartIcone onClick={() => removeItem(item.id)} src={Lixeira} alt="Lixeira" />
                        </CartItem>
                    ))}
                </ul>
                <CartTotal>
                    <p>Valor total</p>
                    <p>{formataPreco(getTotalPrice())}</p>
                </CartTotal>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}
