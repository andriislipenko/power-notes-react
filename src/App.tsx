import './App.scss';
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Notes } from './notes/Notes';

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/notes" component={Notes}/>
                    <Redirect from="*" to="/notes"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }
}
