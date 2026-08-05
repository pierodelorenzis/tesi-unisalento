<table width="100%">
  <tr>
    <td align="center" bgcolor="#F0CB00">
      <img src="src/images/logo_unisalento.svg" alt="Logo Università del Salento" width="500">
    </td>
  </tr>
</table>

# Implementazione delle specifiche di Demand-Responsive Design su tecnologia React

Progetto sviluppato come caso di studio per la tesi di laurea **"Implementazione delle specifiche di Demand-Responsive Design su tecnologia React"** presso l'Università del Salento.

L'applicazione dimostra come un sito web possa adattare dinamicamente la propria interfaccia in base alla **carbon intensity** dell'energia elettrica, riducendo la quantità di dati trasferiti e il conseguente impatto ambientale della navigazione.

## Tesi completa

[Leggi o scarica la tesi in formato PDF](docs/Tesi.pdf).

## Obiettivi

- Adattare dinamicamente il design di un sito web al valore corrente di carbon intensity.
- Valutare il comportamento dell'algoritmo in differenti condizioni energetiche.
- Ridurre il peso dei contenuti trasferiti, soprattutto delle immagini.
- Stimare la riduzione delle emissioni di CO2 ottenibile con le diverse modalità.

## Caso di studio

Per validare l'approccio è stato realizzato un mockup responsive della home page dell'Università del Salento. L'interfaccia è suddivisa in componenti React e cambia in funzione della modalità selezionata:

| Modalità | Comportamento |
| --- | --- |
| `LOW` | Mostra le immagini ad alta risoluzione. |
| `MEDIUM` | Carica versioni delle immagini a risoluzione ridotta. |
| `HIGH` | Riduce al minimo la grafica, nasconde le immagini non necessarie e applica uno stile più essenziale. |
| `LIVE` | Interroga Electricity Maps e seleziona automaticamente la modalità in base alla carbon intensity rilevata per l'Italia. |

Le soglie adottate nel prototipo sono:

- `LOW`: fino a 250 gCO2/kWh
- `MEDIUM`: tra 250 e 400 gCO2/kWh
- `HIGH`: oltre 400 gCO2/kWh

## Funzionamento

Il flusso principale coinvolge quattro elementi:

1. `CarbonIntensity` richiede a Electricity Maps il valore di carbon intensity.
2. `CarbonButton` consente di scegliere una modalità manualmente oppure di attivare `LIVE`.
3. `GlobalContext` mantiene lo stato globale `displayMode`.
4. I componenti grafici reagiscono al cambio di modalità e caricano soltanto le risorse necessarie.

I principali componenti dell'interfaccia sono `Topbar`, `MenuBar`, `Slideshow`, `PortletContent` e `Footbar`.

## Risultati sperimentali

I test descritti nella tesi sono stati eseguiti con Chrome DevTools, svuotando la cache tra una modalità e l'altra.

| Modalità | Dati trasferiti | Emissioni stimate per visualizzazione |
| --- | ---: | ---: |
| `LOW` | 1,5 MB | 0,013 gCO2 |
| `MEDIUM` | 864 kB | 0,0074 gCO2 |
| `HIGH` | 646 kB | 0,0056 gCO2 |

Rispetto alla modalità `LOW`, la sperimentazione stima una riduzione delle emissioni del **43,07%** in modalità `MEDIUM` e del **56,92%** in modalità `HIGH`.

Questi valori derivano dal modello e dalle condizioni illustrate nella tesi e non costituiscono una misurazione universale dell'impatto di ogni sito web.

## Tecnologie

- React 18
- JavaScript
- React Context API
- Axios
- Bootstrap e React Bootstrap
- SCSS
- React Responsive Carousel
- Electricity Maps API

## Avvio locale

Requisiti:

- Node.js
- npm

Installare le dipendenze:

```bash
npm install
```

Creare un file `.env.local` nella cartella principale e configurare la chiave necessaria alla modalità `LIVE`:

```dotenv
REACT_APP_ELECTRICITY_MAPS_API_KEY=la_tua_chiave
```

Il file `.env.local` è escluso da Git e non deve essere pubblicato. Poiché le variabili `REACT_APP_*` vengono incluse nel bundle frontend, per un utilizzo in produzione è consigliabile inoltrare la richiesta tramite un backend che mantenga la chiave sul server.

Avviare l'applicazione in modalità sviluppo:

```bash
npm start
```

L'applicazione sarà disponibile su [http://localhost:3000](http://localhost:3000).

Creare una build di produzione:

```bash
npm run build
```

La modalità `LIVE` richiede una chiave valida per l'API di Electricity Maps.

## Struttura principale

```text
src/
├── components/
│   ├── CarbonButton.js
│   ├── CarbonIntensity.js
│   ├── GlobalContext.js
│   ├── Footbar.js
│   ├── MenuBar.js
│   ├── PortletContent.js
│   ├── Slideshow.js
│   ├── Style.scss
│   └── Topbar.js
├── images/
├── App.js
└── index.js
```

## Contesto accademico

- **Autore:** Piero De Lorenzis
- **Relatore:** Prof. Roberto Vergallo
- **Corso di laurea:** Ingegneria dell'Informazione
- **Dipartimento:** Ingegneria dell'Innovazione, Università del Salento
- **Anno accademico:** 2022/2023

## Sviluppi futuri

Tra le evoluzioni individuate nella tesi:

- ottimizzare i colori per i dispositivi con display AMOLED;
- calcolare dinamicamente le soglie delle modalità;
- applicare l'algoritmo all'intero sito e non soltanto alla home page;
- approfondire la misurazione del risparmio energetico e delle emissioni.

## Note

Il progetto è un prototipo accademico realizzato a fini di ricerca e sperimentazione sul web sostenibile.
