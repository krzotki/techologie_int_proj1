import React from "react";

import axios from 'axios';

import Post from '../../components/Post/Post';

import './Posts.css';

class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            console.log(response);
            this.setState({
                posts: response.data
            });
        });
    }

    render() {

        const postsToRender = this.state.posts.map(post => <Post key={post.id} title={post.title}> {post.body} </Post>);

        return(
            <div className='posts'>
                {postsToRender}
            </div>
        );
    }
}

export default Posts;