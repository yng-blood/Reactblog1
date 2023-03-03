import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { store } from '../API/FuncionAPI';

const ReuseTraveling = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [context] = useContext(store);
  const item = context.find((item) => item.id === parseInt(id)); // Find the item with the matching id
  
  return (
    <div>
      <center>
      <h2>{item.Title}</h2>
      <img src={item.image} alt='not found' height={530} width={530} />
      <h3>{item.Blog}</h3>
      </center>
    </div>
  );
};

export default ReuseTraveling;