import { NavLink } from "react-router-dom";
function TopNavBar(){
    return(
    <div>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/htmltags">Html tages</NavLink>
        <NavLink to="/images">Images</NavLink>
        <NavLink to="/links">Links</NavLink>
        <NavLink to="/">button</NavLink>
    </div>
);
}export default TopNavBar;