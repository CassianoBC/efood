import { Card, CardTag, CardButton, CardContentHeader, CardContent, CardDescription, CardTitle, CardRating, CardInfos } from './styles'


import star from '/star.png'
import { Link } from 'react-router-dom'

type Props = {
    title: string;
    description: string;
    rating: number;
    image: string;
    infos: string[];
}

export default function Product({ title, description, rating, image, infos }: Props) {
    return (
        <Card>
            <img src={image} alt={title} />
            <CardInfos>
            {infos.map((info) => (
                <CardTag key={info}>{info}</CardTag>
            ))}
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
                <Link to="/perfil">
                    <CardButton>Saiba mais</CardButton>
                </Link>
            </CardContent>
        </Card>
    )
}
