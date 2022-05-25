import logo from './logo.svg';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
// import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App-header">
          <AddPost />
          <PostList />
      </div>
    </div>
  );
}

export default App;
