// Constructor
function Book(title, author, year) {
    this.title = title; 
    this.author = author;   
    this.year = year;
}

//getSummary
Book.prototype.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}`
};

// create a magazine that inherites the properties of the book:
// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author,year);
    this.month = month;  //private property
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag 1', 'John Doe', '2018', 'Jan');

console.log(mag1.getSummary());
console.log(mag1); // ==> still uses the Book constructor for the inherited property 

// to change that, we need to:
// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);