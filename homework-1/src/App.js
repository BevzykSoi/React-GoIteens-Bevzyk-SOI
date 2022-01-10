import styles from './App.module.css';
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendsList from "./components/FriendList/FriendList.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Profile {...user} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>

      <Statistics title="Upload stats" stats={data}/>
      
      <FriendsList data={friends} />
      
      <Transactions items={transactions}/>
    </React.Fragment>
  );
}

export default App;
