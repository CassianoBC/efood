import * as S from "./styles"

type Props = {
        banner: Produto
}

export default function HeroPerfil({ banner }: Props) {
    return (
        <S.Container style={{ backgroundImage: `url(${banner.capa})` }}>
            <div className="container">
                <S.Title>{banner.tipo}</S.Title>
                <S.Subtitle>{banner.titulo}</S.Subtitle>
            </div>
        </S.Container>
    )
}
