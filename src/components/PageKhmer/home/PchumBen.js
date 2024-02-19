






import 'bootstrap/dist/css/bootstrap.min.css';
import welcome_message from '../Image/pchum_ben_festival.png'
import monk from '../Image/monk.jpg'
import bowl from '../Image/bowl.jpg'
import bowl2 from '../Image/bowl2.jpg'
import Container from 'react-bootstrap/Container';
import React from 'react'




function UseButton() {
    return (
        <div class="container">
            <div ><img className="d-block w-100  rounded mx-auto d-block" src={welcome_message} /></div>
            <div ><img className="d-block w-85  rounded mx-auto d-bloc rounded-3 rounded mx-auto d-blockk" src={monk} /></div>
            <br></br>
            <p class="text-primary text-justify" >Pchum Ben is a 15-day Cambodian religious festival, culminating in celebrations on the 15th day of the tenth month in the Khmer calendar, at the end of the Buddhist lent, Vassa. The day is a time when many Cambodians pay their respects to deceased relatives of up to 7 generations. Monks chant the sutra in Pali language overnight (continuously, without sleeping) in prelude to the gates of hell opening, an event that is presumed to occur once a year, and is linked to the cosmology of King Yama originating in the Pali Canon. During this period, the gates of hell are opened and ghosts of the dead (preta) are presumed to be especially active. In order to combat this, food-offerings are made to benefit them, some of these ghosts having the opportunity to end their period of purgation, whereas others are imagined to leave hell temporarily, to then return to endure more suffering; without much explanation, relatives who are not in hell are also generally imagined to benefit from the ceremonies. In temples adhering to canonical protocol, the offering of food itself is made from the laypeople to the (living) Buddhist monks, thus generating "merit" that indirectly benefits the dead; however, in many temples, this is either accompanied by or superseded by food offerings that are imagined to directly transfer from the living to the dead, such as rice-balls thrown through the air, or rice thrown into an empty field. Anthropologist Satoru Kobayashi observed that these two models of merit-offering to the dead are in competition in rural Cambodia, with some temples preferring the greater canonicity of the former model, and others embracing the popular  assumption that mortals can "feed" ghosts with physical food. Pchum Ben is considered unique to Cambodia, however, there are merit-transference ceremonies that can be closely compared to it in Sri Lanka (i.e., offering food to the ghosts of the dead), and in its broad outlines, it even resembles the Taiwanese Ghost Festival (i.e., especially in its links to the notion of a calendric opening of the gates of hell, King Yama, and so on).

            </p>




            <br></br>
            <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                    <div ><img className="d-block w-100  rounded-5 rounded mx-auto d-block  " src={bowl} /></div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                    <div ><img className="d-block w-100  rounded-5 rounded mx-auto d-block  " src={bowl2} /></div>

                </div>

            </div>
        </div>

    );
}

export default UseButton;
