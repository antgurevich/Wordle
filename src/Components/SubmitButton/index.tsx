import "./styles.scss"

const baseClass = 'SubmitButton'

export const SubmitButton = () => {
    
    const handleClick = () => {
        // TODO 
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