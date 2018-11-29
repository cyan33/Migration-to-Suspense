import React from 'react';
import { Link } from '@reach/router';

function NavLink(props) {
  return (
    <Link
      {...props}
      onClick={() => {
        // go back to the top of the page when switching routes
        window.scrollTo(0, 0);
      }}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? 'active' : '',
        }
      }}
    />
  );
}

export default NavLink;
