import React, { useState } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProjectItems from './ProjectItems'
import { Columns } from 'react-bootstrap-icons';
import theStadium from '../../../assets/theStadium.PNG';
import Chocolatier from '../../../assets/Yams.PNG';
import FAQ from '../../../assets/FAQ-Environnement.gif'
import NoteExpress from '../../../assets/Note-Express.gif'
import IsabelleWalk from '../../../assets/Isabelles-walk.gif'
import GreenSearcher from '../../../assets/GreenSearcher.png';




export default function Projet() {
  var data = [{ name: "React", iconGauche: "", iconDroit: "", projets: [{ 
    name: "Front sur TheStadium(React Native/ASP.NET)", description: "Une application qui partage en direct les matchs de Bretagne en France. Pendant mon alternance, j'ai du réalisé certains de ces écrans.", lien: theStadium, redirect: "http://thestadium.fr/" }, 
   { name: "Chocolatier-Yams(React/Node.js)", description: "J'ai réalisé un site , pour le biais d'un projet, qui permet à une boulangerie de permettre à ces clients de jouer au jeu Yams et d'essayer de gagner un lot directement prélever dans le stock de la boulangerie.", lien: Chocolatier, redirect: "https://github.com/kaizen971/yamschocolatier" }, 
   { name: "Eco-search(React Native/MongoDB)", description: "Une application qui utilise une API Agribalyse afin de déterminer la quantité de Co2 produit pour un produit alimentaire lors de sa création.", lien: GreenSearcher, redirect: "https://github.com/kaizen971/" }],color:'blue' },
   { name: "Data/Node.js", iconGauche: "", iconDroit: "", projets: [{ name: "Chocolatier-Yams(React/Node.js)", description: "J'ai réalisé un site , pour le biais d'un projet, qui permet à une boulangerie de permettre à ces clients de jouer au jeu Yams et d'essayer de gagner un lot prélever dans le stock de la boulangerie.", lien: Chocolatier, redirect: "https://github.com/kaizen971/ChocolatierBack" },
   { name: "FAQ-Environnement(PhP/MySql)", description: "Blog permettant de s'inscrire et de se connecter afin de faire publier un message sur un blog en lien avec l'environnement.", lien: FAQ, redirect: "https://github.com/kaizen971/FAQ-Environnement" },
   { name: "Note Express (PHP, MySQL)", description: "Ce site web permet de faire des fiches de révisions et prendre des notes en lien avec la programation", lien: NoteExpress, redirect: "https://vimeo.com/588445307" }],color:'green' },
   {name:"Autres",iconGauche: "", iconDroit: "", projets:[{name:"Isabelle Walk(C#/Unity)", description:"Jeu en c# permettant de passer plusieurs niveau", lien: IsabelleWalk, redirect: "https://vimeo.com/588481430"}],color:'purple'}]
  const [p, setp] = useState(0);
  const nbr = 3
  const switchsRight = () => {
    if (p !== (-nbr + 1)) {
      setp(p - 1);
      var container = document.getElementById("carousselCard")
      container.style.transform = "translate(" + (p - 1) * 1600 + "px)";
    } else {
      setp(0)
      container = document.getElementById("carousselCard")
      container.style.transform = "translate(" + (0) * 1600 + "px)";
    }
    var buttonGaucheBackground = document.getElementById("gauche")
    var buttonDroiteBackground = document.getElementById("droite")
    if(p==0){
      var background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`; 
      buttonGaucheBackground.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`
      buttonDroiteBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`
    }
    if(p==-1){
      var background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`; 
      buttonGaucheBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`
      buttonDroiteBackground.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`
    }
    if(p==-2){
      var background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`; 
      buttonGaucheBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`;
      buttonDroiteBackground.style.backgroundImage =`url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`;
    }
  }
  const switchsLeft = () => {
    
    if (p !== 0) {
      setp(p + 1);
      var container = document.getElementById("carousselCard")
      container.style.transform = "translate(" + (p + 1) * 1600 + "px)";
      console.log(p)

    } else {
      setp(-nbr + 1)
      container = document.getElementById("carousselCard")
      container.style.transform = "translate(" + (-nbr + 1) * 1600 + "px)";
      console.log(p)

    }
    var buttonGaucheBackground = document.getElementById("gauche")
    var buttonDroiteBackground = document.getElementById("droite")

    if(p==0){
      let background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`; 
      //autre
      buttonGaucheBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`
      buttonDroiteBackground.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`
    }
    if(p==-2){
      let background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`;
          //Back
      buttonGaucheBackground.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`
      buttonDroiteBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`
    
    }
    if(p==-1){
      let background = document.getElementById("carrousel")
      background.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')`; 
             //React
      buttonGaucheBackground.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3748/3748146.png')`;
      buttonDroiteBackground.style.backgroundImage =`url('https://cdn-icons-png.flaticon.com/512/2166/2166820.png')`;
   
    }
  }
  return (
    <div class="carrouselContainer" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div id="carrousel">

        <div id='carousselCard' style={{ display: "flex", flexDirection: "row" }}>
            {/* {data.map((item) =><div class='comment'> <ProjectItems name={item.name} profession={item.profession} comment={item.comment}  index={item.index} />   </div>
           )} */}
           {data.map((item) => 
            <div id="containerCard" style={{ width: 800 * nbr }}>
           <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center"}}>
              {item.projets[0] &&<div class='comment'> <ProjectItems name={item.projets[0].name} description={item.projets[0].description} uri={item.projets[0].lien} redirect={item.projets[0].redirect} index={2} color={item.color}/></div>}
              {item.projets[1] &&<div class='comment'> <ProjectItems name={item.projets[1].name} description={item.projets[1].description} uri={item.projets[1].lien} redirect={item.projets[1].redirect} index={2} color={item.color}/></div>}
              </div>
              <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center"}}>
              {item.projets[1] &&<div class='comment'> <ProjectItems name={item.projets[2].name} description={item.projets[2].description} uri={item.projets[2].lien} redirect={item.projets[2].redirect} index={2} color={item.color}/></div>}
              {item.projets[3] &&<div class='comment'> <ProjectItems name={item.projets[3].name} description={item.projets[3].description} uri={item.projets[3].lien} redirect={item.projets[3].redirect} index={2} color={item.color}/></div>}
              </div>
            </div>
            </div>
            )}


        </div>
        <div style={{backgroundColor:"red"}} onClick={() => switchsRight()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 }} class="bouton" id="d" />
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 , color:"transparent"}} class="bouton" id="droite" />


        </div>

        <div onClick={() => switchsLeft()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 }} class="bouton" id="g"/>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 , color:"transparent"}} class="bouton" id="gauche" />

        </div>

      </div>
    </div>
  );
}