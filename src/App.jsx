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
        
        <Modal isOpen={OpenModal} setMODALOpen={ () => setOpenModal(!OpenModal)}> 
        {/* children é o que vai ser renderizado dentro do modal */}
        <h1>conteudo do modal</h1>
            
        </Modal>
        </div>
    )
}
export default App
