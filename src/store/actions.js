import { fetchCharacters } from '../services/api';

const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const requestCharacters = () => ({
    type: REQUEST_CHARACTERS
});

const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const receiveCharacters = (response) => ({
    type: RECEIVE_CHARACTERS,
    characters: response.body
});

const INVALIDATE_REQUEST_CHARACTERS = 'INVALIDATE_REQUEST_CHARACTERS';
export const invalidateRequestCharacters = () => ({
    type: INVALIDATE_REQUEST_CHARACTERS
});

export const fetchCharacters = () => {
    return function(dispatch) {
        dispatch(requestCharacters());

        fetchCharacters()
            .then(response => {
                dispatch(receiveCharacters(response));
            })
            .catch(err => {
                dispatch(invalidateRequestCharacters(err));
            })
    }
}