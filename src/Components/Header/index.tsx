import "./styles.scss"

const baseClass = 'Header'

export const Header = () => {
    return (
        <div className={`${baseClass}`}>
            Wordle
            <div className={`${baseClass}-sub`}>
                Replicated by Anton Gurevich
            </div>
        </div>
    )
}

export default Header