import { googleRegister } from "../../../api/registerApi";
import { styles } from "../../../style";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
    const navigate = useNavigate();

    const onClick =  async () => {
        try{
            await googleRegister()
            navigate('/')
        }catch(error){
            console.log('something went wrong')
        }
    }
    
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="button" onClick={onClick} className={`${styles.secondaryBtn}`}>
                <img src="../../../../public/icon-google.svg" alt="icon-google" className="w-5" />
                Registrarme con Google
            </button>
        </div>
    )
}

export default GoogleButton