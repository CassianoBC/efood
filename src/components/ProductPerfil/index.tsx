import * as S from "./styles";

export type Props = {
    title: string;
    description: string;
    image: string;
    onOpen?: () => void;
}

export default function ProductPerfil({ title, description, image, onOpen = () => {} }: Props) {
    return (
        <>
            <S.Card>
                <img src={image} alt={title} />
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardDescription>
                    {description}
                </S.CardDescription>
                <S.CardButton onClick={onOpen}>Mais Detalhes</S.CardButton>
            </S.Card>
        </>
    )
}
