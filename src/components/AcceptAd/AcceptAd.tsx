import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export const AcceptAd = () => {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            try {
                await fetch(`http://localhost:3001/ad/accept/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            } finally {
                setLoading(false);
            }
        })();
    },[]);

    if (loading) {
        return <h2>Trwa akceptowanie ogłoszenia...</h2>
    }

    return <h2>Ogłoszenie zaakceptowane</h2>
}