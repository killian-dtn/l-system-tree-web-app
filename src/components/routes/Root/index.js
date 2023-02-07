import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header';
import './style.css';

export default class Root extends React.Component {
    render() {
        return (
            <div className="App">
                <Header backButtonVisible={false}/>
                <div className="App-body">
                    <Outlet />
                </div>
            </div>
        );
    }
}
