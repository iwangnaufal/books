import React from "react"
import axios from 'axios'
import "../Style/Modal.css"

function EditModal (props) {

   const {
      bookId,
      thumbnail,
      author,
      title,
      stock,
      openModal,
      setRender,
      render,
   } = props

   const update = (e) => {
      e.preventDefault()
      let target = e.nativeEvent.target
      let inputThumbnail = target.thumbnail.value
      let inputAuthor = target.author.value
      let inputTitle = target.title.value
      let inputStock = target.stock.value

      axios({
         method: "PUT",
         url: `http://localhost:4000/api/updateBook/${bookId}`,
         data: {
            thumbnail: inputThumbnail,
            author: inputAuthor,
            title: inputTitle,
            stock: inputStock,
         }
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
            <h2 className="modalTitle">Edit Book</h2>
            <form className="modalForm" onSubmit={(e) => update(e)}>
               <label htmlFor="thumbnail">Thumbnail</label><br/>
               <input className="modalInput" id="thumbnail" placeholder="type an image url here" type="text" defaultValue={thumbnail}/><br/>
               <label htmlFor="author">Author</label><br/>
               <input className="modalInput" id="author" required={true} type="text" defaultValue={author}/><br/>
               <label htmlFor="title" >Title</label><br/>
               <input className="modalInput" id="title" required={true} type="text" defaultValue={title}/><br/>
               <label htmlFor="stock">Stock</label><br/>
               <input className="modalInput" id="stock" required={true} type="number" defaultValue={stock}/><br/>
               <button className="modalButton" type="submit" >Submit</button>
               <button className="modalButton" type="button" onClick={() => openModal(false)} >Cancel</button>
            </form>
         </div>
      </div>
   )
}

export default EditModal