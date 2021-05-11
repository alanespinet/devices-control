const INITIAL_STATE = {
    devices: [{
        id: 1,
        system_name: 'JOHN MAC',
        type: 'MAC',
        hdd_capacity: 2048
    }, {
        id: 2,
        system_name: 'MARY WINDOWS PC',
        type: 'WINDOWS',
        hdd_capacity: 1024
    }, {
        id: 3,
        system_name: 'MARINA PERSONAL',
        type: 'MAC',
        hdd_capacity: 2048
    }],
    selectedDevice: {  }
};

const devicesReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
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