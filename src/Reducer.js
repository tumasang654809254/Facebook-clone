//the innitial state of the login user is null.
export const initialState = {
    user: null,
};

export const actionTypes ={
    SET_USER: "SET_USER",
}
//use the reducer switch case to pass different actions on the user login or logout.
const reducer = (state, action) => {
    console.log(action)
    switch (action.type){
        case actionTypes.SET_USER:
        return{
            ...state,
            user: action.user,
        };
        default:
            return state
    }
};

export default reducer;