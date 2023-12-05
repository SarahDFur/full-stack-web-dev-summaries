class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} wad written by ${this.author} in ${this.year}`;
    }
    
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} was written by ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // Static method:
    // no need to instantiate
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate Object
const book1 = new Book('Book 1', 'John Doe', '2013');

console.log(book1); // ==> easier to write & does the same thing we did before in Proto

book1.topBookStore(); // can't run it ==> does not exist
Book.topBookStore(); // ==> returns the answer