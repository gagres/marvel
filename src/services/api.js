import axios from 'axios'

const api = axios.create({
    baseURL: ''
})

export const fetchCharacters = () => {
    return api.get();
}