import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/profile.jpg';
import config from '../../config';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Leadership and Development', href: 'leadership' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Portfolio', href: 'portfolio' },
      ],
      collapsed: false,
    };
  }

  toggleNavbar = () => {
    this.setState((state) => ({ ...state, collapsed: !state.collapsed }));
  };

  render() {
    const { tabs, collapsed } = this.state;
    return (
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <NavbarBrand href="#page-top" className="mr-auto">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Scrollspy
            items={tabs.map((s) => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </Collapse>
      </Navbar>
    );
  }
}

export default Sidebar;
