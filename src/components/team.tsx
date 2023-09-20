import React from 'react'
import { IFootballTeam, footballTeam } from '../constants'

interface TeamProps  {
    team: IFootballTeam[],
    deletePlayer: (idx: number) => void
}



const Team = ({setEditPlayer ,team, deletePlayer, setjerseyNumber, setTeam, setFirstName, setlastName, setposition,  }: TeamProps | any) => {

    const [selectedPlayer, setSelectedPlayer] = React.useState<number | null>(null)

    const editPlayer = (idx: number) => {
        setSelectedPlayer(idx);
        [...team].map((player, i) => {
            if (i === idx) {
                setEditPlayer(idx);
                setFirstName(player.firstName)
                setlastName(player.lastName)
                setposition(player.position)
                setjerseyNumber(player.jerseyNumber)
            };
        })
    }

    return (
        <>
            {team.map((player: any, idx: number) => {
                return (
                        <div key={idx} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>

                            <div onClick={() => editPlayer(idx)} style={{ width: '100%', color: selectedPlayer == idx ? 'red' : 'black', backgroundColor: 'white', border: '1px solid black' }}>
                                {player.firstName}
                            </div>
                            <div onClick={() => deletePlayer(idx)} style={{ width: '100%', color: selectedPlayer == idx ? 'red' : 'black', backgroundColor: 'white', border: '1px solid black' }}>
                                {player.lastName}
                            </div>
                            <div style={{ width: '100%', color: selectedPlayer == idx ? 'red' : 'black', backgroundColor: 'white', border: '1px solid black' }}>
                                {player.position}
                            </div>
                            <div style={{ width: '100%', color: selectedPlayer == idx ? 'red' : 'black', backgroundColor: 'white', border: '1px solid black' }}>
                                {player.jerseyNumber}
                            </div>
                        </div>
                )
            })}
        </>
    )
}
export default Team;