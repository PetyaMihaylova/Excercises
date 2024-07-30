import Header from "../components/header"
const Home = (props) => {
    const {userId, name, text} = props
return <>
<div>Home</div>
<Header text={text}/>
</>
}

export default Home