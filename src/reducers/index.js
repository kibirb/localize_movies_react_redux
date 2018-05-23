import { combineReducers } from 'redux'
import MoviesReducer from './reducer_movies'
import ActiveMovieReducer from './reducer_active_movie'
import { localeReducer as locale } from 'react-localize-redux'

const rootReducer = combineReducers({
	movies: MoviesReducer,
	activeMovie: ActiveMovieReducer,
        locale
});

export default rootReducer;
