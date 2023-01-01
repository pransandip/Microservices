import { PostCreate } from './components/post/PostCreate';
import { PostList } from './components/post/PostList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Microservices</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
