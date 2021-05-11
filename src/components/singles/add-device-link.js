import { Link } from 'react-router-dom';

const AddDeviceLink = props => (
    <div className="add-device-link">
        <Link className="btn" to="/add">Add Device</Link>
    </div>
);

export default AddDeviceLink;