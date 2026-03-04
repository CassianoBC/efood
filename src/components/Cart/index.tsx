

import { Button, CartContainer, CartContent, CartIcone, CartItem, CartTotal, Overlay, Sidebar } from "./styles"

import Pizza from "/public/pizza.png"
import Lixeira from "/public/lixeira.png"

export default function Cart() {

    return (
        <CartContainer className="n">
            <Overlay />
            <Sidebar>
                <ul>
                    <CartItem>
                        <img src={Pizza} alt="Pizza" />
                        <CartContent>
                            <h3>Pizza Margherita</h3>
                            <p>R$ 60,90</p>
                        </CartContent>
                        <CartIcone src={Lixeira} alt="Lixeira" />
                    </CartItem>
                    <CartItem>
                        <img src={Pizza} alt="Pizza" />
                        <CartContent>
                            <h3>Pizza Margherita</h3>
                            <p>R$ 60,90</p>
                        </CartContent>
                        <CartIcone src={Lixeira} alt="Lixeira" />
                    </CartItem>
                    <CartItem>
                        <img src={Pizza} alt="Pizza" />
                        <CartContent>
                            <h3>Pizza Margherita</h3>
                            <p>R$ 60,90</p>
                        </CartContent>
                        <CartIcone src={Lixeira} alt="Lixeira" />
                    </CartItem>
                </ul>
                <CartTotal>
                    <p>Valor total</p>
                    <p>R$ 182,70</p>
                </CartTotal>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}
