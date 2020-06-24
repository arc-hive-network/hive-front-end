import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// user = { name, handle, pronouns, email, phone }
const MyAccount = ({ user }) => {
    // userInfo is used to track the user info inputed by the user on the edit page
    const [userInfo,updateUserInfo] = useState(user)

    // called onChange of form inputs; updates userInfo to reflect user input
    const handleChange = e => {
        let newUserInfo = userInfo;
        newUserInfo[e.target.name] = e.target.value;
        updateUserInfo(newUserInfo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('SUBMIT!');
    }

    return (
        <>
            <Route
                exact path='/profile'
                render={ () => (
                    <>
                        <Link to='/profile/edit'><Button>Edit</Button></Link>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.handle}</div>
                            <div>{user.pronouns}</div>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                        </div>
                    </>
                )
            } />
            <Route
                exact path='/profile/edit'
                render={ () => (
                    <>
                        <Link to='/profile'><Button>View</Button></Link>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    defaultValue={userInfo.name}
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
                                    defaultValue={userInfo.handle}
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
                                    defaultValue={userInfo.pronouns}
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
                                    defaultValue={userInfo.email}
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
                                    defaultValue={userInfo.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </>
                )
            } />
        </>
    )
}

export default MyAccount;