import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { Menuitem } from "./Menuitem";

class Navbar extends Component {
  state = { clicked: false };
  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <img alt="logo" src="/images/logo.png" />
          <div className="menu-icons" onClick={this.handleClicked}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {Menuitem.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button><a href="/contact">Contact Us</a></button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
