import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const testpackage = () => {
  return (

      <ul className="right">
          <li>
              <NavLink to='/signin'>Sign In </NavLink>
          </li>
          <li>
              <NavLink to='/signup'>Sign up  </NavLink>
          </li>

</ul>
  )
}
export default testpackage;