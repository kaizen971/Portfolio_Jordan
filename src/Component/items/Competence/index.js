import './styles.css'
import ReactLogo from '../../../assets/React.png'


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function Competence() {
  return (
    <div class="containerCard">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                    <h3>Design</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <ul>
                    <li>WordPress</li>
                    <li>HTML/CSS</li>
                    <li>Méthode responsive</li>
                    <li>Javascript</li>
                </ul>                    
                    
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={ReactLogo} />
                    <h3>React/React Native</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <ul>
                    <li>Maitrise intégrale de React et React Native</li>
                    <li>Test unitaire</li>
                    <li>Maitrise de Detox</li>
                    <li>Redux/Implémentation de store</li>
                </ul> 
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                    <h3>BackEnd</h3>
                </div>
            </div>
            <div class="face face2">
            <ul>
                    <li>Php</li>
                    <li>Maitrise de Node.js</li>
                    <li>MongoDB</li>
                    <li>Language SQL</li>
                    <li>Traitement d'une base de donnée</li>
            </ul> 
            </div>
        </div>
   
    </div>

  )
}