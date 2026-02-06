import { Card, CardButton, CardContent, CardDescription, CardTitle } from './styles'

import sushi from '/sushi.png'

export default function Product() {
    return (
        <Card>
            <img src={sushi} alt="Sushi" />
            <CardContent>
                <CardTitle>Hioki Sushi</CardTitle>
                <CardDescription>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. <br /> Experimente o Japão sem sair do lar com nosso delivery!
                </CardDescription>
                <CardButton>Saiba mais</CardButton>
            </CardContent>
        </Card>
    )
}
