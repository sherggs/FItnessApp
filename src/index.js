import React from "react";  // import React from 'react'
import ReactDOM from "react-dom"; // import ReactDOM from 'react-dom'
import App from "./App"; // import App from './App'
import { BrowserRouter } from "react-router-dom"; // import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(
    document.getElementById("root"));  // const root = document.getElementById('root')

root.render(
<BrowserRouter> 
<App /> 
</BrowserRouter>
); 

