import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherConditions, setWetaherConditions] = useState([]);
    const [city, setCity] = useState('adana');
    const values = { weatherConditions, city, setCity }

    useEffect(() => {
        async function weatherInfo() {
            await axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=A7DJ2VZ86L5JYYLXU3KCFP97J&contentType=json`)
            .then(res => res.data)
            .then(res => res.days)
            .then(res => {setWetaherConditions(res)})
        }
        weatherInfo();
    }, [city]);

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext;