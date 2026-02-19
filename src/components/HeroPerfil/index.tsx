import type { Produto } from "../../pages/Home"
import { Container, Subtitle, Title } from "./styles"

type Props = {
        banner: Produto
}

export default function HeroPerfil({ banner }: Props) {
    return (
        <Container style={{ backgroundImage: `url(${banner.capa})` }}>
            <div className="container">
                <Title>{banner.tipo}</Title>
                <Subtitle>{banner.titulo}</Subtitle>
            </div>
        </Container>
    )
}
