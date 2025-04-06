import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App() {

  const [directoryContacts, setDirectoryContacts] = useState([]);

  const addDirectoryContact = (contact) => {
    setDirectoryContacts([...directoryContacts, { ...contact }])
  }


  return (
    <div className="App">
      <Header />
      <AddContact addDirectoryContact={addDirectoryContact} />
      <ContactList contactsToDisplay={directoryContacts}/>
    </div>
  );
}

export default App;
