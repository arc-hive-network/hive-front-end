import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


// Seperate groups of option that appear on the main navbar

const primaryOptions = (
  <Fragment>
    <Nav.Link href='#profile'>Profile</Nav.Link>
    <Nav.Link href="#messages">Messages</Nav.Link>
    <Nav.Link href="#createCell">Create Cell</Nav.Link>
    <Nav.Link href="#feed">Feed</Nav.Link>
  </Fragment>
)

// const hiveMainOptions = (
//   <Fragment>
//   </Fragment>
// )
//
// const cellMainOptions = (
//   <Fragment>
//   </Fragment>
// )
//
// const messageMainOptions = (
//   <Fragment>
//   </Fragment>
// )

//******************//

const Header = () => (
  <Fragment>
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#">
        <p>Hive</p >
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { primaryOptions }
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
)

export default Header
