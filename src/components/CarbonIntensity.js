import axios from "axios";

export default function CarbonIntensity() {

    const apiUrl = 'https://api-access.electricitymaps.com/free-tier/carbon-intensity/latest?zone=IT';
    const apiKey = process.env.REACT_APP_ELECTRICITY_MAPS_API_KEY;

    if (!apiKey) {
        return Promise.reject(new Error(
            'Chiave Electricity Maps non configurata. Imposta REACT_APP_ELECTRICITY_MAPS_API_KEY in un file .env.local.'
        ));
    }

    return axios.get(apiUrl, {
        headers: {
            'X-blobr-key': apiKey
        }
    })
        .then(response => {
            console.log(response.data.carbonIntensity);
            return response.data.carbonIntensity;
        });
}
