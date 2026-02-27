import React, { useContext } from 'react'
import TextContext from '../context/textContext'

export default function Some3() {

    const context = useContext(TextContext)
    console.log('CONTEXT', context);
    
    return (
        <div>Some3
            <hr />
            <p>TEXT: {context.text}</p>
            <input value={context.text} type="text" onChange={e => context.changeText(e.target.value)} />
        </div>
    )
}
