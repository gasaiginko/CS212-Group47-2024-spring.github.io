let commentId = 1;

function addComment() {
    const commentText = document.getElementById("comment").value;

    if (commentText.trim() !== "") {
        const commentContainer = document.getElementById("comments-container");

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

        commentContainer.appendChild(commentDiv);
        document.getElementById("comment-form").reset();
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

