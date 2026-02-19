import { HeaderContainer, HeaderLogo, HeaderTitle, HeaderContent, HeaderLink, HeaderLogoPerfil } from './styles'

import Logo from '/logo1.png'
import HeaderImg from '/bg-image.png'
import { Link } from 'react-router-dom';

export type Props = {
    type: 'home' | 'perfil';
}

export default function Header({ type }: Props) {
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
                    <HeaderLink href="#">Restaurantes</HeaderLink>
                </Link>
                <Link to="/">
                    <HeaderLogoPerfil src={Logo} alt="Logo do site" />
                </Link>
                <HeaderLink href="#">0 produto(s) no carrinho</HeaderLink>
            </HeaderContent>
        </HeaderContainer>
    )
}
