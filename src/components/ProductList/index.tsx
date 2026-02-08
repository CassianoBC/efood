import { Container } from './styles';
import Product from '../Product';
import Food from '../../models/Food'

export type Props = {
    produtos: Food[]
    grid: "home" | "perfil"
}

export default function ProductList({ produtos, grid }: Props) {
    return (
        <div className="container">
            <Container grid={grid}>
                {produtos.map((produto) => (
                    <Product
                        key={produto.id}
                        title={produto.title}
                        description={produto.description}
                        rating={produto.rating}
                        image={produto.image}
                        infos={produto.infos}
                    />
                ))}
            </Container>
        </div>
    )
}