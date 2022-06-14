import React from "react";
import Image from '../Images/Fill 219.png';
export default function Cards(props){
  return(
    <div className="Cards">
      <img src={require('../Images/'+props.imageUrl)} alt="" className="picture"/>
      <div className="Main">
        <p className="location">
          <img src={Image} alt="" className="loclogo"/>
          <span className="place">{props.location.toUpperCase()}</span>
          <span><a href={props.googleMapsUrl} className="Google">View on Google Maps</a></span>
          </p>
          <h2 className="Heading">{props.title}</h2>
          <p className="date">{props.startDate}-{props.endDate}</p>
          <p className="description">{props.description}</p>
      </div>
    </div>
  )
}