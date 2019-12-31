import React from 'react';
import TeamCounter from "./Components/Counter/TeamCounter";
//import PlayerCounter from "./Components/Counter/PlayerCounter";
import Landing from "./Components/Landing";
import InputPlayerGroup from "./Components/InputPlayerGroup";
//import PlayerList from "./Components/PlayerList";
import TeamSplitter from "./Components/TeamSplitter";
import TeamCards from "./Components/TeamCards";

function App() {
  return (
    <>
      <Landing />
      <TeamCounter max={ 9 } min={ 2 }>Number of Teams</TeamCounter> 
      <InputPlayerGroup/>
      <TeamSplitter />
      <TeamCards/>
    </>
  )
}

export default App;
