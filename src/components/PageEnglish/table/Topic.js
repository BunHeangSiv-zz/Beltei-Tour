// Navigation.js
import React, { useState } from 'react';
import image from '../Image/index';
import '../right.css';

const Navigation = ({ onMenuItemClick }) => {
  const menuItems = [
    {name: 'A-About Beltei Tour'},
    { name: 'Message From Director'},
    { name: 'Purpose'},
    { name: 'Vision Mission and Goals'},
    { name: 'History'},
    { name: 'About Cambodia'},
    { name: 'Breif Information'},
    { name: 'Khmer Ancient Temple Legacy' },
    { name: 'Cambodia Culture & Tradition' },
    { name: 'B-Top Destination in Cambodia' },
    { name: 'Sihanouk Province' },
    { name: 'Siem Reap Provice' },
    { name: 'Kompot Province' },
    { name: 'Mundolkiri Provice' },
    { name: 'Ratanakiri Provice' },
    { name: 'Kratie Provice' },
    { name: 'C-3Main Program' },
    { name: 'Domestic Tour' },
    { name: 'Cambodian' },
    { name: 'Expatriate' },
    { name: 'Inbound Tour' },
    { name: 'Outbound Tour' },
    { name: 'C-Recognition' },
    { name: 'Local Recognition' },
    { name: 'International Recognition' },
    { name: 'D-Our services' },
    { name: 'Hotel Reservation' },
    { name: 'Visa Passport' },
    { name: 'World Wide Air Ticket'  },
    { name: 'Cruise Travel' },
    { name: 'Adventure and MICE' },
    { name: 'E-Booklet Download' },
    { name: 'F-Location Map' },
    { name: 'BELTEI TOUR Location' },
    { name: 'G-News and Events' },
    { name: 'Specail Event' },
    { name: 'Other Declaration' },
    { name: 'H-Job Announcement' },
    { name: 'For Staff' },
    { name: 'For Full Time Tour Leader' },
    { name: 'For Freelance Guide' },
    { name: 'International Collaborations' },
    { name: 'Click Logo below to see partners', link: '/savari' },
    { name: 'THAI', link: '/bat' },
    { name: 'swan', link: '/swan' },
    { name: 'vietnam', link: '/vietnam' },
    { name: 'royal', link: '/royal' },
    { name: 'v', link: '/v' },
    { name: 'sia', link: '/sia' },
    { name: 'lao', link: '/lao' },
    { name: 'golden', link: 'https://belteiit.com/charity/about/goals' },
    { name: 'world', link: '/world' },
    { name: 'sl', link: '/sl' },
    { name: 'downbooklet', link: '/downbooklet' },
    { name: 'publish', link: '/publish' },
    { name: 'build', link: '/build' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
    onMenuItemClick(item);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropbtn rounded-sm px-1 py-1 my-2">
      <img
          src={image.menu}
          alt="Banner"
          width={20}
          />
      </button>
      <div className="dropdown-content bg-gray-100 " style={{ width:'350px' }}>
        {menuItems.map((menuItem) => (
          <a
            key={menuItem.name}
            href={menuItem.link}
            onClick={() => handleMenuItemClick(menuItem.name)}
            className="menu-item"
          >
            {menuItem.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
