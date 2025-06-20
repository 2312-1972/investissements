// src/components/GlassCard.js
import React from 'react';

function GlassCard({ children, className }) {
  return (
    <div className={`glass-card ${className || ''}`}>
      {children}
    </div>
  );
}

export default GlassCard;