import React from 'react';
import './Style.scss'; // Crea il file Footbar.css per applicare lo stile personalizzato

const Footbar = () => {
  return (

    <div>

    <div className='footbar'>
        <div className='container-fluid'>
            <div className='row'>

                <div className="col-md-4 left">
                    <p className='mb-0'>Università del Salento - Piazza Tancredi, n7 - 73100 Lecce</p>
                    <p className='mb-0'>telefono +39 0832 29 11 11</p>
                    <p className='mb-0'>P.I. 00646640755 - C.F. 80008870752</p>
                    <p className='mb-0'>PEC <a href='#'> amministrazione.centrale@cert-unile.it</a> </p>
                </div>

                <div className="col-md-8 right">
                    Contenuto Colonna Destra
                </div>

            </div>
        </div>
    </div>

    <div className='footbar-mobile'>

        <div className='container-fluid p-0'>

            <div className="row first">
                Contenuto Colonna Destra
            </div>

            <div className='row second'>
                    <p className='mb-0'>Università del Salento - Piazza Tancredi, n7 - 73100 Lecce</p>
                    <p className='mb-0'>telefono +39 0832 29 11 11</p>
                    <p className='mb-0'>P.I. 00646640755 - C.F. 80008870752</p>
                    <p className='mb-0'>PEC <a href='#'> amministrazione.centrale@cert-unile.it</a> </p>
            </div>

        </div>
    </div>


    </div>

  );
};

export default Footbar;
