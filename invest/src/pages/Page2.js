// src/pages/Page2.js
import React from 'react';
import GlassCard from '../components/GlassCard';

function Page2() {
  return (
    <div className="page-container">
      <GlassCard>
        <h1>Page Deux</h1>
        <p>Contenu de la deuxième page.</p>
      </GlassCard>
    </div>
  );
}

export default Page2;