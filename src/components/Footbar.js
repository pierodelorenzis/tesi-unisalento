import React, {useContext} from 'react';
import GlobalContext from './GlobalContext';
import './Style.scss';

const Footbar = () => {

    const {displayMode} = useContext(GlobalContext);

    return (

        <div>
            <div className='footbar'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className={`col-md-4 left ${displayMode}`}>
                            <p className='mb-0'>Università del Salento - Piazza Tancredi, n7 - 73100 Lecce</p>
                            <p className='mb-0'>telefono +39 0832 29 11 11</p>
                            <p className='mb-0'>P.I. 00646640755 - C.F. 80008870752</p>
                            <p className='mb-0'>PEC <a href='#'> amministrazione.centrale@cert-unile.it</a></p>
                        </div>

                        <div className="col-md-8 right">
                            <div className='row'>
                            <div className='col'>
                                <p>Amministrazione trasparente</p>
                                <p>Bandi e concorsi</p>
                                <p>Posta elettronica</p>
                                <p>Atti di notifica</p>
                                <p>Il tuo feedback</p>
                                <p>Rubrica</p>
                            </div>
                            <div className='col'>
                                <p>Albo online</p>
                                <p>Gare e appalti</p>
                                <p>Note legali</p>
                                <p>Ufficio comunicazione e URP</p>
                                <p>Studenti con disabilità e/o DSA</p>
                                <p>Dichiarazione di accessibilità</p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='footbar-mobile'>
                <div className='container-fluid p-0'>

                    <div className="row first">
                        <p>Amministrazione trasparente</p>
                        <p>Bandi e concorsi</p>
                        <p>Posta elettronica</p>
                        <p>Atti di notifica</p>
                        <p>Il tuo feedback</p>
                        <p>Rubrica</p>
                        <p>Albo online</p>
                        <p>Gare e appalti</p>
                        <p>Note legali</p>
                        <p>Ufficio comunicazione e URP</p>
                        <p>Studenti con disabilità e/o DSA</p>
                        <p>Dichiarazione di accessibilità</p>
                    </div>
                    <div className='row second'>
                        <p className='mb-0'>Università del Salento - Piazza Tancredi, n7 - 73100 Lecce</p>
                        <p className='mb-0'>telefono +39 0832 29 11 11</p>
                        <p className='mb-0'>P.I. 00646640755 - C.F. 80008870752</p>
                        <p className='mb-0'>PEC <a href='#'> amministrazione.centrale@cert-unile.it</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footbar;
