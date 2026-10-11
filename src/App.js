import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});
acl.start();
  
  let { x, y, z } = acl;
  return (
    <div className="App">
      <header className="App-header">
        Phone Fetch
      </header>
      <body>
      Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
        x: {Math.round(x)} y: {Math.round(y)} z: {Math.round(z)}
      </body>
    </div>
  );
}

export default App;
