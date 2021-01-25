import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import React from "react";
import MainPage from "./MainPage";
import EquationPage from "./EquationPage";
import TrianglePage from "./TrianglePage";
import PitagorasPage from "./PitagorasPage";


export const history = createHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path={"/"} component={MainPage} exact={true}/>
                <Route path={"/equation"} component={EquationPage}/>
                <Route path={"/triangle"} component={TrianglePage}/>
                <Route path={"/pitagoras"} component={PitagorasPage}/>
            </Switch>
        </Router>
    );
}

export default App;
