// Constructor
function Book(title, author, year) {
    this.title = title; 
    this.author = author;   
    this.year = year;
    this.getSummary = () => {
        return `${this.title} was written by ${this.author} in ${this.year}`
    };
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'John Doe', '2016');

console.log(book2.getSummary());
console.log(book2); // ==> has getSummary as a function 
        //==> here is an example of when to use a prototype