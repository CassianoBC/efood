import { getDescription } from '../../utils'; 
import Product from '../Product';
import { Container } from './styles';

export type Props = {
    produtos?: Produto[]
}

export default function ProductList({ produtos }: Props) {
        return <div className="container">
            <Container>
                {produtos?.map((produto) => (
                    <Product
                        key={produto.id}
                        id={produto.id}
                        title={produto.titulo}
                        description={getDescription(produto.descricao)}
                        rating={produto.avaliacao}
                        image={produto.capa}
                        tipo={produto.tipo}
                        destacado={produto.destacado}
                    />
                ))}
            </Container>
        </div>
    } 