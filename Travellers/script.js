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
        commentDiv.innerHTML = `
            <p>${comment.text}</p>
            <button class="edit-btn" data-id="${comment.id}">Edit</button>
            <button class="delete-btn" data-id="${comment.id}">Delete</button>
        `;
        commentsContainer.appendChild(commentDiv);

        // Add event listeners for edit and delete buttons
        const editBtn = commentDiv.querySelector('.edit-btn');
        editBtn.addEventListener('click', function() {
            editComment(comment.id);
        });

        const deleteBtn = commentDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            deleteComment(comment.id);
        });
    }

    function editComment(commentId) {
        const commentDiv = document.getElementById("comment" + commentId);
        const newText = prompt("Edit your comment:", commentDiv.querySelector('p').textContent);
        if (newText !== null) {
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            const commentIndex = comments.findIndex(comment => comment.id === commentId);
            if (commentIndex !== -1) {
                comments[commentIndex].text = newText;
                saveComments(comments);
                commentDiv.querySelector('p').textContent = newText;
            }
        }
    }

    function deleteComment(commentId) {
        const commentDiv = document.getElementById("comment" + commentId);
        const confirmDelete = confirm("Are you sure you want to delete this comment?");
        if (confirmDelete) {
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            const updatedComments = comments.filter(comment => comment.id !== commentId);
            saveComments(updatedComments);
            commentDiv.remove();
        }
    }

    // Event listener for submitting the comment form
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const commentText = commentForm.querySelector("#comment").value;
        addComment(commentText);
        commentForm.reset(); // Clear the form after adding the comment
    });
});
