import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Cards(props){
   const [ modalIsOpen, setModalIsOpen] = useState(false);

   function handleDelete(){
        setModalIsOpen(true);
   } 
   
    return(
      <div className="card">
       <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
        {modalIsOpen && <Modal />} 
        {modalIsOpen && <Backdrop />}
      </div>
    )
}
export default Cards;