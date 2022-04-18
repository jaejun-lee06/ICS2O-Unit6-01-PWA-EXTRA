// Created by: Jaejun Lee
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-PWA-EXTRA/sw.js", {
    scope: "/ICS2O-Unit6-01-PWA-EXTRA/",
  })
}

/**
 * This function calculates volume of a sphere.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius-of-sphere').value)

  // process
  const volume = (4 / 3) * Math.PI * radius * radius * radius


  // output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³'
}
