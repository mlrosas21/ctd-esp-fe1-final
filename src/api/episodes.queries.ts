import axios from 'axios'

const BASE_API_URL = 'https://rickandmortyapi.com/api/episode'; 

export const getEpisodes = async(ids: number[]) => {
    const response = await axios.get(`${BASE_API_URL}/${ids}`)
    return response.data
}