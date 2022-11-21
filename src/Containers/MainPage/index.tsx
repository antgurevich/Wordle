import Header from "../../Components/Header";
import Content from "../Content";
import "./styles.scss"

const baseClass = 'MainPage';

export const MainPage = () => {
    
    return (
      <div className={`${baseClass}`}>
        <div className={`${baseClass}-header`}>
          <Header />
        </div>
        <div>
          <Content />
        </div>
      </div>
    );
}