import React from 'react'
import './App.css'
import Focus from './components/Focus'
import PreviousValue from './components/Value';
import StopWatch from './components/StopWatch';
import WindowSize from './components/Windowsize';


function App() {
 return ( 
   <>
    <Focus/>
    <PreviousValue/>
    <StopWatch/>
    <WindowSize/>
   </>
 )
}

export default App
