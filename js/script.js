// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
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
