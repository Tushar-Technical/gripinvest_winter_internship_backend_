import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Signup from './signup';
// import Signin from './signin';
// import Navbar from './pages/Navabar';
// import RouterExample from './pages/routerexample';
import Login from './pages/signin';
import RouterExample from './pages/routerexample';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
