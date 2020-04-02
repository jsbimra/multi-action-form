

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export default function Custom404() {

  return (
    <>
      <div className="d-flex" style={{ minHeight: '450px', ...styles }}>
        <div className="text-center comp-404">
          <h1 className="mb-4">404 - Page Not Found</h1>
          <Link href="/">Return to Home</Link>
        </div>
      </div>
    </>
  )
}