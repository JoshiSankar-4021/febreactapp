import { NavLink } from "react-router-dom";
import "./SideNavbar.css";
function SideNav(){
    return(
    <div className="Sidediv">
        <NavLink to="/counter" className="navlinkside">Counter</NavLink>
        <NavLink to="/htmltags" className="navlinkside">Html tages</NavLink>
        <NavLink to="/images" className="navlinkside">Images</NavLink>
        <NavLink to="/links" className="navlinkside">Links</NavLink>
        <NavLink to="/button" className="navlinkside">button</NavLink>
        <NavLink to="/inline" className="navlinkside">inline</NavLink>
        <NavLink to="/internal" className="navlinkside">internal</NavLink>
        <NavLink to="/external" className="navlinkside">external</NavLink>
        <NavLink to="/card" className="navlinkside">card</NavLink>
        <NavLink to="/render" className="navlinkside">render</NavLink>
    </div>
);
}export default SideNav;