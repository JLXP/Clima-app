import React from 'react';
import { useWheater } from '../hooks/useWheater';

export const Result = () => {

    const {result} = useWheater();

    const {name,main} = result;

    //Grades Kelvin
    const kelvin = 273.15;

    return (
        <div className="content wheather">
            <h2>The wheather of {name} is: </h2>
            <p>
                {parseInt(main.temp-kelvin)}<span>&#x2103;</span>
            </p>
            <div className="temp_min_max">
                <p>
                Min: {parseInt(main.temp_min-kelvin)}<span>&#x2103;</span>
                </p>
                <p>
                Max: {parseInt(main.temp_max-kelvin)}<span>&#x2103;</span>
                </p>
            </div>                      
        </div>
    )
}
