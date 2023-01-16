import React from 'react';
import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widjets from './Widjets';
import Login from './Login';
import { useStateValue } from './StateProvider';

//we will use the React context API here;
function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />):(
          <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
      
            <Widjets />
          </div>
          </>
        )}
    </div>
  );
}

export default App;

//DEPLOY THE APP sudo npm i -g firebase-tools
