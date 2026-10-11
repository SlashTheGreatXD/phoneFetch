import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  navigator.permissions.query({ name: "accelerometer" }).then((result) => {
  if (result.state === "denied") {
    console.log("Permission to use accelerometer sensor is denied.");
    return;
  }
  // Use the sensor.
});

  
  return (
    <div className="App">
      <header className="App-header">
        Phone Fetch
      </header>
      <body>
      Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
        x: {Math.round(1)} y: {Math.round(1)} z: {Math.round(1)}
      </body>
    </div>
  );
}

export default App;
