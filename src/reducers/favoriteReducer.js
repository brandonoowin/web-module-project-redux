import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return({
                ...state, 
                displayFavorites: !state.displayFavorites
            })
        
        case ADD_FAVORITE: 
            console.log(action.payload);
            return({
                ...state, 
                favorites: state.favorites.includes(action.payload) ? [...state.favorites] : [...state.favorites, action.payload]  
            })

        case REMOVE_FAVORITE:
            return({
                ...state, 
                favorites: state.favorites.filter(item => (action.payload !== item.id)) 

            })
        
        default: 
        return state;
    }
}

export default reducer; 