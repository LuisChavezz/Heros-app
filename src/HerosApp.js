import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/AuthContext"
import { AppRouter } from "./routers/AppRouter"
import { authReducer } from "./auth/authReducer"


const init = () => { //lectura del LS || seteado por defecto
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HerosApp = () => {

    const [user, dispatch] = useReducer( authReducer, {}, init);

    useEffect( () => { //guardar en login del usuario en el LS
        localStorage.setItem('user', JSON.stringify( user ));

    }, [user] );

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
