import React from 'react';
import './Post.css';
import 'font-awesome/css/font-awesome.min.css';

const Post = (props) => {
    console.log(props)
    return (
        <div className='post_item'>
            <div className='header'>
                <h3>{props.title}</h3>
            </div>

            <div className='body'>
                {props.children}
            </div>

            <hr/>

            <div className='footer'>
                <button className='like'><i className="fa fa-thumbs-up"></i></button>
                <button className='comments' onClick={() => props.clicked()}><i className="fa fa-comment"></i></button>
                <button className='share'><i className="fa fa-share-alt"></i></button>

            </div>
        </div>
    );
};

export default Post;