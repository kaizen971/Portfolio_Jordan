import React from 'react';
import './styles.css';

export default function Separators(props) {
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:200,backgroundColor:"black"}}>
        <img src={props.image} style={{width:150,marginRight:18}} />
        <h1 style={{color:"white"}}>{props.name}</h1>
    </div>
  );
}