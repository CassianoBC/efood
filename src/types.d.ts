declare type CardapioItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    porcao: string
    preco: number
}

declare type Produto = {
    foto: string;
    nome: string;
    id: number
    titulo: string
    descricao: string
    avaliacao: number
    capa: string
    tipo: string
    destacado: boolean
    cardapio: CardapioItem[]
}

declare type ProductProps = {
    id: number
    price: number
}

declare type PurchasePayloadProps = {
    products: ProductProps[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: string
            expires: {
                month: string
                year: string
            }
        }
    }
}