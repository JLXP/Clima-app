import React from 'react';
import { AppWheater } from './components/AppWheater';
import { WeatherProvider } from './context/WeatherProvider';

export const App = () => {
  return (
    <WeatherProvider>
      <header>
        <h1>Search of Weather</h1>
      </header>
      <AppWheater/>
    </WeatherProvider>
  )
}

