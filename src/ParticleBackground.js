import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from './config/particle-config.js';

export default function ParticleBackground() {
  return (
    <Particles
      params={particleConfig}
      style={{ position: 'absolute', inset: '0' }}
    ></Particles>
  );
}
