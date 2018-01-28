import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../navbar/index.css';
import classnames from 'classnames';

import * as navbarActions from '../../actions/navbar-actions.js';

class Navbar extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const { toggleNav } = this.props;
    toggleNav();
  }

  render() {
    const { navShown, hasNav } = this.props;
    const menuClass = classnames({
      navbar: true,
      showNav: navShown
    });
    if (hasNav) {
      return (
        <div className={menuClass}>
          <div className='container' >
            <nav>
              <div className='brand'><Link to='/'>
                <i className='fa fa-arrow-circle-o-left fa-2x' aria-hidden='true'></i>
              </Link></div>
              <div className='navItems'>
                <ul>
                  <li><Link to='/'>Home</Link>Home</li>
                </ul>
              </div>
              <button className='navButton' onClick = {this.toggle}>
                <FontAwesome name='bars' />
              </button>
            </nav>
          </div>
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

Navbar.propTypes = {
  toggleNav: PropTypes.func
};

const mapStateToProps = state => {
  return {
    navShown: state.navbar.navShown,
    hasNav: state.navbar.hasNav
  };
};

export default connect(mapStateToProps, navbarActions)(Navbar);
