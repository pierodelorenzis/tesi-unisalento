import React, {useContext, useEffect} from 'react';
import './Style.scss';
import GlobalContext from './GlobalContext';

const PortletContent = () => {

    const {displayMode} = useContext(GlobalContext);

    const [currentImage1, setCurrentImage1] = React.useState(null);
    const [currentImage2, setCurrentImage2] = React.useState(null);
    const [currentImage3, setCurrentImage3] = React.useState(null);
    const [currentImage4, setCurrentImage4] = React.useState(null);
    const switchToImage1 = async () => {
        const imageModule1 = await import('../images/UniSalento_2324.jpg');
        const imageModule2 = await import('../images/post_dottorato.jpg');
        const imageModule3 = await import('../images/tirocini.jpg');
        const imageModule4 = await import('../images/doppio_standard.jpg');
        setCurrentImage1(imageModule1.default);
        setCurrentImage2(imageModule2.default);
        setCurrentImage3(imageModule3.default);
        setCurrentImage4(imageModule4.default);
    };
    const switchToImage2 = async () => {
        const imageModule1 = await import('../images/UniSalento_2324_low.jpg');
        const imageModule2 = await import('../images/post_dottorato_low.jpg');
        const imageModule3 = await import('../images/tirocini_low.jpg');
        const imageModule4 = await import('../images/doppio_standard_low.jpg');
        setCurrentImage1(imageModule1.default);
        setCurrentImage2(imageModule2.default);
        setCurrentImage3(imageModule3.default);
        setCurrentImage4(imageModule4.default);
    };
    const switchToImage3 = async () => {
        setCurrentImage1(null);
        setCurrentImage2(null);
        setCurrentImage3(null);
        setCurrentImage4(null);
    };

    useEffect(() => {
        // Logica che determina quale funzione chiamare in base al valore di carbon intensity
        if (displayMode === 'mediumCarbon') {
            switchToImage2();
        } else if (displayMode === 'lowCarbon') {
            switchToImage1();
        } else if (displayMode === 'highCarbon') {
            switchToImage3();
        }
    }, [displayMode]);

    return (
        <div className='portlet-content'>
            <h2 className='mb-0'>PRIMO PIANO</h2>
            <div className={`line ${displayMode}`}/>

            <div className='row content'>

                <div className='col-6'>
                    <img className='col1' src={currentImage1} alt='Immagine 1'></img>
                    <h2>OFFERTA FORMATIVA 2023/2024: NOVITÀ</h2>
                    <p>"Diritto e Politiche per la PA" (L-14), "Comunicazione, media digitali, giornalismo" (LM-19),
                        "Ingegneria informatica" (L-8), "Ingegneria biomedica" (LM-21), "Engineering for safety of
                        critical industrial and civil infrastructures" (LM-26), "Data Science per le scienze umane e
                        sociali" (LM-DATA) sono i nuovi corsi di laurea UniSalento per l'anno accademico 2023/2024.
                        Raddoppia inoltre "Infermieristica" (L/SNT-1) con un corso a Tricase, e per "Scienza e Tecnica
                        della Mediazione Linguistica" (L-12) al via un nuovo indirizzo con double-degree con
                        l'Università di Vlora (Albania).</p>
                </div>

                <div className='col-6'>
                    <img className='col2' src={currentImage2} alt='Immagine 2'></img>
                    <h2>DOTTORATO NAZIONALE PA</h2>
                    <p>C'è tempo fino alle ore 13.00 dell'1 agosto 2023 per partecipare al bando di ammissione al corso
                        di dottorato di ricerca di interesse nazionale in in "Regulation, management and law of public
                        sector organizations", che vede l'Università del Salento quale sede amministrativa e coinvolge
                        altri undici Atenei partner (le Università di Napoli "Parthenope", Ferrara, Foggia, Teramo,
                        Brescia, Napoli "Federico II", L'Aquila, Chieti-Pescara, Roma "Sapienza", Molise e Venezia "Ca'
                        Foscari").</p>
                </div>

            </div>

            <div className='row content'>

                <div className='col-6'>
                    <img className='col1' src={currentImage3} alt='Immagine 3'></img>
                    <h2>Tirocini post-laurea cofinanziati: riaperta la procedura</h2>
                    <p>Riaperta la procedura di adesione ai tirocini post-laurea cofinanziati dall'Università del
                        Salento fino al 29 agosto 2023. Con l'obiettivo di favorire l'inserimento lavorativo dei giovani
                        neolaureati e neolaureate, l'Ateneo ha infatti selezionato nei mesi scorsi imprese ed enti del
                        territorio nazionale interessati ad attivare tirocini post-laurea, cofinanziando borse di
                        tirocinio per un totale di 180mila euro a fondo perduto. Sono 129 le organizzazioni e le imprese
                        ora pronte a ospitare i neo-dottori e dottoresse Unisalento per un tirocinio retribuito di
                        almeno tre mesi.</p>
                </div>

                <div className='col-6'>
                    <img className='col2' src={currentImage4} alt='Immagine 4'></img>
                    <h2>Doppio Standard</h2>
                    <p>Doppio standard si usa quando si applicano criteri di valutazione diversi nei confronti di
                        persone che si trovano nella stessa situazione o hanno le stesse caratteristiche. In ottica di
                        genere, e guardando al mondo del lavoro, è il metro di giudizio – generalmente più severo –
                        utilizzato nei confronti delle donne quando si tratta di valutarle. L’autrice alza il velo sulle
                        ragioni strutturali e sui meccanismi, spesso invisibili, alla base delle disuguaglianze di
                        genere nel lavoro e nella scienza, sul loro continuo riprodursi, sulle resistenze che provocano
                        e sui paradossi che le accompagnano.</p>
                </div>

            </div>

        </div>
    );
}
export default PortletContent;
