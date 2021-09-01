import React from "react"
import axios from 'axios'
import "../Style/Modal.css"

function DeleteModal (props) {

   const {
      bookId,
      openModal,
      setRender,
      render,
   } = props

   const deleting = (e) => {
      e.preventDefault()

      axios({
         method: "DELETE",
         url: `http://localhost:4000/api/deleteBook/${bookId}`,
      })
      .then((response) => {
         console.log("response: ", response)
         openModal(false)
         setRender(!render)
      })
      .catch((err) => {
         console.log("error: ", err)
      })

   }

   return (
      <div className="modalContainer">
         <div className="modalField">
            <h2 className="modalTitle">Delete this book?</h2>
            <form className="modalForm" onSubmit={(e) => deleting(e)}>
               <button className="modalButton" type="submit" >Delete</button>
               <button className="modalButton" type="button" onClick={() => openModal(false)} >Cancel</button>
            </form>
         </div>
      </div>
   )
}

export default DeleteModal