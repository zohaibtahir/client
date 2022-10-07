import {BrowserRouter, Routes, Route} from 'react-router-dom';

// All pages
import Layout from './components/Layout';
import Adduser from './components/Adduser';
import Alluser from './components/Alluser';


function App() {
  return (
    	<BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Alluser/>}/>
              <Route path='add-user' element={<Adduser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
