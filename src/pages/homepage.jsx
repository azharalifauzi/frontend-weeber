import React, {Fragment} from 'react';

import Header from '../components/header/header.component';
import Heroes from '../components/heroes/heroes.component';
import Pricing from '../components/pricing/pricing.component';
import Team from '../components/team/team.component';

const HomePage = () => (
  <Fragment>
    <Header />
    <Heroes />
    <Pricing />
    <Team />
  </Fragment>
);

export default HomePage;
