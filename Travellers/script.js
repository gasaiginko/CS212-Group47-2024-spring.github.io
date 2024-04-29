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
      commentId++;
    });
  }

  function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  function addComment() {
    const commentText = document.getElementById("comment").value.trim();

    if (commentText !== "") {
      const comment = { id: commentId, text: commentText };
      displayComment(comment);

      // Save the comment to local storage
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      comments.push(comment);
      saveComments(comments);

      commentForm.reset();
      commentId++;
    }
  }

  function displayComment(comment) {
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

  function editComment(id, currentText) {
    const newText = prompt("Edit your comment:", currentText);

    if (newText !== null) {
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      const comment = comments.find(comment => comment.id === id);

      if (comment) {
        comment.text = newText;
        saveComments(comments);

        const commentDiv = document.getElementById("comment" + id);
        commentDiv.querySelector("p").innerText = newText;
      }
    }
  }

  function deleteComment(id) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const updatedComments = comments.filter(comment => comment.id !== id);
    saveComments(updatedComments);

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

  const addCommentBtn = document.getElementById("addComment-btn");
  addCommentBtn.addEventListener("click", addComment);
});
