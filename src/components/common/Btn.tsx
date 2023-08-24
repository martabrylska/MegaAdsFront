import React from 'react';

interface Props {
    text: string;
}

export const Btn = (props: Props) => (
    <button>{props.text}</button>
)