import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput'
import { useState } from 'react';
import Results from './components/Results';

function App() {
  debugger;
 const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    Return : 6,
    year : 10
  })

  function handleChange (inputIdentifier, newValue){
    setUserInput((prevValue)=>{
     return{
      ...prevValue,
      [inputIdentifier]:+newValue
     };

    });
  }


  return (
    <>
    <Header/>
    <UserInput user={userInput} onChange={handleChange} />
     <Results input = {userInput}/>
    </>
  );
}

export default App;
