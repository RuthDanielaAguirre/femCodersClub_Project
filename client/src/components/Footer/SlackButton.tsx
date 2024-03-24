import Slack from "/slack.jpg"
import { Link } from "react-router-dom";


const SlackButton = () => {
    

    return (
        <div className="flex items-center justify-center">
            <Link to="https://femcodersclub.slack.com">
                <button 
                    type="button" 
                    className="flex items-center text-white bg-primary/20 shadow-md me-8  hover:bg-accent font-headerText font-bold rounded-lg text-sm px-5 py-2 me-2 sm:my-4" 
                >
                     <img src={Slack} alt="Slack Logo" className="w-6 mr-2" /> 
                     <span> Unirme al Slack </span> 
                   
                </button>
            </Link>
            
        </div>
    )
}

export default SlackButton;
