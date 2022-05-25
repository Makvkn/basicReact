import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({state}) => {

    return (
        <ul>
            {state.map(item => <PostItem post={item} key={item.id}/>)}
        </ul>
    );
};

export default PostList;
