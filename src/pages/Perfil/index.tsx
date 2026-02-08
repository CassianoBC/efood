
import HeaderPerfil from "../../components/HeaderPerfil"
import HeroPerfil from "../../components/HeroPerfil"
import ProductList from "../../components/ProductList"
import type Food from "../../models/Food"

const produtos: Food[] = [
    {
        id: 1,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    },
    {
        id: 2,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    },
    {
        id: 3,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    },
    {
        id: 4,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    },
    {
        id: 5,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    },
    {
        id: 6,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: "/pizza.png",
        rating: 0,
        infos: []
    }
]

export default function Perfil() {
    return (
        <>
            <HeaderPerfil />
            <HeroPerfil />
            <ProductList grid="perfil" produtos={produtos}  />
        </>
    )
}
