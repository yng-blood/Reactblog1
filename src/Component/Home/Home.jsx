import React, { useContext } from 'react'
import { store } from '../API/FuncionAPI'
import Bollywood from '../Bollywood/Bollywood';
import Hollyblog from '../Hollywood/Hollyblog';
import Bollywoodblog from '../Bollywood/Bollywoodblog'
import Travelblog from '../Travel/Travelblog';
import Foodblog from '../Food/Foodblog';
const Home = ({item}) => {
    const [context]= useContext(store);
  return (
    <> 
    
    <div className='flexrow'>
          <div>
          <img className='img1' id='img1' style={{borderRadius:'10px'}} src='https://wallpapercave.com/wp/uUqxVHp.jpg' width='90%' height='400px' alt='404 error'/>
          </div>
          <div className='flexcol'>
            <div>
            <img className='img1' id='img1' style={{borderRadius:'10px',marginTop:'8px'}} src='https://experiencesandobservationsblog.files.wordpress.com/2017/06/kalit-156.jpg'width='90%' height='190px' alt='404 error'></img>
            </div>
            <div>
            <img className='img1'id='img1' style={{borderRadius:'10px',marginTop:'8px'}}  src='https://classyindia.files.wordpress.com/2015/01/e343b-amarkantak.jpg' width='90%' height='190px' alt='404 error'></img>
            </div>
          </div>
    </div>
    <div>
      <h3>Latest</h3>
   <Hollyblog/>
   <Bollywoodblog/>
   <Travelblog/>
   <Foodblog/>
    </div>
    </>
  )
}

export default Home
