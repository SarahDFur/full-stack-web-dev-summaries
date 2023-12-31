// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} wad written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} was written by ${years} years old`;
    }
}

// Create the object:
// option 1:
const book1 = Object.create(bookProtos);
book1.title = 'Book 1';
book1.author = 'John Doe';
book1.year = '2013';
// option 2:
const book1 = Object.create(bookProtos, {
    title :{value:'Book One'},
    author: {value: 'John Doe'},
    year: {value: '2013'}
});
