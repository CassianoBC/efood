import { HeaderContainer, HeaderLogo, HeaderContent, HeaderLink } from "./styles";

import logo from "/logo1.png";
import background from "/bg-image.png";
import { Link } from "react-router-dom";

export default function HeaderPerfil() {
    return (
        <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
            <HeaderContent className="container">
                <HeaderLink href="#">Restaurantes</HeaderLink>
                <Link to="/">
                    <HeaderLogo src={logo} alt="Logo do site" />
                </Link>
                <HeaderLink href="#">0 produto(s) no carrinho</HeaderLink>
            </HeaderContent>
        </HeaderContainer>
    )
}
