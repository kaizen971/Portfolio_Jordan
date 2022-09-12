import './App.css';
import BasicExample from './Component/items/nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Presentation from './Component/items/Presentation';
import Avis from './Component/items/Avis';
import Separators from './Component/items/Separators';
import Competence from './Component/items/Competence';
import Project from './Component/items/Projet';
import Parcours from './Component/items/Parcours';
import bluePlanet from './assets/BluePlanet.png';
import orangePlanet from './assets/orangePlanet.png';
import purplePlanete from './assets/purplePlanete.png';
import greenPlanet from './assets/GreenPlanet.png'



function App() {
  return (
    <div className="App">
        <BasicExample/>
        <Presentation />
        <Separators name={"Compétences"} image={bluePlanet} />
        <Competence/>
        <Separators name={"Parcours"} image={orangePlanet}/>
        <Parcours />
        <Separators name={"Projet"} image={purplePlanete}/>
        <Project />
        <Separators name={"Avis"} image={greenPlanet}/>
        <Avis />
    </div>
  );
}

export default App;
