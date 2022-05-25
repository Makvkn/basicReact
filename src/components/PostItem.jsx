import React from 'react';

const PostItem = ({post}) => {
    return (
        <li className="todo" >
            <h5>{post.title}</h5>
            <label>
                <input type="checkbox" />

                    <span>{post.description}</span>
                    <i className="material-icons red-text">delete</i>
            </label>
        </li>
    );
};

export default PostItem;



