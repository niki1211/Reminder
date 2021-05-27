import Header from './components/Header';
import { useState, useEffect } from 'react';
import Reminders from './components/Reminders';
import AddReminder from './components/AddReminder';

function App() {

  const [toggle, setToggle] = useState (false);

  const [reminders, setReminders] = useState ([])

  useEffect(() => {
    const getData = async () => {
      const fetchReminders = await fetchData();
    setReminders(fetchReminders)   
    }
    getData()
  }, [])

  const fetchData = async () => {
  const res = await fetch('http://localhost:5000/reminders');
  const data = await res.json();
return data
  }

  const deleteRem = async (id) => {
    await fetch(`http://localhost:5000/reminders/${id}`, {
      method: 'DELETE',
    })
    setReminders(reminders.filter((r) => r.id !== id))
  }

  const changeColor = (id) => {
    setReminders(reminders.map((r) =>  
      r.id === id ? {...r, remind : !r.remind} : r
    ))
  }

  const addReminder = async (rem) => {
    const res = await fetch(`http://localhost:5000/reminders/`, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(rem)
    })

    const data = await res.json();
    setReminders([...reminders, data])
  }



  return (
    <div className="container">
      <Header onToggle={() => setToggle(!toggle)} onTog={toggle}/>
      {toggle && <AddReminder onAdd = {addReminder}/>}
      {reminders.length > 0 ? <Reminders reminders = {reminders} 
        onClick={deleteRem} onDoubleClick={changeColor}/> : 'No Reminders to show!!' }
    </div>
  ); 
}

export default App;
