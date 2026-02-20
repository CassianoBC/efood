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