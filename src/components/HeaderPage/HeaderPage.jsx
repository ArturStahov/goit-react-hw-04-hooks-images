import React from 'react';
import { Header } from './StyledComponent';

export default function HeaderPage({ children }) {
  return (
    <Header id="page-header">
      <nav>{children}</nav>
    </Header>
  );
}
