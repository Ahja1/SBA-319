import mongoose from 'mongoose';
import User from './models/users.mjs';
import Post from './models/posts.mjs';
import Comment from './models/comments.mjs';

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const sampleUsers = [
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
    { username: 'user3', email: 'user3@example.com' }
];

const samplePosts = [
    { title: 'Post 1', content: 'Content of post 1', userId: null },
    { title: 'Post 2', content: 'Content of post 2', userId: null },
    { title: 'Post 3', content: 'Content of post 3', userId: null }
];

const sampleComments = [
    { content: 'Comment 1', postId: null, userId: null },
    { content: 'Comment 2', postId: null, userId: null },
    { content: 'Comment 3', postId: null, userId: null }
];

async function populateDatabase() {
    try {
        await User.insertMany(sampleUsers);
        await Post.insertMany(samplePosts);
        await Comment.insertMany(sampleComments);
        console.log('Database populated with sample data');
    } catch (err) {
        console.error('Error populating database:', err.message);
    } finally {
        mongoose.disconnect();
    }
}

populateDatabase();
