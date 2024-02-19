// Menu.js
import React from "react";
import "../styles.css";
import image3 from "../Image/index";
import about from "../Image/about.png";
import image1 from "../Image/message.png";
import image2 from "../Image/purpose.png";
import "./Menu.css";

const Menu = ({ onSelectMenuItem }) => {
  const nonClickableItems = [
    "About Cambodia",
    "Top Destination in Cambodia",
    "Main Program",
    "Domestic Tour",
    "Recognition",
    "Our services",
    "Location Map",
    "News and Events",
    "Job Announcement",
    "International Collaborations",
    "Click Logo below to see partners",
    "THAI",
    "vietnam",
    "lao",
    "downbooklet",
  ];

  const menuItems = [
    { name: "Message From Director", image: image1 },
    { name: "Purpose", image: image2 },
    { name: "Vision Mission and Goals", image: image3.vision },
    { name: "History", image: image3.history },
    { name: "About Cambodia", image: image3.aboutcam },
    { name: "Breif Information", image: image3.breif },
    { name: "Khmer Ancient Temple Legacy", image: image3.khmerAncient },
    { name: "Cambodia Culture & Tradition", image: image3.camCulture },
    { name: "Top Destination in Cambodia", image: image3.topDestination },
    { name: "Sihanouk Province", image: image3.sihanu },
    { name: "Siem Reap Provice", image: image3.siemreap },
    { name: "Kompot Province", image: image3.kompot },
    { name: "Mundolkiri Provice", image: image3.mundolkiri },
    { name: "Ratanakiri Provice", image: image3.ratanakiri },
    { name: "Kratie Provice", image: image3.kratie },
    { name: "Main Program", image: image3.mainPro },
    { name: "Domestic Tour", image: image3.domestic },
    { name: "Cambodian", image: image3.cambo },
    { name: "Expatriate", image: image3.expatriate },
    { name: "Inbound Tour", image: image3.inbound },
    { name: "Outbound Tour", image: image3.outbound },
    { name: "Recognition", image: image3.recognition },
    { name: "Local Recognition", image: image3.localReco },
    { name: "International Recognition", image: image3.international },
    { name: "Our services", image: image3.ourService },
    { name: "Hotel Reservation", image: image3.hotel },
    { name: "Visa Passport", image: image3.visa },
    { name: "World Wide Air Ticket", image: image3.worldwide },
    { name: "Cruise Travel", image: image3.cruise },
    { name: "Adventure and MICE", image: image3.adventure },
    { name: "Booklet Download", image: image3.booklet },
    { name: "Location Map", image: image3.location },
    { name: "BELTEI TOUR Location", image: image3.belteiTour },
    { name: "News and Events", image: image3.special },
    { name: "Specail Event", image: image3.news },
    { name: "Other Declaration", image: image3.declaration },
    { name: "Job Announcement", image: image3.job },
    { name: "For Staff", image: image3.staff },
    { name: "For Full Time Tour Leader", image: image3.fullTime },
    { name: "For Freelance Guide", image: image3.freelance },
    { name: "International Collaborations", image: image3.interColab },
    { name: "Click Logo below to see partners", image: image3.clickLogo },
    { name: "THAI", image: image3.thai },
  ];

  const menuLast = [{ name: "publish", image: image3.publish }];

  return (
    <div>
      <img src={about} alt="About" style={{ width: "203px" }} />
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.name}
          className={
            nonClickableItems.includes(menuItem.name)
              ? "non-clickable"
              : "clickable"
          }
        >
          {nonClickableItems.includes(menuItem.name) ? (
            <img
              src={menuItem.image}
              alt={menuItem.name}
              style={{ width: "203px" }}
            />
          ) : (
            <a
              href={menuItem.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onSelectMenuItem(menuItem.name);
                // Scroll to the top of the webpage
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // You can use 'auto' or 'smooth' for smooth scrolling
                });
              }}
            >
              <img
                src={menuItem.image}
                alt={menuItem.name}
                style={{ width: "203px" }}
              />
            </a>
          )}
        </div>
      ))}

      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.savari} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="http://www.bestamatatours.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.bat} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="https://companieshouse.co.th/transport-bangkok-cambodia-co-ltd-0105564116002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.swan} alt="about" style={{ width: "203px" }} />
      </a>

      <img src={image3.vietnam} alt="about" style={{ width: "203px" }} />

      <a
        href="https://www.royalbus.in/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.royal} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.v} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.sia} alt="about" style={{ width: "203px" }} />
      </a>
      <img src={image3.lao} alt="about" style={{ width: "203px" }} />
      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.golden} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.world} alt="about" style={{ width: "203px" }} />
      </a>
      <a
        href="https://www.savaritravels.com/hotelthailand2.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3.sl} alt="about" style={{ width: "203px" }} />
      </a>

      <img src={image3.downbooklet} alt="About" style={{ width: "203px" }} />
      {menuLast.map((menuLast) => (
        <div key={menuLast.name}>
          {nonClickableItems.includes(menuLast.name) ? (
            <img
              src={menuLast.image}
              alt={menuLast.name}
              style={{ width: "203px" }}
            />
          ) : (
            <a
              onClick={() => {
                onSelectMenuItem(menuLast.name);
                // Scroll to the top of the webpage
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                src={menuLast.image}
                alt={menuLast.name}
                style={{ width: "203px" }}
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
