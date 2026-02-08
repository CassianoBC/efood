
export default class Food {
    title: string
    description: string
    rating: number
    image: string
    infos: string[]
    id: number

    constructor(title: string, description: string, rating: number, image: string, infos: string[], id: number) {
        this.title = title
        this.description = description
        this.rating = rating
        this.image = image
        this.infos = infos
        this.id = id
    }
}