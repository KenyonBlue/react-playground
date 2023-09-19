import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    sortByJersy: () => void;
    reset: () => void;
}

const Header = ({sortByJersy, reset}: HeaderProps) => {
  return (
    <>
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', margin: 8, padding: 4}}>
        <button onClick={() => sortByJersy()} style={{background: 'black', color: 'white', paddingRight: 10, paddingLeft: 10}}>Sort by Jersey</button>
        <button onClick={() => reset()} style={{marginLeft: 40, background: 'black', color: 'white', paddingRight: 10, paddingLeft: 10}}>reset</button>
        <Link to='/'>
        <button style={{marginLeft: 40, background: 'orange', color: 'white', paddingRight: 10, paddingLeft: 10}}>team</button>
        </Link>
        <Link to='/form'>
        <button style={{marginLeft: 40, background: 'orange', color: 'white', paddingRight: 10, paddingLeft: 10}}>form</button>
        </Link>
    </div>
    </>
  )
}

export default Header