import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FaRegStar } from 'react-icons/fa';






export default function Stars(props) {
  const {index} = props;
  
  return (
<div>
    { index >= 1 ? <FontAwesomeIcon icon={faStar} style={{ width: 20,height:20 , color:"orange"}} />:<FaRegStar style={{ width: 20,height:20 , color:"orange"}} />}
    { index >= 2 ? <FontAwesomeIcon icon={faStar} style={{ width: 20,height:20 , color:"orange"}} />:<FaRegStar style={{ width: 20,height:20 , color:"orange"}} />}
    { index >= 3 ? <FontAwesomeIcon icon={faStar} style={{ width: 20,height:20 , color:"orange"}} />:<FaRegStar style={{ width: 20,height:20 , color:"orange"}} />}
    { index >= 4 ? <FontAwesomeIcon icon={faStar} style={{ width: 20,height:20 , color:"orange"}} />:<FaRegStar style={{ width: 20,height:20 , color:"orange"}} />}
    { index >= 5 ? <FontAwesomeIcon icon={faStar} style={{ width: 20,height:20 , color:"orange"}} />:<FaRegStar style={{ width: 20,height:20 , color:"orange"}} />}
    </div>


  );
}