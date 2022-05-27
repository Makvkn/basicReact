import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({state, ...props}) => {

    if (!state.length) {
        return (
            <h3>Add Post, please</h3>
        )
    }

    return (
        <ul>
            {state.map(item => <PostItem removePost={props.removePost} post={item} key={item.id}/>)}
        </ul>
    );
};

export default PostList;
