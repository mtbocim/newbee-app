import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

interface HeaderProps {
  pageName: string;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  return (
    <header style={{ display: 'flex', alignItems: 'left', marginBottom: '20px'}}>
      {/* Logo Image */}
      <Image src="/NewBee_bee.png" alt="Logo" width={40} height={40} />

      {/* Page Name */}
      <Typography
        variant="h4"
        style={{
          marginLeft: '20px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: '#bab6b6'
        }}>
        {pageName}
      </Typography>
    </header>
  );
};

export default Header;
