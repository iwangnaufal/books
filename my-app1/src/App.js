import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import Main from './Components/Main'
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import AddModal from './Components/AddModal';
import EditModal from './Components/EditModal';
import DeleteModal from './Components/DeleteModal';

function App () {

  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)
  const [bookData, setBookData] =  useState({})
  const [fetchData, setFetchData] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    axios({
       method: "GET",
       url: "http://localhost:4000/api/getAll/",
    })
    .then((response) => {
       console.log("hasil fetch: ", response.data.data)
       setFetchData(response.data.data)
    })
    .catch((err) => {
       console.log("error: ", err)
    })
 }, [render])

  return (
    <div className="App">
      {
        toggleAdd ?
          <AddModal 
            setRender={setRender} 
            render={render} 
            openModal={setToggleAdd}
          />
          :
          null        
      }
      {
        toggleEdit ?
          <EditModal 
            setRender={setRender} 
            render={render} 
            openModal={setToggleEdit} 
            bookId={bookData.bookId} 
            thumbnail={bookData.thumbnail} 
            author={bookData.author} 
            title={bookData.title} 
            stock={bookData.stock} 
          />
          :
          null        
      }
      {
        toggleDelete ?
          <DeleteModal 
            setRender={setRender} 
            render={render} 
            openModal={setToggleDelete} 
            bookId={bookData.bookId}
          />
          :
          null        
      }
      <Heading logo={logo} />
      <Main openModal={setToggleEdit} openDelete={setToggleDelete} openAdd={setToggleAdd} fetchData={fetchData} setBookData={setBookData}/>
      <Footer />
    </div>
  )
}

export default App;
