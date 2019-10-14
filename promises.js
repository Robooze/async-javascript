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

            const error = true;

            if (!error) {
                resolve("Worked!");
            } else {
                reject('Error: something went wrong in creating a post');
            }
        },2500)
    });
}

createPost({ title: "Post Three", body: "This is the third post" })
    .then(getPosts)  // if the result of createPost promise is resolve THEN do this.
    .catch(err => console.log(err));  // if the result of createPost promise is reject, print the reject error defined above

console.log("I'm coded after a Promise. Let's see if we work asynchronously!");
