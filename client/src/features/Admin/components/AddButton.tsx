import { styles } from "../../../style";

const AddButton = () => {
    const handleOnClick = () =>{

    }
    return (
        <div className="flex items-end flex-col w-full mb-5">
            <button type="submit" aria-label="signUpBtn" onClick={handleOnClick} className={`${styles.addBtn}`}>
                Agregar
                </button>
        </div>
    )
    }

export default AddButton;