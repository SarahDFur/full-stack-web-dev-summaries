/**
 * Adding / Removing Properties:
 *  - when to use [] notation?
 *      1. dynamic coding
 *      2. property names that aren't valid identifiers, such as: "my-name"
 * Enumerating Properties:
 *  - use: (eg.)
 *      const circle = new Circle(10);
 *      for (let key in circle) {
 *          console.log(key);
 *      }
 *      ==> prints out both "radius" and "draw"
 *          (both values and objects)
 *  - to get also the methods:
 *      const circle = new Circle(10);
 *      for (let key in circle) {
 *          console.log(key, circle[key]);
 *      }
 *  - only properties: use typeof
 *      - if (typeof circle[key] !== 'function')
 *            console.log(key, circle[key]);
 *  - Array of all properties:
 *      const keys = Object.keys(circle);
 *      console.log(keys);
 *  - We want to know if an object has a specific property: use "in" operator:
 *      if('radius' in circle)
 *          console.log('Circle has a radius.');
 */

function Circle(raduis) {
    this.radius = raduis;
    this.draw = () => {
        console.log('draw');
    };
}

const another = new Circle(10);

// user.token 
circle.location = { x: 1 };
//circle['location'] = { x: 1 }; // useful for dynamic coding

const propertyName = 'location';
circle[propertyName] = { x: 1 }; // useful for dynamic coding


// deleting data dynamically:
delete circle.location; 
delete circle['location']; 