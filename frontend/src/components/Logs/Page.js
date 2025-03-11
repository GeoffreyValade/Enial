import React from 'react';
import Login from './Login.js';
import Disconnect from './Disconnect';

//{hasToken ? <Disconnect /> : <Login />}

export default function Page() {
    const hasToken = localStorage.getItem('token');

    return (
        <div>
            <Login />
        </div>
    );
}