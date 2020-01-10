import React from 'react';

import TeamCard from '../team-card/team-card.component';

import Aristia from '../../assets/img/team/team-1.jpg';
import Bayu from '../../assets/img/team/team-2.jpg';
import Zhorif from '../../assets/img/team/team-3.jpg';
import Ali from '../../assets/img/team/team-4.jpg';

import './team.styles.scss';

const teams = [
  {
    name: 'Aristia Reyhan',
    role: 'UI Designer',
    imgUrl: Aristia
  },
  {
    name: 'Bayu Aditya',
    role: 'Backend Developer',
    imgUrl: Bayu
  },
  {
    name: 'Zhorif Maulana',
    role: 'Frontend Developer',
    imgUrl: Zhorif
  },
  {
    name: 'Azhar Ali Fauzi',
    role: 'Frontend Developer',
    imgUrl: Ali
  },
]

const Team = () => (
  <div className='team'>
    <div className='container'>
      <div className='section-header'>
        <h3>Meet Our Team</h3>
        <p>Our team consists of several people who are experienced in organizations and web development.</p>
      </div>
      <div className='row'>
        {teams.map(({name, role, imgUrl}) => (
          <TeamCard name={name} role={role} imgUrl={imgUrl} key={name}  />
        ))}
      </div>
    </div>
  </div>
);

export default Team;
