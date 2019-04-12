import React, { Component } from 'react';
import '../css/body.css';
import {showFunction} from '../util/function.js'
import {textNumeric} from '../util/function.js'



class Body extends Component {
  render() {
    return (

  <div className="container3">
  <div class="container2 clearfix">
  <div className="Name">
    <label><b>Name:</b></label><br/>
    <input type="text" name="name" id="user_input"/><br/>
    </div>
  <div className="Name">
     <label><b>Age: </b></label><br/>
    <input type="number" name="age" id="user_input2" /><br/>
    </div>
    <div className="Name">
    <label><b>Gender:</b></label><br/><br/>
    <input type="radio" id="Gender1" value="Female" name="Gender"/>Female
    <input type="radio" id="Gender2" value="Male" name="Gender"/> Male<br/><br/>
    </div>
  <input type="submit" onClick={showFunction}/>
</div>

<div class='divform1'>
  <label>Your input: </label>
  <p><span id='display'></span></p>
  <p><span id='display1'></span></p>
    <p><span id='display4'></span></p>
  </div>

</div>




        );
    }
  }
  
  export default Body;