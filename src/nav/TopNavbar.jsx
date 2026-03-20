import { NavLink } from "react-router-dom";
import "./TopNavbar.css"
function TopNavBar(){
    return(
    <div className="topdiv">
        
        <NavLink to="/counter" className="navlinktop">Counter</NavLink>
        <NavLink to="/htmltags" className="navlinktop">Html tages</NavLink>
        <NavLink to="/images" className="navlinktop">Images</NavLink>
        <NavLink to="/links" className="navlinktop">Links</NavLink>
        <NavLink to="/button" className="navlinktop">button</NavLink>
        <NavLink to="/inline" className="navlinktop">inline</NavLink>
        <NavLink to="/internal" className="navlinktop">internal</NavLink>
        <NavLink to="/external" className="navlinktop">external</NavLink>
        <NavLink to="/card" className="navlinktop">card</NavLink>
        <NavLink to="/render" className="navlinktop">render</NavLink>
        <NavLink to="/forms" className="navlinktop">Forms</NavLink>

    </div>
);
}export default TopNavBar;