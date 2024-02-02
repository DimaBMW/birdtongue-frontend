import {createStore} from "redux";

const initialState = {
  jwt: localStorage.getItem('user_token') || null,
};

function reducer(state=initialState,action:any) {
	switch (action.type) {
		case 'SET_JWT':
				return {...state,jwt:action.payload};
		case 'CLEAR_JWT':
				return {...state,JWT:null};		
		default:
				return state;
	}
}

const store =createStore(reducer)

export default store;