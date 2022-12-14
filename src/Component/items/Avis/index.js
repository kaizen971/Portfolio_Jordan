import React, { useState } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment'



export default function Avis() {
  var data =[
    {
      name:"Taye Cimon",
      profession:"3D Designer",
      comment:"Un développeur très travailleur",
      index:5

    },
    {
      name:"Quentin Martinez",
      profession:"Deveoppeur TheStadium",
      comment:"Jordan s’est montré motivé et professionnel durant toute la durée du contrat. J’ai beaucoup aimé travailler avec lui. Bonne continuation",
      index:5

    }
    
  ]
  const [p, setp] = useState(0);
  const nbr = data.length;
  const switchsRight = () => {
    if (p !== (-nbr + 1)) {
      setp(p - 1);
      var container = document.getElementById("containerCardComment")
      container.style.transform = "translate(" + (p - 1) * 800 + "px)";
    } else {
      setp(0)
       container = document.getElementById("containerCardComment")

       container.style.transform = "translate(" + (0) * 800 + "px)";
    }
  }
  const switchsLeft = () => {
    if (p !== 0) {
      setp(p + 1);
      var container = document.getElementById("containerCardComment")
      container.style.transform = "translate(" + (p + 1) * 800 + "px)";
    } else {
      setp(-nbr + 1)
      container = document.getElementById("containerCardComment")
      container.style.transform = "translate(" + (-nbr + 1) * 800 + "px)";


    }
  }
  return (
    <div id="ContainerComment" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

      <div id="carrouselComment">
        <div >
          <div id="containerCardComment" style={{ width: 800 * nbr }}>
           {data.map((item) =><div class='comment'> <Comment name={item.name} profession={item.profession} comment={item.comment}  index={item.index} />   </div>
           )}
          </div>
        </div>
        <div onClick={() => switchsRight()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 }} class="boutonComment" id="d" />
        </div>

        <div onClick={() => switchsLeft()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: 20 }} class="boutonComment" id="g" />
        </div>

      </div>
    </div>
  );
}