import React, { useState } from "react";
import { Link } from 'react-router-dom';
import image from "./Images/index";
import Menu from "./table/SidebarLeft";
import SidebarRight from "./table/SidebarRight";
import Content from "./Content";
import Footer from './table/Footer';
import Topic from "./table/Topic";
import "./styles.css";
import "./smallscreen.css";

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Initial state

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleSelectMenuItem = (item) => {
    setSelectedMenuItem(item);
  };

  const dynamicMenuItems = [];

  return (
    <div className="container mt-5 mb-5 bg-white" style={{ width:"970px" }}>
      <div className="row">
      <div class="col-lg-12 topic text-end">
        <Link to="/">Switch to:
        <img
          className="ml-2"
          style={{ float: 'right' }}
          src={image.usa}
          alt="Banner"
          width={20}
          />
        </Link>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <img
            className="w-full "
            src={image.banner}
            alt="Banner"
          />
        </div>
      </div>
      <div class="topic">
        <Topic onMenuItemClick={handleMenuItemClick} />
      </div>
      <div className="row pt-1">
        <div className="gridy grid-cols-6 gap-2 border">
          <div className="col-span-1 sidebar-left">
            <Menu
              menuItems={dynamicMenuItems}
              onSelectMenuItem={handleSelectMenuItem}
            />
          </div>

          <div className="col-span-4 bg-white pt-3 content">
            <Content selectedMenuItem={selectedMenuItem} />
          </div>

          <div
            className="col-span-1 sidebar-left"
            style={{ background: "#dfe9ce" }}
          >
            <SidebarRight
              menuItems={dynamicMenuItems}
              onSelectMenuItem={handleSelectMenuItem}
            />
          </div>
        </div>
        <div className="col-lg-12">
            <Footer />
          </div>
      </div>
    </div>
  );
};

export default App;
