import React from 'react'
import { useContext } from 'react'
import { store } from '../API/FuncionAPI';
import { Link } from 'react-router-dom';
const Bollywoodblog = () => {
    const [context]= useContext(store);
   return (
    <>
      <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Bollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parentFlex'>
        {context.filter((item)=>item.catagory==='Bollywood').map((item,i)=>{
      return( 
      <Link to={`/Bollywood`} key={item.id}> <div className='flex'><img className='flex1' src={item.image} alt='Not found' height={230} width={230}/><div className='re'>{item.Title}</div></div></Link>
      )
  })}
        </div>
    
    </div>
</div>
    </>
  )
}

export default Bollywoodblog