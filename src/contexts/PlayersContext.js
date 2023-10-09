import { createContext, useState } from 'react';
import playersData from '../datas/joueurs.json';
import Player from '../classes/Player.js';

export const PlayersContext = createContext({})

export default function PlayersProvider({ children }) {
    const [players, setPlayers] = useState(getPlayers());

    return (
        <PlayersContext.Provider value={{ players }}>
            {children}
        </PlayersContext.Provider>
    )
}

function getPlayers() {
    return playersData;
    //return playersData.map(playerData => new Player(playerData));
}
