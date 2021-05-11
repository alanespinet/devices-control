import { Component } from 'react';
import { connect } from 'react-redux';

import { asyncLoadDevices } from '../../redux/actions/devices';
import selectDevices from '../../redux/selectors/devices_selector';

import Device from '../singles/device';

class DeviceList extends Component {    

    componentDidMount(){
        this.props.loadDevices();
    }

    render(){
        return (
            <div className="devices">
                { this.props.devices.map( device => <Device 
                    key={ device.id }
                    id={ device.id }
                    system_name={ device.system_name } 
                    type={ device.type }
                    hdd_capacity={ device.hdd_capacity } 
                    history={this.props.history}/> 
                ) }
            </div>
        );
    }  
};

const mapStateToProps = state => ({
    devices: selectDevices(state.devicesReducer.devices, state.filtersReducer.filterBy, state.filtersReducer.sortBy)
});

const mapDispatchToProps = dispatch => ({
    loadDevices: () => dispatch( asyncLoadDevices() )
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);