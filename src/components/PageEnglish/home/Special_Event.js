import React from 'react'

import '../StyleCambodian.css';
function Special_Event() {
  return (
    <div class="container">
        <div class="row border">
            <div class="row-12 border" style={{background: "red"}}>
                <div class="text text-justify col-xl-12" >404 - Article #904 not found</div>
            </div>
            <div class="row text-justify" style={{marginLeft:"30px"}}>
                <h5 >You may not be able to visit this page because of:</h5>
                <div class="col-12 " >
                    1. an out-of-date bookmark/favourite
                </div>
                <div class="col-12 text-justify " >
                    2. a search engine that has an out-of-date listing for this site
                </div>
                <div class="col-12 text-justify" >
                    3. a mistyped address
                </div>
                <div class="col-12 text-justify" >
                    4. you have no access to this page
                </div>
                <div class="col-12 text-justify" >
                    5. The requested resource was not found.
                </div>
                <div class="col-12 text-justify" >
                    6. An error has occurred while processing your request.
                </div>
                <h5>Please try one of the following pages:</h5>
                <div class="col-12 text-justify" >
                    <ul >
                        <li>Home</li>
                    </ul>
                </div>
                <p className='text-justify' >If difficulties persist, please contact the System Administrator of this site.</p>
                <div class="col-12 " style={{marginLeft:"20px"}}>
                    <ul class="list-group dropdown">
                        <li class="list-group-item dropdown-item disabled fw-lighter" >Article #904 not found</li>
                    </ul>
                </div>
                <br></br>
                <br></br>
                <div class="box mt-20">
                    <p style={{color:"whitesmoke"}}>.</p>
                </div>
            </div>
            
        </div>
    </div>
    
  );
}

export default Special_Event;