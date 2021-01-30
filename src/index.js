import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebaseConfig from "./components/firebaseconfig"
import firebase from "firebase"

//firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));