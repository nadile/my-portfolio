import React from 'react'
import "./style.scss";

function Skills() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" style={{ height: "55px" }}>
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
            <h3
                style={{ textAlign: "center", paddingRight: "40px", fontFamily: "font-family: 'Bitter', serif;" }}>
                My Skills
            </h3>
            <div className="skills">
                <div className="skills-tab-a">
                    <i class="fab fa-react" style={{ paddingLeft: "45px", fontSize: "40px" }}></i>
                    <h5>React Developing</h5>
                </div>
                <div className="skills-tab-b">
                    <i class="fab fa-css3" style={{ fontSize: "40px" }}></i>
                    <h5>Css</h5>
                </div>
                <div className="skills-tab-c">
                    <i class="fab fa-html5" style={{ paddingLeft: "5px", fontSize: "40px" }}></i>
                    <h5>Html</h5>
                </div>
                <div className="skills-tab-d">
                    <i class="fab fa-bootstrap" style={{ paddingLeft: "5px", fontSize: "40px" }}></i>
                    <h5>Bootstrap</h5>
                </div>
                <div className="skills-tab-e">
                    <i class="fab fa-js" style={{ paddingLeft: "5px", fontSize: "40px" }}></i>
                    <h5>Javascript</h5>
                </div>
                <div className="skills-tab-f">
                    <h5>Mssql</h5>
                </div>
                <div className="skills-tab-g">
                    <h5>Mysql</h5>
                </div>
                <div className="skills-tab-h">
                    <h5>English</h5>
                </div>
            </div>
            <h3
                style={{ textAlign: "center", paddingRight: "40px", fontFamily: "font-family: 'Bitter', serif;" }}>
                My Tools
            </h3>
            <div className="Tools">
                <div className="tools-tab-a">
                    <i class="fas fa-database" style={{ fontSize: "40px", paddingLeft: "60px" }}></i>
                    <h5>Microsoft Sql Server</h5>
                </div>
                <div className="tools-tab-b">
                    <h5>Visual Studio Code</h5>
                </div>
                <div className="tools-tab-c">
                    <h5>Anaconda</h5>
                </div>
                <div className="tools-tab-d">
                    <h5>Eclipse</h5>
                </div>
                <div className="tools-tab-e">
                    <h5>Visual Studio</h5>
                </div>
            </div>
        </>
    )
}
export default Skills;