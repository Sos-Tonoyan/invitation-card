import React from 'react';
import churchImage from './church.png';
import restaurantImage from './restaurant.png';
import './Information.css';

const Information = () => {
  const locations = [
    {
      name: "եկեղեցի",
      image: churchImage,
      time: "15:30",
      link: "https://www.google.com/maps/place/St.+Erordutyun+Church/@40.1743787,44.4398475,17z/data=!3m1!4b1!4m6!3m5!1s0x406abde6493654bd:0xb207688653b878a9!8m2!3d40.1743746!4d44.4424224!16s%2Fm%2F06w4qry?entry=ttu&fbclid=IwY2xjawEVlktleHRuA2FlbQIxMAABHVvjKnwvfhSck7EQNBCKkDZgbgB30X-d5MLr5yv9ygGabGxQc3krIvaMwQ_aem_oTRH7o64kB1urWABxBR2lA"
    },
    {
      name: "ռեստորան",
      image: restaurantImage,
      time: "17:00",
      link: "https://www.google.com/maps/place/Elita/@40.1793392,44.4444532,17z/data=!4m14!1m7!3m6!1s0x406abdeeaab4207d:0xbef07774a2fe1368!2sElita!8m2!3d40.1793351!4d44.4470281!16s%2Fg%2F11dx8gr_b0!3m5!1s0x406abdeeaab4207d:0xbef07774a2fe1368!8m2!3d40.1793351!4d44.4470281!16s%2Fg%2F11dx8gr_b0?entry=ttu&fbclid=IwY2xjawEVlm9leHRuA2FlbQIxMAABHTRq0VYpDe7WqUhkanS9LAKmNtilFt5kirQnTYfL-nfhjthwA3GT_9m5Dw_aem_Vt-jtiFFlHXADnQS-Eefdw"
    }
  ];

  return (
    <div className="information">
      <h2>Միացեք մեզ</h2>
      <h4>(Սեղմեք Նկարին՝  Հասցեն Տեսնելու Համար)</h4>
      {locations.map((location, index) => (
        <div className="info-box" key={index}>
          <a href={location.link} target="_blank" rel="noopener noreferrer">
            <img src={location.image} alt="Location" className="info-image" />
          </a>
          <div className="info-time">
            {location.name} <br/>
            Ժամը {location.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
