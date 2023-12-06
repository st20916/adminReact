import React, { useState, useRef, useCallback } from 'react';
import UserList from '../users/userList';
import TodoTemplate from '../jsx/todo/TodoTemplate';
import TodoInsert from '../jsx/todo/TodoInsert';
import TodoList from '../jsx/todo/TodoList';

const BodyArea = ({ username, roleName }) => {
    const [ todos, setTodos ] = useState([]);

    // 고유값으로 사용 될 ID
    // ref를 사용하여 변수 담기
    const nextId = useRef(0)
        , onInsert = useCallback(
            text => {
                const todo = {
                    id: nextId.current,
                    text,
                    checked: false,
                };
                setTodos(todos.concat(todo));
                nextId.current += 1;
            },
            [todos],
        )
        , onRemove = useCallback(
            id => {
                setTodos(todos.filter(todo => todo.id !== id));
            },
            [todos],
        )
        , onToggle = useCallback(
            id => {
                setTodos(
                    todos.map(todo =>
                        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                    ),
                );
            },
            [todos],
        );

    return (
        <div className='App-container'>
            {username ? (
                <>
                    {roleName === '관리자' ? (
                        <>
                            <UserList />
                            <TodoTemplate>
                                <TodoInsert onInsert={onInsert} />
                                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
                            </TodoTemplate>
                        </>
                    ) : (
                        <TodoTemplate>
                            <TodoInsert onInsert={onInsert} />
                            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
                        </TodoTemplate>
                    )}
                </>
            ) : (
                <>
                    <p>로그인 안 한 메인</p>
                </>
            )}
        </div>
    );
};

export default BodyArea;