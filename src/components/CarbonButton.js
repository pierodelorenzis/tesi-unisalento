import React, {useContext} from 'react';
import {useState, useEffect} from 'react';
import './Style.scss';
import GlobalContext from './GlobalContext';
import CarbonIntensity from "./CarbonIntensity";
const CarbonButton = () => {

    const {displayMode, setDisplayMode} = useContext(GlobalContext);

    // Effettua la chiamata iniziale al caricamento della pagina
    /*useEffect(() => {
        handleLiveClick()
    }, []);*/

    const handleLiveClick = async () => {
        try {
            const carbonIntensity = await CarbonIntensity();
            if (carbonIntensity > 400) {
                setDisplayMode('highCarbon');
            } else if (carbonIntensity > 250) {
                setDisplayMode('mediumCarbon');
            } else {
                setDisplayMode('lowCarbon');
            }
        } catch (error) {
            console.error('Impossibile recuperare la carbon intensity:', error.message);
        }
    };

    const lowCarbon = () => {
        setDisplayMode('lowCarbon')
        console.log(displayMode);
    }
    const mediumCarbon = () => {
        setDisplayMode('mediumCarbon')
        console.log(displayMode);
    }
    const highCarbon = () => {
        setDisplayMode('highCarbon')
        console.log(displayMode);
    }

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <div>
            <button className='carbon-button' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                </svg>
            </button>
            {menuVisible && (
                <div className={`menu ${menuVisible ? 'visible' : ''}`}>
                    <div className='close'>
                        <button className='menu-close' onClick={toggleMenu}>x</button>
                    </div>
                    <p className='mb-0'>CARBON INTENSITY</p>
                    <button className='menu-item-live' onClick={handleLiveClick}>LIVE</button>
                    <button className='menu-item' onClick={lowCarbon}>LOW</button>
                    <button className='menu-item' onClick={mediumCarbon}>MEDIUM</button>
                    <button className='menu-item' onClick={highCarbon}>HIGH</button>
                </div>
            )}
        </div>
    );
};
export default CarbonButton;
