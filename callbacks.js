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
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2500);
}

createPost({ title: "Post Three", body: "This is the third post" }, getPosts);
