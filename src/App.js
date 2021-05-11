import { BrowserRouter, Route } from 'react-router-dom';

import DeviceList from './components/lists/device-list';
import AddDevice from './components/actions/add-device';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Route path="/" exact={true} component={DeviceList} />
          <Route path="/add" component={AddDevice} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
