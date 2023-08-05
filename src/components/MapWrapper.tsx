import React, { memo } from 'react';
import "../App.css"

export const MapWrapper = memo(
    () => {
        return <div id='map-container' />;
    },
    () => true,
);
