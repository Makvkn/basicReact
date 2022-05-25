import React from 'react';
import MyButton from "./button/MyButton";
import MyInput from "./inputs/MyInput";

const AddPost = (props) => {
    return (
        <div className="input-field" >
            <MyInput state={props} />

        </div>
    );
};

export default AddPost;