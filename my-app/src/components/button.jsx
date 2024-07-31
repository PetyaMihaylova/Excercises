export const Button = (props) => {

const {clickHandler, text, backgroundColor, padding} = props

    return <button 
    onClick={clickHandler} 
    style = {
        {backgroundColor: backgroundColor,
        padding: padding

        }}>
            {text}
            </button>

    
}
