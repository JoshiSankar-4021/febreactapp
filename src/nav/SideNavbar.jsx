import { NavLink } from "react-router-dom";
function SideNav(){
    return(
    <div>
        <NavLink to="/counter">Counter</NavLink><br/>
        <NavLink to="/htmltags">Html tages</NavLink><br/>
        <NavLink to="/images">Images</NavLink><br/>
        <NavLink to="/links">Links</NavLink><br/>
        <NavLink to="/">button</NavLink><br/>
    </div>
);
}export default SideNav;