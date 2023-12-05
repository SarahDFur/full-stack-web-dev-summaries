// Factory Function
// if we return an object ==> factory
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// Constructor Function
// if we use "this."[something] ==> constructor
function Circle(raduis) {
    this.radius = raduis;
    this.draw = () => {
        console.log('draw');
    };
}

const another = new Circle(1);

// factory vs. constructor: whatever you want. should know both.


/*  Object literals:
        - in js we don't typically use constructors for everything.
        we'll use shortcuts / object literals instead of constructors.
        - eg:
            let x = {};
            // let x = new Object();

            //Object literals:
            new String(); // '', "", ``
            new Boolean(); // true, false
            new Number(); // 1, ....
    Functions and Objects:
        - new Function('[variables recieved by the function]', `[code to exicute]`);
        - [Constructor name].call({}, value) <==> const another = new [Constructor name]
        - .call({}, [val]) === .call(window, [val])
        - .call({}, val1, val2, ...) === .apply({}, [val1, val2, ...])
    Value vs. Reference Types:
        - Value / Primitives:
            - Number
            - String
            - Boolean
            - Symbol    -->    ES6
            - udefined
            - null
        - Reference:
            - Object
            - Function
            - Array
        
        - Primitives are copied by their VALUE
          Objects are copied by their REFERENCE
        
        - eg:
            - value: prints 10 
                let number = 10;

                function increase(number) {
                    number++;
                }

                increase(number);
                console.log(number);
            - reference: prints 11
                let obj = {value: 10};

                function increase(obj) {
                    obj.value++;
                }

                increase(obj);
                console.log(obj);
*/
