import React from 'react';
import Navbar from 
'./components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList'

// eslint-disable-next-line no-undef
class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App; 
