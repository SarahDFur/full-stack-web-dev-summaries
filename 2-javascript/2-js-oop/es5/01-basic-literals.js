/*
    window - object
    (window.)navigatior.appVersion - property
*/

//primitive:
// const s1 = 'hello';

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} wad written by ${this.author} in ${this.year}`
    }
};

const book2 = {
    title: 'Book Two',
    author: 'John Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} wad written by ${this.author} in ${this.year}`
    }
};

// console.log(Object.values(book2));

// we have the same function in both books. 
// the way to solve the recursion: constructors.