import { Card, CardTag, CardButton, CardContentHeader, CardContent, CardDescription, CardTitle, CardRating, CardInfos } from './styles'


import star from '/star.png'
import { Link } from 'react-router-dom'

type Props = {
    id: number;
    title: string;
    description: string;
    rating: number;
    image: string;
    tipo: string;
    destacado: boolean;
}

export default function Product({ title, description, rating, image, tipo, destacado, id }: Props) {

    return (
        <Card>
            <img src={image} alt={title} />
            <CardInfos>
                {destacado === true ? <CardTag>Destaque da Semana</CardTag> : null}
                <CardTag>{tipo}</CardTag>
            </CardInfos>
            <CardContent>
                <CardContentHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardRating>
                        <span>{rating}</span>
                        <img src={star} alt="Star" />
                    </CardRating>
                </CardContentHeader>
                <CardDescription>
                    {description}
                </CardDescription>
                <Link to={`/perfil/${id}`}>
                    <CardButton>Saiba mais</CardButton>
                </Link>
            </CardContent>
        </Card>
    )
}
