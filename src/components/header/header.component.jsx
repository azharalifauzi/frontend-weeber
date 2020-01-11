import React from 'react';

import Logo from '../../assets/img/logowhite.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.styles.scss';

class Header extends React.Component {
  state = {
    isScroll : false
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isScroll = window.scrollY > 50;
      if (isScroll) {
        document.getElementById("nav").classList.add("scrolled");
        this.setState({isScroll: true})
      } else {
        document.getElementById("nav").classList.remove("scrolled");
        this.setState({isScroll: false})
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListner('scroll');
  }
  render() {
    const { isScroll } = this.state;
    const { onHomeFocus, onProductFocus, onTeamFocus, onContactUsFocus } = this.props;
    return(
      <nav id='nav' className="navbar navbar-expand-lg navbar-light">
        <div className='container'>
          <img className='navbar-brand' src={Logo} alt='Weeber Logo' />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className={`${isScroll ? "scrolled-icon" : null}`} icon='bars' />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item active'>
                <span onClick={onHomeFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null}`} >Home <span className="sr-only">(current)</span></span>
              </li>
              <li className="nav-item">
                <span onClick={onProductFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null}`} >Product</span>
              </li>
              <li className="nav-item">
                <span onClick={onTeamFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null}`} >Team</span>
              </li>
              <li className="nav-item">
                <span onClick={onContactUsFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null}`} >Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
