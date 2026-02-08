import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import type Food from "../../models/Food";

const produtos: Food[] = [
    {
        id: 1,
        title: "Hioki Sushi",
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        rating: 4.9,
        image: "/sushi.png",
        infos: ["Destaque da semana", "Japonesa"]
    },
    {
        id: 2,
        title: "Hioki Sushi",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        rating: 4.6,
        image: "/massa.png",
        infos: ["Italiana"]
    },
    {
        id: 3,
        title: "Hioki Sushi",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        rating: 4.6,
        image: "/massa.png",
        infos: ["Italiana"]
    },
    {
        id: 4,
        title: "Hioki Sushi",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        rating: 4.6,
        image: "/massa.png",
        infos: ["Italiana"]
    },
    {
        id: 5,
        title: "Hioki Sushi",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        rating: 4.6,
        image: "/massa.png",
        infos: ["Italiana"]
    },
    {
        id: 6,
        title: "Hioki Sushi",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        rating: 4.6,
        image: "/massa.png",
        infos: ["Italiana"]
    }
]

export default function Home() {
    return (
        <>
            <Header />
            <ProductList grid="home" produtos={produtos} />
        </>
    )
}
