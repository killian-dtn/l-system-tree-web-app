import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header backButtonVisible={false}/>
        <div className="App-body">
          {this.props.component}
        </div>
      </div>
    );
  }
}

export default App;
