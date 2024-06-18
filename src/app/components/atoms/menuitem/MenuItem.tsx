import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, onClick, children }) => {
  return (
    <Link href={href} onClick={onClick} className="link">
      {children}
    </Link>
  );
};

export default MenuItem;