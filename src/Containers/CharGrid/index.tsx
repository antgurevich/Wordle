import CharBox from "../../Components/CharBox";
import "./styles.scss"

export const CharGrid = () => {
    const boxes = [];
    for (var i = 0; i < 7; i++){
        boxes.push(
        <CharBox
            key={i}
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