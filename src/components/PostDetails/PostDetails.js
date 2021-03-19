import React from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
    return (
        <div className='post_details'>
            <h1>Post details {props.match.params.id}</h1>
        </div>
        
    );
};

export default PostDetails;