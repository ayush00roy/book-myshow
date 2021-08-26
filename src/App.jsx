
//HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//Components
//Pages
import HomePage from "./Pages/Home.page";
function App() {
  return (
    <>
      <DefaultHOC path ="/" exact component = {HomePage}/>
    </>
  );
};

export default App;