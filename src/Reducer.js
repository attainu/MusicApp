import { act } from "react-dom/test-utils";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBw4F3d2ZbWpTgUvYOARIkJlz15zHJ0oe2l6ciJD0WqeGTEJsyWJt4NXIXnjCmHkHy4LZEYM3pY0CDm0jK7U0Nzm4M5iYNEDSZN7ajivDQ9G11M9Llet3N-Uw-OknFIdeqopPcvzHaCr17XYkj3B2XeZEXhjw1FfQeukRR8fDCFBKFg1nRz',
};


const reducer = (state, action) =>{
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }

      default :
      return state;  
    }
}


export default reducer