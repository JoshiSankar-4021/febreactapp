import Counter from "./counter/Counter.jsx"
import Htmltags from "./htmltags/htmltags.jsx";
import Images from "./images/imges.jsx"
 function App(){
  return(
    <div>
      <Counter/>
      {/* component calling Counter() */}
      <Htmltags/>
      <Images/>
    </div>
  
);
}
export default App;