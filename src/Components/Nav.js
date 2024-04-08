import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './log.png'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#"><img  className="rounded-circle" src={logo} style={{
                width:"40px",
                height:"40px"

            }}/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <NavLink to="/">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    </NavLink>
                    <li class="nav-item">
                        <NavLink to="/service">
                            <a class="nav-link">Service</a>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/about">
                            <a class="nav-link">About</a>
                        </NavLink>
                    </li>
                    <NavLink to="/contact">
                        <li class="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                    </NavLink>
                    <NavLink>
                        <NavLink to="/gallery">
                            <li class="nav-item">
                                <a class="nav-link" to="/gallery">Gallery</a>
                            </li>
                        </NavLink>

                    </NavLink>
                    <NavLink to="/policy">
                        <li class="nav-item">
                            <a class="nav-link">Policy</a>
                        </li>
                    </NavLink>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Nav
