import React, { useContext, createContext, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                ></Redirect>

            } />
    );
};

export default PrivateRoute;