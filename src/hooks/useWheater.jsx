import {useContext} from 'react';
import {WheaterContext} from '../context/WeatherProvider';

export const useWheater = () => {
    return (
        useContext(WheaterContext)
    )
}
