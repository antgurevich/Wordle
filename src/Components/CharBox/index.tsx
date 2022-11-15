import React, { useState } from 'react'
import "./styles.scss"

export interface Props {
    readonly id: number;
}

const baseClass = 'CharBox';

export const CharBox: React.FC<Props> = (props) => {

    const [input, setInput] = useState('')

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        (/[a-zA-Z]/).test(value) ?  setInput(value) : setInput('');
    }
    
    return(
        <div className={`${baseClass}`}>
            <input
                className={`${baseClass}-input`}
                maxLength={1}
                type="text"
                id={`${props.id}`}
                onChange={handleInput}
                value={input.toUpperCase()}
            />
        </div>
    )
}

export default CharBox