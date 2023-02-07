import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Header from '../../Header';
import './style.css';

/* Ugly code */
export default function Root() {
    const location = useLocation();

    return <ClassRoot location={location}/>;
}

class ClassRoot extends React.Component {
    render() {
        if (this.props.location.pathname === '/')
            return <Navigate to='/home' />;

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
