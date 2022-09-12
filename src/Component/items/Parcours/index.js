import './styles.css';
import React from 'react';
import ArrowSakura from '../../../assets/Sakura-Arrow.png';

export default function Parcours(props) {
  const parcours = [{name:"Ecole préparatoire Scientifique (BCPST)" , date:"2016-2018" , lieu:"Ecole de Baimbridge, Guadloupe"}, 
  {name:"Ecole d'ingénieur environnement",date:"2018-2021",lieu:"Unilasalle Rennes"},
  {name:"3WA / Alternance de developpeur full stack",date:"2021-2022",lieu:"The stadium , Rennes"}]
  return (
        <div id="ContainerParcours" style={{display:"flex",flexDirection:"row",height:800,backgroundImage:"./assets/FondEspace.png",alignContent:"center",alignSelf:"center",alignItems:"center"}}>
        <div style={{flex:0.1,height : 2, marginTop:50,marginBottom:50,backgroundColor:"transparent"}} />
        {parcours.map((item) =>
        <div style={{display:'flex',flex:1}}>
        <div style={{flex:1,height : 2, marginTop:50,marginBottom:50,borderBottomWidth:50,borderBottomStyle:"dotted",borderBottomColor:'#eb5989',alignSelf:"center"}} />
        <div style={{width:250,height:350,background: `linear-gradient(${'transparent'}, ${'white'})`,marginRight:12,marginLeft:12,borderRadius:20}}>
        <h2 style={{fontSize:25,marginRight:10,marginLeft:10,color:"black",alignSelf:"center",marginTop:80,textDecoration:"underline"}}>{item.name}</h2>
        <p style={{fontWeight:"bold",fontSize:28,fontStyle:"italic",alignSelf:"center"}}>{item.date}</p>
        <p style={{alignSelf:"center",justifyContent:"center"}}>{item.lieu}</p>
        </div>
        </div>
        )}
      
        
        <div style={{flex:0.2,height : 2, marginTop:50,marginBottom:50,borderBottomWidth:50,borderBottomStyle:"dotted",borderBottomColor:'#eb5989'}} />
        <img src={ArrowSakura} style={{width:100,alignSelf:"center",marginLeft:20}} />
        <div style={{flex:0.1,height : 2, marginTop:50,marginBottom:50,backgroundColor:"transparent"}} />
        </div>
  );
}