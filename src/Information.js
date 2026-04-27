import React from 'react';
import churchImage from './church.png';
import restaurantImage from './restaurant.png';
import './Information.css';

const Information = () => {
  const locations = [
    {
      name: "Church",
      image: churchImage,
      time: "14:00",
      link: "https://maps.app.goo.gl/jQp5xrgGHNcU5viz8"
    },
    {
      name: "Restaurant",
      image: restaurantImage,
      time: "18:00",
      link: "https://maps.app.goo.gl/N82fUUD1ZtPguPLQA"
    }
  ];

  return (
    <div className="information">
      <h2>Join us</h2>
      <h4>(Click for the locations)</h4>
      {locations.map((location, index) => (
        <div className="info-box" key={index}>
          <a href={location.link} target="_blank" rel="noopener noreferrer">
            <img src={location.image} alt="Location" className="info-image" />
          </a>
          <div className="info-time">
            {location.name} <br/>
            at {location.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
