import { useParams } from "react-router-dom"

import Header from "../../components/Header"
import HeroPerfil from "../../components/HeroPerfil"
import ProductListPerfil from "../../components/ProductListPerfil"
import { useGetProdutoQuery } from "../../services/api"

export default function Perfil() {
    const { id } = useParams()

    const { data: restaurante } = useGetProdutoQuery(id!)

    if (!restaurante) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <Header type="perfil" />
            <HeroPerfil banner={restaurante} />
            <ProductListPerfil />
        </>
    )
}
