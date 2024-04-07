import { useGoogleLogin } from '@react-oauth/google';
import { styles } from '../style';
// import axios from 'axios';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../api/googleOAuth';
import iconGoogle from '../../public/iconGoogle.svg'

const GoogleAuthButton = () => {
    // const[, setUser] = useLocalStorage('user', '');
    // const navigate = useNavigate();
    
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                // const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + response.access_token);
                // console.log(res);
                
                // const authUser = {
                //     name: res.data.given_name,
                //     lastName: res.data.family_name,
                //     gender: '',
                //     email: res.data.email,
                //     telephone:'',
                // }
                // setUser(authUser);
                
                const accessToken = response.access_token;

                const tokenData = JSON.stringify({token: accessToken})
                const authUser = await googleAuth(tokenData)
                // console.log(authUser);
                // setUser(authUser);

                // navigate('/')
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
            </button>
        </div>
    )
}

export default GoogleAuthButton;