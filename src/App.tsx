import React from 'react';
import {FiArrowRight} from 'react-icons/fi'
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img className="logo" src={logoImg} alt=""/>

        <main>
          <h1>Leve felecidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        
        <div className="location">
          <strong>São Lourenço da Mata</strong>
          <span>Pernambuco</span>
        </div>

        <a href="" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
          
      </div>
    </div>
  );
}

export default App;
