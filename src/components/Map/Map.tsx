import React, {useContext, useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import './Map.css'
import '../../utils/fix-map-icon'
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext);
    useEffect(() => {
        console.log(search);
    }, [search]);

    return <div className="map">
        <h1>Search for {search}</h1>
        <MapContainer center={[50.2657152, 18.9945088]} zoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[50.2657152, 18.9945088]}>
                <Popup>
                    <h2>It Focus</h2>
                    <p>Najlepsza firma</p>
                </Popup>
            </Marker>
            <Marker position={[50.2657152, 18.9945088]}>
                <Popup>
                    <h2>It Focus</h2>
                    <p>Najlepsza firma</p>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
}