import React, {useState, useEffect} from "react";
import {Spinner} from "../spinner/Spinner";
import {Game} from "../game/Game";
import './home.css';
import {getBestGames} from "../../services/gameHttp";

export const Home = ({fn}) => {

    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(false);

    // function compare(a, b) {
    //     if (a.rating > b.rating) {
    //         return -1;
    //     }
    //     if (a.rating < b.rating) {
    //         return 1;
    //     }
    //     return 0;
    // }

    useEffect(() => {
        setLoad(false);
        fn(1, 40).then(gamesResult => {
            // if (fn === getBestGames) {
            //     setGames(gamesResult.results.sort(compare))
            // } else {
            //     setGames(gamesResult.results);
            // }

            setGames(gamesResult.results);
            setLoad(true)
        });
    }, [fn])

    return (
        <section className="games">
            {!load && <Spinner/>}
            {games && load &&
            games.map(game => {
                return <Game key={game.id} infos={game}/>
            })
            }
        </section>
    );
}
