// Import Node.js file system module if working in Node.js environment
const fs = require('fs');

// Function to load comments from JSON file
function loadCommentsFromFile() {
    try {
        const data = fs.readFileSync('comments.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading comments file:', err);
        return [];
    }
}

// Function to save comments to JSON file
function saveCommentsToFile(comments) {
    try {
        fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
    } catch (err) {
        console.error('Error writing comments file:', err);
    }
}

// Initialize comments array
let comments = loadCommentsFromFile();

// Function to add a new comment
function addComment() {
    const commentText = document.getElementById("comment").value.trim();

    if (commentText !== "") {
        const commentId = comments.length + 1;
        const newComment = { id: commentId, text: commentText };
        comments.push(newComment);

        // Save comments to file
        saveCommentsToFile(comments);

        // Display the new comment
        displayComment(newComment);

        // Reset the comment form
        document.getElementById("comment").value = "";
    }
}

// Function to display comments on page load
document.addEventListener("DOMContentLoaded", function () {
    comments.forEach(comment => {
        displayComment(comment);
    });
});

// Other existing JavaScript code...

// Function to display a comment
function displayComment(comment) {
    const commentsContainer = document.getElementById("comments-container");
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.id = "comment" + comment.id;

    commentDiv.innerHTML = `
        <p>${comment.text}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <button class="reply-btn">Reply</button>
        <div id="reply-container${comment.id}" class="reply-container"></div>
    `;

    commentsContainer.appendChild(commentDiv);

    // Attach event listeners to the edit and delete buttons
    const editButtons = commentDiv.querySelectorAll(".edit-btn");
    const deleteButtons = commentDiv.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
        button.addEventListener("click", () => editComment(comment.id, comment.text));
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => deleteComment(comment.id));
    });
}

// Function to edit a comment
function editComment(id, currentText) {
    const newText = prompt("Edit your comment:", currentText);

    if (newText !== null) {
        const comment = comments.find(comment => comment.id === id);

        if (comment) {
            comment.text = newText;
            saveCommentsToFile(comments);

            const commentDiv = document.getElementById("comment" + id);
            commentDiv.querySelector("p").innerText = newText;
        }
    }
}

// Function to delete a comment
function deleteComment(id) {
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments.splice(index, 1);
        saveCommentsToFile(comments);

        const commentDiv = document.getElementById("comment" + id);
        commentDiv.remove();
    }
}

// Function to reply to a comment
function replyToComment(id) {
    const replyContainer = document.getElementById("reply-container" + id);
    const replyText = prompt("Type your reply:");

    if (replyText !== null) {
        const replyDiv = document.createElement("div");
        replyDiv.innerHTML = `<p><em>Reply:</em> ${replyText}</p>`;
        replyContainer.appendChild(replyDiv);
    }
}

// Function to handle adding a comment
document.getElementById("addComment-btn").addEventListener("click", addComment);
 
