import React, { useContext } from 'react';
import { useState , useEffect} from 'react';
import './Style.scss'; // Crea il file MyButton.css per applicare lo stile personalizzato
import GlobalContext from './GlobalContext';
import CarbonIntensity from "./CarbonIntensity";


const CarbonButton = () => {

    const [carbonIntensity, setCarbonIntensity] = useState(null);
    const { cssValue, setCssValue } = useContext(GlobalContext);

    // Effettua la chiamata iniziale al caricamento della pagina
  useEffect(() => {
    CarbonIntensity().then((carbonIntensity) => {
      setCarbonIntensity(carbonIntensity);
    });
  }, []);

  // Aggiorna il valore di cssValue quando carbonIntensity cambia o quando viene premuto il bottone "LIVE"
  useEffect(() => {
    if (carbonIntensity !== null) {
      setCssValue(carbonIntensity > 200 ? 'highCarbon' : 'lowCarbon');
    }
  }, [carbonIntensity, setCssValue]);

  const handleLiveClick = () => {
    // Effettua la chiamata a CarbonIntensity quando il bottone "LIVE" viene cliccato
    CarbonIntensity().then((carbonIntensity) => {
      setCarbonIntensity(carbonIntensity);
    });
  };

    const lowCarbon = () => {
        setCssValue('lowCarbon')
    }

    const highCarbon = () => {
        setCssValue('highCarbon')
    }

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    console.log(carbonIntensity);

    return (

        <div>
        <button className='carbon-button' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg>
        </button>
        {menuVisible && (
            <div className={`menu ${menuVisible ? 'visible' : ''}`}>
                <div className='close'><button className='menu-close' onClick={toggleMenu}>x</button></div>
                <p className='mb-0'>CARBON INTENSITY</p>
                <button className='menu-item' onClick={handleLiveClick}>LIVE</button>
                <button className='menu-item' onClick={lowCarbon}>LOW</button>
                <button className='menu-item' onClick={highCarbon}>HIGH</button>
            </div>
        )}
        </div>
    );

};

export default CarbonButton;
