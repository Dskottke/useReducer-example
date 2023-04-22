export type AppAction = {
    type: string,
    payload?: number,
}

export type AppState = {
    students: Person[],
    counter: number,
}

export type Person = {
    id: number,
    name: string,
}