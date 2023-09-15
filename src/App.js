import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import TopHeader from './Components/TopHeader';
import WatchList from './Components/WatchList'
import Watched from './Components/Watched';
import Add from './Components/Add';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Router>
          <TopHeader />
          <Routes>
            <Route path='/' element={<WatchList />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/add' element={<Add />} />
          </Routes>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
