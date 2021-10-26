import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';


export const PrivateRoute = ({ //props
    isAuthenticated,
    component: Component,
    ...rest
}) => {



    return (
        <Route 
            {...rest}
            component={ (props) => (
                ( isAuthenticated ) //si es true o false
                    ?   <Component {...props} /> 
                    :   <Redirect to="/login" />
            ) }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}