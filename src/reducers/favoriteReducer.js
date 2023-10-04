import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case TOGGLE_FAVORITES:
        //     return({


        //     })
        
        // case ADD_FAVORITE: 
        //     return({
        //         ...state, 
        //         favorites: [...state.favorites, movie]  
        //     })

        // case REMOVE_FAVORITE:
        //     return({

        //     })
        
        default: 
        return state;
    }
}

export default reducer; 