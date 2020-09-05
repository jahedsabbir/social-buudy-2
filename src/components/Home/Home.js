import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
         <h1 style={{textAlign:'center'}}>Welcome To Social Buddy</h1>
         {
             post.map(post => <Post post={post}></Post>)
         }
        </div>
    );
};

export default Home;