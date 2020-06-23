import React  from 'react';
import NavMenu from './NavMenu';

export default function Layout(props) {

    return (
      <div>
        <NavMenu />
        {props.children}
      </div>
    );
}
