// working with a server (hypothetically)

/* Callbacks:
    function createPost(post, callback) {
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    } 
    - we will run the callback function at the end of the timeout to fix any time lags 
      because of time variations.
    - waits until the timer is done before displaying any changes 
        ==> waits the longer time before updating.
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
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({
    title: 'Post 3',
    body: 'This is post 3'
}, getPosts);