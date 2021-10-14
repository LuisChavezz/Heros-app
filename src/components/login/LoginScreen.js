
import { GrLogin } from 'react-icons/gr';
import { useHistory } from 'react-router';

export const LoginScreen = (props) => {
    
    let history = useHistory();

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
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
