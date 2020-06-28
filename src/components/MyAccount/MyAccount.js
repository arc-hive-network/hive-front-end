import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const MyAccount = () => {
    // userInfo is used to track the user info inputed by the user on the edit page
    // user = { name, handle, pronouns, email, phone }
    const [userInfo,updateUserInfo] = useState({name: 'error', handle: 'error', pronouns: 'err/err/oor', email: 'error@error.com', phone: 'err-orer-rore'})

    // fetch user info on component update
    useEffect(()=>{
        // add API call to fetch user info
        // const res = fetch('URL')
        // const data = res.json();
        // updateUserInfo(data);
    })

    // called onChange of form inputs
    const handleChange = e => {
        let newUserInfo = userInfo;
        newUserInfo[e.target.name] = e.target.value;
        updateUserInfo(newUserInfo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // make api call to update user info
        // change URL to /profile
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