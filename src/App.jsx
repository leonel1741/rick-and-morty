import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location'
import Image from './components/Image'
import RickAndMorty from './components/RickAndMorty'

 
function App() {

  return (
    <div className="App">
      <Image />
      <RickAndMorty />
      {/* <Location /> */}
    </div>
  )
}

export default App
