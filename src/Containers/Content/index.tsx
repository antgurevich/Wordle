import "./styles.scss"
import SubmitButton from "../../Components/SubmitButton"
import CharGrid from "../CharGrid"
import { useState } from "react"

const baseClass = 'Content'

export interface Props {
    attempt?: string;
}

export const Content: React.FC<Props> = (props) => {  

    const [charState, setCharState] = useState('');
    const changeCharState = () => {
        //setCharState("test")
        props.attempt = "test";
    }


    return (
      <div className={`${baseClass}`}>
        <div className={`${baseClass}-grid`}>
          <CharGrid />
          <CharGrid />
          <CharGrid />
          <CharGrid />
          <CharGrid />
          <CharGrid />
        </div>
        <SubmitButton value={charState}/>
      </div>
    );
}

export default Content