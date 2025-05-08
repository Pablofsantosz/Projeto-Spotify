import React from "react";

import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">

        <ItemList 
        title ="artists" 
        items={5} itemsArray 
        ={artistArray} 
        path ="/Artists"/>

        <ItemList  
        title= "Músicas" 
        items={10} 
        itemsArray 
        ={songsArray} path ="/songs"/>
    </div>
  );
};

export default Main;
