import { API_URL } from './config'

export async function getData(source) {
    const resPromise = await fetch(API_URL + source)
    const json = await resPromise.json()
    return json
}