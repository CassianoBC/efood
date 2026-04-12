import Header from "../../components/Header";
import ProductList from "../../components/ProductListHome";

import { useGetRestaurantsQuery } from "../../services/api";

export default function Home() {
    const { data: produtos } = useGetRestaurantsQuery();

    if (produtos) {
        return (
            <>
                <Header type="home" />
                <ProductList produtos={produtos} />
            </>
        )
    }
}
