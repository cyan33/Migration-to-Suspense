import React from 'react';
import { Link } from '@reach/router';

function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? 'active' : '',
        }
      }}
    />
  );
}

export default NavLink;
