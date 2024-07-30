import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import kidsImage from './kids.jpg';

function App() {
  return (
    <div className="invitation-card">
      <h1>Our Wedding Invitation</h1>
      <div className="container">
        <div className="image-container">
          <img src={kidsImage} alt="Wedding" className="invitation-image" />
        </div>
        <div style={{marginLeft: "20px"}}>
          <p>Սիրով  հրավիրում  ենք  Ձեզ  ներկա  գտնվելու  մեր  սիրելի  դստրեր՝  Մարիի  և  Ալբինայի  Սուրբ  Մկրտության  արարողությանը
            Մկրտության  արարողությունը  տեղի  կունենա  15.08.2024թ. ժամը  15:30-ին  Սուրբ Երրորդություն  եկեղեցի  ք.Երևան, Րաֆֆու փողոց
            Մկրտության  տոնակատարությունը  տեղի  կունենա  ժամը  17:00-ին  Էլիտա  ռեստորան  ք.Երևան, Անդրանիկի փ. 15/2
            Սիրով  կսպասենք  Ձեզ  միասին  նշանավորելու  նրանց  հոգևոր  ճանապարհորդության սկիզբը:
            Հարգանքով՝  Բաբայանների  ընտանիք</p>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
