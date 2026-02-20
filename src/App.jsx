import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';
import Navbar from './components/navigations/Navbar';
import FullScreenNav from './components/navigations/FullScreenNav';

const App = () => {

  return (
    <div className='text-white'>
      <FullScreenNav />
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes> */}
    </div>
  )
}

export default App
