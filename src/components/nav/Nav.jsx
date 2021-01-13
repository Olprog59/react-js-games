import React from "react";
import {Link} from "react-router-dom";
import './nav.css';

export const Nav = () => {

    return (
      <nav>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/rating'>Les mieux notés</Link></li>
          </ul>
      </nav>
    );
}
