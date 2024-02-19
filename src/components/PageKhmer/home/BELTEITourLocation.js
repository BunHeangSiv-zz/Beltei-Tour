
import React from 'react'

import '../StyleCambodian.css';
import welcomebt from '../Images/welcomebt.png'
import tour_map from '../Images/tour_map.png'
import welcomebt1 from '../Images/welcomebt1.png'
import tour_map1 from '../Images/tour_map1.png'
function Cambodian() {
  return (
    <div class="container ">
        <h1 class="text text-decoration-underline fs-6" >ប្លង់ទីតាំង ប៊ែលធី ទេសចរណ៍</h1>
        <p class="text_P text-primary pt-2" >អាសយដ្ឋានៈ អគារលេខ៥៧ ផ្លូវ២១៧ កែង ផ្លូវ២៩០ សង្កាត់ ទួលស្វាយព្រៃ​២ ខណ្ឌ​ចំការមន ក្រុងភ្នំពេញ​ កម្ពុជា។</p>
        <p style={{color: "rgb(65, 129, 106)"}}>អ៊ីម៉េលៈ<span style={{color:"dodgerblue"}}> info@belteitour.com.kh</span></p>
        <p className='text-primary' >ទូរស័ព្ទ:023 999967|023 999920</p>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={welcomebt}  />
                </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={tour_map}  />
                </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={welcomebt1}  />
                </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={tour_map1}  />
                </div>
                
            </div>
       
    </div>
    
  );
}

export default Cambodian;