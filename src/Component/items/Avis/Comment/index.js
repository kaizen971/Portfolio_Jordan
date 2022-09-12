import React from 'react';
import './styles.css'
import Stars from '../../Stars';






export default function Cards(props) {
  const {index} = props;

  return (

<div id="containerComment">
    <h1 id="nom">{props.name}</h1>
    <h3 id="profession">{props.profession}</h3>
    <div>
    <Stars index={index}/>
    </div>
    <p id="comment" style={{margin:10}}>{`« ${props.comment} »`}</p>
</div>



  );
}