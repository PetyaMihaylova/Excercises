import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/button/button';
import Counter from './components/counter/counter';
import User from './components/user';
import useFetch from './hooks/useFetch';
import GridScreen from './screens/UI/gridScreen/gridScreen';
function App(props) {
  const clickHandler = () => alert('click')
  const clickHandler2 = () => alert('Hello from click2')

const {data: users, loading, error}= useFetch('https://randomuser.me/api/?results=10')
 console.log(users);
 
  return <>
  <Counter />
  {loading && <p>...loading</p>}
  {error && <p>Error</p>}
  {users.map((user)=><User key = {user.id.value} gender = {user.gender} name={user.name.first} location={user.location.street.name}/>)}

  
  <GridScreen style = {{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 2fr)', gap: '20px'}}/>
  </>
}

export default App;
