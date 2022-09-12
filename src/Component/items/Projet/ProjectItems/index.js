import React from 'react';
import './styles.css'
import Stars from '../../Stars';
import { positions } from '@mui/system';





export default function ProjectItems(props) {
  const {index} = props;

  return (

<div id="container">
<div id="calque" style={{position:"absolute",	width: 400,
	height: 300,opacity:0,borderRadius:20,display:"flex",flexDirection:"column"}} >
    <p style={{color:"white",marginRight:20,marginLeft:20}}>{props.description}</p>
    <div style={{borderWidth:5,borderColor:"white",borderStyle:"solid",width:100,color:"white"}}><a class="nav-link" href={`${props.redirect}`} style={{fontSize:18}}>Voir plus</a></div>
  </div>

    <div style={{flex:0.7,backgroundColor:props.color,borderRadius:20,backgroundImage:`url(${props.uri})`,backgroundSize:400}}>
      <h1>.</h1>
    </div>
    <h2 style={{flex:0.3,textAlign:"center",marginTop:25}}>{props.name}</h2>

</div>



  );
}