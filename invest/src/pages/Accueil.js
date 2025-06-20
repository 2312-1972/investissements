// src/pages/Accueil.js
import React from 'react';
import GlassCard from '../components/GlassCard';

function Accueil() {
  return (
    <div className="page-container">
      <GlassCard>
        <h1>Bienvenue sur l'Accueil</h1>
        <p>Ceci est la page d'accueil de votre application React avec le style glassmorphisme.</p>
        <p>Explorez les différentes pages via la navigation ci-dessus !</p>
      </GlassCard>
    </div>
  );
}

export default Accueil;