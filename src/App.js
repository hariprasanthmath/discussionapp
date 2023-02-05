import logo from './logo.svg';
import './App.css';
import Create from './Components/Create/Create';
import ShowComment from './Components/CommentSection/ShowComment';
function App() {
  return (
    <div className="App">
       <Create />
       <ShowComment/>
    </div>
  );
}

export default App;
