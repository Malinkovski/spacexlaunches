import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from '@/utilities/types';

const MenuItem = ({ href, onClick, children }: MenuItemProps) => {
  return (
    <Link href={href} onClick={onClick} className="link">
      {children}
    </Link>
  );
};

export default MenuItem;