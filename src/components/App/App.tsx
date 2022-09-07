import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";
import {fetchUsers} from "../../store/reducers/ActionCreators";
import {postAPI} from "../../services/PostService";

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    const {data: posts, error: postsError, isLoading: postsIsLoading} = postAPI.useFetchAllPostsQuery(5);
    return (
        <div className="App">
            <h2>Пользователи</h2>
            {isLoading && <h2>Идет загрузка...</h2>}
            {error && <h2>Произошла ошибка! {error}</h2>}
            {users.map(user => (
                <div key={user.id}>
                    <span>Name: {user.name}. </span>
                    <span>Email: {user.email}. </span>
                </div>
            ))}
            <h2>Посты</h2>
            {postsIsLoading && <h2>Идет загрузка...</h2>}
            {postsError && <h2>Произошла ошибка!</h2>}
            {posts && posts.map(post => (
                <div key={post.id}>
                    <span>Title: {post.title}</span>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
