import Slack from "/slack.jpg";
import { Link } from "react-router-dom";

const SlackButton = () => {
    return (
        <div>
            <Link to="https://communityinviter.com/apps/femcodersclub/femcoders-club">
                <button 
                    type="button" 
                    className="flex items-center text-white bg-primary/20 shadow-md hover:bg-accent font-headerText font-bold rounded-lg text-sm px-5 py-2 mt-2 mb-2" >
                    <img src={Slack} alt="Slack Logo" className="w-6 mr-2" /> 
                    <span> Unirme al Slack </span> 
                </button>
            </Link>
        </div>
    )
}

export default SlackButton;
