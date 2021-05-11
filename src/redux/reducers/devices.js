const INITIAL_STATE = {
    devices: [],
    selectedDevice: {  }
};

const devicesReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case "LOAD_DEVICES":
            return {
                ...state,
                devices: action.payload
            }
        
        case "SELECT_DEVICE":
            return {
                ...state,
                selectedDevice: action.payload
            }

        default:
            return state;
    }
};

export default devicesReducer;