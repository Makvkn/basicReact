import React from 'react';

const PostItem = ({post,...props}) => {


    return (
        <li className="todo" >
            <h5>{post.title}</h5>
            <label>
                <input type="checkbox" />

                    <span >{post.body}</span>
                    <i className="material-icons red-text" onClick={() => props.removePost(post)}>delete</i>
            </label>
        </li>
    );
};

export default PostItem;



