import './App.css';
import Topbar from './components/Topbar';
import MenuBar from './components/MenuBar';
import Footbar from './components/Footbar';
import Slideshow from './components/Slideshow';
import PortletContent from './components/PortletContent';
import CarbonButton from './components/CarbonButton';
import { GlobalProvider } from './components/GlobalContext';

function App() {
  return (
    <div className="App">
      
      <GlobalProvider>

        <CarbonButton/>

        <Topbar/>
        <MenuBar/>
        <Slideshow/>
        <PortletContent/>
        <Footbar/>

      </GlobalProvider>
    </div>
  );
}

export default App;
