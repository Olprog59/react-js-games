import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {getBestGames, getLastGames} from "./services/gameHttp";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />

            <Switch>
                <Route path='/' exact>
                    <Home fn={getLastGames} />
                </Route>
                <Route path='/rating' exact>
                    <Home fn={getBestGames}/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
