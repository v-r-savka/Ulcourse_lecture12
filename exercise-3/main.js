'use strict';

/* You are given the length and width of a 4-sided polygon. 
The polygon can either be a rectangle or a square. 
If it is a square, return its area. 
If it is a rectangle, return its perimeter.
*/

let width = +prompt('Please, enter a width of a polygon', 9);
let length = +prompt('Please, enter a length of a polygon', 10);

function checkPolygon(width, length) {
   if (width <= 0 || length <= 0) {
      alert('Such strange value');
   } else if (width === length) {
      let area = width * length;
      alert('It\' a square. His area is ' + area);
   } else {
      let perimeter = (width + length) * 2;
      alert('It\'s a rectangle. His perimetr is ' + perimeter);
   }
}

checkPolygon(width, length);