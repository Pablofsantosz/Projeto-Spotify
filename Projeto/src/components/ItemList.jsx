import React from 'react';
import SingleItem from './SingleItem';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const ItemList = ({ title, items ,itemsArray, path}) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a  href ={path} className="item-list__link" >
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray
        .filter((currentValue,index) => index<items )
        .map((curretObj,index)=>(
        <SingleItem 
        // id={curretObj.id}
        // name={curretObj.name}
        // image={curretObj.image}
        // banner={curretObj.banner}
        {...curretObj}
        key={`${title}--${index} `}/>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
