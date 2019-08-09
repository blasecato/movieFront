import {createReducer} from 'reduxsauce'

import {Types} from './MovieActions'

export const INITIAL_STATE ={
    movies: undefined
}

const getMovieSuccess = (states, {movies})=>{
    return {...states,movies: movies}
}

export default createReducer(INITIAL_STATE, {
    [Types.GET_ALL_SUCCESS]: getAllSuccess
})