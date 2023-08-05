import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import { useMapglContext } from '../MapglContext';
import { RulerControl } from '@2gis/mapgl-ruler';
import { Directions } from '@2gis/mapgl-directions';
import { MapWrapper } from './MapWrapper';
import { markers } from "../markers";

export const MAP_CENTER = [91.4439, 53.7227];
export const API_KEY = 'a1893935-6834-4445-b97a-3405fb426c5b';

const Mapgl = () => {
    const { setMapglContext } = useMapglContext();

    useEffect(() => {
        let map: mapgl.Map;
        let directions: Directions | undefined = undefined;

        load().then((mapgl) => {
            map = new mapgl.Map('map-container', {
                center: MAP_CENTER,
                zoom: 9,
                key: API_KEY,
            });

            const rulerControl = new RulerControl(map, { position: 'centerRight' });

            //Добавление маркеров на карту
            markers.forEach((marker) => {
                const newMarker = new mapgl.Marker(map, {
                    coordinates: marker.coordinates,
                    icon: marker.image,
                    size: [80, 80],
                    hoverSize: [100, 100],
                    label: {
                        text: marker.name,
                        offset: marker.offset,
                        relativeAnchor: [0, 0.5],
                    },
                });

                //Пример построение автомобильного маршрута из точки А в точку В
                directions = new Directions(map, {
                    directionsApiKey: API_KEY
                });

                directions.carRoute({
                    points: [
                        [91.4439, 53.7227],
                        [91.55769, 53.951395],
                    ],
                });

                //Построение маршрута по клику на маркер (не работает, HTTP code is 403)
                newMarker.on("click", () => {
                    const directions = new Directions(map, {
                        directionsApiKey: API_KEY,
                    });

                    //Определение геопозиции пользователя (работает)
                    function userGeoLocation() {
                        function success(pos: any) {
                            const center = [pos.coords.longitude, pos.coords.latitude];
                            directions.carRoute({
                                points: [
                                    center,
                                    marker.coordinates,
                                ],
                            });
                        }

                        function error() {
                            alert("Не удалось определить местоположение");
                        }

                        if (!navigator.geolocation) {
                            alert("Геолокация не поддерживается вашим браузером");
                        } else {
                            navigator.geolocation.getCurrentPosition(success, error);
                        }
                    }

                    userGeoLocation();
                })
            })

            setMapglContext({
                mapglInstance: map,
                rulerControl,
                mapgl,
            });
        });

        return () => {
            directions && directions.clear();
            map && map.destroy();
            setMapglContext({ mapglInstance: undefined, mapgl: undefined });
        };
    }, [setMapglContext]);

    return (
        <>
            <MapWrapper />
        </>
    );
}

export default Mapgl;
