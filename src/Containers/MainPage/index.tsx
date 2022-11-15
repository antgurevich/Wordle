import CharGrid from "../CharGrid"
import "./styles.scss"

const baseClass = 'MainPage';

export const MainPage = () => {
    
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
      </div>
    );
}