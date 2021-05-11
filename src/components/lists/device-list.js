import { connect } from 'react-redux';
import Device from '../singles/device';

const DeviceList = props => {    
    return (
        <div className="devices">
            { props.devices.map( device => <Device 
                key={ device.id }
                system_name={ device.system_name } 
                type={ device.type }
                hdd_capacity={ device.hdd_capacity } /> 
            ) }
        </div>
    );
};

const mapStateToDevices = state => ({
    devices: state.devices
});

export default connect(mapStateToDevices)(DeviceList);