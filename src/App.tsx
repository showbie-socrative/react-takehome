import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import { MainView } from 'views';

type AppProps = {

};

type AppState = {
  rooms: any[];
}

// so pretty now
class App extends React.PureComponent<AppProps, AppState> {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainView />
      </div>
    );
  }
}

export default App;
