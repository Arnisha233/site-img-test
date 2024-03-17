import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './compnents/Banner/Banner'
import NavBar from './compnents/NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 lose
 <div><FontAwesomeIcon icon={faArrowLeft} /></div>

<div className='container mx-auto mt-8'>
<NavBar></NavBar>
      </div>
    


      <div className='container mx-auto mt-12'>
      
      <Banner></Banner>
      
      </div>


      <div>
        <img src="./assets/images/Rectangle.png" alt="" />
      </div>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis eveniet vitae nisi rerum at praesentium cum eius consequuntur deleniti ut ipsum dolorum assumenda provident, optio doloribus laborum dolores ea!

    </>
  )
}

export default App
