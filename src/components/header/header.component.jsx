import React from 'react';

import Logo from '../../assets/img/logowhite.png';

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
    return(
      <nav id='nav' className="navbar navbar-expand-lg navbar-light">
        <div className='container'>
        <img className='navbar-brand' src={Logo} alt='Weeber Logo' />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className='nav-item active'>
              <a className={`nav-link active ${isScroll ? "scrolled-link" : null}`} href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active ${isScroll ? "scrolled-link" : null}`} href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active ${isScroll ? "scrolled-link" : null}`} href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active ${isScroll ? "scrolled-link" : null}`} href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}

export default Header;
