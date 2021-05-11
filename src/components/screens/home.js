import DeviceList from '../lists/device-list';
import Filters from '../actions/filters';
import AddDeviceLink from '../singles/add-device-link';

const Home = props => (
    <>
        <h1>Available Devices:</h1>

        <Filters />
        <DeviceList history={ props.history } />

        <AddDeviceLink />
    </>
);

export default Home;
