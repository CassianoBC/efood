import { FooterContainer, FooterText, Logo, SocialMediaContainer, SocialMediaIcon } from './styles'

import logo from '/logo1.png'
import facebook from '/facebook.png'
import instagram from '/instagram.png'
import twitter from '/twitter.png'

export default function Footer() {
    return (
        <FooterContainer>
            <Logo src={logo} alt="Logo" />
            <SocialMediaContainer>
                <a href="#">
                    <SocialMediaIcon src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <SocialMediaIcon src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                    <SocialMediaIcon src={twitter} alt="Twitter" />
                </a>
            </SocialMediaContainer>
            <FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </FooterText>
        </FooterContainer>
    )
}
