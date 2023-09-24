import React, {SyntheticEvent, useState} from 'react';
import "./AddForm.css"
import {Btn} from "../common/Btn";
import {geocode} from "../../utils/geocoding";
import {Info} from "../common/Info";

export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(null);

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url1: '',
        url2: '',
        url3: '',
        address: '',
        views: 0,
        accepted: false,
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try{
            const {lat, lon} = await geocode(form.address);
            const res = await fetch(`http://localhost:3001/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });

            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }

    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
                    ...form,
                    [key]: value,
            }))
        }

    if (loading) {
        return <Info text="The advertisement is being sent..."/>
    }

    if (id) {
        return <Info text={`Your advertisement "${form.name}" has been successfully sent for Admin verification.`}/>
    }


    return <form action="" className="add-form" onSubmit={saveAd}>
        <h1>Add your AD.</h1>
        <p>
            <label>
                Name (required): <br/>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Description: <br/>
                <textarea
                    name="description"
                    maxLength={999}
                    value={form.description}
                    onChange={e => updateForm('description', e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Price (required): <br/>
                <input
                    type="number"
                    name="price"
                    required
                    maxLength={99}
                    value={form.price}
                    onChange={e => updateForm('price', Number(e.target.value))}/>
                <small>Leave 0 in the field to not display the price.</small>
            </label>
        </p>
        <p>
            <label>
                URL 1 address (required): <br/>
                <input
                    type="url"
                    name="url1"
                    required
                    maxLength={99}
                    value={form.url1}
                    onChange={e => updateForm('url1', e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                URL 2 address: <br/>
                <input
                    type="url"
                    name="url2"
                    maxLength={99}
                    value={form.url2}
                    onChange={e => updateForm('url2', e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                URL 3 address: <br/>
                <input
                    type="url"
                    name="url3"
                    maxLength={99}
                    value={form.url3}
                    onChange={e => updateForm('url3', e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Physical address on the map (required): <br/>
                <input
                    type="text"
                    name="address"
                    required
                    maxLength={99}
                    value={form.address}
                    onChange={e => updateForm('address', e.target.value)}/>
                <small>Format: City, Street no (ex. Warszawa, Główna 1)</small>
            </label>
        </p>
        <Btn text="send"></Btn>
    </form>

}