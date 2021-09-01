import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Heading (props) {

   const {logo} = props

   return (
         <Navbar bg="dark" variant="dark" expand="lg">
            <Container bg="dark">
               <Navbar.Brand>My-App</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbar" />
               <Navbar.Collapse id="navbar">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#Profile">Profile</Nav.Link>
                     <Nav.Link href="#Contact">Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      
      // <Navbar bg="light" expand="lg">
      //    <Container>
      //       <Navbar.Brand href="#home">My-App</Navbar.Brand>
      //       <Navbar.Toggle aria-controls="navbar" />
      //       <Navbar.Collapse id="navbar">
      //          <Nav className="me-auto">
      //             <Nav.Link href="#home">Home</Nav.Link>
      //             <Nav.Link href="#Profile">Profile</Nav.Link>
      //             <Nav.Link href="#Contact">Contact</Nav.Link>
      //          </Nav>
      //       </Navbar.Collapse>
      //    </Container>
      // </Navbar>
   )
}

export default Heading