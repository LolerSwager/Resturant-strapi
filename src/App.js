import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Resturant from './pages/Resturant'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/resturant' element={<Resturant />}/>
                <Route path='/api' />
                {/* <Route path='*' element={<ErrorPage />}/> */}
            </Routes>
        </Router>
    );
}