import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import kidsImage from './kids.jpg';
import Information from './Information';

function App() {
  return (
    <div className="invitation-card">
      <h1>Մարի և Ալբինա</h1>
      <div className="container">
        <div className="image-container">
          <img src={kidsImage} alt="Wedding" className="invitation-image" />
        </div>
        <div className="contents-box">
        <div className="content-container">
          <p>Սիրով  հրավիրում  ենք  Ձեզ  ներկա  գտնվելու  մեր  սիրելի  դստրեր՝  Մարիի  և  Ալբինայի  Սուրբ  Մկրտության  արարողությանը
            Մկրտության  արարողությունը  տեղի  կունենա  15.08.2024թ. ժամը  15:30-ին  Սուրբ Երրորդություն  եկեղեցի  ք.Երևան, Րաֆֆու փողոց
            Մկրտության  տոնակատարությունը  տեղի  կունենա  ժամը  17:00-ին  Էլիտա  ռեստորան  ք.Երևան, Անդրանիկի փ. 15/2
            Սիրով  կսպասենք  Ձեզ  միասին  նշանավորելու  նրանց  հոգևոր  ճանապարհորդության սկիզբը:
            Հարգանքով՝  Բաբայանների  ընտանիք</p>
            <hr/>
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
