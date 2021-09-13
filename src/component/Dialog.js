import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import '../style/body.css'

import Amigos from '../component/Amigos'

const Dialog = () => {
  return (
    <ReactCircleModal
      backgroundColor="#97349a"
      toogleComponent={onClick => (
        <button className="butao" onClick={onClick}>
          Vizualizar Video
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div  style={{ backgroundColor: '#fff', padding: '1em'}}>
          
            <Amigos />
           
          <button onClick={onClick}>
            Voltar
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Dialog