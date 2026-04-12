export function getDescription(description: string) {
    if (description.length > 250) {
        return description.slice(0, 247) + '...'
    }
    return description
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

export const getTotalPrice = (items: CardapioItem[]) => {
    return items.reduce((accumulator, currentItem) => {
        if (currentItem.preco) {
            return (accumulator += currentItem.preco)
        }
        return 0
    }, 0)
}