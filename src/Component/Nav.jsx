import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Bollywood from './Bollywood/Bollywood';
import Traveling from './Travel/Traveling';
import Hollywood from './Hollywood/Hollywood';
import Food from './Food/Food';
import { store } from './API/FuncionAPI';
import '../Basic.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IconName } from "react-icons/bs";
import FullviewBollywood from './Bollywood/FullviewBollywood';
import ReuseBollywood from './Bollywood/ReuseBollywood';
import ReuseHollywood from './Hollywood/ReuseHollywood';
import ReuseTraveling from './Travel/ReuseTraveling';
import FunctionAPI from './Rough';
import ReuseFood from './Food/ReuseFood';
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
  
    <div>
      <button 
      onClick={toggleMenu}><i className="bi bi-search"></i></button>
  {showMenu && (
        <div className='block'> 
            <div className='Nav'><Link to='./' className='Nav' >Home</Link></div>
            <div className='Nav'><Link to='./Bollywood' className='Nav'>Bollywood</Link></div>
            <div className='Nav'><Link to='./Travel' className='Nav' >Traveling</Link></div>
            <div className='Nav'><Link to='./Hollywood' className='Nav'>Hollywood</Link></div>
            <div className='Nav'><Link to='./Food' className='Nav'>Food</Link></div>
            <div className='Nav'><Link to='./AboutUs' className='Nav'>AboutUs</Link></div>
            
        </div>
        )}
        <hr />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>}/>
            <Route path='/Travel' element={<Traveling/>}/>
            <Route path='/Hollywood' element={<Hollywood/>}/>
            <Route path='/Food' element={<Food/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/ReuseBollywood/:id' element={<ReuseBollywood/>}/>
            <Route path='/ReuseHollywood/:id' element={<ReuseHollywood/>}/>
            <Route path='/ReuseTraveling/:id' element={<ReuseTraveling/>}/>
            <Route path='/ReuseFood/:id' element={<ReuseFood/>}/>
        </Routes>
       
    </div>

  </>
  )
}

export default Nav;