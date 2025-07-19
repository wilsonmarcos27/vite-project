import  './App.css'
import Modal from './components/Modal'
import { useState } from 'react'
function App() {
    
    const [OpenModal, setOpenModal] = useState(false)
    const [likes, setlikes] = useState(0)

  

    return (
        <div className='App'>
        
             wilson Marcos {likes}
             <div>
                <button onClick={() => setOpenModal(true)}>
                    Abrir o Modal
                </button>
             </div>
             <div>
                <button onClick={() =>{setlikes(likes +1)}}>likes</button>
             </div>
        
        <Modal isOpen={OpenModal} setMODALOpen={ () => setOpenModal(!OpenModal)}> 
        {/* children é o que vai ser renderizado dentro do modal */}
    
            
        </Modal>
        </div>
    )
}
export default App
