import React from 'react';
import TeamCounter from "./Components/Counter/TeamCounter"
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <Landing />
      <TeamCounter max={ 9 } min={ 0 }>Team</TeamCounter>
    </>
  )
}

export default App;
