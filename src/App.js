import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';


function App() {
  return (
    <div className="App">
      <br></br>
      <div className="body">
        <div className="content">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;