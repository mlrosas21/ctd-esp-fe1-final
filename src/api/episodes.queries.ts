import axios from 'axios'

/**
 * The base URL for the Rick and Morty API, episodes endpoint.
 * @constant
 * @type {string}
 */

const BASE_API_URL = 'https://rickandmortyapi.com/api/episode'; 

/**
 * Fetches multiple episodes from the API based on the given IDs.
 *
 * @async
 * @function
 * @param {string} ids - A comma-separated string of episode IDs to fetch.
 * @returns {Promise<Object>} - A promise that resolves to an object containing episode data.
 */

export const getEpisodes = async(ids: string) => {
    const response = await axios.get(`${BASE_API_URL}/${ids}`)
    return response.data
}