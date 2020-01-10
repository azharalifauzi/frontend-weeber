import React from 'react';

import Button from '../button/button.component';

import './pricing-plan.styles.scss';

const PricingPlan = ({name, price}) => (
    <div class="col-xs-12 col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3><span class="currency">Rp.</span>{price}<span class="period">/month</span></h3>
        </div>
        <div class="card-block">
          <h4 class="card-title">
            {name}
          </h4>
          <Button color='btn-dark-blue'>Details</Button>
        </div>
      </div>
    </div>
);

export default PricingPlan;
