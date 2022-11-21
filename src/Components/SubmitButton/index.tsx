import "./styles.scss"

const baseClass = 'SubmitButton'

export interface Props {
    value?: string;
}

export const SubmitButton: React.FC<Props> = (props) => {
    
    const handleClick = () => {
        console.log(props.value)
    }
    
    return(
        <div className={`${baseClass}`}>
            <button className={`${baseClass}-button`} onClick={handleClick}>
                Enter
            </button>
        </div>
    )
}

export default SubmitButton