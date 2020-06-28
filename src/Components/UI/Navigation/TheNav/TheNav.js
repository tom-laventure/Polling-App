import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { StoreContext } from '../../../../Store/StoreContext'
import firebase from 'firebase'
import { Link } from 'react-router-dom'

const TheNav = () => {
    const {  fire, actions } = useContext(StoreContext)

    const logOut = () => {
        fire.doSignOut(() => {
            actions.setCurrentUser(null)
        })
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">Poll</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Button variant="dark" onClick={() => logOut()}>Logout</Button>
        </Navbar>
    )
}

export default TheNav;