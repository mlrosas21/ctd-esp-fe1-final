import axios from 'axios'

/**
 * The base URL for the Rick and Morty API, character endpoint.
 * @constant
 * @type {string}
 */

const BASE_API_URL = 'https://rickandmortyapi.com/api/character'; 

/**
 * Fetches all characters from the API based on the given parameters.
 *
 * @async
 * @function
 * @param {Object} params - The parameters for the API call.
 * @param {number} params.page - The page number to fetch.
 * @param {string} params.filter - The name to filter characters by.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of character objects.
 */

export const getAll = async({ page, filter }: { page: number; filter: string }) => {
    let url = `${BASE_API_URL}?page=${page}`
    if(filter){
        url += `&name=${filter}`
    }
    const response = await axios.get(url)
    return response.data.results
}

/**
 * Fetches a single character from the API based on the given ID.
 *
 * @async
 * @function
 * @param {string} id - The ID of the character to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the character object.
 */

export const getCharacter = async(id: string) => {
    const response = await axios.get(`${BASE_API_URL}/${id}`)
    return response.data
}