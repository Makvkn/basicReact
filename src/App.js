import logo from './logo.svg';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import AddPost from "./components/UI/AddPost";
import {useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/inputs/MyInput";

function App() {

    const [state, setState] = useState([
        {id: 1, title: 'random text', description: 'Add note that userScripts and contentScripts are replaced in MV3'},
        {id: 2, title: 'not random text', description: 'Within a year I had a six-figure job as a Software EngineerV3'},
        {id: 3, title: 'Simple thoughts', description: 'The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level.'}
    ]);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


const addNewPost = (e) => {
        e.preventDefault()
    const newPost = {
            id: Date.now(),
        title,
        description
    }
    console.log(newPost)
    setState([...state, newPost])
}


  return (
    <div className="container">
      <div className="App-header">
          <div className='myInputs '>
              <MyInput type="text" style={'inpOne'} placeholder={'Add post name'} value={title} onChange={e => setTitle(e.target.value)} />
              <MyInput type="text" style={'inpTwo'} placeholder={'Add post content'} value={description} onChange={e => setDescription(e.target.value)}/>
          </div>

          <MyButton onClick={addNewPost} >Add Post</MyButton>
          <PostList state={state}/>
      </div>
    </div>
  );
}

export default App;
