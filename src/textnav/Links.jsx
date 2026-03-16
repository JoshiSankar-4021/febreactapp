import {Link,NavLink} from "react-router-dom";

function Links(){
    return(
    <div>
        <h1>LINK</h1>
        <Link to="/counter"> Counter </Link>

        <h1>NAV LINK</h1>
        <NavLink to="/htmltags">HTML TAGS</NavLink>
    </div>
);
}export default Links;