import logo from '/logo1.png'
import facebook from '/facebook.png'
import instagram from '/instagram.png'
import twitter from '/twitter.png'

import * as S from './styles'

export default function Footer() {
    return (
        <S.FooterContainer>
            <S.Logo src={logo} alt="Logo" />
            <S.SocialMediaContainer>
                <a href="#">
                    <S.SocialMediaIcon src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <S.SocialMediaIcon src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                    <S.SocialMediaIcon src={twitter} alt="Twitter" />
                </a>
            </S.SocialMediaContainer>
            <S.FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </S.FooterText>
        </S.FooterContainer>
    )
}
