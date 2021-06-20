import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={navBarStyle}>
                <h2 style={{ margin: "0", fontSize: "36px", padding: "10px", color: "white" }}>Logo</h2>
                <Link to="/" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>Home</Link>
            </div>
        );
    }
}

export default Navbar;

const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 50px",
    backgroundColor: "black",
};
