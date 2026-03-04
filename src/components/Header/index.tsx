import { useSelector, useDispatch } from 'react-redux';
import { open } from '../../store/reducers/cart';
import { Link } from 'react-router-dom';

import { HeaderContainer, HeaderLogo, HeaderTitle, HeaderContent, HeaderLink, HeaderLogoPerfil } from './styles'

import Logo from '/logo1.png'
import HeaderImg from '/bg-image.png'
import type { RootReducer } from '../../store';

export type Props = {
    type: 'home' | 'perfil';
}

export default function Header({ type }: Props) {
    const dispatch = useDispatch();
    const { items } = useSelector((state: RootReducer) => state.cart)

    const cartOpen = () => {
        dispatch(open())
    }

    if (type === 'home') {
        return (
            <HeaderContainer type={type} style={{ backgroundImage: `url(${HeaderImg})` }}>
                <HeaderLogo src={Logo} alt="Logo" />
                <HeaderTitle>
                    Viva experiências gastronômicas no conforto da sua casa
                </HeaderTitle>
            </HeaderContainer>
        )
    }
    return (
        <HeaderContainer type={type} style={{ backgroundImage: `url(${HeaderImg})` }}>
            <HeaderContent className="container">
                <Link to="/">
                    <HeaderLink>Restaurantes</HeaderLink>
                </Link>
                <Link to="/">
                    <HeaderLogoPerfil src={Logo} alt="Logo do site" />
                </Link>
                <HeaderLink onClick={cartOpen}>{items.length} produto(s) no carrinho</HeaderLink>
            </HeaderContent>
        </HeaderContainer>
    )
}
