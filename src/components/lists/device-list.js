import { connect } from 'react-redux';
import Device from '../singles/device';

const DeviceList = props => {    
    return (
        <div className="devices">
            { props.devices.map( (device, index) => <Device 
                key={ index }
                system_name={ device.system_name } 
                type={ device.type }
                hdd_capacity={ device.hdd_capacity } /> 
            ) }
        </div>
    );
};

const mapStateToProps = state => ({
    devices: state.devices
});

export default connect(mapStateToProps)(DeviceList);