import React from 'react'

const BACKGROUND_STYLES = {
    position: 'fixed',
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: 'rgba(0, 0, 0, 0.7 )',
    zIndex: '1000',

}

export default function Modal({isOpen}) {


    if (isOpen) {
  return (
    <div stayle={BACKGROUND_STYLES }>

    <div>modal</div>

    </div>
    
  )
}
return null
};