import React, {useEffect} from 'react'

function Book (props) {

   const {
      bookId,
      author,
      title,
      stock,
      thumbnail,
      openModal,
      openDelete,
      setBookData,
   } = props

   const edit = () => {
      setBookData({
         author,
         title,
         stock,
         bookId,
         thumbnail,
      })
      openModal(true)
   }

   const deleting = () => {
      setBookData({
         bookId
      })
      openDelete(true)
   }

   return (
      <tbody>
         <td>
         {
            thumbnail ? 
               <img src={thumbnail} height="200px" />
            :
               <p>No Image</p>
         }
         </td>
         <td>{author}</td>
         <td>{title}</td>
         <td>{stock}</td>
         <td><button onClick={() => edit()}>Edit</button></td>
         <td><button onClick={() => deleting()}>Delete</button></td>
      </tbody>
   )
}

export default Book