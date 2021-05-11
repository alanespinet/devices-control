import { Component } from 'react';
import { connect } from 'react-redux';

import { asyncRemoveDevice } from '../../redux/actions/devices';

class Device extends Component {    
    onHandleDelete = () => {
        this.props.removeDevice( this.props.id );
    }

    onHandleEdit = () => {
        const this_device = {
            id: this.props.id,
            system_name: this.props.system_name,
            type: this.props.type,
            hdd_capacity: this.props.hdd_capacity
        };

        this.props.selectDevice(this_device);
        this.props.history.push('/edit');
    }

    render(){
        return (
            <div className="device-single">
                <h2>{ this.props.system_name }</h2>
                <p><strong>Type</strong>: { this.props.type }</p>
                <p><strong>HDD Capacity</strong>: { this.props.hdd_capacity } GB</p>

                <div className="device-single__actions">
                    <button type="button" className="plain-button" onClick={ this.onHandleEdit }>Edit</button>
                    <button type="button" className="plain-button" onClick={ this.onHandleDelete }>Delete</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeDevice: id => dispatch( asyncRemoveDevice(id) ),
    selectDevice: device => dispatch({
        type: "SELECT_DEVICE",
        payload: device
    })
});

export default connect(null, mapDispatchToProps)(Device);