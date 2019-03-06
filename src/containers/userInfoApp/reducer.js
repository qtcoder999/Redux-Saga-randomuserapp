import { fromJS } from "immutable";

const initialState = fromJS({

    name: 'click to display random name',
    email: 'click to display random email',
    image: '',
  

})

const myReducer = (state = initialState, action) => {


    console.log('action', action)
    switch (action.type) {
        case 'INC':
            return state.set('name', action.value.results[0].login.username).set('email', action.value.results[0].email).set('image',action.value.results[0].picture.medium)
        // newState.val= newState.val + action.value;
        // break;
        case 'DOWN':
            return initialState;
        // break;
        default:
        //  return state;
    }
    //  return state;
    return state;
    // return newState;



}

export default myReducer;