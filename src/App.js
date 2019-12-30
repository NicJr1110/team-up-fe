import React from 'react';
import TeamCounter from "./Components/Counter/TeamCounter";
import PlayerCounter from "./Components/Counter/PlayerCounter";
import Landing from "./Components/Landing/Landing";
import InputPlayer from "./Components/InputPlayer";
import PlayerList from "./Components/PlayerList";
import TeamSplitter from "./Components/TeamSplitter";

function App() {
  return (
    <>
      <Landing />
      <TeamCounter max={ 9 } min={ 1 }>Team</TeamCounter>
      <PlayerCounter max={ 20 } min={ 1 }>Players</PlayerCounter>
      <InputPlayer></InputPlayer>
      <PlayerList/>
      <TeamSplitter />
    </>
  )
}

export default App;
