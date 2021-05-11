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
        
        case "ADD_DEVICE":
            return {
                ...state,
                devices: [...state.devices, action.payload]
            };

        case "DELETE_DEVICE":
            return {
                ...state,
                devices: state.devices.filter( device => device.id !== action.payload )
            };

        default:
            return state;
    }
};

export default devicesReducer;