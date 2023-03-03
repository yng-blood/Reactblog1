import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../API/FuncionAPI';

const Traveling = () => {
  const [context] = useContext(store);

  return (
    <>
      {context.filter((item) => item.catagory === 'Traveling').map((item, i) => {
        return (
          <Link to={`/ReuseTraveling/${item.id}`} key={item.id}>
            <div>
              <img src={item.image} alt='not found' height={330} width={230} />
              <span className='Title'>{item.Title}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Traveling;