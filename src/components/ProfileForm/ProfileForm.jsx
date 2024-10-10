import React, { useState } from 'react';
import './profileForm.scss';
import TabMenu from '../TabMenu/TabMenu';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    dateOfBirth: '1990-01-25',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  });

  const handleChange = (e) => {
    setProfile({
      [e.target.name]: e.target.value,
    });
  };

  return (
      <form className="profile-form">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />

        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={profile.dateOfBirth}
          onChange={handleChange}
        />

        <label htmlFor="presentAddress">Present Address</label>
        <input
          type="text"
          name="presentAddress"
          value={profile.presentAddress}
          onChange={handleChange}
        />

        <label htmlFor="permanentAddress">Permanent Address</label>
        <input
          type="text"
          name="permanentAddress"
          value={profile.permanentAddress}
          onChange={handleChange}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={profile.city}
          onChange={handleChange}
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={profile.postalCode}
          onChange={handleChange}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={profile.country}
          onChange={handleChange}
        />

        <div className="save-button">
          <button type="submit">Save</button>
        </div>
      </form>
  );
};

export default ProfileForm;
