import CharBox from "../../Components/CharBox";
import "./styles.scss"
import { v4 } from 'uuid';

const baseClass = 'CharGrid'

export interface Props {
    
}

export const CharGrid: React.FC<Props> = (props) => {
    const boxes = [];
    for (var i = 0; i < 5; i++){
        boxes.push(
        <CharBox
            key={v4()}
            id={i}
        />)
    }
    return (
        <div className={`${baseClass}`}>
            {boxes} 
        </div>
        )
}

export default CharGrid