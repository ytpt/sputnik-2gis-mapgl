import React, { useCallback } from 'react';
import { MAP_CENTER } from './Mapgl';
import { useMapglContext } from '../MapglContext';
import '../App.css';

function ButtonResetMapCenter() {
    const { mapglInstance } = useMapglContext();

    const onClick = useCallback(() => {
        if (!mapglInstance) {
            return;
        }

        mapglInstance.setCenter(MAP_CENTER);
    }, [mapglInstance]);

    return (
        <button className='App-button-center' onClick={ onClick }>
            Центрировать
        </button>
    );
}

export default ButtonResetMapCenter;
