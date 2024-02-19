// // CambodiaCulture.js
// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import '../StyleCambodian.css';
// import cambodia_culture from '../Image/cambodia_culture.png';
// import beltei_tour_pchum_ben_festival from '../Image/beltei_tour_pchum_ben_festival.png';
// import beltei_tour_khmer_new_year from '../Image/beltei_tour_khmer_new_year.png';
// import beltei_tour_water_festival from '../Image/beltei_tour_water_festival.png';
// import beltei_tour_royal_plouging from '../Image/beltei_tour_royal_plouging.png';
// import beltei_tour_apsara_dancing from '../Image/beltei_tour_apsara_dancing.png';

// const imagesWithContent = [
//   {
//     image: cambodia_culture,
//     content: "Content for Cambodia Culture image",
//   },
//   {
//     image: beltei_tour_pchum_ben_festival,
//     content: "Content for Pchum Ben Festival image",
//   },
//   {
//     image: beltei_tour_khmer_new_year,
//     content: "Content for Khmer New Year image",
//   },
//   {
//     image: beltei_tour_water_festival,
//     content: "Content for Water Festival image",
//   },
//   {
//     image: beltei_tour_royal_plouging,
//     content: "Content for Royal Plouging image",
//   },
//   {
//     image: beltei_tour_apsara_dancing,
//     content: "Content for Apsara Dancing image",
//   },
// ];

// function CambodiaCulture({ onImageClick }) {
//   const handleImageClick = (index) => {
//     onImageClick(imagesWithContent[index]);
//   };

//   return (
//     <Container>
//       {imagesWithContent.map((item, index) => (
//         <div key={index}>
//           <img
//             className="d-block w-20 rounded-3 rounded mx-auto d-block"
//             src={item.image}
//             alt={`image-${index}`}
//             onClick={() => handleImageClick(index)}
//           />
//           <p>{item.content}</p>
//           <br />
//         </div>
//       ))}
//     </Container>
//   );
// }

// export default CambodiaCulture;



//----------





import React from 'react'
import cambodia_culture from '../Image/cambodia_culture.png';
import beltei_tour_pchum_ben_festival from '../Image/beltei_tour_pchum_ben_festival.png';
import beltei_tour_khmer_new_year from '../Image/beltei_tour_khmer_new_year.png';
import beltei_tour_water_festival from '../Image/beltei_tour_water_festival.png';
import beltei_tour_royal_plouging from '../Image/beltei_tour_royal_plouging.png';
import beltei_tour_apsara_dancing from '../Image/beltei_tour_apsara_dancing.png';


function CambodiaCulture() {
  return (
    <div class="container">
    
  
     <img className="d-block mx-auto w-auto rounded-3" src={cambodia_culture} alt='hh' /> 
     <br></br>
  <div className='HOVER'><img className="d-block mx-auto w-auto rounded-3  " src={beltei_tour_pchum_ben_festival} alt='hh' /> 
  <br></br></div>   

<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3"  src={beltei_tour_khmer_new_year} alt='hh' /> 
<br></br></div>
<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3"  src={beltei_tour_water_festival} alt='hh' /> 
<br></br></div>
<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3" src={beltei_tour_royal_plouging} alt='hh' /> 
<br></br></div>
<div className='HOVER'><img className="d-block mx-auto w-auto rounded-3" src={beltei_tour_apsara_dancing} alt='hh' /> 
</div>





    </div>
    
  );
}

export default CambodiaCulture;