import React from "react";
import {searchGames} from "../../services/gameHttp";
import {useState} from "react";
import './search.css';

export const Search = () => {

    const [games, setGames] = useState([]);

    const handleSearch = (e) => {
        let val = e.target.value;
        if (val.length > 1){
            searchGames(val).then(gamesResult => {
                setGames(gamesResult.results);
            });
        }else{
            setGames([]);
        }
    }

    const handleBlur = (e) => {
        setGames([]);
        e.target.value = '';
    }

    return (
        <div className="search">
            <input type="search"
                   name="search"
                   id="search"
                   onKeyUp={handleSearch}
                   onBlur={handleBlur}
            />
            { games.length > 0 &&
                <ul>
                    {games.map(game => <li key={game.id}>{game.name}</li>)}
                </ul>
            }
        </div>
    )
}
