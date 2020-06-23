import React from 'react';
import {Route, Link} from 'react-router-dom'

const MyAccount = ({ displayName, userName,  }) => {
    return (
        <>
            <Route
                exact path='/profile'
                render={ () => (
                    <>
                        <nav>
                            <Link to='/profile'>View</Link>
                            <Link to='/profile/edit'>Edit</Link>
                        </nav>
                        <div>[displayname]</div>
                        <div>[username]</div>
                        <div>[pronouns]</div>
                        <div>[email address]</div>
                    </>
                )
            } />
            <Route
                exact path='/profile/edit'
                render={ () => (
                    <>
                        <nav>
                            <Link to='/profile'>View</Link>
                            <Link to='/profile/edit'>Edit</Link>
                        </nav>
                        <div>[displayname]</div>
                        <div>[username]</div>
                        <div>[pronouns]</div>
                        <div>[email address]</div>
                    </>
                )
            } />
        </>
    )
}

export default MyAccount;