import GithubCard from "./components/GithubCard";
import './App.css';
import {FormControl, InputGroup} from "react-bootstrap";
import {useState} from "react";

function App() {
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <div>
        <InputGroup className="ml-3 mt-3 mr-3 mb-1 ">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            onChange={event => setUsername(event.target.value)}
          />
        </InputGroup>
        <GithubCard username={username}/>
      </div>
    </div>
  );
}

export default App;
