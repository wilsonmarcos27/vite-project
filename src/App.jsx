import  './App.css'
import Modal from './components/Modal'
import { useState } from 'react'
function App() {
    
    const [OpenModal, setOpenModal] = useState(false)

    return (
        <div className='App'>
        
             wilson Marcos
             <div>
                <button onClick={() => setOpenModal(true)}>
                    Abrir o Modal
                </button>
             </div>
        
        <Modal isOpen={OpenModal}/>
        </div>
    )
}
export default App
