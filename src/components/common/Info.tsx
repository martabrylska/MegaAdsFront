import React from 'react';
import "./Info.css"

interface Props {
    text: string;
}

export const Info = (props: Props) => (
    <div className="info"><h2>{props.text}</h2></div>
)