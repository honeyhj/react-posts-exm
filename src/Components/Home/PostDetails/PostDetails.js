import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const {postId} = useParams();
/*        UseState For Selected Post          */
    const [allpost,
        setAllPost] = useState([]);
/*        UseEffect For Selected Post          */
    useEffect(() => {
        const allPostLink = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(allPostLink)
            .then(res => res.json())
            .then(data => setAllPost(data))
    }, [])
/*        UseState For Selected Comment          */
    const [comments,
        setComments] = useState([]);
/*        UseEffect For Selected Comment          */
    useEffect(() => {
        const commentsLink = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(commentsLink)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
/*        UseState For Selected Photo          */
    const [photo,setPhoto] = useState([]);
/*        UseEffect For Selected Photo          */
    useEffect(()=>{
        const photolink = `https://jsonplaceholder.typicode.com/photos/${postId}`
        fetch(photolink)
        .then(res=>res.json())
        .then(data =>setPhoto(data))
    },[])


    return (
        <div>
            <div className="post-section">
                <div>
                    <h3><span>Title :</span><br /> {allpost.title}</h3>
                    <p><span>Details :</span> <br />{allpost.body}</p>
                </div>
            </div>
            <div className="comment-section">
                <h2>Read Comments</h2>
                {comments.map(comment => <div className="comment-item">
                    <div className="image">
                    <img src={photo.thumbnailUrl} alt=""/>
                    
                    </div>
                    <h4>Name: {comment.name}</h4>
                    <h6>Email: {comment.email}</h6>
                    <p>{comment.body}</p>
                </div>)
                }
                
            </div>
        </div>
    )
};

export default PostDetails;