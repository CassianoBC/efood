import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '/logo1.png'
import HeaderImg from '/bg-image.png'
import { open } from '../../store/reducers/cart';
import type { RootReducer } from '../../store';

import * as S from './styles'

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
            <S.HeaderContainer type={type} style={{ backgroundImage: `url(${HeaderImg})` }}>
                <S.HeaderLogo src={Logo} alt="Logo" />
                <S.HeaderTitle>
                    Viva experiências gastronômicas no conforto da sua casa
                </S.HeaderTitle>
            </S.HeaderContainer>
        )
    }
    return (
        <S.HeaderContainer type={type} style={{ backgroundImage: `url(${HeaderImg})` }}>
            <S.HeaderContent className="container">
                <Link to="/">
                    <S.HeaderLink>Restaurantes</S.HeaderLink>
                </Link>
                <Link to="/">
                    <S.HeaderLogoPerfil src={Logo} alt="Logo do site" />
                </Link>
                <S.HeaderLink onClick={cartOpen}>{items.length} produto(s) no carrinho</S.HeaderLink>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}
