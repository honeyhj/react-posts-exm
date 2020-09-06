import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <h1>Page not found</h1>
            <h4>404 ERROR !</h4>
            <Link to="/" className="back">Back To Home</Link>
        </div>
    );
};

export default NotFound;