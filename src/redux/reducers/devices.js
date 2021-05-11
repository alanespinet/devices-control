const INITIAL_STATE = [{
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
}];

const devicesReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){

        default:
            return state;
    }
};

export default devicesReducer;