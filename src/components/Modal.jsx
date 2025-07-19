import React, { Children } from 'react'

const BACKGROUND_STYLES = {
    position: 'fixed',
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: 'rgba(0, 0, 0, 0.7 )',
    zIndex: '1000',

}

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
backgroundColor: '#fff',
  padding: '150px',
  zIndex: '1000',
  borderRadius: '10px',
  color: 'black',
  
  
}

export default function Modal({isOpen ,setMODALOpen, children}) {


    if (isOpen) {
  return (
    <div style={BACKGROUND_STYLES }>

    <div style={MODAL_STYLES}>
      <div>
        {children}

      </div>
      <button onClick={setMODALOpen}>fechar</button>
      </div>

    </div>
    
  )
}
return null
};