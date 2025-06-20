// src/pages/Page1.js // ✅
import React from 'react';
import GlassCard from '../components/GlassCard';


function Page1() {
  return (
    <div className="page-container">
      <GlassCard>
        <h1>Page Un</h1>
        <p>Contenu de la première page.</p>
      </GlassCard>
    </div>
  );
}

export default Page1;