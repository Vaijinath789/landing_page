import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Web from './component/Web'
import './App.css'


function App(props){
  return (
    <BrowserRouter>
      <Web/>
    </BrowserRouter>
  )
}
export default App;
