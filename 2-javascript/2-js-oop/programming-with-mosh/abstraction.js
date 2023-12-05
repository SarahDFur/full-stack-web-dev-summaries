// show only what's necessary 
// HIDE details, EXPOSE essentials!!
function Circle1(raduis) {
    this.radius = raduis;
    this.defaultLocation = {x:0,y:0};
    this.computeOptimumLocation = () => {
        // ...
    };
    
    this.draw = () => {
        this. computeOptimumLocation();
        console.log('draw');
    };
}

const circle1 = new Circle1(10);
circle1.computeOptimumLocation();
circle1.draw();

// Private Properties and Methods:
function Circle2(raduis) {
    this.radius = raduis;

    // private member of the Cicle Object:
    let defaultLocation = { x : 0, y : 0 }; // is now private. Only Circle() can access
    // private member of the Cicle Object:
    let computeOptimumLocation = (factor) => { // is now private. Only Circle() can access
        // ...
    };
    
    this.draw = () => {
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle2 = new Circle2(10);
// circle.computeOptimumLocation();
circle2.draw(); // only this exists

// Getters / Setters:
function Circle3(raduis) {
    this.radius = raduis;

    // private member of the Cicle Object:
    let defaultLocation = { x : 0, y : 0 }; // is now private. Only Circle() can access
    // getter for 'defaultLocation':
    // option 1:
    this.getDefaultLocation = function(){
        return defaultLocation;
    };
   // option 2:
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
    this.draw = () => {
        computeOptimumLocation(0.1);
        console.log('draw');
    };

 
}

const circle3 = new Circle3(10);
circle3.getDefaultLocation; // how to get
circle3.draw(); // only this exists