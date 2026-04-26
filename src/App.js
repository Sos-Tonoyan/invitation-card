import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import kidsImage from './kids2.jpeg';
import Information from './Information';

function App() {
  return (
    <div className="invitation-card">
      <h1>ნათლობა(մկրտություն)</h1>
      <div className="container">
        <div className="image-container">
          <img src={kidsImage} alt="Wedding" className="invitation-image" />
        </div>
        <div className="contents-box">
        <div className="content-container">
      <h1>სოფია, ლილე და ჯორჯი</h1>

          <p>ძვირფასო სიყვარულით გიწვევთ ჩვენი ოჯახის ერთ-ერთი ყველაზე მნიშვნელოვანი და ბედნიერი დღის— ჩვენი პატარების  ნათლობასა და ჩვენი სიყვარულის ჯვრისწერით გაძლიერებას.
          თქვენი თანდასწრება ამ დღეს ჩვენთვის დიდი ბედნიერება იქნება, გელოდებით</p>
          <hr/>
      <h1>Սոֆիա, Լիլե և Ջորջ</h1>

          <p>Սիրելի՛ս, սիրով հրավիրում ենք Ձեզ մեր ընտանիքի ամենակարևոր և ամենաերջանիկ օրերից մեկին՝ մեր երեխաների մկրտությանը և խաչի նշանով մեր սիրո ամրապնդմանը։
          Ձեր ներկայությունն այս օրը մեծ երջանկություն կլինի մեզ համար, մենք սպասում ենք Ձեզ։</p>
          <hr/>
          <h1 style={{fontFamily: "monospace", color:"#d9534f"}}>JUNE 6,2026</h1>
          <CountdownTimer />
        </div>
        <div className="content-container">
          <Information />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
