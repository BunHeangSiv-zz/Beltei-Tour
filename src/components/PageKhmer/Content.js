// Content.js
import React from 'react';
import './styles.css'
import Homepage from './home/Homepage';
import Message from './home/Message';
import Purpose from './home/Purposes';
import Visions from './home/Visions';
import History from './home/History';
import HotelReservation from './home/HotelReservation';
import Rothanakiri from './home/Rotanakiri';
import Sihanu from './home/Sihanu';
import SiemReap from './home/SeimReab';
import Kompot from './home/Kompot';
import Mundolkiri from './home/Mundolkiri';
import Kratie from './home/Kratie';
import Brieft from './home/Brieft';
import Khmer from './home/Khmer';
import CambodiaCulture from './home/CambodiaCulture';
import Cambodian from './home/Cambodian';
import Expatriate from './home/Expatriate';
import Outbound_Tour from './home/Outbound_Tour';
import Viapassport from './home/Viapassport';
import Cruise from './home/CruiseTravel';
import Adventure from './home/AdventureandMICE';
import Inbound from './home/Inbound_Tour';
import Local from './home/Local_recognition';
import Inter from './home/International_recognition';
import Worldwide from './home/WorldWideAirTicket';
import Staff from './home/For_staff';
import Freelance from './home/For_frelace';
import Fulltime from './home/For_full_time';
import Booklet from './home/Beltei_tour_booklet';
import Specail from './home/Special_Event';
import Declar from './home/Other_Declaration';
import BelLocation from './home/BELTEITourLocation';
import AsiaTrip from './home/AsiaTrip';
import Link from './home/LinkP';





const Content = ({ selectedMenuItem }) => {
  const getContent = () => {
    
    switch (selectedMenuItem) {
      case 'Message From Director':
        return <Message />;
      case 'Purpose':
        return <Purpose />;
      case 'Vision Mission and Goals':
        return <Visions />;
      case 'History':
        return <History />;
      case 'Breif Information':
        return <Brieft />;
      case 'Khmer Ancient Temple Legacy':
        return <Khmer />;
      case 'Cambodia Culture & Tradition':
        return <Link/>;
      case 'Sihanouk Province':
        return <Sihanu />;
      case 'Siem Reap Provice':
        return <SiemReap />;
      case 'Kompot Province':
        return <Kompot />;
      case 'Mundolkiri Provice':
        return <Mundolkiri />;
      case 'Ratanakiri Provice':
        return <Rothanakiri />;
      case 'Kratie Provice':
        return <Kratie />;
      case 'Main Program':
        return ;
      case 'Domestic Tour':
        return ;
      case 'Cambodian':
        return <Cambodian /> ;
      case 'Expatriate':
        return <Expatriate/>;
      case 'Inbound Tour':
        return <Inbound />;
      case 'Outbound Tour':
        return <Outbound_Tour />;
      case 'Recognition':
        return ;
      case 'Local Recognition':
        return <Local/>;
      case 'International Recognition':
        return <Inter />;
      case 'Our services':
        return ;
      case 'Hotel Reservation':
        return <HotelReservation />;
      case 'Visa Passport':
        return <Viapassport />;
      case 'World Wide Air Ticket':
        return <Worldwide />;
      case 'Cruise Travel':
        return <Cruise />;
      case 'Adventure and MICE':
        return <Adventure />;
      case 'Booklet Download':
        return <Booklet />;
      case 'Location Map':
        return ;
      case 'BELTEI TOUR Location':
        return <BelLocation />;
      case 'News and Events':
        return ;
      case 'Specail Event':
        return <Specail />;
      case 'Other Declaration':
        return <Declar />;
      case 'Job Announcement':
        return ;
      case 'For Staff':
        return <Staff />;
      case 'For Full Time Tour Leader':
        return <Fulltime />;
      case 'For Freelance Guide':
        return <Freelance />;
      case 'International Collaborations':
        return ;
      case 'Click Logo below to see partners':
        return ;
      case 'THAI':
        return ;
      case 'savari':
        return ;
      case 'bat':
        return ;
      case 'swan':
        return ;
      case 'vietnam':
        return ;
      case 'royal':
        return ;
      case 'v':
        return ;
      case 'sia':
        return ;
      case 'lao':
        return ;
      case 'golden':
        return ;
      case 'world':
        return ;
      case 'sl':
        return ;
      case 'downbooklet':
        return ;
      case 'publish':
        return <AsiaTrip />;
      case 'build':
        return <Message />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div class="">
        {getContent()}
    </div>
  );
};

export default Content;
