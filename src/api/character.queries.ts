import axios from 'axios'

const BASE_API_URL = 'https://rickandmortyapi.com/api'; 

export const getAll = async({ page, filter }: { page: number; filter: string }) => {
    let url = `${BASE_API_URL}/character?page=${page}`
    if(filter){
        url += `&name=${filter}`
    }
    const response = await axios.get(url)
    return response.data
}

export const getCharacter = async(id: number) => {
    const response = await axios.get(BASE_API_URL + `/character/${id}`)
    return response.data
}