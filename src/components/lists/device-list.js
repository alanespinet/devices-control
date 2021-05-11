import { Component } from 'react';
import { connect } from 'react-redux';

import { asyncLoadDevices } from '../../redux/actions/devices';
import Device from '../singles/device';

class DeviceList extends Component {    

    componentDidMount(){
        this.props.loadDevices();
    }

    render(){
        return (
            <div className="devices">
                { this.props.devices.map( (device, index) => <Device 
                    key={ index }
                    system_name={ device.system_name } 
                    type={ device.type }
                    hdd_capacity={ device.hdd_capacity } /> 
                ) }
            </div>
        );
    }  
};

const mapStateToProps = state => ({
    devices: state.devices
});

const mapDispatchToProps = dispatch => ({
    loadDevices: () => dispatch( asyncLoadDevices() )
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);