'use strict';
/* You're writing code to control your town's traffic lights.
You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing
the current state of the light and returns a string representing the state
the light should change to. For example, update_light('green') should return 'yellow'.
 */


let color = prompt('Put a current color of traffic lights', 'yellow');

function updateLight(color) {
   switch (color) {
      case 'red':
         color = 'yellow';
         alert('Now it\'s ' + color);
         break;

      case 'yellow':
         color = 'green';
         alert('Now it\'s ' + color);
         break;

      case 'green':
         color = 'yellow';
         alert('Now it\'s ' + color);
         break;
      default:
         alert('Hmmm. The traffic light doesn\'t have that color');
         break;
   }
}

updateLight(color);