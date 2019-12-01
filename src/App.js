import React from 'react';
import './App.css';

class App extends React.Component {

  makeGrid(num){
    const myNode = document.getElementById("grid");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
    for(var i=0;i<num;i++){
      for(var j=1;j<=num;j++){
        var node = document.createElement("div");                 // Create a <li> node
        var textnode = document.createTextNode(num+" ");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("grid").appendChild(node); 
      }
    }
  }
  render(){
    return (
      <div className="App">
        <div className="pageWrapper">
          <div className="resetWrapper">
            <button onClick={()=>this.makeGrid(16)} className="resetButton">Reset</button>
          </div>
          <div className="padWrapper">
            <div className="sketchWrapper">
              <div id="grid"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
