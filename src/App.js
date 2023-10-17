import React, {useState, useEffect} from 'react';
import './App.css';
import Expenses from './components/Expences/Expenses';
import NewExpences from './components/Expences/NewExpences/NewExpences';

let Dummy_Expences = [
  
];

const App = () => {
  
  const [expences , setExpences] = useState(Dummy_Expences);

  // TODO implement a real api here once it is developed at the Backend

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2').then(
    response => {
      return response.json()
      }
        ).then(
          data => {
          console.log(data);
      }
  );
  },[]);
  
  
  const addExpensehandler = (expense) =>{
    const updatedExpences = [expense, ...expences];
    setExpences(updatedExpences);
  };

    return (
      <div>
        <NewExpences onAddExpensehandler={addExpensehandler}/>
        <Expenses item={expences}/>


      </div>  
    );
  }


export default App;
