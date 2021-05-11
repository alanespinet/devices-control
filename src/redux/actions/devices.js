import axios from 'axios';

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

export const asyncRemoveDevice = id => {
    return dispatch => {
        axios.delete(`http://localhost:3000/devices/${id}`)
            .then(() => {
                return axios.get('http://localhost:3000/devices')
                    .then(response => {
                        return dispatch( loadDevices(response.data) );
                    });
                });
    };
};

export const asyncEditDevice = (id, device) => {
    return dispatch => {
        axios.put(`http://localhost:3000/devices/${id}`, 
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