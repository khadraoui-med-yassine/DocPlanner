import React from 'react';
import './App.css';
import Navigationbar from './navigation';
import Section_one from './section-1';
import Sectiontwo from './Section-2';
import Sectionthree from './section-3';
import Sectionthreetwo from './section-3-2';
import Sectionfour from './section-4';
import {menu,objet1} from './data';
import Sectioncountry from './Sectioncountry';
 import Footer from './Footer.js';


function App() {
  return (
    <div className="container">
      <Navigationbar menu={menu}/>
      <Section_one />
      <Sectiontwo />
      <Sectionthree arr={objet1}/>
      <Sectionthreetwo />
      <Sectionfour />

      <div className="improve-lives"> 
          <div className="green-paragraphe" style={{fontSize:"30px",width:"30%"}}>Improve the lives of millions Change yours forever</div>
          <div className="paragraphe-section-5">More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</div>
      </div>
      <Sectioncountry />
      <Footer />

    </div>
  );
}

export default App;
