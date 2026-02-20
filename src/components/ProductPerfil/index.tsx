import { Card, CardButton, CardDescription, CardTitle } from "./styles";

export type Props = {
    title: string;
    description: string;
    image: string;
    onOpen?: () => void;
}



export default function ProductPerfil({ title, description, image, onOpen = () => {} }: Props) {

    return (
        <>
            <Card>
                <img src={image} alt={title} />
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <CardButton onClick={onOpen}>Mais Detalhes</CardButton>
            </Card>
        </>
    )
}
