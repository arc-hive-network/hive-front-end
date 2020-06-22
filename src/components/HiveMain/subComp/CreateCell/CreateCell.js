import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const MyFormControl = styled(Form.Control)`
  color: #000000;
  background-color: transparent;
  border-size: 0.5px;
  border-color:  #00000030;
  border-radius: 0px;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
`

const CreateCell = () => {
  const [cell, setCell] = useState(null)

  const handleChange = event => {
    setCell({ ...cell, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Create Cell</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="cellName">
                <Form.Label>Cell Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="text"
                  placeholder="Enter Cell Name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="cellDescription">
                <Form.Label>Cell Description</Form.Label>
                <Form.Control
                  required
                  name="Description"
                  type="text"
                  placeholder="Description"
                  as="textarea"
                  rows="5"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="cellPurpose">
                <Form.Label>Cell Purpose</Form.Label>
                <Form.Control
                  required
                  name="purpose"
                  type="text"
                  placeholder="Free Exchange/Marketplace/Ind. Seller"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group style={{ width: '30%' }} controlId="title">
              <MyFormControl
                required
                type="text"
                name="title"
                placeholder="Enter Title"
                onChange={handleChange}
              />
            </Form.Group>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>
          </div>
        </Div>
  )
}

export default CreateCell
