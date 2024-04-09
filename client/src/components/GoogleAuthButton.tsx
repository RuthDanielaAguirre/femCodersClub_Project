import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { styles } from '../style';

const GoogleAuthButton = () => {
    const[, setUser] = useLocalStorage('user', '');
    const navigate = useNavigate();

    const login = async (credentialResponse: CredentialResponse) => {
        try{
            const result = await axios.post('https://femcodersclub-project.onrender.com/google-authentication', {token:credentialResponse.credential});
            const googleUser = result.data;
            console.log(googleUser);
            setUser(googleUser);
            navigate('/')
        }catch(err){
            console.log(err, "error in conection with backend")
        }
    }

    return (
        <div className={`${styles.secondaryBtn}`}>
            <GoogleLogin
                onSuccess={credentialResponse => {login(credentialResponse)}}

                onError={() => {
                    console.log('Login Failed');
                }}
                />
        </div>
    )
}

export default GoogleAuthButton;