import React, { useState, useEffect } from 'react';
import image from '../../images/avatar.jpg'
const Comments = (props) => {
        const comment = props.comment;
        const commentStyle = {
            margin:'10px',
            border:'2px solid gray',
            padding:'30px',
            backgroundColor:'black',
            color:'white',
            borderRadius:'10px',
            display:'flex',
            
        }
        const imgStyle={
            width:'70px',
            borderRadius:'50%',
            marginRight:'10px',
            marginTop:'20px'
        }
    return (
        <div>
            <hr/>
            <h3>Comments</h3>
          {
              comment.map(comment =>
               <div style={commentStyle}>
                   <div>
                   <img style={imgStyle} src={image} alt=""/>
                   </div>
                    <div>
                    <h4>Name : {comment.name}</h4>
                    <h4>Email : {comment.email}</h4>
                    <h5>Comment : "{comment.body}"</h5>
                    </div>
                    
              </div>
              
                )
          }
        </div>
    );
};

export default Comments;