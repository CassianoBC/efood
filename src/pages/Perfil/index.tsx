import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import type { Produto } from "../Home"

import Header from "../../components/Header"
import HeroPerfil from "../../components/HeroPerfil"
import ProductListPerfil from "../../components/ProductListPerfil"



export default function Perfil() {
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState<Produto>()

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json())
        .then((res) => setRestaurante(res))
    }, [id])

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
