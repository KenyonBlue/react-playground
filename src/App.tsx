import React, { useState } from 'react';
import Team from './components/team';
import Header from './components/header';
import { IFootballTeam, footballTeam } from './constants';
import Playerform from './components/playerform';
import RandomStuffapi from './components/randomStuffapi';
import { Route, Routes } from 'react-router-dom';
import ComponentTree from './components/componentTree';

function App() {
  const [team, setTeam] = useState(footballTeam)
  const [firstName, setFirstName] = React.useState('')
    const [lastName, setlastName] = React.useState('')
    const [position, setposition] = React.useState('')
    const [jerseyNumber, setjerseyNumber] = React.useState('')
    const [editPlayer, setEditPlayer] = React.useState(-1)

  const sortByJersy = () => {
    const sortedTeam = [...team].sort((a, b) => {
      return a.jerseyNumber - b.jerseyNumber
    })
    setTeam(sortedTeam)
  }

  const reset = () => {
    setTeam(footballTeam)
  }

  const deletePlayer = (idx: number) => {
    const x = [...team].filter((_, i) => i !== idx)
    setTeam(x)
  }


  return (
    <Routes  >

      <Route path="/" element={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 24 }}>
                   <Header reset={reset} sortByJersy={sortByJersy} />
          <Playerform 
          editPlayer={editPlayer} setEditPlayer={setEditPlayer}
          setjerseyNumber={setjerseyNumber}
          setFirstName={setFirstName}
          setlastName={setlastName}
          setposition={setposition}
          firstName={firstName} 
          lastName={lastName} 
          position={position} 
          jerseyNumber={jerseyNumber} 
          setTeam={setTeam} />
          <Team editPlayer={editPlayer} setEditPlayer={setEditPlayer} deletePlayer={deletePlayer} team={team}  setjerseyNumber={setjerseyNumber}
          setFirstName={setFirstName}
          setlastName={setlastName}
          setposition={setposition}
          firstName={firstName} 
          lastName={lastName} 
          position={position} 
          jerseyNumber={jerseyNumber}  />
          <ComponentTree/>
          <RandomStuffapi />
        </div>
      } />

      <Route path="/team" element={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 24 }}>
          <Header reset={reset} sortByJersy={sortByJersy} />
          <Team deletePlayer={deletePlayer} team={team} />
          <RandomStuffapi />
        </div>
      } />

    </Routes>
  );
}

export default App;
