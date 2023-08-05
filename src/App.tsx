import React from 'react';
import './App.css';
import Mapgl from './components/Mapgl';
import { MapglContextProvider } from './MapglContext';
import ButtonResetMapCenter from './components/ButtonResetMapCenter';

function App() {
    return (
        <MapglContextProvider>
            <div>
                <div className='App-button-item'>
                    <ButtonResetMapCenter />
                </div>
                <div className='App-map-container'>
                    <Mapgl />
                </div>
            </div>
        </MapglContextProvider>
    );
}

export default App;
