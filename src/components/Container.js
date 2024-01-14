import '../App.css';
import { useContext, useEffect, useState } from 'react'
import WeatherContext from '../context/WeatherContext'
import CityContext from '../context/CityContext'

function Container() {
    const { weatherConditions, city, setCity } = useContext(WeatherContext);
    const cities = useContext(CityContext);

    const [dataTime, setDataTime] = useState([]);
    const [day, setday] = useState();

    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    useEffect(() => {
        weatherConditions.forEach((item) => setDataTime(curret => [...curret, item.dataTime]));
        const day = new Date();
        setday(day.getDay());
    }, [weatherConditions])
    
    function handleCity(e) {
        setCity(e.target.value);
    }

    return (
        <div>
            <div>
                <select name="city-names" id="city-names" onChange={handleCity} value={city}>
                    {cities.map((city, i) =>
                        <option key={i} value={city.name}>
                            {city.name}
                        </option>
                    )}
                </select>
            </div>

            <div className='container2'>

                {weatherConditions.map((weather, i) =>
                    <div className='container3' key={i}>
                        <div className='flexbox'>
                            {days[((day + i)-1) % 7]}
                        </div>
                        <div className='flexbox'>
                            <img style={{ width: "130px" }} src={require(`../svg/${weather.icon}.svg`)} alt="" />
                        </div>

                        <div className='flexbox' >
                            <span style={{ marginRight: "10px" }}> {weather.tempmax}° </span>
                            <span style={{ marginLeft: "10px" }}> {weather.tempmin}°</span>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Container