import React from 'react';
import '../StyleCambodian.css';
import belteiTourImage from '../Images/beltei_tour_new_engpromotion_15_sep_15.jpg';
import specialDiscountImage from '../Image/special_discount_17_Oct_14.png';
import grandOpeningImage from '../Image/grand_opening_biu_bt_ir.png';

function Cambodian() {
  return (
    <div className="container mx-auto">
      <h1 className="text text-2xl text-decoration-underline fs-6" >៤-សេចក្តីជូនដំណឹងផ្សេងៗ</h1>
      <div className=" flex flex-col justify-center items-center">
        <div className="">
          <div className="">
            <img src={belteiTourImage} alt="Beltei Tour" style={{ width: '530px', margin: '10px' }} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center">
            <img src={specialDiscountImage} alt="Special Discount" style={{ width: '530px', margin: '12px' }} />
            <img src={grandOpeningImage} alt="Grand Opening" style={{ width: '530px', margin: '12px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cambodian;
