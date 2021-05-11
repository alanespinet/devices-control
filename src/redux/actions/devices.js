import axios from 'axios';

import store from '../store';

const loadDevices = devices => ({
    type: 'LOAD_DEVICES',
    payload: devices
});

export const asyncLoadDevices = () => {
    return dispatch => {
        axios.get('http://localhost:3000/devices')
            .then(response => {
                return dispatch( loadDevices(response.data) );
            });
    };
};

export const asyncAddDevice = device => {
    console.log( JSON.stringify(device) );
    return dispatch => {
        axios.post('http://localhost:3000/devices', 
                    JSON.stringify(device), 
                    { headers: { 'content-type': 'application/json' } })
            .then(() => {
                return axios.get('http://localhost:3000/devices')
                    .then(response => {
                        return dispatch( loadDevices(response.data) );
                    });
                });
    };
};