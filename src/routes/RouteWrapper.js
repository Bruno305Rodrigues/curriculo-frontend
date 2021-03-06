import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const user = useSelector(state => state.user);
    let signed = false;

    if (user) {
        signed = true;
    }

    if (!signed && isPrivate) {
        return <Redirect to="/login" />
    }

    return (
        <Route { ...rest } render={props => (
             <Component {...props} />
         )} />
    );
};