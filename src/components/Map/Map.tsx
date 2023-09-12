import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import './Map.css'
import '../../utils/fix-map-icon'
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from "types";
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const ads = await res.json();
            setAds(ads);

        })();
    }, [search]);

    const updateViews = async (id: string): Promise<void> => {
        await fetch(`http://localhost:3001/ad/update-views/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
        });
    }

    return <div className="map">
        <MapContainer center={[50.2657152, 18.9945088]} zoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {
                ads.map(ad => (
                    <Marker
                        key={ad.id}
                        position={[ad.lat, ad.lon]}
                        eventHandlers={{
                        click: async (e) => {
                            console.log('clicked');
                            await updateViews(ad.id);
                        },
                    }}>
                        <Popup>
                            <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))
            }



        </MapContainer>
    </div>
}