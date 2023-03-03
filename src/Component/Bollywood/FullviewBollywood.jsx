import React from 'react'
import { useContext } from 'react';
import { store } from '../API/FuncionAPI';
import { Link } from 'react-router-dom';
const FullviewBollywood = () => {
    const [context]= useContext(store);
  return (
    <>
    <center>
    {context.filter((item)=>item.catagory==='Bollywood').map((item,i)=>{
      return(  
        <> 
        <div key={item.id}><img src={item.image} alt='not found' height={530} width={530}/></div>
        <div><span className='re'>{item.Blog}</span></div>
      </>
      ) })}
    </center>
    </>
  )
}

export default FullviewBollywood