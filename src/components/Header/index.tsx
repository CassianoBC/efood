import { HeaderContainer, HeaderLogo, HeaderTitle } from './styles'

import Logo from '/logo1.png'
import HeaderImg from '/bg-image.png'

export default function Header() {
    return (
        <HeaderContainer style={{ backgroundImage: `url(${HeaderImg})` }}>
            <HeaderLogo src={Logo} alt="Logo" />
            <HeaderTitle>
                Viva experiências gastronômicas no conforto da sua casa
            </HeaderTitle>
        </HeaderContainer>
    )
}
