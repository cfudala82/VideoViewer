import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = '';



// Create a new component. This component should produce some html.
const App = () => {
  return <div>Hello!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
  <App />, document.querySelector('.container')
)