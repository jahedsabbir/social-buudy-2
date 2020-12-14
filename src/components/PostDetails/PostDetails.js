import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import { useParams } from '@reach/router';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    },[])
    
    const detailStyle ={
        width:'500px',
        height:'auto',
        margin:'0 auto',
        padding:'30px',
        boxShadow:'5px 5px 10px gray',
        fontSize:'20px'
    }
    return (
        <div style={detailStyle}>
            <h1>Details</h1>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Comments comment={comment}></Comments>
        </div>
    );
};

export default PostDetails;