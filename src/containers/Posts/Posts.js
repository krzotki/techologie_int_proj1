import React from "react";

import axios from 'axios';

import Post from '../../components/Post/Post';

import './Posts.css';

class Posts extends React.Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.setState({
                posts: response.data
            });
        });
    }

    handlePostClick(id) {
        
        this.props.history.push({
            pathname: '/post/' + id
        });
    }

    render() {

        const postsToRender = this.state.posts.map(post => {
            return(
                <Post 
                    key={post.id} 
                    title={post.title} 
                    id={post.id}
                    clicked={() => this.handlePostClick(post.id)}
                > {post.body} </Post>
            );
        });

        return(
            <div className='posts'>
                {postsToRender}
            </div>
        );
    }
}

export default Posts;