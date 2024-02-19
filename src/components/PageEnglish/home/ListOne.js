// import React, { useState } from 'react';

// import image3 from '../Image/index'
// import Booklet from '../Booklet';

// function History() {
//   const images = [
//     image3.list1, image3.list2, image3.list3, image3.list4, image3.list5, 
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleClick = (index) => {
//     // Update the state to store the selected image index
//     setSelectedImage(index);
//   };

//   return (
//     <div class="container">
//       <Booklet />
//       {images.map((image, index) => (
//         <div className="row" key={index}>
//           <div className="col-lg-2"></div>
//           <div className="col-lg-4">
//             <a href="#" onClick={() => handleClick(index)}>
//               <img src={image} alt={`full-${index}`} />
//             </a>
//           </div>
//           <div className="col-lg-4">
//             <a href="#" onClick={() => handleClick(index)}>
//               <img src={image} alt={`full-${index}`} />
//             </a>
//           </div>
//           <div className="col-lg-2"></div>
//         </div>
//       ))}

//       {/* Render content related to the selected image */}
//       {selectedImage !== null && (
//         <div>
//           <h4>Content for Image {selectedImage + 1}</h4>
//           {/* Add your content here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default History;