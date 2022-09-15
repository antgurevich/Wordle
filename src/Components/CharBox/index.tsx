import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react'

export interface Props {
    readonly id: number;
}


export const CharBox: React.FC<Props> = (props) => {
    
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setUncaughtExceptionCaptureCallback(e.target.value)
    }
    
    return(
        <div className='CharBox'>
            <input
                maxLength={1}
                type="text"
                id={`${props.id}`}
                onChange={handleInput}
            />
        </div>
    )
}

export default CharBox