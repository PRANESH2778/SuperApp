import axios from 'axios'

export const getWeatherDetails = async ()=>{
    try{
        const defaultLocation = "Erode"
        const reqUrl = "http://api.weatherapi.com/v1/current.json?key=78db655872384cfe89254817242001&q=London&aqi=no"
        const weatherDetails = await axios.get(reqUrl);
        return weatherDetails;
    }catch(error){
        console.log(error)
        toast.error("something went wrong!")
    }

}
