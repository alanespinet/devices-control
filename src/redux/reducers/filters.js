const INITIAL_STATE = {
    filterBy: '',
    sortBy: ''
};

const filtersReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case "SET_FILTER":
            return {
                ...state,
                filterBy: action.payload
            }

        case "SET_ORDER":
            return {
                ...state,
                sortBy: action.payload
            }

        case "RESET_ALL":
            return INITIAL_STATE
        
        default:
            return state;
    }
};

export default filtersReducer;