export type HttpResponseSupabase<T, E=unknown> = {
    count: number
    data: T
    error: E,
    status: number
    statusText: string
}