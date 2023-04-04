import axios from 'axios'

const BASE_API_URL = 'https://rickandmortyapi.com/api/character'; 

export const getAll = async({ page, filter }: { page: number; filter: string }) => {
    let url = `${BASE_API_URL}?page=${page}`
    if(filter){
        url += `&name=${filter}`
    }
    const response = await axios.get(url)
    return response.data.results
}

export const getCharacter = async(id: string) => {
    const response = await axios.get(`${BASE_API_URL}/${id}`)
    return response.data
}