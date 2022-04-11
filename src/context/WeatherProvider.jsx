import {useState, createContext} from 'react';
import axios from 'axios';

const WheaterContext = createContext();

const WeatherProvider = ({children}) => {

    const [search, setSearch] = useState({
        city:'',
        country:''
    });

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const dataSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        });
    }

    const searchWheather = async(information) => {
  
        setLoading(true);
        try {   
            
            
            
            const {city,country} = information;

            const appId= import.meta.env.VITE_API_KEY;

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`

            const {data} = await axios(url);
            console.log(data);
            const {lat, lon} = data[0];

            const urlWheater = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            
            const {data:wheather} = await axios(urlWheater);
            setResult(wheather);
            setLoading(false);

            

        }catch(error) {
            console.log(error);
        }

        
    }

  return (
    <WheaterContext.Provider
        value={{
            search,
            dataSearch,
            searchWheather,
            result,
            loading
        }}
    >
        {children}
    </WheaterContext.Provider>
  )
}


export {
    WheaterContext,
    WeatherProvider
}