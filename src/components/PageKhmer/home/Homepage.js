import React from 'react'
import welcome_to_beltei_tour_Homepage from '../Image/welcome_to_beltei_tour.png'
import tour_facebook from '../Image/tour_facebook.png'
import beltei_youtube from '../Image/beltei_youtube.png'
import beltei_tour_travels from '../Image/beltei-tour-travels-02.jpg'
import beltei_tours_in_cambodia from '../Image/beltei-tours-in-cambodia-02.jpg'
import beltei_tours_in_cambodia1 from '../Image/beltei-tours-in-cambodia-01.jpg'
import beltei_tour_new_promotion from '../Image/beltei_tour_new_promotion.jpg'
import beltei_tour_travel_promotion from '../Image/beltei_tour&travel_promotion.jpg'
import transportation from '../Image/transportation.png'
import beltei_tour_travels_01 from '../Image/beltei-tour-travels-01.jpg'

function UseButton() {
  return (
    <div class="container text-success">
        <img className="d-block w-100" src={welcome_to_beltei_tour_Homepage} />
        <div class="container">
        <div class="row">
            <div class="col">
            <a href="https://belteigroup.com.kh/index2.htm" ><img className="d-block w-100" src={tour_facebook} /></a>
            </div>
            <div class="col">
            <a href="https://belteigroup.com.kh/index2.htm" ><img className="d-block w-100" src={beltei_youtube} /></a>
            </div>
        </div>
        </div>
        <div class="row mt-4 " id="row_Mt" >
           
            <p >ដំណើរទស្សនកិច្ចចុងសប្តាហ៍របស់ ថ្នាក់ដឹកនាំ ប៊ែលធី គ្រុប</p>
            <p >ទៅកាន់ខេត្តព្រះសីហនុ ធ្វើដំណើរតាមផ្លូវល្បឿនលឿន</p>
            <p >ថ្ងៃ​ទី០២ ខែតុលា ឆ្នាំ​២០២២​​</p>
        </div>
        <div class="row mt-3">
            <div class="col">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className="d-block w-100" src={beltei_tour_travels} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block w-100" src={beltei_tours_in_cambodia} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block w-100" src={beltei_tours_in_cambodia1} />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col">
                <a href="https://belteigroup.com.kh/index2.htm" ><img className="d-block w-100" src={beltei_tour_new_promotion} /></a>
            </div>
        </div>
        <br/>
        <div class="row ">
            <div class="col">
                <a href="https://belteigroup.com.kh/index2.htm" ><img className="d-block w-100" src={beltei_tour_travel_promotion} /></a>
            </div>
        </div>
        <div class="row ">
            <div class="col">
                <img className="d-block w-100" src={transportation} />
            </div>
        </div>
        <div class="row">
            <div class="col">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className="d-block w-100" src={beltei_tour_travels_01} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block w-100" src={beltei_tours_in_cambodia} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block w-100" src={beltei_tours_in_cambodia1} />
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
    
  );
}

export default UseButton;