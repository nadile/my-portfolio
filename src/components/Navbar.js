import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">My Portfolio</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/work">Work</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="header">
                <h1>I am junior web developer</h1>
                <p className="header-about">
                    My name is Nadile R. Adanç.I graduated from Eskişehir Osmangazi University.
                    I am trying to improve myself on react.I developed this page with react.
            </p>
                <div className="btn"
                    style={{ paddingLeft: "30px", width: "220px", fontSize: "22px", paddingTop: "10px" }}>
                    <button
                        className="btn btn-outline-info"
                        style={{ width: "160px", height: "50px" }}>
                        <Link to="contact" style={{ color: "white", textDecoration: "none" }}>Contact Me</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
