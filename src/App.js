import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import  "./App.module.css"

import MiddleContent from './components/Middle_Compo';
import BottomContent from './components/Bottom_Compo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MiddleContent />
      <BottomContent />
      <Footer/>
    </div>
  );
}

export default App;
