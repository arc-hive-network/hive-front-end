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
                            <div>
                            <Form.Group controlId="cellName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="text"
                                    placeholder="your name"
                                    // onChange={}
                                />
                            </Form.Group>
                            </div>
                        </Form>
                    </>
                )
            } />
        </>
    )
}

export default MyAccount;