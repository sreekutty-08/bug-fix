import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";



import Homebanner from "./components/Index/Homebanner";
import Homesearch from "./components/Index/Homesearch";
import Homelist from "./components/Index/Homelist";
import "./style.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Homebanner />
      <Homesearch />
      <Homelist />

      <Footer />
    </div>
  );
}    
export default App;
