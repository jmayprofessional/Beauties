import './App.css';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
// imported player stat calls
//import { sammyBlais, kevinRooney, kaapoKaako, ryanReaves, chrisKreider,gregMckegg, patrickNemeth, ryanStrome, mikaZibanejad, barclayGoodrow, jacobTrouba, jonnyBrodzinski, igorShesterkin, drydenHunt, artemiPanarin, adamFox, ryanLindgren, julienGauthier, liborHajek, timGettinger, filipChytil, morganBarron, alexanderGeorgiev, morganBarron, kandreMiller, bradenSchneider, alexisLafreniere  } from "./API/PlayerStats";
import {getPlayer, players} from './API/PlayerStats';
import {useState} from "react";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {

  const [player, setPlayer] = useState(null); // made the player a state variable  // setPlayer sets the state
  const handleGetPlayer = async (id) => {
    const player = await getPlayer(id);
    setPlayer(player.people[0]);

  }

  const getStats = () => {
    
    axios.get('https://statsapi.web.nhl.com/api/v1/teams/3')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const getTeamStats = () => {
    
    axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/stats')
    .then(res => {  
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const getRoster = () => {
    axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/roster')
    .then(res => {
      
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    
    <div className="App">
      <h1>
      Welcome Rangers Fans
    </h1>

      <div>
        <Button variant="secondary" onClick={getStats}>Get Hockey Stats</Button>

        <button onClick={getTeamStats}>Get Team Hockey Stats</button>

        <button onClick={getRoster}>Get Hockey Team Roster</button>

        <Button variant="success" onClick={() => handleGetPlayer(players.sammyBlais)}>Sammy Blais Stats</Button>
        
{player? JSON.stringify(player) : "no player"}


        

      </div>
    </div>
  );
}

export default App;
