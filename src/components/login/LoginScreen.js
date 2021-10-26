
import { GrLogin } from 'react-icons/gr';
import { useHistory } from 'react-router';

import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    
    let history = useHistory();

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');

        dispatch( {
            type: types.login,
            payload: {
                name: 'Luigiberto',
            }
        } );
    }
    
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login <GrLogin />
            </button>
        </div>
    )
}
