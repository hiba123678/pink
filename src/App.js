import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as mdb from 'mdb-ui-kit'; 
import StandardImageList from './Components/StandardImageList';
import BestPrice from './Components/BestPrice';
import IconAvatars from './Components/IconAvatars.jsx';
import HeaderProduct from './Components/HeaderProduct';
// import One from './Components/One';
// import AllTeam from './Components/AllTeam';
import Subscribe from './Components/Subscribe';
import AllWeb from './Components/AllWeb';
import Social from "./Components/Social";
import Footer from './Components/Footer';
function App() {
  return (
   <>
   <Navbar />
  
   <Home />
   <br/>  <br/>
   <IconAvatars/> <br/> <br/> <br/> <br/>
   <br/>
   <StandardImageList/>  <br/>  <br/>  <br/>
  <HeaderProduct /><br/>  <br/>

  <BestPrice/><br/>  <br/>
  {/* <One/>
  <AllTeam/> */}
  <Subscribe/>
  <AllWeb/>
<Social/>
<Footer/>
   </>
  );
}

export default App;
