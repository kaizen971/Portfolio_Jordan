import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [Connexion, setConnexion] = React.useState("Connexion");

  const handleConnexion = () => setConnexion("Connexion");
  const handleInscription = () => setConnexion("Inscription");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div class="nav-item active" onClick={handleOpen}> <a class="nav-link" style={{fontSize:25}}>Inscription / Connexion
  <FontAwesomeIcon icon={faUser} style={{marginLeft:20}} />
  </a></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <div style={{flex:1,backgroundColor: Connexion === "Connexion" ?  "black" : "white" ,borderColor:"black",borderWidth:1 ,textAlign:"center", borderWidth:1,textAlign:"center",borderStyle:"solid"}} onClick={handleConnexion}><a class="nav-link" style={{fontSize:25}}>
            <h2 style={{color:Connexion === "Connexion" ? "white":"black"}} >
            Connexion
            </h2></a>
            </div>
            <div style={{flex:1,borderColor:Connexion === "Inscription" ?  "white" :"black",backgroundColor: Connexion === "Inscription" ? "black" : "white"  , borderWidth:1,textAlign:"center",borderStyle:"solid"}} onClick={handleInscription}>
            <h2 style={{color:Connexion === "Inscription" ? "white":"black"}}>
            Inscription
            </h2>
            </div>
          </div>
        { Connexion === "Connexion" &&<form style={{justifyContent:"center",textAlign:"-webkit-center"}}>
        <label style={{display:"block",marginTop:20}}>
            <h5>Utilisateur</h5>    
             <input type="text" name="name" />
        </label>
        <label>
            <h5>Mot de passe</h5>    
             <input type="text" name="name" />
        </label>
        <div style={{flex:1,backgroundColor:"black",width:"50%",alignSelf:"center",alignItems:"center",marginTop:20}}>
            <h5 style={{color:"white", textAlign:"center"}}>Connexion</h5>
        </div>
        </form>}
        {Connexion === "Inscription" &&<form style={{justifyContent:"center",textAlign:"-webkit-center"}}>
        <label style={{display:"block",marginTop:20}}>
            <h5>Nom</h5>    
             <input type="text" name="name" />
        </label>
        <label style={{display:"block",marginTop:20}}>
            <h5>Jordan</h5>    
             <input type="text" name="name" />
        </label>
        <label style={{display:"block",marginTop:20}}>
            <h5>E-mail</h5>    
             <input type="text" name="name" />
        </label>
        <label style={{display:"block",marginTop:20}}>
            <h5>Comment m'avez vous connu ?</h5>    
             <input type="text" name="name" />
        </label>
        <label style={{display:"block",marginTop:20}}>
            <h5>Confirmer le mot de passe</h5>    
             <input type="text" name="name" />
        </label>
        <label>
            <h5>Mot de passe</h5>    
             <input type="text" name="name" />
        </label>
        <div style={{flex:1,backgroundColor:"black",width:"50%",alignSelf:"center",alignItems:"center",marginTop:20}}>
            <h5 style={{color:"white", textAlign:"center"}}>Inscription</h5>
        </div>
        </form>}
        </Box>
      </Modal>
    </div>
  );
}