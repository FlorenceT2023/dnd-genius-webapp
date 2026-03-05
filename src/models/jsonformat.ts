export type JsonFormat = {
    count: number
    results: Spell[]
}

export type Spell = {
    index: string
    name: string
    level: number
    url: string
}