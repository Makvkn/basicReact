import logo from './logo.svg';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import AddPost from "./components/UI/AddPost";
import {useEffect, useMemo, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import {getPageCount, getPagesArray, getPostsCount} from "./utils/pages";

function App() {
//USEsTATE
    const [state, setState] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPost = usePosts(state, filter.sort, filter.query)
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [totalPage, setTotalPage] = useState('0')
    const [limit, setLimit] = useState('10')
    const [page, setPage] = useState('1')



//request
    async function fetchPosts() {
        setIsPostLoading(true)
            const response = await PostService.getAll(limit, page)
            setState(response.data)
            setIsPostLoading(false)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))


    }
    let pageArray = getPagesArray(totalPage)
    console.log(pageArray)

    useEffect(() => {
        fetchPosts()
    },[])


//CREATE
    const createPost = (newPost) => {
        setState([...state, newPost])
    }
//REMOVE
    const removePost = (post) => {
        setState(state.filter(item => item.id !== post.id))
    }

    return (
        <div className="container">
            <button onClick={fetchPosts}>Fetch</button>
            <div className="App-header">
                <div style={{display: 'flex'}}>
                    {pageArray.map(p =>
                        <MyButton
                            onClick={() => setPage(p)}
                            className='myButton'>{p}</MyButton>
                    )}
                </div>
                <AddPost create={createPost}/>
                <hr style={{margin: '15px '}}/>
                <div>
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
                <PostList state={sortedAndSearchedPost} removePost={removePost}/>

            </div>
        </div>
    );
}

export default App;
