import React from 'react';
import './Style.scss';
import image1 from '../images/UniSalento_2324.jpg';
import image2 from '../images/post_dottorato.jpg';


const PortletContent = () => {
    return (
        <div className='portlet-content'>

            <h2 className='mb-0'>PRIMO PIANO</h2>

            <div className='line' />

        
            <div className='row content'>

                <div className='col-6'>
                    <img className='col1' src={image1} alt='immagine 1'></img>
                    <h2>OFFERTA FORMATIVA 2023/2024: NOVITÀ</h2>
                </div>

                <div className='col-6'>
                    <img className='col2' src={image2} alt='immagine 2'></img>
                    <h2>DOTTORATO NAZIONALE PA</h2>
                </div>

            </div>

        </div>
    );
}

export default PortletContent