import React from 'react'; 
import DHF2 from '../img/DHF2.png';
import Trading2 from '../img/Trading2.png';
import TravelBetter2 from '../img/TravelBetter2.png';
import EduLearn from '../img/EduLearn.png';
import Kezzthechef from '../img/Kezzthechef.png';

const Work_page =() => {
  return (
    <div className='work_page'>
        <h1>My Works</h1>
        <p>Some of my projects</p>
        <h2>Web Applications</h2>
        <div className='workProject'>
              <div className='workImg'>
                 <div className='work2-bg'></div>
                  <img src={DHF2} className='dhf2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg'></div>
                  <img src={Trading2} className='trading2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg'></div>
                  <img src={TravelBetter2} className='travelbetter2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg'></div>
                  <img src={EduLearn} className='edulearn' />
              </div>
              <div className='workImg'>
                 <div className='work2-bg'></div>
                  <img src={Kezzthechef} className='kezz' />
              </div>
        </div>
    </div>
  )
}

export default Work_page