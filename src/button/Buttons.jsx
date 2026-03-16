import {useNavigate} from "react-router-dom";
function Buttons(){
    const navigate = useNavigate();
    return(
    <div>
        <button onClick={()=>{navigate("/images")}}>
        IMAGES
        </button>
    </div>
);
}export default Buttons;