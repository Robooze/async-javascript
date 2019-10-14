const posts = [
    {title: "Post One", body: "This is the first post"},
    {title: "Post Two", body: "This is the second post"}
];

// waiting 1 second
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// waiting 2.5 seconds
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong in creating a post');
            }
        },2500)
    });
}

// "A Promise is made..."
//
// createPost({ title: "Post Three", body: "This is the third post" })
//     .then(getPosts)  // if the result of createPost promise is resolve THEN do this.
//     .catch(err => console.log(err));  // if the result of createPost promise is reject, print the reject error defined above

// Promise.all
const promise1 = Promise.resolve("I'm promise 1");
const promise2 = "I'm promise 2";
const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, "Goodbye"));
// fetch API returns a promise
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json() );

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

console.log("I'm coded after a Promise. Let's see if we work asynchronously!");
