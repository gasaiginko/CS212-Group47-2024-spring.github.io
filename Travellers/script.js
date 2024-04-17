document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.getElementById("comments-container");
    let commentId = 1;

    function addComment() {
        const commentText = document.getElementById("comment").value.trim();

        if (commentText !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.id = "comment" + commentId;

            commentDiv.innerHTML = `
                <p>${commentText}</p>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="reply-btn">Reply</button>
                <div id="reply-container${commentId}" class="reply-container"></div>
            `;

            commentsContainer.appendChild(commentDiv);
            commentForm.reset();
            commentId++;

            // Attach event listeners to the edit and delete buttons
            const editButtons = commentDiv.querySelectorAll(".edit-btn");
            const deleteButtons = commentDiv.querySelectorAll(".delete-btn");

            editButtons.forEach(button => {
                button.addEventListener("click", () => editComment(commentDiv.id));
            });

            deleteButtons.forEach(button => {
                button.addEventListener("click", () => deleteComment(commentDiv.id));
            });
        }
    }

    function editComment(id) {
        const commentDiv = document.getElementById(id);
        const newCommentText = prompt("Edit your comment:", commentDiv.querySelector("p").innerText);
        
        if (newCommentText !== null) {
            commentDiv.querySelector("p").innerText = newCommentText;
        }
    }

    function deleteComment(id) {
        const commentDiv = document.getElementById(id);
        commentDiv.remove();
    }

    function replyToComment(id) {
        const replyContainer = document.getElementById("reply-container" + id);
        const replyText = prompt("Type your reply:");

        if (replyText !== null) {
            const replyDiv = document.createElement("div");
            replyDiv.innerHTML = `<p><em>Reply:</em> ${replyText}</p>`;
            replyContainer.appendChild(replyDiv);
        }
    }

    const addCommentBtn = document.getElementById("addComment-btn");
    const commentForm = document.getElementById("comment-form");
    addCommentBtn.addEventListener("click", addComment);
});
