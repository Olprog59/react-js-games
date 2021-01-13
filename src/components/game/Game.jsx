import React from "react";
import './game.css';
import {parseDate} from "../../utils/dateFormat";

export const Game = ({infos})=>{

    return (
        <article>
            <h4>{infos.name}</h4>
            <figure>
                <div>
                    <img src={infos.background_image} alt=""/>
                    <div className='note'>
                        <div>Note : {infos.rating}</div>
                        <div className="percent" style={{
                            width: infos.rating > 0 ? 'calc(100%  / ((5 / ' + infos.rating + ')))' : 0,
                            backgroundColor: "red",
                            height: '5px'
                        }}/>
                    </div>
                </div>
                <figcaption>{parseDate(infos)}</figcaption>
            </figure>
        </article>
    );
}
