import axios from 'axios'

const BASE_API_URL = 'https://rickandmortyapi.com/api'; 

export const getCharacters = async(page: number) => {
    const response = await axios.get(BASE_API_URL + `/character?page=${page}`)
    return response.data
}

export const getCharacter = async(id: number) => {
    const response = await axios.get(BASE_API_URL + `/character/${id}`)
    return response.data
}

export const filterCharacters = async (name:string) => {
    const response = await axios.get(BASE_API_URL + `/character/?name=${name}`)
    return response    
}