// =================================================================

// Intermediate Exercise: fetching multiple related resources.
const fetchUsers = async function (url) {
    const response = await fetch(url);
    const users = await response.json();
    return users;
};

const SERVER = "http://localhost:3000/";

// Write the fetchPostAndComments async function.
const fetchPostAndComments = async function (postId) {
    // First store the users in a constant. You can reuse the fetchUsers function for this
    // or write a generic helper function that fetches something and converts it to JSON.
    const users = await fetchUsers(`${SERVER}users`);

    // Fetch the post.
    const post = await fetchUsers(`${SERVER}posts/${postId}`);

    // Fetch the comments.
    const comments = await fetchUsers(`${SERVER}comments?postId=${postId}`);

    // Find the author of the post.
    const postAuthor = users.find((user) => user.id === post.userId);

    // Log the author's name and the content of the post.
    console.log(postAuthor.name, "-", post.body);

    // Loop over the comments
    for (const comment of comments) {
    
    // For each comment find the author, and log their name, and the comment.
    const commentAuthor = users.find((user) => user.id === comment.userId);
    console.log(commentAuthor.name, "-", comment.comment);
    }
};

// Select the button that is on the page.
const fetchButton = document.querySelector(".fetch-post");
console.log(fetchButton)
// Fetch a specific Post and its comments on clicking the button.
// fetchPostAndComments("892a4ba3")
fetchButton.addEventListener("click", () => fetchPostAndComments("892a4ba3"));


// End of Intermediate Exercise.

// =================================================================

// Advanced Exercise: fire off multiple requests.

// Rewrite the fetchPostAndComments async function.

// First, we should not await any of the fetches.

// Await users and post.

// Log out the post's author and the body.

// Await the comments.

// For each comment find the author, and log their name, and the comment.

// Select the button that is on the page.

// Fetch a specific Post and its comments on clicking the button.

// End of Advanced Exercise.
