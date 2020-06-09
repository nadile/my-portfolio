import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        isSend: false
    }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }
    onMessageChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    }
    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }
        axios.post('api/forma', data)
            .then(res => {
                this.setState({
                    isSend: true,
                }, this.resetForm())
            }).catch(() => {
                console.log("message not sent!!")
            })
    }
    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }

    render() {
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
                <div style={{ background: "lightblue", height: "607px", width: "auto", paddingTop: "10px" }}>
                    <div
                        style={{
                            height: "470px", width: "700px",
                            marginLeft: "330px", marginTop: "50px", border: "2px solid black",
                            borderRadius: "15px", paddingTop: "20px"
                        }}>
                        <h2 style={{ textAlign: "center", fontFamily: "Georgia,Times New Roman,Times,serif" }}>Contact</h2>
                        <div className="container">
                            <form
                                style={{ fontFamily: "Georgia,Times New Roman,Times,serif", fontWeight: "bold" }}
                                onSubmit={this.formSubmit}
                            >
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control"
                                        placeholder="Enter name"
                                        value={this.state.name}
                                        onChange={this.onNameChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        placeholder="Enter message"
                                        rows="4"
                                        value={this.state.message}
                                        onChange={this.onMessageChange}
                                    />
                                </div>

                                <button type="submit"
                                    className="btn btn-primary btn-block"
                                >Send</button>
                            </form>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Contact;