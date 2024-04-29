document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.getElementById("comments-container");
    const commentForm = document.getElementById("comment-form");
    let commentId = 1;

    // Load comments from local storage when the page loads
    loadComments();

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach(comment => {
            displayComment(comment);
            commentId = Math.max(comment.id, commentId) + 1; // Ensure the next comment id is unique
        });
    }

    function saveComments(comments) {
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function addComment(commentText) {
        if (commentText.trim() !== "") {
            const comment = { id: commentId, text: commentText };
            displayComment(comment);

            // Save the comment to local storage
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.push(comment);
            saveComments(comments);

            commentId++;
        }
    }

    function displayComment(comment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.id = "comment" + comment.id;
        commentDiv.innerHTML = `<p>${comment.text}</p>`;
        commentsContainer.appendChild(commentDiv);
    }

    // Event listener for submitting the comment form
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const commentText = commentForm.querySelector("#comment").value;
        addComment(commentText);
        commentForm.reset(); // Clear the form after adding the comment
    });
});
