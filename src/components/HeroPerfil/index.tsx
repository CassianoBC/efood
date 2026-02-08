
import { Container, Subtitle, Title } from "./styles"
import Hero from "/hero-perfil.png"

export default function HeroPerfil() {
    return (
        <Container style={{ backgroundImage: `url(${Hero})` }}>
            <div className="container">
                <Title>Italiana</Title>
                <Subtitle>La Dolce Vita Trattoria</Subtitle>
            </div>
        </Container>
    )
}
