import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/screens/home';
import AddDevice from './components/actions/add-device';
import EditDevice from './components/actions/edit-device';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <>
            <Route path="/" exact={true} component={Home} />
            <Route path="/add" component={AddDevice} />
            <Route path="/edit" component={EditDevice} />
          </>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
