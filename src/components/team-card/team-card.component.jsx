import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './team-card.styles.scss';

library.add(fab);

const TeamCard = ({name, role, imgUrl}) => (
  <div className="col-lg-3 col-md-6 team-card">
    <div className="member">
      <img src={imgUrl} className="img-fluid" alt="" />
      <div className="member-info">
        <div className="member-info-content">
          <h4>{name}</h4>
          <span>{role}</span>
          <div className="social">
            <FontAwesomeIcon icon="check-square" />
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
