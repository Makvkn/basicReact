import React,{useState} from 'react';
import MyButton from "./button/MyButton";
import MyInput from "./inputs/MyInput";

const AddPost = ({create}) => {

    const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body:''})
    }

    return (
        <div className="input-field" >
            <div className='myInputs '>
                <MyInput type="text" style={'inpOne'} placeholder={'Add post name'} value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
                <MyInput type="text" style={'inpTwo'} placeholder={'Add post content'} value={post.body} onChange={e => setPost({
                    ...post,
                    body: e.target.value
                })}/>
            </div>

            <MyButton onClick={addNewPost} >Add Post</MyButton>

        </div>
    );
};

export default AddPost;