import Header from "../../Components/Header";
import SubmitButton from "../../Components/SubmitButton";
import CharGrid from "../CharGrid"
import "./styles.scss"

const baseClass = 'MainPage';

export const MainPage = () => {
    
    return (
      <div className={`${baseClass}`}>
        <div className={`${baseClass}-header`}> 
          <Header/> 
        </div>
          <div className={`${baseClass}-content`}>
            <div className={`${baseClass}-grid`}>
              <CharGrid />
              <CharGrid />
              <CharGrid />
              <CharGrid />
              <CharGrid />
              <CharGrid />
            </div>
            <SubmitButton />
          </div>
      </div>
    );
}