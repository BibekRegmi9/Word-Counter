

import Header from "./components/Header"
import Home from './components/Home'
import About from "./components/About"


function App() {

  

  return (
    <>
    <Header />
    <div className="container my-3">
    <Home heading = "Enter the text to analyze"/>
    </div>
    {/* <About/> */}
    
    </>
  );
}



export default App;
