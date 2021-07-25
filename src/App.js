import React from 'react';
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data_json/user.json';
import stats from './data_json/statistical-data.json';
import friends from './data_json/friends.json';
import transactions from './data_json/transactions.json';


const App = () => {
    return (
        <div>
            <Profile
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            <Statistics
                title='Upload stats'
                stats={stats}
            />
            <FriendList
            friends={friends}
            />
            <TransactionHistory
            items={transactions}
            />
        </div>);
   
};
  

export default App;