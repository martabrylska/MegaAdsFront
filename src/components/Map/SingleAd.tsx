import React, {useEffect, useState} from 'react';
import {AdEntity} from "types";

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<AdEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`)
            const data = await res.json();
            setAd(data);
        })();
    }, []);

    if (ad === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {!!ad.price && <p><b>{ad.price} zł</b></p>}
        <hr/>
        <p><a href={ad.url1} target="_blank">{ad.url1}</a></p>
        {!!ad.url2 && <p><a href={ad.url2} target="_blank">{ad.url2}</a></p>}
        {!!ad.url3 && <p><a href={ad.url3} target="_blank">{ad.url3}</a></p>}
    </>


}