import React from 'react';

import { LogoLink } from './styles';

const Logo = () => {
  return (
    <>
      <LogoLink to="/home">
        <p>Sport <span>Shop</span></p>
      </LogoLink>
    </>
  );
}

export default Logo;
