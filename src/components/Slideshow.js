import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Style.scss';
import image1 from '../images/cesine_scavo.jpg';
import image2 from '../images/master_23-24.jpg';
import image3 from '../images/portale_studenti.jpg';
import image4 from '../images/master_23-24.jpg'
import GlobalContext from './GlobalContext';

const Slideshow = () => {

  const { cssValue } = useContext(GlobalContext);

  return (

    <>

      <div className={`carosello ${cssValue}`}>

        <Carousel
          showArrows={false}
          showThumbs={false} // Nascondi le miniature
          showStatus={false} // Nascondi lo stato del carosello
          infiniteLoop={true} // Attiva il looping infinito
          autoPlay={true} // Avvia lo slideshow automaticamente
          interval={7000} // Intervallo di tempo tra le immagini (in millisecondi)
        >
          <div>
            <img src={image1} alt="Immagine 1" />
          </div>
          <div>
            <img src={image2} alt="Immagine 2" />
          </div>
          <div>
            <img src={image3} alt="Immagine 3" />
          </div>
          <div>
            <img src={image4} alt="Immagine 4" />
          </div>
        </Carousel>

      </div>
    </>
  );
};

export default Slideshow;
