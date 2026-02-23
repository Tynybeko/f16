import React from 'react'

export default function Input({ className = '', ...attrs }) {

    return (
        <input className={`rounded border py-2 pl-2 ${className}`} {...attrs} />
    )
}
