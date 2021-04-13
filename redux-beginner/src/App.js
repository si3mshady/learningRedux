import logo from './logo.svg';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PostForm/>
      <Posts/>
    </div>
  );
}
// https://youtu.be/93p3LxR9xfM?t=998  resume
export default App;
