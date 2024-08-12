import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
const increase = () => {
    setCount((previous) => previous+1)
    setCount((previous) => previous+1)
console.log(count, 'from increase');}
const decrease = () => {
    setCount(count - 1)
console.log(count, 'from decrease');}

console.log('render');

return <>
    <button onClick={increase}>
    +
    </button>
    <p>{count} {count % 2 === 0 ? 'even': 'odd'}</p>
    <button onClick ={decrease}>
    -
    </button>
    </>
}



export default Counter