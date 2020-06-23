import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tag from './Tag'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20% 0 20%;
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
                  as="select"
                  name="purpose"
                  type="text"
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option>Free Exchange</option>
                  <option>Marketplace</option>
                  <option>Ind. Seller</option>
                  <option>Forum</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="cellTag">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  as="select"
                  name="Tags"
                  type="text"
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option>Free Exchange</option>
                  <option>Marketplace</option>
                  <option>Ind. Seller</option>
                  <option>Forum</option>
                </Form.Control>
              </Form.Group>
              <Tag/>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>
          </div>
        </Div>
  )
}

export default CreateCell
