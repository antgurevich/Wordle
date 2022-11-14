import React, { useState } from 'react'

export interface Props {
    readonly id: number;
}


export const CharBox: React.FC<Props> = (props) => {

    const [input, setInput] = useState('')

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        console.log((/[a-zA-Z]/).test(value));
        (/[a-zA-Z]/).test(value) ?  setInput(value) : setInput('');
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