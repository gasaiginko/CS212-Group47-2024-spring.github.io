const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000; // Choose an available port

const commentsFile = 'comments.json';

// Function to generate unique IDs (replace with a more robust solution)
function generateUniqueId() {
  return Math.floor(Math.random() * 1000000); // Replace with a more reliable ID generation method
}

app.get('/comments', (req, res) => {
  try {
    const data = fs.readFileSync(commentsFile, 'utf8');
    const comments = JSON.parse(data);
    res.json(comments);
  } catch (err) {
    console.error('Error reading comments file:', err);
    res.status(500).send('Failed to load comments');
  }
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = generateUniqueId(); // Assign a unique ID to the new comment
  try {
    const data = fs.readFileSync(commentsFile, 'utf8');
    const comments = JSON.parse(data);
    comments.push(newComment);
    fs.writeFileSync(commentsFile, JSON.stringify(comments));
    res.json({ message: 'Comment added successfully' });
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).send('Failed to add comment');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

