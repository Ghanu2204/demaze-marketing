import { Component } from "react";
import "./NavbarStyles.css";
import { Menuitem } from "./Menuitem";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
  state = { clicked: false };
  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <AnchorLink href="#home">
            <img alt="logo" src="/images/logo.png" />
          </AnchorLink>
          <div className="menu-icons" onClick={this.handleClicked}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {Menuitem.map((item, index) => {
              return (
                <li key={index}>
                  <AnchorLink href={item.url} className={item.cName}>
                    {item.title}
                  </AnchorLink>
                </li>
              );
            })}
            <button className="btn-nav">
              <AnchorLink href="#contact">Contact Us</AnchorLink>
            </button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
