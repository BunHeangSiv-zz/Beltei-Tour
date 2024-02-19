
import React from 'react'

import '../StyleCambodian.css';
import booklet_green from '../Image/booklet_green.png';
import booklet_red from '../Image/booklet_red.png';
import booklet_blue from '../Image/booklet_blue.png';
import booklet_yell from '../Image/booklet_yell.png';


function CambodiaCulture() {
  return (
    <div class="container">
    
 
   <h3 className="text-center text-decoration-underline  text-primary fs-6" >៤-ទាញយកសៀវភៅព័ត៌មាន ប៊ែលធី ទេសចរណ៏ ឆ្នាំ២០១៣</h3>

   <p className='text-primary mt-2' > សូមចុចដើម្បីទាញយក!!!</p>
<img className="d-block mx-auto w-auto rounded-3" src={booklet_green} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_red} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_blue} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_yell} alt='hh' /> 
 


    </div>
    
  );
}

export default CambodiaCulture;