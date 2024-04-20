import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Categories</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faFolder} className="sidebar-icon" />
          <a href="/category/1" className="sidebar-menu-link">Sports</a>
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faFolder} className="sidebar-icon" />
          <a href="/category/2" className="sidebar-menu-link">Travel</a>
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faFolder} className="sidebar-icon" />
          <a href="/category/3" className="sidebar-menu-link">Street</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
