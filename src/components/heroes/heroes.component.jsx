import React from 'react';

import People from '../../assets/img/people-01.png';
import Button from '../button/button.component';

import './heroes.styles.scss';

const Heroes = () => (
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
      <div class="row justify-content-center align-self-center">
        <div class="col-md-6 intro-info order-md-first order-last">
          <div className='intro-text'>
            <h2>We provide web<br/> services<br/>for your needs</h2>
          </div>
          <div className='button mt-4'>
            <Button color='btn-dark-blue'>Get Started</Button>
          </div>
        </div>

        <div class="col-md-6 intro-img order-md-last order-first">
          <img src={People} alt="" class="img-fluid" />
        </div>
      </div>
  </div>
</div>
);

export default Heroes
