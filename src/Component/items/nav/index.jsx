
import BasicModal from '../Modal';

function ListExample() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:20,marginTop:20}}>
  <divs style={{flex:0.2}}>
  <a class="navbar-brand" href="#" style={{fontSize:25}}>Portfolio YERBE Jordan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </divs>
  <div class="collapse navbar-collapse" id="navbarNav" style={{flex:0.6,justifyContent:"center"}}>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#Présentation" style={{fontSize:25}} >Présentation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Compétences" style={{fontSize:25}}>Compétences</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ContainerParcours" style={{fontSize:25}}>Parcours</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ContainerComment" style={{fontSize:25}}>Avis</a>
      </li>
    </ul>
  </div>
  <div style={{flex:0.2,flexDirection:"row",justifyContent:"flex-end"}}>
 
  <BasicModal />
  </div>
  </nav>
  );
}

export default ListExample;