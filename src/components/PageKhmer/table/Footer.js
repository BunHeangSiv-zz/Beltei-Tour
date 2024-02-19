import React from 'react';
import '../StyleCambodian.css';

import top from '../Images/footer_top.png';

function Footer() {
    const color = '#B0AFAE';
    const customRowHeight = '40px';
  return (
    <>
        <div className="container">
          <div className="col-lg-12 text-center">
            <h5 style={{ fontSize: '1.5vw' }}>
              <font style={{ color: 'red', width:'50%' }}>
                <p >ព័ត៌មានលំអិតសូមចុចមើលសៀវភៅព័ត៌មានខាងក្រោម</p>
              </font>
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 border text-center">
            <img src={top} alt="Top" style={{ width:'100%', padding:'1%' }} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 border d-flex justify-content-center align-items-center">
            <img src={require('../Images/foottext.png')} alt="Foot Text" style={{ width:'100%' }} />
          </div>
          <div className="col-lg-6 border d-flex justify-content-center align-items-center">
            <img src={require('../Images/tourride.png')} alt="Tour Ride" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 border d-flex justify-content-center align-items-center">
            <img src={require('../Images/tourtext2.png')} alt="Tour Text 2" style={{ width:'100%' }} />
          </div>
          <div className="col-lg-6 border d-flex justify-content-center align-items-center">
            <img src={require('../Images/needed.png')} alt="Needed" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 border text-center">
            <img src={require('../Images/footer_bottom.png')} alt="Footer Bottom" style={{ width:'100%' }} />
          </div>
        </div>
    </>
  );
}

export default Footer;
