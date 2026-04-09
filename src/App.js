import Counter from "./counter/Counter.jsx"
import Htmltags from "./htmltags/htmltags.jsx";
import Images from "./images/imges.jsx"
import Link from "./textnav/Links.jsx"
import Buttons from "./button/Buttons.jsx"
import TopNavbar from "./nav/TopNavbar.jsx"
//import SideNav from "./nav/SideNavbar.jsx";
import Inlinecss from "./CSS/Iinline/inlinecss.jsx"
import Internal from "./CSS/internal/internalcss.jsx"
import External from "./CSS/external/externalcss.jsx"
import Card from "./Card/Card.jsx"
import Forms from "./forms/forms.jsx"
import Render from "./render/render.jsx"
import Animations from "./animations/Animationsfile.jsx"

import {Routes,Route} from "react-router-dom";
 function App(){
  return(
    <>
      <TopNavbar/>
      {/* <SideNav/> */}
      <Routes>
        <Route path="/counter"  element={<Counter/>}/>
        <Route path="/htmltags" element={<Htmltags/>}/>
        <Route path="/images" element={< Images/>}/>
        <Route path="/links" element={< Link/>}/>
        <Route path="/button" element={< Buttons/>}/>
        <Route path="/inline" element={< Inlinecss/>}/>
        <Route path="/internal" element={< Internal/>}/>
        <Route path="/external" element={< External/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/render" element={<Render/>}/>
        <Route path="/forms" element={<Forms/>}/>
        <Route path="/animations" element={<Animations/>}/>
      </Routes>
    </>
  
);
}
export default App;