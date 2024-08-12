export const Button = (props) => {

const {clickHandler, text, size, type} = props

    return <button
onClick={clickHandler}>

    {text}
    </button>

    
}

export default Button
