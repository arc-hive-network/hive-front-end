import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// user = { name, handle, pronouns, email, phone }
const MyAccount = ({ user }) => {
    const [userInfo,updateUserInfo] = useState( user )

    return (
        <>
            <Route
                exact path='/profile'
                render={ () => (
                    <>
                        <Link to='/profile/edit'><Button>Edit</Button></Link>
                        <Form>
                            <div>
                                <div>{userInfo.name}</div>
                                <div>{userInfo.handle}</div>
                                <div>{userInfo.pronouns}</div>
                                <div>{userInfo.email}</div>
                                <div>{userInfo.phone}</div>
                            </div>
                        </Form>
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
                                    name="text"
                                    placeholder="name"
                                    // onChange={}
                                />
                            </Form.Group>
                            <Form.Group controlId="handle">
                                <Form.Label>Handle</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="text"
                                    placeholder="handle"
                                    // onChange={}
                                />
                            </Form.Group>
                            <Form.Group controlId="pronouns">
                                <Form.Label>Pronouns</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="text"
                                    placeholder="pronouns"
                                    // onChange={}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="text"
                                    placeholder="email"
                                    // onChange={}
                                />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="text"
                                    placeholder="phone"
                                    // onChange={}
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