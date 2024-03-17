import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './compnents/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto mt-12'>
      
        <Banner></Banner>
      
      </div>


      <div>
        <img src="./assets/images/Rectangle.png" alt="" />
      </div>


    </>
  )
}

export default App
