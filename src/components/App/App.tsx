import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";
import {fetchUsers} from "../../store/reducers/ActionCreators";

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            {isLoading && <h2>Идет загрузка...</h2>}
            {error && <h2>Произошла ошибка! {error}</h2>}
            {users.map(user => (
                <div key={user.id}>
                    <span>Name: {user.name}. </span>
                    <span>Email: {user.email}. </span>
                </div>
            ))}
        </div>
    );
}

export default App;
