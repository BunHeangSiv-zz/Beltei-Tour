

// import Container from 'react-bootstrap/Container';
import React from 'react'
import footer from '../Image/purpose_eng.png';


function UseButton() {
  return (
    <div class="container text-primary">


     <img className="mx-auto" src={footer} alt='hh' />

      <p class="P1 text-justify" >
       <span class="text-success text-justify"> BELTEI Group</span> established <span class="text-success " >BELTEI Tour</span> to contribute and improve Tourism
        Sector in Cambodia with the Royal Government that has the Ministry of
        Tourism as its general headquarter. BELTEI Tour has the duty to guide local
        and international tourists and inform about the abundant treasures and culture
        of Cambodia including territory, nature, exquisite temples, and beautiful bays,
        which have become a member of the most beautiful bays in the world Club. Moreover,
        BELTEI Tour has the duty to guide Cambodian people to visit other tour destinations
        around the world in order to know about the general situations and to extract experiences
        from those developed countries for steadily innovating and developing ourselves and the society of Cambodia in the future.


      </p>
    </div>

  );
}

export default UseButton;