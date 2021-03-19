import React from 'react';
import './Post.css';

const Post = (props) => {
    console.log(props)
    return (
        <div className='post_item' onClick={() => props.clicked()}>
            <div className='header'>
                <h3>{props.title}</h3>
            </div>

            <div className='body'>
                {props.children}
            </div>
        </div>
    );
};

export default Post;