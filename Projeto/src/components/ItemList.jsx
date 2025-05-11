import React from "react";
import SingleItem from "./SingleItem";
import { Link , useLocation} from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  const { pathname } = useLocation();
  const isInHome =pathname === "/";

  const finalItens = isInHome ? items : Infinity
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isInHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link> ): (
          <></>)
        }
        
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItens)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
