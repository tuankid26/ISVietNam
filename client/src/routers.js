import React from 'react';
import Home from './pages/Home';
import Location from './pages/Location.jsx';
import Place from './pages/Place.jsx';
import Hotel from './pages/Hotel';
import Login from './Components/login/login'
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/location',
        exact : false,
        main : ({match, Location}) => <Location match = {match} location={Location} />
    },
    {
        path : '/place',
        exact : false,
        main : () => <Place />
    },
    {
        path : '/login',
        exact : false,
        main : (location) => <Login location={location} />
    },
]

export default routes;