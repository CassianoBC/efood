import { Card, CardButton, CardDescription, CardTitle } from "./styles";

type Props = {
    title: string;
    description: string;
    image: string;
}

export default function ProductPerfil({ title, description, image }: Props) {
    return (
        <Card>
            <img src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
            <CardButton>Mais Detalhes</CardButton>
        </Card>
    )
}
