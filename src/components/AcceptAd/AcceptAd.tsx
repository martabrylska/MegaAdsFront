import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Info} from "../common/Info";

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
        return <Info text="The advertisement is being verified..."/>
    }

    return <Info text="The advertisement is accepted."/>
}