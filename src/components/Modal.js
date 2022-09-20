function Modal(){ //Add prop to handle handleYes and handleNo
   return <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt">No</button>
      <button className="btn">Yes</button>
   </div>
}
export default Modal;