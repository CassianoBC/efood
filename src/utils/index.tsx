export function getDescription(description: string) {
    if (description.length > 250) {
        return description.slice(0, 247) + '...'
    }
    return description
}