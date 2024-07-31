import './App.css';
import {Button} from './components/button';
function App(props) {
  const clickHandler = () => alert('click')
  const clickHandler2 = () => alert('Hello from click2')
 
  return <>
  <Button 
  clickHandler = {clickHandler} 
  text = {'button1'} 
  backgroundColor = 'red' 
  padding={10}/>
  <Button 
  clickHandler = {clickHandler2} 
  text = {'button 2'} 
  backgroundColor = 'green'
  padding={20}/>

  </>
}

export default App;
