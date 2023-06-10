import AboutUs from './Pages/AboutUs/AboutUs';
import Account from './Pages/Account/Account';
import Homepage from './Pages/Homepage/Homepage';
import SearchPage from './Pages/SearchPage/SearchPage';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
        </div>;
}

export default App;
