import Counter from "./counter/Counter.jsx"
import Htmltags from "./htmltags/htmltags.jsx";
import Images from "./images/imges.jsx"
import Link from "./textnav/Links.jsx"
import Buttons from "./button/Buttons.jsx"
import TopNavbar from "./nav/TopNavbar.jsx"
import SideNav from "./nav/SideNavbar.jsx";
import {Routes,Route} from "react-router-dom";
 function App(){
  return(
    <>
      <TopNavbar/>
      <SideNav/>
      <Routes>
        <Route path="/counter"  element={<Counter/>}/>
        <Route path="/htmltags" element={<Htmltags/>}/>
        <Route path="/images" element={< Images/>}/>
        <Route path="/links" element={< Link/>}/>
        <Route path="/" element={< Buttons/>}/>
      </Routes>
    </>
  
);
}
export default App;