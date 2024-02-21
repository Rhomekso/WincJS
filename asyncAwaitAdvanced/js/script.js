// =================================================================

// Intermediate Exercise: fetching multiple related resources.
const fetchUsers = async function (url) {
    const response = await fetch(url);
    const users = await response.json();
    return users;
};

// base path in constant
const SERVER = "http://localhost:3000/";

// =================================================================

// Advanced Exercise: fire off multiple requests.

// Rewrite the fetchPostAndComments async function.
const fetchPostAndComments = async function (postId) {
    // First, we should not await any of the fetches.
    const asyncUsers = fetchUsers(`${SERVER}users`);
    const asyncPost = fetchUsers(`${SERVER}posts/${postId}`);
    const asyncComments = fetchUsers(`${SERVER}comments?postId=${postId}`);

    // Await users and post.
    const users = await asyncUsers;
    const post = await asyncPost;

    // Log out the post's author and the body.
    const postAuthor = users.find((user) => user.id === post.userId);
    console.log(postAuthor.name, "-", post.body);

    // Await the comments.
    const comments = await asyncComments;

    // For each comment find the author, and log their name, and the comment.
    for (const comment of comments) {
        console.log(comments)
        const commentAuthor = users.find((user) => user.id === comment.userId);
        console.log(commentAuthor.name, "-", comment.comment);
    }
};

// Select the button that is on the page.
const fetchButton = document.querySelector(".fetch-users");

// Fetch a specific Post and its comments on clicking the button.
fetchButton.addEventListener("click", () => fetchPostAndComments("892a4ba3"));
// End of Advanced Exercise.
