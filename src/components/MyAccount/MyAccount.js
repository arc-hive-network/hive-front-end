import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// user = { name, handle, pronouns, email, phone }
const MyAccount = ({ user }) => {
    const [userInfo,updateUserInfo] = useState( user )

    const handleChange = e => {
        console.log(e.target.name,e.target.value)
    }

    return (
        <>
            <Route
                exact path='/profile'
                render={ () => (
                    <>
                        <Link to='/profile/edit'><Button>Edit</Button></Link>
                        <div>
                            <div>{userInfo.name}</div>
                            <div>{userInfo.handle}</div>
                            <div>{userInfo.pronouns}</div>
                            <div>{userInfo.email}</div>
                            <div>{userInfo.phone}</div>
                        </div>
                    </>
                )
            } />
            <Route
                exact path='/profile/edit'
                render={ () => (
                    <>
                        <Link to='/profile'><Button>View</Button></Link>
                        <Form>
                        <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="handle">
                                <Form.Label>Handle</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="handle"
                                    placeholder="handle"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="pronouns">
                                <Form.Label>Pronouns</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="pronouns"
                                    placeholder="pronouns"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="phone"
                                    placeholder="phone"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </>
                )
            } />
        </>
    )
}

export default MyAccount;