import { useGoogleLogin } from '@react-oauth/google';
import { styles } from '../style';
// import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../api/googleOAuth';
import iconGoogle from '../../public/iconGoogle.svg'

const GoogleAuthButton = () => {
    const[, setUser] = useLocalStorage('user', '');
    const navigate = useNavigate();
    
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                // const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + response.access_token);
                // console.log(res);
                
                const tokenData = response.access_token;
                const authUser = googleAuth(tokenData);
                
                setUser(authUser)
                navigate('/')
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <div className=' '>
            <button onClick={() => login()} className={`${styles.secondaryBtn}`}>
                <img src={iconGoogle} alt="icon-google" className="w-5" />
                Continuar con Google
            </button>;
        </div>
    )
}

export default GoogleAuthButton;