import styles from './App.module.css';
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from "./components/FriendList/FriendList";
import Transactions from "./components/Transactions/Transactions";
import React from 'react';

function App() {
  return (
    <div className={styles.main}>
      <Profile avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>

      <Statistics title="Upload stats" stats={data}/>
      
      <FriendsList data={friends} />
      
      <Transactions items={transactions}/>
    </div>
  );
}

export default App;
