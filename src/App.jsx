import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseState } from "react"
import Modal from './components/Modal'
import { UseFormState } from 'react-dom'

function App() {

  const [OpenModal, SetOpenModal] = useState(false)
 

  return (
    <>
      <div className='App'>
        <div>
      Wilson criando projecto no react
        </div>
        
        <button onclick={() =>{""}}>
      abrir o modal
        </button>
        <Modal isOpen={true}/>

      </div>
    </>
  )
}

export default App
