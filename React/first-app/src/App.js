import React from 'react';
import './App.css';

// Hello component
function Hello() {
  return <div>Hello</div>;
}

// Message component
function Message() {
  return <div>It's time to learn React!!!</div>;
}

function App() {
  return (
    <div className="App">
      <Hello />
      <Message />
    </div>
  );
}

export default App;
