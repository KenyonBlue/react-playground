import React from 'react'
import { IFootballTeam, footballTeam } from '../constants'

interface TeamProps {
    team: IFootballTeam[],
    deletePlayer: (idx: number) => void
}



const Team = ({ team, deletePlayer }: TeamProps) => {

    const [selectedPlayer, setSelectedPlayer] = React.useState<number | null>(null)
    return (
        <>
            {team.map((player, idx) => {
                return (
                        <div key={idx} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>

                            <div onClick={() => setSelectedPlayer(idx)} style={{ width: '100%', color: selectedPlayer == idx ? 'red' : 'black', backgroundColor: 'white', border: '1px solid black' }}>
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