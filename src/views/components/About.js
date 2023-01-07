/* eslint-disable react/prop-types */
import { Component } from 'react';

export class About extends Component {
  render() {
    const { address, name, profilePicture, bio, phone, email } = this.props.data || {};
    const { city, state } = address || {};

    const profilePictureUrl = `${process.env.PUBLIC_URL}${profilePicture}`;

    console.log('profilePictureUrl', profilePictureUrl);
    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img className='profile-pic' src={profilePictureUrl} alt='Franco Mischuk Profile Pic' />
          </div>
          <div className='nine columns main-col'>
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}
                    <br />
                    {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
