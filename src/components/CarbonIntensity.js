import axios from "axios";

export default function CarbonIntensity(){
    const apiUrl = 'https://api-access.electricitymaps.com/free-tier/carbon-intensity/latest?zone=IT';


    return axios.get(apiUrl, {headers:{
        'X-blobr-key' : '3HFd1IVuVyQenxbkbbT0qMx9qDEgd5fm'
    }})
    .then(response=>{
        const carbonIntensity = response.data.carbonIntensity;
        return carbonIntensity;
    }).catch(error=>{
            console.log(error);
        })
}