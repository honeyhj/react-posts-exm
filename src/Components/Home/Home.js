import React, {useContext,} from 'react';
import {PostsContext} from '../../App';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Home.css'
const Home = () => {
    const getPosts = useContext(PostsContext);

    return (
        <div className="home">
            <h1>Blog Page</h1>
            <div className="post-container">
            {getPosts.map(getSinglePost => <div className="post-item">
                <h3>Title: {getSinglePost.title}</h3>
                <p>{getSinglePost.body}</p>
                <Button variant="contained" color="primary">
                    <Link to={`/postDetails/${getSinglePost.id}`} className="link">Read More</Link>
                </Button>
            </div>)
            }
            </div>
        </div>
    );
};

export default Home;