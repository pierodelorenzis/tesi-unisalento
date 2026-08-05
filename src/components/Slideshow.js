import React, {useContext, useEffect} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Style.scss';
import GlobalContext from './GlobalContext';

const Slideshow = () => {

    const {displayMode} = useContext(GlobalContext);

    const [currentImage1, setCurrentImage1] = React.useState(null);
    const [currentImage2, setCurrentImage2] = React.useState(null);
    const [currentImage3, setCurrentImage3] = React.useState(null);
    const [currentImage4, setCurrentImage4] = React.useState(null);

    const switchToImage1 = async () => {
        const imageModule1 = await import('../images/cesine_scavo.jpg');
        const imageModule2 = await import('../images/master_23-24.jpg');
        const imageModule3 = await import('../images/portale_studenti.jpg');
        const imageModule4 = await import('../images/studenti_dallalto.jpeg');
        setCurrentImage1(imageModule1.default);
        setCurrentImage2(imageModule2.default);
        setCurrentImage3(imageModule3.default);
        setCurrentImage4(imageModule4.default);
    };
    const switchToImage2 = async () => {
        const imageModule1 = await import('../images/cesine_scavo_low.jpg');
        const imageModule2 = await import('../images/master_23-24_low.jpg');
        const imageModule3 = await import('../images/portale_studenti_low.jpg');
        const imageModule4 = await import('../images/studenti_dallalto_low.jpg');
        setCurrentImage1(imageModule1.default);
        setCurrentImage2(imageModule2.default);
        setCurrentImage3(imageModule3.default);
        setCurrentImage4(imageModule4.default);
    };

    useEffect(() => {
        // La logica che determina quale funzione chiamare in base al valore di carbon intensity
        if (displayMode === 'mediumCarbon') {
            switchToImage2();
        } else if (displayMode === 'lowCarbon') {
            switchToImage1();
        }
    }, [displayMode]);

    if (displayMode === 'highCarbon') {
        return null;
    }

    return (
            <div className={`carosello`}>
                <Carousel
                    showArrows={false} // Nasconde le frecce di scorrimento
                    showThumbs={false} // Nasconde le miniature
                    showStatus={false} // Nasconde lo stato del carosello
                    infiniteLoop={true} // Attiva il looping infinito
                    autoPlay={true} // Avvia lo slideshow automaticamente
                    interval={7000} // Intervallo di tempo tra le immagini (in millisecondi)
                >
                    <div>
                        <img src={currentImage1} alt="Immagine 1"/>
                    </div>
                    <div>
                        <img src={currentImage2} alt="Immagine 2"/>
                    </div>
                    <div>
                        <img src={currentImage3} alt="Immagine 3"/>
                    </div>
                    <div>
                        <img src={currentImage4} alt="Immagine 4"/>
                    </div>
                </Carousel>
            </div>
    );
};
export default Slideshow;
