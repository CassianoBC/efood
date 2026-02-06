import { Container } from './styles';
import Product from '../Product';

export default function ProductList() {
    return (
        <div className="container">
            <Container>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Container>
        </div>
    )
}