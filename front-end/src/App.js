import React from 'react';
import './App.css';


function App() {
  // URL Entry Screen
  // // // // // // //
  // return (
  //   <div className="App">
  //     <p className="Text">YAML Viewer</p>
  //     <p className="Text">
  //       please enter the GitHub URL of the YAML file you would like to view
  //     </p>
  //     <form>
  //       <input type="text" name="name" />
  //       <input type="submit" value="view" />
  //     </form>
  //   </div>
  // );

  // YAML View Screen
  // // // // // // //
  return (
    <div className="App">
      <p className="Text">YAML Viewer</p>
      <p className="Text">Viewing YAML: put request URL here</p>
      <p className="Text">put ul, li here</p>
      <p className="Text">view new YAML</p>
    </div>
  );
}

export default App;
