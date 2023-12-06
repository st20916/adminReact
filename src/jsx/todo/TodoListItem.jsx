import React, { useState } from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { text, id } = todo
        , [ isChecked, setIsChecekd ] = useState(false);

    const handleCheckChange = () => {
        // 현재 상태의 반대 값으로 업데이트
        setIsChecekd(!isChecked);
    };

    return (
        <div className="todo-list--item">
            <input type='hidden' value={id} />
            <input 
                type="checkbox"
                name="todo"
                className="todo-check"
                checked={isChecked}
                onChange={handleCheckChange}
            />
            <p className="todo-text" onClick={() => onToggle(id)}>{text}</p>
            <button 
                type="button"
                className="btn"
                onClick={() => onRemove(id)}
            >
                <i className="ri-subtract-line"></i>
            </button>
        </div>
    );
};

export default TodoListItem;