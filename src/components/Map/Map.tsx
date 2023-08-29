import React from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import './Map.css'
import '../../utils/fix-map-icon'

export const Map = () => (
    <div className="map">
        <MapContainer center={[50.2657152,18.9945088]} zoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[50.2657152,18.9945088]}>
                <Popup>
                    <h2>It Focus</h2>
                    <p>Najlepsza firma</p>
                </Popup>
            </Marker>
            <Marker position={[50.2657152,18.9945088]}>
                <Popup>
                    <h2>It Focus</h2>
                    <p>Najlepsza firma</p>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
)