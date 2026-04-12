import { Link } from 'react-router-dom'

import star from '/star.png'
import * as S from './styles'

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
        <S.Card>
            <img src={image} alt={title} />
            <S.CardInfos>
                {destacado === true ? <S.CardTag>Destaque da Semana</S.CardTag> : null}
                <S.CardTag>{tipo}</S.CardTag>
            </S.CardInfos>
            <S.CardContent>
                <S.CardContentHeader>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardRating>
                        <span>{rating}</span>
                        <img src={star} alt="Star" />
                    </S.CardRating>
                </S.CardContentHeader>
                <S.CardDescription>
                    {description}
                </S.CardDescription>
                <Link to={`/perfil/${id}`}>
                    <S.CardButton>Saiba mais</S.CardButton>
                </Link>
            </S.CardContent>
        </S.Card>
    )
}
