import './App.css';
import About from './screens/about';
import Home from './screens/home';
function App() {
 const userId='12345' 
 const userName='Petya'


console.log(<About userId={userId} name='Petya'/>)
;
if(true){
  return <>
  <About />
  <About userId={userId} userName={userName} text={'Hello world!'}/>
  <About userId={userId} userName={userName} text={'Hello world2!'}/>
 
   </>
}else{
  return <>  <Home userId={userId} userName={userName} />
  </>
}
   
}

export default App;
