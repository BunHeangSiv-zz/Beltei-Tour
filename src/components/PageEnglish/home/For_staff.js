

import React from 'react'

import job from '../Image/job_02-02-15.png'
import jobs from '../Image/job_tour 30-05-2013.png'


// import './index.css';

    


function UseButton() {
  return (
    <div class="container">
             <h1 className="text-primary text-center fs-5 fst-italic" > 1-For Staff </h1>
             <div ><img className="d-block mx-auto w-auto rounded-3 mt-3" src={job} /></div>
             <div ><img className="d-block mx-auto w-auto rounded-3 mt-2" src={jobs} /></div>

    </div>

  );
}

export default UseButton;