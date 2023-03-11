import logo from './logo.svg';
import './App.css';
import './componet/layout/Style/StyleMain.css';
import Header from './componet/layout/Header';
import './componet/layout/Style/StyleHeader.css';
import Intro from './componet/layout/Intro';
import './componet/layout/Style/StyleIntro.css';
import Programs from './componet/layout/Programs';
import './componet/layout/Style/StylePrograms.css';
import Footer from './componet/layout/Footer';
import './componet/layout/Style/StyleFooter.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='Content'>
        <Intro></Intro>
        <Programs></Programs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
