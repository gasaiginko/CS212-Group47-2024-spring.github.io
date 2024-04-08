document.addEventListener("DOMContentLoaded", function () {
    const addCommentBtn = document.getElementById("add-comment-btn");
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments-container");
    let commentId = 1;

    addCommentBtn.addEventListener("click", addComment);

    function addComment() {
        const commentText = document.getElementById("comment").value.trim();

        if (commentText !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.id = "comment" + commentId;

            commentDiv.innerHTML = `
                <p>${commentText}</p>
                <button onclick="editComment(${commentId})">Edit</button>
                <button onclick="deleteComment(${commentId})">Delete</button>
                <button onclick="replyToComment(${commentId})">Reply</button>
                <div id="reply-container${commentId}" class="reply-container"></div>
            `;

            commentsContainer.appendChild(commentDiv);
            commentForm.reset();
            commentId++;
        }
    }

    function editComment(id) {
        const commentDiv = document.getElementById("comment" + id);
        const newCommentText = prompt("Edit your comment:", commentDiv.querySelector("p").innerText);
        
        if (newCommentText !== null) {
            commentDiv.querySelector("p").innerText = newCommentText;
        }
    }

    function deleteComment(id) {
        const commentDiv = document.getElementById("comment" + id);
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
});

