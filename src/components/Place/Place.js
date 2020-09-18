import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Place.css'


const Place = (props) => {
    
    const [places, setPlaces] = useState({})
    const { name, img,key} = props.place;
   //console.log(props);
  const handleTour = ()=>setPlaces(props.place);
  
    
  return (
    <div className="place">
      <div className="detail">
          <h1> {places.name} </h1>
          <p> {places.details} </p>
          <Link to="/booking" ><button> Booking Now </button></Link>
          
      </div>
      
      <div className="button">
      
            <button onClick={ ()=> handleTour(key)} className="place-btn" style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center"}}> <span className="name" >{name}</span> </button>
      
      </div>
      
    </div>
  );
};

export default Place;
