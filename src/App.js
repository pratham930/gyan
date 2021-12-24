
import './App.css';
import Nav from './Nav';
import Grid from "./Grid"
import Mid from './Mid';
import Mid2 from './Mid2';
import Gallery from './Gallery';
import Foot from './Foot';
import Kard from "./Kard"
import Footer from './Footer';
import Bich from './Bich';

function App() {
  return (
    <div className="App">
    
<header>

<div className="p">payonline</div>
<div className="l">login</div>
<div className="m">Mandatory Public Disclosure</div>
</header>
<Nav/>
<Grid></Grid>
<Bich/>
<Kard/>
<Mid></Mid>

<Mid2></Mid2>
<Gallery/>
<Foot/>
<Footer/>
    </div>
  );
}

export default App;
