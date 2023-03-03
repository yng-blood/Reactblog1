import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../API/FuncionAPI';

const Bollywood = () => {
  const [context] = useContext(store);

  return (
    <>
      {context.filter((item) => item.catagory === 'Bollywood').map((item, i) => {
        return (
          <Link to={`/ReuseBollywood/${item.id}`} key={item.id}>
            <div>
              <img src={item.image} alt='not found' height={530} width={530} />
              <span className='Title'>{item.Title}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Bollywood;