import React from 'react';
import './App.css';
import Landing from "./Component/Landing"
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
     <Landing/>
    </div>
    </Provider>
  );
}

export default App;
