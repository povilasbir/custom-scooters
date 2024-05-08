import { API_URL } from './config'

export async function getData(source) {
    const resPromise = await fetch(API_URL + source)
    const json = await resPromise.json()
    return json
}

export async function deleteData(source) {
    const resPromise = await fetch(API_URL + source, {
        method: 'DELETE',
    })
}

export async function postData(source, obj) {
    const resPromise = await fetch(API_URL + source, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export async function putData(source, obj) {
    const resPromise = await fetch(API_URL + source, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}