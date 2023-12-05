// Constructor
function Book(title, author, year) {
    this.title = title; 
    this.author = author;   
    this.year = year;
}

//getSummary
Book.prototype.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'John Doe', '2016');
console.log(book2.getSummary());
console.log(book2); // ==> doesn't have "getSummary" in the object as a prototype
// it is now stored inside the "__proto__"


// getAge
Book.prototype.getAge = () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was written by ${years} years old`;
};

// Revise / Change year
Book.prototype.revise = newYear => {
    this.year = newYear;
    this.revised = true;
};

console.log(book2);
book2.revise('2018');
console.log(book2);

