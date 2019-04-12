import React, { Component } from 'react';
import './css/header.css';
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import Body from './components/body.jsx';


class App extends Component {
  render() {
    return (

      <div className="inContainer">
  <div className="c">
  
  <Header/>
  <Body/>
  <Footer/>

  
  </div>
  </div>
  




    );
  }
}

export default App;
