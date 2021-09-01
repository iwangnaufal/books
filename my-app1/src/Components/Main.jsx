import React, {useState, useEffect} from 'react'
import Book from './Book'
import '../Style/Main.css'

function Main (props) {
   const {openModal, setBookData, fetchData, openDelete, openAdd} = props

   return (
      <div className="main">
         <h1>Ini Judul</h1>
         <button onClick={() => openAdd(true)}>Add Book</button>
         <table className="bookTable">
            <thead>
               <th>thumbnail</th>
               <th>Author</th>
               <th>Title</th>
               <th>Stock</th>
               <th colSpan="2">Action</th>
            </thead>
            {
            fetchData.map((book, key) => {
               console.log(book)
               return (
                  <Book key={book.id} setBookData={setBookData} openModal={openModal} openDelete={openDelete} bookId={book.id} author={book.author} title={book.title} stock={book.stock} thumbnail={book.thumbnail} />
               )
            })
         }  
         </table>
      </div>
   )
}

export default Main