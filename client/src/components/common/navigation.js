import React, {useContext} from 'react'
import {Link, useHistory, NavLink} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";
const navLinks = [
    {
        title: 'Home',
        path: '/'

    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },





]

export default function Navigation() {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (


        <nav className="site-navigation">
            <span>My React Blog</span>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
            </ul>

    </nav>)
}
