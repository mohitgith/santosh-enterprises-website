import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul className="nav flex-column nav-pills">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
