import CharBox from "../../Components/CharBox";
import "./styles.scss"
import { v4 as uuidv4 } from 'uuid';

export const CharGrid = () => {
    const boxes = [];
    for (var i = 0; i < 7; i++){
        boxes.push(
        <CharBox
            key={uuidv4()}
            id={i}
        />)
    }
    return (
        <div>
            {boxes} 
        </div>
        )
}

export default CharGrid