import React, { FormEvent } from 'react'
import { IFootballTeam } from '../constants'

interface PlayerformProps {
    setTeam: (team: any) => void
}

const Playerform = ({ setEditPlayer, editPlayer, setjerseyNumber, setTeam, setFirstName, setlastName, setposition, firstName, lastName, position, jerseyNumber}: any) => {
  

    function addPlayer(e: Event | FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(firstName, lastName, position, jerseyNumber);
        if (editPlayer !== -1) {
            setTeam((prevTeam: IFootballTeam[]) => {
                prevTeam[editPlayer] = { firstName, lastName, position, jerseyNumber }
                console.log(prevTeam);
                return [...prevTeam]
        });
        setEditPlayer(-1);
    } else {
        setTeam((prevTeam: IFootballTeam[]) => {
            return [...prevTeam, { firstName, lastName, position, jerseyNumber }]
    });
        }
        setFirstName('')
        setlastName('')
        setposition('')
        setjerseyNumber('')
    }

    return (
        <form onSubmit={(e) => addPlayer(e)} style={{ margin: 20, display: 'flex', flexDirection: 'column', width: '50vw', height: 'auto', border: '1px solid black', padding: 20 }}>
            <label style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                first name:
                <input value={firstName} type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                last name:
                <input value={lastName} type="text" name="lastName" onChange={(e) => setlastName(e.target.value)} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                position:
                <input value={position} type="text" name="position" onChange={(e) => setposition(e.target.value)} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                jersey number:
                <input value={jerseyNumber} type="text" name="jerseyNumber" onChange={(e) => setjerseyNumber(e.target.value)} />
            </label>
            <button type='submit' style={{ margin: 10 }}>submit</button>
        </form>
    )
}

export default Playerform