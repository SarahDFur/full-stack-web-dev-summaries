// promise.all()
// working with a server (hypothetically)

/* Promises:
    function createPost(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);

                const error = false;

                if (!error) {
                    resolve();
                } else {
                    reject('Error: Something went wrong');
                }
            }, 2000);
        });
    }
    - RETURN a new promise!
    - waits until it resolves and can run
    - or throws an error (reject())
*/
const posts = [
    {
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        title: 'Post 2',
        body: 'This is post 2'
    }
];

//returns in 1 second
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//inserts in 2 second
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}
// ------------------------------------------------------------

// ------------------------------------------------------------
createPost({
    title: 'Post 3',
    body: 'This is post 3'
}).then(getPosts)
  .catch(err => console.log(err));

// Async / Await - a more elegent way to use promises
async function init() {
    createPost({
        title: 'Post 3',
        body: 'This is post 3'
    });

    getPosts();
}

init();
// Async / Await / Fetch - cleaner than regular promises and callbacks
async function fetchUsers() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}
// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()); // need the json transfer

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
