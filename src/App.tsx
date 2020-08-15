import './App.scss';
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Notes from './notes/notes';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Redirect from="/" to="/notes"></Redirect>
            <Switch>
                <Route path="/notes" component={Notes}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
