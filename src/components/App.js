import { FriendCard } from './FriendListContainer/FriendCard';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friendItems from './FriendListContainer/friends.json';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendCard friends={friendItems} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// import { QuizForm } from "./QuizForm";
// import { QuizList } from "./QuizList";
// import { SerchBar } from "./SearchBar";
// import quizItems from "../quiz-items.json";

// export const App = () => {
// return (
//   <div>
//     <QuizForm />
//     <SerchBar />
//     <QuizList items={quizItems} />
//   </div>
// );
// };
